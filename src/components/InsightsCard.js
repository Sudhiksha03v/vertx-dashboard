import React from 'react';

const InsightsCard = ({ isMobile }) => {
  return (
    <div className="px-4 pb-4 h-full flex flex-col">
      {/* Insights Content */}
      <div className="space-y-6 flex-1">
        {/* Founders Section */}
        <div>
          <div className="mb-1 text-white text-[16px] font-semibold tracking-[-0.04em] leading-[100%]">Founders</div>
          <div className="flex items-baseline">
            <span className="text-[32px] text-white font-extrabold tracking-[-0.04em] leading-[100%]">7.4K</span>
            <span className="ml-2 text-green-500 text-[12px] font-semibold tracking-[-0.04em] leading-[100%]">+000% (000)</span>
          </div>
        </div>
        
        {/* Investors Section */}
        <div>
          <div className="mb-1 text-white text-[16px] font-semibold tracking-[-0.04em] leading-[100%]">Investors</div>
          <div className="flex items-baseline">
            <span className="text-[32px] text-white font-extrabold tracking-[-0.04em] leading-[100%]">6.09K</span>
            <span className="ml-2 text-green-500 text-[12px] font-semibold tracking-[-0.04em] leading-[100%]">+000% (000)</span>
          </div>
        </div>
      </div>
      
      {/* View All Link */}
      <div className="flex justify-end">
        <a href="#" className="text-white text-[10px] font-semibold leading-[100%] flex items-center">
          View detailed insights
          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default InsightsCard; 