import React from 'react'
import { Link } from 'react-router-dom';

import Stars from './Stars';

const Card = ({title, image, rate}) => {
  return (
    <>
      <div className='card-container'>

        <div className='h-[55%] mx-auto'>
         
          <img src={image} className='object-cover w-full h-full'/>

        </div>

        <div className='product-container'>

          {/* Product Name */}
          <p className='title'>{title}</p>


          {/* Price section */}
          <div className='price-container'>
            <p className='price'>$125</p>
            <p className='price discount'>$235</p>
          </div>

        
          {/* Rating */}
          <div className='rate-container'>

            {/* stars */}
            <span className='star'>
              <Stars />
            </span>

            <p className='rate-score'>{rate}</p> 

          </div>
        

        <p className='percentage'>30%</p>
        </div>


      </div>

      
    </>
  )
}

export default Card;
    











{/*bg-[#F0EEED]*/}