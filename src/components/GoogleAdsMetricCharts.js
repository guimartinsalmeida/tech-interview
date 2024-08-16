import React from 'react';
import { Bar } from 'react-chartjs-2';
import googleAds from '../assets/google-ads.png';
import home from '../assets/home.png';
import { useNavigate } from 'react-router-dom';

const GoogleAdsMetricsContent = ({  metrics, isAuthenticated, error, handleGetMetrics, getAuthUrl, chartData, options }) => {
  const navigate = useNavigate()
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">

        <div className="flex justify-center">
          <button 
            className="px-4 py-2 flex items-center bg-button-bg text-white rounded-lg shadow-3d hover:shadow-3d-hover focus:outline-none focus:ring-2 focus:ring-button-focus transition duration-300"
            onClick={() => navigate('/')}
          >
            <img className="w-12 h-7 object-contain" src={home} alt="Home" />
          </button>
        </div>

        <div className="text-3xl flex items-center font-heading font-bold text-primary text-center">
          <img src={googleAds} alt="Google Ads" className="w-48 h-16" />
        </div>


        
      </div>
      {!isAuthenticated && (
          <div className="text-center">
            <a 
              href={getAuthUrl()} 
              className="inline-block px-6 py-3 text-white bg-accent rounded-lg hover:bg-accent-dark transition duration-300"
            >
              Authorize with Google
            </a>
          </div>
        )}
      {isAuthenticated && (
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
            <button 
              onClick={handleGetMetrics} 
              className="px-4 py-2 text-white bg-accent rounded-lg hover:bg-accent-dark transition duration-300"
            >
              Get Metrics
            </button>
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <div className="text-center mb-6">
            <p className="text-lg font-medium text-gray-800">Clicks: {metrics.clicks}</p>
            <p className="text-lg font-medium text-gray-800">Impressions: {metrics.impressions}</p>
          </div>

          <div className="flex justify-center">
            <div style={{ position: 'relative', height: '300px', width: '100%', maxWidth: '600px' }}>
              <Bar data={chartData} options={options} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GoogleAdsMetricsContent;
