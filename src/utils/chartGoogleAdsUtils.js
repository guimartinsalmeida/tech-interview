export const getChartData = (metrics) => ({
  labels: ['Impressions', 'Clicks'],
  datasets: [
    {
      label: 'Metrics',
      data: [metrics.impressions, metrics.clicks],
      backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
      borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
      borderWidth: 1,
    },
  ],
});

export const getChartOptions = () => ({
  responsive: true,
  plugins: {
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          const metricLabel = tooltipItem.dataset.label === 'Metrics' ? 'Impressions' : 'Clicks';
          return `${metricLabel}: ${tooltipItem.raw}`;
        },
      },
    },
    legend: {
      position: 'top',
    },
  },
  onClick: (event, elements, chart) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      const metricType = index === 0 ? 'Impressions' : 'Clicks';
      alert(`Você clicou em ${metricType}!\nDetalhes: ${metricType === 'Impressions' ? chart.data.datasets[0].data[0] : chart.data.datasets[0].data[1]}`);
    }
  },
});
