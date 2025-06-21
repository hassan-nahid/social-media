import React, { useEffect, useState } from 'react';
import { assest } from '../../assets/assest';
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import axios from 'axios';
import toast from 'react-hot-toast';

const UserFollowers = ({ userData, refetchUserData }) => {
    const userId = userData?._id;
    const token = localStorage.getItem("token");
    const [followers, setFollowers] = useState([]);
    const [userFollowing, setUserFollowing] = useState(userData?.following || []);

    useEffect(() => {
        // Fetch followers
        const fetchFollowers = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_LINK}/api/user/followers/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setFollowers(res.data.followers || []);
            } catch (err) {
                console.error("Failed to fetch followers", err);
            }
        };

        if (userId) {
            fetchFollowers();
        }
    }, [userId]);

    // Follow back function
    const handleFollowBack = async (followerId) => {
        try {
            await axios.post(`${import.meta.env.VITE_LINK}/api/user/follow`, {
                userId: userId,
                targetUserId: followerId,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // Update local following state

            refetchUserData?.();
            setUserFollowing(prev => [...prev, followerId]);

        } catch (error) {
            console.error("Failed to follow back", error);
            toast.error("Failed to follow. Try again.");
        }
    };

    // Check if user is already following
    const isFollowing = (followerId) => {
        return userFollowing?.includes(followerId);
    };

    return (
        <div className="flex flex-col gap-4 p-2">
            {followers.map((follower, index) => (
                <div
                    key={follower._id || index}
                    className="flex flex-col md:flex-row items-center justify-between p-3 hover:bg-black/70 rounded-xl transition-all gap-3"
                >
                    {/* Left Section */}
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <img
                            src={follower.image || assest.blankImage}
                            alt="profile"
                            className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover"
                        />
                        <div className="sm:text-left">
                            <div className="tooltip tooltip-info cursor-pointer" data-tip="view profile">
                                <p className="font-semibold text-white hover:underline">{follower.name}</p>
                            </div>
                            <p className="text-xs text-gray-400 mt-1 line-clamp-2 max-w-xs sm:max-w-md">
                                @{follower.userName}
                            </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    {isFollowing(follower._id) ? (
                        <button
                            className="flex items-center justify-center gap-1 px-4 py-2 bg-[#101828] cursor-pointer text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all w-full sm:w-auto"
                            disabled
                        >
                            <BsCheckLg size={18} /> Following
                        </button>
                    ) : (
                        <button
                            onClick={() => handleFollowBack(follower._id)}
                            className="flex items-center gap-2 mt-2 sm:mt-0 px-4 py-2 bg-[#FFFD02] cursor-pointer text-black rounded-xl text-xs sm:text-sm font-semibold hover:bg-yellow-300 transition-all"
                        >
                            <AiOutlineUserAdd size={18} /> Follow Back
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};

export default UserFollowers;
