import React, { useState } from 'react';
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

const OverviewChart = ({ isMobile }) => {
  const [activeMetric, setActiveMetric] = useState('Visitors');
  const [activeTime, setActiveTime] = useState('Last 30 days');
  const [activeAdd, setActiveAdd] = useState('Connections');
  const [showMetricDropdown, setShowMetricDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);

  const metricOptions = ['Visitors', 'Connections', 'Interactions', 'Impressions'];
  const timeOptions = ['Today', 'Yesterday', 'This week', 'Last week', 'Last 7 days', 'Last 30 days'];
  const addOptions = ['Connections', 'Interactions', 'Impressions'];

  // Sample data for chart
  const labels = ['Mar 1', 'Mar 5', 'Mar 10', 'Mar 15', 'Mar 20', 'Mar 25', 'Mar 30'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Visitors',
        data: [200, 900, 600, 800, 600, 1100, 900],
        borderColor: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'Connections',
        data: [350, 750, 450, 950, 1200, 800, 700],
        borderColor: '#8B5CF6', // Purple color
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      }
    ],
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 0
      }
    },
    scales: {
      x: {
        border: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          font: {
            size: 12,
            family: 'Manrope',
          },
          padding: 5,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        position: 'left',
        border: {
          display: false
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
          lineWidth: 0.5,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          font: {
            size: 12,
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
          },
          stepSize: 400,
        },
        min: 0,
        max: 2000,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          family: 'Manrope',
          size: 13,
        },
        bodyFont: {
          family: 'Manrope',
          size: 12,
        },
        padding: 10,
        cornerRadius: 4,
        displayColors: true,
      },
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={data} options={chartOptions} />
    </div>
  );
};

export default OverviewChart; 