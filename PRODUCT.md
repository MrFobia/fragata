# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML + Tailwind v4 (CLI) + vanilla JS modules. One template, two brands switched by `<html data-brand>`. Hosting target: Cloudflare Pages on a temporary URL until the client's domains exist.

## Users

Primary: a Bogotá local on a phone who arrives from Instagram or festival ads during October–November 2026. They want to see the festival dishes, feel that the night is worth it, and book a table in under a minute. Secondary (not designed for in this round): couples or families planning an occasion, tourists and WTC executives.

## Product Purpose

Two restaurant websites (La Fragata Giratorio and Fish Market, Grupo Fragata) ready to receive Festival de Ceviches traffic and turn it into reservations. Success is measured by three things from the client brief: reservations through the web flow instead of WhatsApp; the festival visible from the first screen with its menu and a booking button; diner data captured with the "¿Ya probaste?" form.

## Positioning

La Fragata Giratorio is the first rotating haute-cuisine restaurant in Bogotá, on floor 12 of the World Trade Center (Calle 100 # 8A-55, Torre C): the view turns 360° around the city while the table stays put. The family has served seafood in Bogotá since 1964 (founded by coronel Álvaro Calderón Rodríguez; the rotating restaurant opened in 1991). Fish Market is the casual seafood and fusion sibling. Both host the same guest chef this season: Peruvian chef Carlos Accinelli.

## Operating Context

- Festival runs October and November 2026. Giratorio: "Festival de Ceviches de Alta Cocina", 17 dishes in 5 categories. Fish Market: "Festival de Ceviches, Sushis y Baos", 30 dishes.
- Reservation flow: date and time → number of people → confirmation. WhatsApp (+57 310 214 5472) stays secondary and low-visibility, a small link under the form.
- Giratorio hours: Monday–Saturday 12 m–10 p. m., Sunday 12 m–5 p. m.

## Capabilities and Constraints

- This round: reservation and "¿Ya probaste?" are simulated UI (no backend). The confirmation screen is fake and must not claim a real booking was made in production copy.
- This round's scope: Giratorio Inicio + Festival + Reservas. Eventos, Contacto, Carta, Gift Cards and the whole Fish Market site come later on the same template.
- Undecided: domains, hero videos, reservation backend, verified festival prices, commercial font files (Sorento, Pulshkin High, Filson Pro).

## Brand Commitments

From the client brief, binding:
- Giratorio tagline "Un viaje a la alta cocina". Group line "El viaje continúa".
- Giratorio colors: #17213a · #506c9b · #223a84 · #646637 · #51122b.
- Giratorio type: Sorento (titles) · Noto Sans Canadian (text) · Pulshkin High (details).
- Visual references: client Pinterest boards (pin.it/RB7OfYvqT for Giratorio; pin.it/2Ma0ybDKg for dish photo style).
- Festival copy and the 10 questions of "¿Ya probaste?" come verbatim from Mapa Web v0.2.

## Evidence on Hand

- Festival menus: Drive PDFs "Menú La Fragata Giratorio Impresión.pdf" and "Menú Fish Market Impresión.pdf", transcribed in `assets/js/data/festival.js` (prices pending verification).
- Raw festival dish photos in Drive (folder 1LQFqpb85fnHcjlPdcVyFv7IFMEP36BIs), unedited.
- Logos in Drive (folder 10wPYd8P9jFUxYlFCJjSGI5mytD4VWI3_).
- No hero video, no cover photo, no testimonials, no press. Do not fabricate reviews, awards or diner counts.

## Product Principles

1. The festival and the booking button lead; everything else supports them.
2. Phone first: one thumb, one minute, from the Instagram link to a confirmed table.
3. Sell the view and the dish with real material, not adjectives.
4. Same template, two brands: anything built for Giratorio must reskin to Fish Market through tokens.

## Accessibility & Inclusion

WCAG 2.1 AA contrast, full keyboard flow in the reservation steps, and reduced-motion support for every animation.
