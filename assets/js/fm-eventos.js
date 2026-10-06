// Eventos de Fish Market: momentos, Casa Fish Market 77 (fotos, datos, distribuciones), menús,
// experiencias, calendario y cotizador que abre WhatsApp (Mapa v0.2: +57 314 597 4455).
import { eventos } from "./data/eventos.js";
import { pad, fitStacks, watchPaste, tilts, reduced } from "./fm.js";

const data = eventos.fishmarket;
const sp = data.espacios[0];
const $ = (s) => document.querySelector(s);
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const wa = (text) => `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(text)}`;

// ——— Momentos ———
$("[data-intro]").innerHTML = data.intro.map((p) => `<p>${esc(p)}</p>`).join("");
$("[data-momentos]").innerHTML = data.momentos
  .map(
    (m, i) => `<article class="poster poster-wide ${i ? "poster-paper" : ""} paste px-5 py-6 lg:px-8 lg:py-8" style="--tilt:${i ? 0.8 : -0.8}deg; --d:${i * 120}ms">
      <div class="relative z-[3]">
        <h3 class="stack ${i ? "stack-ink" : ""}" data-fit data-fit-max="88"><span>${esc(m.nombre)}</span></h3>
        <p class="hand mt-3 text-[1.25rem] leading-snug ${i ? "text-[#a33f17]" : "text-[#f2b07d]"}">${esc(m.lema)}</p>
        <ul class="mt-6 flex flex-wrap gap-2" role="list">
          ${m.items.map((t) => `<li class="rounded-[0.3rem] px-3 py-1.5 text-[0.9rem] font-semibold ${i ? "bg-[#223a84] text-[#e9e2d1]" : "bg-[#e9e2d1] text-[#223a84]"}">${esc(t)}</li>`).join("")}
        </ul>
      </div>
    </article>`
  )
  .join("");

// ——— Espacio ———
$("[data-space-desc]").textContent = sp.desc;
$("[data-space-photos]").innerHTML = sp.fotos
  .map(
    (f, i) => `<li class="paste" style="--d:${i * 90}ms"><figure class="fm-photo aspect-[4/3]" style="rotate:${tilts[i] * 0.6}deg">
      <img src="${f.src}-800.webp" srcset="${f.src}-800.webp 800w, ${f.src}.webp 1600w" sizes="(min-width: 64rem) 34rem, 84vw" alt="${esc(f.alt)}" loading="lazy" class="${f.src.endsWith("salon") ? "object-[50%_60%]" : ""}">
      <figcaption class="fm-cap">${pad(i + 1)} · ${["Terraza de noche", "Terraza de día", "Salón"][i]}</figcaption>
    </figure></li>`
  )
  .join("");

const [min, max] = sp.capacidad;
$("[data-space-facts]").innerHTML = `
  <div class="poster poster-green poster-strip px-5 py-4" style="--tilt:-1deg"><div class="relative z-[3]">
    <dt class="text-[0.8rem] font-bold uppercase tracking-[0.14em]">Capacidad</dt>
    <dd class="num mt-1 text-[3.2rem] leading-none">${min} – ${max}<span class="ml-2 font-[Filson_Pro] text-[1rem] font-extrabold uppercase tracking-[0.06em]">personas</span></dd>
  </div></div>
  <div class="grid grid-cols-[7rem_1fr] gap-4 border-t-2 border-[#e9e2d1]/20 pt-4"><dt class="muted font-semibold">Dirección</dt><dd>${esc(sp.direccion)}, Bogotá</dd></div>
  <div class="grid grid-cols-[7rem_1fr] gap-4 border-t-2 border-[#e9e2d1]/20 pt-4"><dt class="muted font-semibold">Horario</dt><dd>${esc(sp.horario)}</dd></div>
  <div class="grid grid-cols-[7rem_1fr] gap-4 border-t-2 border-[#e9e2d1]/20 pt-4"><dt class="muted font-semibold">Incluye</dt><dd>${esc(sp.incluye)}</dd></div>`;

// Distribuciones: pestañas que cambian el plano
const planTabs = $("[data-plan-tabs]");
const planImg = $("[data-plan-img]");
const planCap = $("[data-plan-cap]");
planTabs.innerHTML = sp.distribuciones
  .map((d, i) => `<button type="button" role="tab" class="tab" id="plan-${i}" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">${esc(d.nombre)}</button>`)
  .join("");
function showPlan(i) {
  const d = sp.distribuciones[i];
  planTabs.querySelectorAll(".tab").forEach((t, k) => {
    t.setAttribute("aria-selected", String(k === i));
    t.tabIndex = k === i ? 0 : -1;
  });
  const swap = () => {
    planImg.src = d.plano;
    planImg.alt = d.alt;
    planCap.innerHTML = `<span>${esc(d.nombre)}</span><span class="text-[#a33f17]">${esc(d.capacidad)}</span>`;
  };
  if (document.startViewTransition && !reduced) document.startViewTransition(swap);
  else swap();
}
planTabs.addEventListener("click", (e) => {
  const t = e.target.closest(".tab");
  if (t) showPlan([...planTabs.children].indexOf(t));
});
planTabs.addEventListener("keydown", (e) => {
  const all = [...planTabs.children];
  const at = all.findIndex((t) => t.getAttribute("aria-selected") === "true");
  const next = e.key === "ArrowRight" ? at + 1 : e.key === "ArrowLeft" ? at - 1 : null;
  if (next === null) return;
  const i = (next + all.length) % all.length;
  showPlan(i);
  all[i].focus();
});
showPlan(0);

// ——— Menús ———
$("[data-menus]").innerHTML = data.menus
  .map(
    (m, i) => `<li class="reveal is-in grid content-start gap-2 border-t-2 border-[#e9e2d1]/20 py-6">
      <span class="num text-[1.2rem] text-[#f2b07d]">${pad(i + 1)}</span>
      <h3 class="text-[1.45rem] leading-tight">${esc(m.nombre)}</h3>
      <p class="muted text-[0.98rem] leading-relaxed">${esc(m.desc)}</p>
    </li>`
  )
  .join("");

// ——— Experiencias: la Travesía del Mar va en cartel propio ———
const [travesia, ...resto] = data.experiencias;
$("[data-experiencias]").innerHTML = `
  <article class="poster poster-orange poster-wide paste px-6 py-7 lg:px-9 lg:py-9" style="--tilt:-1deg">
    <div class="relative z-[3]">
      <p class="hand text-[1.4rem] leading-none">La experiencia de la casa</p>
      <h3 class="stack stack-ink mt-2" data-fit data-fit-max="110"><span class="!text-white">La Travesía</span><span class="!text-[#14224f]">del Mar</span></h3>
      <p class="mt-5 max-w-[52ch] text-[1.06rem] leading-relaxed">${esc(travesia.desc)}</p>
    </div>
  </article>
  <ul class="grid gap-3 sm:grid-cols-3" role="list">${resto
    .map((e, i) => `<li class="poster poster-paper paste px-4 py-5" style="--tilt:${[0.8, -0.6, 1][i]}deg; --d:${(i + 1) * 90}ms"><span class="relative z-[3] block font-[Filson_Pro] text-[1.15rem] font-extrabold leading-tight">${esc(e.nombre)}</span></li>`)
    .join("")}</ul>`;

// ——— Calendario ———
$("[data-calendario]").innerHTML = data.calendario
  .map(
    (c) => `<li class="ticket paste px-6 py-5" style="--tilt:1.2deg">
      <div class="flex items-baseline gap-4">
        <span class="num text-[3.4rem] leading-none text-[#a33f17]">${new Date(c.fecha + "T12:00").getDate()}</span>
        <span><span class="block font-[Filson_Pro] text-[1.25rem] font-extrabold">${esc(c.nombre)}</span><span class="text-[0.92rem] text-[#344d82]">${esc(c.dia)} · ${esc(c.desc)}</span></span>
      </div>
      <a class="fm-btn fm-btn-book mt-4 w-full" href="${wa(`Hola, quiero reservar cupo para la ${c.nombre} (${c.dia}) en Fish Market.`)}" target="_blank" rel="noopener">Reservar cupo</a>
    </li>`
  )
  .join("");

fitStacks();
watchPaste();

// ——— Cotizador ———
const form = $("[data-cotizar]");
const fill = (select, items) => items.forEach((t) => select.append(new Option(t, t)));
data.momentos.forEach((m) => {
  const g = document.createElement("optgroup");
  g.label = m.nombre;
  m.items.forEach((i) => g.append(new Option(i, i)));
  form.elements.tipo.append(g);
});
fill(form.elements.menu, data.menus.map((m) => m.nombre));
fill(form.elements.experiencia, ["Sin experiencia", ...data.experiencias.map((e) => e.nombre), "Otra"]);
form.elements.experiencia.addEventListener("change", (e) => ($("[data-exp-otra]").hidden = e.target.value !== "Otra"));
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
  if (!required.map(check).every(Boolean)) return required.find((i) => i.getAttribute("aria-invalid") === "true").focus();
  const v = Object.fromEntries(new FormData(form));
  const lines = [
    "Hola, quiero cotizar un evento en Fish Market.",
    "",
    `Nombre: ${v.nombre}`,
    `Evento: ${v.evento}`,
    `Personas: ${v.personas}`,
    `Fecha y hora: ${fmtDate.format(new Date(v.fecha))}`,
    `Lugar: ${v.lugar === "tuyos" ? "En mi propio espacio" : "Casa Fish Market 77"}`,
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
