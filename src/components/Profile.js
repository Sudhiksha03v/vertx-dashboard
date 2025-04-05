import React, { useState } from 'react';
import Header from './Header';
import MobileNav from './MobileNav';

const Profile = ({ isMobile }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  
  const tabs = ['Overview', 'Portfolio', 'Experience', 'Media'];
  
  return (
    <div className={`${isMobile ? 'w-full pb-20 bg-black' : 'h-screen bg-black overflow-auto font-manrope'}`}>
      {/* Header component - desktop only */}
      {!isMobile && <Header isProfilePage={true} />}
      
      {/* Mobile header */}
      {isMobile && (
        <div className="fixed top-0 left-0 w-full bg-black py-4 px-5 flex justify-between items-center z-50 border-b border-[#1D1D1D]">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src="/images/avatar.jpg" alt="User Avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <img src="/images/logo.png" alt="Vertx Logo" className="h-8" />
          </div>
          <div className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </div>
        </div>
      )}

      {/* Mobile tabs */}
      {isMobile && (
        <div className="fixed top-[60px] left-0 w-full bg-black border-b border-[#1D1D1D] z-40">
          <div className="flex w-full overflow-x-auto no-scrollbar">
            {tabs.map((tab, index) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-2 py-3.5 text-sm cursor-pointer whitespace-nowrap flex items-center justify-center ${
                  activeTab === tab 
                    ? 'text-white font-medium' 
                    : 'text-[#555555]'
                } ${index > 0 ? 'border-l border-[#1D1D1D]' : ''}`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Main content area - scrollable */}
      {!isMobile ? (
        <div className={`fixed top-[100px] left-[240px] w-[calc(100%-240px)] h-[calc(100vh-100px)] overflow-y-auto bg-black`}>
          <div className="pt-[60px] px-[60px] pr-[80px] pb-[60px]">
            {/* Profile Overview header */}
            <h2 className="text-[28px] font-extrabold text-white tracking-[-0.04em] leading-[100%] mb-8">
              Overview
            </h2>
            
            {/* User profile card */}
            <div className="w-full border border-[#1D1D1D] rounded-lg bg-black p-0 mb-8" style={{ height: "198.48px" }}>
              <div className="flex p-6">
                {/* User avatar */}
                <div className="mr-6">
                  <div style={{ width: "120px", height: "120px" }} className="bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img src="/images/user.jpg" alt="User Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* User info */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center mb-1">
                    <h2 className="text-white mr-3" style={{
                      fontFamily: "Manrope",
                      fontWeight: 700,
                      fontSize: "24px",
                      lineHeight: "100%",
                      letterSpacing: "0%"
                    }}>Mr A</h2>
                    {/* Verified badge */}
                    <div style={{ width: "20px", height: "20px" }}>
                      <img src="/images/tick.jpg" alt="Verified" className="w-full h-full object-cover rounded-full" style={{ backgroundColor: "#0095F6" }} />
                    </div>
                  </div>
                  <p className="text-white mb-2" style={{
                    fontFamily: "Manrope",
                    fontWeight: 500,
                    fontSize: "12px",
                    lineHeight: "100%",
                    letterSpacing: "0%"
                  }}>Co-Founder & CEO @Vertx 
                    <span className="ml-1 inline-block">
                      <img src="/images/logo.png" alt="Vertx Logo" className="w-[12px] h-[12px] inline-block" />
                    </span>
                  </p>
                  
                  {/* Entrepreneur tag */}
                  <div className="inline-block bg-white text-black rounded mb-4" style={{
                    fontFamily: "Manrope",
                    fontWeight: 500,
                    fontSize: "8px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    width: "72.3983154296875px",
                    height: "13.893536567687988px",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    ENTREPRENEUR
                  </div>
                  
                  {/* Social icons */}
                  <div className="flex space-x-3">
                    {/* LinkedIn */}
                    <a href="https://linkedin.com" className="block">
                      <div className="bg-[#0A66C2] flex items-center justify-center rounded" style={{ width: "31.3px", height: "31.3px" }}>
                        <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                      </div>
                    </a>
                    {/* X (Twitter) */}
                    <a href="https://twitter.com" className="block">
                      <div className="bg-black flex items-center justify-center rounded border border-[#1D1D1D]" style={{ width: "31.3px", height: "31.3px" }}>
                        <img src="/images/x.png" alt="X" className="w-5 h-5" />
                      </div>
                    </a>
                    {/* Gmail */}
                    <a href="mailto:contact@example.com" className="block">
                      <div className="bg-white flex items-center justify-center rounded overflow-hidden" style={{ width: "31.3px", height: "31.3px" }}>
                        <img src="/images/gmail.png" alt="Gmail" className="w-5 h-5" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Two column layout for companies and experience */}
            <div className="flex gap-8">
              {/* Founded Companies Card */}
              <div className="w-1/2 border border-[#1D1D1D] rounded-lg bg-black p-6" style={{ height: "380px" }}>
                <h3 className="text-[18px] font-extrabold text-white mb-4">Founded Companies</h3>
                
                <div className="text-[64px] font-bold text-white mb-6">02</div>
                
                {/* Company 1 - Vertx */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-black flex items-center justify-center mr-3 border border-[#1D1D1D] rounded">
                      <img src="/images/logo.png" alt="Vertx Logo" className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="text-[16px] font-bold text-white mr-2">Vertx</h4>
                        <span className="bg-[#04470B] rounded relative flex items-center justify-center" style={{
                          fontFamily: "Manrope",
                          fontWeight: 500,
                          fontSize: "8px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          width: "26.32666015625px",
                          height: "11.908745765686035px",
                          borderRadius: "2px",
                          padding: "0 4px",
                          color: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>CEO</span>
                      </div>
                      <p className="text-[12px] text-gray-400">Founded in 2025. In Fintech.</p>
                    </div>
                  </div>
                  <button className="text-[12px] text-gray-400 hover:text-white">View Profile</button>
                </div>
                
                {/* Company 2 - Generic Company */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white flex items-center justify-center mr-3 rounded">
                      {/* Empty white square for company logo */}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="text-[16px] font-bold text-white mr-2">Company</h4>
                        <span className="bg-[#10074F] rounded relative flex items-center justify-center" style={{
                          fontFamily: "Manrope",
                          fontWeight: 500,
                          fontSize: "8px",
                          lineHeight: "100%",
                          letterSpacing: "0%",
                          width: "60.33192825317383px",
                          height: "11.908745765686035px",
                          borderRadius: "2px",
                          padding: "0 4px",
                          color: "white"
                        }}>PROPRIETOR</span>
                      </div>
                      <p className="text-[12px] text-gray-400">Details/Information<br />like acquired /exit/m&a</p>
                    </div>
                  </div>
                  <button className="text-[12px] text-gray-400 hover:text-white">View Profile</button>
                </div>
              </div>
              
              {/* Experience Card */}
              <div className="w-1/2 border border-[#1D1D1D] rounded-lg bg-black p-6" style={{ height: "380px" }}>
                <h3 className="text-[18px] font-extrabold text-white mb-4">Experience</h3>
                
                <div className="text-[64px] font-bold text-white mb-6">03</div>
                
                {/* Experience 1 */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white flex items-center justify-center mr-3 rounded">
                      {/* Empty white square for company logo */}
                    </div>
                    <h4 className="text-[16px] font-bold text-white">Company 1</h4>
                  </div>
                  <button className="text-[12px] text-gray-400 hover:text-white">View Profile</button>
                </div>
                
                {/* Experience 2 */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white flex items-center justify-center mr-3 rounded">
                      {/* Empty white square for company logo */}
                    </div>
                    <h4 className="text-[16px] font-bold text-white">Company 2</h4>
                  </div>
                  <button className="text-[12px] text-gray-400 hover:text-white">View Profile</button>
                </div>
                
                {/* Experience 3 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white flex items-center justify-center mr-3 rounded">
                      {/* Empty white square for company logo */}
                    </div>
                    <h4 className="text-[16px] font-bold text-white">Company 3</h4>
                  </div>
                  <button className="text-[12px] text-gray-400 hover:text-white">View Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Mobile layout */
        <div className="pt-[122px] px-4 pb-20 bg-black">
          <h2 className="text-[24px] font-extrabold text-white tracking-[-0.04em] leading-[100%] mb-6">
            Overview
          </h2>
          
          {/* User profile card - Mobile */}
          <div className="w-full border border-[#1D1D1D] rounded-lg bg-black p-0 mb-6">
            <div className="flex flex-col p-5 pt-4 pb-6">
              {/* User avatar */}
              <div className="mb-3 flex justify-center">
                <div style={{ width: "80px", height: "80px" }} className="bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/images/user.jpg" alt="User Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* User info */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <h2 className="text-white mr-2" style={{
                    fontFamily: "Manrope",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "100%",
                    letterSpacing: "0%"
                  }}>Mr A</h2>
                  {/* Verified badge */}
                  <div style={{ width: "18px", height: "18px" }}>
                    <img src="/images/tick.jpg" alt="Verified" className="w-full h-full object-cover rounded-full" style={{ backgroundColor: "#0095F6" }} />
                  </div>
                </div>
                <p className="text-white mb-3" style={{
                  fontFamily: "Manrope",
                  fontWeight: 500,
                  fontSize: "11px",
                  lineHeight: "100%",
                  letterSpacing: "0%"
                }}>Co-Founder & CEO @Vertx 
                  <span className="ml-1 inline-block">
                    <img src="/images/logo.png" alt="Vertx Logo" className="w-[10px] h-[10px] inline-block" />
                  </span>
                </p>
                <div className="flex justify-center w-full mb-4">
                  <div className="inline-block bg-white text-black rounded" style={{
                    fontFamily: "Manrope",
                    fontWeight: 600,
                    fontSize: "8px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                    width: "72.3983154296875px",
                    height: "13.893536567687988px",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    ENTREPRENEUR
                  </div>
                </div>
                
                {/* Social icons */}
                <div className="flex justify-center space-x-5">
                  {/* LinkedIn */}
                  <a href="https://linkedin.com" className="block">
                    <div className="bg-[#0A66C2] flex items-center justify-center rounded" style={{ width: "30px", height: "30px" }}>
                      <img src="/images/linkedin.png" alt="LinkedIn" className="w-5 h-5" />
                    </div>
                  </a>
                  {/* X (Twitter) */}
                  <a href="https://twitter.com" className="block">
                    <div className="bg-black border border-[#1D1D1D] flex items-center justify-center rounded" style={{ width: "30px", height: "30px" }}>
                      <img src="/images/x.png" alt="X" className="w-5 h-5" />
                    </div>
                  </a>
                  {/* Gmail */}
                  <a href="mailto:contact@example.com" className="block">
                    <div className="bg-white flex items-center justify-center rounded overflow-hidden" style={{ width: "30px", height: "30px" }}>
                      <img src="/images/gmail.png" alt="Gmail" className="w-5 h-5" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Founded Companies Card - Mobile */}
          <div className="w-full border border-[#1D1D1D] rounded-lg bg-black p-5 mb-6 pb-8">
            <h3 className="text-[18px] font-extrabold text-white mb-3">Founded Companies</h3>
            
            <div className="text-[48px] font-bold text-white mb-3">02</div>
            
            {/* Company 1 */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-black flex items-center justify-center mr-3 border border-[#1D1D1D] rounded">
                  <img src="/images/logo.png" alt="Vertx Logo" className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="text-[15px] font-bold text-white mr-2">Vertx</h4>
                    <span className="bg-[#04470B] rounded relative flex items-center justify-center" style={{
                      fontFamily: "Manrope",
                      fontWeight: 500,
                      fontSize: "8px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      width: "26.32666015625px",
                      height: "11.908745765686035px",
                      borderRadius: "2px",
                      padding: "0 4px",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>CEO</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Founded in 2025. In Fintech.</p>
                </div>
              </div>
              <button className="text-[11px] text-gray-400">View Profile</button>
            </div>
            
            {/* Company 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-white flex items-center justify-center mr-3 rounded">
                  {/* Empty white square for company logo */}
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="text-[15px] font-bold text-white mr-2">Company</h4>
                    <span className="bg-[#10074F] rounded relative flex items-center justify-center" style={{
                      fontFamily: "Manrope",
                      fontWeight: 500,
                      fontSize: "8px",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      width: "60.33192825317383px",
                      height: "11.908745765686035px",
                      borderRadius: "2px",
                      padding: "0 4px",
                      color: "white"
                    }}>PROPRIETOR</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Details/Information<br />like acquired /exit/m&a</p>
                </div>
              </div>
              <button className="text-[11px] text-gray-400">View Profile</button>
            </div>
          </div>
          
          {/* Experience Card - Mobile */}
          <div className="w-full border border-[#1D1D1D] rounded-lg bg-black p-5 mb-6 pb-8">
            <h3 className="text-[18px] font-extrabold text-white mb-3">Experience</h3>
            
            <div className="text-[48px] font-bold text-white mb-3">03</div>
            
            {/* Experience 1 */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-white flex items-center justify-center mr-3 rounded">
                  {/* Empty white square for company logo */}
                </div>
                <h4 className="text-[15px] font-bold text-white">Company 1</h4>
              </div>
              <button className="text-[11px] text-gray-400">View Profile</button>
            </div>
            
            {/* Experience 2 */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-white flex items-center justify-center mr-3 rounded">
                  {/* Empty white square for company logo */}
                </div>
                <h4 className="text-[15px] font-bold text-white">Company 2</h4>
              </div>
              <button className="text-[11px] text-gray-400">View Profile</button>
            </div>
            
            {/* Experience 3 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-white flex items-center justify-center mr-3 rounded">
                  {/* Empty white square for company logo */}
                </div>
                <h4 className="text-[15px] font-bold text-white">Company 3</h4>
              </div>
              <button className="text-[11px] text-gray-400">View Profile</button>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile bottom navigation */}
      {isMobile && <MobileNav onPageChange={() => {}} currentPage="profile" />}
    </div>
  );
};

export default Profile; 