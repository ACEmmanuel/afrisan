import React, {useEffect, useRef, useState} from "react";
import { useParams } from "react-router-dom";
import { feature } from "../data";

// I know the code is an eyesore, and i don't know what the fuck is going on 

const ProductPage = () => {

  const { id } = useParams();
  console.log('Product ID from URL:', id);
  const product = feature.find(item => item?.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { img, name, rate } = product;

  return (
    <>
    <div className="max-w-screen-xl mx-auto p-4 md:px-10 font-IBM ">
      
      {/* Container for images, details, and delivery */}
      <div className="flex flex-col gap-10 lg:flex-row">
        
        {/* Image section */}
        <div className="w-full max-w-[24rem] lg:w-1/3 mx-auto">
          <div className="size-[18rem] sm:size-[18rem] lg:size-[18rem] bg-gray-200 mx-auto" >
            <img className="size-full object-cover" src={img}/>
          </div>
          <div className="flex justify-between mt-5" >
            <div className="small-box"></div>
            <div className="small-box"></div>
            <div className="small-box"></div>
            <div className="small-box"></div>
          </div>
        </div>

        {/* Details section */}
        <div className="w-full max-w-xs lg:w-1/3 mt-4 md:mt-0 mx-auto" >
          <h1 className="text-[1.25rem] font-bold">{name}</h1>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
            <span className="ml-2 text-gray-600 text-sm">4.5/5</span>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-lg font-bold">$260</span>
            <span className="text-gray-400 ml-2 line-through text-lg">$300</span>
          </div>
          <p className="mt-2 text-gray-600 text-sm leading-[1.2]">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="mt-4">
            <h3 className="font-semibold text-sm border-t pt-4">Select Colors</h3>
            <div className="flex items-center mt-2">
              <div className="w-6 h-6 rounded-full bg-gray-800"></div>
              <div className="w-6 h-6 rounded-full bg-green-700 ml-2"></div>
              <div className="w-6 h-6 rounded-full bg-blue-700 ml-2"></div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-sm border-t pt-4">Choose Size</h3>
            <div className="flex items-center mt-2 space-x-2">
              <button className="px-3 py-1 border border-gray-300 text-sm rounded-full">Small</button>
              <button className="px-3 py-1 border border-gray-300 text-sm rounded-full">Medium</button>
              <button className="px-3 py-1 border border-gray-300 bg-black text-white text-sm rounded-full">Large</button>
              <button className="px-3 py-1 border border-gray-300 text-sm rounded-full">XLarge</button>
            </div>
          </div>
          <div className="flex items-center gap-5 mt-4 text-sm w-fit">
            <button className="bg-gray-200 hover:bg-gray-400 px-3 rounded-l-full text-xl" >-</button>
            <span className="text-sm">1</span>
            <button className="bg-gray-200 hover:bg-gray-400 px-3 rounded-r-full text-xl">+</button>
          </div>
         
          <button className="w-fit mt-4 px-10 py-3 bg-gray-900 text-white text-sm hover:bg-gray-800 rounded-full" 
          >
            Add to Cart 
          </button>
        </div>

        {/* Delivery & Returns Section */}
        <div className="w-full max-w-xs lg:w-1/3 bg-gray-100 rounded mt-4 md:mt-0 mx-auto" >
          <div className="">
            <h3 className="font-bold text-[1.25rem]">DELIVERY & RETURNS</h3>
            <p className="text-xs text-gray-500">Free delivery on thousands of products in Lagos, Ibadan & Abuja</p>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-sm upper">Choose your location</h4>
            <select className="w-full p-2 border border-gray-300 mt-2 outline-none text-sm">
              <option>Lagos</option>
              <option>Lagos</option>
              <option>Lagos</option>
            </select>
            <select className="w-full p-2 border border-gray-300 mt-2 outline-none text-sm">
              <option>LEKKI-AJAH (SANGOTEDO)</option>
            </select>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-sm">Pickup Station</h4>
            <p className="text-xs text-gray-500">Delivery Fees ₦ 600</p>
            <p className="text-xs text-gray-500">Arriving at pickup station between 13 August & 14 August when you order within next 14 mins</p>
            <h4 className="font-semibold text-sm mt-4">Door Delivery</h4>
            <p className="text-xs text-gray-500">Delivery Fees ₦ 990</p>
            <p className="text-xs text-gray-500">Ready for delivery between 13 August & 14 August when you order within next 14 mins</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductPage;
