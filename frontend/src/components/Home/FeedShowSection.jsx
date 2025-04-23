import React, { useState } from "react";
import { assest } from "../../assets/assest";
import FeedHeader from "./FeedHeader";
import FeedBody from "./FeedBody";
import FeedFooter from "./FeedFooter";

const FeedShowSection = () => {
  const posts = [
    {
      id: 1,
      profileImage: assest.profile2,
      username: "george",
      name: "George Jose",
      time: "1 hour ago",
      text: "Lorem ipsum dolor sit amet consectetur. Porttitor.",
      image: assest.postImage,
      profile: assest.profile,
    },
    {
      id: 2,
      profileImage: assest.profile2,
      username: "arshanto",
      name: "Arshanto Dev",
      time: "2 hours ago",
      text: "Just deployed my new React project!",
      image: assest.postImage,
      profile: assest.profile,
    }
  ];

  // Define the state outside of the map function
  const [postState, setPostState] = useState(
    posts.map(() => ({ love: false, showComment: false }))
  );

  const handleLoveToggle = (index) => {
    const updatedState = [...postState];
    updatedState[index].love = !updatedState[index].love;
    setPostState(updatedState);
  };

  const handleCommentToggle = (index) => {
    const updatedState = [...postState];
    updatedState[index].showComment = !updatedState[index].showComment;
    setPostState(updatedState);
  };

  return (
    <div className="m-4 space-y-4">
      {posts.length === 0 ? (
        <p className="text-white text-center text-lg">No posts yet</p>
      ) : (
        posts.map((post, index) => (
          <section
            key={post.id}
            className="rounded-[15px] bg-[var(--gray-color)] p-8 md:p-12"
          >
            <div className="flex flex-col gap-3">
              <FeedHeader
                profileImage={post.profileImage}
                username={post.username}
                name={post.name}
                time={post.time}
              />
              <FeedBody text={post.text} image={post.image} />
              <FeedFooter
                love={postState[index].love}
                changeLove={() => handleLoveToggle(index)}
                handleComment={() => handleCommentToggle(index)}
                showComment={postState[index].showComment}
                profile={post.profile}
              />
            </div>
          </section>
        ))
      )}
    </div>
  );
};

export default FeedShowSection;
