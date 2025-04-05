import React from 'react';

const Sidebar = () => {
  // Navigation items
  const navItems = [
    { name: 'Dashboard', active: false },
    { name: 'Analytics', active: true },
    { name: 'Connect', active: false },
    { name: 'Dealroom', active: false },
    { name: 'Profile', active: false },
    { name: 'Settings', active: false },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen font-manrope z-20">
      {/* Top section with logo and company name */}
      <div className="relative h-[50px] w-[240px] bg-black border-b border-r border-[#1D1D1D]">
        {/* Logo */}
        <div className="absolute top-[8px] left-[10px] w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center overflow-hidden">
          <img src="/images/logo.png" alt="Vertxlabs Logo" className="w-[16px] h-[16px] object-contain" />
        </div>
        
        {/* Company name */}
        <div className="absolute top-[13px] left-[73px] w-[110px] h-[23px] text-white font-bold text-[18px] leading-[100%] tracking-[-0.04em]">
          Vertxlabs, Inc
        </div>
      </div>
      
      <div className="flex">
        {/* Left column with user avatar (50px width) */}
        <div className="relative w-[50px] h-[782px] bg-black border-r border-[#1D1D1D]">
          {/* User profile */}
          <div className="absolute top-[20px] left-[10px] w-[30px] h-[30px] rounded-full overflow-hidden">
            <img src="/images/avatar.jpg" alt="User profile" className="w-full h-full object-cover" />
            {/* Green online dot */}
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border-2 border-black"></div>
          </div>
          
          {/* Bottom "Add" button */}
          <div className="absolute bottom-0 left-0 w-[50px] h-[50px] border-t border-r border-[#1D1D1D] flex items-center justify-center">
            <button className="w-[24px] h-[24px] flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Right column with navigation (190px width) */}
        <div className="relative w-[190px] h-[782px] bg-black border-r border-[#1D1D1D]">
          {/* Navigation items */}
          <div className="absolute top-[20px] left-[20px] space-y-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className={`h-[22px] w-[100px] flex items-center ${
                  item.active ? 'text-white font-bold' : 'text-[#555555]'
                } hover:text-white transition-colors cursor-pointer text-[16px] leading-[100%] tracking-[-0.04em]`}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 