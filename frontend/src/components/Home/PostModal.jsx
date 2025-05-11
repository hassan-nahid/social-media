import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react"; // light mode by default
import { FaCamera } from "react-icons/fa";


const PostModal = ({ onClose }) => {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleEmojiClick = (emojiData) => {
    setPostText((prev) => prev + emojiData.emoji);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-[#1e1e1e] text-white  p-8 rounded-xl w-full max-w-xl relative">
        <button onClick={onClose} className="absolute top-1 right-4 text-xl font-bold text-white">
          ✕
        </button>



        <textarea
          rows="4"
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          className="w-full resize-none bg-black border border-gray-700 p-3 rounded-xl text-white text-lg outline-none"
          placeholder="What's on your mind?"
        />

        <button
          className="text-xl mt-2"
          onClick={() => setShowEmojiPicker((prev) => !prev)}
        >
          😊
        </button>

        {showEmojiPicker && (
          <div className="mt-2 z-50">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
            {/* 🚫 No `theme="dark"` here */}
          </div>
        )}

        {image && (
          <div className="mt-4">
            <img src={image} alt="preview" className="rounded-xl max-h-64" />
          </div>
        )}

        <div className="mt-4 flex justify-between items-center">
          <label className="cursor-pointer  text-yellow-300 font-semibold">
            <span className="flex justify-center items-center gap-1.5"> <FaCamera /> Add Photo</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-gray-700 rounded-xl" onClick={onClose}>
              Cancel
            </button>
            <button
              className="px-4 py-2 yellow-color text-black rounded-xl"
              onClick={() => {
                onClose();
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
