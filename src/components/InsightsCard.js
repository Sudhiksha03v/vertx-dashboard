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
    <div className="p-5 pt-0">
      <div className="px-2">
        {items.map((item, index) => (
          <div key={index} className={`${index !== 0 ? 'mt-10' : 'mt-4'}`}>
            <h4 className="text-sm text-white tracking-[-0.04em]">{item.title}</h4>
            <div className="flex items-center">
              <div className="text-[32px] font-bold text-white tracking-[-0.04em] leading-[100%]">{item.value}</div>
              <div className={`ml-2 ${item.changePositive ? 'text-green-500' : 'text-red-500'} text-xs font-semibold tracking-[-0.04em] leading-[100%]`}>
                {item.change}
                <br />
                {item.changeValue}
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-12 pt-4 border-t border-[#1D1D1D] flex justify-end">
          <button className="flex items-center text-[10px] text-[#AAAAAA] font-semibold tracking-[0%] leading-[100%] hover:text-white transition-colors">
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