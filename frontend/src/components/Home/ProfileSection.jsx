import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { assest } from '../../assets/assest';
import {
  FaBriefcase,
  FaGraduationCap,
  FaHome,
  FaMapMarkerAlt,
  FaHeart,
  FaInfoCircle,
  FaBell,
  FaUserPlus,
  FaCommentDots
} from 'react-icons/fa';
import UserProfile from './UserProfile';

const ProfileSection = () => {
  const navigate = useNavigate();

  const bioDetails = [
    { icon: <FaInfoCircle />, label: 'Profile', value: 'Digital creator' },
    { icon: <FaBriefcase />, label: 'Works at', value: 'YouTube' },
    { icon: <FaGraduationCap />, label: 'Studied at', value: 'Sirajgonj Polytechnic Institute' },
    { icon: <FaHome />, label: 'Lives in', value: 'Rajshahi' },
    { icon: <FaMapMarkerAlt />, label: 'From', value: 'Rajshahi' },
    { icon: <FaHeart />, label: '', value: 'Single' },
  ];

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

      <UserProfile />

      {/* Bio Info Section */}
      <div className="mt-6 bg-[var(--gray-color)] p-4 rounded-[15px] text-white">
        <h1 className="text-[#FFF] text-xl font-bold ml-1.5 mb-4">About</h1>
        {bioDetails.map((item, index) => (
          <div key={index} className="flex items-start gap-3 py-1 text-sm mt-2">
            <span className="text-lg mt-1 text-[var(--text-gray)]">{item.icon}</span>
            <span>
              {item.label && <strong>{item.label}</strong>}
              {item.label && item.value && ' · '}
              <span className="text-white">{item.value}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Notifications Section */}
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
