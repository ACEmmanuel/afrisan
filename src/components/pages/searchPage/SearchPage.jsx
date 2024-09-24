import React from 'react';
import { useState, useEffect } from 'react';

// Import Sub-Components
import SearchHeader from './subcomponents/SearchHeader';
import SearchBar from './subcomponents/SearchBar';
import SearchArea from './subcomponents/SearchArea';


const SearchPage = () => {

  const [searchResults, setSearchResults] = useState([]);  // Store fetched products
  const [error, setError] = useState('');  // Store error messages
  
  return (
    <>
        
        <SearchHeader />
        <SearchBar setSearchResults={setSearchResults} setError={setError} />

        <SearchArea searchResults={searchResults} error={error}/>


    </>
  )
}

export default SearchPage