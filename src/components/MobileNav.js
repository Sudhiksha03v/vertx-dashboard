import React from 'react';

const MobileNav = ({ onPageChange, currentPage = 'analytics' }) => {
  // Navigation items with their icons and labels
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '/images/dash.jpg' },
    { id: 'analytics', label: 'Analytics', icon: '/images/analytics.jpg' },
    { id: 'connect', label: 'Connect', icon: '/images/connect.jpg' },
    { id: 'activity', label: 'Activity', icon: '/images/act.jpg' },
    { id: 'dealroom', label: 'Dealroom', icon: '/images/dealroom.jpg' }
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full h-[60px] bg-black border-t border-[#1D1D1D] flex justify-around items-center z-20">
      {navItems.map((item) => (
        <button 
          key={item.id}
          onClick={() => onPageChange(item.id)} 
          className={`flex flex-col items-center justify-center w-1/5 h-full ${currentPage === item.id ? 'text-white' : 'text-[#555555]'}`}
        >
          <img 
            src={item.icon} 
            alt={item.label} 
            className="w-6 h-6 object-contain brightness-0 invert" 
          />
          <span className="text-[10px] font-bold mt-1">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default MobileNav; 