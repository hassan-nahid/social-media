import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaUnlockKeyhole } from 'react-icons/fa6';
import { LuBadgeCheck } from "react-icons/lu";

const SettingMenu = ({ searchQuery, setShowContentMobile }) => {
  const [activeId, setActiveId] = useState(null);

  const settingMenuItems = [
    { id: 1, name: "Update Profile", icon: <CgProfile />, url: "/setting" },
    { id: 2, name: "Change Password", icon: <FaUnlockKeyhole/>, url: "/setting/change-password" },
    { id: 3, name: "Verify badge", icon: <LuBadgeCheck/>, url: "/setting/verify-badge" },
    // { id: 4, name: "Privacy Settings", icon: "", url: "/setting/privacy" },
    // { id: 5, name: "Language Settings", icon: "", url: "/setting/language" },
    // { id: 6, name: "Account Settings", icon: "", url: "/setting/account" },
    // { id: 7, name: "Security Settings", icon: "", url: "/setting/security" },
    // { id: 8, name: "Help & Support", icon: "", url: "/setting/help" },
    // { id: 9, name: "About Us", icon: "", url: "/setting/about" },
    // { id: 10, name: "Terms of Service", icon: "", url: "/setting/terms" },
    // { id: 11, name: "Privacy Policy", icon: "", url: "/setting/privacy-policy" },
  ];

  // Filter menu items based on search query
  const filteredItems = settingMenuItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClick = (id) => {
    setActiveId(id);
    setShowContentMobile(true); // only affect mobile
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      {filteredItems.map((item) => (
        <Link
          key={item.id}
          to={item.url}
          onClick={() => handleClick(item.id)}
          className={`flex h-10 items-center gap-2 px-2 rounded text-xl md:text-base  lg:text-xl transition-all duration-300 cursor-pointer 
            ${activeId === item.id ? "yellow-color text-black" : "hover:text-[var(--yellow-color)] text-white"}`}
        >
          {item.icon && <span className="text-2xl">{item.icon}</span>}
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default SettingMenu;
