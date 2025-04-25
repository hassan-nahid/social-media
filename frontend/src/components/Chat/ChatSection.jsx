import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

const ChatSection = () => {
    const [toast, setToast] = useState(false);
  
      const handleToast = () => {
          setToast(true);
          setTimeout(() => {
              setToast(false)
          }, 2000);
      };
  
  return (
    <section>
      <ChatHeader toast={toast} onToast={handleToast} />
      <ChatBody/>
      <ChatFooter toast={toast} onToast={handleToast} />
    </section>
  )
}

export default ChatSection