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
  // Create more granular data points to match the exact lines in the reference image
  const generateDetailedPoints = () => {
    // Exact data points to match the reference image
    const visitorPoints = [
      250, 400, 700, 900, 1100, 1200, 1100, 1000, 950, 900, 1050, 1200, 950, 
      900, 750, 700, 800, 850, 800, 850, 1300, 1200, 900, 700, 800, 1000, 1200, 
      950, 850, 1100, 1250, 900, 950, 1200
    ];
    
    const connectionPoints = [
      200, 350, 600, 700, 1000, 1300, 1200, 1000, 1100, 1000, 900, 700, 600, 
      400, 500, 600, 700, 800, 1000, 1100, 1200, 950, 700, 600, 900, 1000, 800, 
      700, 950, 1100, 900, 800, 700, 800
    ];
    
    return {
      visitorPoints,
      connectionPoints
    };
  };
  
  const { visitorPoints, connectionPoints } = generateDetailedPoints();
  
  // Create x-axis labels with the specific dates shown in the reference image
  const detailedLabels = Array.from({ length: visitorPoints.length }, (_, i) => {
    if (i === 0) return 'Mar 1';
    if (i === 4) return 'Mar 5';
    if (i === 9) return 'Mar 10';
    if (i === 14) return 'Mar 15';
    if (i === 19) return 'Mar 20';
    if (i === 24) return 'Mar 25';
    if (i === 29) return 'Mar 30';
    return '';
  });
  
  const data = {
    labels: detailedLabels,
    datasets: [
      {
        label: 'Visitors',
        data: visitorPoints,
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
        data: connectionPoints,
        borderColor: '#C36DEE',
        backgroundColor: 'rgba(195, 109, 238, 0)',
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
        max: 2000,
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
          stepSize: 400,
          callback: function(value) {
            if (value === 200) return '200';
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
          callback: function(val, index) {
            // Only show the specific dates as in the reference image
            const displayDates = ['Mar 1', 'Mar 5', 'Mar 10', 'Mar 15', 'Mar 20', 'Mar 25', 'Mar 30'];
            const label = this.getLabelForValue(val);
            return displayDates.includes(label) ? label : '';
          }
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
        borderJoinStyle: 'miter',
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 5
      }
    }
  };

  // Mobile-specific adjustments
  if (isMobile) {
    options.scales.y.ticks.display = true;
    options.scales.x.ticks.display = true;
    options.maintainAspectRatio = true;
    options.aspectRatio = 1.75;
  }

  return (
    <div className={`w-full h-full ${isMobile ? 'max-h-[200px]' : ''}`}>
      <Line data={data} options={options} />
    </div>
  );
};

export default OverviewChart;