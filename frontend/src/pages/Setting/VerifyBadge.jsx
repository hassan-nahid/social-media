import { useState, useEffect } from 'react';
import useUser from '../../hooks/useUser';

const VerifyBadge = () => {
  const [file, setFile] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [fileError, setFileError] = useState('');
  const { user } = useUser();

  useEffect(() => {
    // Set Full Name and Email from user if available
    if (user) {
      setFullName(user.displayName || '');
      setEmail(user.email || '');
    }
  }, [user]);

  // Handle file upload and validation
  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];

    if (uploadedFile) {
      const fileTypes = ['image/jpeg', 'image/png', 'application/pdf'];

      if (!fileTypes.includes(uploadedFile.type)) {
        setFileError('Please upload a valid image (jpg, png) or a PDF document.');
        setFile(null);  // Reset file if it's invalid
        return;
      }

      if (uploadedFile.size > 5000000) { // 5MB max size
        setFileError('File size must be less than 5MB.');
        setFile(null);  // Reset file if it's too large
        return;
      }

      setFileError('');
      setFile(uploadedFile);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file || !fullName || !email) {
      setMessage('Please fill out all fields and upload a valid document.');
      return;
    }

    // Handle submission logic here (send data to server, etc.)
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('File:', file);

    // Reset fields after submission
    setFullName('');
    setEmail('');
    setFile(null);
    setMessage('Badge verification submitted successfully!');
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-6">Verify Badge</h1>
      {message && <div className="text-yellow-400 mb-4">{message}</div>}
      {fileError && <div className="text-red-500 mb-4">{fileError}</div>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Full Name */}
        <div>
          <label className="text-white block mb-1">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 text-white outline-none"
            placeholder="Enter your full name"
            disabled
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-white block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-neutral-700 text-white outline-none"
            placeholder="Enter your email"
            disabled
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="text-white block mb-1">Upload ID or Certificate</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 rounded bg-neutral-700 text-white outline-none cursor-pointer"
          />
          <p className="text-sm text-neutral-400 mt-2">Accepted file types: .jpg, .png, .pdf. Max size: 5MB</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="yellow-color hover:bg-yellow-500 text-black font-semibold py-2 rounded transition-all duration-300 active:scale-95"
        >
          Submit Verification
        </button>
      </form>
    </div>
  );
};

export default VerifyBadge;
