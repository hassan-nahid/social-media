import React from "react";

const FeedBody = ({ text, image }) => {
    return (
        <>
            <p className="text-[var(--text-gray)] mt-3">{text}</p>
            <div>
                <img
                    src={image}
                    alt="post"
                    className="w-full h-auto rounded-[15px]"
                />
            </div>
        </>
    );
};

export default FeedBody;
