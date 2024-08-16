import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { getChartData, getChartOptions } from '../utils/chartGoogleAdsUtils';
import GoogleAdsMetricsContent from '../components/GoogleAdsMetricCharts';
import useGoogleAuth from '../hooks/useGoogleAuth';
import useFetchMetrics from '../hooks/useFetchMetrics';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GoogleAdsMetrics = () => {
  const { isAuthenticated, getAuthUrl, error: authError } = useGoogleAuth();
  const { metrics, handleGetMetrics, error: fetchError } = useFetchMetrics();

  const chartData = getChartData(metrics);
  const options = getChartOptions();

  return (
    <GoogleAdsMetricsContent 
      metrics={metrics}
      isAuthenticated={isAuthenticated}
      error={authError || fetchError}
      handleGetMetrics={handleGetMetrics}
      getAuthUrl={getAuthUrl}
      chartData={chartData}
      options={options}
    />
  );
};

export default GoogleAdsMetrics;
