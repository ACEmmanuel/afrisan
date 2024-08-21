import React, { useState } from 'react';

const Counter = () => {
  // State to keep track of the counter value
  const [count, setCount] = useState(1);

  // Function to handle increment
  const increment = () => {
    if (count < 20) { // Ensure count does not exceed 20
      setCount(count + 1);
    }
  };

  // Function to handle decrement
  const decrement = () => {
    if (count > 1) { // Ensure count does not go below 1
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center gap-5 mt-4 text-sm w-fit">
      <button 
        className="bg-gray-200 hover:bg-gray-400 px-3 rounded-l-full text-xl" 
        onClick={decrement}
      >
        -
      </button>
      <span className="text-sm">{count}</span>
      <button 
        className="bg-gray-200 hover:bg-gray-400 px-3 rounded-r-full text-xl" 
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
