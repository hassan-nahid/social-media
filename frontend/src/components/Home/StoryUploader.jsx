import { useState, useRef } from 'react';

const StoryUploader = ({ onUpload }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileSelect = () => {
    fileInputRef.current.click(); // Trigger hidden input
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      setIsOpen(false);
      setSelectedFile(null);
      setPreview(null);
    } else {
      alert("Please select an image first!");
    }
  };

  const handleClose = () => {
    setIsOpen(false)
    setSelectedFile(null);
    setPreview(null);
  }

  return (
    <>
      {/* Open Modal Button */}
      <div
        onClick={() => setIsOpen(true)}
        className="border-[var(--yellow-color)] border-2 rounded-xl w-24 h-24 flex items-center justify-center cursor-pointer bg-black"
      >
        <span className="text-xl font-bold text-[var(--yellow-color)]">+</span>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="gray-color rounded-xl p-6 w-80 relative">
            <h2 className="text-lg font-semibold mb-4 text-white">Upload Your Story</h2>

            {/* Preview */}
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover rounded-lg mb-4"
              />
            ) : (
              <div className="w-full h-40 gary-color border-2 rounded-lg mb-4 flex items-center justify-center">
                No image selected
              </div>
            )}

            {/* Styled Select Button */}
            <button
              onClick={handleFileSelect}
              className="w-full mb-4 py-2 yellow-color hover:bg-yellow-400 rounded-md font-medium text-black"
            >
              Choose Image
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Action Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                className="px-4 py-2 bg-yellow-300 text-black font-semibold rounded-md hover:bg-yellow-500"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoryUploader;
