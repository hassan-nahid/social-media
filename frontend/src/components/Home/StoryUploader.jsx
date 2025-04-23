const StoryUploader = ({ onUpload }) => {
    const handleChange = (e) => {
      const file = e.target.files[0];
      if (file) onUpload(file);
    };
  
    return (
      <label className="border-yellow-300 border-2 rounded-xl w-24 h-24 flex items-center justify-center cursor-pointer bg-black">
        <span className="text-xl font-bold text-yellow-300">+</span>
        <input type="file" accept="image/*" className="hidden" onChange={handleChange} />
      </label>
    );
  };
  
  export default StoryUploader;
  