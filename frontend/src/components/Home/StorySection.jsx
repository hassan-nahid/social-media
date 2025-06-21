import { useState } from "react";
import { assest } from "../../assets/assest";
import StoryModal from "./StoryModal";
import StoryThumbnail from "./StoryThumbnail";
import StoryUploader from "./StoryUploader";

const initialStories = [
  {
    userId: 1,
    userName: "John",
    profilePic: assest.FriendSectionProfile,
    stories: [{ id: 1, image: assest.Story1 }, { id: 2, image: assest.Story2 }],
  },
  

  {
    userId: 2,
    userName: "Alice",
    profilePic: assest.FriendSectionProfile,
    stories: [{ id: 3, image: assest.Story3 }],
  },



  // Add more users here to test carousel scrolling
];

const StorySection = () => {
  const [stories, setStories] = useState(initialStories);
  const [openModal, setOpenModal] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const openStory = (userIndex) => {
    setCurrentUserIndex(userIndex);
    setCurrentStoryIndex(0);
    setOpenModal(true);
  };

  const handleUploadStory = (newImage) => {
    const updated = [...stories];
    updated[0].stories.push({
      id: Date.now(),
      image: URL.createObjectURL(newImage),
    });
    setStories(updated);
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 px-4 py-3 w-max snap-x snap-mandatory overflow-x-auto">
        <div className="snap-start">
          <StoryUploader onUpload={handleUploadStory} />
        </div>
        {stories.map((user, index) => (
          <div className="snap-start" key={user.userId}>
            <StoryThumbnail user={user} onClick={() => openStory(index)} />
          </div>
        ))}
      </div>

      {openModal && (
        <StoryModal
          stories={stories}
          userIndex={currentUserIndex}
          storyIndex={currentStoryIndex}
          setUserIndex={setCurrentUserIndex}
          setStoryIndex={setCurrentStoryIndex}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default StorySection;
