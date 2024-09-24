import React, { useState } from 'react';

// API call
import { fetchName } from '../../../../api/api';

const SearchBar = ({setSearchResults}) => {

  const [search, setSearch] = useState('');
  const [error, setError] = useState('');

  const terms = async (e) => {
    const value = e.target.value;
    setSearch(value);

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
    
      <div className="flex justify-center items-center mt-2">
        <input
          type="text"
          onChange={terms}
          placeholder="Search products, brands and categories"
          className="pl-6 pr-4 w-[95%] rounded-full bg-white text-gray-700 cursor-text text-[14px] leading-5 tracking-tight py-[0.7rem] md:py-[0.8rem] shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-gray-400"
        />
      </div>
        
    </>
  );
};

export default SearchBar;
