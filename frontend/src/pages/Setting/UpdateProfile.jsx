import { useState, useEffect } from 'react'; // <-- Import useEffect
import { FiCamera } from 'react-icons/fi';
import { assest } from '../../assets/assest';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import useUser from '../../hooks/useUser';
import useUserData from '../../hooks/useUserData';

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
  const [loading, setLoading] = useState(false);

  const { userData, refetch } = useUserData();
  const { user } = useUser();
  const userId = user?.uid;

  const profileBlankImage = assest.blankImage;

  // ✅ Prefill the form when userData is available
 useEffect(() => {
  if (userData) {
    setName(userData.name || '');
    setBio(userData.bio || '');
    setWorksAt(userData.worksAt || '');
    setStudiedAt(userData.studiedAt || '');
    setLivesIn(userData.livesIn || '');
    setFrom(userData.from || '');
    setRelationship(userData.relationship || 'Single');
    setUsername(userData.userName || '');
    setProfileImage(null); // Keep file upload empty initially
  }
}, [userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!profileImage && !userData?.image) return toast.error('Please upload a profile image!');
    if (!name.trim()) return toast.error('Please enter your name!');
    if (!username.trim()) return toast.error('Please enter a username!');
    if (!bio.trim()) return toast.error('Please enter your bio!');
    if (!worksAt.trim()) return toast.error('Please enter where you work!');
    if (!studiedAt.trim()) return toast.error('Please enter where you studied!');
    if (!livesIn.trim()) return toast.error('Please enter your current city!');
    if (!from.trim()) return toast.error('Please enter your hometown!');
    if (!relationship) return toast.error('Please select your relationship status!');

    setLoading(true);

    try {
      let base64Image = userData?.image; // default to existing image
      if (profileImage) {
        base64Image = await convertToBase64(profileImage);
      }

      const payload = {
        uid: userId,
        name,
        bio,
        worksAt,
        studiedAt,
        livesIn,
        from,
        relationship,
        userName: username,
        image: base64Image,
      };

      const { data } = await axios.put(
        `${import.meta.env.VITE_LINK}/api/user/update-profile`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          }
        }
      );

      toast.success('Profile updated successfully!');
      refetch(); // Refresh user data
      console.log(data);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setProfileImage(file);
    } else {
      toast.error('Please select a valid image file (jpg, png, jpeg).');
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Update Profile</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Profile Image Upload */}
        <div className="relative w-32 h-32 mx-auto">
          <img
            src={
              profileImage 
                ? URL.createObjectURL(profileImage) 
                : userData?.image 
                  ? userData.image 
                  : profileBlankImage
            }
            alt="Profile Preview"
            className="w-32 h-32 rounded-full object-cover border-4 border-neutral-700 shadow-lg"
          />
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
          className={`yellow-color hover:bg-yellow-500 text-black font-semibold py-2 rounded transition-all duration-300 active:scale-95 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
