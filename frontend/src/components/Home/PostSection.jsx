import { useState } from "react";
import { assest } from "../../assets/assest";
import PostModal from "./PostModal";

const PostSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="gray-color mt-4 rounded-xl p-8 mx-4">
        <div className="flex gap-6">
          <img
            className="w-14 h-14 rounded-xl border-2 p-1 border-black"
            src={assest.blankImage}
            alt="profile"
          />
          <input
            className="bg-black text-xl w-full h-14 rounded-xl px-4 outline-none text-white cursor-pointer"
            placeholder="Tell your friends about your thoughts.."
            type="text"
            onClick={() => setIsModalOpen(true)}
            readOnly
          />
        </div>
      </div>

      {isModalOpen && <PostModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default PostSection;
