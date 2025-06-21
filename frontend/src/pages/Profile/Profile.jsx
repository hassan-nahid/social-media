import { useEffect, useState } from "react";
import RightSectionProfile from "../../components/Profile/RightSectionProfile";
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
    <div className="max-w-[1440px] h-[calc(100vh-65px)] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Flex Container */}
      <div
        className={`flex h-full ${
          isMobile ? "flex-col overflow-y-auto scroll-on-hover" : "flex-row"
        }`}
      >
        {/* Profile Section */}
        <div
          className={`${
            isMobile
              ? "w-full"
              : "h-full overflow-y-auto scroll-on-hover"
          }`}
        >
          <RightSectionProfile isMobile={isMobile} />
        </div>

        {/* UserPost Section */}
        <div
          className={`${
            isMobile
              ? "w-full"
              : "flex-1 h-full overflow-y-auto scroll-on-hover"
          }`}
        >
          <UserPost />
        </div>
      </div>
    </div>
  );
};

export default Profile;
