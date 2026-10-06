// Sede de Fish Market: abierto o cerrado ahora, en hora de Bogotá (todos los días de 12 m a 6 p. m.).
import { fitStacks } from "./fm.js";

const el = document.querySelector("[data-open-now]");
const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Bogota" }));
const h = now.getHours() + now.getMinutes() / 60;
const open = h >= 12 && h < 18;
el.textContent = open
  ? `Abierto ahora · cierra a las 6 p. m.`
  : h < 12 ? "Cerrado ahora · abrimos hoy a las 12 m" : "Cerrado ahora · abrimos mañana a las 12 m";
el.dataset.state = open ? "open" : "closed";
document.querySelector("[data-day]")?.setAttribute("aria-current", "date");

fitStacks();
