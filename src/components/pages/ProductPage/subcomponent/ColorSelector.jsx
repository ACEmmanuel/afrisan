import React, { useState } from 'react';

const ColorSelector = () => {
  // State to keep track of the selected color
  const [selectedColor, setSelectedColor] = useState('');

//  Function to handle color selection
  const selectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
    <div className="mt-4">
      <h3 className="font-semibold text-[16px] border-t pt-4">Select Colors</h3>
      <div className="flex items-center mt-2">
        <div 
          className={`w-6 h-6 rounded-full bg-gray-800 cursor-pointer ${selectedColor === 'gray' ? 'ring-2 ring-gray-800' : ''}`} 
          onClick={() => selectColor('gray')}
        ></div>
        <div 
          className={`w-6 h-6 rounded-full bg-green-700 ml-2 cursor-pointer ${selectedColor === 'green' ? 'ring-2 ring-green-700' : ''}`} 
          onClick={() => selectColor('green')}
        ></div>
        <div 
          className={`w-6 h-6 rounded-full bg-blue-700 ml-2 cursor-pointer ${selectedColor === 'blue' ? 'ring-2 ring-blue-700' : ''}`} 
          onClick={() => selectColor('blue')}
        ></div>
      </div>
    </div>
    </>
  );
};

export default ColorSelector;
