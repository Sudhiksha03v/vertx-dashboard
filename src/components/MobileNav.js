import React from 'react';

const MobileNav = ({ onPageChange, currentPage = 'analytics' }) => {
  // Navigation items with their SVG icons exactly matching the first reference image
  const navItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 6H9V9H6V6Z" fill="white" stroke="white" strokeWidth="0.5" />
          <path d="M15 6H18V9H15V6Z" fill="white" stroke="white" strokeWidth="0.5" />
          <path d="M6 15H9V18H6V15Z" fill="white" stroke="white" strokeWidth="0.5" />
          <path d="M15 15H18V18H15V15Z" fill="white" stroke="white" strokeWidth="0.5" />
        </svg>
      )
    },
    { 
      id: 'analytics', 
      label: 'Analytics',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 4V20H6M6 16L12 10L16 14L22 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: 'connect', 
      label: 'Connect',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5"/>
        </svg>
      )
    },
    { 
      id: 'activity', 
      label: 'Activity',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8C18 8 16 10 12 10C8 10 6 8 6 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 10V18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="4" r="2" stroke="white" strokeWidth="1.5"/>
        </svg>
      )
    },
    { 
      id: 'dealroom', 
      label: 'Dealroom',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="1.5" stroke="white" strokeWidth="1.5"/>
          <path d="M7 7L10.5 10.5" stroke="white" strokeWidth="1.5"/>
          <path d="M7 17L10.5 13.5" stroke="white" strokeWidth="1.5"/>
          <path d="M17 17L13.5 13.5" stroke="white" strokeWidth="1.5"/>
          <path d="M17 7L13.5 10.5" stroke="white" strokeWidth="1.5"/>
          <circle cx="7" cy="7" r="2" stroke="white" strokeWidth="1.5"/>
          <circle cx="7" cy="17" r="2" stroke="white" strokeWidth="1.5"/>
          <circle cx="17" cy="17" r="2" stroke="white" strokeWidth="1.5"/>
          <circle cx="17" cy="7" r="2" stroke="white" strokeWidth="1.5"/>
        </svg>
      )
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full h-[60px] bg-black border-t border-[#1D1D1D] flex justify-around items-center z-20">
      {navItems.map((item) => (
        <button 
          key={item.id}
          onClick={() => onPageChange(item.id)} 
          className="flex flex-col items-center justify-center w-1/5 h-full text-white"
        >
          <div className="w-6 h-6">
            {item.icon}
          </div>
          <span className="text-[10px] font-extrabold mt-1">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MobileNav; 