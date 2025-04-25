import React, { useState } from 'react';
import ChatPersonSection from '../../components/Chat/ChatPersonSection';
import ChatSection from '../../components/Chat/ChatSection';

const Message = () => {
  const [activeProfile, setActiveProfile] = useState(null);
  const chatProfiles = [
    { id: 1, name: "John Doe", message: "hey where are you????" },
    { id: 2, name: "Jane Smith", message: "Let's meet tomorrow!" },
    { id: 3, name: "Ali Khan", message: "Got the files, thanks!" },
    { id: 4, name: "Emma Watson", message: "Typing..." },
  ];

  // Determine screen-based visibility
  const isMobile = window.innerWidth < 768;

  return (
    <div className="max-w-[1440px] mx-auto h-[calc(100vh-65px)] flex gap-5 md:flex-row flex-col relative">
      {/* Chat Person Section */}
      <div
        className={`md:w-[30%] w-full h-full rounded-xl md:block ${
          activeProfile && isMobile ? 'hidden' : 'block'
        }`}
      >
        <ChatPersonSection
          activeProfile={activeProfile}
          setActiveProfile={setActiveProfile}
          chatProfiles={chatProfiles}
        />
      </div>

      {/* Chat Section */}
      <div
        className={`md:w-[70%] w-full h-full rounded-xl bg-blue-400 md:block ${
          activeProfile && isMobile ? 'block' : 'hidden'
        }`}
      >
        <ChatSection
          activeProfile={activeProfile}
          onBack={() => setActiveProfile(null)}
        />
      </div>
    </div>
  );
};

export default Message;
