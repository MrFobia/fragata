// Reserva en tres estaciones: fecha y hora → personas → confirmación. Simulada (sin backend).
// La hora elegida mueve la luz de la mesa: es la interacción principal del sitio.
import { setHour, getHour, formatHour } from "./light.js";

const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const form = document.querySelector("[data-booking]");
const steps = [...form.querySelectorAll("[data-step]")];
const stations = [...document.querySelectorAll("[data-stations] li")];
const plate = document.querySelector("[data-table-plate]");

// Horario del restaurante. Último turno de reserva: supuesto del prototipo (1 h antes del cierre).
const HOURS = { weekday: [12, 21], sunday: [12, 16] };
const STEP_MIN = 30;

const state = { date: null, time: null, people: 2 };

const fmtDay = new Intl.DateTimeFormat("es-CO", { weekday: "short" });
const fmtLong = new Intl.DateTimeFormat("es-CO", { weekday: "long", day: "numeric", month: "long" });

// ——— Luz ———
let tween;
function lightTo(target) {
  cancelAnimationFrame(tween);
  if (reduced) return setHour(target);
  const from = getHour();
  const t0 = performance.now();
  const dur = 1100;
  const run = (now) => {
    const t = Math.min(1, (now - t0) / dur);
    const e = 1 - Math.pow(1 - t, 4);
    setHour(from + (target - from) * e);
    if (t < 1) tween = requestAnimationFrame(run);
  };
  tween = requestAnimationFrame(run);
  plate.style.rotate = `${(target - 12) * -9}deg`;
}
setHour(13);

// ——— Días ———
const daysBox = form.querySelector("[data-days]");
const today = new Date();
today.setHours(0, 0, 0, 0);
for (let i = 0; i < 21; i++) {
  const d = new Date(today);
  d.setDate(d.getDate() + i);
  const id = `d-${i}`;
  const label = i === 0 ? "Hoy" : i === 1 ? "Mañana" : fmtDay.format(d).replace(".", "");
  const el = document.createElement("label");
  el.className = "day";
  el.innerHTML = `<input type="radio" name="fecha" id="${id}" value="${d.toISOString()}">
    <span><span class="grid justify-items-center leading-tight"><span class="text-[0.8rem] capitalize">${label}</span><span class="font-display text-[1.6rem]">${d.getDate()}</span></span></span>`;
  el.setAttribute("aria-label", fmtLong.format(d));
  daysBox.append(el);
}

daysBox.addEventListener("change", (e) => {
  state.date = new Date(e.target.value);
  state.time = null;
  renderSlots();
  validateStep1();
});

// ——— Horas ———
const slotsBox = form.querySelector("[data-slots]");
const dayHours = form.querySelector("[data-day-hours]");
const emptyNote = form.querySelector("[data-slots-empty]");

function renderSlots() {
  const sunday = state.date.getDay() === 0;
  const [open, last] = sunday ? HOURS.sunday : HOURS.weekday;
  dayHours.textContent = sunday ? "· domingo, 12 m a 5 p. m." : "· 12 m a 10 p. m.";
  const now = new Date();
  const isToday = state.date.toDateString() === now.toDateString();
  const out = [];
  for (let m = open * 60; m <= last * 60; m += STEP_MIN) {
    const h = m / 60;
    if (isToday && m <= now.getHours() * 60 + now.getMinutes() + 30) continue;
    out.push(`<label class="slot"><input type="radio" name="hora" value="${h}"><span>${formatHour(h)}</span></label>`);
  }
  slotsBox.innerHTML = out.join("");
  emptyNote.hidden = out.length > 0;
}

slotsBox.addEventListener("change", (e) => {
  state.time = parseFloat(e.target.value);
  lightTo(state.time);
  validateStep1();
});

function validateStep1() {
  steps[0].querySelector("[data-next]").disabled = !(state.date && state.time != null);
}

// Preselecciona hoy (o mañana si ya cerró).
const first = daysBox.querySelector("input");
first.checked = true;
state.date = new Date(first.value);
renderSlots();
if (!slotsBox.children.length) {
  const second = daysBox.querySelectorAll("input")[1];
  second.checked = true;
  state.date = new Date(second.value);
  renderSlots();
}

// ——— Personas y zona ———
const peopleBox = form.querySelector("[data-people]");
const big = form.querySelector("[data-big]");
const count = form.querySelector("[data-count]");
const groupNote = form.querySelector("[data-group-note]");
const minus = form.querySelector("[data-minus]");
const plus = form.querySelector("[data-plus]");
const nextPeople = steps[1].querySelector("[data-next]");

// 1 a 5 se eligen con un toque; "6+" abre un contador de 6 a 12 y más de 12 lleva a Eventos.
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
}
peopleBox.addEventListener("change", (e) => setPeople(+e.target.value, { bump: false }));
minus.addEventListener("click", () => setPeople(state.people - 1));
plus.addEventListener("click", () => setPeople(state.people + 1));
setPeople(2, { bump: false });

state.zone = "Ventanal";
form.querySelector("[data-zone]").addEventListener("change", (e) => (state.zone = e.target.value));

// Ocasión opcional: un segundo toque sobre la misma opción la quita.
state.occasion = "";
form.querySelectorAll('[name="ocasion"]').forEach((r) => {
  r.addEventListener("click", () => {
    if (state.occasion === r.value) {
      r.checked = false;
      state.occasion = "";
    } else state.occasion = r.value;
  });
});

// ——— Navegación entre estaciones ———
let at = 0;
function go(i) {
  steps[at].hidden = true;
  at = i;
  steps[at].hidden = false;
  stations.forEach((s, k) => (s.dataset.done = String(k <= Math.min(at, 2))));
  if (at === 2) fillSummary();
  steps[at].querySelector("h2").focus({ preventScroll: true });
  if (innerWidth < 1024) steps[at].scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
}
form.querySelectorAll("[data-next]").forEach((b) => b.addEventListener("click", () => go(at + 1)));
form.querySelectorAll("[data-back]").forEach((b) => b.addEventListener("click", () => go(at - 1)));

function fillSummary() {
  const d = fmtLong.format(state.date);
  form.querySelector("[data-sum-date]").textContent = d.charAt(0).toUpperCase() + d.slice(1);
  form.querySelector("[data-sum-time]").textContent = formatHour(state.time);
  form.querySelector("[data-sum-people]").textContent = state.people > 12 ? "12+" : state.people;
  form.querySelector("[data-sum-zone]").textContent = state.zone;
}

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
  const ok = required.map(check).every(Boolean);
  if (!ok) return required.find((i) => i.getAttribute("aria-invalid") === "true").focus();
  const btn = form.querySelector('[type="submit"]');
  btn.disabled = true;
  btn.textContent = "Confirmando…";
  await new Promise((r) => setTimeout(r, 800)); // Prototipo: sin backend todavía.
  const name = form.elements.nombre.value.trim().split(" ")[0];
  const day = fmtLong.format(state.date);
  const hour = formatHour(state.time);
  const people = `${state.people} ${state.people === 1 ? "persona" : "personas"}`;
  form.querySelector("[data-ok-name]").textContent = name;
  form.querySelector("[data-ok-line]").textContent =
    `Mesa para ${people} el ${day} a las ${hour}${state.zone === "Sin preferencia" ? "" : `, en ${state.zone}`}.`;
  form.querySelector("[data-wa-confirm]").textContent =
    `Hola ${name}, tu mesa para ${state.people} está confirmada el ${day} a las ${hour}.${state.occasion ? ` Tomamos nota: ${state.occasion.toLowerCase()}.` : ""} Te esperamos.`;
  form.querySelector("[data-wa-remind]").textContent = `Recordatorio: hoy a las ${hour}. ¿Confirmas tu asistencia?`;
  form.querySelector("[data-ics]").href = icsUrl();
  document.querySelector("[data-wa]").hidden = true;
  document.querySelector("[data-stations]").hidden = true;
  go(3);
});

// Respuesta rápida dentro de la vista previa de WhatsApp.
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
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//La Fragata Giratorio//Reservas//ES", "BEGIN:VEVENT",
    `UID:${Date.now()}@lafragatagiratorio`, `DTSTAMP:${z(new Date())}`, `DTSTART:${z(start)}`, `DTEND:${z(end)}`,
    `SUMMARY:Mesa en La Fragata Giratorio (${state.people} personas)`,
    "LOCATION:Calle 100 # 8A-55\\, Torre C\\, Piso 12\\, World Trade Center\\, Bogotá",
    "END:VEVENT", "END:VCALENDAR",
  ].join("\r\n");
  return URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
}
