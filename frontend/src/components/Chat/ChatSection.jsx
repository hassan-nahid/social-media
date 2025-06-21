import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

const ChatSection = ({ activeProfile, onBack }) => {
  const [toast, setToast] = useState(false);

  const handleToast = () => {
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  if (!activeProfile) {
    return (
      <div className="h-full flex items-center justify-center text-white text-xl">
        Select a conversation to start chatting...
      </div>
    );
  }

  return (
    <section>
      <ChatHeader toast={toast} onToast={handleToast} onBack={onBack} /> {/* 👈 added onBack */}
      <ChatBody />
      <ChatFooter toast={toast} onToast={handleToast} />
    </section>
  );
};

export default ChatSection;
