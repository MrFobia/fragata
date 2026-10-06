// Entrada compartida por las dos marcas. La marca sale de <html data-brand>.
import { brands } from "./data/brands.js";
import { festival } from "./data/festival.js";

const root = document.documentElement;
root.classList.add("js");

const brandKey = root.dataset.brand;
const brand = brands[brandKey];

// Rellena [data-bind="campo"] con el dato de la marca (nombre, tagline, direccion...).
document.querySelectorAll("[data-bind]").forEach((el) => {
  const value = brand?.[el.dataset.bind];
  if (typeof value === "string") el.textContent = value;
});

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Navegación: fondo al hacer scroll y hoja de menú en celular.
const nav = document.querySelector(".site-nav");
const sheet = document.querySelector(".menu-sheet");
const toggles = document.querySelectorAll("[data-menu-toggle]");

const onScrollNav = () => nav?.setAttribute("data-scrolled", String(scrollY > 24));
addEventListener("scroll", onScrollNav, { passive: true });
onScrollNav();

function setMenu(open) {
  if (!sheet) return;
  sheet.dataset.open = String(open);
  toggles.forEach((t) => t.setAttribute("aria-expanded", String(open)));
  document.body.style.overflow = open ? "hidden" : "";
  if (open) sheet.querySelector("a")?.focus({ preventScroll: true });
}
toggles.forEach((t) => t.addEventListener("click", () => setMenu(sheet?.dataset.open !== "true")));
addEventListener("keydown", (e) => {
  if (e.key === "Escape" && sheet?.dataset.open === "true") setMenu(false);
});
sheet?.querySelectorAll("a").forEach((a, i) => (a.style.transitionDelay = `${80 + i * 45}ms`));

// Revelado de texto al entrar en pantalla. El contenido ya es visible sin JS.
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    }),
  { rootMargin: "0px 0px -8% 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// La barra de reserva se esconde cuando ya hay un botón de reservar a la vista.
const bar = document.querySelector(".book-bar");
const inlineCtas = document.querySelectorAll("[data-inline-book]");
if (bar && inlineCtas.length) {
  const seen = new Set();
  const barIo = new IntersectionObserver((entries) => {
    entries.forEach((e) => (e.isIntersecting ? seen.add(e.target) : seen.delete(e.target)));
    bar.dataset.hidden = String(seen.size > 0);
  });
  inlineCtas.forEach((c) => barIo.observe(c));
}

export { brand, brandKey, festival };
