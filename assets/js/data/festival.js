// Menús del Festival de Ceviches 2026 (octubre y noviembre).
// Fuente: "Menú La Fragata Giratorio Impresión.pdf" y "Menú Fish Market Impresión.pdf" (Drive).
// Precios en COP transcritos a mano del PDF visual (05-oct-2026), no de la extracción de texto.
// foto: nombre de la foto editada con IA (Giratorio: assets/img/giratorio/platos-ia/; Fish Market: assets/img/fishmarket/platos/, flash sobre mantel azul) (cruda de Drive, reiluminada en ChatGPT;
// Mar Rosado y Santorini además recompuestas a vista cenital).

export const festival = {
  giratorio: {
    nombre: "Festival de Ceviches de Alta Cocina",
    intro: "Más de 15 platos creados junto al chef peruano Carlos Accinelli para explorar nuevos sabores. Esta temporada, el ceviche también toma el lugar del plato fuerte.",
    categorias: [
      {
        nombre: "Ceviches",
        nota: "Cómelos con cuchara, aquí la leche de tigre merece estar en cada bocado.",
        platos: [
          { nombre: "Mar Rosado", desc: "Camarones marinados en leche de tigre con sandía y un toque de hondashi.", precio: 43000, foto: "mar-rosado" },
          { nombre: "Santorini", desc: "Atún, aceitunas y tomates marinados en leche de tigre, sobre una base de yogurt griego con aceite de oliva.", precio: 47000, foto: "santorini" },
          { nombre: "El Costero", desc: "Pesca blanca marinada en leche de tigre con suero costeño, acompañada de plátano maduro y tocineta crujiente.", precio: 68000, foto: "el-costero" },
          { nombre: "Sol del Pacífico", desc: "Atún en salsa de maracuyá, con miel, jengibre y aguacate.", precio: 45000, foto: "sol-del-pacifico" },
          { nombre: "Nikkei Blues", desc: "Pesca blanca marinada en leche de tigre, soya y aceite de ajonjolí, acompañada de aguacate y camotes.", precio: 62000, foto: "nikkei-blues" },
          { nombre: "Costa Limeña", desc: "Pesca blanca marinada en leche de tigre, con camotes y cancha.", precio: 50000, foto: "costa-limena" },
          { nombre: "Puerto Caribe", desc: "Camarones marinados en leche de tigre.", precio: 49000, foto: "puerto-caribe" },
        ],
      },
      {
        nombre: "Ceviches en grande",
        nota: "Hay favoritos que merecen más espacio en la mesa. Una selección de nuestros ceviches en plato fuerte.",
        platos: [
          { nombre: "Mar Rosado", desc: "Camarones marinados en leche de tigre con sandía y un toque de hondashi, acompañado de shari.", precio: 91000 },
          { nombre: "Costa Limeña", desc: "Pesca blanca marinada en leche de tigre, con camotes y cancha, acompañado de croquetas de maíz.", precio: 99000 },
          { nombre: "Santorini", desc: "Atún, aceitunas y tomates marinados en leche de tigre, sobre yogurt griego con aceite de oliva, acompañado de hummus y pan pita.", precio: 98000 },
        ],
      },
      {
        nombre: "Tiraditos",
        platos: [
          { nombre: "Tiradito Rocoto", desc: "Finas láminas de pescado blanco en salsa de rocoto y leche de tigre, acompañadas de crispetas.", precio: 50000 },
          { nombre: "Tiradito Trufa y Parmesano", desc: "Finas láminas de pescado blanco sobre una salsa cremosa de trufa, parmesano, mayonesa de la casa y leche de tigre.", precio: 69000, foto: "trufa-parmesano" },
        ],
      },
      {
        nombre: "Tatakis",
        platos: [
          { nombre: "Tataki Coconut Salmon", desc: "Salmón sellado en costra de maíz cancha, sobre leche de tigre con coco, aromatizada con jengibre.", precio: 58000 },
          { nombre: "Tataki Golden Tuna", desc: "Atún sellado sobre una salsa cremosa de ají amarillo, miso y leche de tigre.", precio: 58000 },
          { nombre: "Tataki Tokio Tuna", desc: "Finas láminas de atún sellado y aguacate, sobre fideos con salsa soya, miel, maracuyá y jengibre.", precio: 48000 },
        ],
      },
      {
        nombre: "Tartares",
        platos: [
          { nombre: "Bósforo Tartar", desc: "Salmón marinado con páprika, cebolla blanca y leche de tigre, sobre una base de süzme.", precio: 52000 },
          { nombre: "Trufa Tuna Tartar", desc: "Atún trufado sobre seaweed salad, con quinoa crocante y aguacate.", precio: 70000 },
        ],
      },
    ],
    vinos: {
      nota: "Una copa de vino para acompañar el festival.",
      items: [
        { nombre: "Casa Silva Terroir", desc: "Familia Reserva Sauvignon Blanc, vino chileno", botella: 248000, media: 135000, copa: 51000 },
        { nombre: "Fin del Mundo", desc: "Reserva Pinot Noir, vino argentino", botella: 217000, media: 120000, copa: 48000 },
      ],
    },
  },

  fishmarket: {
    nombre: "Festival de Ceviches, Sushis y Baos",
    intro: "Más de 30 platos creados junto al chef peruano Carlos Accinelli para explorar nuevos sabores. Esta temporada, el ceviche también toma el lugar del plato fuerte.",
    categorias: [
      {
        nombre: "Ceviches",
        nota: "Los ceviches en Fish Market se comen con cuchara, para disfrutar la leche de tigre en cada bocado.",
        platos: [
          { nombre: "Mar Rosado", desc: "Camarones marinados en leche de tigre con sandía y un toque de hondashi.", precio: 40000, foto: "mar-rosado" },
          { nombre: "Santorini", desc: "Atún, aceitunas y tomates marinados en leche de tigre, sobre una base de yogurt griego con aceite de oliva.", precio: 47000, foto: "santorini" },
          { nombre: "El Costero", desc: "Pesca blanca marinada en leche de tigre con suero costeño, acompañada de plátano maduro y tocineta crujiente.", precio: 51000, foto: "el-costero" },
          { nombre: "Puerto Caribe", desc: "Camarones marinados en leche de tigre.", precio: 46000, foto: "puerto-caribe" },
          { nombre: "Sol del Pacífico", desc: "Atún en salsa de maracuyá, con miel, jengibre y aguacate.", precio: 47000, foto: "sol-del-pacifico" },
          { nombre: "Nikkei Blues", desc: "Pesca blanca marinada en leche de tigre, soya y aceite de ajonjolí, acompañada de aguacate y camotes.", precio: 46000, foto: "nikkei-blues" },
          { nombre: "Costa Limeña", desc: "Pesca blanca marinada en leche de tigre, con camotes y cancha.", precio: 35000, foto: "costa-limena" },
          { nombre: "Variedad de Ceviches", desc: "Mar Rosado, El Costero, Santorini y Sol del Pacífico en medias porciones, como entrada para compartir entre 4.", precio: 185000 },
        ],
      },
      {
        nombre: "Tartares",
        platos: [
          { nombre: "Trufa Tuna Tartar", desc: "Tartar de atún trufado sobre seaweed salad, quinoa crocante y aguacate.", precio: 67000 },
          { nombre: "Bósforo Tartar", desc: "Tartar de salmón marinado con páprika, en leche de tigre con süzme.", precio: 54000 },
        ],
      },
      {
        nombre: "Tiraditos",
        platos: [
          { nombre: "Tiradito Rocoto", desc: "Finas láminas de pescado blanco en salsa de rocoto y leche de tigre, acompañadas de crispetas.", precio: 36000 },
          { nombre: "Tiradito Trufa y Parmesano", desc: "Finas láminas de pescado blanco sobre una salsa cremosa de trufa y parmesano.", precio: 50000, foto: "trufa-parmesano" },
        ],
      },
      {
        nombre: "Tatakis",
        platos: [
          { nombre: "Tataki Coconut Salmon", desc: "Salmón sellado en costra de maíz cancha, sobre leche de tigre con coco, aromatizada con jengibre.", precio: 61000 },
          { nombre: "Tataki Golden Tuna", desc: "Atún sellado sobre una salsa cremosa de ají amarillo, miso y leche de tigre.", precio: 57000 },
          { nombre: "Tataki Tokio Tuna", desc: "Láminas de atún sellado y aguacate, sobre fideos con salsa soya, miel, maracuyá y jengibre.", precio: 49000 },
        ],
      },
      {
        nombre: "Baos",
        nota: "Una mini nube al vapor, para comer con las manos.",
        platos: [
          { nombre: "Pulpo Ponzu", desc: "Pulpo marinado en ponzu y miso, con hilos de camote y mayonesa de anchoas.", precio: 20000 },
          { nombre: "Baomar", desc: "Camarones crocantes con aguacate, hilos de camote y mizuna, con mayonesa de pimentón tatemado.", precio: 10000 },
          { nombre: "Costa Brava", desc: "Una mezcla en chorizo de calamares y salmón, acompañada de hilos de papa y guacamole.", precio: 23000 },
          { nombre: "Ponto Fino", desc: "Lomo fino con hilos de papa, rábano encurtido y alcaparras, acompañado de salsa bearnesa.", precio: 19000 },
          { nombre: "Tumbao", desc: "Croquetas de risotto crujientes en camote, con shiitakes caramelizados, mizuna y mayonesa de pimentón tatemado.", precio: 10000 },
        ],
      },
      {
        nombre: "Nami Crunch",
        nota: "Mini sushi burgers al estilo Fish Market.",
        platos: [
          { nombre: "Nami Tuna", desc: "Atún marinado en salsa nikkei, ensalada de palmitos de cangrejo y aguacate, entre tapas crunch de arroz de sushi.", precio: 32000 },
          { nombre: "Nami Salmon", desc: "Salmón marinado en salsa nikkei, ensalada de palmitos de cangrejo y aguacate, entre tapas crunch de arroz de sushi.", precio: 29000 },
        ],
      },
      {
        nombre: "Makis",
        nota: "Rollos de sushi para comer en 10 bocados.",
        platos: [
          { nombre: "Tuna Nikkei", desc: "Atún fresco y pepino japonés, coronados con tartar de atún en salsa nikkei.", precio: 41000 },
          { nombre: "Maki Acevichado", desc: "Camarones y aguacate con topping de pescado blanco, carne de cangrejo y mayonesa acevichada con masago.", precio: 46000 },
          { nombre: "Amazónico", desc: "Palmitos y aguacate, envueltos en una capa de quinua, con palmitos de cangrejo y del Amazonas en mayonesa picante.", precio: 63000 },
          { nombre: "Calamar Crunch", desc: "Langostinos y aguacate con topping de pescado blanco, chicharrón de calamar y mayonesa acevichada.", precio: 36000 },
          { nombre: "Contracorriente", desc: "Langostinos y espárragos con un topping de atún flambeado en salsa tataki.", precio: 44000 },
          { nombre: "Kinoko", desc: "Portobello y shiitakes caramelizados con salsa sumiso y aguacate.", precio: 39000 },
          { nombre: "Salvaje", desc: "Palmito de cangrejo, mango y shiitakes caramelizados, cubiertos con salmón flambeado con un toque de miso y mayonesa de mango.", precio: 52000 },
          { nombre: "Un poco de cada maki", desc: "Elige tus 4 makis favoritos en medias porciones (5 bocados), en una degustación para compartir entre dos.", precio: 126000 },
        ],
      },
    ],
    adiciones: [
      { nombre: "Rice Crunch", desc: "Arroz de sushi crocante", precio: 6000 },
      { nombre: "Bao Fries", desc: "Papas a la francesa con furikake", precio: 13000 },
    ],
  },
};
