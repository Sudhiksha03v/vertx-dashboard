import React from 'react';

const MobileNav = ({ onPageChange, currentPage = 'analytics' }) => {
  
  const navItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard',
      icon: <img src="/images/dash.jpg" alt="Dashboard" className="w-6 h-6 object-contain" />
    },
    { 
      id: 'analytics', 
      label: 'Analytics',
      icon: <img src="/images/analytics.jpg" alt="Analytics" className="w-6 h-6 object-contain" />
    },
    { 
      id: 'connect', 
      label: 'Connect',
      icon: <img src="/images/connect.jpg" alt="Connect" className="w-6 h-6 object-contain" />
    },
    { 
      id: 'activity', 
      label: 'Activity',
      icon: <img src="/images/act.jpg" alt="Activity" className="w-6 h-6 object-contain" />
    },
    { 
      id: 'dealroom', 
      label: 'Dealroom',
      icon: <img src="/images/dealroom.jpg" alt="Dealroom" className="w-6 h-6 object-contain" />
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full h-[60px] bg-black border-t border-[#1D1D1D] flex justify-around items-center z-20">
      {navItems.map((item) => (
        <button 
          key={item.id}
          onClick={() => onPageChange(item.id)} 
          className={`flex flex-col items-center justify-center w-1/5 h-full ${currentPage === item.id ? 'text-white' : 'text-[#555555]'}`}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            {item.icon}
          </div>
          <span className={`text-[10px] font-extrabold mt-1 ${currentPage === item.id ? 'text-white' : 'text-[#555555]'}`}>
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default MobileNav; 