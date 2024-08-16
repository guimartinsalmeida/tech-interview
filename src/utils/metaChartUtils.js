// utils.js

export const getBarData = (adData) => ({
  labels: adData.map(ad => ad.nombre),
  datasets: [
    {
      label: 'Reach',
      data: adData.map(ad => ad.alcance),
      backgroundColor: '#8884d8',
      borderColor: '#8884d8',
      borderWidth: 1,
    },
    {
      label: 'Engagement',
      data: adData.map(ad => ad.participación),
      backgroundColor: '#82ca9d',
      borderColor: '#82ca9d',
      borderWidth: 1,
    },
  ],
});

export const getLineData = (adData) => ({
  labels: adData.map(ad => ad.nombre),
  datasets: [
    {
      label: 'Engagement',
      data: adData.map(ad => ad.participación),
      fill: false,
      borderColor: '#8884d8',
      tension: 0.1,
    },
  ],
});

export const getPieData = (adData) => ({
  labels: adData.map(ad => ad.nombre),
  datasets: [
    {
      data: adData.map(ad => ad.gastoPublicidad),
      backgroundColor: ['#8884d8', '#82ca9d'],
      borderColor: '#fff',
      borderWidth: 1,
    },
  ],
});

export const chartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return `${tooltipItem.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
};
