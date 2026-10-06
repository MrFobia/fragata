// Festival de Fish Market: carta de 30 platos numerados por categoría, pestañas que siguen el scroll,
// hoja del plato y formulario "¿Ya probaste?" (simulado, sin backend).
import { data, platos, IMG, cop, pad, slug, dishCard, catPlate, tilts, fitStacks, watchPaste, flash, reduced } from "./fm.js";

const carta = document.querySelector("[data-carta]");
const tabs = document.querySelector("[data-tabs]");

// ——— Carta: un cartel de categoría y debajo sus platos ———
let k = 0;
carta.innerHTML = data.categorias
  .map((cat, i) => {
    const items = platos.filter((p) => p.categoria === cat.nombre);
    const from = pad(items[0].n), to = pad(items.at(-1).n);
    const cards = items.map((p) => `<li class="paste" style="--d:${(k++ % 4) * 60}ms" id="${slug(p.nombre)}">${dishCard(p, { tag: "button", tilt: tilts[p.n % tilts.length], showCat: false })}</li>`).join("");
    return `<section class="scroll-mt-36 pt-14" id="cat-${slug(cat.nombre)}" aria-labelledby="h-${slug(cat.nombre)}" data-cat="${i}">
      <header class="poster poster-wide ${i % 2 ? "poster-paper" : ""} paste mb-8 grid gap-3 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-end lg:px-8" style="--tilt:${i % 2 ? 0.8 : -0.8}deg">
        <div class="relative z-[3]">
          <p class="num text-[1.05rem] ${i % 2 ? "text-[#a33f17]" : "text-[#f2b07d]"}">N.º ${from}${from !== to ? `–${to}` : ""}</p>
          <h3 id="h-${slug(cat.nombre)}" class="stack ${i % 2 ? "stack-ink" : ""} mt-1" data-fit data-fit-max="120"><span>${cat.nombre}</span></h3>
        </div>
        ${cat.nota ? `<p class="relative z-[3] max-w-[36ch] text-[1rem] leading-snug ${i % 2 ? "text-[#344d82]" : "text-[#e9e2d1]/85"}">${cat.nota}</p>` : ""}
      </header>
      <ul class="grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-10" role="list">${cards}</ul>
    </section>`;
  })
  .join("");
fitStacks(carta);
watchPaste(carta);

// ——— Pestañas: llevan a cada categoría y marcan la que está en pantalla ———
tabs.innerHTML = data.categorias
  .map((c) => `<a class="tab" href="#cat-${slug(c.nombre)}" data-tab="${slug(c.nombre)}">${c.nombre}<span class="c">${c.platos.length}</span></a>`)
  .join("");
const tabEls = [...tabs.querySelectorAll(".tab")];
function markTab(i) {
  tabEls.forEach((t, j) => (j === i ? t.setAttribute("aria-current", "true") : t.removeAttribute("aria-current")));
  tabEls.forEach((t, j) => t.setAttribute("aria-selected", String(j === i)));
  const t = tabEls[i];
  tabs.scrollTo({ left: t.offsetLeft - (tabs.clientWidth - t.offsetWidth) / 2, behavior: reduced ? "auto" : "smooth" });
}
const catIo = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && markTab(+e.target.dataset.cat)),
  { rootMargin: "-30% 0px -60% 0px" }
);
carta.querySelectorAll("[data-cat]").forEach((s) => catIo.observe(s));
markTab(0);

// ——— Adiciones ———
document.querySelector("[data-extras]").innerHTML = `
  <div class="poster poster-green poster-wide paste max-w-3xl px-5 py-6 lg:px-8" style="--tilt:-0.5deg">
    <div class="relative z-[3]">
      <h3 class="stack stack-ink" data-fit data-fit-max="64"><span class="!text-[#14224f]">Adiciones</span></h3>
      <ul class="mt-5 grid gap-4 sm:grid-cols-2" role="list">${data.adiciones
        .map((a) => `<li class="flex items-baseline justify-between gap-4 border-t-2 border-[#14224f]/25 pt-3"><span><span class="block font-[Figtree] text-[1.2rem] font-extrabold">${a.nombre}</span><span class="text-[0.95rem]">${a.desc}</span></span><span class="font-[Figtree] font-extrabold">${cop(a.precio)}</span></li>`)
        .join("")}</ul>
    </div>
  </div>`;
fitStacks(document.querySelector("[data-extras]"));
watchPaste(document.querySelector("[data-extras]"));

// ——— Hoja del plato ———
const sheet = document.querySelector("[data-sheet]");
const media = sheet.querySelector("[data-sheet-media]");
function openSheet(p) {
  sheet.querySelector("[data-sheet-n]").textContent = pad(p.n);
  sheet.querySelector("[data-sheet-cat]").textContent = p.categoria;
  sheet.querySelector("[data-sheet-name]").textContent = p.nombre;
  sheet.querySelector("[data-sheet-desc]").textContent = p.desc;
  sheet.querySelector("[data-sheet-price]").textContent = cop(p.precio);
  media.innerHTML = p.foto
    ? `<img src="${IMG}${p.foto}.webp" alt="${p.nombre} visto desde arriba con flash sobre mantel azul" width="1200" height="1200"><span class="date-stamp" aria-hidden="true">10 '26</span>`
    : catPlate(p);
  if (!p.foto) fitStacks(media);
  sheet.querySelector("[data-sheet-rate]").onclick = () => {
    sheet.close();
    dishSelect.value = `${p.categoria}::${p.nombre}`;
  };
  sheet.showModal();
  requestAnimationFrame(() => flash(media));
  history.replaceState(null, "", `#${slug(p.nombre)}`);
}
carta.addEventListener("click", (e) => {
  const b = e.target.closest("[data-dish]");
  if (b) openSheet(platos[+b.dataset.dish - 1]);
});
sheet.querySelector("[data-sheet-close]").addEventListener("click", () => sheet.close());
sheet.addEventListener("click", (e) => e.target === sheet && sheet.close());
sheet.addEventListener("close", () => history.replaceState(null, "", location.pathname));

// ——— ¿Ya probaste? ———
const form = document.querySelector("[data-probaste]");
const dishSelect = form.querySelector("[data-dish-select]");
data.categorias.forEach((cat) => {
  const g = document.createElement("optgroup");
  g.label = cat.nombre;
  platos.filter((p) => p.categoria === cat.nombre).forEach((p) => g.append(new Option(`${pad(p.n)} · ${p.nombre}`, `${cat.nombre}::${p.nombre}`)));
  dishSelect.append(g);
});

const radios = (box, values, cls, ends) => {
  const name = box.dataset.scale || box.dataset.yesno;
  const wrap = document.createElement("div");
  wrap.className = cls;
  wrap.setAttribute("role", "radiogroup");
  wrap.setAttribute("aria-labelledby", `l-${name}`);
  wrap.innerHTML = values.map((v) => `<span><input type="radio" id="${name}-${v}" name="${name}" value="${v}"><label for="${name}-${v}">${v}</label></span>`).join("");
  box.append(wrap);
  if (ends) {
    const e = document.createElement("div");
    e.className = "flex justify-between text-[0.85rem] text-[#344d82]";
    e.innerHTML = "<span>Nada</span><span>Mucho</span>";
    box.append(e);
  }
};
form.querySelectorAll("[data-scale]").forEach((b) => radios(b, [1, 2, 3, 4, 5], "scale", true));
form.querySelectorAll("[data-yesno]").forEach((b) => radios(b, ["Sí", "No"], "yesno"));

const messages = {
  nombre: "Escribe tu nombre.",
  telefono: "Escribe un teléfono para contactarte.",
  correo: "Revisa el correo: parece incompleto.",
  plato: "Elige el plato que probaste.",
};
function validate(input) {
  const bad = (input.required && !input.value.trim()) || (input.type === "email" && input.value && !input.validity.valid);
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
const inputs = [...form.querySelectorAll(".input")].filter((i) => messages[i.name]);
inputs.forEach((i) => {
  i.addEventListener("blur", () => i.value && validate(i));
  i.addEventListener("input", () => i.getAttribute("aria-invalid") === "true" && validate(i));
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const ok = inputs.map(validate).every(Boolean);
  const consent = form.elements.datos;
  form.querySelector('[data-error-for="datos"]').hidden = consent.checked;
  if (!ok || !consent.checked) {
    (inputs.find((i) => i.getAttribute("aria-invalid") === "true") || consent).focus();
    return;
  }
  const btn = form.querySelector('[type="submit"]');
  btn.disabled = true;
  btn.textContent = "Enviando…";
  await new Promise((r) => setTimeout(r, 700)); // Prototipo: sin backend todavía.
  const [, plato] = dishSelect.value.split("::");
  const okBox = document.querySelector("[data-probaste-ok]");
  okBox.querySelector("[data-ok-text]").textContent = `${form.elements.nombre.value.trim().split(" ")[0]}, lo que nos contaste de ${plato} ayuda al chef a afinar el festival.`;
  form.hidden = true;
  okBox.classList.remove("hidden");
  okBox.focus();
});

// ——— Enlaces desde Inicio: #el-costero abre la hoja, #Ceviches baja a la categoría ———
const hash = decodeURIComponent(location.hash.slice(1));
if (hash) {
  const p = platos.find((x) => slug(x.nombre) === hash);
  const cat = data.categorias.find((c) => c.nombre === hash || slug(c.nombre) === hash);
  requestAnimationFrame(() => {
    if (p) {
      document.getElementById(slug(p.nombre))?.scrollIntoView({ block: "center" });
      openSheet(p);
    } else if (cat) document.getElementById(`cat-${slug(cat.nombre)}`)?.scrollIntoView();
  });
}
