import React from 'react';
import { assest } from '../../assets/assest';
import { AiOutlineUserAdd } from "react-icons/ai";

const UserFollowers = () => {
    const followers = [
        {
            profile: assest.blankImage,
            name: 'Abdur Rahman',
            bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, ullam?',
        },
        {
            profile: assest.blankImage,
            name: 'Abdur Rahman',
            bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, ullam?',
        },
    ];

    return (
        <div className="flex flex-col gap-4 p-2">
            {followers.map((follower, index) => (
                <div
                    key={index}
                    className="flex flex-col md:flex-row items-center justify-between p-3 hover:bg-black/70 rounded-xl transition-all gap-3"
                >
                    {/* Left Section */}
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <img
                            src={follower.profile}
                            alt="profile"
                            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
                        />
                        <div className=" sm:text-left">
                            <div className="tooltip tooltip-info cursor-pointer	" data-tip="view profile">
                                <p className="font-semibold text-white hover:underline   ">{follower.name}</p>
                            </div>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-2 max-w-xs sm:max-w-md">
                                {follower.bio}
                            </p>
                        </div>
                    </div>

                    {/* Right Section (Button) */}
                    <button
                        className="flex items-center gap-2 mt-2 sm:mt-0 px-4 py-2 bg-[#FFFD02] cursor-pointer text-black rounded-xl text-xs sm:text-sm font-semibold hover:bg-yellow-300 transition-all"
                    >
                        <AiOutlineUserAdd size={18} /> Follow Back
                    </button>
                </div>
            ))}
        </div>
    );
};

export default UserFollowers;
