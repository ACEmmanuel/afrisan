// Skeleton.js
import React from 'react';

const Skeleton = () => {
  return (
    <div className="p-4 border rounded shadow-lg bg-white animate-pulse w-full">
      {/* Title or Header for the box */}
      <div className="h-6 bg-gray-300 rounded w-1/2 animate-pulse mb-4"></div>
      
      {/* Container for product skeletons */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {[...Array(6)].map((_, index) => (  // Display 6 skeletons
          <div key={index} className="flex flex-col p-2 border rounded shadow bg-white"> 
            {/* Skeleton for product image */}
            <div className="h-48 bg-gray-300 rounded animate-pulse"></div>

            {/* Skeleton for product title */}
            <div className="mt-2 h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>

            {/* Skeleton for product rating */}
            <div className="mt-2 h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>

            {/* Optional: Skeleton for price or additional details */}
            <div className="mt-2 h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
