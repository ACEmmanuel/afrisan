import React from "react";

const SearchBar = ({size, width, text}) => {
  return (
    <>
      <div className= {`flex items-center justify-center w-full p-2 ${size}`} >
        <div className="relative flex w-full" style={{ maxWidth: width }}>
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m1.29-5.16A7.5 7.5 0 1011.5 19 7.5 7.5 0 0018 12.5z"
              ></path>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search products, brands and categories"
            className={`pl-12 pr-4 py-4 w-full border rounded-full text-gray-700 focus:outline-none focus:border-gray-400 ${text}`}
          />
        </div>
      </div>
    </>
  );
};


  

export default SearchBar;
