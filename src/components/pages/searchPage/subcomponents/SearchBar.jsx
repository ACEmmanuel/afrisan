import React, { useState, useRef } from 'react';
//This header belongs to the search page, i know it looks bad please bear with me


// API call
import { fetchName } from '../../../../api/api';

const SearchBar = ({setSearchResults, setError}) => {
  
  const inputRef = useRef(null);

  const clearInput = () => {
    inputRef.current.value = '';
    setSearchResults([]);
  }
  
  const terms = async (e) => {
    const value = e.target.value;
    // setSearch(value);

    if (value) {
        try {
          // Fetch the products using the search term
          const products = await fetchName(value);
            
          // Set the products returned from fetchName (with id, name, price, description, image)
          setSearchResults(products);
          setError(''); // Clear error if successful
        } catch (error) {
        setSearchResults([]); // Clear the page if there's an error
        setError('The product you are looking for does not exist');
        }
        } else {
        setSearchResults([]); // Clear results if the search is empty
        setError(''); // Clear error if the search input is empty
        }
      };

  return (
    <>
    
      <div className="relative flex justify-center items-center mt-2 font-DM w-full">
        <input
          type="text"
          onChange={terms}
          placeholder="Search products, brands and categories"
          className="pl-6 pr-16 w-[95%] font-medium rounded-full bg-white text-gray-700 cursor-text text-[14px] py-[0.9rem] shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-gray-400 truncate"
          ref={inputRef}
        />

        
          <svg class="w-6 h-6 text-gray-800 absolute right-[1rem] md:right-[1.3rem] lg:right-[2rem] cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" 
          onClick={clearInput}
          >
            <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
          </svg>
        

      </div>
        
    </>
  );
};

export default SearchBar;
