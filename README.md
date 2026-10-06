# Fragata — webs La Fragata Giratorio y Fish Market

Prototipo para el Festival de Ceviches 2026 (octubre y noviembre). Una plantilla, dos marcas.

- Brief: ClickUp `869fbbw9k` (Grupo Fragata). Diseño vence 05-oct-2026, prototipo 06-oct-2026.
- Detalle de páginas: Mapa Web Grupo Fragata v0.2 (artifact `NiCTYHW1xCWWYS7kuS9XXg`).
- La web corporativa queda para fase 2.

## Correr

```bash
npm run dev     # Tailwind en watch + servidor en http://localhost:5391
npm run build   # CSS minificado
```

- `/giratorio/` y `/fishmarket/`: cada página declara `<html data-brand="...">`.
- `src/input.css`: tokens por marca (colores y fuentes) mapeados a utilidades semánticas
  (`bg-surface`, `text-primary`, `text-accent`, `font-display`, `font-detail`).
- `assets/js/data/brands.js`: dirección, horarios, WhatsApp, espacios de eventos.
- `assets/js/data/festival.js`: menús del festival por categoría (alimenta galería y el "¿Ya probaste?").

## Páginas (alcance de los dos días)

| Página | Giratorio | Fish Market | Día |
| --- | --- | --- | --- |
| Inicio: hero video, concepto, banner festival | sí | sí | 1 |
| Festival: galería de menú, reservar, "¿Ya probaste?" | 17 platos | 30 platos | 1 |
| Reservas: fecha y hora → personas → confirmación | sí | sí | 1 |
| Eventos: HTML existente adaptado | 4 espacios | 1 espacio | 2 |
| Contacto / Sedes: ubicación y horarios | sí | sí | 2 |

Fuera: carta completa con fotos, gift cards, bonos, domicilios, corporativa.

## Diseño La Fragata Giratorio (05-oct-2026)

Dirección «La luz que gira»: el sitio se recorre como un servicio de 12 m a 10 p. m. El scroll (y en Reservas, la hora elegida) mueve la hora: cambia el mantel (lino frío → oliva #646637 → navy #17213a), la sombra del ventanal y la sombra de los platos. Vino #51122b solo en la acción de reservar.

- `giratorio/index.html` Inicio · `festival.html` galería por categoría + hoja del plato + «¿Ya probaste?» · `reservas.html` fecha y hora → personas → confirmación (+ .ics).
- Fotos: 71 crudas del Drive en `_raw/` (no se versiona). 6 platos cenitales recortados con rembg en `assets/img/giratorio/platos/`. Los platos sin foto cenital usan una placa con el barco.
- Supuestos del prototipo: último turno de reserva 9 p. m. (domingo 4 p. m.); reserva y formulario simulados; Marcellus reemplaza a Sorento.

## Giro al tablero «Fragata» (05-oct-2026)

El tablero de la marca (Pinterest `maribotero13/fragata`, 91 pines) pide oscuro y cálido, luz dura de ventanal, carta tipográfica y grabados. El sitio era claro y frío; se invirtió el ritmo.

- `assets/js/light.js`: el recorrido es oscuro desde el mediodía (navy `#17213a` → vino `#51122b` → navy). Reservas conserva el recorrido claro con `data-day="light"`.
- `assets/img/giratorio/grabados.svg`: sprite de grabados de línea (ostra, concha, pez, limón, copa, barco). Se usa con `<use href="…/grabados.svg#pez">`; el trazo lo da `.engrave-row svg` / `.engrave`.
- Festival: carta editorial (categoría en mayúsculas grandes, renglones con puntos guía y precio, foto sticky al pasar el cursor).
- Pendiente del tablero: fotos de lino, agua y manos de chef, personas/servicio (pedir al cliente), videos DJI.
- El tablero «Grupo Fragata» (13 pines, cobalto y crema) es del grupo, no de Giratorio; no se usa aquí.

## Reserva, Eventos y Contacto (05-oct-2026)

- Reserva alineada a la propuesta Backbone (artifact 814ML5tKQcNPxUGkWE7q7e): personas 1–5 y 6+ (6 a 12; más de 12 → Eventos), zona (Ventanal · Bar 100 · Sin preferencia, por confirmar), ocasión opcional (Aniversario · Cumpleaños · Negocios) y confirmación con vista previa de WhatsApp (simulada).
- `giratorio/eventos.html` desde el HTML del cliente (`_raw/eventos/index_5.html`): 4 espacios con fotos y planos reales, menús, experiencias, Cena San Silvestre y cotizador que abre WhatsApp al +57 314 597 4455 (funciona de verdad).
- `giratorio/contacto.html`: dirección, horario con abierto/cerrado en hora de Bogotá, teléfonos, Google Maps/Waze y mapa embebido.
- El banner del festival enlazado en el Mapa (Drive 1EJxKxO1MOloMwD5lYvNSyq4BX4wZoGgF) da "Necesitas acceso" con las dos cuentas: pedir acceso.

## Diseño Fish Market (05-oct-2026)

Dirección «Cartel chicha del festival» (impeccable, seed 02a88d33, elegida en la página de decisión): el festival se anuncia como en Lima, con carteles pegados al muro azul #223a84, letras apiladas a todo el ancho con degradé naranja→crema, franjas verdes y platos con flash recortados encima. Todo numerado (platos 01–30, reserva 1·2·3); lo elegido lleva sello.

- Páginas en `fishmarket/`: se generan con `python3 fishmarket/_src/build.py` (cabecera, menú, pie y barra de reserva compartidos). Se edita el `<main>` en `fishmarket/_src/<página>.main.html`, nunca el HTML de salida.
- CSS propio en `src/fishmarket.css` (importado en `src/input.css`). JS: `assets/js/fm.js` (letras que llenan el ancho, carteles que se pegan, flash al pasar, filas arrastrables, plato que gira con el scroll) y un módulo por página.
- Fotos: el Drive de Fish Market no tiene fotos (8 carpetas vacías). Los 7 ceviches y el tiradito trufa son los mismos platos de Giratorio: se reeditaron en ChatGPT con flash sobre mantel azul (`_raw/ia-out-fm2/`, script `_raw/process-fm.sh` hace webp + recorte con rembg). Los 22 platos sin foto llevan una placa tipográfica con su nombre.
- Casa Fish Market 77 (Eventos y Sede): fotos y planos reales de `_raw/eventos/Contenido`.
- Supuestos: dirección del restaurante Cra. 9 # 77-1 (lo dice el banner del festival del cliente) y casa de eventos # 77-19 (HTML de eventos); último turno de reserva 5 p. m.; zonas Terraza · Salón por confirmar; WhatsApp de reservas igual al de Giratorio.
- Fuentes: Big Shoulders Display para las letras de cartel, Figtree en lugar de Filson Pro, Beth Ellen y Noto Sans Canadian Aboriginal.

## Pendientes del cliente

- [ ] Dominios de cada restaurante
- [ ] Videos hero (mientras tanto: still generado con IA)
- [ ] Herramienta de reservas: construir o integrar
- [ ] Dirección Fish Market: confirmar 77-1 (banner) vs 77-19 (eventos)
- [ ] Fotos de baos, namis, makis, tatakis y tartares de Fish Market
- [ ] WhatsApp e Instagram propios de Fish Market
- [x] Archivos de fuentes: Sorento, Pushkin, Filson Pro (assets/fonts, woff2)
- [ ] Precios del festival verificados (la extracción del PDF los desordena; hoy van en `null`)
- [ ] HTML de eventos: la carpeta de Drive no lista archivos desde el conector, bajarlo a mano
