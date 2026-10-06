---
name: La Fragata Giratorio
description: Un servicio de almuerzo a noche en el piso 12; el scroll es la hora y la luz del ventanal cruza el mantel.
colors:
  ink: "#17213a"
  primary: "#223a84"
  secondary: "#506c9b"
  wine: "#51122b"
  wine-deep: "#64183a"
  olive: "#646637"
  cloth-noon: "#e8ecf1"
  cloth-afternoon: "#dfe4eb"
  cloth-late: "#c2c4ab"
  cloth-blue-hour: "#2b344a"
  on-dark: "#eef1f5"
  muted-on-light: "#33466a"
  muted-on-night: "#c3ccdb"
  placeholder: "#5a6886"
  fm-wall: "#223a84"
  fm-night: "#14224f"
  fm-paper: "#e9e2d1"
  fm-orange: "#da5f27"
  fm-orange-ink: "#b9481b"
  fm-orange-deep: "#a33f17"
  fm-peach: "#f2b07d"
  fm-green: "#8fa454"
  fm-sky: "#427ba2"
  fm-muted-on-paper: "#344d82"
  fm-placeholder: "#5d6f96"
typography:
  display:
    fontFamily: "Sorento, Marcellus, Georgia, serif"
    fontSize: "clamp(2.75rem, 10.5vw, 5.75rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Sorento, Marcellus, Georgia, serif"
    fontSize: "clamp(2.25rem, 7vw, 4.5rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Sorento, Marcellus, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.25
  numeral:
    fontFamily: "Sorento, Marcellus, Georgia, serif"
    fontSize: "clamp(4.5rem, 22vw, 7rem)"
    fontWeight: 400
    lineHeight: 1
    fontFeature: "\"tnum\""
  body:
    fontFamily: "Noto Sans Canadian Aboriginal, Noto Sans, system-ui, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Noto Sans Canadian Aboriginal, Noto Sans, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 500
    lineHeight: 1.4
  hour-stamp:
    fontFamily: "Noto Sans Canadian Aboriginal, Noto Sans, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    letterSpacing: "0.02em"
    fontFeature: "\"tnum\""
  fm-poster:
    fontFamily: "Big Shoulders Display, Figtree, Impact, sans-serif"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.005em"
  fm-forma:
    fontFamily: "Big Shoulders Display, Figtree, Impact, sans-serif"
    fontSize: "clamp(2.6rem, 11vw, 5.2rem)"
    fontWeight: 900
    lineHeight: 0.9
  fm-numeral:
    fontFamily: "Big Shoulders Display, Figtree, Impact, sans-serif"
    fontWeight: 800
    letterSpacing: "0.04em"
    fontFeature: "\"tnum\""
  fm-headline:
    fontFamily: "Filson Pro, Figtree, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 9vw, 5.4rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  fm-title:
    fontFamily: "Filson Pro, Figtree, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  fm-label:
    fontFamily: "Filson Pro, Figtree, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 800
    letterSpacing: "0.06em"
  fm-body:
    fontFamily: "Noto Sans Canadian Aboriginal, Noto Sans, system-ui, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.625
  fm-hand:
    fontFamily: "Beth Ellen, cursive"
    fontWeight: 400
    lineHeight: 1
rounded:
  focus: "4px"
  field: "0.9rem"
  day: "1.1rem"
  panel: "1.25rem"
  sheet: "1.75rem"
  pill: "999px"
  fm-tab: "0.3rem"
  fm-ticket: "0.35rem"
  fm-bar: "0.6rem"
spacing:
  gutter: "1.25rem"
  gutter-desktop: "2.5rem"
  stack: "2rem"
  section: "7rem"
  section-desktop: "10rem"
  container: "80rem"
components:
  button-book:
    backgroundColor: "{colors.wine}"
    textColor: "#f7eef1"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "3.25rem"
  button-book-hover:
    backgroundColor: "{colors.wine-deep}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "3.25rem"
  button-step:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "3.25rem"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "2.6rem"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
  input:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.75rem 1rem"
    height: "3.25rem"
  slot:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    height: "3rem"
  slot-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.cloth-noon}"
  sheet:
    backgroundColor: "{colors.on-dark}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    width: "40rem"
  book-bar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.pill}"
    padding: "0.5rem"
  fm-button-book:
    backgroundColor: "{colors.fm-orange-ink}"
    textColor: "#ffffff"
    typography: "{typography.fm-label}"
    rounded: "{rounded.fm-ticket}"
    padding: "0 1.35rem"
    height: "3.25rem"
  fm-button-book-hover:
    backgroundColor: "{colors.fm-orange-deep}"
  fm-button-line:
    backgroundColor: "transparent"
    textColor: "{colors.fm-paper}"
    typography: "{typography.fm-label}"
    rounded: "{rounded.fm-ticket}"
    padding: "0 1.35rem"
    height: "3.25rem"
  fm-button-step:
    backgroundColor: "{colors.fm-paper}"
    textColor: "{colors.fm-night}"
    typography: "{typography.fm-label}"
    rounded: "{rounded.fm-ticket}"
    padding: "0 1.35rem"
    height: "3.25rem"
  fm-tab:
    backgroundColor: "transparent"
    textColor: "{colors.fm-paper}"
    rounded: "{rounded.fm-tab}"
    padding: "0 1rem"
    height: "2.9rem"
  fm-tab-selected:
    backgroundColor: "{colors.fm-paper}"
    textColor: "{colors.fm-wall}"
  fm-input:
    backgroundColor: "#ffffff"
    textColor: "{colors.fm-wall}"
    rounded: "{rounded.fm-ticket}"
    height: "3.25rem"
  fm-dish-card:
    backgroundColor: "{colors.fm-paper}"
    textColor: "{colors.fm-wall}"
    typography: "{typography.fm-title}"
    padding: "0.6rem 0.6rem 1rem"
  fm-band:
    backgroundColor: "{colors.fm-green}"
    textColor: "{colors.fm-night}"
    padding: "0.55rem 0.9rem"
  fm-book-bar:
    backgroundColor: "{colors.fm-night}"
    rounded: "{rounded.fm-bar}"
---

# Design System: La Fragata Giratorio

## Overview

**Creative North Star: "La luz que gira"**

El sitio es un servicio de almuerzo a noche en el piso 12 del World Trade Center. El scroll es el tiempo: la hora avanza de 12:40 a 21:30, el mantel cambia de color con ella y la sombra borrosa de un ventanal cruza el mantel y los platos juntos, como el salón gira mientras la mesa se queda. No hay fondo fijo: el fondo es un mantel iluminado por la hora. Los platos reales del festival se muestran en fotografía cenital editada con IA desde las fotos crudas del cliente: lino oscuro, luz dura de ventanal y tonos bajos y cálidos, como en el tablero de Pinterest del cliente. Esas fotos traen su propia luz, así que van por encima de la sombra del sitio. En Reservas, la mesa del cliente sigue siendo un plato recortado sobre el mantel, porque ahí la hora elegida tiene que mover la luz.

La densidad es baja y editorial: titulares grandes en una display glífica con remates abiertos, texto corrido corto en una sans humanista, mucho mantel entre bloque y bloque. El color de marca vive en la tinta y en la luz, no en superficies decorativas. El vino es la única nota cálida y se guarda para la acción de reservar.

**Una plantilla, dos marcas.** Cada página declara `<html data-brand="giratorio|fishmarket">` y los tokens `--brand-*` en `src/input.css` resuelven color y tipografía. Las primeras ocho secciones registran la expresión Giratorio (Inicio, Festival, Reservas). La expresión Fish Market ya está construida (Inicio, Festival, Reservas, Eventos, Sedes) y es otro mundo: no hereda el mantel, la luz ni el vino. Va documentada aparte, en la segunda parte de este archivo («Expresión Fish Market»), con sus tokens bajo el prefijo `fm-` en el frontmatter. Ninguna regla de una marca aplica a la otra salvo que se diga.

**Key Characteristics:**
- El fondo es `--cloth`, escrito por el rig de luz según la hora; nunca un color fijo por sección.
- Sombra de ventanal: paños anchos y parteluces finos, desenfocados, en `multiply`, con el ángulo de la hora.
- Fotos cenitales de plato a sangre en marcos cuadrados (o 4:5), sin radio, que se asientan al entrar (escala 1.12 → 1 y brillo 0.7 → 1, ligado al scroll).
- En Reservas, plato recortado sobre el mantel, con sombra de contacto y rotación de pocos grados ligada a la hora.
- Display glífica en peso 400 para titulares; sans humanista para lectura; horas en cifras tabulares.
- Formas en píldora y contornos interiores de 1px en lugar de bordes.
- Vino reservado para reservar.

## Colors

Una paleta fría de tinta y azules sobre un mantel que pasa de lino a oliva a marino con la hora, con una sola nota de vino.

### Primary
- **Azul Fragata** (primary): anillo de foco de los campos y contorno de foco de las escalas, días y franjas horarias. Es el azul de interacción, no de superficie.

### Secondary
- **Azul Ventanal** (secondary): la luz fría de la ciudad que entra de noche por el ventanal (`light-rig-night`, `screen`, opacidad hasta 0.16). No se usa como color de texto ni de fondo de bloque.

### Tertiary
- **Vino Reserva** (wine): fondo del botón de reservar ("Reservar mesa", "Confirmar reserva", "Reservar para probarlo"), en la barra fija del celular y en línea. Texto encima en rosa pálido (#f7eef1).
- **Vino Profundo** (wine-deep): hover del botón de reservar.

### Neutral
- **Tinta Marina** (ink): texto sobre mantel claro, chip e indicador seleccionados, botón de paso ("Continuar", "Enviar mi opinión"), fondo del menú móvil y de la barra de reserva; también es el mantel de las 21:30.
- **Oliva Atardecer** (olive): el mantel de las 18:00. Solo aparece como color de mantel, nunca como acento.
- **Lino de Mediodía** (cloth-noon): el mantel a las 12:00 y el valor de respaldo si el JS no corre.
- **Lino de Tarde** (cloth-afternoon): el mantel de las 15:00 y el fondo del área de imagen en la hoja de plato.
- **Lino Dorado** (cloth-late): el mantel de las 17:12, transición del lino al oliva.
- **Hora Azul** (cloth-blue-hour): el mantel de las 19:36.
- **Papel Claro** (on-dark): texto sobre mantel oscuro, fondo de tarjetas de formulario y de la hoja de plato.
- **Tinta Suave** (muted-on-light): texto secundario sobre mantel claro.
- **Niebla Nocturna** (muted-on-night): texto secundario sobre mantel de noche; entre luminancia 0.06 y 0.2 el rig usa #e6e9ee.
- **Gris Pizarra** (placeholder): placeholder de campos sobre fondo claro; sobre mantel oscuro, #aeb9cc.

### Named Rules
**The Cloth Is the Clock Rule.** El fondo de página y de la barra de navegación es siempre `var(--cloth)` y el texto `var(--ink-on)`. `assets/js/light.js` interpola el mantel entre seis paradas (12:00 lino, 15:00, 17:12, 18:00 oliva, 19:36 hora azul, 21:30 tinta), y cuando la luminancia del mantel cae por debajo de 0.2 invierte la tinta a Papel Claro y marca `html[data-tone="dark"]`. Una superficie nueva declara su hora con `data-hour` en vez de pintar un fondo.

**The Wine Reserve Rule.** El vino es la acción de reservar y nada más. Si un elemento en vino no lleva a reservar, sobra.

## Typography

**Display Font:** Sorento (con Marcellus como sustituto activo y Georgia de respaldo)
**Body Font:** Noto Sans Canadian Aboriginal (con Noto Sans y system-ui)
**Label/Mono Font:** la misma sans del texto; las horas usan cifras tabulares

**Character:** Una display glífica de remates abiertos, clásica y de grabado, contra una sans humanista tranquila. Sorento no está disponible todavía, así que Marcellus es lo que realmente se ve en pantalla; cuando lleguen los archivos del cliente, Sorento entra primera en la pila sin tocar el resto. Pulshkin High (fuente de detalle de la marca) está declarada en `--brand-font-detail`, pero ninguna superficie la usa.

### Hierarchy
- **Display** (400, clamp(2.75rem, 10.5vw, 5.75rem), 0.98): el H1 de cada página ("Festival de Ceviches de Alta Cocina"). La frase de marca "Un viaje a la alta cocina" llega a clamp(2.75rem, 10vw, 6rem) con interlineado 1.
- **Headline** (400, clamp(2.25rem, 7vw, 4.5rem), 1.02): H2 de sección; ancho máximo cerca de 18ch cuando va solo.
- **Title** (400, 1.75rem, 1.25): títulos de paso en Reservas. Nombres de plato en tarjeta entre 1.45rem y 1.6rem; título de la hoja de plato 2.25rem. El menú móvil usa la display a 2.6rem con interlineado 1.15.
- **Numeral** (400, clamp(4.5rem, 22vw, 7rem), 1, tabulares): el contador de personas.
- **Body** (400, 1.02 a 1.15rem, 1.625): párrafos de 34 a 56ch; el secundario va en `muted`.
- **Label** (500, 0.95rem): etiquetas de campo y leyendas; las notas pequeñas bajan a 0.85 a 0.9rem en peso 400.
- **Hour stamp** (400, 0.95rem, 0.02em, tabulares): la hora en la barra de navegación y los horarios.

### Named Rules
**The Single Weight Display Rule.** Los titulares en la display van siempre en peso 400 con `text-wrap: balance` y -0.01em; la jerarquía sale del tamaño, nunca de la negrita.

**The Tabular Hour Rule.** Toda hora, fecha y conteo se compone en cifras tabulares. No hay un reloj visible en el header: se quitó el 05-oct-2026 porque se leía como una hora real sin explicación; la hora del sitio se nota solo en la luz.

## Layout

Teléfono primero. El margen lateral es 1.25rem; en escritorio el contenido se alinea a un contenedor de 80rem con 2.5rem de margen, y los bloques que sangran (tira de platos, columnas de texto junto al plato) calculan ese mismo borde con `max(2.5rem, calc((100vw - 80rem) / 2 + 2.5rem))`. Las secciones respiran 7rem verticales en el celular y entre 8 y 10rem en escritorio; dentro de un bloque, la pila típica es 1.25 a 2rem entre titular, texto y acciones.

En escritorio la página usa una retícula de 12 columnas: el plato ocupa 6 o 7 columnas y sangra por el borde derecho (hasta 80 a 92vh de alto), y el texto ocupa 5 o 6. En el celular el plato llena entre 42 y 56svh, cortado por el borde derecho, y el texto va debajo. En Reservas el plato queda fijo (`sticky`) en la mitad izquierda mientras el formulario avanza a la derecha.

La galería del festival va en 2, 3 y 4 columnas (md, lg); la tira de platos en Inicio es un carrusel horizontal con `scroll-snap` y columnas de min(72vw, 22rem). La barra de reserva fija ocupa el borde inferior del celular, así que las secciones finales dejan 8 a 9rem de aire abajo.

Breakpoints en uso: 40rem (celular angosto, la sombra se refuerza), 48rem (la hoja pasa de inferior a modal), 64rem (`lg`, retícula de escritorio, la barra de reserva se recoge a la esquina).

## Elevation & Depth

La profundidad viene de la luz, no de una pila de tarjetas. Hay tres capas fijas: los platos recortados (z 1), la sombra del ventanal (z 2, fija y en `multiply`) y el texto y las fotos (z 3). Las fotos editadas traen la sombra del ventanal adentro, así que el rig no las cruza, así que la sombra cruza mantel y platos pero nunca vela una letra. La sombra del ventanal está desenfocada (18px); su opacidad, su ángulo (de -20deg hacia -67deg) y su desplazamiento siguen la hora, y de noche cede el lugar a la luz fría de la ciudad. Los platos llevan una sombra de contacto doble cuyo largo y dirección (`--psx`, `--psy`) giran con la tarde y desaparecen al encenderse la noche.

### Shadow Vocabulary
- **Ventanal** (franjas de `rgb(23 33 58 / 0.9)` desenfocadas 18px, opacidad `--shadow-o` entre 0 y 0.24, 2.3 veces más en pantallas angostas): la luz de la hora sobre el mantel.
- **Luz de ciudad** (franjas Azul Ventanal desenfocadas 28px en `screen`, opacidad `--night` × 0.16): la noche entrando por el mismo ventanal.
- **Contacto de plato** (`drop-shadow(var(--psx) var(--psy) 22px rgb(10 16 32 / 0.3)) drop-shadow(0 3px 4px rgb(10 16 32 / 0.25))`): asienta el plato recortado sobre el mantel.
- **Botón de reservar** (`0 10px 22px -12px rgb(10 16 32 / 0.55)`): la única elevación de un control.
- **Barra flotante** (`0 16px 40px -16px rgb(10 16 32 / 0.6)` con `backdrop-filter: blur(12px) saturate(1.2)`): la barra de reserva del celular.
- **Velo de hoja** (`rgb(10 16 32 / 0.55)`): el fondo detrás de la hoja de plato.

### Named Rules
**The Shadow Follows the Hour Rule.** Ninguna sombra de la escena es estática: ventanal y contacto de plato leen las mismas variables de hora. Una sombra nueva sobre el mantel se ata a `--shadow-a`, `--psx` y `--psy`, o no va.

## Shapes

La forma es redonda y blanda: los controles son píldoras (999px), los campos y franjas horarias tienen esquinas suaves (0.9rem), los días 1.1rem, el resumen de reserva 1.25rem y las tarjetas de formulario y la hoja de plato 1.75rem. El plato sin foto es un círculo con contorno. Los contornos se dibujan con `box-shadow: inset 0 0 0 1px` en tinta al 22 a 35%, no con `border`; el seleccionado se rellena de tinta y pierde el contorno. Los separadores son líneas de 1px en tinta al 22%. La única geometría recta y dura es la del ventanal.

**The Lit Photograph Rule.** Una foto de plato es cenital, sobre lino oscuro y con la luz del ventanal de arriba a la izquierda, editada desde la foto real sin cambiar el plato. Va en `.photo-frame` (fondo `#2a2622` mientras carga, sin radio) por encima del rig. El plato recortado sobre el mantel queda solo para Reservas.

## Components

### Buttons
Píldoras táctiles de 3.25rem de alto y peso 500, que se encogen a 0.97 al presionar.
- **Shape:** píldora (999px), 0 1.4rem de relleno, flecha opcional de 18px con trazo 1.5.
- **Reservar:** fondo vino, texto rosa pálido, sombra baja; en hover pasa a vino profundo y la flecha avanza 4px.
- **Fantasma:** sin fondo, contorno interior de 1px en tinta al 35% que se vuelve tinta plena en hover; sigue el tono del mantel.
- **Paso:** fondo tinta y texto Papel Claro ("Continuar", "Enviar mi opinión"); sobre mantel oscuro se invierte a fondo Papel Claro y texto tinta.
- **Deshabilitado:** opacidad 0.4, sin eventos.
- **Focus:** contorno de 2px en `currentColor`, separado 3px, con radio 4px, en todo elemento enfocable.

### Chips
- **Style:** un carril en píldora con tinta al 7% sobre el mantel; cada ficha de categoría mide 2.6rem, 0 1rem y 0.95rem.
- **State:** un indicador de tinta se desliza bajo la ficha activa (0.5s, ease-out-expo) y su texto pasa a Papel Claro. En Festival el carril queda pegado bajo la barra de navegación en el celular.

### Cards / Containers
- **Tarjeta de plato:** sin caja. Es la foto cenital en un marco cuadrado a sangre, con el nombre en la display y la descripción en `muted` debajo; en hover la foto crece 4% en 1.2s. El plato sin foto es un disco con tinta al 6%, contorno al 18% y el barco de la marca a media opacidad.
- **Tarjeta de formulario ("¿Ya probaste?"):** Papel Claro con tinta, radio 1.75rem, relleno 1.25 a 2rem; sus campos son siempre blancos, sin importar la hora.
- **Resumen de reserva:** contorno interior en tinta al 25%, radio 1.25rem, tres datos en cifras de display.

### Inputs / Fields
- **Style:** 3.25rem de alto, 0.75rem 1rem, radio 0.9rem, fondo mezcla de blanco 70% con el mantel, contorno interior de 1px en tinta al 22%. Sobre mantel oscuro: Papel Claro al 7% con contorno al 32%.
- **Focus:** el contorno se engrosa a 2px en Azul Fragata (Papel Claro sobre mantel oscuro).
- **Error:** contorno de 2px y texto de error de 0.875rem; hoy ambos en vino (ver Do's and Don'ts).
- **Escala 1 a 5 y Sí/No:** segmentos de 3rem en píldora suave; el elegido se rellena de tinta.

### Navigation
- **Barra:** fija, transparente sobre el mantel; siempre con fondo `--cloth` opaco, y al bajar suma una línea de tinta al 12%. A la izquierda el barco y "LA FRAGATA" en la display a 1.05rem con 0.12em (es el logotipo, no un rótulo); a la derecha, en celular, el botón de menú.
- **Enlaces:** 0.95rem; un subrayado de 1px se dibuja de izquierda a derecha en hover y en la página actual. Las secciones que aún no existen se muestran en `muted` sin enlace.
- **Celular:** botón de dos líneas que abre una hoja de tinta a pantalla completa, revelada con `clip-path` de arriba abajo, con enlaces en la display a 2.6rem alineados abajo.

### Light Rig (signature)
`light.js` traduce la hora (12 a 22) en `--cloth`, `--ink-on`, `--muted-on`, `--shadow-a`, `--shadow-x`, `--shadow-o`, `--night`, `--psx` y `--psy`. En Inicio y Festival la hora sale de la posición de las secciones con `data-hour`; en Reservas la fija la franja elegida. Los platos con `data-spin` rotan como máximo unos 14deg mientras cruzan la pantalla, nunca dan vueltas. Con movimiento reducido el mantel sigue cambiando de color, pero la sombra no gira y los platos no rotan. Los valores de mediodía viven en `:root` como respaldo sin JS.

### Book Bar (signature)
En el celular, una píldora flotante de tinta al 88% con desenfoque, a 0.75rem de los bordes y sobre el área segura, con "Reservar mesa" en vino ocupando el ancho y una acción fantasma clara al lado. Se esconde hacia abajo cuando la acción de reservar ya está en pantalla. Desde 64rem se recoge a la esquina inferior derecha.

### Sheets and Steps
- **Hoja de plato:** `<dialog>` que sube desde abajo con radio superior de 1.75rem (máx. 40rem, 92dvh); desde 48rem es modal centrado con radio completo que entra a escala 0.98. Velo al 55%.
- **Pasos de reserva:** tres estaciones como barras de 3px que se llenan de tinta; cada paso entra desplazándose 24px desde la derecha. Días en tarjetas de 4.25 × 5rem y horas en una retícula de 5rem con `scroll-snap`; el elegido se rellena con la tinta del mantel actual. Confirmación con un círculo y un visto que se dibujan con el trazo.

### Motion
Dos curvas: `--ease-out-expo` (cubic-bezier(0.16, 1, 0.3, 1)) para entradas, hojas, subrayados e indicadores, y `--ease-out-quart` (cubic-bezier(0.25, 1, 0.5, 1)) para la presión de los botones. El texto aparece subiendo 18px y desenfocado 6px durante 0.9s. El mantel y la tinta cambian en 0.6s lineales. Las páginas cambian con View Transitions y el plato conserva su `view-transition-name` entre Inicio, Festival y la hoja. `prefers-reduced-motion` anula animaciones y transiciones.

## Do's and Don'ts

### Do:
- **Do** pintar el fondo con `var(--cloth)` y el texto con `var(--ink-on)`, y asignar una hora con `data-hour` a cada sección nueva.
- **Do** usar el vino solo en el botón de reservar y su hover (#64183a).
- **Do** mantener las tres capas: platos en z 1, sombra en z 2, texto en z 3 (`.plate`, `.light-rig`, `.layer-text`).
- **Do** editar cada foto de plato desde la cruda real (mismo plato, mismos ingredientes), cenital y con la luz del ventanal, y guardar su prompt como procedencia. Mar Rosado y Santorini son recomposiciones a cenital desde tomas laterales.
- **Do** componer horas, fechas y conteos en cifras tabulares.
- **Do** dibujar contornos con un inset de 1px en tinta translúcida y usar píldoras (999px) para los controles.
- **Do** referenciar los colores por `--brand-*` o por los tokens de Tailwind (`ink`, `primary`, `on-dark`) para que Fish Market se resuelva por tokens.

### Don't:
- **Don't** fijar un color de fondo por sección ni un fondo de video oscuro a sangre; el mantel y la hora hacen ese trabajo.
- **Don't** usar el vino para errores, selección, decoración ni enlaces secundarios.
- **Don't** meter los platos en marcos, rectángulos de foto o tarjetas con fondo.
- **Don't** hacer girar los platos en vueltas completas ni animarlos sin scroll; giran unos grados, la mesa se queda.
- **Don't** poner negrita en la display; la jerarquía es tamaño.
- **Don't** usar Pulshkin High ni otro rótulo de detalle hasta tener el archivo y una superficie que lo justifique.
- **Don't** escribir hexadecimales de Giratorio dentro de componentes nuevos.

---

# Expresión Fish Market (`html[data-brand="fishmarket"]`)

Segunda marca de la plantilla. Sus tokens viven en `src/fishmarket.css` (`--fm-*`) y en el bloque `[data-brand="fishmarket"]` de `src/input.css` (`--brand-*`); en el frontmatter llevan el prefijo `fm-`. Las páginas se generan con `fishmarket/_src/build.py` desde `fishmarket/_src/*.main.html`; el comportamiento compartido está en `assets/js/fm.js`.

## Overview

**Creative North Star: "Cartel chicha del festival"**

El festival se anuncia como se anuncian los festivales en Lima: carteles de papel pegados unos sobre otros en un muro, letras apiladas en degradé de dos tintas y, entre cartel y cartel, la noche de la mesa compartida tomada con flash directo. El muro es el azul Fish Market en todas las páginas, con grano en `soft-light`; encima se pegan carteles con bordes rasgados, engrudo y medio tono, cada uno inclinado unos grados. Los carteles viejos asoman por debajo, recortados por el borde de la pantalla.

La densidad es de cartelera: titulares de cartel que llenan el ancho de su papel, franjas verdes de datos, notas a mano y los 30 platos del festival numerados 01 a 30 en el orden de la carta. El naranja es tinta de cartel, no superficie de interfaz: llena el degradé de las letras y, en su versión oscura, la acción de reservar. Nada se marca solo con color: lo elegido lleva sello.

**Key Characteristics:**
- Muro azul a sangre en toda página, con grano gris en `soft-light` al 35%; nunca un fondo crema editorial ni un video oscuro.
- Carteles de papel: máscara rasgada en raster, engrudo y medio tono encima en `soft-light`, giro de -2 a 2deg y sombra de papel blanda.
- Letras de cartel apiladas, cada palabra ajustada al ancho de su cartel, rotuladas letra por letra, con contorno navy y desregistro azul cielo.
- Platos con flash: fotos cenitales con flash directo en marcos de papel, con fecha de cámara; el plato del hero va recortado sobre el cartel.
- Numeración única: platos 01 a 30, formas 01 a 07, pasos 1·2·3, en la letra de cartel con cifras tabulares.
- Lo elegido lleva sello (círculo con visto), no solo color.
- Movimiento de pegado: el cartel cae con un golpe seco y se asienta; la foto dispara un flash al pasar o enfocar.

## Colors

Un muro azul con cuatro tintas de cartel (naranja, verde, cielo y papel) y una noche más oscura para el contorno.

### Primary
- **Azul Muro** (fm-wall): el fondo de toda página, de la barra de navegación y de los campos elegidos; también la tinta del texto sobre papel.

### Secondary
- **Naranja Cartel** (fm-orange): tinta de las letras apiladas (degradé con Papel Crema y Durazno), punto de página actual en la navegación, halo de foco de campos, selección de texto y aro del indicador de horario. Es tinta de impresión, no color de texto pequeño.
- **Naranja Boleto** (fm-orange-ink): fondo del botón de reservar, del número de plato, del menú móvil, del paso actual y del sello; con texto blanco.
- **Naranja Quemado** (fm-orange-deep): hover del botón de reservar y el naranja de texto sobre papel (precios, notas a mano, errores, el sello «Confirmada»).

### Tertiary
- **Verde Franja** (fm-green): franjas de datos, la cinta de las formas y carteles verdes; siempre con texto Noche. También el punto de «abierto ahora».
- **Azul Cielo** (fm-sky): carteles de fondo y el desregistro detrás de las letras de cartel.
- **Durazno** (fm-peach): el paso medio del degradé de las letras y el color de las notas a mano y números sobre cartel oscuro.

### Neutral
- **Papel Crema** (fm-paper): texto sobre el muro, fondo de cartel claro, tarjeta de plato, hoja de plato, pestaña elegida y botón de paso.
- **Noche** (fm-night): contorno de las letras, fondo de cartel oscuro y de la barra de reserva, texto sobre verde y cielo, fondo de foto mientras carga.
- **Tinta Suave sobre Papel** (fm-muted-on-paper): texto secundario sobre papel (descripciones de plato). Sobre el muro el secundario es Papel Crema al 78% mezclado con el muro.
- **Gris Placeholder** (fm-placeholder): placeholder de campos sobre papel.

### Named Rules
**The Two Oranges Rule.** El Naranja Cartel es tinta de letra grande y de marcas; el texto pequeño naranja usa Naranja Boleto como fondo con texto blanco, o Naranja Quemado como texto sobre papel. Sobre el muro, la nota naranja va en Durazno.

**The Wall Is Blue Rule.** El fondo de toda superficie Fish Market es el Azul Muro. El color de una sección llega pegando un cartel encima, nunca pintando el muro.

## Typography

**Display Font:** Big Shoulders Display (con Figtree e Impact de respaldo), solo para letra de cartel y números
**Heading Font:** Filson Pro (Figtree es lo que se ve hoy, como sustituto)
**Body Font:** Noto Sans Canadian Aboriginal (con Noto Sans y system-ui)
**Hand Font:** Beth Ellen, para notas pintadas a mano

**Character:** Letra condensada de cartel, rotulada y en mayúsculas, contra una geométrica redonda en peso 800 para titulares y etiquetas, y una sans humanista para leer. Beth Ellen pone la mano del rotulista: «Festival de», «Muchas formas de probar el mar», el nombre de la categoría sobre el plato.

### Hierarchy
- **Cartel** (fm-poster; 900, mayúsculas, tamaño ajustado al ancho del cartel por `fitStacks` con tope `data-fit-max`): las palabras del festival y los titulares de cada cartel. Cada línea es una palabra.
- **Forma** (fm-forma; 900, mayúsculas): los nombres de las siete formas, la cinta (clamp(1.9rem, 7vw, 3.4rem)) y el menú móvil (3.4rem, 0.95).
- **Headline** (fm-headline; 800, -0.02em): H2 de sección en Figtree, a veces con una palabra en mano y Durazno. Todos los h1-h3 van en peso 800.
- **Title** (fm-title; 800): nombres de plato en tarjeta.
- **Label** (fm-label; 800, 0.06em, mayúsculas): botones, pestañas, pasos, leyendas de foto (0.78rem, 0.1em) y la franja (clamp(0.95rem, 3.6vw, 1.15rem), 0.02em).
- **Numeral** (fm-numeral; 800, tabulares, 0.04em): números de plato y de forma, días, horas, contador de personas (900).
- **Body** (fm-body; 1.05 a 1.08rem, interlineado relajado): párrafos de 38 a 44ch; descripciones de plato 0.9rem a 1.35.
- **Hand** (fm-hand; 400): notas de 1 a 3.4rem, nunca para texto de lectura.

### Named Rules
**The Lettered Poster Rule.** La letra de cartel se rotula: `fm.js` envuelve cada glifo en su caja con un giro de hasta ±2.1deg y un salto de ±0.024em, fijos por posición; lleva contorno de 0.014em en Noche y dos sombras sin desenfoque (cielo a 0.05em, noche a 0.025em) como desregistro de segunda tinta. La segunda línea invierte el degradé (naranja arriba, crema abajo). La línea visible va con `aria-hidden` y el texto real queda en `aria-label` o `sr-only`.

**The Fit to Paper Rule.** Una palabra de cartel llena el ancho de su cartel al 97%; no se fija su tamaño a mano.

## Layout

Teléfono primero. El margen lateral es 1rem (`px-4`) en el celular y 2.5rem en escritorio, con contenedor de 80rem (`max-w-7xl`); las filas que sangran calculan `max(1.25rem, calc((100vw - 80rem) / 2 + 2.5rem))`. Las secciones respiran 7rem verticales en el celular y 9rem en escritorio.

En escritorio, retícula de 12 columnas: el cartel del hero ocupa 7 y el plato recortado 5, montado sobre el borde del cartel; en Inicio la lista de formas ocupa 7 y la foto de la forma activa queda pegada (`sticky`, top 6rem) en las otras 5. Los carteles de fondo asoman cortados por el borde de la pantalla (`overflow-x: clip` en el html).

Los platos van en filas arrastrables (columnas de min(72vw, 19rem), `scroll-snap` obligatorio, arrastre con mouse) o en rejilla en Festival, bajo pestañas de categoría pegadas. La barra de reserva fija ocupa el borde inferior del celular. Breakpoints en uso: 40rem (sm), 64rem (lg).

## Elevation & Depth

La profundidad es de papel pegado: cada cartel proyecta una sombra blanda que sigue su borde rasgado (`drop-shadow` sobre la máscara), y los carteles se superponen por capas de z. No hay luz que gire ni sombra atada a la hora.

### Shadow Vocabulary
- **Papel pegado** (`drop-shadow(0 18px 22px rgb(5 10 30 / 0.45)) drop-shadow(0 2px 3px rgb(5 10 30 / 0.3))`): todo cartel.
- **Boleto** (`0 10px 18px -8px rgb(5 10 30 / 0.6), 0 2px 3px rgb(5 10 30 / 0.3)`): botón de reservar y de paso, número de plato, pestaña y franja elegidas, paso actual. En hover sube a `0 14px 22px -8px`; al presionar baja a `0 4px 8px -4px`.
- **Cartelito** (`0 20px 34px -24px rgb(0 0 0 / 0.8), 0 2px 4px rgb(0 0 0 / 0.2)`): tarjeta de plato; en hover `0 30px 40px -24px`.
- **Cinta** (`0 14px 28px -18px rgb(0 0 0 / 0.6)`): la cinta verde.
- **Barra** (`0 18px 40px -18px rgb(0 0 0 / 0.7)` más contorno interior de papel al 14%): la barra de reserva.

### Named Rules
**The Soft Paper Rule.** Toda sombra lleva desenfoque. El papel se despega del muro con una sombra blanda; no hay sombras duras desplazadas.

## Shapes

Papel rasgado y boletos. Los carteles no tienen radio: su silueta la da una máscara raster (`torn-alto`, `torn-ancho`, `torn-franja`) estirada a la caja. Los controles tienen esquinas apenas romas (0.3 a 0.35rem), la barra de reserva 0.6rem. El boleto de la reserva lleva dos muescas semicirculares de 0.7rem en los costados. Los contornos son de 2px (`inset`) en papel o muro al 22 a 55%, y las filas de formas se separan con líneas de 2px en papel al 22%. Los únicos círculos son el sello, el punto de página y el de horario.

## Components

### Buttons
Boletos impresos: 3.25rem de alto, Figtree 800 en mayúsculas con 0.06em, flecha de trazo 2.4 que avanza 4px en hover.
- **Reservar:** fondo Naranja Boleto, texto blanco, sombra de boleto; en hover Naranja Quemado y sube 1px.
- **Línea:** contorno interior de 2px en papel al 55%, pleno en hover; sobre papel, el contorno es de muro.
- **Paso:** fondo Papel Crema y texto Noche.
- **Presión:** baja 1px y escala 0.98. **Deshabilitado:** opacidad 0.4, sin sombra.

### Chips
- **Pestañas de categoría:** etiquetas pegadas de 2.9rem con contorno de papel al 35% y el conteo al 70%; la elegida se vuelve papel con texto muro, gira -2deg, lleva un filo inferior de 3px en Naranja Boleto, sombra de boleto y el sello.
- **Escala 1 a 5 y Sí/No:** el elegido pasa a muro con texto papel y filo naranja.

### Cards / Containers
- **Cartel:** papel rasgado con color en `::before` y textura en `::after`; variantes noche (por defecto), papel, naranja, verde y cielo, en forma alta, ancha o franja. El contenido va en z 3 por encima de la textura.
- **Tarjeta de plato (cartelito):** papel con foto cuadrada con flash a 0.6rem del borde, categoría a mano, nombre, descripción en dos líneas y precio en Naranja Quemado. El número en un cuadro Naranja Boleto en la esquina. Gira según `tilts`; en hover se endereza, sube 6px y la foto dispara el flash.
- **Placa de categoría:** el plato sin foto se muestra como un cartelito tipográfico con su nombre en letra de cartel y el fondo de su categoría.
- **Franja:** banda verde de datos, girada 1deg.

### Inputs / Fields
- **Style:** sobre papel, fondo blanco, texto muro, contorno interior de 2px en muro al 30%, radio 0.35rem.
- **Focus:** contorno pleno en muro más halo de 3px en Naranja Cartel al 45%.
- **Error:** contorno de 2px en Naranja Boleto y texto de error en Naranja Quemado, peso 600.

### Navigation
- **Barra:** fondo muro; al bajar suma una línea de papel al 16%. Enlaces en 600; la página actual lleva un punto naranja encima.
- **Celular:** el menú es una hoja Naranja Boleto con los enlaces en letra de cartel a 3.4rem.
- **Barra de reserva:** noche al 90% con radio 0.6rem; reservar y ver festival lado a lado.

### Flash Photo (signature)
Marco de foto con fondo Noche y una fecha de cámara («10 '26») abajo a la derecha, en mono negrita con brillo naranja. Al pasar el puntero o enfocar la tarjeta, un destello radial blanco se apaga en 0.55s. En la lista de formas, cambiar de forma cambia la foto con un fundido y un giro de -2deg y vuelve a disparar el flash.

### Stamp (signature)
Círculo de 1.05 a 1.15rem en Naranja Boleto con un visto blanco y aro de muro, pegado en la esquina superior derecha de lo elegido (pestaña, día, hora). Entra con escala 1.8 y giro -20deg. En la reserva confirmada, el sello «Confirmada» se estampa en Naranja Quemado a -12deg en `multiply`.

### Motion
- **Pegado:** el cartel entra desde escala 1.07, 10px arriba y 3deg más girado, y se asienta en 0.55s con `cubic-bezier(0.2, 1.4, 0.4, 1)`; retardo escalonado por `--d`.
- **Relleno:** el degradé de las letras sube con el scroll (`animation-timeline: view()`, entry 10% a cover 60%).
- **Cinta:** bucle de 38s, pausado en hover.
- **Plato recortado:** gira hasta ±9deg ligado al scroll (`data-spin`).
- **Movimiento reducido:** los carteles ya están pegados, sin cinta, sin relleno, sin flash ni giro del plato; el sello aparece sin animación.

## Do's and Don'ts

### Do:
- **Do** pintar el fondo de toda página Fish Market con el Azul Muro y dar color pegando carteles encima.
- **Do** usar la máscara rasgada, el engrudo y el medio tono raster de `assets/img/fishmarket/papel` para todo cartel.
- **Do** ajustar cada palabra de cartel al ancho de su cartel y rotularla letra por letra.
- **Do** numerar los platos 01 a 30 en el orden de la carta y usar el mismo número en tarjeta, hoja y Festival.
- **Do** marcar lo elegido con sello y forma, además del color.
- **Do** usar Naranja Quemado para el texto naranja sobre papel y Durazno para la nota sobre el muro.
- **Do** dar a cada sombra de papel su desenfoque.

### Don't:
- **Don't** usar el mantel, la luz que gira ni el vino de Giratorio en Fish Market.
- **Don't** poner Naranja Cartel como color de texto pequeño sobre el muro ni sobre papel.
- **Don't** fijar un fondo crema editorial ni un video oscuro a sangre con rejilla de tarjetas.
- **Don't** poner rótulos de sección sobre los titulares; la numeración vive en los platos, las formas y los pasos.
- **Don't** usar sombras duras desplazadas; el papel proyecta sombra blanda.
- **Don't** usar Beth Ellen para texto de lectura ni la letra de cartel para párrafos.
