import React, { useState } from 'react';

const MobileHeader = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Demographics'];

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-20 bg-black border-b border-[#1D1D1D] h-[60px] flex items-center justify-between px-4">
        {/* User profile on left */}
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#1D1D1D]">
          <img src="/images/avatar.jpg" alt="User Profile" className="w-full h-full object-cover" />
        </div>
        
        {/* Company logo in center */}
        <div className="flex items-center justify-center">
          <img src="/images/logo.png" alt="Company Logo" className="h-6 object-contain" />
        </div>
        
        {/* More options button on right */}
        <div className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </div>
      </div>
      
      {/* Tab navigation with border between tabs */}
      <div className="fixed top-[60px] left-0 right-0 z-20 flex bg-black border-b border-[#1D1D1D]">
        {tabs.map((tab, index) => (
          <button 
            key={tab}
            className={`flex-1 py-3 ${tab === 'Demographics' ? 'px-5' : 'px-2'} text-center text-white ${
              activeTab === tab 
                ? 'font-medium' 
                : ''
            } ${index > 0 ? 'border-l border-[#1D1D1D]' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </>
  );
};

export default MobileHeader; 