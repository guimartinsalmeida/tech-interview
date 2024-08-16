
import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, BarElement, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, BarElement, ArcElement);

const AnalyticsCharts = ({ pageViewsData, sessionsData, ageDemographicsData, genderDemographicsData }) => (
  <div className="flex flex-wrap gap-6">
    <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[300px]">
      <h3 className="text-xl font-semibold mb-4">Page Views and Sessions</h3>
      <Line data={pageViewsData} options={{ responsive: true }} />
    </div>

    <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[300px]">
      <h3 className="text-xl font-semibold mb-4">Sessions and Bounce Rate</h3>
      <Bar data={sessionsData} options={{ indexAxis: 'x', responsive: true }} />
    </div>

    <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[300px]">
      <h3 className="text-xl font-semibold mb-4">Age Demographics</h3>
      <Pie data={ageDemographicsData} options={{ responsive: true }} />
    </div>

    <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[300px]">
      <h3 className="text-xl font-semibold mb-4">Gender Demographics</h3>
      <Pie data={genderDemographicsData} options={{ responsive: true }} />
    </div>
  </div>
);

export default AnalyticsCharts;
