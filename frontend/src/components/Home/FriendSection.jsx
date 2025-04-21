import FriendSectionCard from "./FriendSectionCard"

const FriendSection = () => {
  return (
    <div className="gray-color rounded-xl p-4">
      <div>
        <h1 className="text-white text-2xl font-medium">Friends</h1>
        <input type="text" placeholder="@hassannahid" className="border-2 text-white border-b-gray-500 h-10 px-4 rounded-xl w-full my-6" />
      </div>
      <div className="flex flex-col gap-4 overflow-x-auto h-[80vh] ">
        <FriendSectionCard />
        <FriendSectionCard />
        <FriendSectionCard />
        <FriendSectionCard />
      

      </div>
    </div>
  )
}

export default FriendSection