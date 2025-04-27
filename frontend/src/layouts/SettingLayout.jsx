import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Shared/Navbar'
import MobileNavbar from '../components/Shared/MobileNavbar'
import { TbAdjustmentsHorizontal, TbSearch } from 'react-icons/tb'
import { RiLogoutCircleLine } from "react-icons/ri";
import auth from '../firebase/firebase.config'
import { useSignOut } from 'react-firebase-hooks/auth'
import SettingMenu from '../components/Setting/SettingMenu'

const SettingLayout = () => {

    const [signOut] = useSignOut(auth);
    
    const handleLogout = async () => {
        await signOut();
    }


    return (
        <div className="h-screen">
            <div className="hidden sm:block lg:block xl:block 2xl:block">
                <Navbar />
            </div>
            <div className="max-w-[1440px] mx-auto h-[calc(100vh-65px)] flex gap-5  relative">
                <div className='w-[30%] h-full'>
                    <div className="p-4 gray-color h-full rounded-xl">
                        <div className="flex flex-col justify-between gap-4 h-full">
                            <div>
                                <div className="relative mt-4">
                                    {/* Left (Search Icon) */}
                                    <span className="absolute inset-y-0 left-3 flex items-center text-neutral-400">
                                        <TbSearch className="h-4 w-4" />
                                    </span>

                                    {/* Right (Adjustments Icon) */}
                                    <span className="absolute inset-y-0 right-3 flex items-center text-neutral-400 cursor-pointer">
                                        <TbAdjustmentsHorizontal className="h-4 w-4" />
                                    </span>

                                    <input
                                        type="text"
                                        placeholder="Search settings"
                                        className="bg-neutral-700 rounded-xl w-full h-8 pl-10 pr-10 outline-none text-white placeholder:text-neutral-400"
                                    />
                                </div>
                                <div>
                                    <SettingMenu/>
                                </div>
                            </div>
                            <div>
                                <button onClick={handleLogout} className='flex hover:text-yellow-300 justify-center items-center gap-1 text-xl text-white cursor-pointer active:scale-95 transition-all duration-300 ease-in-out'><RiLogoutCircleLine /> Log Out</button>
                            </div>



                        </div>
                    </div>
                </div>
                <div className='w-[70%] h-full bg-blue-300'>

                    <Outlet />
                </div>

            </div>
            <div className="block md:hiddden ">
                <MobileNavbar />
            </div>
        </div>
    )
}

export default SettingLayout