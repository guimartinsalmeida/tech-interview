export const fetchCRMData = async () => {
  return new Promise((resolve) => {
    resolve({
      leads: [
        { nombre: "Lead 1", costoAdquisición: 200, valorDeVida: 1000 },
        { nombre: "Lead 2", costoAdquisición: 150, valorDeVida: 750 }
      ],
      tasaConversión: 0.08
    });
  });
};

export const getLeadsData = (crmData) => ({
  labels: crmData.leads.map(lead => lead.nombre),
  datasets: [
    {
      label: 'Acquisition Cost',
      data: crmData.leads.map(lead => lead.costoAdquisición),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1
    },
    {
      label: 'Lifetime Value',
      data: crmData.leads.map(lead => lead.valorDeVida),
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgb(153, 102, 255)',
      borderWidth: 1
    }
  ]
});

export const getConversionData = (crmData) => ({
  labels: ['Conversion', 'Non-Conversion'],
  datasets: [
    {
      data: [crmData.tasaConversión * 100, (1 - crmData.tasaConversión) * 100],
      backgroundColor: ['#FF6384', '#36A2EB']
    }
  ]
});