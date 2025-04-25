import React, { useState } from 'react';
import { assest } from '../../assets/assest';
import { MdAddIcCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { FaInfoCircle, FaBriefcase, FaGraduationCap, FaHome, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import UserProfile from '../Home/UserProfile';

const ChatHeader = ({ toast, onToast }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    const user = {
        image: assest.profile2,
        name: 'Shanto',
        activation: '1 hour ago'
    };




    return (
        <div className='bg-[#212121] text-white px-4 py-5 sm:px-6 flex flex-wrap sm:flex-nowrap justify-between items-center rounded-t-[15px] gap-4'>
            {/* Toast */}
            {toast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-info bg-red-600 border-none text-white">
                        <span>This feature is coming soon!</span>
                    </div>
                </div>
            )}

            {/* User Info */}
            <div className='flex items-center gap-4 sm:gap-6 flex-1 min-w-0'>
                <img
                    src={user.image}
                    alt="user profile"
                    className='w-12 h-12 p-1 bg-[#1A1A1A] rounded-[5px] object-cover'
                />
                <div className='truncate'>
                    <h3 className='text-lg sm:text-xl font-medium truncate'>{user.name}</h3>
                    <p className='text-xs text-[var(--text-gray)] truncate'>{user.activation}</p>
                </div>
            </div>

            {/* Icons */}
            <div className='flex relative gap-4 sm:gap-8 text-2xl sm:text-3xl'>
                <button onClick={onToast} aria-label="Call"><MdAddIcCall /></button>
                <button onClick={onToast} aria-label="Video Call"><IoVideocam /></button>
                <button aria-label="Info" onClick={toggleModal}><FaInfoCircle /></button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="absolute right-65 top-30 mt-2 bg-[#333] rounded-lg shadow-lg p-4  ">

                        
                    <UserProfile/>
                    
                    <button
                        onClick={toggleModal}
                        className="text-sm text-blue-500 mt-4 w-full text-center"
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default ChatHeader;
