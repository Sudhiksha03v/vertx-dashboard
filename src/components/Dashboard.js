import React, { useState } from 'react';
import Header from './Header';
import OverviewChart from './OverviewChart';
import InsightsCard from './InsightsCard';
import DemographicsCard from './DemographicsCard';
import MobileHeader from './MobileHeader';
// eslint-disable-next-line no-unused-vars
import MobileNav from './MobileNav';

const Dashboard = ({ isMobile }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  return (
    <div className={`${isMobile ? 'w-full pb-20' : 'h-screen bg-black overflow-auto font-manrope'}`} style={{ zoom: '110%' }}>
      {/* Header component - different for mobile and desktop */}
      {isMobile ? <MobileHeader /> : <Header />}
      
      {/* Main content area - scrollable */}
      <div className={`${isMobile ? 'pt-[118px] px-4' : 'fixed top-[100px] left-[240px] w-[calc(100%-240px)] h-[calc(100vh-100px)] overflow-y-auto bg-[#080808]'}`}>
        <div className={`${isMobile ? '' : 'px-[60px] py-[32px] pb-[60px]'}`}>
          {/* Overview header - only shown on desktop */}
          {!isMobile && (
            <h2 className="text-[32px] font-extrabold text-white tracking-[-0.04em] leading-[100%] mb-8 ml-3">
              Overview
            </h2>
          )}
          
          {/* Content layout - different for mobile and desktop */}
          {isMobile ? (
            // Mobile layout - stacked sections
            <div className="space-y-6 pb-8">
              {/* Overview Chart - shows total at the top on mobile */}
              <div className="bg-black rounded-lg p-4 border border-[#1D1D1D]">
                <div className="mb-2">
                  <div className="text-3xl font-bold text-white">13.49K</div>
                  <div className="text-green-500 text-sm">+66% (597)</div>
                </div>
                <OverviewChart isMobile={true} />
              </div>
              
              {/* Insights Card */}
              <div className="bg-black rounded-lg border border-[#1D1D1D]">
                <InsightsCard isMobile={true} />
              </div>
              
              {/* Demographics Card */}
              <div className="bg-black rounded-lg border border-[#1D1D1D]">
                <DemographicsCard isMobile={true} />
              </div>
            </div>
          ) : (
            // Desktop layout - card layout with flex
            <div className="flex flex-col gap-6 max-w-[1200px]">
              {/* Top row with Overview and Insights cards */}
              <div className="flex gap-6">
                {/* Overview Graph Card */}
                <div className="w-[calc(100%-290px)] h-[290px] border border-[#1D1D1D] rounded-lg bg-black p-5">
                  <div className="flex items-center">
                    {/* Dropdowns */}
                    <div className="flex gap-3">
                      <div className="relative inline-block">
                        <div 
                          onClick={() => setDropdownOpen(dropdownOpen === 'visitors' ? null : 'visitors')}
                          className="appearance-none w-[108px] h-[24px] bg-black border border-[#1D1D1D] hover:border-gray-500 text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-between cursor-pointer"
                        >
                          <span>Visitors</span>
                          <svg className="fill-current h-3 w-3 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                        {dropdownOpen === 'visitors' && (
                          <div className="absolute left-0 mt-1 w-[120px] bg-black border border-[#1D1D1D] rounded-md shadow-lg z-10">
                            <div className="py-1">
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Visitors</div>
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Connections</div>
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Interactions</div>
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Impressions</div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="relative inline-block">
                        <div 
                          onClick={() => setDropdownOpen(dropdownOpen === 'timeframe' ? null : 'timeframe')}
                          className="appearance-none w-[108px] h-[24px] bg-black border border-[#1D1D1D] hover:border-gray-500 text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-between cursor-pointer"
                        >
                          <span>Last 30 days</span>
                          <svg className="fill-current h-3 w-3 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                        {dropdownOpen === 'timeframe' && (
                          <div className="absolute left-0 mt-1 w-[120px] bg-black border border-[#1D1D1D] rounded-md shadow-lg z-10">
                            <div className="py-1">
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Today</div>
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Yesterday</div>
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">This week</div>
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Last week</div>
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Last 7 days</div>
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Last 30 days</div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* +Add button with dotted border */}
                      <div className="relative inline-block">
                        <div 
                          onClick={() => setDropdownOpen(dropdownOpen === 'add' ? null : 'add')}
                          className="w-[80px] h-[24px] border border-dashed border-[#1D1D1D] hover:border-gray-500 rounded-full text-gray-400 text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-center cursor-pointer transition-colors"
                        >
                          + Add
                        </div>
                        {dropdownOpen === 'add' && (
                          <div className="absolute left-0 mt-1 w-[120px] bg-black border border-[#1D1D1D] rounded-md shadow-lg z-10">
                            <div className="py-1">
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Connections</div>
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Interactions</div>
                              <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Impressions</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex items-start gap-20 mt-6 mb-6">
                    <div>
                      <div className="text-[32px] font-extrabold text-white tracking-[-0.04em] leading-[100%]">13.49K</div>
                      <div className="text-green-500 text-[12px] font-semibold tracking-[-0.04em] leading-[100%] mt-1">+469% (897)</div>
                    </div>
                  </div>
                  
                  {/* Chart */}
                  <div className="h-[160px] w-full">
                    <OverviewChart isMobile={false} />
                  </div>
                </div>

                {/* Insights Card */}
                <div className="w-[280px] h-[290px] border border-[#1D1D1D] rounded-lg bg-black">
                  <div className="flex justify-between items-center p-5">
                    <h3 className="text-[20px] font-bold text-white tracking-[-0.04em] leading-[100%]">Insights</h3>
                    <div className="relative inline-block">
                      <div 
                        onClick={() => setDropdownOpen(dropdownOpen === 'insightsVisitors' ? null : 'insightsVisitors')}
                        className="appearance-none w-[100px] h-[24px] bg-black border border-[#1D1D1D] hover:border-gray-500 text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-between cursor-pointer"
                      >
                        <span>Visitors</span>
                        <svg className="fill-current h-3 w-3 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                      {dropdownOpen === 'insightsVisitors' && (
                        <div className="absolute right-0 mt-1 w-[120px] bg-black border border-[#1D1D1D] rounded-md shadow-lg z-10">
                          <div className="py-1">
                            <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Visitors</div>
                            <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Connections</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <InsightsCard isMobile={false} />
                </div>
              </div>

              {/* Demographics Card */}
              <div className="w-full h-[290px] border border-[#1D1D1D] rounded-lg bg-black overflow-hidden">
                <div className="flex justify-between items-center p-5">
                  <h3 className="text-[20px] font-bold text-white tracking-[-0.04em] leading-[100%]">Demographics</h3>
                  <div className="relative inline-block">
                    <div 
                      onClick={() => setDropdownOpen(dropdownOpen === 'demographicsVisitors' ? null : 'demographicsVisitors')}
                      className="appearance-none w-[100px] h-[24px] bg-black border border-[#1D1D1D] hover:border-gray-500 text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-between cursor-pointer"
                    >
                      <span>Visitors</span>
                      <svg className="fill-current h-3 w-3 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                    {dropdownOpen === 'demographicsVisitors' && (
                      <div className="absolute right-0 mt-1 w-[120px] bg-black border border-[#1D1D1D] rounded-md shadow-lg z-10">
                        <div className="py-1">
                          <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Visitors</div>
                          <div className="block px-4 py-2 text-white text-[12px] font-semibold hover:bg-[#1D1D1D] cursor-pointer">Connections</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <DemographicsCard isMobile={false} />
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Fixed sidebar shade element - single border */}
      {!isMobile && (
        <div className="fixed top-0 left-0 w-[240px] h-screen bg-black border-r border-[#1D1D1D] z-10"></div>
      )}
    </div>
  );
};

export default Dashboard; 