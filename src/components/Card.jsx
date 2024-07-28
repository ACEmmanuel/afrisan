import React from 'react'

const Card = ({title, image, rate}) => {
  return (
    <>
      <div className='card-container'>

        <div className='h-[55%] md:h-[60%] mx-auto'>
         
          <img src={image} className='object-cover w-full h-full '/>

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


         
         

        </div>

        <p className='percentage'>30%</p>

      </div>

      
    </>
  )
}

export default Card;
    











{/*bg-[#F0EEED]*/}