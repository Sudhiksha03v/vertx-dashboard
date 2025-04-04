import React from 'react';

const InsightsCard = ({ isMobile }) => {
  return (
    <div className="p-5 pt-0">
      <div className="space-y-5">
        {/* Founders Section */}
        <div>
          <h4 className="text-[16px] font-semibold text-white tracking-[-0.04em] leading-[100%] mb-2">
            Founders
          </h4>
          <div className="flex items-center gap-2">
            <div className="text-[32px] font-extrabold text-white tracking-[-0.04em] leading-[100%]">
              7.4K
            </div>
            <div className="text-green-500 text-[12px] font-semibold tracking-[-0.04em] leading-[100%]">
              +000% (000)
            </div>
          </div>
        </div>

        {/* Investors Section */}
        <div>
          <h4 className="text-[16px] font-semibold text-white tracking-[-0.04em] leading-[100%] mb-2">
            Investors
          </h4>
          <div className="flex items-center gap-2">
            <div className="text-[32px] font-extrabold text-white tracking-[-0.04em] leading-[100%]">
              6.09K
            </div>
            <div className="text-green-500 text-[12px] font-semibold tracking-[-0.04em] leading-[100%]">
              +000% (000)
            </div>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="w-full h-[1px] bg-[#1D1D1D] my-6"></div>

      {/* View detailed insights link */}
      <div className="flex justify-end">
        <button className="flex items-center text-white text-[10px] font-semibold tracking-[-0.04em] leading-[100%] hover:underline">
          View detailed insights
          <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InsightsCard; 