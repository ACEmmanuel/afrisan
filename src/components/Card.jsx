import React from 'react'

const Card = ({title, image, rate}) => {
  return (
    <>
      <div className='hover:shadow-lg rounded-[20px] h-auto w-auto p-3 border bg-white'>

        <div className='bg-[#F0EEED] w-full h-[10rem] rounded-[20px] mx-auto'>
        {/* w-[198px] h-[200px] lg:w-[295px] lg:h-[298px] || lg:w-[180px] lg:h-[180px] || w-[160px] h-[160px] lg:w-[160px] lg:h-[160px]*/}
         
          <img src={image} className='w-full h-full object-cover rounded-[20px] '/>

        </div>

        <div className='product-container'>

          {/* Product Name */}
          <p className='title'>{title}</p>


          {/* Rating */}
          <div className='rate-container'>

            {/* stars */}
            <span className='star'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC633" width="20px" height="20px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC633" width="20px" height="20px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC633" width="20px" height="20px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC633" width="20px" height="20px">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFC633" width="20px" height="20px">
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