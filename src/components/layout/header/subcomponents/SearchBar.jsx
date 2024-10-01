import React, {useState, useRef} from 'react'

import { fetchName } from '../../../../api/api'

import SearchArea from './SearchArea';


const SearchBar = () => {

    // Tablet and PC Screen States
    const [searchResults, setSearchResults] = useState([]);  // Store fetched products
    const [error, setError] = useState('');  // Store error messages

    const inputRef = useRef(null);

    const clearInput = () => {
      inputRef.current.value = '';
      setSearchResults([]);
    }


    const searchingForProducts = async(e) =>{

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
           
    }

  return (

    <>
        <div className= {`items-center justify-center w-full p-3 hidden md:flex`} >
        <div className="relative flex w-full max-w-[95%]">

          {/* SVG Cart Icon */}
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

          {/* Search Text Input Section*/}
          <div className='relative w-full cursor-pointer'>
            
            {/* Search Icon */}
            <svg class="w-6 h-6 text-gray-300 absolute top-[0.8rem] left-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>

            {/*Text Input */}
            <input className={`hidden md:flex pl-14 pr-[4rem] w-full rounded-full truncate text-gray-700 cursor-text text-[16px] leading-5 tracking-tight py-[1rem] outline-none`} placeholder='Search products, brands and categories' onChange={searchingForProducts} ref={inputRef} />

            <SearchArea searchResults={searchResults} error={error} />
            
            {/* Cancel button */}
            <span className={`absolute top-3 right-4`} onClick={clearInput}>
              <svg class="w-7 h-7 text-gray-900 hover:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
              </svg>
            </span>

          </div>
        </div>
      </div>

       

        {/* text-gray-400 */}
    </>

  )
}

export default SearchBar