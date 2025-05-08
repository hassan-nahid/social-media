import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { assest } from '../../assets/assest';
import { GoHomeFill } from "react-icons/go";
import { IoPersonSharp, IoSettingsSharp } from "react-icons/io5";
import { TbMessageCircleFilled } from "react-icons/tb";
// import useUser from '../../hooks/useUser';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const {user} = useUser()


  const navItems = [
    { icon: GoHomeFill, path: '/' },
    { icon: IoPersonSharp, path: '/profile' },
    { icon: TbMessageCircleFilled, path: '/message' },
    { icon: IoSettingsSharp, path: '/setting' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex justify-between black-color items-center sm:px-4 md:px-12 py-2">
      {/* Logo & Search */}
      <div className="flex items-center gap-4">
        <img src={assest.logo} alt="Logo" className="w-[30px] h-[30px] cursor-pointer rounded-full" onClick={() => navigate('/')} />
        <input
          type="text"
          placeholder="#Explore"
          className="w-[220px] text-base h-8 px-4 rounded-[6px] gray-color outline-none"
        />
      </div>

      {/* Navigation Icons */}
      <div className="flex items-center gap-14">
        {navItems.map((item, index) => {
          const IconComponent = item.icon;
          const active = isActive(item.path);

          return (
            <div
              key={index}
              className="relative cursor-pointer flex flex-col items-center group"
              onClick={() => navigate(item.path)}
            >
              <button className={`text-2xl cursor-pointer transition-colors duration-200 ${active ? 'text-[#FFFD02]' : 'text-white'} group-hover:text-[#FFFD02]`}>
                <IconComponent />
              </button>
              {active && (
                <img
                  src={assest.dot}
                  alt="Active Dot"
                  className="group-hover:block block"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Profile */}
      <div>
        <button onClick={() => navigate('/profile')}>
          <img
            src={assest.blankImage}
            alt="Profile"
            className="h-[40px] border-yellow-300 border-2 p-1 rounded-full w-[40px] object-cover cursor-pointer"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
