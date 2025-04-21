import React from 'react';
import { GoHomeFill } from "react-icons/go";
import { IoSettingsSharp } from "react-icons/io5";
import { TbMessageCircleFilled } from "react-icons/tb";
import { FaPlusCircle } from "react-icons/fa";
import { assest } from "../../assets/assest";
import { useNavigate, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: GoHomeFill, path: '/' },
    { icon: TbMessageCircleFilled, path: '/message' },
    { icon: IoSettingsSharp, path: '/setting' }
  ];

  return (
    <nav className="fixed sm:hidden bottom-0 left-0 right-0 gray-color text-white p-2 flex justify-between items-center z-50">
      <div className="flex-1 flex justify-around items-center relative">

        {/* nav items */}
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`flex flex-col cursor-pointer items-center text-xl transition-colors duration-200 ${isActive ? 'text-[var(--yellow-color)]' : 'text-white'} hover:text-[var(--yellow-color)]`}
            >
              <IconComponent size={24} />
            </button>
          );
        })}

        {/*  Plus Button */}
        <div className=' gray-color absolute -top-10 rounded-full  left-1/2 transform -translate-x-1/2 ' >
          <div className=" p-2 ">
            <button className="cursor-pointer bg-white text-black rounded-full p-2 shadow-lg">
              <FaPlusCircle size={28} />
            </button>
          </div>
        </div>

        {/* Profile */}
        <div onClick={() => navigate('/profile')} className="flex flex-col items-center cursor-pointer">
          <button >
            <img
              src={assest.profile}
              alt="profile"
              className="w-8 h-8 rounded-full border border-white cursor-pointer "
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MobileNavbar;
