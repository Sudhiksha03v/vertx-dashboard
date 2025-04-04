import React from 'react';

const DemographicsCard = ({ isMobile }) => {
  // Sample country data
  const countries = [
    { name: 'India', percentage: 40, flagCode: 'in', color: 'bg-purple-600' },
    { name: 'USA', percentage: 25, flagCode: 'us', color: 'bg-orange-500' },
    { name: 'CANADA', percentage: 10, flagCode: 'ca', color: 'bg-yellow-400' },
    { name: 'UAE', percentage: 7, flagCode: 'ae', color: 'bg-green-500' }
  ];

  return (
    <div className="h-full">
      <div className="flex h-full">
        {/* Left side - World Map visualization */}
        <div className="w-[65%] relative">
          {/* World map background - dotted pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 600 240" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#333" fillOpacity="0.1"/>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.5" fill="#555" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Map indicators/hotspots */}
          <div className="absolute inset-0">
            {/* Purple dot - India */}
            <div className="absolute top-[35%] left-[65%]">
              <div className="w-4 h-4 rounded-full bg-purple-600"></div>
            </div>
            
            {/* Orange dot - USA */}
            <div className="absolute top-[30%] left-[25%]">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
            </div>
            
            {/* Yellow dot - Canada */}
            <div className="absolute top-[20%] left-[20%]">
              <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
            </div>
            
            {/* Green dot - UAE */}
            <div className="absolute top-[40%] left-[55%]">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-4">
            {countries.map(country => (
              <div key={country.name} className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${country.color} mr-2`}></div>
                <span className="text-white text-xs">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right side - Country stats */}
        <div className="w-[35%] pl-4 space-y-4">
          {countries.map(country => (
            <div key={country.name} className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src={`https://flagcdn.com/w20/${country.flagCode}.png`}
                  alt={country.name}
                  className="w-6 h-4 object-cover mr-2"
                />
                <span className="text-white text-sm">{country.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-24 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${country.color}`}
                    style={{ width: `${country.percentage}%` }}
                  ></div>
                </div>
                <span className="text-white text-xs">{country.percentage}%</span>
              </div>
            </div>
          ))}
          
          <div className="pt-4 flex justify-end">
            <button className="flex items-center text-white text-sm">
              View all countries
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemographicsCard; 