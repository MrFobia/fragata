#!/usr/bin/env python3
"""Arma las páginas de Fish Market: cabecera, menú, pie y barra de reserva compartidos + el <main> de cada página."""
import pathlib, re
HERE = pathlib.Path(__file__).parent
OUT = HERE.parent

PAGES = {
    "index": dict(title="Fish Market · Festival de Ceviches, Sushis y Baos", current="Inicio",
        desc="Festival de Ceviches, Sushis y Baos en Fish Market by La Fragata: más de 30 platos creados con el chef peruano Carlos Accinelli. Octubre y noviembre en la Carrera 9 # 77-1, Bogotá.",
        js="fm-inicio.js", preload="platos/costa-limena-cut.webp", bar=("festival.html", "Festival")),
    "festival": dict(title="Festival de Ceviches, Sushis y Baos · Fish Market", current="Festival",
        desc="Los 30 platos del Festival de Ceviches, Sushis y Baos de Fish Market, con el chef peruano Carlos Accinelli: ceviches, tiraditos, tatakis, tartares, baos, nami crunch y makis.",
        js="fm-festival.js", preload="platos/el-costero-cut.webp", bar=("#probaste", "¿Ya probaste?")),
    "reservas": dict(title="Reservas · Fish Market", current="Reservas",
        desc="Reserva tu mesa en Fish Market, Carrera 9 # 77-1, Bogotá: elige día y hora, número de personas y confirma.",
        js="fm-reservas.js", bar=None),
    "eventos": dict(title="Eventos · Fish Market", current="Eventos",
        desc="Eventos sociales y corporativos en Casa Fish Market 77, Carrera 9 # 77-19, Bogotá: de 65 a 100 personas, menús, experiencias y cotización por WhatsApp.",
        js="fm-eventos.js", bar=("#cotizar", "Cotizar")),
    "contacto": dict(title="Sede y contacto · Fish Market", current="Sede",
        desc="Fish Market: Carrera 9 # 77-1, Bogotá. Todos los días de 12 m a 6 p. m. Cómo llegar, teléfonos y reservas.",
        js="fm-contacto.js", bar=("reservas.html", None)),
}
NAV = [("Inicio", "./"), ("Festival", "festival.html"), ("Reservas", "reservas.html"), ("Eventos", "eventos.html"), ("Sede", "contacto.html")]

def shell(key, p, main):
    cur = p["current"]
    ac = ' aria-current="page"'
    nav = "\n".join(f'      <a class="nav-link" href="{h}"{ac if n == cur else ""}>{n}</a>' for n, h in NAV[1:])
    sheet = "\n".join(f'      <a href="{h}"{ac if n == cur else ""}>{n}</a>' for n, h in NAV)
    preload = f'\n  <link rel="preload" as="image" href="../assets/img/fishmarket/{p["preload"]}" fetchpriority="high">' if p.get("preload") else ""
    bar = ""
    if p["bar"]:
        href, label = p["bar"]
        second = f'\n    <a href="{href}" class="fm-btn fm-btn-line px-4" style="--ink-on:#e9e2d1">{label}</a>' if label else ""
        bar = f'''
  <div class="book-bar lg:hidden" role="region" aria-label="Reservar">
    <a href="reservas.html" class="fm-btn fm-btn-book flex-1">Reservar mesa</a>{second}
  </div>'''
    book_head = "" if key == "reservas" else '\n      <a href="reservas.html" class="fm-btn fm-btn-book hidden min-h-[2.75rem] px-4 text-[0.85rem] sm:inline-flex">Reservar</a>'
    return f'''<!doctype html>
<!-- Generado por fishmarket/_src/build.py: editar el <main> en _src/{key}.main.html -->
<html lang="es" data-brand="fishmarket" data-tone="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>{p["title"]}</title>
  <meta name="description" content="{p["desc"]}">
  <meta name="theme-color" content="#223a84">
  <link rel="icon" href="../assets/img/fishmarket/barco-blanco.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800;900&family=Noto+Sans+Canadian+Aboriginal:wght@400;500;600&family=Beth+Ellen&display=swap" rel="stylesheet">{preload}
  <link rel="stylesheet" href="../assets/css/styles.css">
  <script type="module" src="../assets/js/main.js"></script>
  <script type="module" src="../assets/js/{p["js"]}"></script>
</head>
<body class="overflow-x-clip antialiased">
  <a href="#contenido" class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-[#e9e2d1] focus:px-4 focus:py-2 focus:text-[#223a84]">Saltar al contenido</a>

  <header class="site-nav">
    <a href="./" class="flex items-center gap-2.5" aria-label="Fish Market by La Fragata, inicio">
      <img src="../assets/img/fishmarket/barco-blanco.png" alt="" width="581" height="463" class="h-8 w-auto">
      <img src="../assets/img/fishmarket/wordmark-blanco.png" alt="" width="900" height="209" class="h-7 w-auto">
    </a>
    <nav aria-label="Principal" class="col-start-2 hidden items-center gap-7 text-[0.95rem] lg:flex">
{nav}
      <span class="muted cursor-not-allowed" aria-disabled="true" title="Próximamente">Carta</span>
      <span class="muted cursor-not-allowed" aria-disabled="true" title="Próximamente">Gift Cards</span>
    </nav>
    <div class="col-start-3 flex items-center justify-self-end gap-3">{book_head}
      <button type="button" class="grid size-11 place-items-center lg:hidden" data-menu-toggle aria-expanded="false" aria-controls="menu" aria-label="Abrir menú">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M4 8h16M4 16h16"/></svg>
      </button>
    </div>
  </header>

  <div id="menu" class="menu-sheet lg:hidden" data-open="false">
    <button type="button" class="absolute right-4 top-4 grid size-11 place-items-center" data-menu-toggle aria-label="Cerrar menú">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>
    </button>
    <nav aria-label="Menú" class="grid gap-1">
{sheet}
    </nav>
    <p class="mt-8 text-[0.95rem] text-white/85">Carta, Gift Cards y pedidos llegan pronto.</p>
  </div>

{main.rstrip()}

  <footer class="border-t-2 border-[#e9e2d1]/15 px-4 pb-32 pt-12 lg:px-10 lg:pb-12">
    <div class="mx-auto grid max-w-7xl gap-10 text-[0.98rem] sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <img src="../assets/img/fishmarket/logo-blanco.png" alt="Fish Market by La Fragata" width="653" height="551" class="h-20 w-auto">
        <p class="hand mt-4 text-[1.2rem] text-[#f2b07d]">Muchas formas de probar el mar</p>
      </div>
      <div>
        <p class="muted font-semibold">Sede</p>
        <p class="mt-2">Carrera 9 # 77-1, Bogotá<br>Todos los días, 12 m a 6 p. m.</p>
      </div>
      <nav aria-label="Pie de página" class="grid content-start gap-2">
        <a class="underline-offset-4 hover:underline" href="festival.html">Festival</a>
        <a class="underline-offset-4 hover:underline" href="reservas.html">Reservas</a>
        <a class="underline-offset-4 hover:underline" href="eventos.html">Eventos</a>
        <a class="underline-offset-4 hover:underline" href="contacto.html">Sede y contacto</a>
      </nav>
      <div class="grid content-start gap-2">
        <a class="underline-offset-4 hover:underline" href="../giratorio/">Parte de Grupo Fragata</a>
        <a class="muted text-[0.9rem] underline-offset-4 hover:underline" href="https://wa.me/573102145472">Reservas por WhatsApp</a>
      </div>
    </div>
  </footer>
{bar}
</body>
</html>
'''

for key, p in PAGES.items():
    src = HERE / f"{key}.main.html"
    if src.exists():
        (OUT / f"{key}.html").write_text(shell(key, p, src.read_text()))
        print("ok", key)
