import React from 'react'
import { useNavigate } from 'react-router-dom';


const SearchHeader = () => {

    const navigate = useNavigate();
    
    const back = () => {
        navigate(-1);
    }
    
  return (
    <>
        <div className='flex mx-auto w-full border justify-between py-4 px-6 font-DM'>

            <span onClick={back}>
                <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                </svg>
            </span>
            <span className='text-[1.25rem] mr-[40%] font-bold cursor-pointer' onClick={()=> navigate('/')}>Afrisan</span>

        </div>
    </>
  )
}

export default SearchHeader