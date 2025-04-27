import React from 'react'

const SettingMenu = () => {

    const settingMenuItems = [
        { id: 1, name: "Update Profile", icon: "", url: "/setting/profile" },
        { id: 2, name: "Change Password", icon: "", url: "/setting/change-password" },
        { id: 4, name: "Verify For badge", icon: "", url: "/setting/verify-for-badge" },
        { id: 3, name: "Privacy Settings", icon: "", url: "/setting/privacy" },
        { id: 5, name: "Language Settings", icon: "", url: "/setting/language" },
        { id: 6, name: "Account Settings", icon: "", url: "/setting/account" },
        { id: 7, name: "Security Settings", icon: "", url: "/setting/security" },
        { id: 8, name: "Help & Support", icon: "", url: "/setting/help" },
        { id: 9, name: "About Us", icon: "", url: "/setting/about" },
        { id: 10, name: "Terms of Service", icon: "", url: "/setting/terms" },
        { id: 11, name: "Privacy Policy", icon: "", url: "/setting/privacy-policy" },
    ]

  return (
    <div>
        <div className="flex flex-col gap-2 mt-4">
            {settingMenuItems.map((item) => (
                <div key={item.id} className="flex items-center gap-2 cursor-pointer hover:text-yellow-300 text-white text-sm font-semibold">
                    <span className="text-neutral-400">{item.icon}</span>
                    <span>{item.name}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SettingMenu