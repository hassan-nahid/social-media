import React from 'react'
import ChatPersonSection from '../../components/Chat/ChatPersonSection'
import ChatSection from '../../components/Chat/ChatSection'

const Message = () => {
  return (
    <div className='max-w-[1440px] mx-auto h-[calc(100vh-65px)] flex gap-5'>
      {/* chat person selcet section */}
      <div className='w-[30%] bg-red-400 rounded-xl'>
        <ChatPersonSection />
      </div>
      {/* chat section  where person chat*/}
      <div className='w-[70%]  rounded-xl'>
        <ChatSection />
      </div>

    </div>
  )
}

export default Message