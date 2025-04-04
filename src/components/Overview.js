import React, { useState, useEffect } from 'react';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Overview = () => {
  const [timeRange, setTimeRange] = useState('Last 30 days');
  const [metric, setMetric] = useState('Visitors');
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Sample data for chart
  const labels = ['Mar 1', 'Mar 5', 'Mar 10', 'Mar 15', 'Mar 20', 'Mar 25', 'Mar 30'];
  const data = {
    labels,
    datasets: [
      {
        label: metric,
        data: [300, 600, 800, 700, 500, 800, 700],
        borderColor: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        tension: 0.4,
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Dropdown options
  const timeOptions = ['Today', 'Yesterday', 'This week', 'Last week', 'Last 7 days', 'Last 30 days'];
  const metricOptions = ['Visitors', 'Connections', 'Interactions', 'Impressions'];
  
  const visitorStats = {
    value: isMobile ? '13.49K' : '7.4K',
    percentage: '+66% (597)'
  };

  return (
    <div className="space-y-6">
      {!isMobile && <h2 className="text-2xl font-bold mb-6">Overview</h2>}
      
      {/* Chart section */}
      <div className="bg-[#171717] rounded-lg p-4 sm:p-6">
        {isMobile && (
          <div className="mb-4">
            <div className="flex items-baseline">
              <span className="text-3xl font-bold mr-2">{visitorStats.value}</span>
              <span className="text-green-500">{visitorStats.percentage}</span>
            </div>
          </div>
        )}
        
        <div className="flex justify-between mb-4">
          <div className="relative">
            <button className="bg-[#1E1E1E] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md flex items-center text-sm sm:text-base">
              {metric}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <button className="bg-[#1E1E1E] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md flex items-center text-sm sm:text-base">
              {timeRange}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          
          <button className="bg-[#1E1E1E] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md flex items-center text-sm sm:text-base">
            + Add
          </button>
        </div>
        
        <div className={`${isMobile ? 'h-48' : 'h-64'}`}>
          <Chart type="line" data={data} options={chartOptions} />
        </div>
      </div>
      
      {/* Insights section */}
      <div className="bg-[#171717] rounded-lg p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Insights</h3>
          <div className="relative">
            <button className="bg-[#1E1E1E] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md flex items-center text-sm sm:text-base">
              Visitors
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-gray-400 mb-2">Founders</div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold mr-2">7.4K</span>
              <span className="text-green-500">+000% (000)</span>
            </div>
          </div>
          
          <div>
            <div className="text-gray-400 mb-2">Investors</div>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold mr-2">6.09K</span>
              <span className="text-green-500">+000% (000)</span>
            </div>
          </div>
        </div>
        
        <button className="text-gray-400 flex items-center mt-4">
          View detailed insights
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Overview; 