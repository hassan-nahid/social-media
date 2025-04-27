import React, { useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import { assest } from '../../assets/assest';

const UpdateProfile = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [worksAt, setWorksAt] = useState('');
  const [studiedAt, setStudiedAt] = useState('');
  const [livesIn, setLivesIn] = useState('');
  const [from, setFrom] = useState('');
  const [relationship, setRelationship] = useState('Single');
  const [username, setUsername] = useState('');
  
  const profileBlankImage = assest.blankImage; // Assuming you have a blank profile image in your assets

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      bio,
      worksAt,
      studiedAt,
      livesIn,
      from,
      relationship,
      username,
      profileImage
    });
    // Upload/save logic here
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setProfileImage(file);
    } else {
      alert('Please select a valid image file (jpg, png, jpeg).');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Update Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Profile Image Upload */}
        <div className="relative w-32 h-32 mx-auto">
          <img
            src={profileImage ? URL.createObjectURL(profileImage) : profileBlankImage}
            alt="Profile Preview"
            className="w-32 h-32 rounded-full object-cover border-4 border-neutral-700 shadow-lg"
          />
          {/* Overlay for "Change Photo" */}
          <label htmlFor="profileImage" className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 flex items-center justify-center cursor-pointer transition-all duration-300">
            <FiCamera className="text-white text-2xl" />
          </label>
          <input
            type="file"
            id="profileImage"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        {/* Name */}
        <div>
          <label className="text-white block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 text-white outline-none"
            placeholder="Enter your full name"
          />
        </div>

        {/* Username */}
        <div>
          <label className="text-white block mb-1">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 text-white outline-none"
            placeholder="Enter your username"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="text-white block mb-1">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 text-white outline-none"
            placeholder="Write something about yourself..."
            rows="3"
          />
        </div>

        {/* Works At */}
        <div>
          <label className="text-white block mb-1">Works at</label>
          <input
            type="text"
            value={worksAt}
            onChange={(e) => setWorksAt(e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 text-white outline-none"
            placeholder="Where do you work?"
          />
        </div>

        {/* Studied At */}
        <div>
          <label className="text-white block mb-1">Studied at</label>
          <input
            type="text"
            value={studiedAt}
            onChange={(e) => setStudiedAt(e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 text-white outline-none"
            placeholder="Where did you study?"
          />
        </div>

        {/* Lives In */}
        <div>
          <label className="text-white block mb-1">Lives in</label>
          <input
            type="text"
            value={livesIn}
            onChange={(e) => setLivesIn(e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 text-white outline-none"
            placeholder="Your current city"
          />
        </div>

        {/* From */}
        <div>
          <label className="text-white block mb-1">From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 text-white outline-none"
            placeholder="Your hometown"
          />
        </div>

        {/* Relationship Status */}
        <div>
          <label className="text-white block mb-1">Relationship Status</label>
          <select
            value={relationship}
            onChange={(e) => setRelationship(e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 text-white outline-none"
          >
            <option value="Single">Single</option>
            <option value="In a Relationship">In a Relationship</option>
            <option value="Married">Married</option>
            <option value="Complicated">It's Complicated</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="yellow-color hover:bg-yellow-500 text-black font-semibold py-2 rounded transition-all duration-300 active:scale-95"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
