import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar';
import MobileNavbar from '../components/Shared/MobileNavbar';
import { TbAdjustmentsHorizontal, TbSearch } from 'react-icons/tb';
import { RiLogoutCircleLine } from "react-icons/ri";
import { IoMdArrowBack } from "react-icons/io";
import auth from '../firebase/firebase.config';
import { useSignOut } from 'react-firebase-hooks/auth';
import SettingMenu from '../components/Setting/SettingMenu';

const SettingLayout = () => {
  const [signOut] = useSignOut(auth);
  const [showContentMobile, setShowContentMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");  // Add search query state
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
  };

  const handleBackToMenu = () => {
    setShowContentMobile(false);
    navigate("/setting");
  };

  return (
    <div className="h-screen">
      {/* Navbar */}
      <div className="hidden sm:block">
        <Navbar />
      </div>

      <div className="max-w-[1440px] mx-auto h-[calc(100vh-65px)] flex gap-5 relative">

        {/* Sidebar */}
        <div className={`h-full ${showContentMobile ? "hidden" : "block"} w-full sm:block sm:w-[30%]`}>
          <div className="p-4 gray-color h-full rounded-xl flex flex-col justify-between gap-4">
            <div>
              {/* Search Box */}
              <div className="relative mt-4">
                <span className="absolute inset-y-0 left-3 flex items-center text-neutral-400">
                  <TbSearch className="h-4 w-4" />
                </span>

                <input
                  type="text"
                  placeholder="Search settings"
                  className="bg-neutral-700 rounded-xl w-full h-8 pl-10 pr-10 outline-none text-white placeholder:text-neutral-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}  // Update search query on change
                />
              </div>

              {/* Menu Items */}
              <div className="scroll-on-hover overflow-y-auto h-[calc(100vh-200px)]">
                <SettingMenu searchQuery={searchQuery} setShowContentMobile={setShowContentMobile} />
              </div>
            </div>

            {/* Logout Button */}
            <div>
              <button
                onClick={handleLogout}
                className="flex hover:text-yellow-300 justify-center items-center gap-1 text-xl text-white cursor-pointer active:scale-95 transition-all duration-300 ease-in-out"
              >
                <RiLogoutCircleLine /> Log Out
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={`h-full overflow-y-auto scroll-on-hover flex-1 ${showContentMobile ? "block" : "hidden"} sm:block`}>
          {/* Back Button (only mobile) */}
          <div className="sm:hidden p-2">
            <button
              onClick={handleBackToMenu}
              className="flex items-center gap-2 text-white text-lg hover:text-yellow-300 transition-all"
            >
              <IoMdArrowBack className="text-2xl" />
              <span>Back to Settings</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="p-4">
            <Outlet />
          </div>
        </div>

      </div>

      {/* Mobile Navbar */}
      <div className="block sm:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default SettingLayout;
