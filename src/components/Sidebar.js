import React from 'react';

const Sidebar = ({ onPageChange, currentPage }) => {
  // Navigation items
  const navItems = [
    { name: 'Dashboard', id: 'dashboard', clickable: false },
    { name: 'Analytics', id: 'analytics', clickable: true },
    { name: 'Connect', id: 'connect', clickable: false },
    { name: 'Dealroom', id: 'dealroom', clickable: false },
    { name: 'Profile', id: 'profile', clickable: true },
    { name: 'Settings', id: 'settings', clickable: false },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen font-manrope z-20">
      {/* Top section with logo and company name */}
      <div className="relative h-[50px] w-[240px] bg-black border-b border-r border-[#1D1D1D]">
        {/* Logo */}
        <div className="absolute top-[8px] left-[10px] w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center overflow-hidden">
          <img src="/images/logo.png" alt="Vertxlabs Logo" className="w-[24px] h-[24px] object-contain" />
        </div>
        
        {/* Company name */}
        <div className="absolute top-[13px] left-[73px] w-[110px] h-[23px] text-white font-bold text-[18px] leading-[100%] tracking-[-0.04em]">
          Vertxlabs, Inc
        </div>
      </div>
      
      <div className="flex">
        {/* Left column with user avatar (50px width) */}
        <div className="relative w-[50px] h-[782px] bg-black border-r border-[#1D1D1D]">
          {/* User profile image - first one */}
          {currentPage === 'profile' ? (
            <div className="absolute top-0 left-0 w-[50px] h-[50px] border-r border-b border-[#1D1D1D] flex items-center justify-center bg-black">
              <div className="relative w-[30px] h-[30px] rounded-full overflow-hidden border border-[#333333]">
                <img src="/images/avatar.jpg" alt="User profile" className="w-full h-full object-cover" />
              </div>
            </div>
          ) : (
            <div className="absolute top-[10px] left-[10px] w-[30px] h-[30px] rounded-full overflow-hidden border border-[#333333] bg-black">
              <img src="/images/avatar.jpg" alt="User profile" className="w-full h-full object-cover" />
              {/* Green online dot */}
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-black"></div>
            </div>
          )}
          
          {/* Additional user images - only shown on profile page */}
          {currentPage === 'profile' && (
            <>
              {/* Second user */}
              <div className="absolute top-[50px] left-0 w-[50px] h-[50px] border-r border-b border-[#1D1D1D] flex items-center justify-center bg-black">
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden border border-[#333333]">
                  <img src="/images/avatar2.jpg" alt="User profile 2" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Third user */}
              <div className="absolute top-[100px] left-0 w-[50px] h-[50px] border-r border-b border-[#1D1D1D] flex items-center justify-center bg-black">
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden border border-[#333333]">
                  <img src="/images/avatar3.jpg" alt="User profile 3" className="w-full h-full object-cover" />
                </div>
              </div>
            </>
          )}
          
          {/* Bottom Add button - adjusted for visibility */}
          <div className="absolute top-[682px] left-0 w-[50px] h-[50px] border-t border-r border-b border-[#1D1D1D] flex items-center justify-center bg-black">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        
        {/* Right column with navigation (190px width) */}
        <div className="relative w-[190px] h-[782px] bg-black border-r border-[#1D1D1D]">
          {/* Navigation items */}
          <div className="absolute top-[20px] left-[20px] space-y-8">
            {navItems.map((item) => (
              <div
                key={item.id}
                onClick={item.clickable ? () => onPageChange(item.id) : undefined}
                className={`h-[22px] w-[100px] flex items-center ${
                  currentPage === item.id ? 'text-white' : 'text-[#555555]'
                } ${item.clickable ? 'hover:text-white cursor-pointer' : ''} transition-colors font-bold text-[16px] leading-[100%] tracking-[-4%]`}
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