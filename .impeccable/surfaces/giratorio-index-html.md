---
version: 1
slug: "giratorio-index-html"
primary_target: "giratorio/index.html"
related_targets: ["giratorio/festival.html","giratorio/reservas.html"]
---

# Surface brief — La Fragata Giratorio (Inicio, Festival, Reservas)

Scope: giratorio/index.html, giratorio/festival.html, giratorio/reservas.html. Mode: Persuade.
Visitor: Bogotá local on a phone, arriving from Instagram during the festival. Action: book a table. Proof: the real festival dishes (Drive photos, cut out) and verbatim menu copy. Constraints: reservation and "¿Ya probaste?" are simulated UI; WhatsApp only as a small secondary link; no invented reviews or numbers.

## Direction contract

THESIS: The site is a lunch-to-night service at floor 12. Scroll is time: a window's hard shadow crosses the tablecloth and the hour advances from 12:40 to 21:30, the way the room turns while the table stays. Refuses the category default of a dark full-bleed hero video with a serif logo and a menu grid.

OWN-WORLD: Tablecloth ground that changes with the hour: cool linen tint at midday, olive #646637 dusk, navy #17213a night. Ink #17213a, blue #223a84 and #506c9b. Wine #51122b is reserved for the booking action only. Top-down dishes cut out with their real plate edge, laid on the cloth with a soft contact shadow. Mullion shadows (blurred bars) drift across cloth and plates together. Flared glyphic display (Sorento; stand-in Marcellus), Noto Sans Canadian Aboriginal for text, tabular hour stamps.

STORY: The visitor sees the festival dish first, understands it is a festival with chef Carlos Accinelli in October and November, browses the dishes by course, then picks an hour, which changes the light, picks guests, and confirms.

FIRST VIEWPORT: On a phone, the hour stamp "12:40" and a small logo sit at the top. The Costa Limeña plate fills about 70vh, cut by the right edge, with the shadow across it. Below it, "Festival de Ceviches de Alta Cocina" in display type, a line for "octubre y noviembre · chef Carlos Accinelli", and a bottom-fixed wine "Reservar mesa" bar with "Ver festival" beside it. On desktop the plate is on the right at 80vh and the type sits on the left.

FORM: Assigned grounded direction #6 of 7, "La luz que gira"; seed faeade67.

SIGNATURE INTERACTION: The light rig. A CSS custom property --hour (12–22) is driven by scroll on Inicio and by the selected time in Reservas. It sets the cloth color, the shadow angle and length, and the hour stamp. Plates rotate a few degrees with scroll, never spinning. Reduced motion: the light stays fixed at the section's hour and nothing rotates.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved
- Real font files (Sorento, Pulshkin High); festival prices; hero video; reservation backend.
