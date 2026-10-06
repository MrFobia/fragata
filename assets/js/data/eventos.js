// Contenido de Eventos. Fuente: HTML "Eventos Grupo La Fragata" (index_5.html, carpeta HTML Eventos del Drive)
// y Mapa Web v0.2. Por marca: Giratorio tiene 4 espacios; Casa Fish Market 77 va en la web de Fish Market.

const sociales = ["Cumpleaños", "Graduaciones", "Pedidas de manos", "Matrimonios", "15 años", "Primeras comuniones", "Baby showers", "Confirmaciones", "Bautizos", "Aniversarios", "Proms", "Reuniones familiares", "Bar Mitzvahs", "Otros"];
const corporativos = ["Juntas directivas", "Asambleas", "Comités directivos", "Entrenamientos corporativos", "Alineaciones estratégicas", "Conferencias", "Convenciones", "Seminarios", "Foros", "Lanzamientos de producto", "Activaciones de marca", "Celebraciones de cierre de año", "Ruedas de prensa", "Team building", "Desayunos / almuerzos / cenas de negocios", "Otra celebración corporativa"];

const menus = {
  "Recomendados del Chef": "Una selección de platos elegidos por nuestros chefs para crear una experiencia que representa lo mejor de nuestras cocinas.",
  "Tipo Cóctel": "Pasabocas servidos durante el evento, perfectos para una experiencia dinámica en la que los invitados pueden conversar y recorrer el espacio.",
  "Menú Cerrado": "Crea un menú de varios tiempos a partir de nuestras cartas, de acuerdo con el estilo y las necesidades de tu evento.",
  "Para Compartir": "Una selección de platos servidos al centro de la mesa para compartir y disfrutar diferentes sabores.",
  "Coffee Breaks": "Una pausa con bebidas y bocados dulces y salados, ideal para acompañar reuniones, jornadas de trabajo y eventos corporativos.",
  "Corporativo": "Un menú para empresas ideal para un presupuesto ajustado manteniendo la esencia Fragata. Desde 25 personas en adelante.",
  "Catering": "Llevamos nuestra cocina y servicio al lugar que elijas, con una propuesta diseñada especialmente para tu evento.",
  "Bebidas": "Opciones con y sin alcohol, desde bebidas tradicionales hasta propuestas de barra y coctelería personalizadas.",
};

const experiencias = {
  "La Travesía del Mar": "Una tarde entre amigos o en familia para disfrutar ceviches, sushis y baos, mientras el chef comparte la historia detrás de cada creación. Una experiencia para probar de todo, descubrir nuevos sabores y compartir alrededor de la mesa.",
  "Clases de sushi y ceviches": "",
  "Cata de vinos": "",
  "Talleres de mixología": "",
  "Experiencia corporativa a través de la innovación": "En alianza con la consultora Enconcreto, creamos experiencias gastronómicas que conectan a los equipos y fortalecen la estrategia, la innovación y la alineación.",
};

const pick = (obj, keys) => keys.map((k) => ({ nombre: k, desc: obj[k] }));
const IMG = "../assets/img/giratorio/eventos/";

export const eventos = {
  giratorio: {
    whatsapp: "573145974455",
    intro: [
      "Nacimos con la visión de ofrecer experiencias gastronómicas memorables, y más de seis décadas después, seguimos creyendo que los mejores momentos pasan alrededor de una mesa.",
      "Hoy combinamos la alta cocina, la excelencia en el servicio, el cuidado por cada detalle y la calidez de nuestro equipo para hacer de cada evento, un momento inolvidable.",
    ],
    momentos: [
      { nombre: "Sociales y familiares", lema: "Celebramos contigo los momentos que marcan la vida", items: sociales },
      { nombre: "Corporativos", lema: "Convertimos tus encuentros de negocio en experiencias impecables", items: corporativos },
    ],
    espacios: [
      {
        id: "giratorio",
        nombre: "La Fragata Giratorio",
        capacidad: [120, 300],
        desc: "Espacio ícono de Bogotá con una experiencia única desde las alturas. La vista de 360 grados y el movimiento giratorio del restaurante permiten descubrir la ciudad desde una perspectiva excepcional.",
        horario: "12:00 m. – 3:00 a. m.",
        fotos: [
          { src: `${IMG}giratorio-noche`, alt: "Mesas servidas de noche junto a los ventanales de La Fragata Giratorio, con la ciudad iluminada" },
          { src: `${IMG}giratorio-1`, alt: "Barra y salón circular de La Fragata Giratorio con vista a la ciudad" },
          { src: `${IMG}giratorio-2`, alt: "Mesa servida junto a los ventanales de La Fragata Giratorio" },
          { src: `${IMG}giratorio-3`, alt: "Barra de bebidas y ventanales de La Fragata Giratorio" },
        ],
        distribuciones: [
          { nombre: "Mesa ancha", detalle: "8 personas por mesa", capacidad: "120 – 140 personas", plano: `${IMG}planos/giratorio-mesa-ancha.webp`, alt: "Plano de montaje mesa ancha: mesas de tres módulos alrededor del salón circular" },
          { nombre: "Mesa larga", detalle: "6 a 10 personas por mesa", capacidad: "120 – 140 personas", plano: `${IMG}planos/giratorio-mesa-larga.webp`, alt: "Plano de montaje mesa larga: mesas largas alrededor del salón circular" },
          { nombre: "Cóctel de pie", detalle: "", capacidad: "300 personas", plano: `${IMG}planos/giratorio-coctel.webp`, alt: "Plano de montaje cóctel de pie: ocho mesas altas alrededor del salón circular" },
        ],
      },
      {
        id: "terraza",
        nombre: "La Terraza",
        capacidad: [300, 500],
        desc: "Un espacio amplio y completamente personalizable para grandes eventos. Ubicada en el piso 12, ofrece una vista privilegiada de Bogotá y la libertad de transformar cada detalle de acuerdo con el concepto de la celebración.",
        horario: "12:00 m. – 3:00 a. m.",
        incluye: "Montaje 100% personalizado",
        fotos: [
          { src: `${IMG}terraza-1`, alt: "Terraza vista desde el costado, con el volumen circular del restaurante Giratorio al fondo" },
          { src: `${IMG}terraza-2`, alt: "Terraza del piso 12 con vista a la ciudad y los cerros, y una torre de vidrio al fondo" },
          { src: `${IMG}terraza-3`, alt: "Terraza abierta con jardineras y vista panorámica de Bogotá bajo un cielo con nubes" },
        ],
        distribuciones: [
          { nombre: "Plano del espacio", detalle: "Medidas en metros", capacidad: "300 – 500 personas", plano: `${IMG}planos/terraza-plano.webp`, alt: "Plano de La Terraza con medidas en metros, junto a la Calle 100 y el volumen circular del Giratorio" },
        ],
      },
      {
        id: "bar-100",
        nombre: "Bar 100",
        capacidad: [22, 50],
        desc: "Un espacio privado y acogedor, con una vista de 180 grados hacia Bogotá. Cuenta con barra de bar, chimenea y una distribución flexible que permite dividirlo o ampliarlo según las características de cada evento.",
        horario: "12:00 m. – 3:00 a. m.",
        incluye: "TV, video beam y sonido",
        fotos: [
          { src: `${IMG}bar100-1`, alt: "Barra del Bar 100 con banquetas, repisas de licores y ventanales con vista a la ciudad" },
          { src: `${IMG}bar100-2`, alt: "Salón del Bar 100 con mesas de madera, lámparas de cristal y vista a las plantas" },
          { src: `${IMG}bar100-3`, alt: "Salón del Bar 100 con mesas servidas, muro de ladrillo y jardín al otro lado del vidrio" },
        ],
        distribuciones: [
          { nombre: "Mesa imperial", detalle: "", capacidad: "22 personas", plano: `${IMG}planos/bar100-imperial.webp`, alt: "Plano mesa imperial en Bar 100: una mesa larga central" },
          { nombre: "Mesa libre", detalle: "", capacidad: "25 – 30 personas", plano: `${IMG}planos/bar100-libre.webp`, alt: "Plano mesa libre en Bar 100: mesas de seis puestos distribuidas por el salón" },
          { nombre: "Auditorio", detalle: "", capacidad: "30 – 40 personas", plano: `${IMG}planos/bar100-auditorio.webp`, alt: "Plano auditorio en Bar 100: sillas en filas" },
          { nombre: "Cóctel de pie", detalle: "", capacidad: "30 – 50 personas", plano: `${IMG}planos/bar100-coctel.webp`, alt: "Plano cóctel de pie en Bar 100: mesas altas distribuidas por el salón" },
        ],
      },
      {
        id: "salon-phillipe",
        nombre: "Salón Phillipe",
        capacidad: [24, 100],
        desc: "Un salón versátil, ideal para eventos de mayor formato. Su vista a las montañas de Bogotá y el acceso directo a la terraza crean el ambiente perfecto para convenciones, reuniones, encuentros sociales y celebraciones.",
        horario: "12:00 m. – 3:00 a. m.",
        incluye: "TV, video beam y sonido",
        fotos: [
          { src: `${IMG}phillipe-1`, alt: "Salón Phillipe montado con mesas largas de mantel blanco, arreglos florales y pantalla de proyección" },
          { src: `${IMG}phillipe-2`, alt: "Salón Phillipe con mesas redondas, sillas doradas, flores y vista a las montañas" },
          { src: `${IMG}phillipe-3`, alt: "Salón Phillipe con mesas montadas, piso de cuadros y ventanales con vista a la ciudad" },
        ],
        distribuciones: [
          { nombre: "Conferencia", detalle: "", capacidad: "24 – 30 personas", plano: `${IMG}planos/phillipe-conferencia.webp`, alt: "Plano del Salón Phillipe en montaje de conferencia" },
          { nombre: "Espina de pescado", detalle: "", capacidad: "60 – 70 personas", plano: `${IMG}planos/phillipe-espina.webp`, alt: "Plano del Salón Phillipe en montaje espina de pescado, con mesas largas en diagonal" },
          { nombre: "Mesa redonda", detalle: "", capacidad: "60 – 70 personas", plano: `${IMG}planos/phillipe-redonda.webp`, alt: "Plano del Salón Phillipe con cinco mesas redondas de ocho puestos" },
          { nombre: "Cóctel de pie", detalle: "", capacidad: "90 – 100 personas", plano: `${IMG}planos/phillipe-coctel.webp`, alt: "Plano del Salón Phillipe en montaje de cóctel de pie" },
        ],
      },
    ],
    // Mapa v0.2: Giratorio no incluye catering ni La Travesía del Mar (son de Fish Market).
    menus: pick(menus, ["Recomendados del Chef", "Tipo Cóctel", "Menú Cerrado", "Para Compartir", "Coffee Breaks", "Corporativo", "Bebidas"]),
    experiencias: pick(experiencias, ["Clases de sushi y ceviches", "Cata de vinos", "Talleres de mixología", "Experiencia corporativa a través de la innovación"]),
    calendario: [{ fecha: "2026-12-31", dia: "31 de diciembre", nombre: "Cena San Silvestre", desc: "Fiesta de fin de año." }],
  },

  fishmarket: {
    whatsapp: "573145974455",
    intro: [
      "Nacimos con la visión de ofrecer experiencias gastronómicas memorables, y más de seis décadas después, seguimos creyendo que los mejores momentos pasan alrededor de una mesa.",
      "En Fish Market celebramos con muchas formas de probar el mar: ceviches, sushis y baos al centro de la mesa, en una casa pensada para compartir.",
    ],
    momentos: [
      { nombre: "Sociales y familiares", lema: "Celebramos contigo los momentos que marcan la vida", items: sociales },
      { nombre: "Corporativos", lema: "Convertimos tus encuentros de negocio en experiencias impecables", items: corporativos },
    ],
    espacios: [
      {
        id: "casa77",
        nombre: "Casa Fish Market 77",
        direccion: "Carrera 9 # 77-19",
        capacidad: [65, 100],
        desc: "Una casa privada ubicada en una de las zonas más exclusivas de Bogotá. Con un ambiente versátil que permite crear celebraciones personalizadas, con la privacidad y el carácter de una experiencia diseñada exclusivamente para cada evento.",
        horario: "12:00 m. – 3:00 a. m.",
        incluye: "TV, sistema de sonido y zona pequeña de parqueadero",
        fotos: [
          { src: "../assets/img/fishmarket/casa/terraza-noche", alt: "Terraza de Casa Fish Market 77 de noche: muro de ladrillo iluminado, toldo azul, mesas de madera y flores naranjas" },
          { src: "../assets/img/fishmarket/casa/terraza-dia", alt: "Terraza de Casa Fish Market 77 de día bajo el toldo azul, con mesas de madera y un ramo de flores rojas" },
          { src: "../assets/img/fishmarket/casa/salon", alt: "Salón interior de Casa Fish Market 77 con piso de madera, mesas servidas y lámpara de globos de colores" },
        ],
        distribuciones: [
          { nombre: "Mesa larga", detalle: "", capacidad: "80 personas", plano: "../assets/img/fishmarket/casa/plano-mesa-larga.webp", alt: "Plano de montaje en mesa larga de Casa Fish Market 77" },
          { nombre: "Cóctel de pie", detalle: "", capacidad: "100 personas", plano: "../assets/img/fishmarket/casa/plano-coctel.webp", alt: "Plano de montaje cóctel de pie de Casa Fish Market 77" },
        ],
      },
    ],
    menus: pick(menus, Object.keys(menus)),
    experiencias: pick(experiencias, ["La Travesía del Mar", "Clases de sushi y ceviches", "Cata de vinos", "Talleres de mixología"]),
    calendario: [{ fecha: "2026-12-31", dia: "31 de diciembre", nombre: "Cena San Silvestre", desc: "Fiesta de fin de año." }],
  },
};
