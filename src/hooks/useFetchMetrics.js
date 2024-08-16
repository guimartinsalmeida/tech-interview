import { useState } from 'react';
import { fetchMetrics } from '../services/metricsService';

const useFetchMetrics = () => {
  const [metrics, setMetrics] = useState(() => {
    const savedMetrics = localStorage.getItem('metrics');
    return savedMetrics ? JSON.parse(savedMetrics) : { clicks: null, impressions: null };
  });
  const [error, setError] = useState(null);

  const handleGetMetrics = async () => {
    try {
      const updatedMetrics = await fetchMetrics();
      setMetrics(updatedMetrics);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    metrics,
    handleGetMetrics,
    error,
  };
};

export default useFetchMetrics;
