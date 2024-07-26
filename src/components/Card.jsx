import React from 'react'

const Card = ({title, image, rate}) => {
  return (
    <>
      <div className='hover:shadow-lg border bg-white min-h-[140px] min-w-[90px] max-h-[200px] max-w-[180px] '>

        <div className='h-[50%] mx-auto border'>
         
          <img src={image} className='object-cover w-full h-full '/>

        </div>

        <div className='product-container'>

          {/* Product Name */}
          <p className='title'>{title}</p>


          {/* Rating */}
          <div className='rate-container'>

            {/* stars */}
            <span className='star'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC633" width="17px" height="17px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC633" width="17px" height="17px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC633" width="17px" height="17px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC633" width="17px" height="17px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC633" width="17px" height="17px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>

            </span>

            <span className='rate'>
              <p className='rate-score'>{rate}/</p> 5
            </span>

          </div>


          {/* Price section */}
          <div className='price-container'>

            <p className='price'>$125</p>
            <p className='price discounted'>$235</p>
            <p className='discount'>30%</p>

          </div>
         

        </div>


      </div>

      
    </>
  )
}

export default Card;
    











{/*bg-[#F0EEED]*/}