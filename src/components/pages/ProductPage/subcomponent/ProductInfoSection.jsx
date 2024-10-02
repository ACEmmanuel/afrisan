import React from 'react';

// COMPONENTS    
import ColorSelector from './ColorSelector';
import CartButton from '../../Cart/subcomponents/CartButton';
import Loading from '../../../common/Loading';
import Stars from '../../../common/Stars';

const ProductInfoSection = ({ item, addToCart, isLoading }) => {
  const { name, price, description } = item;

  return (
    <div className="w-auto min-w-[18rem] md:min-w-[25rem] mx-auto px-3">
      {/* Product Name */}
      <h1 className="text-2xl lg:text-3xl font-bold break-all">{name}</h1>

      {/* Rating Stars */}
      <div className="flex items-center mt-2">
        <Stars size={5} />
        <span className="ml-2 text-gray-600 text-[12px] font-bold">(4.5/5)</span>
      </div>

      {/* Price */}
      <div className="flex items-center mt-2 text-xl">
        <span className="font-bold">${price}</span>
        <span className="text-gray-600 ml-2 line-through">$300</span>
      </div>

      {/* Color Selector */}
      <ColorSelector />

      {/* Size Selection */}
      <div className="mt-2 text-sm lg:text-16px">
        <h3 className="font-bold border-t border-[#F1F1F2] pt-4 text-[0.9375rem] uppercase">Choose Size</h3>
        <div className="flex flex-wrap items-center justify-start mt-2 gap-2 w-fit">
          <button className="px-[0.8rem] py-[0.15rem] hover:bg-[#efefef] border border-gray-300 rounded-full text-[14px]">Small</button>
          <button className="px-[0.8rem] py-[0.15rem] hover:bg-[#efefef] border border-gray-300 rounded-full text-[14px]">Medium</button>
          <button className="px-[0.8rem] py-[0.15rem] hover:bg-[#efefef] border border-gray-300 text-black rounded-full text-[14px]">Large</button>
          <button className="px-[0.8rem] py-[0.15rem] hover:bg-[#efefef] border border-gray-300 rounded-full text-[14px]">XLarge</button>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4 text-sm lg:text-16px border-t border-[#F1F1F2]">
        <h3 className="font-bold pt-4 text-[0.9375rem] uppercase">Description</h3>
        <p className="text-[0.9375rem] mt-1 text-wrap break-all">{description}</p>
      </div>

      {/* Details */}
      <div className="mt-4 text-sm lg:text-16px">
        <h3 className="font-bold pt-4 text-[0.9375rem] uppercase">details</h3>
        <p className="text-[0.9375rem] mt-1 break-all">The details will be here </p>
      </div>

      {/* Add to Cart Button */}
      <div onClick={addToCart}>
        <CartButton value={isLoading ? <Loading /> : 'Add to Cart'} disabled={isLoading} isloading={isLoading} />
      </div>
    </div>
  );
};

export default ProductInfoSection;
