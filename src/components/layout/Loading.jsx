import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin">
        {/* <span className='absolute animate-pulse'>afrisan</span> */}
      </div>
    </div>
  );
};

export default Loading;
