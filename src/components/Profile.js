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
        <div className="fixed top-0 left-0 w-full bg-black py-3 px-4 flex justify-between items-center z-50 border-b border-[#1D1D1D]">
          <div className="w-8 h-8 rounded-full bg-gray-100"></div>
          <div className="flex items-center">
            <img src="/images/logo.png" alt="Vertx Logo" className="h-7" />
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
        <div className="fixed top-[50px] left-0 w-full bg-black border-b border-[#1D1D1D] z-40">
          <div className="flex">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm cursor-pointer ${
                  activeTab === tab 
                    ? 'text-white' 
                    : 'text-[#555555]'
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Main content area - scrollable */}
      {!isMobile ? (
        <div className={`fixed top-[50px] left-[240px] w-[calc(100%-240px)] h-[calc(100vh-50px)] overflow-y-auto bg-[#080808]`}>
          {/* Tab navigation - desktop only */}
          <div className="flex border-b border-[#1D1D1D]">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 cursor-pointer ${
                  activeTab === tab 
                    ? 'text-white' 
                    : 'text-[#555555] hover:text-white'
                }`}
              >
                {tab}
              </div>
            ))}
            <div className="ml-auto w-[120px] px-6 py-3 text-white flex items-center justify-center">More</div>
          </div>
          
          <div className="pt-[60px] px-[60px] pb-[60px]">
            {/* Profile Overview header */}
            <h2 className="text-[28px] font-extrabold text-white tracking-[-0.04em] leading-[100%] mb-8">
              Overview
            </h2>
            
            {/* User profile card with exact dimensions */}
            <div className="w-[907.17px] h-[198.48px] border border-[#1D1D1D] rounded-lg bg-black p-6 mb-8 relative" style={{borderWidth: '1px'}}>
              <div className="flex items-center">
                {/* User avatar */}
                <div className="mr-6">
                  <div className="w-[120px] h-[120px] bg-[#111] rounded-md flex items-center justify-center">
                    <img src="/images/avatar.jpg" alt="User Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                {/* User info */}
                <div>
                  <div className="flex items-center w-[218px]">
                    <h2 className="text-[32px] font-bold text-white mr-2">Mr A</h2>
                    {/* Verified badge like in picture 2 */}
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M9 12l2 2 4-4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[14px] text-white mb-2 w-[166px]">Co-Founder & CEO @Vertx 
                    <span className="ml-1 inline-block">
                      <img src="/images/logo.png" alt="Vertx Logo" className="w-[12px] h-[12px] inline-block" />
                    </span>
                  </p>
                  <div className="inline-block bg-[#111] px-2 py-1 text-[12px] text-white rounded w-[72px]">
                    Entrepreneur
                  </div>
                  
                  {/* Social icons as in the image */}
                  <div className="flex mt-4 space-x-2">
                    {/* LinkedIn */}
                    <a href="#" className="block">
                      <div className="bg-[#0077B5] w-8 h-8 flex items-center justify-center rounded">
                        <span className="text-white font-bold">in</span>
                      </div>
                    </a>
                    {/* X (Twitter) */}
                    <a href="#" className="block">
                      <div className="bg-black w-8 h-8 flex items-center justify-center rounded">
                        <span className="text-white font-bold">𝕏</span>
                      </div>
                    </a>
                    {/* Gmail */}
                    <a href="#" className="block">
                      <div className="bg-white w-8 h-8 flex items-center justify-center rounded overflow-hidden">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                          <path fill="#D14836" d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068A1.485 1.485 0 0 1 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Two column layout for companies and experience with exact dimensions */}
            <div className="flex gap-6">
              {/* Founded Companies Card with exact dimensions */}
              <div className="w-[444.26px] h-[347.34px] border border-[#1D1D1D] rounded-lg bg-black p-6 relative" style={{borderWidth: '1px'}}>
                <h3 className="text-[18px] font-extrabold text-white mb-4">Founded Companies</h3>
                
                <div className="text-[64px] font-bold text-white mb-6">02</div>
                
                {/* Company 1 */}
                <div className="flex items-center justify-between mb-4 border-b border-[#1D1D1D] pb-4 w-[387px]">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-black flex items-center justify-center mr-3 border border-[#1D1D1D] rounded">
                      <img src="/images/logo.png" alt="Vertx Logo" className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="text-[16px] font-bold text-white mr-2">Vertx</h4>
                        <span className="bg-green-600 px-1.5 py-0.5 text-[10px] text-white uppercase rounded">CEO</span>
                      </div>
                      <p className="text-[12px] text-gray-400">Founded in 2023. In Fintech.</p>
                    </div>
                  </div>
                  <button className="text-[12px] text-gray-400 hover:text-white">View Profile</button>
                </div>
                
                {/* Company 2 */}
                <div className="flex items-center justify-between w-[387px]">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white flex items-center justify-center mr-3 rounded">
                      {/* Placeholder for company logo */}
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="text-[16px] font-bold text-white mr-2">Company</h4>
                        <span className="bg-blue-600 px-1.5 py-0.5 text-[10px] text-white uppercase rounded">INVESTOR</span>
                      </div>
                      <p className="text-[12px] text-gray-400">Details/Information<br />like acquired text/m&a</p>
                    </div>
                  </div>
                  <button className="text-[12px] text-gray-400 hover:text-white">View Profile</button>
                </div>
              </div>
              
              {/* Experience Card with exact dimensions */}
              <div className="w-[444.26px] h-[347.34px] border border-[#1D1D1D] rounded-lg bg-black p-6 relative" style={{borderWidth: '1px'}}>
                <h3 className="text-[18px] font-extrabold text-white mb-4">Experience</h3>
                
                <div className="text-[64px] font-bold text-white mb-6">03</div>
                
                {/* Experience 1 */}
                <div className="flex items-center justify-between mb-4 border-b border-[#1D1D1D] pb-4 w-[387px]">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white flex items-center justify-center mr-3 rounded">
                      {/* Placeholder for company logo */}
                    </div>
                    <h4 className="text-[16px] font-bold text-white">Company 1</h4>
                  </div>
                  <button className="text-[12px] text-gray-400 hover:text-white">View Profile</button>
                </div>
                
                {/* Experience 2 */}
                <div className="flex items-center justify-between mb-4 border-b border-[#1D1D1D] pb-4 w-[387px]">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white flex items-center justify-center mr-3 rounded">
                      {/* Placeholder for company logo */}
                    </div>
                    <h4 className="text-[16px] font-bold text-white">Company 2</h4>
                  </div>
                  <button className="text-[12px] text-gray-400 hover:text-white">View Profile</button>
                </div>
                
                {/* Experience 3 */}
                <div className="flex items-center justify-between w-[387px]">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-white flex items-center justify-center mr-3 rounded">
                      {/* Placeholder for company logo */}
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
        <div className="pt-[100px] px-4 pb-20 bg-black">
          <h2 className="text-[24px] font-extrabold text-white tracking-[-0.04em] leading-[100%] mb-6">
            Overview
          </h2>
          
          {/* User profile card - Mobile */}
          <div className="w-full border border-[#1D1D1D] rounded-lg bg-black p-4 mb-6">
            <div className="flex flex-col">
              {/* User avatar */}
              <div className="mb-4 flex justify-center">
                <div className="w-[100px] h-[100px] bg-[#111] rounded-md flex items-center justify-center">
                  <img src="/images/avatar.jpg" alt="User Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* User info */}
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <h2 className="text-[24px] font-bold text-white mr-2">Mr.ABC</h2>
                  <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 12l2 2 4-4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className="text-[14px] text-white mb-2">Co-Founder & CEO @Vertx 
                  <span className="ml-1 inline-block">
                    <img src="/images/logo.png" alt="Vertx Logo" className="w-[10px] h-[10px] inline-block" />
                  </span>
                </p>
                <div className="inline-block bg-[#111] px-2 py-1 text-[12px] text-white rounded mb-3">
                  Entrepreneur
                </div>
                
                {/* Social icons */}
                <div className="flex justify-center mt-2 space-x-3">
                  {/* LinkedIn */}
                  <a href="#" className="block">
                    <div className="bg-[#0077B5] w-7 h-7 flex items-center justify-center rounded">
                      <span className="text-white font-bold text-sm">in</span>
                    </div>
                  </a>
                  {/* X (Twitter) */}
                  <a href="#" className="block">
                    <div className="bg-black w-7 h-7 border border-[#333] flex items-center justify-center rounded">
                      <span className="text-white font-bold text-sm">𝕏</span>
                    </div>
                  </a>
                  {/* Gmail */}
                  <a href="#" className="block">
                    <div className="bg-white w-7 h-7 flex items-center justify-center rounded overflow-hidden">
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="#D14836" d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068A1.485 1.485 0 0 1 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Founded Companies Card - Mobile */}
          <div className="w-full border border-[#1D1D1D] rounded-lg bg-black p-4 mb-6">
            <h3 className="text-[18px] font-extrabold text-white mb-3">Founded Companies</h3>
            
            <div className="text-[48px] font-bold text-white mb-4">02</div>
            
            {/* Company 1 */}
            <div className="flex items-center justify-between mb-4 border-b border-[#1D1D1D] pb-4">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-black flex items-center justify-center mr-3 border border-[#1D1D1D] rounded">
                  <img src="/images/logo.png" alt="Vertx Logo" className="w-5 h-5 object-contain" />
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="text-[15px] font-bold text-white mr-2">Vertx</h4>
                    <span className="bg-green-600 px-1.5 py-0.5 text-[9px] text-white uppercase rounded">CEO</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Founded in 2023. In Fintech.</p>
                </div>
              </div>
              <button className="text-[11px] text-gray-400">View Profile</button>
            </div>
            
            {/* Company 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-white flex items-center justify-center mr-3 rounded">
                  {/* Placeholder for company logo */}
                </div>
                <div>
                  <div className="flex items-center">
                    <h4 className="text-[15px] font-bold text-white mr-2">Comp 1</h4>
                    <span className="bg-blue-600 px-1.5 py-0.5 text-[9px] text-white uppercase rounded">INVESTOR</span>
                  </div>
                  <p className="text-[11px] text-gray-400">Co-founded in 2021. Acquired by ABC<br />in QuickCommerce.</p>
                </div>
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