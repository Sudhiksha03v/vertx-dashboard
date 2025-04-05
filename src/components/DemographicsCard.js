import React, { useState } from 'react';

const DemographicsCard = ({ isMobile }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Country data with updated colors
  const countries = [
    { id: 1, name: 'India', percentage: 40, color: '#4834D4', code: 'IN', flagSrc: '/images/india.jpg' },
    { id: 2, name: 'USA', percentage: 25, color: '#BD5302', code: 'US', flagSrc: '/images/usa.jpg' },
    { id: 3, name: 'CANADA', percentage: 10, color: '#E9C16B', code: 'CA', flagSrc: '/images/canada.jpg' },
    { id: 4, name: 'UAE', percentage: 7, color: '#579560', code: 'AE', flagSrc: '/images/uae.jpg' }
  ];

  return (
    <div className={`${isMobile ? 'p-4 pt-0 pb-8' : 'p-5 pt-0 pb-4'} relative ${isMobile ? 'h-auto' : 'h-[296px]'}`}>
      {!isMobile && (
        <div className="relative inline-block mb-2 ml-4 z-10">
          <div 
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="appearance-none w-[108px] h-[24px] bg-black border border-[#1D1D1D] text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-between cursor-pointer"
          >
            <span className="mr-3">Visitors</span>
            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white absolute right-3"></div>
          </div>
          {dropdownOpen && (
            <div className="absolute left-0 mt-1 w-[108px] bg-[#0A0A0A] border border-[#1D1D1D] rounded-md shadow-lg z-10">
              <div className="py-0">
                <div className="block px-4 py-1.5 text-white text-[12px] font-semibold">Visitors</div>
                <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Connections</div>
              </div>
            </div>
          )}
        </div>
      )}

      {isMobile && (
        <div className="relative mb-4 z-10">
          <div className="relative inline-block">
            <div 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="appearance-none w-[108px] h-[24px] bg-black border border-[#1D1D1D] text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-between cursor-pointer"
            >
              <span className="mr-3">Visitors</span>
              <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white absolute right-3"></div>
            </div>
            {dropdownOpen && (
              <div className="absolute left-0 mt-1 w-[108px] bg-[#0A0A0A] border border-[#1D1D1D] rounded-md shadow-lg z-10">
                <div className="py-0">
                  <div className="block px-4 py-1.5 text-white text-[12px] font-semibold">Visitors</div>
                  <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Connections</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {isMobile ? (
        // Mobile layout with flexbox column layout
        <div className="flex flex-col">
          {/* World Map for mobile */}
          <div className="w-full h-[150px] relative">
            <img src="/images/worldmap.png" alt="World Map" className="w-full h-full object-contain opacity-75 mt-[-15px]" />
          </div>
          
          {/* Countries tag indicator for mobile */}
          <div className="w-full flex justify-center mb-4">
            <div className="w-[294px] h-[30px] border border-[#1D1D1D] rounded-[20px] flex items-center justify-around px-2 bg-black">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#4834D4] mr-1"></div>
                <span className="text-white text-[10px]">India</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#BD5302] mr-1"></div>
                <span className="text-white text-[10px]">USA</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#E9C16B] mr-1"></div>
                <span className="text-white text-[10px]">CANADA</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#579560] mr-1"></div>
                <span className="text-white text-[10px]">UAE</span>
              </div>
            </div>
          </div>
          
          {/* Country stats for mobile */}
          <div className="w-full px-0 relative z-10">
            {countries.map((country, index) => (
              <div key={country.id} className="mb-3">
                <div className="flex items-center">
                  {/* Flag with exact dimensions */}
                  <div className="w-[32px] h-[25px] rounded-[2px] overflow-hidden mr-3">
                    <img src={country.flagSrc} alt={`${country.name} Flag`} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    {/* Country name with exact font specs */}
                    <div className="text-white font-semibold text-[16px] leading-[100%] tracking-[-0.04em] font-manrope">
                      {country.name}
                    </div>
                    {/* Color bar with exact dimensions */}
                    <div className="mt-2 relative h-[9px] w-full pr-[25px]">
                      <div className="w-full h-full bg-[#1D1D1D] rounded-[100px]"></div>
                      <div 
                        className="absolute top-0 left-0 h-full rounded-[100px]" 
                        style={{ 
                          width: `${country.percentage}%`, 
                          backgroundColor: country.color,
                        }}
                      ></div>
                      <div className="absolute right-0 -top-5 text-white text-xs font-semibold">
                        {country.percentage}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Horizontal line with exact specs */}
            <div className="w-full mt-2 h-[1px] bg-[#1D1D1D]"></div>
            
            {/* View all countries link */}
            <div className="w-full mt-4">
              <div className="flex justify-end">
                <button className="flex items-center text-white text-[10px] font-semibold font-manrope leading-[100%] hover:text-gray-300 transition-colors">
                  View all countries
                  <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Desktop layout remains the same
        <div className="w-full relative flex flex-wrap">
          {/* World Map - full size and positioned correctly */}
          <div className="w-[68%] h-[240px] relative">
            <img src="/images/worldmap.png" alt="World Map" className="w-full h-full object-contain opacity-75 mt-[-35px]" />
          </div>

          {/* Country stats on right side - moved higher up and to the right */}
          <div className="w-[32%] pl-6 mt-[-40px]">
            {countries.map((country, index) => (
              <div key={country.id} className="mb-5">
                <div className="flex items-center">
                  {/* Flag with exact dimensions */}
                  <div className="w-[40px] h-[28px] rounded-[2px] overflow-hidden mr-3">
                    <img src={country.flagSrc} alt={`${country.name} Flag`} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    {/* Country name with exact font specs */}
                    <div className="text-white font-semibold text-[16px] leading-[100%] tracking-[-0.04em] font-manrope">
                      {country.name}
                    </div>
                    {/* Color bar with exact dimensions */}
                    <div className="mt-2 relative h-[9px] w-[189px]">
                      <div className="w-full h-full bg-[#1D1D1D] rounded-[100px]"></div>
                      <div 
                        className="absolute top-0 left-0 h-full rounded-[100px]" 
                        style={{ 
                          width: `${country.percentage}%`, 
                          backgroundColor: country.color,
                        }}
                      ></div>
                      <div className="absolute right-0 -top-5 text-white text-xs font-semibold">
                        {country.percentage}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Horizontal line with exact specs */}
            <div className="mt-4 w-[245px] h-[1px] bg-[#1D1D1D] my-6"></div>
            
            {/* View all countries link with exact specs - right aligned to match reference */}
            <div className="w-[245px] mt-6">
              <div className="flex justify-end">
                <button className="flex items-center text-white text-[10px] font-semibold font-manrope leading-[100%] hover:text-gray-300 transition-colors">
                  View all countries
                  <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Country indicators for desktop view only */}
      {!isMobile && (
        <div className="absolute bottom-5 left-[24px]">
          <div className="w-[294px] h-[30px] border border-[#1D1D1D] rounded-[20px] flex items-center justify-around px-2">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#4834D4] mr-2"></div>
              <span className="text-white text-xs">India</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#BD5302] mr-2"></div>
              <span className="text-white text-xs">USA</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#E9C16B] mr-2"></div>
              <span className="text-white text-xs">CANADA</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#579560] mr-2"></div>
              <span className="text-white text-xs">UAE</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DemographicsCard; 