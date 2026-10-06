// Datos de cada marca. Fuente: brief ClickUp 869fbbw9k y Mapa Web Grupo Fragata v0.2.
// TODO marcados = bloqueantes del brief, confirmar con el cliente.

export const brands = {
  giratorio: {
    nombre: "La Fragata Giratorio",
    tagline: "Un viaje a la alta cocina",
    concepto: "Primer restaurante giratorio de Alta Cocina en Bogotá.",
    direccion: "Calle 100 # 8A-55, Torre C, Piso 12 (World Trade Center)",
    horarios: [
      { dias: "Lunes a sábado", horas: "12 m a 10 p. m." },
      { dias: "Domingo", horas: "12 m a 5 p. m." },
    ],
    whatsappReservas: "573102145472",
    whatsappEventos: "573145974455",
    instagram: "lafragatagiratorio",
    dominio: null, // TODO bloqueante
    espaciosEventos: [
      { nombre: "La Fragata Giratorio", capacidad: "120 – 300 personas" },
      { nombre: "La Terraza", capacidad: "300 – 500 personas" },
      { nombre: "Bar 100", capacidad: "22 – 50 personas" },
      { nombre: "Salón Phillipe", capacidad: "24 – 100 personas" },
    ],
  },

  fishmarket: {
    nombre: "Fish Market",
    tagline: "Muchas formas de probar el mar",
    concepto: "Restaurante de mar y cocina fusión.",
    direccion: "Carrera 9 # 77-1", // El banner del festival del cliente dice "Cra. 9 #77-1"; la casa de eventos figura como # 77-19 en el HTML de Eventos
    horarios: [{ dias: "Todos los días", horas: "12 m a 6 p. m." }], // Mapa Web v0.2, página Sedes de Fish Market
    whatsappReservas: "573102145472", // TODO confirmar: el mapa no da un número propio de Fish Market
    whatsappEventos: "573145974455",
    instagram: null, // TODO
    dominio: null, // TODO bloqueante
    espaciosEventos: [{ nombre: "Casa Fish Market 77", capacidad: "65 – 100 personas" }],
  },
};
