import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { assest } from '../../assets/assest';
import { GoHomeFill } from "react-icons/go";
import { IoPersonSharp, IoSettingsSharp } from "react-icons/io5";
import { TbMessageCircleFilled } from "react-icons/tb";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: GoHomeFill, path: '/' },
    { icon: IoPersonSharp, path: '/profile' },
    { icon: TbMessageCircleFilled, path: '/message' },
    { icon: IoSettingsSharp, path: '/setting' },
  ];

  return (
    <nav className="flex justify-between items-center  sm:px-4 md:px-12  py-4 ">
      {/* Logo & Search */}
      <div className="flex items-center gap-4">
        <img src={assest.logo} alt="Logo image" className="w-[50px] h-[50px] rounded-full" />
        <input
          type="text"
          placeholder="#Explore"
          className="w-[220px] text-base h-9 px-4 rounded-[6px] gray-color outline-none"
        />
      </div>

      {/* Icon */}
      <div className="flex items-center gap-14">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <div
              key={index}
              className="relative cursor-pointer flex flex-col items-center group  "
              onClick={() => navigate(item.path)}
            >
              <button className={`text-2xl cursor-pointer  transition-colors duration-200 ${isActive ? 'text-[#FFFD02]' : 'text-white'
                  } group-hover:text-[#FFFD02]`}>
              <IconComponent
                
              />
              </button>
              {(isActive || true) && (
                <img
                  src={assest.dot}
                  alt=""
                  className={`  group-hover:block ${isActive ? 'block' : 'hidden'
                    }`}
                />
              )}
            </div>
          );
        })}
      </div>
      {/* Profile */}
      <div className='    border-2 rounded-xl' >
        <button onClick={() => navigate('/profile')} >
          <img src={assest.profile} alt="profile" className="h-[50px]  p-1 w-[50px] object-cover cursor-pointer" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
