import RightSectionProfile from "../../components/Profile/RightSectionProfile";
import { useEffect, useState } from "react";
import UserPost from "../../components/Profile/UserPost";

const Profile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* flex container */}
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} h-full 
        ${isMobile ? 'max-h-[calc(100vh-120px)] overflow-y-auto scroll-on-hover' : ''}`}>

        {/* Profile Section */}
        <div className={`${isMobile ? 'w-full' : ''} ${!isMobile ? 'max-h-[calc(100vh-120px)] overflow-y-auto scroll-on-hover' : ''}`}>
          <RightSectionProfile isMobile={isMobile} />
        </div>

        {/* UserPost (Scrollable Area) */}
        <div className={`${isMobile ? 'w-full' : 'flex-1'} ${!isMobile ? 'max-h-[calc(100vh-120px)] overflow-y-auto scroll-on-hover' : ''}`}>
          <UserPost />
        </div>
      </div>
    </div>
  );
};

export default Profile;
