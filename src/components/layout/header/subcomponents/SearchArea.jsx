import React from 'react'
import { Link } from 'react-router-dom'

const SearchArea = ({searchResults}) => {


  return (
    <>
        <div className="mx-auto absolute shadow-lg bg-white hidden md:flex mt-[0.3rem] w-full rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-3xl">
            <div>
                {
                searchResults.length > 0 ? (

                    searchResults.map((item) => 
                    <Link to={`/product/${item.id}`} key={item.id} className="text-black p-2 flex">
                        <h3 className='ml-2'>{item.name}</h3>
                    </Link>
                )
                ) : (
                    null
                )
                }
            </div>
        </div>
    </>
  )
}

export default SearchArea;