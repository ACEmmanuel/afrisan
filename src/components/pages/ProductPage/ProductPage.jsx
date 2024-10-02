import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemFromData } from '../../../api/api';

// Redux Store
import { addItem } from "../../../features/cart/cartSlice"; 
import { useDispatch, useSelector } from "react-redux";

// Components
import Stars from "../../common/Stars";
import Header from "../../layout/header/Header"; 
import CartButton from "../Cart/subcomponents/CartButton";
import Loading from "../../common/Loading";
import ImageSection from "./subcomponent/ImageSection";
import ProductInfoSection from './subcomponent/ProductInfoSection'; // Import the new component

const ProductPage = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { id } = useParams();

  // Redux tools
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // Simulate backend item fetching
  useEffect(() => {
    if (!id) return;
    const getItem = async () => {
      try {
        const product = await fetchItemFromData(id);
        setItem(product);
      } catch (error) {
        console.log('Error fetching product');
      }
    };
    getItem();
  }, [id]);

  const addToCart = () => {
    if (!item || !item.id) return;
    
    setIsLoading(true);
    
    // Optionally set UI states for loading and pop-up
    setTimeout(() => {
      // Dispatch Redux action to update the global state
      dispatch(addItem(item));
      setIsLoading(false);

      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 1000);

    }, 1000);
  };

  const { img } = item;

  // Check if product is available
  if (!item) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />

      {/* Pop-up for add to cart action the button */}
      {showPopup && (
        <div className="fixed left-0 top-0 bg-green-500 text-white p-2 w-full z-[999] font-DM text-center font-medium flex justify-center gap-3">
          Item added to cart
          <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" />
          </svg>
        </div>
      )}

      <section className="py-2 font-DM mt-5">
        <div className="container mx-auto">

        <div className="flex flex-wrap justify-center gap-y-[3rem]">
          <div className="flex flex-wrap flex-col md:flex-row mt-0 gap-[3rem] lg:gap-[4rem]">

            {/* Section 1 */}
            <ImageSection image={img} />

            {/* Section 2 - Product Info Section */}
            <ProductInfoSection item={item} addToCart={addToCart} isLoading={isLoading} />
            
          </div>

        </div>

        </div>
      </section>
    </>
  );
};

export default ProductPage;
