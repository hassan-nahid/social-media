import React from 'react';
import UserProfile from './UserProfile';
import AboutUser from '../Home/AboutUser';

const RightSectionProfile = ({ isMobile }) => {
    return (
        <div className={`${isMobile ? 'w-full' : 'w-[350px] lg:w-[400px]'} mt-4  flex flex-col md:gap-6 gap-0 `}>

            <UserProfile />

            {/* Additional profile stats */}
            <div className=" bg-[#282828] rounded-xl p-6 text-white m-4 md:m-0">
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

            <div className='m-4 md:m-0'>
                <AboutUser className={'mt-0'}  />
            </div>
        </div>
    );
};

export default RightSectionProfile;
