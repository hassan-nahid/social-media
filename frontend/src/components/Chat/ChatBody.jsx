import React from 'react';

const ChatBody = () => {
    const messages = [
        { sender: 'friend', text: 'Hello! kemon acho ?' },
        { sender: 'friend', text: 'Basar sobai kemon ache' },
        { sender: 'user', text: 'Valo ache...😎' },
        { sender: 'user', text: 'U..' },
        { sender: 'friend', text: 'Tumi ekhon ki korcho' },
        { sender: 'friend', text: 'Tumi ki Busy' },

    ];

    return (
        <div className="bg-[#1c1c1c] p-4 h-[calc(100vh-220px)] flex flex-col justify-between rounded-b-[15px]">
            <div className="space-y-4 overflow-y-auto pr-2">

                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[60%] px-4 py-2 
                            ${msg.sender === 'user' ? 'bg-[var(--yellow-color)] text-black rounded-2xl rounded-tr-none' : 'bg-white text-black rounded-2xl rounded-tl-none'}
                        `}>
                            <p>{msg.text}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ChatBody;
