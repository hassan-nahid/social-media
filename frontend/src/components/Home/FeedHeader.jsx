import React from "react";
import { assest } from "../../assets/assest";

const FeedHeader = ({ profileImage, username, name, time }) => {
    return (
        <div className="flex gap-3">
            <div className="bg-[#1A1A1A] p-1 rounded-[5px] bg-center">
                <img src={profileImage || assest.profile2 } alt="profile" className="h-[52px] w-[52px]" />
            </div>
            <div>
                <p>@{username || 'arshanto' }</p>
                <div className="flex gap-1 items-center text-md md:text-xl">
                    <h3 className="text-[#FFF]">{name || 'George Jose' }</h3>
                    <h1 className="text-[var(--yellow-color)] text-base"> . {time || '1 hour ago' }</h1>
                </div>
            </div>
        </div>
    );
};

export default FeedHeader;
