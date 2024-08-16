import React from 'react';
import { useQuery } from 'react-query';
import { fetchCRMData, getLeadsData, getConversionData } from '../utils/chartCRMUtils';
import CRMCharts from '../components/CRMCharts';
import { useNavigate } from 'react-router-dom';
import home from '../assets/home.png'
import crm from '../assets/crm.png'

const CRMMetrics = () => {
  const { data, error, isLoading } = useQuery('crmData', fetchCRMData);
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  const crmData = data;

  const leadsData = getLeadsData(crmData);
  const conversionData = getConversionData(crmData);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className='w-full max-w-4xl flex justify-between items-center '>
      <button 
            className="px-4 py-2 flex items-center bg-gray-800 text-white rounded hover:bg-gray-900 transition duration-300"
            onClick={() => navigate('/')}
          >
            <img className="w-12 h-7"  src={home} alt="logo google ads" />
            
          </button>
          <div className="text-3xl flex items-center font-bold text-center text-gray-800"><img src={crm} alt="crm logo" className="w-36 h-20" /> </div>  </div>
      <div className='w-full max-w-4xl'>
        <CRMCharts leadsData={leadsData} conversionData={conversionData} />
      </div>
    </div>
  );
};

export default CRMMetrics;
