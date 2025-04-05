import React from 'react';

const InsightsCard = ({ isMobile }) => {
  const items = [
    {
      title: 'Founders',
      value: '7.4K',
      change: '+000%',
      changeValue: '(000)',
      changePositive: true
    },
    {
      title: 'Investors',
      value: '6.09K',
      change: '+000%',
      changeValue: '(000)',
      changePositive: true
    }
  ];

  return (
    <div className={`${isMobile ? 'p-4' : 'p-4'}`}>
      <div className={`${isMobile ? 'px-0' : 'px-2'} h-full flex flex-col`}>
        {isMobile ? (
          // Mobile view - display side by side
          <div className="flex justify-between">
            {items.map((item, index) => (
              <div key={index} className="w-1/2">
                <h4 className="text-[16px] text-white font-semibold font-manrope tracking-[-0.04em] leading-[100%]">{item.title}</h4>
                <div className="flex items-start mt-1">
                  <div className="text-[26px] font-extrabold text-white tracking-[-0.04em] leading-[100%] font-manrope">{item.value}</div>
                  <div className="ml-2 flex flex-col mt-1">
                    <span className="text-[#01754F] text-[12px] font-semibold tracking-[-0.04em] leading-[100%] font-manrope">
                      {item.change}
                    </span>
                    <span className="text-[#555555] text-[12px] font-semibold tracking-[-0.04em] leading-[100%] font-manrope mt-1">
                      {item.changeValue}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Desktop view - stacked
          <>
            {items.map((item, index) => (
              <div key={index} className={`${index !== 0 ? 'mt-5' : 'mt-0'}`}>
                <h4 className="text-[16px] text-white font-semibold font-manrope tracking-[-0.04em] leading-[100%]">{item.title}</h4>
                <div className="flex items-start mt-1">
                  <div className="text-[32px] font-extrabold text-white tracking-[-0.04em] leading-[100%] font-manrope">{item.value}</div>
                  <div className="ml-2 flex flex-col mt-1">
                    <span className="text-[#01754F] text-[12px] font-semibold tracking-[-0.04em] leading-[100%] font-manrope">
                      {item.change}
                    </span>
                    <span className="text-[#555555] text-[12px] font-semibold tracking-[-0.04em] leading-[100%] font-manrope mt-1">
                      {item.changeValue}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        
        <div className={`${isMobile ? 'mt-4' : 'mt-8'} pt-4 border-t border-[#1D1D1D] flex justify-end w-full`}>
          <button className="flex items-center text-[10px] text-white font-semibold font-manrope tracking-[0%] leading-[100%] hover:text-gray-300 transition-colors mt-3">
            View detailed insights
            <span className="ml-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightsCard; 