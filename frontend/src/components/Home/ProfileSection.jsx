import React, { useState } from 'react';
import {
  FaHeart,
  FaBell,
  FaUserPlus,
  FaCommentDots
} from 'react-icons/fa';
import UserProfile from './UserProfile';
import AboutUser from './AboutUser';
import useUserData from '../../hooks/useUserData';

const ProfileSection = () => {

  const { userData } = useUserData();

  const [notifications, setNotifications] = useState([
    { icon: <FaUserPlus className="text-[var(--text-gray)] mt-1" />, text: <p><strong>@johndoe</strong> followed you.</p> },
    { icon: <FaHeart className="text-[var(--text-gray)] mt-1" />, text: <p><strong>@designhub</strong> liked your post.</p> },
    { icon: <FaCommentDots className="text-[var(--text-gray)] mt-1" />, text: <p><strong>@sarahUI</strong> commented: “Amazing work 🔥”</p> },
  ]);

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <section className='h-screen p-4'>

      {/* User Profile */}
      <UserProfile />

      {/* About Info */}
      <AboutUser userData={userData} />

      {/* Notifications */}
      <div className="mt-6 bg-[var(--gray-color)] p-4 rounded-[15px] text-white">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <FaBell className="text-lg text-[var(--yellow-color)]" />
            <h3 className="text-lg font-semibold">Notifications</h3>
          </div>
          <button
            onClick={clearNotifications}
            className="hover:text-amber-300 cursor-pointer hover:underline"
          >
            clear all
          </button>
        </div>

        <div className="space-y-4 text-sm">
          {notifications.length === 0 ? (
            <p className="text-[var(--text-gray)]">No notifications.</p>
          ) : (
            notifications.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                {item.icon}
                {item.text}
              </div>
            ))
          )}
        </div>
      </div>

    </section>
  );
};

export default ProfileSection;
