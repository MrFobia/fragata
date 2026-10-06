// Página de Eventos: momentos, espacios con galería y distribuciones, menús, experiencias,
// calendario y cotizador. El cotizador abre WhatsApp con los datos (Mapa v0.2: llegan al +57 314 597 4455).
import { eventos } from "./data/eventos.js";
import { bindScrollHour } from "./light.js";

bindScrollHour();

const data = eventos[document.documentElement.dataset.brand];
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = (s) => document.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

// ——— Intro, momentos, menús, experiencias, calendario ———
$("[data-intro]").innerHTML = data.intro.map((p) => `<p class="reveal is-in">${esc(p)}</p>`).join("");

$("[data-momentos]").innerHTML = data.momentos
  .map(
    (m) => `<div>
      <h3 class="text-[1.9rem] leading-tight">${esc(m.nombre)}</h3>
      <p class="muted mt-2 text-[1.02rem]">${esc(m.lema)}</p>
      <ul class="mt-6 flex flex-wrap gap-2" role="list">
        ${m.items.map((i) => `<li class="tag">${esc(i)}</li>`).join("")}
      </ul>
    </div>`
  )
  .join("");

$("[data-menus]").innerHTML = data.menus
  .map(
    (m) => `<li class="grid gap-2 border-t border-current/20 pt-5">
      <h3 class="text-[1.6rem] leading-tight">${esc(m.nombre)}</h3>
      <p class="muted text-[1rem] leading-relaxed">${esc(m.desc)}</p>
    </li>`
  )
  .join("");

$("[data-experiencias]").innerHTML = data.experiencias
  .map(
    (e) => `<li class="grid gap-1.5 border-t border-current/20 pt-5">
      <h3 class="text-[1.5rem] leading-tight">${esc(e.nombre)}</h3>
      ${e.desc ? `<p class="muted max-w-[60ch] text-[1rem] leading-relaxed">${esc(e.desc)}</p>` : ""}
    </li>`
  )
  .join("");

const wa = (text) => `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(text)}`;
$("[data-calendario]").innerHTML = data.calendario
  .map(
    (c) => `<li class="grid gap-4 rounded-[1.25rem] p-5 shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--ink-on)_25%,transparent)]">
      <div class="flex items-baseline gap-4">
        <span class="font-display text-[2.6rem] leading-none tabular-nums">${new Date(c.fecha + "T12:00").getDate()}</span>
        <span><span class="block text-[1.15rem]">${esc(c.nombre)}</span><span class="muted text-[0.9rem]">${esc(c.dia)} · ${esc(c.desc)}</span></span>
      </div>
      <a class="btn btn-ghost" href="${wa(`Hola, quiero reservar cupo para la ${c.nombre} (${c.dia}) en La Fragata Giratorio.`)}" target="_blank" rel="noopener">Reservar cupo</a>
    </li>`
  )
  .join("");

// ——— Espacios ———
const tabs = $("[data-space-tabs]");
const indicator = tabs.querySelector(".chip-indicator");
const panel = $("[data-space-panel]");

data.espacios.forEach((sp, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "chip";
  b.role = "tab";
  b.id = `tab-${sp.id}`;
  b.setAttribute("aria-controls", "panel-espacio");
  b.setAttribute("aria-selected", String(i === 0));
  b.tabIndex = i === 0 ? 0 : -1;
  b.textContent = sp.nombre;
  b.addEventListener("click", () => selectSpace(i));
  tabs.append(b);
});

tabs.addEventListener("keydown", (e) => {
  const all = [...tabs.querySelectorAll(".chip")];
  const at = all.findIndex((t) => t.getAttribute("aria-selected") === "true");
  const next = e.key === "ArrowRight" ? at + 1 : e.key === "ArrowLeft" ? at - 1 : null;
  if (next === null) return;
  e.preventDefault();
  const i = (next + all.length) % all.length;
  selectSpace(i);
  all[i].focus();
});

function moveIndicator(btn) {
  indicator.style.width = `${btn.offsetWidth}px`;
  indicator.style.transform = `translateX(${btn.offsetLeft}px)`;
}

let current = 0;
function selectSpace(i, { instant = false } = {}) {
  current = i;
  const all = [...tabs.querySelectorAll(".chip")];
  all.forEach((t, k) => {
    t.setAttribute("aria-selected", String(k === i));
    t.tabIndex = k === i ? 0 : -1;
  });
  moveIndicator(all[i]);
  tabs.scrollTo({ left: all[i].offsetLeft - (tabs.clientWidth - all[i].offsetWidth) / 2, behavior: instant ? "auto" : "smooth" });
  panel.setAttribute("aria-labelledby", all[i].id);
  const render = () => renderSpace(data.espacios[i]);
  if (!instant && document.startViewTransition && !reduced) document.startViewTransition(render);
  else render();
}

// Escala de capacidad 0–500 como en el HTML original de eventos.
const MAX = 500;
function renderSpace(sp) {
  const [min, max] = sp.capacidad;
  panel.innerHTML = `
    <div class="layer-text mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-10">
      <div class="lg:col-span-7">
        <div class="gallery" data-gallery>
          ${sp.fotos
            .map(
              (f, k) => `<figure class="photo-frame aspect-[4/3]">
                <img src="${f.src}-800.webp" srcset="${f.src}-800.webp 800w, ${f.src}.webp 1600w" sizes="(min-width: 1024px) 56vw, 90vw" alt="${esc(f.alt)}" width="1600" height="1200" ${k ? 'loading="lazy"' : ""} class="photo">
              </figure>`
            )
            .join("")}
        </div>
        <p class="muted mt-3 text-[0.85rem] lg:hidden">Desliza para ver más fotos.</p>
      </div>
      <div class="lg:col-span-5">
        <h3 class="text-[clamp(2rem,6vw,3rem)] leading-[1.05]">${esc(sp.nombre)}</h3>
        <p class="mt-4 text-[1.05rem] leading-relaxed">${esc(sp.desc)}</p>
        <div class="mt-8">
          <p class="flex items-baseline justify-between"><span class="muted text-[0.9rem]">Capacidad</span><span class="font-display text-[1.6rem] tabular-nums">${min} – ${max} <span class="text-[1rem]">personas</span></span></p>
          <div class="capacity mt-3" role="img" aria-label="De ${min} a ${max} personas, en una escala de 0 a ${MAX}">
            <span style="left:${(min / MAX) * 100}%;width:${((max - min) / MAX) * 100}%"></span>
          </div>
          <p class="muted mt-1.5 flex justify-between text-[0.8rem] tabular-nums" aria-hidden="true"><span>0</span><span>250</span><span>500</span></p>
        </div>
        <dl class="mt-8 grid grid-cols-2 gap-6 text-[0.98rem]">
          <div><dt class="muted text-[0.85rem]">Horario</dt><dd class="mt-1">${esc(sp.horario)}</dd></div>
          ${sp.incluye ? `<div><dt class="muted text-[0.85rem]">Incluye</dt><dd class="mt-1">${esc(sp.incluye)}</dd></div>` : ""}
        </dl>
        <div class="mt-10">
          <p class="text-[0.95rem] font-medium">Distribuciones</p>
          <div class="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="Distribuciones de ${esc(sp.nombre)}" data-dists>
            ${sp.distribuciones
              .map((d, k) => `<button type="button" role="radio" class="tag tag-btn" aria-checked="${k === 0}" data-dist="${k}">${esc(d.nombre)}</button>`)
              .join("")}
          </div>
          <figure class="plan mt-5" data-plan></figure>
        </div>
        <button type="button" class="btn btn-book mt-10" data-quote-space="${esc(sp.nombre)}">Cotizar en ${esc(sp.nombre)}</button>
      </div>
    </div>`;
  const plan = panel.querySelector("[data-plan]");
  const showDist = (k) => {
    const d = sp.distribuciones[k];
    panel.querySelectorAll("[data-dist]").forEach((b) => b.setAttribute("aria-checked", String(+b.dataset.dist === k)));
    plan.innerHTML = `<img src="${d.plano}" alt="${esc(d.alt)}" loading="lazy">
      <figcaption class="flex items-baseline justify-between gap-4"><span>${esc(d.nombre)}${d.detalle ? ` · <span class="text-paper-muted">${esc(d.detalle)}</span>` : ""}</span><strong class="font-display text-[1.35rem] font-normal tabular-nums">${esc(d.capacidad)}</strong></figcaption>`;
  };
  panel.querySelector("[data-dists]").addEventListener("click", (e) => {
    const b = e.target.closest("[data-dist]");
    if (b) showDist(+b.dataset.dist);
  });
  showDist(0);
  panel.querySelector("[data-quote-space]").addEventListener("click", (e) => {
    form.elements.lugar.value = "nuestros";
    toggleLugar();
    espacio.value = e.currentTarget.dataset.quoteSpace;
    $("#cotizar").scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    setTimeout(() => form.elements.nombre.focus({ preventScroll: true }), reduced ? 0 : 700);
  });
}
addEventListener("resize", () => moveIndicator(tabs.querySelectorAll(".chip")[current]));

// ——— Cotizador ———
const form = $("[data-cotizar]");
const espacio = form.elements.espacio;
const fill = (sel, opts) => opts.forEach((o) => sel.append(typeof o === "string" ? new Option(o, o) : o));

fill(espacio, data.espacios.map((s) => s.nombre));
data.momentos.forEach((m) => {
  const g = document.createElement("optgroup");
  g.label = m.nombre;
  m.items.forEach((i) => g.append(new Option(i, i)));
  form.elements.tipo.append(g);
});
fill(form.elements.menu, data.menus.map((m) => m.nombre));
fill(form.elements.experiencia, ["Sin experiencia", ...data.experiencias.map((e) => e.nombre), "Otra"]);

const espacioField = $("[data-espacio-field]");
function toggleLugar() {
  espacioField.hidden = form.elements.lugar.value !== "nuestros";
}
form.querySelectorAll('[name="lugar"]').forEach((r) => r.addEventListener("change", toggleLugar));
form.elements.experiencia.addEventListener("change", (e) => ($("[data-exp-otra]").hidden = e.target.value !== "Otra"));

// Pesos colombianos con separador de miles mientras se escribe.
form.querySelectorAll("[data-money]").forEach((i) =>
  i.addEventListener("input", () => {
    const n = i.value.replace(/\D/g, "");
    i.value = n ? `$ ${Number(n).toLocaleString("es-CO")}` : "";
  })
);

const messages = {
  nombre: "Escribe tu nombre completo.",
  evento: "Ponle un nombre a tu evento.",
  personas: "Escribe cuántas personas esperas.",
  fecha: "Elige la fecha y hora del evento.",
  tipo: "Elige el tipo de evento.",
};

function check(input) {
  const bad = input.required && !String(input.value).trim();
  let err = input.parentElement.querySelector(".field-error");
  if (!err) {
    err = document.createElement("p");
    err.className = "field-error";
    err.id = `${input.id}-error`;
    input.parentElement.append(err);
    input.setAttribute("aria-describedby", err.id);
  }
  err.textContent = bad ? messages[input.name] : "";
  err.hidden = !bad;
  input.setAttribute("aria-invalid", String(bad));
  return !bad;
}

const required = [...form.querySelectorAll("[required]")];
required.forEach((i) => i.addEventListener("input", () => i.getAttribute("aria-invalid") === "true" && check(i)));

const fmtDate = new Intl.DateTimeFormat("es-CO", { dateStyle: "full", timeStyle: "short" });
const okBox = $("[data-cotizar-ok]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!required.map(check).every(Boolean)) {
    required.find((i) => i.getAttribute("aria-invalid") === "true").focus();
    return;
  }
  const v = Object.fromEntries(new FormData(form));
  const lines = [
    "Hola, quiero cotizar un evento en La Fragata Giratorio.",
    "",
    `Nombre: ${v.nombre}`,
    `Evento: ${v.evento}`,
    `Personas: ${v.personas}`,
    `Fecha y hora: ${fmtDate.format(new Date(v.fecha))}`,
    `Espacio: ${v.lugar === "tuyos" ? "En mi propio espacio" : v.espacio || "Sin preferencia"}`,
    `Tipo de evento: ${v.tipo}`,
    v.menu && `Menú: ${v.menu}`,
    v.experiencia && v.experiencia !== "Sin experiencia" && `Experiencia: ${v.experiencia === "Otra" ? v.expOtra || "Otra" : v.experiencia}`,
    (v.pmin || v.pmax) && `Presupuesto: ${v.pmin || "—"} a ${v.pmax || "—"}`,
    v.detalles && `Detalles: ${v.detalles}`,
  ].filter((l) => l !== false && l !== undefined && l !== "");
  const url = wa(lines.join("\n"));
  okBox.querySelector("[data-wa-link]").href = url;
  window.open(url, "_blank", "noopener");
  form.hidden = true;
  okBox.classList.remove("hidden");
  okBox.focus();
});

$("[data-cotizar-edit]").addEventListener("click", () => {
  okBox.classList.add("hidden");
  form.hidden = false;
  form.elements.nombre.focus();
});

// Inicio: el hash #bar-100 abre ese espacio.
const start = Math.max(0, data.espacios.findIndex((s) => `#${s.id}` === location.hash));
requestAnimationFrame(() => selectSpace(start, { instant: true }));
