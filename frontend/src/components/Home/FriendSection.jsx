import FriendSectionCard from "./FriendSectionCard"
import { IoMdClose } from "react-icons/io"

const FriendSection = ({ onClose }) => {
  return (
    <div className="gray-color rounded-xl p-4  ">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-white text-2xl font-medium">Friends</h1>
        {/* Close button for small/medium only */}
        {onClose && (
          <button onClick={onClose} className="text-white text-2xl lg:hidden">
            <IoMdClose />
          </button>
        )}
      </div>

      <input
        type="text"
        placeholder="@hassannahid"
        className="border-2 text-white border-b-gray-500 h-10 px-4 rounded-xl w-full mb-6"
      />

      <div className="scroll-on-hover flex flex-col gap-4 overflow-y-auto h-[calc(100vh-210px)]">
        <FriendSectionCard />
        <FriendSectionCard />
        <FriendSectionCard />
        <FriendSectionCard />
        <FriendSectionCard />
        <FriendSectionCard />
        <FriendSectionCard />
      </div>
    </div>
  )
}

export default FriendSection
