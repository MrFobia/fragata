// Página del Festival: categorías, galería, hoja del plato y formulario "¿Ya probaste?" (simulado).
import { festival } from "./data/festival.js";
import { bindScrollHour } from "./light.js";

bindScrollHour();

const data = festival[document.documentElement.dataset.brand];
const IMG = "../assets/img/giratorio/platos-ia/";
const cop = (n) => (n == null ? "" : `$${n.toLocaleString("es-CO")}`);
const slug = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// ——— Categorías ———
const chips = document.querySelector("[data-chips]");
const indicator = chips.querySelector(".chip-indicator");
const gallery = document.querySelector("[data-gallery]");
const note = document.querySelector("[data-cat-note]");

data.categorias.forEach((cat, i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "chip";
  b.role = "tab";
  b.id = `tab-${slug(cat.nombre)}`;
  b.setAttribute("aria-controls", "galeria");
  b.setAttribute("aria-selected", String(i === 0));
  b.tabIndex = i === 0 ? 0 : -1;
  b.textContent = `${cat.nombre} · ${cat.platos.length}`;
  b.addEventListener("click", () => select(i));
  chips.append(b);
});
gallery.id = "galeria";
gallery.setAttribute("role", "tabpanel");

chips.addEventListener("keydown", (e) => {
  const tabs = [...chips.querySelectorAll(".chip")];
  const at = tabs.findIndex((t) => t.getAttribute("aria-selected") === "true");
  const next = e.key === "ArrowRight" ? at + 1 : e.key === "ArrowLeft" ? at - 1 : null;
  if (next === null) return;
  e.preventDefault();
  const i = (next + tabs.length) % tabs.length;
  select(i);
  tabs[i].focus();
});

function moveIndicator(btn) {
  indicator.style.width = `${btn.offsetWidth}px`;
  indicator.style.transform = `translateX(${btn.offsetLeft}px)`;
}

let active = 0;
function select(i, { instant = false } = {}) {
  active = i;
  const tabs = [...chips.querySelectorAll(".chip")];
  tabs.forEach((t, k) => {
    t.setAttribute("aria-selected", String(k === i));
    t.tabIndex = k === i ? 0 : -1;
  });
  moveIndicator(tabs[i]);
  const left = tabs[i].offsetLeft - (chips.clientWidth - tabs[i].offsetWidth) / 2;
  chips.scrollTo({ left, behavior: instant ? "auto" : "smooth" });
  gallery.setAttribute("aria-labelledby", tabs[i].id);
  const cat = data.categorias[i];
  note.textContent = cat.nota || "";
  const render = () => renderGallery(cat);
  if (!instant && document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.startViewTransition(render);
  } else render();
}

const catTitle = document.querySelector("[data-cat-title]");
const preview = document.querySelector("[data-preview]");
const previewImg = preview.querySelector("[data-preview-img]");
const previewN = preview.querySelector("[data-preview-n]");
const previewName = preview.querySelector("[data-preview-name]");

function showPreview(p, k) {
  if (!p.foto) return;
  const src = `${IMG}${p.foto}-640.webp`;
  if (!previewImg.src.endsWith(src)) previewImg.src = src;
  previewN.textContent = `N.º ${String(k + 1).padStart(2, "0")}`;
  previewName.textContent = p.nombre;
}

function renderGallery(cat) {
  catTitle.textContent = cat.nombre;
  gallery.innerHTML = cat.platos
    .map((p, k) => {
      const thumb = p.foto
        ? `<span class="photo-frame mr-4 size-[4.5rem] shrink-0 lg:hidden"><img src="${IMG}${p.foto}-640.webp" alt="" width="640" height="640" loading="lazy" class="photo"${p.foto === "costa-limena" ? "" : ` style="view-transition-name: plato-${p.foto}"`}></span>`
        : "";
      return `<li>
        <button type="button" class="carta-item flex items-start" data-dish="${k}">
          ${thumb}
          <span class="layer-text min-w-0 flex-1">
            <span class="carta-row">
              <span class="font-display text-[1.5rem] leading-tight lg:text-[1.75rem]">${p.nombre}</span>
              <span class="leader" aria-hidden="true"></span>
              <span class="price">${cop(p.precio)}</span>
            </span>
            <span class="muted mt-2 block max-w-[52ch] text-[0.95rem] leading-snug">${p.desc}</span>
          </span>
        </button>
      </li>`;
    })
    .join("");
  const first = cat.platos.findIndex((p) => p.foto);
  if (first >= 0) showPreview(cat.platos[first], first);
}

const onPick = (e) => {
  const btn = e.target.closest("[data-dish]");
  if (!btn) return;
  const k = +btn.dataset.dish;
  gallery.querySelectorAll("[data-dish]").forEach((b) => b.removeAttribute("data-on"));
  btn.dataset.on = "true";
  showPreview(data.categorias[active].platos[k], k);
};
gallery.addEventListener("mouseover", onPick);
gallery.addEventListener("focusin", onPick);

gallery.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-dish]");
  if (btn) openSheet(data.categorias[active], +btn.dataset.dish);
});

addEventListener("resize", () => moveIndicator(chips.querySelectorAll(".chip")[active]));

// ——— Vinos (Giratorio) y adiciones (Fish Market) ———
const extras = document.querySelector("[data-extras]");
if (extras && data.vinos) {
  extras.innerHTML = `<h3 class="text-[1.9rem] leading-tight">Vinos</h3>
    <p class="muted mt-2">${data.vinos.nota}</p>
    <ul class="mt-6 grid gap-6 sm:grid-cols-2" role="list">${data.vinos.items
      .map(
        (v) => `<li class="border-t border-current/20 pt-4">
          <p class="font-display text-[1.45rem] leading-tight">${v.nombre}</p>
          <p class="muted mt-1 text-[0.95rem]">${v.desc}</p>
          <dl class="wine mt-3 text-[0.95rem]"><div><dt>Copa</dt><dd>${cop(v.copa)}</dd></div><div><dt>Media</dt><dd>${cop(v.media)}</dd></div><div><dt>Botella</dt><dd>${cop(v.botella)}</dd></div></dl>
        </li>`
      )
      .join("")}</ul>`;
} else if (extras && data.adiciones) {
  extras.innerHTML = `<h3 class="text-[1.9rem] leading-tight">Adiciones</h3>
    <ul class="mt-6 grid gap-6 sm:grid-cols-2" role="list">${data.adiciones
      .map((a) => `<li class="flex items-baseline justify-between gap-4 border-t border-current/20 pt-4"><span><span class="block font-display text-[1.35rem]">${a.nombre}</span><span class="muted text-[0.95rem]">${a.desc}</span></span><span class="price">${cop(a.precio)}</span></li>`)
      .join("")}</ul>`;
} else if (extras) extras.remove();

// ——— Hoja del plato ———
const sheet = document.querySelector("[data-sheet]");
const sheetMedia = sheet.querySelector("[data-sheet-media]");

function openSheet(cat, k) {
  const p = cat.platos[k];
  sheet.querySelector("[data-sheet-name]").textContent = p.nombre;
  sheet.querySelector("[data-sheet-desc]").textContent = p.desc;
  sheet.querySelector("[data-sheet-price]").textContent = cop(p.precio);
  sheetMedia.innerHTML = p.foto
    ? `<img src="${IMG}${p.foto}.webp" alt="${p.nombre} visto desde arriba sobre lino oscuro" class="h-full w-full object-cover">`
    : `<img src="../assets/img/giratorio/barco-azul.png" alt="" class="w-28 opacity-40">`;
  sheet.querySelector("[data-sheet-rate]").onclick = () => {
    sheet.close();
    dishSelect.value = `${cat.nombre}::${p.nombre}`;
  };
  sheet.showModal();
}
sheet.querySelector("[data-sheet-close]").addEventListener("click", () => sheet.close());
sheet.addEventListener("click", (e) => {
  if (e.target === sheet) sheet.close();
});

// ——— Formulario ¿Ya probaste? ———
const form = document.querySelector("[data-probaste]");
const dishSelect = form.querySelector("[data-dish-select]");

data.categorias.forEach((cat) => {
  const g = document.createElement("optgroup");
  g.label = cat.nombre;
  cat.platos.forEach((p) => g.append(new Option(p.nombre, `${cat.nombre}::${p.nombre}`)));
  dishSelect.append(g);
});

form.querySelectorAll("[data-scale]").forEach((box) => {
  const name = box.dataset.scale;
  const wrap = document.createElement("div");
  wrap.className = "scale";
  wrap.setAttribute("role", "radiogroup");
  wrap.setAttribute("aria-labelledby", `l-${name}`);
  wrap.innerHTML = [1, 2, 3, 4, 5]
    .map((n) => `<span><input type="radio" id="${name}-${n}" name="${name}" value="${n}"><label for="${name}-${n}">${n}</label></span>`)
    .join("");
  const ends = document.createElement("div");
  ends.className = "flex justify-between text-[0.85rem] text-paper-muted";
  ends.innerHTML = "<span>Nada</span><span>Mucho</span>";
  box.append(wrap, ends);
});

form.querySelectorAll("[data-yesno]").forEach((box) => {
  const name = box.dataset.yesno;
  const wrap = document.createElement("div");
  wrap.className = "yesno";
  wrap.setAttribute("role", "radiogroup");
  wrap.setAttribute("aria-labelledby", `l-${name}`);
  wrap.innerHTML = ["Sí", "No"]
    .map((v) => `<span><input type="radio" id="${name}-${v}" name="${name}" value="${v}"><label for="${name}-${v}">${v}</label></span>`)
    .join("");
  box.append(wrap);
});

const messages = {
  nombre: "Escribe tu nombre.",
  telefono: "Escribe un teléfono para contactarte.",
  correo: "Revisa el correo: parece incompleto.",
  plato: "Elige el plato que probaste.",
};

function fieldError(input, msg) {
  let err = input.parentElement.querySelector(".field-error");
  if (!err) {
    err = document.createElement("p");
    err.className = "field-error";
    err.id = `${input.id}-error`;
    input.parentElement.append(err);
    input.setAttribute("aria-describedby", err.id);
  }
  err.textContent = msg || "";
  err.hidden = !msg;
  input.setAttribute("aria-invalid", String(Boolean(msg)));
}

function validate(input) {
  if (input.name === "datos") return true;
  const bad = (input.required && !input.value.trim()) || (input.type === "email" && input.value && !input.validity.valid);
  fieldError(input, bad ? messages[input.name] : "");
  return !bad;
}

form.querySelectorAll(".input").forEach((input) => {
  input.addEventListener("blur", () => input.value && validate(input));
  input.addEventListener("input", () => input.getAttribute("aria-invalid") === "true" && validate(input));
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const inputs = [...form.querySelectorAll(".input")];
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
  okBox.querySelector("[data-ok-text]").textContent = `${form.elements.nombre.value.trim().split(" ")[0]}, tu opinión sobre ${plato} ayuda al chef a afinar el festival.`;
  form.hidden = true;
  okBox.classList.remove("hidden");
  okBox.focus();
});

// ——— Inicio ———
// Un enlace desde Inicio (festival.html#el-costero) abre la categoría y la hoja de ese plato.
const hash = decodeURIComponent(location.hash.slice(1));
let start = 0;
let startDish = -1;
data.categorias.forEach((c, i) =>
  c.platos.forEach((p, k) => {
    if (hash && p.foto === hash && startDish < 0) {
      start = i;
      startDish = k;
    }
  })
);
requestAnimationFrame(() => {
  select(start, { instant: true });
  if (startDish >= 0) {
    document.getElementById("platos-titulo").scrollIntoView({ block: "start" });
    openSheet(data.categorias[start], startDish);
  }
});
