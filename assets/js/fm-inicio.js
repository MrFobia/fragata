// Inicio de Fish Market: cinta de formas, lista de formas con foto que cambia y la tira de platos.
import { data, platos, IMG, pad, dishCard, catPlate, tilts, fitStacks, watchPaste, flash, reduced } from "./fm.js";

// Cómo se come cada forma. Las notas salen de la carta; las que no tienen nota, de sus descripciones.
const como = {
  Ceviches: "Se comen con cuchara, para disfrutar la leche de tigre en cada bocado.",
  Tartares: "Atún trufado o salmón con páprika, picado y marinado.",
  Tiraditos: "Finas láminas de pescado blanco en leche de tigre.",
  Tatakis: "Salmón o atún sellado por fuera, crudo por dentro.",
  Baos: "Una mini nube al vapor, para comer con las manos.",
  "Nami Crunch": "Mini sushi burgers al estilo Fish Market.",
  Makis: "Rollos de sushi para comer en 10 bocados.",
};

// ——— Cinta ———
const track = document.querySelector("[data-forms-track] > span");
track.innerHTML = data.categorias
  .map((c) => `${c.nombre}<img src="../assets/img/fishmarket/barco-azul.png" alt="" width="581" height="463">`)
  .join("");
track.parentElement.append(track.cloneNode(true));

// ——— Formas ———
const list = document.querySelector("[data-formas]");
const first = {};
platos.forEach((p) => (first[p.categoria] ??= p));
list.innerHTML = data.categorias
  .map((c, i) => {
    const conFoto = c.platos.find((p) => p.foto);
    return `<li class="forma reveal" data-forma="${i}" data-foto="${conFoto?.foto || ""}">
      <span class="num" aria-hidden="true">${pad(i + 1)}</span>
      <a href="festival.html#${encodeURIComponent(c.nombre)}" class="forma-name">${c.nombre}</a>
      <span class="forma-count">${c.platos.length} ${c.platos.length === 1 ? "plato" : "platos"}</span>
      <span class="forma-how">${como[c.nombre] || ""}</span>
    </li>`;
  })
  .join("");
list.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));

const frame = document.querySelector("[data-forma-frame]");
const fImg = document.querySelector("[data-forma-img]");
const fLabel = document.querySelector("[data-forma-label]");
const fN = document.querySelector("[data-forma-n]");
const holder = frame?.closest(".forma-photo");
let current = -1;

function showForma(i) {
  if (i === current || !frame) return;
  current = i;
  list.querySelectorAll(".forma").forEach((li) => (li.dataset.on = String(+li.dataset.forma === i)));
  const li = list.children[i];
  const cat = data.categorias[i];
  const foto = li.dataset.foto;
  holder.dataset.swap = "true";
  setTimeout(() => {
    frame.querySelector(".cat-plate")?.remove();
    frame.querySelector(".date-stamp").hidden = !foto;
    if (foto) {
      fImg.hidden = false;
      fImg.src = `${IMG}${foto}-640.webp`;
    } else {
      fImg.hidden = true;
      frame.insertAdjacentHTML("afterbegin", catPlate({ nombre: cat.nombre, categoria: cat.nombre }).replace('class="cat-plate"', 'class="cat-plate absolute inset-0"').replace('data-fit-max="72"', 'data-fit-max="180"'));
      fitStacks(frame);
    }
    fLabel.textContent = cat.nombre;
    fN.textContent = pad(i + 1);
    holder.dataset.swap = "false";
    flash(frame);
  }, reduced ? 0 : 220);
}

list.addEventListener("pointerover", (e) => {
  const li = e.target.closest(".forma");
  if (li) showForma(+li.dataset.forma);
});
list.addEventListener("focusin", (e) => {
  const li = e.target.closest(".forma");
  if (li) showForma(+li.dataset.forma);
});
// Con scroll, la forma que cruza el centro de la pantalla manda.
const formaIo = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && showForma(+e.target.dataset.forma)),
  { rootMargin: "-48% 0px -48% 0px" }
);
list.querySelectorAll(".forma").forEach((li) => formaIo.observe(li));
list.querySelectorAll(".forma").forEach((li) => (li.dataset.on = "false"));
list.children[0].dataset.on = "true";
current = 0;

// ——— Tira de platos con foto ———
const strip = document.querySelector("[data-strip]");
const conFoto = platos.filter((p) => p.foto && p.categoria !== "Ceviches" ? true : p.foto);
strip.innerHTML =
  conFoto.map((p, i) => `<li class="paste" style="--d:${(i % 4) * 70}ms">${dishCard(p, { tilt: tilts[i % tilts.length] })}</li>`).join("") +
  `<li class="paste"><a href="festival.html" class="poster poster-orange flex h-full min-h-[24rem] flex-col justify-between p-6" style="--tilt:1.4deg">
    <span class="relative z-[3] hand text-[1.5rem] leading-none">y muchas formas más</span>
    <span class="relative z-[3] stack stack-ink" data-fit><span class="!text-white">+${platos.length - conFoto.length}</span><span class="!text-[#14224f]">platos</span></span>
    <span class="relative z-[3] font-[Filson_Pro] text-[0.9rem] font-extrabold uppercase tracking-[0.08em]">Baos, namis y makis →</span>
  </a></li>`;
fitStacks(strip);
watchPaste(strip);
