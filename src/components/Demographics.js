import React, { useState, useEffect } from 'react';

const Demographics = () => {
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
  
  // Demo data for country stats
  const countries = [
    { name: 'India', percentage: 40, flagCode: 'in' },
    { name: 'USA', percentage: 25, flagCode: 'us' },
    { name: 'CANADA', percentage: 10, flagCode: 'ca' },
    { name: 'UAE', percentage: 7, flagCode: 'ae' },
  ];

  return (
    <div className="space-y-6">
      {!isMobile && <h2 className="text-2xl font-bold mb-6">Demographics</h2>}
      
      <div className="bg-[#171717] rounded-lg p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <button className="bg-[#1E1E1E] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-md flex items-center text-sm sm:text-base">
              {metric}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
        </div>
        
        {/* World map visualization */}
        <div className={`relative ${isMobile ? 'h-60' : 'h-72'} mb-6`}>
          {/* Simple dotted world map background */}
          <div className="absolute inset-0 opacity-30 flex items-center justify-center">
            <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC41Ij48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] bg-repeat"></div>
          </div>

          {/* Map highlights and pointers */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-600"></div>
          <div className="absolute top-1/3 left-1/5 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-500"></div>
          <div className="absolute top-1/3 left-1/3 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
          <div className="absolute top-2/5 right-1/3 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>

          {/* Highlighted user */}
          <div className="absolute top-1/4 right-1/3">
            <div className="bg-red-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-md text-xs">
              Sowmya Kota
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2">
              <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 0L10 5H0L5 0Z" fill="#EF4444"/>
              </svg>
            </div>
          </div>
          
          {/* Avatar circle */}
          <div className="absolute bottom-4 right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-700 flex items-center justify-center text-white text-base sm:text-xl">
            A
          </div>
        </div>
        
        {/* Country indicators */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 text-xs sm:text-sm">
          <div className="flex items-center">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-600 mr-1 sm:mr-2"></span>
            <span>India</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-500 mr-1 sm:mr-2"></span>
            <span>USA</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400 mr-1 sm:mr-2"></span>
            <span>CANADA</span>
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 mr-1 sm:mr-2"></span>
            <span>UAE</span>
          </div>
        </div>
        
        {/* Country stats */}
        <div className="space-y-4 text-sm sm:text-base">
          {countries.map((country) => (
            <div key={country.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={`https://flagcdn.com/w20/${country.flagCode}.png`} 
                  alt={country.name}
                  className="mr-2 w-4 h-3 sm:w-5 sm:h-3.5 object-cover"
                />
                <span>{country.name}</span>
              </div>
              <div className="flex items-center">
                <div className="w-24 sm:w-32 h-1.5 sm:h-2 bg-gray-800 rounded-full mr-2 overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      country.name === 'India' 
                        ? 'bg-purple-600' 
                        : country.name === 'USA'
                          ? 'bg-blue-500'
                          : country.name === 'CANADA'
                            ? 'bg-yellow-400'
                            : 'bg-green-500'
                    }`}
                    style={{ width: `${country.percentage}%` }}
                  ></div>
                </div>
                <span>{country.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
        
        <button className="text-gray-400 flex items-center mt-6 text-sm sm:text-base">
          View all countries
          <svg className="ml-2 w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Demographics; 