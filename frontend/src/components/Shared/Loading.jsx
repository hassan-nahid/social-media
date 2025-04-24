import React from 'react';
import { SyncLoader } from 'react-spinners'; // Import SyncLoader

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <SyncLoader
        color="white" // Customize the color
        margin={10}
        size={20}
      />
    </div>
  );
};

export default Loading;