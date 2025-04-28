import React from 'react';
import { assest } from '../../assets/assest';
import { BiSolidMessageRounded } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const UserFollowing = () => {
    const following = [
        {
            profile: assest.blankImage,
            name: 'Abdur Rahman',
            username: '@abdurrahman',
        },
        {
            profile: assest.blankImage,
            name: 'Abdur Rahman',
            username: '@abdurrahman',
        },
    ];

    return (
        <div className="p-2 flex flex-col gap-4">
            {following.map((f, index) => (
                <div
                    key={index}
                    className="flex flex-wrap items-center justify-between p-4 hover:bg-black rounded-[15px] transition-all gap-4"
                >
                    {/* Left Side */}
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        <img
                            src={f.profile}
                            alt="profile"
                            className="h-[50px] w-[50px] rounded-full object-cover"
                        />
                        <div className="min-w-0">
                            
                            <div className="tooltip tooltip-info cursor-pointer	" data-tip="view profile">
                                <p className="font-semibold text-white hover:underline   ">{f.name}</p>
                            </div>


                            <p className="text-xs text-gray-400 truncate max-w-[200px] sm:max-w-[300px]">
                                {f.username}
                            </p>
                        </div>
                    </div>



                    {/* Right Side */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                        <button className="flex items-center justify-center gap-1 px-4 py-2 bg-[#FFFD02] cursor-pointer text-black rounded-xl text-sm font-semibold hover:bg-yellow-300 transition-all w-full sm:w-auto">
                            <BiSolidMessageRounded size={18} /> Message
                        </button>
                        <button className="flex items-center justify-center gap-1 px-4 py-2 bg-[#101828] cursor-pointer  text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all w-full sm:w-auto">
                            <AiFillDelete size={18} /> Remove
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserFollowing;
