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

  return (
    <div className="h-[calc(100vh-100px)] overflow-y-auto p-4 space-y-6 scrollbar-hide">

      {posts.length === 0 ? (
        <p className="text-white text-center text-lg">No posts yet</p>
      ) : (
        posts.map((post) => {
          
          const [love, setLove] = useState(false);
          const [showComment, setShowComment] = useState(false);

          return (
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
                  love={love}
                  changeLove={() => setLove((prev) => !prev)}
                  handleComment={() => setShowComment((prev) => !prev)}
                  showComment={showComment}
                  profile={post.profile}
                />
              </div>
            </section>
          );
        })
      )}
    </div>
  );
};

export default FeedShowSection;
