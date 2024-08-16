export const fetchAdData = async () => {
  return new Promise((resolve) => {
    resolve({
      anuncios: [
        { nombre: "Anuncio 1", alcance: 5000, participación: 300, gastoPublicidad: 100, conversiones: 30, fecha: "2024-07-01", tipoCampaña: "Display", segmentación: "18-24" },
        { nombre: "Anuncio 2", alcance: 7500, participación: 500, gastoPublicidad: 150, conversiones: 45, fecha: "2024-07-02", tipoCampaña: "Search", segmentación: "25-34" },
        { nombre: "Anuncio 3", alcance: 6000, participación: 400, gastoPublicidad: 130, conversiones: 35, fecha: "2024-07-03", tipoCampaña: "Social Media", segmentación: "18-24" },
        { nombre: "Anuncio 4", alcance: 7200, participación: 450, gastoPublicidad: 160, conversiones: 40, fecha: "2024-07-04", tipoCampaña: "Display", segmentación: "35-44" },
        { nombre: "Anuncio 5", alcance: 6800, participación: 470, gastoPublicidad: 140, conversiones: 38, fecha: "2024-07-05", tipoCampaña: "Search", segmentación: "25-34" },
        { nombre: "Anuncio 6", alcance: 7400, participación: 520, gastoPublicidad: 155, conversiones: 42, fecha: "2024-07-06", tipoCampaña: "Social Media", segmentación: "45-54" },
        { nombre: "Anuncio 7", alcance: 5900, participación: 350, gastoPublicidad: 110, conversiones: 32, fecha: "2024-07-07", tipoCampaña: "Display", segmentación: "18-24" },
        { nombre: "Anuncio 8", alcance: 7600, participación: 520, gastoPublicidad: 165, conversiones: 50, fecha: "2024-07-08", tipoCampaña: "Search", segmentación: "25-34" },
        { nombre: "Anuncio 9", alcance: 6200, participación: 420, gastoPublicidad: 135, conversiones: 37, fecha: "2024-07-09", tipoCampaña: "Social Media", segmentación: "35-44" },
        { nombre: "Anuncio 10", alcance: 7300, participación: 480, gastoPublicidad: 145, conversiones: 39, fecha: "2024-07-10", tipoCampaña: "Display", segmentación: "45-54" },
        { nombre: "Anuncio 11", alcance: 7000, participación: 490, gastoPublicidad: 150, conversiones: 40, fecha: "2024-07-11", tipoCampaña: "Search", segmentación: "18-24" },
        { nombre: "Anuncio 12", alcance: 7500, participación: 500, gastoPublicidad: 155, conversiones: 45, fecha: "2024-07-12", tipoCampaña: "Social Media", segmentación: "25-34" },
       
      ]
    });
  });
};


export const fetchAnalyticsData = async () => {
  return new Promise((resolve) => {
    resolve({
      vistasPagina: [
        { fecha: "2024-07-01", vistas: 300 },
        { fecha: "2024-07-02", vistas: 350 },
        { fecha: "2024-07-03", vistas: 400 },
        { fecha: "2024-07-04", vistas: 450 },
        { fecha: "2024-07-05", vistas: 470 },
        { fecha: "2024-07-06", vistas: 500 },
        { fecha: "2024-07-07", vistas: 550 },
        { fecha: "2024-07-08", vistas: 600 },
        { fecha: "2024-07-09", vistas: 650 },
        { fecha: "2024-07-10", vistas: 700 },
        { fecha: "2024-07-11", vistas: 750 },
        { fecha: "2024-07-12", vistas: 800 },
        { fecha: "2024-07-13", vistas: 850 },
        { fecha: "2024-07-14", vistas: 900 },
        { fecha: "2024-07-15", vistas: 950 },
        { fecha: "2024-07-16", vistas: 1000 },
        { fecha: "2024-07-17", vistas: 1050 },
        { fecha: "2024-07-18", vistas: 1100 },
        { fecha: "2024-07-19", vistas: 1150 },
        { fecha: "2024-07-20", vistas: 1200 },
        { fecha: "2024-07-21", vistas: 1250 },
        { fecha: "2024-07-22", vistas: 1300 },
        { fecha: "2024-07-23", vistas: 1350 },
        { fecha: "2024-07-24", vistas: 1400 },
        { fecha: "2024-07-25", vistas: 1450 },
        { fecha: "2024-07-26", vistas: 1500 },
        { fecha: "2024-07-27", vistas: 1550 },
        { fecha: "2024-07-28", vistas: 1600 },
        { fecha: "2024-07-29", vistas: 1650 },
        { fecha: "2024-07-30", vistas: 1700 },
        { fecha: "2024-07-31", vistas: 1750 },
      ],
      sesiones: [
        { fecha: "2024-07-01", sesiones: 200, tasaRebote: 0.35 },
        { fecha: "2024-07-02", sesiones: 220, tasaRebote: 0.34 },
        { fecha: "2024-07-03", sesiones: 240, tasaRebote: 0.33 },
        { fecha: "2024-07-04", sesiones: 260, tasaRebote: 0.32 },
        { fecha: "2024-07-05", sesiones: 280, tasaRebote: 0.31 },
        { fecha: "2024-07-06", sesiones: 300, tasaRebote: 0.30 },
        { fecha: "2024-07-07", sesiones: 320, tasaRebote: 0.29 },
        { fecha: "2024-07-08", sesiones: 340, tasaRebote: 0.28 },
        { fecha: "2024-07-09", sesiones: 360, tasaRebote: 0.27 },
        { fecha: "2024-07-10", sesiones: 380, tasaRebote: 0.26 },
        { fecha: "2024-07-11", sesiones: 400, tasaRebote: 0.25 },
        { fecha: "2024-07-12", sesiones: 420, tasaRebote: 0.24 },
        { fecha: "2024-07-13", sesiones: 440, tasaRebote: 0.23 },
        { fecha: "2024-07-14", sesiones: 460, tasaRebote: 0.22 },
        { fecha: "2024-07-15", sesiones: 480, tasaRebote: 0.21 },
        { fecha: "2024-07-16", sesiones: 500, tasaRebote: 0.20 },
        { fecha: "2024-07-17", sesiones: 520, tasaRebote: 0.19 },
        { fecha: "2024-07-18", sesiones: 540, tasaRebote: 0.18 },
        { fecha: "2024-07-19", sesiones: 560, tasaRebote: 0.17 },
        { fecha: "2024-07-20", sesiones: 580, tasaRebote: 0.16 },
        { fecha: "2024-07-21", sesiones: 600, tasaRebote: 0.15 },
        { fecha: "2024-07-22", sesiones: 620, tasaRebote: 0.14 },
        { fecha: "2024-07-23", sesiones: 640, tasaRebote: 0.13 },
        { fecha: "2024-07-24", sesiones: 660, tasaRebote: 0.12 },
        { fecha: "2024-07-25", sesiones: 680, tasaRebote: 0.11 },
        { fecha: "2024-07-26", sesiones: 700, tasaRebote: 0.10 },
        { fecha: "2024-07-27", sesiones: 720, tasaRebote: 0.09 },
        { fecha: "2024-07-28", sesiones: 740, tasaRebote: 0.08 },
        { fecha: "2024-07-29", sesiones: 760, tasaRebote: 0.07 },
        { fecha: "2024-07-30", sesiones: 780, tasaRebote: 0.06 },
        { fecha: "2024-07-31", sesiones: 800, tasaRebote: 0.05 },
      ],
      demografia: {
        edad: [
          { rango: "18-24", porcentaje: 25 },
          { rango: "25-34", porcentaje: 30 },
          { rango: "35-44", porcentaje: 20 },
          { rango: "45-54", porcentaje: 15 },
          { rango: "55-64", porcentaje: 10 },
          { rango: "65+", porcentaje: 5 }
        ],
        genero: [
          { tipo: "hombre", porcentaje: 55 },
          { tipo: "mujer", porcentaje: 45 }
        ]
      }
    });
  });
};


export const fetchCRMData = async () => {
  return new Promise((resolve) => {
    resolve({
      leads: [
        { nombre: "Lead 1", costoAdquisición: 200, valorDeVida: 1000, fecha: "2024-07-01" },
        { nombre: "Lead 2", costoAdquisición: 150, valorDeVida: 750, fecha: "2024-07-02" },
        { nombre: "Lead 3", costoAdquisición: 180, valorDeVida: 900, fecha: "2024-07-03" },
        { nombre: "Lead 4", costoAdquisición: 220, valorDeVida: 1100, fecha: "2024-07-04" },
        { nombre: "Lead 5", costoAdquisición: 170, valorDeVida: 850, fecha: "2024-07-05" },
        { nombre: "Lead 6", costoAdquisición: 200, valorDeVida: 1000, fecha: "2024-07-06" },
        { nombre: "Lead 7", costoAdquisición: 210, valorDeVida: 1050, fecha: "2024-07-07" },
        { nombre: "Lead 8", costoAdquisición: 190, valorDeVida: 950, fecha: "2024-07-08" },
        { nombre: "Lead 9", costoAdquisición: 230, valorDeVida: 1150, fecha: "2024-07-09" },
        { nombre: "Lead 10", costoAdquisición: 180, valorDeVida: 900, fecha: "2024-07-10" },
      ],
      tasaConversión: 0.08
    });
  });
};

