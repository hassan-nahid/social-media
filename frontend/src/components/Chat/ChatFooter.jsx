import React, { useState } from 'react';
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';
import { assest } from '../../assets/assest';
import EmojiPicker from 'emoji-picker-react';
import { MdDeleteOutline } from "react-icons/md";

const ChatFooter = ({ toast, onToast }) => {
    const [inputValue, setInputValue] = useState('');
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [image, setImage] = useState(null);

    const handleEmojiClick = (emojiData) => {
        setInputValue(prev => prev + emojiData.emoji);
    };

    const handleSend = () => {
        if (image) {
            console.log('Image:', image.file);
        }

        // Reset input and image after sending
        setInputValue('');
        setImage(null);
    };

    return (
        <div className="bg-[#212121] px-4 py-4 flex items-center gap-4 rounded-b-[15px] w-full relative">
            {/* Emoji Picker Toggle */}
            <div className="relative">
                <button className="text-white text-xl" onClick={() => setShowEmojiPicker(prev => !prev)}>
                    <img src={assest.emoji} alt="Emoji" className='h-[22px]' />
                </button>
                {showEmojiPicker && (
                    <div className="absolute bottom-[50px] z-10">
                        <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
                    </div>
                )}
            </div>

            {/* Attachment Icon */}
            <div className='relative w-6 h-6'>
                <button className="text-white absolute top-0 left-0">
                    <img src={assest.fileIcon} alt="File" className='h-[22px]' />
                </button>
                <input
                    type="file"
                    accept="image/*"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                            const imageURL = URL.createObjectURL(file);
                            setImage({ file, url: imageURL });
                        }
                    }}
                />
            </div>

            {/* Input Field */}
            <div className="flex items-center bg-[#2C2C2C] rounded-[10px] px-4 py-2 flex-grow text-white relative">
                <input
                    type="text"
                    placeholder="Type your message....."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="bg-transparent outline-none flex-grow text-sm placeholder:text-gray-400"
                />
                <FaMicrophone className="text-gray-400 text-sm cursor-pointer" onClick={onToast} />
            </div>

            {/* Image Preview */}
            {image && (
                <div className="absolute bottom-[65px] left-0 bg-[#2c2c2c] p-2 rounded-lg flex items-center gap-2">
                    <img src={image.url} alt="preview" className="h-12 w-12 object-cover rounded-md" />
                    <button onClick={() => setImage(null)} className="text-red-500 text-xl hover:underline">
                    <MdDeleteOutline />
                    </button>
                </div>
            )}

            {/* Toast Message */}
            {toast && (
                <div className="toast toast-top toast-center">
                    <div className="alert alert-info bg-red-600 border-none text-white">
                        <span>This feature is coming soon!</span>
                    </div>
                </div>
            )}

            {/* Send Button */}
            <button className="text-white text-xl cursor-pointer" onClick={handleSend}>
                <FaPaperPlane />
            </button>
        </div>
    );
};

export default ChatFooter;
