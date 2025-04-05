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
    <div className={`${isMobile ? 'w-full pb-20' : 'h-screen bg-black overflow-auto font-manrope'}`}>
      {/* Header component - different for mobile and desktop */}
      {isMobile ? <MobileHeader /> : <Header isProfilePage={false} />}
      
      {/* Main content area - scrollable */}
      <div className={`${isMobile ? 'pt-[118px] px-4' : 'fixed top-[50px] left-[240px] w-[calc(100%-240px)] h-[calc(100vh-50px)] overflow-y-auto bg-[#080808]'}`}>
        <div className={`${isMobile ? '' : 'pt-[80px] px-[60px] pb-[60px]'}`}>
          {/* Overview header - only shown on desktop, with exactly the same styling as in Profile */}
          {!isMobile && (
            <h2 className="text-[28px] font-extrabold text-white tracking-[-0.04em] leading-[100%] mb-8">
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
            <div className="flex flex-col gap-10">
              {/* Top row with Overview and Insights cards */}
              <div className="flex gap-6">
                {/* Overview Graph Card */}
                <div className="w-[calc(100%-290px)] h-[290px] border border-[#1D1D1D] rounded-lg bg-black">
                  <div className="flex items-center justify-between p-5">
                    {/* Dropdowns */}
                    <div className="flex gap-3">
                      <div className="relative inline-block">
                        <div 
                          onClick={() => setDropdownOpen(dropdownOpen === 'visitors' ? null : 'visitors')}
                          className="appearance-none w-[108px] h-[24px] bg-black border border-[#1D1D1D] text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-between cursor-pointer"
                        >
                          <span>Visitors</span>
                          <svg className="fill-current h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                        {dropdownOpen === 'visitors' && (
                          <div className="absolute left-0 mt-1 w-[108px] bg-black border border-[#1D1D1D] rounded-md shadow-lg z-10">
                            <div className="py-0">
                              <div className="block px-4 py-1.5 text-white text-[12px] font-semibold bg-[#0A0A0A]">Visitors</div>
                              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Connections</div>
                              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Interactions</div>
                              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Impressions</div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="relative inline-block">
                        <div 
                          onClick={() => setDropdownOpen(dropdownOpen === 'timeframe' ? null : 'timeframe')}
                          className="appearance-none w-[108px] h-[24px] bg-black border border-[#1D1D1D] text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-between cursor-pointer whitespace-nowrap"
                        >
                          <span>Last 30 days</span>
                          <svg className="fill-current h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                        {dropdownOpen === 'timeframe' && (
                          <div className="absolute left-0 mt-1 w-[108px] bg-black border border-[#1D1D1D] rounded-md shadow-lg z-10">
                            <div className="py-0">
                              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Today</div>
                              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Yesterday</div>
                              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">This week</div>
                              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Last week</div>
                              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Last 7 days</div>
                              <div className="block px-4 py-1.5 text-white bg-[#0A0A0A] text-[12px] font-semibold">Last 30 days</div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* +Add button with dotted border */}
                      <div className="relative inline-block">
                        <div 
                          onClick={() => setDropdownOpen(dropdownOpen === 'add' ? null : 'add')}
                          className="w-[80px] h-[24px] border border-dashed border-[#1D1D1D] text-gray-400 text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-center cursor-pointer"
                        >
                          + Add
                        </div>
                        {dropdownOpen === 'add' && (
                          <div className="absolute left-0 mt-1 w-[108px] bg-black border border-[#1D1D1D] rounded-md shadow-lg z-10">
                            <div className="py-0">
                              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Connections</div>
                              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Interactions</div>
                              <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Impressions</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex flex-row gap-10 px-5 mt-3 mb-4">
                    <div>
                      <div className="text-[32px] font-extrabold text-white tracking-[-0.04em] leading-[100%]">13.49K</div>
                      <div className="text-green-500 text-[12px] font-semibold tracking-[-0.04em] leading-[100%] mt-1">+469% (897)</div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <div className="w-[6px] h-[6px] rounded-full bg-purple-500 mr-2"></div>
                        <div className="text-[12px] text-white font-medium">3.49K</div>
                      </div>
                      <div className="text-green-500 text-[12px] font-semibold tracking-[-0.04em] leading-[100%]">+180% (497)</div>
                    </div>
                  </div>
                  
                  {/* Chart */}
                  <div className="h-[170px] w-full mt-2">
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
                        className="appearance-none w-[108px] h-[24px] bg-black border border-[#1D1D1D] text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center justify-between cursor-pointer"
                      >
                        <span>Visitors</span>
                        <svg className="fill-current h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                      {dropdownOpen === 'insightsVisitors' && (
                        <div className="absolute right-0 mt-1 w-[108px] bg-black border border-[#1D1D1D] rounded-md shadow-lg z-10">
                          <div className="py-0">
                            <div className="block px-4 py-1.5 text-white bg-[#0A0A0A] text-[12px] font-semibold">Visitors</div>
                            <div className="block px-4 py-1.5 text-[#555555] text-[12px] font-semibold">Connections</div>
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
                </div>
                <DemographicsCard isMobile={false} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 