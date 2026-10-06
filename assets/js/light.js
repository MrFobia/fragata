// Rig de luz: la hora (12 a 22) define el color del mantel, la tinta, la sombra del ventanal
// y la luz de vela. En Inicio y Festival la hora sale del scroll (secciones con data-hour);
// en Reservas la fija la hora elegida (setHour).

// Paleta de la luz por marca: mantel de día → atardecer → noche.
const STOPS_BY_BRAND = {
  // Mantel de día → atardecer → noche: el fondo cambia de tono al bajar.
  giratorio: [
    { h: 12, cloth: "#e8ecf1", o: 0.2, lamp: 0 },
    { h: 15, cloth: "#dfe4eb", o: 0.24, lamp: 0 },
    { h: 17.2, cloth: "#c2c4ab", o: 0.22, lamp: 0 },
    { h: 18, cloth: "#646637", o: 0.2, lamp: 0.25 },
    { h: 19.6, cloth: "#2b344a", o: 0.07, lamp: 0.75 },
    { h: 21.5, cloth: "#17213a", o: 0, lamp: 1 },
  ],
  fishmarket: [
    { h: 12, cloth: "#f2ecdf", o: 0.2, lamp: 0 },
    { h: 15, cloth: "#e9e2d1", o: 0.24, lamp: 0 },
    { h: 17.2, cloth: "#d8cdb3", o: 0.22, lamp: 0 },
    { h: 18, cloth: "#2d4f8a", o: 0.12, lamp: 0.3 },
    { h: 19.6, cloth: "#223a84", o: 0.06, lamp: 0.75 },
    { h: 21.5, cloth: "#182a61", o: 0, lamp: 1 },
  ],
};
// Texto secundario según el mantel: claro, medio y oscuro.
const MUTED_BY_BRAND = {
  giratorio: { light: "#33466a", mid: "#17213a", dark: "#e6e9ee", night: "#c3ccdb" },
  fishmarket: { light: "#344d82", mid: "#223a84", dark: "#efe9dc", night: "#cfd6e6" },
};

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const root = document.documentElement;
const BRAND = STOPS_BY_BRAND[root.dataset.brand] ? root.dataset.brand : "giratorio";
const STOPS = STOPS_BY_BRAND[BRAND];
const MUTED = MUTED_BY_BRAND[BRAND];
const css = getComputedStyle(root);
const INK = css.getPropertyValue("--brand-ink").trim() || "#17213a";
const ON_DARK = css.getPropertyValue("--brand-on-dark").trim() || "#eef1f5";

const hex = (c) => [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16));
const lerp = (a, b, t) => a + (b - a) * t;
const lum = ([r, g, b]) => {
  const f = (v) => ((v /= 255) <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};

function sample(hour) {
  const h = Math.min(21.5, Math.max(12, hour));
  let i = STOPS.findIndex((s) => s.h >= h);
  if (i <= 0) i = 1;
  const a = STOPS[i - 1];
  const b = STOPS[i];
  const t = (h - a.h) / (b.h - a.h || 1);
  const ca = hex(a.cloth);
  const cb = hex(b.cloth);
  const rgb = ca.map((v, k) => Math.round(lerp(v, cb[k], t)));
  return { h, rgb, o: lerp(a.o, b.o, t), lamp: lerp(a.lamp, b.lamp, t) };
}

let current = 12;

export function setHour(hour) {
  current = hour;
  const { h, rgb, o, lamp } = sample(hour);
  const L = lum(rgb);
  const dark = L < 0.2;
  root.style.setProperty("--cloth", `rgb(${rgb.join(" ")})`);
  root.style.setProperty("--ink-on", dark ? ON_DARK : INK);
  root.style.setProperty("--muted-on", dark ? (L < 0.06 ? MUTED.night : MUTED.dark) : L < 0.5 ? MUTED.mid : MUTED.light);
  root.style.setProperty("--shadow-o", o.toFixed(3));
  root.style.setProperty("--night", lamp.toFixed(3));
  root.dataset.tone = dark ? "dark" : "light";
  if (!reduced) {
    root.style.setProperty("--shadow-a", `${(-20 - (h - 12) * 5).toFixed(2)}deg`);
    root.style.setProperty("--shadow-x", `${(-(h - 12) * 3).toFixed(2)}vmax`);
    // La sombra del plato se alarga y gira con la tarde: el sol baja y se corre.
    const len = 14 + (h - 12) * 3.2;
    const ang = ((40 + (h - 12) * 9) * Math.PI) / 180;
    root.style.setProperty("--psx", `${(Math.cos(ang) * len * (1 - lamp)).toFixed(1)}px`);
    root.style.setProperty("--psy", `${(Math.sin(ang) * len * (1 - lamp) + 6).toFixed(1)}px`);
  }
  const label = formatHour(h);
  document.querySelectorAll("[data-hour-stamp]").forEach((el) => {
    if (el.textContent !== label) el.textContent = label;
  });
}

export function formatHour(h) {
  const total = Math.round(h * 60 / 5) * 5;
  const hh = Math.floor(total / 60);
  const mm = String(total % 60).padStart(2, "0");
  return `${hh}:${mm}`;
}

export const getHour = () => current;

// Hora por scroll: interpola entre los centros de las secciones con data-hour.
export function bindScrollHour() {
  const sections = [...document.querySelectorAll("[data-hour]")];
  if (!sections.length) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const mid = innerHeight * 0.5;
    const pts = sections.map((s) => {
      const r = s.getBoundingClientRect();
      return { y: r.top + Math.min(r.height, innerHeight) * 0.5, h: parseFloat(s.dataset.hour) };
    });
    let hour = pts[0].h;
    if (mid >= pts[pts.length - 1].y) hour = pts[pts.length - 1].h;
    else {
      for (let i = 0; i < pts.length - 1; i++) {
        if (mid >= pts[i].y && mid < pts[i + 1].y) {
          const t = (mid - pts[i].y) / (pts[i + 1].y - pts[i].y);
          hour = lerp(pts[i].h, pts[i + 1].h, t);
        }
      }
    }
    setHour(hour);
    spinPlates();
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  update();
}

// Los platos giran unos grados mientras cruzan la pantalla: el salón gira, la mesa no.
function spinPlates() {
  if (reduced) return;
  document.querySelectorAll("[data-spin]").forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const p = (r.top + r.height / 2) / innerHeight - 0.5;
    const k = parseFloat(el.dataset.spin) || 1;
    el.style.transform = `rotate(${(p * -28 * k).toFixed(2)}deg)`;
  });
}
