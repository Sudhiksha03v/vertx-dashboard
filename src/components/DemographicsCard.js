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
    <div className={`${isMobile ? 'p-4 pt-0 pb-4' : 'p-5 pt-0 pb-4'} relative`}>
      {/* Visitors dropdown in left corner */}
      <div className="relative inline-block mb-4 ml-2">
        <div 
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="appearance-none w-[108px] h-[24px] bg-black border border-[#1D1D1D] text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-between cursor-pointer"
        >
          <span className="mr-3">Visitors</span>
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-white absolute right-3"></div>
        </div>
        {dropdownOpen && (
          <div className="absolute left-0 mt-1 w-[108px] bg-[#0A0A0A] border border-[#1D1D1D] rounded-md shadow-lg z-10">
            <div className="py-0">
              <div className="block px-4 py-1.5 text-white text-[12px] font-semibold">Visitors</div>
              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Connections</div>
            </div>
          </div>
        )}
      </div>

      {/* Main content layout */}
      <div className="w-full relative flex flex-wrap">
        {/* World Map - full size and positioned correctly */}
        <div className={`${isMobile ? 'w-full' : 'w-[72%]'} h-[280px] relative`}>
          <img src="/images/worldmap.png" alt="World Map" className="w-full h-full object-contain opacity-75 mt-[-25px]" />
        </div>

        {/* Country stats on right side - exact positioning and styling */}
        <div className={`${isMobile ? 'w-full mt-4' : 'w-[28%] pl-0 mt-[-25px]'}`}>
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
                  <div className="mt-2 relative h-[7px] w-[189px]">
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
          <div className="mt-3 w-[228px] h-[1px] bg-[#1D1D1D]"></div>
          
          {/* View all countries link with exact specs */}
          <div className="flex justify-end mt-5">
            <button className="flex items-center text-white text-[10px] font-semibold font-manrope leading-[100%] hover:text-gray-300 transition-colors">
              View all countries
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Country indicators below map with exact positioning */}
      <div className={`${isMobile ? 'relative mt-4' : 'absolute bottom-4'} left-[20px] w-[294px] h-[30px] border border-[#1D1D1D] rounded-[20px] flex items-center justify-around px-2`}>
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
  );
};

export default DemographicsCard; 