import React, {useEffect, useRef, useState} from "react";
import { useParams } from "react-router-dom";
import { feature } from "../../../data";

import Stars from "../../common/Stars";
import Counter from "./Counter";
import ColorSelector from './ColorSelector'; 



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
    
      <section class="py-2 sm:py-2 font-IBM"> 
        <div class="container mx-auto px-4">
            
            <div class="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">

            {/* Section 1 */}
            <div class="lg:col-span-3 lg:row-end-1">
              <div class="lg:flex lg:items-start">

                {/* Big Image */}
                <div class="lg:order-2 lg:ml-5">
                    <div class="size-[18rem] sm:size-[18rem] lg:size-[18rem] mx-auto overflow-hidden rounded-lg">
                        <img class="h-full w-full max-w-full object-cover bg-no-repeat" src={img} alt="water man" />
                    </div>
                </div>
                
                {/* Smaller Images */}
                <div class="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0 flex justify-center lg:justify-start ">
                    <div class="flex flex-row items-start lg:flex-col">
                      <button type="button" class=" aspect-square mb-3 h-20 overflow-hidden rounded-lg text-center mx-3">
                          <img class="h-full w-full object-cover" src={img} alt="" />
                      </button>
                      <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg  text-center mx-3">
                          <img class="h-full w-full object-cover" src={img} alt="" />
                      </button>
                      <button type="button" class="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg text-center mx-3">
                          <img class="h-full w-full object-cover" src={img} alt="" />
                      </button>
                    </div>
                </div>
              </div>
            </div>


            {/* Section 2 */}
            <div class="lg:col-span-4 lg:row-span-2 lg:row-end-2">

                <h1 className="text-2xl lg:text-3xl font-bold">{name}</h1>
                <div className="flex items-center mt-2">
                    <Stars />
                    <span className="ml-2 text-gray-600 text-sm">4.5/5</span>
                </div>

                <div className="flex items-center mt-2 text-xl">
                    <span className="font-bold">$260</span>
                    <span className="text-gray-600 ml-2 line-through">$300</span>
                </div>

                <p className="mt-2 text-gray-600 text-16px leading-[1.2]">
                    This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                </p>

                <ColorSelector />

                <div className="mt-4 text-16px">
                    <h3 className="font-semibold border-t pt-4">Choose Size</h3>
                    <div className="flex items-center mt-2 space-x-2">
                    <button className="px-3 py-1 border border-gray-300 rounded-full">Small</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-full">Medium</button>
                    <button className="px-3 py-1 border border-gray-300 text-black rounded-full">Large</button>
                    <button className="px-3 py-1 border border-gray-300 rounded-full">XLarge</button>
                    </div>
                </div>
                
                <Counter />
                
                
                <button className="w-fit mt-4 px-10 py-3 bg-gray-900 text-white text-sm hover:bg-gray-800 rounded-full" 
                >
                    Add to Cart 
                </button>
                </div>
            </div>


            {/* Section 3 */}
            <div class="lg:col-span-3">
                <div class="border-b border-gray-300">
                <nav class="flex gap-4">
                    <a href="#" title="" class="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>

                    <a href="#" title="" class="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                    Reviews
                    <span class="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
                    </a>
                </nav>
                </div>

                <div class="mt-8 flow-root sm:mt-12">
                <h1 class="text-16px font-bold">Delivered To Your Door</h1>
                <p class="mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
                <h1 class="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
                <p class="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
                <p class="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
                </div>
            </div>
            
        </div>
    </section>

    </>
  );
};

export default ProductPage;



{/* <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}