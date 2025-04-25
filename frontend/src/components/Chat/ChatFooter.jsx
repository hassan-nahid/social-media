import React, { useState } from 'react';
import { FaSmile, FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import { FiPaperclip } from 'react-icons/fi';

const ChatFooter = ({ toast, onToast }) => {

    return (
        <div className="bg-[#212121] px-4 py-4 flex items-center gap-3 rounded-b-[15px] w-full ">
            {/* Emoji Icon */}
            <button className="text-white text-xl">
                <FaSmile />
            </button>


            {/* Attachment Icon */}
            <div className='relative w-6 h-6'>
                <button className="text-white text-xl absolute top-0 left-0 ">
                    <FiPaperclip />
                </button>
                <input
                    multiple
                    type="file"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
            </div>


            {/* Input Field */}
            <div className="flex items-center bg-[#2C2C2C] rounded-[10px] px-4 py-2 flex-grow text-white">
                <input
                    type="textz"
                    placeholder="Type your message....."
                    className="bg-transparent outline-none flex-grow text-sm placeholder:text-gray-400"
                />
                <FaMicrophone className="text-gray-400 text-sm" onClick={onToast} />
            </div>

            {/* toast   */}

            {toast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-info bg-red-600 border-none text-white">
                        <span>This feature is coming soon!</span>
                    </div>
                </div>
            )}


            {/* Send Button */}
            <button className="text-white text-xl cursor-pointer ">
                <FaPaperPlane />
            </button>
        </div>
    );
};

export default ChatFooter;
