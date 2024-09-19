import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";




const CartButton = ({value}) => {




  return (
    <>
      
        <button className="w-full mt-6 px-10 py-5 bg-gray-900 text-white hover:bg-gray-800 rounded-full" 
        >
          {value}
        </button>
    </>
  )
}

export default CartButton