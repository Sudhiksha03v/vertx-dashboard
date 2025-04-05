import React, { useState, useEffect } from 'react';
import Header from './Header';
import OverviewChart from './OverviewChart';
import InsightsCard from './InsightsCard';
import DemographicsCard from './DemographicsCard';
import MobileHeader from './MobileHeader';
import MobileNav from './MobileNav';

const Dashboard = ({ isMobile, onPageChange, currentPage }) => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [addOpen, setAddOpen] = useState(false);

  // Add smooth scrolling effect
  useEffect(() => {
    // Only apply smooth scrolling to the html element
    if (typeof document !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    
    return () => {
      if (typeof document !== 'undefined') {
        document.documentElement.style.scrollBehavior = '';
      }
    };
  }, []);

  return (
    <div className={`${isMobile ? 'w-full pb-20' : 'h-screen bg-black overflow-auto font-manrope'}`}>
      {/* Header component - only for desktop */}
      {!isMobile && <Header isProfilePage={false} />}
      
      {/* Main content area - scrollable */}
      <div className={`${isMobile ? '' : 'fixed top-[50px] left-[240px] w-[calc(100%-240px)] h-[calc(100vh-50px)] overflow-y-auto bg-[#080808]'}`}>
        <div className={`${isMobile ? '' : 'pt-[100px] px-[60px] pr-[80px] pb-[60px]'}`}>
          {/* Overview header - only shown on desktop, with exactly the same styling as in Profile */}
          {!isMobile && (
            <h2 className="text-[28px] font-extrabold text-white tracking-[-0.04em] leading-[100%] mb-8">
              Overview
            </h2>
          )}
          
          {/* Content layout - different for mobile and desktop */}
          {isMobile ? (
            <>
              <MobileHeader />
              {/* Adjusted spacing at the top for mobile view to match reference */}
              <div className="pt-[130px] px-4">
                {/* Mobile layout - stacked sections with improved spacing */}
                <div className="space-y-6 pb-20">
                  {/* Overview Chart - shows total at the top on mobile */}
                  <div className="bg-black rounded-lg p-4 pt-6 pl-4 pr-0 border border-[#1D1D1D]">
                    <div className="flex items-start">
                      <div className="text-[24px] font-extrabold text-white tracking-[-0.04em] leading-[100%] font-manrope">13.49K</div>
                      <div className="flex flex-col ml-2 justify-center">
                        <span className="text-[#01754F] text-[12px] font-semibold tracking-[-0.04em] leading-[100%] font-manrope">+469%</span>
                        <span className="text-[#555555] text-[12px] font-semibold tracking-[-0.04em] leading-[100%] font-manrope mt-1">(897)</span>
                      </div>
                    </div>
                    <div className="h-[220px] mt-6 w-full overflow-hidden">
                      <OverviewChart isMobile={true} />
                    </div>
                  </div>
                  
                  {/* Insights Card */}
                  <div className="bg-black rounded-lg border border-[#1D1D1D]">
                    <div className="flex justify-between items-center p-4">
                      <h3 className="text-[20px] font-bold text-white tracking-[-0.04em] leading-[100%]">Insights</h3>
                      <div className="relative inline-block">
                        <div 
                          onClick={() => setDropdownOpen(dropdownOpen === 'mobileInsightsVisitors' ? null : 'mobileInsightsVisitors')}
                          className="appearance-none bg-black border border-[#1D1D1D] text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center cursor-pointer"
                          style={{ width: '108px', height: '24px' }}
                        >
                          <span className="mr-3">Visitors</span>
                          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white absolute right-3"></div>
                        </div>
                        {dropdownOpen === 'mobileInsightsVisitors' && (
                          <div className="absolute right-0 mt-1 w-[108px] bg-[#0A0A0A] border border-[#1D1D1D] rounded-md shadow-lg z-10">
                            <div className="py-0">
                              <div className="block px-4 py-1.5 text-white bg-[#0A0A0A] text-[12px] font-semibold">Visitors</div>
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Connections</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <InsightsCard isMobile={true} />
                  </div>
                  
                  {/* Demographics Card */}
                  <div className="bg-black rounded-lg border border-[#1D1D1D]">
                    <div className="flex justify-between items-center p-5">
                      <h3 className="text-[20px] font-bold text-white tracking-[-0.04em] leading-[100%]">Demographics</h3>
                      <div className="relative inline-block">
                        <div 
                          onClick={() => setDropdownOpen(dropdownOpen === 'demogVisitors' ? null : 'demogVisitors')}
                          className="appearance-none w-[108px] h-[24px] bg-black border border-[#1D1D1D] text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center cursor-pointer"
                        >
                          <span className="mr-3">Visitors</span>
                          <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white absolute right-3"></div>
                        </div>
                        {dropdownOpen === 'demogVisitors' && (
                          <div className="absolute right-0 mt-1 w-[108px] bg-[#0A0A0A] border border-[#1D1D1D] rounded-md shadow-lg z-10">
                            <div className="py-0">
                              <div className="block px-4 py-1.5 text-white bg-[#0A0A0A] text-[12px] font-semibold">Visitors</div>
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Connections</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="min-h-[320px]">
                      <DemographicsCard isMobile={true} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <MobileNav onPageChange={onPageChange} currentPage={currentPage || 'analytics'} />
            </>
          ) : (
            // Desktop layout - card layout with flex
            <div className="flex flex-col gap-10">
              {/* Top row with Overview and Insights cards */}
              <div className="flex gap-8">
                {/* Overview Graph Card */}
                <div className="w-[calc(100%-300px)] h-[290px] border border-[#1D1D1D] rounded-lg bg-black">
                  <div className="flex items-center justify-between pt-4 px-5 pb-0">
                    {/* Dropdowns */}
                    <div className="flex gap-2">
                      <div className="relative inline-block">
                        <div 
                          onClick={() => setDropdownOpen(dropdownOpen === 'visitors' ? null : 'visitors')}
                          className="appearance-none w-[108px] h-[24px] bg-black border border-[#1D1D1D] text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center cursor-pointer"
                        >
                          <span className="mr-5">Visitors</span>
                          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-white absolute right-3"></div>
                        </div>
                        {dropdownOpen === 'visitors' && (
                          <div className="absolute left-0 mt-1 w-[108px] bg-[#0A0A0A] border border-[#1D1D1D] rounded-md shadow-lg z-10">
                            <div className="py-0">
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Visitors</div>
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Connections</div>
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Interactions</div>
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Impressions</div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="relative inline-block">
                        <div 
                          onClick={() => setDropdownOpen(dropdownOpen === 'timeframe' ? null : 'timeframe')}
                          className="appearance-none w-[130px] h-[24px] bg-black border border-[#1D1D1D] text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center cursor-pointer whitespace-nowrap"
                        >
                          <span className="mr-5">Last 30 days</span>
                          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-white absolute right-3"></div>
                        </div>
                        {dropdownOpen === 'timeframe' && (
                          <div className="absolute left-0 mt-1 w-[130px] bg-[#0A0A0A] border border-[#1D1D1D] rounded-md shadow-lg z-10">
                            <div className="py-0">
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Today</div>
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Yesterday</div>
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">This week</div>
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Last week</div>
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Last 7 days</div>
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Last 30 days</div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* + Add dropdown */}
                      <div className="relative ml-2">
                        <button 
                          onClick={() => setAddOpen(!addOpen)} 
                          className="flex items-center relative bg-black border border-[#1D1D1D] text-white py-1 px-3 pl-4 pr-4 rounded-full text-xs font-semibold tracking-[-0.04em] leading-[100%] h-[24px] w-[92px]"
                        >
                          <span className="font-bold text-sm mr-1">+</span>
                          <span>Add</span>
                        </button>
                        {addOpen && (
                          <div className="absolute right-0 mt-1 w-[120px] rounded-md shadow-lg bg-[#0A0A0A] border border-[#1D1D1D] z-20">
                            <div className="py-0">
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Connections</div>
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Interactions</div>
                              <div className="block px-4 py-1.5 text-[#555555] hover:bg-[#1D1D1D] hover:text-white text-[12px] font-semibold cursor-pointer">Impressions</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex flex-row justify-start px-5 mt-3 mb-5 w-[500px] gap-4">
                    <div className="flex items-center gap-2">
                      <div className="text-[32px] font-extrabold text-white tracking-[-0.04em] leading-[100%] font-manrope">13.49K</div>
                      <div className="flex flex-col">
                        <span className="text-[#01754F] text-[12px] font-semibold tracking-[-0.04em] leading-[100%] font-manrope">+469%</span>
                        <span className="text-[#555555] text-[12px] font-semibold tracking-[-0.04em] leading-[100%] font-manrope mt-1">(897)</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <div className="h-[24px] w-[1px] bg-[#1D1D1D] mr-3"></div>
                        <div className="w-[8px] h-[8px] rounded-full bg-[#C36DEE] mr-2"></div>
                        <div className="text-[32px] font-extrabold text-white tracking-[-0.04em] leading-[100%] font-manrope">3.49K</div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#01754F] text-[12px] font-semibold tracking-[-0.04em] leading-[100%] font-manrope">+180%</span>
                        <span className="text-[#555555] text-[12px] font-semibold tracking-[-0.04em] leading-[100%] font-manrope mt-1">(497)</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chart */}
                  <div className="h-[180px] w-full mt-0">
                    <OverviewChart isMobile={false} />
                  </div>
                </div>

                {/* Insights Card */}
                <div className="w-[280px] h-[290px] border border-[#1D1D1D] rounded-lg bg-black">
                  <div className="flex justify-between items-center p-4">
                    <h3 className="text-[20px] font-bold text-white tracking-[-0.04em] leading-[100%]">Insights</h3>
                    <div className="relative inline-block">
                      <div 
                        onClick={() => setDropdownOpen(dropdownOpen === 'insightsVisitors' ? null : 'insightsVisitors')}
                        className="appearance-none bg-black border border-[#1D1D1D] text-white py-0.5 px-3 pl-4 pr-8 rounded-full text-[12px] font-semibold tracking-[-0.04em] leading-[100%] flex items-center cursor-pointer"
                        style={{ width: '87px', height: '24px' }}
                      >
                        <span className="mr-3">Visitors</span>
                        <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-white absolute right-3"></div>
                      </div>
                      {dropdownOpen === 'insightsVisitors' && (
                        <div className="absolute right-0 mt-1 w-[87px] bg-black border border-[#1D1D1D] rounded-md shadow-lg z-10">
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
              <div className="w-full border border-[#1D1D1D] rounded-lg bg-black overflow-hidden">
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