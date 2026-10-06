// Reserva de Fish Market en tres pasos: cuándo → quiénes → datos, y confirmación simulada por WhatsApp.
// Cada elección se imprime en el boleto de la izquierda con un golpe de sello.
import { fitStacks, reduced } from "./fm.js";

const form = document.querySelector("[data-booking]");
const steps = [...form.querySelectorAll("[data-step]")];
const rail = [...document.querySelectorAll("[data-rail] li")];
const ticket = document.querySelector("[data-ticket]");

// Horario: todos los días de 12 m a 6 p. m. Último turno: supuesto del prototipo (1 h antes del cierre).
const OPEN = 12, LAST = 17, STEP_MIN = 30;
const state = { date: null, time: null, people: 2, zone: "Terraza", occasion: "" };

const fmtDay = new Intl.DateTimeFormat("es-CO", { weekday: "short" });
const fmtLong = new Intl.DateTimeFormat("es-CO", { weekday: "long", day: "numeric", month: "long" });
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const fmtShort = new Intl.DateTimeFormat("es-CO", { weekday: "short", day: "numeric", month: "short" });
const formatHour = (h) => {
  const hh = Math.floor(h), mm = Math.round((h % 1) * 60);
  if (hh === 12 && mm === 0) return "12 m";
  const h12 = hh > 12 ? hh - 12 : hh;
  return `${h12}:${String(mm).padStart(2, "0")} ${hh >= 12 ? "p. m." : "a. m."}`;
};

// ——— Boleto ———
function stampTicket(key, text) {
  if (!ticket) return;
  const el = ticket.querySelector(`[data-t-${key}]`);
  if (el.textContent === String(text)) return;
  el.textContent = text;
  if (reduced) return;
  el.animate(
    [{ transform: "scale(1.35) rotate(-4deg)", opacity: 0 }, { transform: "scale(1)", opacity: 1 }],
    { duration: 380, easing: "cubic-bezier(0.2, 1.5, 0.4, 1)" }
  );
}

// ——— Días ———
const daysBox = form.querySelector("[data-days]");
const today = new Date();
today.setHours(0, 0, 0, 0);
for (let i = 0; i < 21; i++) {
  const d = new Date(today);
  d.setDate(d.getDate() + i);
  const label = i === 0 ? "Hoy" : i === 1 ? "Mañana" : fmtDay.format(d).replace(".", "");
  const el = document.createElement("label");
  el.className = "day";
  el.innerHTML = `<input type="radio" name="fecha" value="${d.toISOString()}">
    <span><span class="grid justify-items-center leading-tight"><span class="text-[0.8rem] font-semibold capitalize">${label}</span><span class="num text-[1.7rem]">${d.getDate()}</span></span></span>`;
  el.setAttribute("aria-label", fmtLong.format(d));
  daysBox.append(el);
}
daysBox.addEventListener("change", (e) => {
  state.date = new Date(e.target.value);
  state.time = null;
  stampTicket("date", cap(fmtShort.format(state.date).replace(/\./g, "")));
  stampTicket("time", "—");
  renderSlots();
  validateStep1();
});

// ——— Horas ———
const slotsBox = form.querySelector("[data-slots]");
const emptyNote = form.querySelector("[data-slots-empty]");
function renderSlots() {
  const now = new Date();
  const isToday = state.date.toDateString() === now.toDateString();
  const out = [];
  for (let m = OPEN * 60; m <= LAST * 60; m += STEP_MIN) {
    if (isToday && m <= now.getHours() * 60 + now.getMinutes() + 30) continue;
    // En la grilla basta "1:30": todo el horario es de tarde (12 m a 6 p. m.).
    const h = m / 60, short = h === 12 ? "12 m" : `${Math.floor(h > 12.99 ? h - 12 : h)}:${String(Math.round((h % 1) * 60)).padStart(2, "0")}`;
    out.push(`<label class="slot"><input type="radio" name="hora" value="${h}" aria-label="${formatHour(h)}"><span class="num text-[1.25rem]">${short}</span></label>`);
  }
  slotsBox.innerHTML = out.join("");
  emptyNote.hidden = out.length > 0;
}
slotsBox.addEventListener("change", (e) => {
  state.time = parseFloat(e.target.value);
  stampTicket("time", formatHour(state.time));
  validateStep1();
});
function validateStep1() {
  steps[0].querySelector("[data-next]").disabled = !(state.date && state.time != null);
}

// Preselecciona hoy, o mañana si ya no quedan horas.
const inputs = daysBox.querySelectorAll("input");
inputs[0].checked = true;
state.date = new Date(inputs[0].value);
renderSlots();
if (!slotsBox.children.length) {
  inputs[1].checked = true;
  state.date = new Date(inputs[1].value);
  renderSlots();
}
stampTicket("date", cap(fmtShort.format(state.date).replace(/\./g, "")));

// ——— Personas y zona ———
const big = form.querySelector("[data-big]");
const count = form.querySelector("[data-count]");
const groupNote = form.querySelector("[data-group-note]");
const minus = form.querySelector("[data-minus]");
const plus = form.querySelector("[data-plus]");
const nextPeople = steps[1].querySelector("[data-next]");
function setPeople(n, { bump = true } = {}) {
  state.people = Math.max(1, Math.min(13, n));
  const tooMany = state.people > 12;
  big.hidden = state.people < 6;
  count.textContent = tooMany ? "12+" : state.people;
  if (bump) {
    count.classList.remove("bump");
    void count.offsetWidth;
    count.classList.add("bump");
  }
  minus.disabled = state.people <= 6;
  plus.disabled = tooMany;
  groupNote.hidden = !tooMany;
  nextPeople.disabled = tooMany;
  stampTicket("people", tooMany ? "12+" : state.people);
}
form.querySelector("[data-people]").addEventListener("change", (e) => setPeople(+e.target.value, { bump: false }));
minus.addEventListener("click", () => setPeople(state.people - 1));
plus.addEventListener("click", () => setPeople(state.people + 1));
setPeople(2, { bump: false });

form.querySelector("[data-zone]").addEventListener("change", (e) => {
  state.zone = e.target.value;
  stampTicket("zone", state.zone);
});
form.querySelectorAll('[name="ocasion"]').forEach((r) =>
  r.addEventListener("click", () => {
    if (state.occasion === r.value) {
      r.checked = false;
      state.occasion = "";
    } else state.occasion = r.value;
  })
);

// ——— Pasos ———
let at = 0;
function go(i) {
  steps[at].hidden = true;
  at = i;
  steps[at].hidden = false;
  rail.forEach((li, k) => {
    li.dataset.done = String(k < at);
    li.dataset.current = String(k === Math.min(at, 2) && at < 3);
  });
  if (at === 1) stampTicket("zone", state.zone);
  if (at === 2) {
    const line = form.querySelector("[data-sum-line]");
    line.textContent = `${cap(fmtLong.format(state.date))} · ${formatHour(state.time)} · ${state.people > 12 ? "12+" : state.people} personas · ${state.zone}`;
  }
  steps[at].querySelector("h2").focus({ preventScroll: true });
  if (innerWidth < 1024) steps[at].scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}
form.querySelectorAll("[data-next]").forEach((b) => b.addEventListener("click", () => go(at + 1)));
form.querySelectorAll("[data-back]").forEach((b) => b.addEventListener("click", () => go(at - 1)));

// ——— Confirmar ———
const messages = { nombre: "Escribe tu nombre.", telefono: "Escribe un teléfono de 10 dígitos." };
function check(input) {
  const v = input.value.trim();
  const bad = !v || (input.name === "telefono" && v.replace(/\D/g, "").length < 10);
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
const required = [form.elements.nombre, form.elements.telefono];
required.forEach((i) => i.addEventListener("input", () => i.getAttribute("aria-invalid") === "true" && check(i)));

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!required.map(check).every(Boolean)) return required.find((i) => i.getAttribute("aria-invalid") === "true").focus();
  const btn = form.querySelector('[type="submit"]');
  btn.disabled = true;
  btn.textContent = "Confirmando…";
  await new Promise((r) => setTimeout(r, 800)); // Prototipo: sin backend todavía.
  const name = form.elements.nombre.value.trim().split(" ")[0];
  const day = fmtLong.format(state.date);
  const hour = formatHour(state.time);
  form.querySelector("[data-ok-name]").textContent = name;
  form.querySelector("[data-ok-line]").textContent =
    `Mesa para ${state.people} ${state.people === 1 ? "persona" : "personas"} el ${day} a las ${hour}${state.zone === "Sin preferencia" ? (hour.endsWith(".") ? "" : ".") : `, en ${state.zone === "Terraza" ? "la terraza" : "el salón"}.`}`;
  form.querySelector("[data-wa-confirm]").textContent =
    `Hola ${name}, tu mesa para ${state.people} en Fish Market está confirmada el ${day} a las ${hour}${hour.endsWith(".") ? "" : "."}${state.occasion ? ` Tomamos nota: ${state.occasion.toLowerCase()}.` : ""} Te esperamos en la Carrera 9 # 77-1.`;
  form.querySelector("[data-wa-remind]").textContent = `Recordatorio: hoy a las ${hour}${hour.endsWith(".") ? "" : "."} ¿Confirmas tu asistencia?`;
  form.querySelector("[data-ics]").href = icsUrl();
  document.querySelector("[data-wa]").hidden = true;
  document.querySelector("[data-rail]").hidden = true;
  const seal = document.querySelector("[data-seal]");
  if (seal) seal.hidden = false;
  go(3);
});

form.querySelectorAll("[data-wa-reply]").forEach((b) =>
  b.addEventListener("click", () => {
    const answer = form.querySelector("[data-wa-answer]");
    answer.textContent = b.dataset.waReply === "si" ? "Sí, ahí estaré" : "Cambiar";
    answer.hidden = false;
    form.querySelectorAll("[data-wa-reply]").forEach((x) => (x.disabled = true));
    if (b.dataset.waReply === "cambiar") setTimeout(() => location.reload(), 900);
  })
);

function icsUrl() {
  const start = new Date(state.date);
  start.setHours(Math.floor(state.time), (state.time % 1) * 60, 0, 0);
  const end = new Date(start.getTime() + 2 * 3600e3);
  const z = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const ics = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Fish Market//Reservas//ES", "BEGIN:VEVENT",
    `UID:${Date.now()}@fishmarket`, `DTSTAMP:${z(new Date())}`, `DTSTART:${z(start)}`, `DTEND:${z(end)}`,
    `SUMMARY:Mesa en Fish Market (${state.people} personas)`,
    "LOCATION:Carrera 9 # 77-1\\, Bogotá",
    "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");
  return URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
}

fitStacks();
