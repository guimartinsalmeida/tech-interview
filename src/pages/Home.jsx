import React from 'react';
import { useNavigate } from 'react-router-dom';
import analitycs from '../assets/analytics.png';
import googleAds from '../assets/google-ads.png';
import crm from '../assets/crm.png';
import meta from '../assets/meta.png';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-heading font-bold mb-8 text-gray-900">Get Metrics from</h1>
      <div className="flex flex-col space-y-4">
        <button 
          onClick={() => navigate('/oauth2callback')} 
          className="flex items-center justify-center w-button-width h-button-height bg-button-bg rounded-lg shadow-3d hover:shadow-3d-hover focus:outline-none focus:ring-2 focus:ring-button-focus transition duration-300"
        >
          <img src={googleAds} alt="Google Ads" className="w-48 h-16 object-contain " />
        </button>
        <button 
          onClick={() => navigate('/analitycs')} 
          className="flex items-center justify-center w-button-width h-button-height bg-button-bg rounded-lg shadow-3d hover:shadow-3d-hover focus:outline-none focus:ring-2 focus:ring-button-focus transition duration-300"
        >
          <img src={analitycs} alt="Analytics" className="w-48 h-16 object-contain " />
        </button>
        <button 
          onClick={() => navigate('/crmcharts')} 
          className="flex items-center justify-center w-button-width h-button-height bg-button-bg rounded-lg shadow-3d hover:shadow-3d-hover focus:outline-none focus:ring-2 focus:ring-button-focus transition duration-300"
        >
          <img src={crm} alt="CRM" className="w-48 h-16 object-contain " />
        </button>
        <button 
          onClick={() => navigate('/metaads')} 
          className="flex items-center justify-center w-button-width h-button-height bg-button-bg rounded-lg shadow-3d hover:shadow-3d-hover focus:outline-none focus:ring-2 focus:ring-button-focus transition duration-300"
        >
          <img src={meta} alt="Meta" className="w-48 h-16 object-contain " />
        </button>
      </div>
    </div>
  );
}

export default Home;
