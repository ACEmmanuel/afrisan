import React from 'react'
import { Link } from 'react-router-dom'

const SearchArea = ({searchResults, error}) => {
  return (
    <>
        <div className="mt-2 container mx-auto p-2">

          {
            searchResults.length > 0 ? (

                searchResults.map((item) => 
                <Link to={`/product/${item.id}`} key={item.id} className="card mt-10 flex">
                    {/* <div> */}
                        <img src={item.image} alt={item.name} className="size-[7rem] md:size-40 object-cover" />
                        <div className=' ml-5'>
                            <h3>{item.name}</h3>
                            <p>Price: {item.price}</p>
                            <p>{item.description}</p>
                        </div>
                    {/* </div> */}
                </Link>
            )
            ) : (
                <p className='text-red-600 font-bold text-center mt-10'>{error || 'No products found.'}</p>
            )
          }  

        </div>
    </>
  )
}

export default SearchArea