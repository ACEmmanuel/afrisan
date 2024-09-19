import React from 'react';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {

    const navigate = useNavigate();

    const back = () => {
        navigate(-1);
    }
    

  return (
    <>
        <div className='flex mx-auto w-full border justify-between py-4 px-6'>
            <span className='text-lg'>Afrisan</span>
            <span onClick={back}>
                <svg class="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
                </svg>
            </span>
        </div>

        <div className="flex justify-center items-center mt-2">
            <input
                type="text"
                placeholder="Search products, brands and categories"
                className={`pl-12 pr-4 w-[95%] rounded-full bg-white text-gray-700 cursor-text text-[16px] leading-5 tracking-tight py-[0.8rem] shadow-sm outline outline-1 outline-gray-300 focus:outline-2 focus:outline-gray-400`}
 
            />
        </div>

    </>
  )
}

export default SearchPage