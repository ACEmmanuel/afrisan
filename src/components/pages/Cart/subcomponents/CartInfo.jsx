import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity, removeItem } from '../../../../features/cart/cartSlice';

const CartInfo = ({ name, price, image, quantity, track }) => {


  const dispatch = useDispatch();
  const displayQuantity = quantity || 1;

  //Increase Product Quantity
  const add = () => {
    dispatch(increaseItemQuantity({update: 1, theID: track, price: price})) 
  }

  //Decrease Product Quantity
  const remove = () => {
    dispatch(decreaseItemQuantity({update: 1, theID: track, price: price})) 
  }

  return (
    <>
    <div className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
      {/* Image Container */}
      <div className="shrink-0">
        <img
          className="h-24 w-24 max-w-full rounded-lg object-cover"
          src={image}
          alt={name}
        />
      </div>

      {/* Content Container */}
      <div className="relative flex flex-1 flex-col justify-between">
        <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
          {/* Item Details */}
          <div className="pr-8 sm:pr-5">
            <p className="text-base font-semibold text-gray-900">{name}</p>
            <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
          </div>

          {/* Price and Quantity Controls */}
          <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
            <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
              {price}
            </p>

            <div className="sm:order-1">
              <div className="mx-auto flex h-8 items-stretch text-gray-600">
                <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white" onClick={remove}>
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  {displayQuantity}
                </div>
                <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white" onClick={add}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Remove Button */}
        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto" onClick={() => dispatch(removeItem(track))}>
          <button
            type="button"
            className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

      </div>
    </div>
    </>
  );
};

export default CartInfo;
