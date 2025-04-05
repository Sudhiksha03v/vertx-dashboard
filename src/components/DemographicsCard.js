import React from 'react';

const DemographicsCard = ({ isMobile }) => {
  // Country data
  const countries = [
    { id: 1, name: 'India', percentage: 40, color: '#8B5CF6', code: 'IN' },
    { id: 2, name: 'USA', percentage: 25, color: '#F59E0B', code: 'US' },
    { id: 3, name: 'CANADA', percentage: 10, color: '#FBBF24', code: 'CA' },
    { id: 4, name: 'UAE', percentage: 7, color: '#10B981', code: 'AE' }
  ];

  return (
    <div className="p-5 pt-0 pb-4 relative">
      <div className="flex">
        {/* World Map and Country indicators */}
        <div className="relative flex-grow">
          {/* World map image */}
          <div className="relative h-[200px] w-full opacity-70">
            <img src="/images/worldmap.jpg" alt="World Map" className="w-full h-full object-cover" />
            
            {/* Country indicators on map */}
            <div className="absolute top-[50px] left-[150px]">
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
            </div>
            <div className="absolute top-[40px] left-[180px]">
              <div className="w-3 h-3 rounded-full bg-[#FBBF24]"></div>
            </div>
            <div className="absolute top-[70px] left-[350px]">
              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
            </div>
            <div className="absolute top-[100px] left-[450px]">
              <div className="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
            </div>
            
            {/* User highlight */}
            <div className="absolute top-[70px] left-[400px]">
              <div className="bg-red-500 text-white px-2 py-0.5 rounded text-xs">
                Sowmya Kota
              </div>
              <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-red-500 mx-auto"></div>
            </div>
          </div>
          
          {/* Country indicators legend */}
          <div className="flex mt-2 gap-4 ml-4">
            {countries.map((country) => (
              <div key={country.id} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: country.color }}></div>
                <span className="text-white text-xs">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Countries list with percentages */}
        <div className="w-[250px] pl-4">
          {countries.map((country) => (
            <div key={country.id} className="mb-4">
              <div className="flex items-center">
                <div className="mr-3 flex-shrink-0 w-[40px] h-[28px] bg-[#1D1D1D] flex items-center justify-center">
                  <span className="text-white font-bold">{country.code}</span>
                </div>
                <div className="flex-grow">
                  <div className="text-white font-semibold text-sm">
                    {country.name}
                  </div>
                  <div className="mt-1 relative h-2 w-full">
                    <div className="w-full h-full bg-[#1D1D1D] rounded-full"></div>
                    <div 
                      className="absolute top-0 left-0 h-full rounded-full" 
                      style={{ 
                        width: `${country.percentage}%`, 
                        backgroundColor: country.color,
                      }}
                    ></div>
                    <div className="absolute right-0 -top-px text-white text-xs font-semibold">
                      {country.percentage}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* View all countries link */}
          <div className="flex justify-end mt-2">
            <button className="flex items-center text-gray-400 text-xs hover:text-white transition-colors">
              View all countries
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Circle A button at bottom right */}
      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white font-semibold">
        A
      </div>
    </div>
  );
};

export default DemographicsCard; 