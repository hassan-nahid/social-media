import { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { TbSearch, TbAdjustmentsHorizontal } from "react-icons/tb";
import ChatPersonProfile from "./ChatPersonProfile";


const ChatPersonSection = () => {

  const [activeTab, setActiveTab] = useState("primary");


  return (
    <div className="p-4 gray-color rounded-xl">
      <div className="">
        <div className="text-white text-2xl flex font-semibold justify-between items-center">
          <h1>Messages</h1>
          <IoCreateOutline />
        </div>
        <div className="relative mt-4">
          {/* Left (Search Icon) */}
          <span className="absolute inset-y-0 left-3 flex items-center text-neutral-400">
            <TbSearch className="h-4 w-4" />
          </span>

          {/* Right (Adjustments Icon) */}
          <span className="absolute inset-y-0 right-3 flex items-center text-neutral-400 cursor-pointer">
            <TbAdjustmentsHorizontal className="h-4 w-4" />
          </span>

          <input
            type="text"
            placeholder="Search Messages"
            className="bg-neutral-700 rounded-xl w-full h-8 pl-10 pr-10 outline-none text-white placeholder:text-neutral-400"
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-evenly  border-b border-neutral-600">
            {/* Primary Tab */}
            <div
              className="relative pb-2 cursor-pointer"
              onClick={() => setActiveTab("primary")}
            >
              <span className="text-white">Primary</span>
              {activeTab === "primary" && (
                <div className="absolute bottom-0 left-0 w-full h-1 yellow-color rounded-t-sm" />
              )}
            </div>

            {/* Request Tab */}
            <div
              className="relative pb-2 cursor-pointer"
              onClick={() => setActiveTab("request")}
            >
              <span className="text-white">Request (2)</span>
              {activeTab === "request" && (
                <div className="absolute bottom-0 left-0 w-full h-1 yellow-color rounded-t-sm" />
              )}
            </div>
          </div>

            <ChatPersonProfile/>

        </div>

      </div>
    </div>
  )
}

export default ChatPersonSection