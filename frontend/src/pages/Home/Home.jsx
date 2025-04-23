import React, { useEffect, useState } from 'react'
import ProfileSection from '../../components/Home/ProfileSection'
import FeedSection from '../../components/Home/FeedSection'
import FriendSection from '../../components/Home/FriendSection'
import { FaUserFriends } from 'react-icons/fa'

const Home = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024); // lg = 1024px in Tailwind
    };

    handleResize(); // check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='relative flex max-w-[1440px] mx-auto gap-4 h-full'>
      {/* Profile section - only large screens */}
      <div  className='w-[27%] hidden lg:block overflow-y-auto'>
        <ProfileSection />
      </div>

      {/* Feed section */}
      <div
      style={isSmallScreen ? { height: 'calc(100vh - 28px)' } : {}}
      className={`w-full lg:w-[46%]  overflow-y-auto ${
        isSmallScreen ? '' : 'h-full'
      }`}
    >
      <FeedSection />
    </div>

      {/* Friend section - only large screens */}
      <div className='w-[27%] hidden lg:block h-full overflow-y-auto'>
        <FriendSection />
      </div>

      {/* Show Sidebar Button (mobile only) */}
      <button
        className='absolute top-4 right-4 lg:hidden z-50 bg-white text-black p-2 rounded-full'
        onClick={() => setShowSidebar(true)}
      >
        <FaUserFriends size={20} />
      </button>

      {/* Sidebar - mobile only */}
      <div className={`fixed top-0 right-0 h-full w-[90%] max-w-sm  z-50 transform transition-transform duration-300 ease-in-out ${showSidebar ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <FriendSection onClose={() => setShowSidebar(false)} />
      </div>
    </div>
  )
}

export default Home
