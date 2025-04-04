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
        {/* World Map */}
        <div className="relative w-[537px] h-[213.4px]" style={{ position: 'absolute', top: '0', left: '0' }}>
          {/* World map background with dots */}
          <div className="w-full h-full opacity-50">
            <div className="absolute" style={{ width: '537px', height: '213.4px' }}>
              {/* Checkered pattern as fallback for world map */}
              <div style={{ 
                width: '100%', 
                height: '100%', 
                background: 'repeating-conic-gradient(#1D1D1D 0% 25%, transparent 0% 50%) 50% / 10px 10px'
              }}></div>
            </div>
            
            {/* Country indicators on map */}
            <div className="absolute top-[70px] left-[150px]">
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
            </div>
            <div className="absolute top-[50px] left-[170px]">
              <div className="w-3 h-3 rounded-full bg-[#FBBF24]"></div>
            </div>
            <div className="absolute top-[60px] left-[210px]">
              <div className="w-3 h-3 rounded-full bg-[#F59E0B]"></div>
            </div>
            <div className="absolute top-[60px] left-[450px]">
              <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
            </div>
            <div className="absolute top-[70px] left-[510px]">
              <div className="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
            </div>
          </div>
          
          {/* Country tag bar */}
          <div className="absolute" style={{ width: '294px', height: '30px', top: '180px', left: '20px', borderRadius: '20px', border: '1px solid #1D1D1D', background: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="flex items-center h-full px-3" style={{ width: '267px', height: '16px' }}>
              {countries.map((country, index) => (
                <div key={country.id} className="flex items-center mr-4">
                  <div className="w-[12px] h-[12px] rounded-full mr-1" style={{ backgroundColor: country.color }}></div>
                  <span className="text-white font-semibold text-[12px] tracking-[-0.04em] leading-[100%]">{country.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Countries list with percentages */}
        <div className="absolute right-5" style={{ top: '24px' }}>
          {countries.map((country, index) => (
            <div key={country.id} className="mb-4" style={{ width: '238px', height: '33px' }}>
              <div className="flex items-center">
                <div className="mr-3 flex-shrink-0" style={{ width: '40px', height: '28px', borderRadius: '2px', overflow: 'hidden', background: '#1D1D1D', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-white">{country.code}</div>
                </div>
                <div>
                  <div className="text-white font-semibold text-[16px] tracking-[-0.04em] leading-[100%]">
                    {country.name}
                  </div>
                  <div className="mt-2 relative" style={{ width: '189px', height: '9px' }}>
                    <div className="w-full h-full bg-[#1D1D1D] rounded-full"></div>
                    <div 
                      className="absolute top-0 left-0 h-full rounded-full" 
                      style={{ 
                        width: `${country.percentage}%`, 
                        backgroundColor: country.color,
                      }}
                    ></div>
                    <div className="absolute right-0 top-[-2px] text-white font-semibold text-[10px] tracking-[-0.04em] leading-[100%]">
                      {country.percentage}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* View all countries link */}
          <div className="flex justify-end mt-2">
            <button className="flex items-center text-white text-[10px] font-semibold tracking-[-0.04em] leading-[100%] hover:underline">
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