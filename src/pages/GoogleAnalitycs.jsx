import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchAnalyticsData } from '../api/api';
import { getPageViewsData, getSessionsData, getAgeDemographicsData, getGenderDemographicsData } from '../utils/chartAnalitycsUtils';
import AnalyticsCharts from '../components/AnalyticsCharts';
import analitycs from '../assets/analytics.png';
import home from '../assets/home.png';

const GoogleAnalitycs = () => {
  const navigate = useNavigate();
  
  const { data, error, isLoading } = useQuery('analyticsData', fetchAnalyticsData);

  if (isLoading) return <p className="text-center text-gray-700">Loading...</p>;
  if (error) return <p className="text-center text-red-600">Error loading data: {error.message}</p>;

  const analyticsData = data;

  const pageViewsData = getPageViewsData(analyticsData);
  const sessionsData = getSessionsData(analyticsData);
  const ageDemographicsData = getAgeDemographicsData(analyticsData);
  const genderDemographicsData = getGenderDemographicsData(analyticsData);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className='w-full max-w-4xl flex justify-between items-center mb-6'>
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 flex items-center bg-button-bg text-white rounded-lg shadow-3d hover:shadow-3d-hover focus:outline-none focus:ring-2 focus:ring-button-focus transition duration-300"
        >
           <img className="w-12 h-7 object-contain" src={home} alt="Home" />
        </button>
        <div className="text-3xl flex items-center font-heading font-bold text-primary">
          <img src={analitycs} className="w-48 h-16" alt="Google Analytics" />
        </div>
      </div>
      <div className='w-full max-w-4xl'>
        <AnalyticsCharts
          pageViewsData={pageViewsData}
          sessionsData={sessionsData}
          ageDemographicsData={ageDemographicsData}
          genderDemographicsData={genderDemographicsData}
        />
      </div>
    </div>
  );
};

export default GoogleAnalitycs;
