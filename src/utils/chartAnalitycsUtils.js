export const getPageViewsData = (analyticsData) => ({
  labels: analyticsData.vistasPagina.map(item => item.fecha),
  datasets: [
    {
      label: 'Vistas de Página',
      data: analyticsData.vistasPagina.map(item => item.vistas),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: 'Sessões',
      data: analyticsData.sesiones.map(item => item.sesiones),
      fill: false,
      borderColor: 'rgb(153, 102, 255)',
      tension: 0.1
    }
  ]
});

export const getSessionsData = (analyticsData) => ({
  labels: analyticsData.sesiones.map(item => item.fecha),
  datasets: [
    {
      label: 'Sessões',
      data: analyticsData.sesiones.map(item => item.sesiones),
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
      borderWidth: 1
    },
    {
      label: 'Taxa de Rejeição',
      data: analyticsData.sesiones.map(item => item.tasaRebote * 100),
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgb(153, 102, 255)',
      borderWidth: 1
    }
  ]
});

export const getAgeDemographicsData = (analyticsData) => ({
  labels: analyticsData.demografia.edad.map(item => item.rango),
  datasets: [
    {
      data: analyticsData.demografia.edad.map(item => item.porcentaje),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
});

export const getGenderDemographicsData = (analyticsData) => ({
  labels: analyticsData.demografia.genero.map(item => item.tipo),
  datasets: [
    {
      data: analyticsData.demografia.genero.map(item => item.porcentaje),
      backgroundColor: ['#FF6384', '#36A2EB']
    }
  ]
});


export const filterPageViewsData = (data, startDate, endDate) => {
  if (!data) return [];
  return data.filter(view => new Date(view.fecha) >= new Date(startDate) && new Date(view.fecha) <= new Date(endDate));
};


export const filterSessionsData = (data, startDate, endDate, minSessions, maxBounceRate) => {
  if (!data) return [];
  return data.filter(session => {
    const isWithinDateRange = new Date(session.fecha) >= new Date(startDate) && new Date(session.fecha) <= new Date(endDate);
    const hasMinSessions = session.sesiones >= minSessions;
    const hasMaxBounceRate = session.tasaRebote <= maxBounceRate;

    return isWithinDateRange && hasMinSessions && hasMaxBounceRate;
  });
};


export const filterAgeDemographicsData = (data) => {
  if (!data) return [];
  return data; 
};


export const filterGenderDemographicsData = (data) => {
  if (!data) return [];
  return data; 
};

