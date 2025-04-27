import React from "react";
import { twMerge } from 'tailwind-merge';

const FeedBody = ({ text, image, className }) => {
    return (
        <>
            <p className="text-[var(--text-gray)] mt-3">{text}</p>
            <div className={twMerge("mt-3", "overflow-hidden", "rounded-[15px]")}>
                <img
                    src={image}
                    alt="post"
                    className={twMerge(
                        "w-full",
                        "max-h-[400px]", 
                        "object-contain",  
                        className   
                    )}
                />
            </div>
        </>
    );
};

export default FeedBody;
