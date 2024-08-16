import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';

const CRMCharts = ({ leadsData, conversionData }) => {
  if (!leadsData || !conversionData) {
    return <p>Dados dos gráficos não disponíveis</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex flex-wrap gap-6">
        <div className="bg-white p-4 rounded-lg shadow-3d flex-1 min-w-[300px] max-w-[600px] border border-gray-200">
          <h3 className="text-xl font-heading font-semibold text-primary mb-4">Acquisition Cost and Lifetime Value</h3>
          <div className="w-full h-80">
            <Bar
              data={leadsData}
              options={{
                indexAxis: 'x',
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: '#E5E7EB', 
                    },
                    ticks: {
                      color: '#374151',
                    },
                  },
                  x: {
                    ticks: {
                      color: '#374151', 
                    },
                  },
                },
                responsive: true,
                maintainAspectRatio: false,
              }}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-3d flex-1 min-w-[300px] max-w-[600px] border border-gray-200">
          <h3 className="text-xl font-heading font-semibold text-primary mb-4">Conversion Rate</h3>
          <div className="w-full h-80">
            <Pie
              data={conversionData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    labels: {
                      color: '#374151',
                    },
                  },
                },
              }}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMCharts;
