import { useState, useEffect } from "react";
import { assest } from "../../assets/assest";
import axios from "axios";
import useUserData from "../../hooks/useUserData";

const FriendSectionCard = ({ user, onRemoveFromUI }) => {
  const { userData, refetch } = useUserData(); // ✅ Get refetch function
  const currentUserId = userData?._id;
  const token = localStorage.getItem("token");

  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (userData?.following?.includes(user._id)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [userData, user._id]);

  const handleFollow = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_LINK}/api/user/follow`,
        {
          userId: currentUserId,
          targetUserId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsFollowing(true);
      onRemoveFromUI?.(user._id); // ✅ remove from UI
      refetch(); // ✅ refetch userData to update counts
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnfollow = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_LINK}/api/user/unfollow`,
        {
          userId: currentUserId,
          targetUserId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsFollowing(false);
      onRemoveFromUI?.(user._id); // ✅ remove from UI
      refetch(); // ✅ update counts
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemove = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_LINK}/api/user/remove`,
        {
          userId: currentUserId,
          targetUserId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onRemoveFromUI?.(user._id); // ✅ remove from UI
      refetch(); // ✅ update counts
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="black-color rounded-xl p-4 ">
      <div className="flex justify-start items-center gap-3">
        <div className="relative">
          <img
            className="h-14 w-14 cursor-pointer rounded-full"
            src={user.image || assest.blankImage}
            alt="profile pic"
          />
          <img
            src={assest.verifyLogo}
            alt="verify logo"
            className="h-[45px] w-[70px] absolute bottom-6 left-6"
          />
        </div>
        <div>
          <h1 className="cursor-pointer text-white text-xl font-medium">
            {user.name}
          </h1>
          <p>@{user.userName}</p>
        </div>
      </div>

      <div className="flex justify-evenly bg-black items-center rounded-xl gap-2 mt-4">
        <button
          onClick={handleRemove}
          className="w-[50%] cursor-pointer text-white hover:bg-gray-900 active:scale-95 transition-all duration-300 ease-in-out rounded-xl m-2 py-2 shadow-md hover:shadow-lg"
        >
          Remove
        </button>

        {isFollowing ? (
          <button
            onClick={handleUnfollow}
            className="w-[50%] cursor-pointer text-white hover:bg-gray-900 active:scale-95 transition-all duration-300 ease-in-out rounded-xl m-2 py-2 shadow-md hover:shadow-lg"
          >
            Unfollow
          </button>
        ) : (
          <button
            onClick={handleFollow}
            className="yellow-color cursor-pointer active:scale-95 transition-all duration-300 ease-in-out rounded-xl m-2 w-[50%] text-black py-2 shadow-md hover:shadow-lg"
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};

export default FriendSectionCard;
