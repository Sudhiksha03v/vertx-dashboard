import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import MobileNav from './components/MobileNav';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState('analytics');
  
  
  useEffect(() => {
    // UPDATE STATE BASED ON WINDOW SIZE
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
   
    handleResize();
    
    // EVENT LISTENER
    window.addEventListener('resize', handleResize);
    
   
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // MANROPE FONT
  useEffect(() => {
   
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const renderPage = () => {
    switch (currentPage) {
      case 'profile':
        return <Profile isMobile={isMobile} />;
      case 'analytics':
        return <Dashboard isMobile={isMobile} />;
      case 'dashboard':
      default:
        return <Dashboard isMobile={isMobile} />;
    }
  };

  return (
    <div className="App font-manrope bg-black text-white min-h-screen">
      {/* DESKTOP SIDEBAR - MOBILE HIDDEN */}
      {!isMobile && <Sidebar onPageChange={handlePageChange} currentPage={currentPage} />}
      
      {/* MAIN CONTENT */}
      {renderPage()}
      
     
      {isMobile && <MobileNav onPageChange={handlePageChange} currentPage={currentPage} />}
    </div>
  );
}

export default App; 