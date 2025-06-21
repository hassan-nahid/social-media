import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { assest } from "../../assets/assest";

const FeedFooter = ({love,changeLove,handleComment,showComment,profile}) => {
    const [copy, setCopy] = useState(false);
    
    const shareLink = "https://whoami/shantopost";

    const openShareModal = () => {
        document.getElementById("share_modal").showModal();
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(shareLink);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 2000); 
    };

    return (
        <>
            
            {copy && (
                <div className="toast toast-top toast-center z-[999]">
                    <div className="alert alert-info text-white bg-[#333]">
                        <span>Text copied to clipboard!</span>
                    </div>
                </div>
            )}

            {/* Reaction Buttons */}
            <div className="flex items-center gap-6 border-b-2 mt-4 pb-3 relative">
                <button
                    onClick={changeLove}
                    className={`text-3xl font-bold ${love ? "text-red-700" : "text-white"} cursor-pointer`}
                >
                    {love ? <FaHeart /> : <CiHeart />}
                </button>
                <button className="cursor-pointer" onClick={handleComment}>
                    <img src={assest.messageIcon} alt="message" />
                </button>
                <button className="cursor-pointer" onClick={openShareModal}>
                    <img src={assest.shareIcon} alt="share" />
                </button>
            </div>

            {/* Comment Input Field */}
            <div className="mt-4">
                <input
                    type="text"
                    className="w-full border border-gray-700 px-4 py-2 rounded-md bg-[#1A1A1A] text-white placeholder-gray-400 cursor-pointer"
                    placeholder="Write a comment..."
                    readOnly
                    onClick={() => document.getElementById("my_modal_1").showModal()}
                />
            </div>

            {/* Comment Modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box relative bg-[var(--gray-color)]">
                    <h3 className="font-bold text-lg mb-2">Write a Comment</h3>
                    <input
                        type="text"
                        className="w-full border px-4 py-2 mt-2 rounded-md"
                        placeholder="Enter your comment"
                    />
                    <div className="modal-action">
                        <form method="dialog" className="flex gap-2">
                            <button className="btn">Close</button>
                            <button className="absolute right-10 top-20 cursor-pointer">
                                <img src={assest.shareIcon} alt="share" />
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>

            {/* Share Modal */}
            <dialog id="share_modal" className="modal">
                <div className="modal-box bg-[var(--gray-color)]">
                    <h3 className="font-bold text-lg mb-4">Share this post</h3>
                    <div className="bg-[#1A1A1A] p-3 rounded-md flex items-center justify-between">
                        <span className="text-white break-all">{shareLink}</span>
                        <button onClick={copyToClipboard} className="btn ml-3">
                            Copy
                        </button>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            {/* Comments Section */}
            {showComment && (
                <div className="ml-3 flex gap-4 mt-3">
                    <img
                        src={profile}
                        alt="profile"
                        className="h-12 w-12 p-1 bg-[#1A1A1A] rounded-2xl"
                    />
                    <div className="bg-[#1A1A1A] px-4 py-2 rounded-lg">
                        <p>@arshanto</p>
                        <p>Hello bro kemon acho</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default FeedFooter;
