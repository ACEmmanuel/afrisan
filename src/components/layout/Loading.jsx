import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[40vh]">
      <div className="w-16 h-16 border-4 border-t-4 border-t-blue-600 border-blue-200 border-solid rounded-[50%] animate-spin">
        {/* <span className='absolute animate-pulse'>afrisan</span> */}
      </div>
    </div>
  );
};

export default Loading;
