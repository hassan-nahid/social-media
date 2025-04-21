import React from 'react'
import { assest } from "../../assets/assest"

const FriendSectionCard = () => {
    return (
        <div className='black-color rounded-xl p-4'>
            <div className='flex justify-start items-center gap-3'>
                <div className='relative'>
                    <img className='h-14 w-14 rounded-2xl' src={assest.FriendSectionProfile} alt="profile pic" />
                    <img src={assest.verifyLogo} alt="verify logo" className='h-[45px] w-[70px] absolute bottom-7 left-6' />
                </div>
                <div>
                    <h1 className='text-white text-xl font-medium'>Hassan Nahid</h1>
                    <p className=''>@hassannahid</p>
                </div>
            </div>
            <div className='flex justify-evenly bg-black items-center rounded-xl gap-2 mt-4'>
                <button
                    className='w-[50%] text-white hover:bg-gray-900 active:scale-95 transition-all duration-300 ease-in-out rounded-xl m-2 py-2 shadow-md hover:shadow-lg'
                >
                    Remove
                </button>
                <button
                    className='yellow-color active:scale-95 transition-all duration-300 ease-in-out rounded-xl m-2 w-[50%] text-black py-2 shadow-md hover:shadow-lg'
                >
                    Follow
                </button>
            </div>

        </div>
    )
}

export default FriendSectionCard