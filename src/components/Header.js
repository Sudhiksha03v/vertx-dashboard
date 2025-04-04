import React, { useState } from 'react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  
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
          <div className="text-white">Activity</div>
        </div>
        
        {/* Logout section */}
        <div className="fixed top-0 right-0 h-[50px] w-[120px] bg-black border-b border-l border-[#1D1D1D] flex items-center justify-center">
          <div className="text-white">Log out</div>
        </div>
      </div>
      
      {/* Second bar with tabs */}
      <div className="fixed top-[50px] left-[240px] right-0 h-[50px] bg-black border-b border-[#1D1D1D] flex z-10">
        {/* Overview tab - active */}
        <div 
          className={`h-[50px] w-[120px] border-r border-[#1D1D1D] flex items-center justify-center cursor-pointer ${
            activeTab === 'Overview' ? 'text-white' : 'text-[#555555]'
          }`}
          onClick={() => setActiveTab('Overview')}
        >
          Overview
        </div>
        
        {/* Demographics tab - inactive */}
        <div 
          className={`h-[50px] w-[147px] border-r border-[#1D1D1D] flex items-center justify-center cursor-pointer ${
            activeTab === 'Demographics' ? 'text-white' : 'text-[#555555]'
          }`}
          onClick={() => setActiveTab('Demographics')}
        >
          Demographics
        </div>
        
        {/* More section in corner */}
        <div className="h-[50px] w-[120px] ml-auto border-l border-[#1D1D1D] flex items-center justify-center text-white">
          More
        </div>
      </div>
    </>
  );
};

export default Header; 