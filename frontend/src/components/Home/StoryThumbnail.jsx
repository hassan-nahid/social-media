import { assest } from "../../assets/assest";
const StoryThumbnail = ({ user, onClick }) => {
    return (
      <div className="border-[var(--yellow-color)] p-1 border-2 rounded-xl cursor-pointer" onClick={onClick}>
        <img className="w-20 h-20 rounded-xl" src={user.profilePic || assest.blankImage} alt={user.userName} />
      </div>
    );
  };
  
  export default StoryThumbnail;
  