import React, { useState } from 'react';

const Header = ({ isProfilePage }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  
  // Define tabs based on the current page
  const tabs = isProfilePage 
    ? ['Overview', 'Portfolio', 'Experience', 'Media'] 
    : ['Overview', 'Demographics'];
  
  return (
    <>
      {/* Top bar with Analytics, Activity, and Logout */}
      <div className="fixed top-0 left-0 right-0 font-manrope z-10">
        {/* Analytics section */}
        <div className="fixed top-0 left-[240px] h-[50px] w-[calc(100%-480px)] bg-black border-b border-r border-[#1D1D1D] flex items-center">
          <div className="ml-[20px] text-white font-medium">Analytics</div>
        </div>
        
        {/* Activity section */}
        <div className="fixed top-0 right-[120px] h-[50px] w-[120px] bg-black border-b border-l border-[#1D1D1D] flex items-center justify-center">
          <div className="text-white cursor-pointer hover:text-gray-300">Activity</div>
        </div>
        
        {/* Logout section */}
        <div className="fixed top-0 right-0 h-[50px] w-[120px] bg-black border-b border-l border-[#1D1D1D] flex items-center justify-center">
          <div className="text-white cursor-pointer hover:text-gray-300">Log out</div>
        </div>
      </div>
      
      {/* Second bar with tabs */}
      <div className="fixed top-[50px] left-[240px] right-0 h-[50px] bg-black border-b border-[#1D1D1D] flex z-10">
        {/* Tabs */}
        {tabs.map((tab) => (
          <div 
            key={tab}
            className={`h-[50px] px-6 border-r border-[#1D1D1D] flex items-center justify-center cursor-pointer ${
              activeTab === tab ? 'text-white font-medium' : 'text-[#555555] hover:text-white'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
        
        {/* More section in corner - aligned with Logout button */}
        <div className="h-[50px] w-[120px] px-6 ml-auto border-l border-[#1D1D1D] flex items-center justify-center text-white cursor-pointer hover:text-gray-300">
          More
        </div>
      </div>
    </>
  );
};

export default Header; 