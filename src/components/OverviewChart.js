import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const OverviewChart = ({ isMobile }) => {
  const labels = ['Mar 1', 'Mar 5', 'Mar 10', 'Mar 15', 'Mar 20', 'Mar 25', 'Mar 30'];
  
  // Sample data for demonstration
  const data = {
    labels,
    datasets: [
      {
        label: 'Visitors',
        data: [300, 1200, 950, 650, 700, 900, 950],
        borderColor: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        borderWidth: 1.5,
        tension: 0, // Straight lines with no curve
        fill: false,
      },
      {
        label: 'Connections',
        data: [200, 400, 1400, 800, 850, 900, 400],
        borderColor: '#8B5CF6',
        backgroundColor: 'rgba(139, 92, 246, 0)',
        pointBackgroundColor: 'transparent',
        pointBorderColor: 'transparent',
        borderWidth: 1.5,
        tension: 0, // Straight lines with no curve
        fill: false,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      y: {
        min: 0,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          font: {
            size: 10,
            family: 'Manrope',
          },
          padding: 10,
          callback: function(value) {
            if (value === 0) return '0';
            if (value === 400) return '400';
            if (value === 800) return '800';
            if (value === 1200) return '1.2K';
            if (value === 1600) return '1.6K';
            if (value === 2000) return '2K';
            return '';
          }
        },
        border: {
          display: false
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          font: {
            size: 10,
            family: 'Manrope',
          },
          padding: 5,
        },
        border: {
          display: false
        }
      },
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 0,
      },
      line: {
        borderCapStyle: 'round',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default OverviewChart; 