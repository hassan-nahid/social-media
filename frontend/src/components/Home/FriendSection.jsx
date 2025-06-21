import { useEffect, useState } from "react";
import FriendSectionCard from "./FriendSectionCard";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import useUserData from "../../hooks/useUserData";

const FriendSection = ({ onClose }) => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // ✅ Search term state

  const { userData } = useUserData();
  const userId = userData?._id;
  const followingIds = userData?.following || [];
  const removedUserIds = userData?.removedUsers || [];

  useEffect(() => {
    if (userData) {
      fetchUsers();
    }
  }, [userData]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${import.meta.env.VITE_LINK}/api/user/allUser`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const filteredUsers = res.data.filter((user) => {
        return (
          user._id !== userId &&
          !followingIds.includes(user._id) &&
          !removedUserIds.includes(user._id)
        );
      });

      setUsers(filteredUsers);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleRemoveUserFromUI = (userIdToRemove) => {
    setUsers((prevUsers) => prevUsers.filter((u) => u._id !== userIdToRemove));
  };

  // ✅ Filter users based on username or name
  const filteredUsers = users.filter((user) => {
    const lowerSearch = searchTerm.toLowerCase();
    return (
      user.userName?.toLowerCase().includes(lowerSearch) ||
      user.name?.toLowerCase().includes(lowerSearch)
    );
  });

  return (
    <div className="gray-color rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-white text-2xl font-medium">Friends</h1>
        {onClose && (
          <button onClick={onClose} className="text-white text-2xl lg:hidden">
            <IoMdClose />
          </button>
        )}
      </div>

      <input
        type="text"
        placeholder="Search by name or username"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 text-white border-b-gray-500 h-10 px-4 rounded-xl w-full mb-6"
      />

      <div className="scroll-on-hover flex flex-col gap-4 overflow-y-auto h-[calc(100vh-210px)]">
        {filteredUsers.map((user) => (
          <FriendSectionCard
            key={user._id}
            user={user}
            onRemoveFromUI={handleRemoveUserFromUI}
          />
        ))}

        {filteredUsers.length === 0 && (
          <p className="text-gray-400 text-center">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default FriendSection;
