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
    <div className="p-4">
      <div className="px-2">
        {items.map((item, index) => (
          <div key={index} className={`${index !== 0 ? 'mt-10' : 'mt-2'}`}>
            <h4 className="text-[16px] text-white font-semibold font-manrope tracking-[-0.04em] leading-[100%]">{item.title}</h4>
            <div className="flex items-start mt-1">
              <div className="text-[32px] font-extrabold text-white tracking-[-0.04em] leading-[100%] font-manrope">{item.value}</div>
              <div className="ml-2 flex flex-col mt-1">
                <span className="text-[#01754F] text-[12px] font-semibold tracking-[-0.04em] leading-[100%] font-manrope">
                  {item.change}
                </span>
                <span className="text-[#555555] text-[12px] font-semibold tracking-[-0.04em] leading-[100%] font-manrope">
                  {item.changeValue}
                </span>
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-6 pt-3 border-t border-[#1D1D1D] flex justify-end w-full">
          <button className="flex items-center text-[10px] text-white font-semibold font-manrope tracking-[0%] leading-[100%] hover:text-gray-300 transition-colors">
            View detailed insights
            <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightsCard; 