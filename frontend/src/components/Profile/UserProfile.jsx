import React from 'react';
import { useNavigate } from 'react-router';
import { assest } from '../../assets/assest';
import useUserData from '../../hooks/useUserData';

const UserProfile = () => {
    const navigate = useNavigate();
    const { userData } = useUserData(); // ✅ Get user data

    return (
        <div className='flex flex-col items-center text-center bg-[#282828] rounded-xl p-6 shadow-lg mx-4'>
            <div className="relative group">
                <img
                    src={userData?.image || assest.blankImage}
                    alt="user profile"
                    className='h-[180px] w-[180px] sm:h-[200px] sm:w-[200px] md:h-[220px] md:w-[220px] rounded-full object-cover border-4 border-[#FFFD02] p-1 transition-all duration-300 group-hover:scale-105'
                />
                <div className="absolute inset-0 rounded-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300">
                    <button className="text-white bg-transparent border border-white rounded-full p-2">
                        <img src={assest.cameraIcon} alt="change photo" className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Dynamic User Name */}
            <h1 className='text-2xl md:text-3xl font-bold text-[#FFFFFF] mt-4'>{userData?.name || "Unknown User"}</h1>

            {/* Dynamic Bio */}
            <p className='text-gray-300 mt-2 max-w-md px-4'>
                {userData?.bio || 'No bio added yet.'}
            </p>

            <button
                onClick={() => navigate('/setting')}
                className='bg-[#FFFD02] hover:bg-[#e6e400] flex items-center justify-center text-black px-6 py-3 gap-2 rounded-xl mt-6 cursor-pointer transition-colors duration-300 shadow-md hover:shadow-lg'
            >
                <img src={assest.editIcon} alt="pencil icon" className='h-5 w-5' />
                <span className="font-medium">Edit Profile</span>
            </button>
        </div>
    );
};

export default UserProfile;
