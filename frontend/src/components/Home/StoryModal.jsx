import { useEffect } from "react";
import { FaHeart, FaPaperPlane, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const StoryModal = ({
  stories,
  userIndex,
  storyIndex,
  setUserIndex,
  setStoryIndex,
  onClose,
}) => {
  const user = stories[userIndex];
  const story = user.stories[storyIndex];

  const nextStory = () => {
    if (storyIndex < user.stories.length - 1) {
      setStoryIndex(storyIndex + 1);
    } else if (userIndex < stories.length - 1) {
      setUserIndex(userIndex + 1);
      setStoryIndex(0);
    } else {
      onClose();
    }
  };

  const prevStory = () => {
    if (storyIndex > 0) {
      setStoryIndex(storyIndex - 1);
    } else if (userIndex > 0) {
      const prevUser = stories[userIndex - 1];
      setUserIndex(userIndex - 1);
      setStoryIndex(prevUser.stories.length - 1);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(nextStory, 4000);
    return () => clearTimeout(timeout);
  }, [storyIndex, userIndex]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      {/* Full Image */}
      <img
        src={story.image}
        alt="story"
        className="h-full object-contain max-w-full"
      />

      {/* Progress Bars */}
      <div className="absolute top-4 left-4 right-4 flex gap-2 z-20">
        {user.stories.map((_, idx) => (
          <div
            key={idx}
            className={`h-1 rounded-full flex-1 ${
              idx < storyIndex
                ? "bg-white"
                : idx === storyIndex
                ? "bg-white animate-story-progress"
                : "bg-white bg-opacity-30"
            }`}
          ></div>
        ))}
      </div>

      {/* Bottom UI */}
      <div className="absolute bottom-20 md:bottom-6 lg:bottom-6 left-6 flex items-center gap-3 z-20">
        <img
          src={user.profilePic}
          alt={user.userName}
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <span className="text-white font-semibold text-lg">{user.userName}</span>
      </div>

      {/* Bottom Right Icons */}
      <div className="absolute bottom-20 md:bottom-6 lg:bottom-6 right-6 flex gap-4 z-20 text-white text-xl">
        <FaHeart className="cursor-pointer hover:scale-110 transition" />
        <FaPaperPlane className="cursor-pointer hover:scale-110 transition" />
      </div>

      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl z-20"
        onClick={prevStory}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl z-20"
        onClick={nextStory}
      >
        <FaArrowRight />
      </button>

      {/* Close on outside click (optional) */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        style={{ cursor: "zoom-out" }}
      />
    </div>
  );
};

export default StoryModal;
