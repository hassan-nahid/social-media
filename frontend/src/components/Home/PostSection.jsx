import { useState } from "react";
import { assest } from "../../assets/assest";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const PostSection = () => {
  const [love, setLove] = useState(false);
  const [showComment, setShowComment] = useState(false);


  const changeLove = () => {
    setLove((prev) => !prev);
  };

  const handleComment = () => {
    setShowComment((prev) => !prev);
  };


  return (
    <section className="m-[10px] rounded-[15px] -z items-center bg-[var(--gray-color)] p-8 md:p-12">
      <div className="flex flex-col gap-3">
        {/* Post header */}
        <div className="flex gap-3">
          <div className="bg-[#1A1A1A] p-1 rounded-[5px] bg-center">
            <img src={assest.profile2} alt="" className="h-[52px] w-[52px]" />
          </div>
          <div>
            <p>@george</p>
            <div className="flex gap-1 text-md md:text-xl">
              <h3 className="text-[#FFF]">George Jose</h3>
              <h1 className="text-[var(--yellow-color)]">. 1 hour ago</h1>
            </div>
          </div>
        </div>

        {/* Post text */}
        <p className="text-[var(--text-gray)] mt-3">
          Lorem ipsum dolor sit amet consectetur. Porttitor.
        </p>

        {/* Post image */}
        <div>
          <img
            src={assest.postImage}
            alt=""
            className="w-full h-auto rounded-[15px]"
          />
        </div>

        {/* Reaction buttons */}
        <div className="flex items-center gap-6 border-b-2 mt-3 pb-3 relative">
          <button
            onClick={changeLove}
            className={`text-3xl font-bold ${love ? "text-red-700" : "text-white"} cursor-pointer`}
          >
            {love ? <FaHeart /> : <CiHeart />}
          </button>
          <button className="cursor-pointer">
            <img src={assest.messageIcon} alt="" />
          </button>
          <button className="cursor-pointer">
            <img src={assest.shareIcon} alt="" />
          </button>
          <button onClick={handleComment} className={`absolute right-0 underline cursor-pointer  `}  >
            Comments
          </button>
        </div>

        {/* Comment input triggers modal */}
        <div className="mt-4">
          <input
            type="text"
            className="w-full border border-gray-700 px-4 py-2 rounded-md bg-[#1A1A1A] text-white placeholder-gray-400 cursor-pointer"
            placeholder="Write a comment..."
            readOnly
            onClick={() => document.getElementById("my_modal_1").showModal()}
          />
        </div>

        {/* Modal for comment input */}


        <dialog id="my_modal_1" className="modal  ">
          <div className="modal-box relative bg-[var(--gray-color)] ">
            <h3 className="font-bold text-lg mb-2">Write a Comment</h3>
            <input
              type="text"
              className="w-full border px-4 py-2 mt-2 rounded-md"
              placeholder="Enter your comment"
            />


            <div className="modal-action">
              <form method="dialog" className="flex gap-2">
                <button className="btn">Close</button>
                <button className=" absolute  right-10 top-20 cursor-pointer ">
                  <img src={assest.shareIcon} alt="" />
                </button>
              </form>
            </div>
          </div>
        </dialog>


        {/* all comment  */}
        <div className={`ml-3 flex gap-4 mt-3 ${showComment ? 'block' : 'hidden'}  `}  >
          <img src={assest.profile} alt="" className=" h-12 w-12 p-1 bg-[#1A1A1A] rounded-2xl " />
          <div className="  bg-[#1A1A1A] px-4 py-2 rounded-lg " >
            {/* username  */}
            <p>@arshanto</p>
            <p>Hello bro kemon acho</p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default PostSection;
