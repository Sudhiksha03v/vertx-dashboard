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
  // Create exact data points to match the reference image
  const generateDetailedPoints = () => {
    // Exact data points to match the reference image - adjusted to match the image pattern
    const visitorPoints = [
      350, 500, 800, 1050, 1300, 1250, 1150, 950, 1000, 1300, 1200, 800, 750, 
      850, 800, 650, 800, 850, 1000, 1500, 950, 650, 900, 1000, 1300, 1150, 
      900, 600, 1100, 1500
    ];
    
    const connectionPoints = [
      200, 400, 600, 800, 1100, 1400, 1300, 1200, 1100, 1000, 800, 400, 600, 
      400, 700, 800, 850, 800, 1100, 1300, 900, 800, 900, 1000, 800, 1050, 
      1200, 800, 1000, 1200
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
          display: false, // Remove all grid lines
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          font: {
            size: 10,
            family: 'Manrope',
          },
          padding: 5,
          stepSize: 400, // Force steps at every 400 units
          callback: function(value) {
            if (value === 0) return '';
            if (value === 200) return '200';
            if (value === 400) return '400';
            if (value === 800) return '800';
            if (value === 1200) return '1.2K';
            if (value === 1600) return '1.6K';
            if (value === 2000) return '2K';
            return '';
          },
          // Force inclusion of all values
          display: true, 
          autoSkip: false,
          includeBounds: true
        },
        border: {
          display: false
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
          z: 10,
        },
        border: {
          display: true,
          color: '#1D1D1D',
          width: 1,
          z: 1,
          dash: [],
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.5)',
          font: {
            size: 10,
            family: 'Manrope',
          },
          padding: 6,
          autoSkip: false,
          maxRotation: 0, // Make labels horizontal
          minRotation: 0, // Make labels horizontal
          callback: function(val, index) {
            // Only show the specific dates as in the reference image
            const displayDates = ['Mar 1', 'Mar 5', 'Mar 10', 'Mar 15', 'Mar 20', 'Mar 25', 'Mar 30'];
            const label = this.getLabelForValue(val);
            return displayDates.includes(label) ? label : '';
          }
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
        left: 20,
        right: 30,
        top: 20,
        bottom: 30
      }
    }
  };

  // Mobile-specific adjustments
  if (isMobile) {
    options.scales.y.ticks.display = true;
    options.scales.x.ticks.display = true;
    options.maintainAspectRatio = true;
    options.aspectRatio = 1.75;
    
    // Enhanced mobile styling for better visibility and zoom effect
    options.scales.y = {
      ...options.scales.y,
      min: 200,  // Start from 200 to zoom in
      max: 1600, // Max at 1600 to show more detail
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
        stepSize: 400,
        callback: function(value) {
          if (value === 400) return '400';
          if (value === 800) return '800';
          if (value === 1200) return '1.2K';
          if (value === 1600) return '1.6K';
          if (value === 2000) return '2K';
          return '';
        },
      }
    };
    
    // Reduce padding to maximize chart area
    options.layout = {
      padding: {
        left: 10,
        right: 0,  // Reduced right padding to 0 (from 5)
        top: 10,
        bottom: 20
      }
    };
    
    // Enhanced lines for mobile
    data.datasets = data.datasets.map(dataset => ({
      ...dataset,
      borderWidth: 2.0,  // Thicker lines for better visibility
    }));
  }

  return (
    <div className={`w-full h-[200px] ${isMobile ? 'max-h-[200px]' : ''}`}>
      <Line data={data} options={options} />
    </div>
  );
};

export default OverviewChart;