import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import MobileNav from './components/MobileNav';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if we're on mobile view
  useEffect(() => {
    // Function to update state based on window size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Load Manrope font
  useEffect(() => {
    // Add Google Fonts link for Manrope
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="App font-manrope bg-black text-white min-h-screen">
      {/* Desktop sidebar - hidden on mobile */}
      {!isMobile && <Sidebar />}
      
      {/* Dashboard content area */}
      <Dashboard isMobile={isMobile} />
      
      {/* Mobile bottom navigation - visible only on mobile */}
      {isMobile && <MobileNav />}
    </div>
  );
}

export default App; 