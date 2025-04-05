import React, { useState } from 'react';

const DemographicsCard = ({ isMobile }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Country data
  const countries = [
    { id: 1, name: 'India', percentage: 40, color: '#8B5CF6', code: 'IN' },
    { id: 2, name: 'USA', percentage: 25, color: '#F59E0B', code: 'US' },
    { id: 3, name: 'CANADA', percentage: 10, color: '#FBBF24', code: 'CA' },
    { id: 4, name: 'UAE', percentage: 7, color: '#10B981', code: 'AE' }
  ];

  return (
    <div className="p-5 pt-0 pb-4 relative">
      {/* Visitors dropdown in left corner */}
      <div className="relative inline-block mb-4 ml-2">
        <div 
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="appearance-none w-[108px] h-[24px] bg-black border border-[#1D1D1D] text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-between cursor-pointer"
        >
          <span>Visitors</span>
          <svg className="fill-current h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
        {dropdownOpen && (
          <div className="absolute left-0 mt-1 w-[108px] bg-black border border-[#1D1D1D] rounded-md shadow-lg z-10">
            <div className="py-0">
              <div className="block px-4 py-1.5 text-white bg-[#0A0A0A] text-[12px] font-semibold">Visitors</div>
              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Connections</div>
            </div>
          </div>
        )}
      </div>

      <div className="flex">
        {/* Main content layout */}
        <div className="w-full relative flex">
          {/* World Map - reduced size */}
          <div className="w-[60%] h-[180px]">
            <img src="/images/worldmap.png" alt="World Map" className="w-full h-full object-cover opacity-70" />
          </div>

          {/* Country stats on right side - moved to align with image */}
          <div className="w-[40%] pl-6">
            {countries.map((country) => (
              <div key={country.id} className="mb-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-[30px] h-[20px] mr-2">
                    {country.name === 'India' && (
                      <div className="w-full h-full bg-[#1D1D1D] flex items-center justify-center">
                        <div className="w-[24px] h-[14px] bg-gradient-to-b from-[#FF9933] via-[#FFFFFF] to-[#138808]"></div>
                      </div>
                    )}
                    {country.name === 'USA' && (
                      <div className="w-full h-full bg-[#1D1D1D] flex items-center justify-center">
                        <div className="w-[24px] h-[14px] relative bg-[#FFFFFF]">
                          <div className="absolute top-0 left-0 w-[10px] h-[8px] bg-[#3C3B6E]"></div>
                          <div className="absolute w-full h-[2px] top-0 bg-[#B22234]"></div>
                          <div className="absolute w-full h-[2px] top-[2px] bg-[#B22234]"></div>
                          <div className="absolute w-full h-[2px] top-[4px] bg-[#B22234]"></div>
                          <div className="absolute w-full h-[2px] top-[6px] bg-[#B22234]"></div>
                          <div className="absolute w-full h-[2px] top-[8px] bg-[#B22234]"></div>
                          <div className="absolute w-full h-[2px] top-[10px] bg-[#B22234]"></div>
                          <div className="absolute w-full h-[2px] top-[12px] bg-[#B22234]"></div>
                        </div>
                      </div>
                    )}
                    {country.name === 'CANADA' && (
                      <div className="w-full h-full bg-[#1D1D1D] flex items-center justify-center">
                        <div className="w-[24px] h-[14px] bg-[#FFFFFF] relative">
                          <div className="absolute left-0 top-0 w-[6px] h-full bg-[#FF0000]"></div>
                          <div className="absolute right-0 top-0 w-[6px] h-full bg-[#FF0000]"></div>
                          <div className="absolute left-[9px] top-[5px] w-[6px] h-[4px] bg-[#FF0000]"></div>
                        </div>
                      </div>
                    )}
                    {country.name === 'UAE' && (
                      <div className="w-full h-full bg-[#1D1D1D] flex items-center justify-center">
                        <div className="w-[24px] h-[14px] bg-[#FFFFFF] relative">
                          <div className="absolute left-0 top-0 w-[8px] h-full bg-[#00732F]"></div>
                          <div className="absolute top-0 left-[8px] w-[16px] h-[5px] bg-[#FF0000]"></div>
                          <div className="absolute bottom-0 left-[8px] w-[16px] h-[5px] bg-[#000000]"></div>
                        </div>
                      </div>
                    )}
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
            <div className="flex justify-end mt-1">
              <button className="flex items-center text-gray-400 text-[10px] font-semibold hover:text-white transition-colors">
                View all countries
                <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Country indicators below map */}
      <div className="absolute bottom-4 left-[60px] flex space-x-6 items-center">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#8B5CF6] mr-2"></div>
          <span className="text-white text-xs">India</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#F59E0B] mr-2"></div>
          <span className="text-white text-xs">USA</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#FBBF24] mr-2"></div>
          <span className="text-white text-xs">CANADA</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#10B981] mr-2"></div>
          <span className="text-white text-xs">UAE</span>
        </div>
      </div>
    </div>
  );
};

export default DemographicsCard; 