import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, LineElement, PointElement } from 'chart.js';
import { getBarData, getLineData, getPieData, chartOptions } from '../utils/metaChartUtils';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, LineElement, PointElement);

const MetaAdsCharts = ({ adData }) => {
  const barData = getBarData(adData);
  const lineData = getLineData(adData);
  const pieData = getPieData(adData);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[300px] max-w-[600px] border border-gray-200">
        <h3 className="text-xl text-center font-heading font-semibold text-primary mb-4">Ad Performance - Reach and Engagement</h3>
        <div className="relative h-[300px]">
          <Bar data={barData} options={chartOptions} />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[300px] max-w-[600px] border border-gray-200">
        <h3 className="text-xl text-center font-heading font-semibold text-primary mb-4">Engagement Trend</h3>
        <div className="relative h-[300px]">
          <Line data={lineData} options={chartOptions} />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md flex-1 min-w-[300px] max-w-[600px] border border-gray-200">
        <h3 className="text-xl text-center font-heading font-semibold text-primary mb-4">Advertising Spend Distribution</h3>
        <div className="relative h-[300px] flex justify-center items-center">
          <Pie data={pieData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default MetaAdsCharts;
