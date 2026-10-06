// Fish Market — comportamiento compartido del mundo «Cartel chicha»:
// letras apiladas a todo el ancho, carteles que se pegan al entrar, cinta de formas,
// flash sobre las fotos, filas arrastrables y el plato recortado que gira con el scroll.
import { festival } from "./data/festival.js";

export const data = festival.fishmarket;
export const IMG = "../assets/img/fishmarket/platos/";
export const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
export const cop = (n) => (n == null ? "" : `$${n.toLocaleString("es-CO")}`);
export const pad = (n) => String(n).padStart(2, "0");
export const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// Numeración única del festival: 01 a 30 en el orden de la carta.
export const platos = [];
data.categorias.forEach((cat) =>
  cat.platos.forEach((p) => platos.push({ ...p, categoria: cat.nombre, n: platos.length + 1 }))
);

// ——— Letras rotuladas: cada letra con un giro y un salto pequeños, fijos por posición ———
function letterize(stack) {
  if (stack.dataset.lettered) return;
  stack.dataset.lettered = "1";
  if (!stack.closest("[aria-hidden='true']") && !stack.hasAttribute("aria-label")) stack.setAttribute("aria-label", stack.textContent.trim());
  let k = 0;
  stack.querySelectorAll(":scope > span").forEach((line) => {
    line.setAttribute("aria-hidden", "true");
    line.innerHTML = [...line.textContent]
      .map((ch) => {
        if (ch === " ") return " ";
        k++;
        const r = (((k * 37) % 7) - 3) * 0.7;
        const y = (((k * 53) % 5) - 2) * 0.012;
        return `<i style="--r:${r.toFixed(1)}deg;--y:${y.toFixed(3)}em">${ch}</i>`;
      })
      .join("");
  });
}

// ——— Letras apiladas: cada palabra ocupa exactamente el ancho de su cartel ———
export function fitStacks(root = document) {
  root.querySelectorAll(".stack").forEach(letterize);
  root.querySelectorAll("[data-fit]").forEach((stack) => {
    const w = stack.clientWidth;
    if (!w) return;
    stack.querySelectorAll(":scope > span").forEach((line) => {
      // offsetWidth con width: max-content: ancho real del texto (la grilla estira a sus hijos), sin el giro ni la escala del cartel.
      line.style.setProperty("--fit", "100px");
      line.style.width = "max-content";
      const natural = line.offsetWidth;
      line.style.width = "";
      const max = parseFloat(stack.dataset.fitMax || "999");
      line.style.setProperty("--fit", `${Math.min(max, (100 * w) / natural) * 0.97}px`);
    });
  });
}
let fitRaf;
addEventListener("resize", () => {
  cancelAnimationFrame(fitRaf);
  fitRaf = requestAnimationFrame(() => fitStacks());
});
document.fonts?.ready.then(() => fitStacks());
fitStacks();

// ——— Carteles que se pegan al muro ———
const pasteIo = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("is-in");
      pasteIo.unobserve(e.target);
    }),
  { rootMargin: "0px 0px -6% 0px" }
);
export function watchPaste(root = document) {
  root.querySelectorAll(".paste:not(.is-in)").forEach((el) => pasteIo.observe(el));
}
watchPaste();

// ——— Flash: un disparo de cámara al pasar o tocar una foto ———
export function flash(frame) {
  if (reduced || !frame) return;
  frame.classList.remove("pop");
  void frame.offsetWidth;
  frame.classList.add("pop");
}
document.addEventListener("pointerover", (e) => {
  const card = e.target.closest?.("[data-flash]");
  if (card && !card.contains(e.relatedTarget)) flash(card.querySelector(".flash-frame"));
});
document.addEventListener("focusin", (e) => {
  const card = e.target.closest?.("[data-flash]");
  if (card) flash(card.querySelector(".flash-frame"));
});

// ——— Cinta: se duplica para el bucle ———
document.querySelectorAll(".marquee-track").forEach((track) => {
  const copy = track.firstElementChild.cloneNode(true);
  copy.setAttribute("aria-hidden", "true");
  track.append(copy);
});

// ——— Filas arrastrables con el mouse (en táctil es scroll nativo) ———
document.querySelectorAll(".drag-row").forEach((row) => {
  let x0 = 0, left0 = 0, down = false, moved = false;
  row.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    down = true;
    moved = false;
    x0 = e.clientX;
    left0 = row.scrollLeft;
  });
  addEventListener("pointermove", (e) => {
    if (!down) return;
    const dx = e.clientX - x0;
    if (Math.abs(dx) > 4 && !moved) {
      moved = true;
      row.classList.add("dragging");
    }
    if (moved) row.scrollLeft = left0 - dx;
  });
  addEventListener("pointerup", () => {
    if (!down) return;
    down = false;
    requestAnimationFrame(() => row.classList.remove("dragging"));
  });
});

// ——— El plato recortado gira unos grados con el scroll ———
const spinners = [...document.querySelectorAll("[data-spin]")];
if (spinners.length && !reduced) {
  let ticking = false;
  const spin = () => {
    ticking = false;
    spinners.forEach((el) => {
      const r = el.getBoundingClientRect();
      const t = (r.top + r.height / 2) / innerHeight - 0.5;
      el.style.rotate = `${t * -18}deg`;
    });
  };
  addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(spin);
    }
  }, { passive: true });
  spin();
}

// ——— Tarjeta de plato (cartelito numerado) ———
export function dishCard(p, { tilt = 0, eager = false, tag = "a", href, showCat = true } = {}) {
  const media = p.foto
    ? `<img src="${IMG}${p.foto}-640.webp" alt="${p.nombre}: ${p.desc}" width="640" height="640" ${eager ? "" : 'loading="lazy"'}>`
    : catPlate(p);
  const attrs = tag === "a" ? `href="${href || `festival.html#${slug(p.nombre)}`}"` : `type="button" data-dish="${p.n}"`;
  return `<${tag} ${attrs} class="dish-card" style="--tilt:${tilt}deg" data-flash>
    <span class="badge" aria-hidden="true">${pad(p.n)}</span>
    <span class="flash-frame">${media}${p.foto ? `<span class="date-stamp" aria-hidden="true">10 '26</span>` : ""}</span>
    <span class="body">
      ${showCat ? `<span class="hand text-[1rem] leading-none text-[#a33f17]">${p.categoria}</span>` : ""}
      <span class="name">${p.nombre}</span>
      <span class="sr-only">Número ${p.n}.</span>
      <span class="desc line-clamp-2">${p.desc}</span>
      <span class="price">${cop(p.precio)}</span>
    </span>
  </${tag}>`;
}

// Placa tipográfica para los platos que aún no tienen foto: el nombre del plato en letra de cartel,
// con el fondo de su categoría para que la carta no se vuelva una pared de placas iguales.
const plateInks = {
  Baos: ["#b9481b", "#fff", "#14224f"],
  "Nami Crunch": ["#8fa454", "#14224f", "#e9e2d1"],
  Makis: ["#14224f", "#e9e2d1", "#f2b07d"],
  Tatakis: ["#427ba2", "#fff", "#14224f"],
  Tartares: ["#e9e2d1", "#223a84", "#b9481b"],
  Tiraditos: ["#b9481b", "#fff", "#14224f"],
};
export function catPlate(p) {
  const nombre = typeof p === "string" ? p : p.nombre;
  const cat = typeof p === "string" ? p : p.categoria;
  const [bg, ink, alt] = plateInks[cat] || ["#14224f", "#e9e2d1", "#f2b07d"];
  const words = (nombre === cat ? nombre : nombre.replace(/^(Tataki|Tiradito|Nami|Maki) /, "")).split(" ");
  const lines = words.length > 3 ? [words.slice(0, 2).join(" "), words.slice(2).join(" ")] : words;
  return `<span class="cat-plate" style="--plate-bg:${bg}; --plate-ink:${ink}; --plate-alt:${alt}" aria-hidden="true">
    ${nombre === cat ? "" : `<span class="hand">${cat}</span>`}
    <span class="stack stack-ink" data-fit data-fit-max="${lines.length > 2 ? 46 : 72}">${lines.map((l) => `<span>${l}</span>`).join("")}</span>
  </span>`;
}

export const tilts = [-1.6, 1.1, -0.6, 1.8, -1.2, 0.7, -2, 1.4];
