import { assest } from "../../assets/assest"
import { FaCamera } from "react-icons/fa6";

const ChatPersonProfile = ({ name, message, isActive, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`flex justify-between items-center cursor-pointer p-2 rounded transition-all duration-200 
            ${isActive ? "yellow-color text-black" : "hover:bg-[var(--yellow-color)] hover:text-black"}`}
        >
            <div className="flex items-center gap-4">
                <img className="w-10 h-10 border-2 border-black rounded" src={assest.blankImage} alt="profile" />
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className={`text-lg font-bold ${isActive ? "text-black" : "text-white"}`}>{name}</h1>
                        <div className={` ${isActive ? "bg-black" : "yellow-color"} h-2 w-2 rounded`}></div>
                    </div>
                    <h1 className="mb-1">{message}</h1>
                </div>
            </div>

            <div className={`${isActive ? "text-black" : "text-white"}`}>
                <FaCamera />
            </div>
        </div>
    );
};

export default ChatPersonProfile;
