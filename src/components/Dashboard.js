import React from 'react';
import Header from './Header';
import OverviewChart from './OverviewChart';
import InsightsCard from './InsightsCard';
import DemographicsCard from './DemographicsCard';
import MobileHeader from './MobileHeader';
import MobileNav from './MobileNav';

const Dashboard = ({ isMobile }) => {
  return (
    <div className={`${isMobile ? 'w-full pb-20' : 'h-screen bg-black overflow-auto font-manrope'}`}>
      {/* Header component - different for mobile and desktop */}
      {isMobile ? <MobileHeader /> : <Header />}
      
      {/* Main content area */}
      <div className={`${isMobile ? 'pt-[118px] px-4' : 'fixed top-[100px] left-[240px] w-[calc(100%-240px)] overflow-auto bg-[#080808]'}`}>
        <div className={`${isMobile ? '' : 'px-[60px] py-[32px]'}`}>
          {/* Overview header - only shown on desktop */}
          {!isMobile && (
            <h2 className="text-[28px] font-extrabold text-white mb-6 leading-[100%] tracking-[-0.04em]">
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
            // Desktop layout - organized in sections
            <>
              <div className="flex gap-6 mb-6">
                {/* Overview Graph Card */}
                <div className="flex-1 h-[273px] border border-[#1D1D1D] rounded-lg bg-black p-4">
                  <div className="flex justify-between items-center mb-5">
                    <div className="flex items-center gap-8">
                      <div>
                        <div className="text-[32px] font-bold text-white">13.49K</div>
                        <div className="text-green-500 text-xs">+469% (897)</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                        <div>
                          <div className="text-[32px] font-bold text-white">3.49K</div>
                          <div className="text-green-500 text-xs">+180% (497)</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="relative">
                        <select className="appearance-none w-[130px] bg-black border border-[#1D1D1D] text-white py-2 px-3 rounded-md text-sm">
                          <option>Visitors</option>
                          <option>Connections</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                      <div className="relative">
                        <select className="appearance-none w-[130px] bg-black border border-[#1D1D1D] text-white py-2 px-3 rounded-md text-sm">
                          <option>Last 30 days</option>
                          <option>Last 7 days</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                      <div className="relative">
                        <select className="appearance-none w-[130px] bg-black border border-[#1D1D1D] text-white py-2 px-3 rounded-md text-sm">
                          <option>Connections</option>
                          <option>Interactions</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[190px]">
                    <OverviewChart isMobile={false} />
                  </div>
                </div>

                {/* Insights Card */}
                <div className="w-[274px] h-[273px] border border-[#1D1D1D] rounded-lg bg-black p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-white text-lg font-semibold">Insights</h3>
                    <div className="relative">
                      <select className="appearance-none w-[100px] bg-black border border-[#1D1D1D] text-white py-1 px-2 rounded text-sm">
                        <option>Visitors</option>
                        <option>Connections</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                  <InsightsCard isMobile={false} />
                </div>
              </div>

              {/* Demographics Card */}
              <div className="w-full h-[296px] border border-[#1D1D1D] rounded-lg bg-black p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-white text-lg font-semibold">Demographics</h3>
                  <div className="relative">
                    <select className="appearance-none w-[100px] bg-black border border-[#1D1D1D] text-white py-1 px-2 rounded text-sm">
                      <option>Visitors</option>
                      <option>Connections</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                      <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <DemographicsCard isMobile={false} />
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Mobile Navigation - Now handled in App.js */}
    </div>
  );
};

export default Dashboard; 