import React, { useState } from 'react';
import UserProfile from './UserProfile';
import AboutUser from '../Home/AboutUser';
import { IoCloseCircle } from "react-icons/io5";
import UserFollowers from '../Home/UserFollowers';
import UserFollowing from '../Home/UserFollowing';
import useUserData from '../../hooks/useUserData';

const RightSectionProfile = ({ isMobile }) => {

        const [modalType, setModalType] = useState('');
    
        const openModal = (type) => {
            setModalType(type);
            document.getElementById('my_modal_4').showModal();
        };
        
        const {userData , refetch} = useUserData();
        const followers = userData?.followers.length || 0;
        const following = userData?.following.length || 0;

    return (
        <div className={`${isMobile ? 'w-full' : 'w-[350px] lg:w-[400px]'} py-1 flex flex-col gap-6 md:gap-8 px-4 md:px-0`}>

            {/* User Profile Section */}
            <UserProfile />

            {/* Profile Stats Section */}
            <div className="bg-[#282828] rounded-xl p-6 text-white mx-4">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Posts</span>
                    <span className="font-semibold">24</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-400 hover:underline cursor-pointer " onClick={() => openModal('followers')} >Followers</p>
                    <p className="font-semibold">{followers}</p>
                </div>
                <div className="flex items-center justify-between  ">
                    <p className="text-gray-400 hover:underline cursor-pointer" onClick={() => openModal('following')} >Following</p>
                    <p className="font-semibold">{following}</p>
                </div>
            </div>

            {/* Modal */}
            <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12 max-w-5xl bg-[#282828] max-h-[90vh] flex flex-col relative">
                        
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-4 translate-x-5 ">
                                {modalType === 'followers' ? 'Followers' : 'Following'}
                            </h2>
                        </div>

                
                        <div className="overflow-y-auto pr-2" style={{ maxHeight: '70vh' }}>
                            {modalType === 'followers' ? (
                                <UserFollowers userData={userData} refetchUserData={refetch}/>
                                
                            ) : (
                                <UserFollowing userData={userData} refetchUserData={refetch} modalType={modalType}/>
                            )}
                        </div>

                        {/* Close Button */}
                        <div className="modal-action mt-4 absolute right-4 top-2">
                            <form method="dialog">
                                <button className="text-white font-bold text-xl cursor-pointer "><IoCloseCircle/></button>
                            </form>
                        </div>
                    </div>
                </dialog>

            {/* About User Section */}
            <div>
                <AboutUser className="mt-0 mx-4" />
            </div>
        </div>
    );
};

export default RightSectionProfile;
