import React, { useState } from 'react';
import { assest } from '../../assets/assest';
import { MdAddIcCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { FaInfoCircle } from 'react-icons/fa';
import { IoCloseCircleSharp } from "react-icons/io5";

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

    const ReportMessage = [
        "Sexual Message",
        "Violent or repulsive content",
        "Hateful or abusive content",
        "Harmful or dangerous acts",
        "Spam or misleading",
        "Threatening message"
    ]


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

                <div className="dropdown dropdown-end ">
                    <div tabIndex={0} role="button" className=" m-1">
                        <FaInfoCircle/>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-[#212121]  rounded-box z-1 w-52   shadow-sm flex flex-col gap-4 p-4 ">
                        <button
                            className="py-3 w-full text-white cursor-pointer rounded-[8px] shadow-xl shadow-amber-50/5"
                            style={{
                                background: "linear-gradient(10deg, #282828 -28.66%, #8E8E8E 386.98%)",
                            }}
                        >
                            View Profile
                        </button>

                        <button
                            className="py-3 w-full text-white bg-[#ED4337] cursor-pointer rounded-[8px] shadow shadow-amber-50/10"
                           
                            onClick={() => document.getElementById('my_modal_5').showModal()}
                        >
                            Report
                        </button>
                    </ul>
                </div>
            </div>




            <dialog id="my_modal_5" className="modal sm:modal-middle">
                <div className="modal-box bg-[#212121] text-white">
                    <h3 className="font-bold text-lg mb-4">Report this user</h3>

                    <form method="dialog" className="space-y-3">
                        {ReportMessage.map((option, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-3 cursor-pointer hover:bg-[#2a2a2a] p-2 rounded"
                            >
                                <input type="radio" name="radio-10" className="radio  text-[#ED4337]  " value={option} defaultChecked />

                                <span>{option}</span>
                            </label>
                        ))}

                        <div className="modal-action mt-6 flex justify-end">
                            <button className="btn bg-gray-700 text-white">Cancel</button>
                            <button
                                type="submit"
                                className="btn bg-[#ED4337]  text-white"
                            >
                                Report
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>



        </div>
    );
};

export default ChatHeader;
