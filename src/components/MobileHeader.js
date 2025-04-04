import React, { useState } from 'react';

const MobileHeader = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Reports', 'Demographics'];
  
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Purple top border */}
      <div className="h-1 w-full bg-purple-600"></div>
      
      {/* Header with profile and logo */}
      <div className="flex items-center justify-between px-4 h-16 bg-black border-b border-gray-800">
        {/* Profile icon */}
        <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
          <img src="https://i.pravatar.cc/40" alt="User" className="w-full h-full object-cover" />
        </div>
        
        {/* Logo */}
        <div className="w-8 h-8">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 19H22L12 2Z" fill="white" />
          </svg>
        </div>
        
        {/* Menu dots */}
        <button className="w-6 h-6 flex items-center justify-center text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>
      
      {/* Tab navigation */}
      <div className="flex w-full bg-black border-b border-gray-800">
        {tabs.map((tab) => (
          <button 
            key={tab}
            className={`flex-1 py-3 text-center ${
              activeTab === tab 
                ? 'text-white border-b-2 border-white' 
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileHeader; 