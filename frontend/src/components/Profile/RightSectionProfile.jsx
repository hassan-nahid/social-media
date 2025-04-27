import React from 'react';
import UserProfile from './UserProfile';
import AboutUser from '../Home/AboutUser';

const RightSectionProfile = ({ isMobile }) => {
    return (
        <div className={`${isMobile ? 'w-full' : 'w-[350px] lg:w-[400px]'} py-1 flex flex-col gap-6 md:gap-8 px-4 md:px-0`}>

            {/* User Profile Section */}
            <UserProfile />

            {/* Profile Stats Section */}
            <div className="bg-[#282828] rounded-xl p-6 text-white mx-4">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Posts</span>
                    <span className="font-semibold">24</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Followers</span>
                    <span className="font-semibold">1.2K</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-400">Following</span>
                    <span className="font-semibold">356</span>
                </div>
            </div>

            {/* About User Section */}
            <div>
                <AboutUser className="mt-0 mx-4" />
            </div>
        </div>
    );
};

export default RightSectionProfile;
