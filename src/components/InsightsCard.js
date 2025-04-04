import React from 'react';

const InsightsCard = ({ isMobile }) => {
  return (
    <div className="px-4 pb-4 h-full flex flex-col">
      {/* Insights Content */}
      <div className="space-y-6 flex-1">
        {/* Founders Section */}
        <div>
          <div className="mb-1 text-white font-medium">Founders</div>
          <div className="flex items-baseline">
            <span className="text-[28px] text-white font-bold">7.4K</span>
            <span className="ml-2 text-green-500 text-xs">+000% (000)</span>
          </div>
        </div>
        
        {/* Investors Section */}
        <div>
          <div className="mb-1 text-white font-medium">Investors</div>
          <div className="flex items-baseline">
            <span className="text-[28px] text-white font-bold">6.09K</span>
            <span className="ml-2 text-green-500 text-xs">+000% (000)</span>
          </div>
        </div>
      </div>
      
      {/* View All Link */}
      <div className="flex justify-end">
        <a href="#" className="text-white text-sm flex items-center">
          View detailed insights
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default InsightsCard; 