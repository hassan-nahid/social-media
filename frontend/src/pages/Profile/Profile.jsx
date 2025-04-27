import UserPost from "../../components/Profile/UserPost";
import UserProfile from "../../components/Profile/UserProfile";
import { useEffect, useState } from "react";

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
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[calc(100vh-80px)]"> {/* h-[calc(100vh-80px)] to control total height */}

      <div className={`flex gap-8 ${isMobile ? 'flex-col' : 'flex-row'} h-full `}>
        {/* Profile Section */}
        {!isMobile && (
          <div className={`${isMobile ? 'w-full' : 'w-[350px] lg:w-[400px]'} `}>
            <UserProfile />

            {/* Additional profile stats */}
            <div className="mt-8 bg-[#282828] rounded-xl  p-6 text-white  ">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Posts</span>
                <span className="font-medium">24</span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400">Followers</span>
                <span className="font-medium">1.2K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Following</span>
                <span className="font-medium">356</span>
              </div>
            </div>
          </div>
        )}

        {/* Combined Scrollable Area for Mobile */}
        <div className={`${isMobile ? 'w-full' : 'flex-1'} ${isMobile ? 'overflow-y-auto pr-2 scroll-on-hover' : 'h-[calc(100vh-110px)] overflow-y-auto pr-2 scroll-on-hover'}`}>
          {isMobile && (
            <>
              <UserProfile />

              {/* Additional profile stats */}
              <div className="mt-8 bg-[#282828] rounded-xl p-6 text-white m-4 ">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Posts</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Followers</span>
                  <span className="font-medium">1.2K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Following</span>
                  <span className="font-medium">356</span>
                </div>
              </div>
            </>
          )}

          <UserPost />
        </div>
      </div>

    </div>
  );
};

export default Profile;
