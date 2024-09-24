import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemFromData } from '../../../api/api';
import Stars from "../../common/Stars";
import Counter from "./Counter";
import ColorSelector from './ColorSelector';
import CartButton from "../Cart/subcomponents/CartButton";
import { addItem } from "../../../features/cart/cartSlice"; 
import { useDispatch, useSelector } from "react-redux";
import Header from "../../layout/Header";

const ProductPage = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // const [showPopup, setShowPopup] = useState(false);
  const { id } = useParams();


  //Redux tools
  const dispatch = useDispatch();
  const cart = useSelector((state)=> state.cart);
  


  //stimulate backend item fetching
  useEffect(() => {
    if (!id) return;
    const getItem = async () => {
      try {
        const product = await fetchItemFromData(id);
        setItem(product);
      } catch (error) {
        console.log('Error fetching product');
      }
    }
    getItem();
  }, [id]);



  const addToCart = () => {
    if (!item || !item.id) return;
  
    // Dispatch Redux action to update the global state
    dispatch(addItem(item));
    
    // Optionally set UI states for loading and pop-up
    setIsLoading(false);
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 700);
  };
  
  

  

  const { img, name, description, price } = item;

  // Check if product is available
  if (!item) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Header />

      {/* Pop-up under the button */}
      {/* {showPopup && (
                  <div className="fixed left-0 top-0 bg-green-200 p-2 rounded shadow-md z-[999]">
                    Item added to cart!
                  </div>
                )} 
                 */}
      <section className="py-2 sm:py-2 font-IBM"> 
        <div className="container mx-auto px-4">
          <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">

            {/* Section 1 */}
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="lg:flex lg:items-start">
                <div className="lg:order-2 lg:ml-5">
                  <div className="size-[18rem] sm:size-[18rem] lg:size-[18rem] mx-auto overflow-hidden rounded-lg">
                    <img className="h-full w-full max-w-full object-cover bg-no-repeat" src={img} alt="product image" />
                  </div>
                </div>

                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0 flex justify-center lg:justify-start">
                  <div className="flex flex-row items-start lg:flex-col">
                    <button type="button" className="aspect-square mb-3 h-20 overflow-hidden rounded-lg text-center mx-3">
                      <img className="h-full w-full object-cover" src={img} alt="" />
                    </button>
                    <button type="button" className="aspect-square mb-3 h-20 overflow-hidden rounded-lg text-center mx-3">
                      <img className="h-full w-full object-cover" src={img} alt="" />
                    </button>
                    <button type="button" className="aspect-square mb-3 h-20 overflow-hidden rounded-lg text-center mx-3">
                      <img className="h-full w-full object-cover" src={img} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="lg:col-span-4 lg:row-span-2 lg:row-end-2">
              <h1 className="text-2xl lg:text-3xl font-bold">{name}</h1>
              <div className="flex items-center mt-2">
                <Stars />
                <span className="ml-2 text-gray-600 text-sm">4.5/5</span>
              </div>

              <div className="flex items-center mt-2 text-xl">
                <span className="font-bold">${price}</span>
                <span className="text-gray-600 ml-2 line-through">$300</span>
              </div>

              <p className="mt-2 text-gray-600 text-16px leading-[1.2]">
                {description}
              </p>

              <ColorSelector />
              <div className="mt-4 text-sm lg:text-16px">
                <h3 className="font-semibold border-t pt-4">Choose Size</h3>
                <div className="flex flex-wrap items-center justify-start mt-2 gap-2 w-fit">
                  <button className="px-3 py-1 border border-gray-300 rounded-full">Small</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-full">Medium</button>
                  <button className="px-3 py-1 border border-gray-300 text-black rounded-full">Large</button>
                  <button className="px-3 py-1 border border-gray-300 rounded-full">XLarge</button>
                </div>
              </div>

              <Counter />

              <div className="">
                <div onClick={addToCart}>
                  <CartButton value={isLoading ? 'Loading...' : 'Add to Cart'} disabled={isLoading} />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="lg:col-span-3">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <a href="#" title="" className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"> Description </a>

                  <a href="#" title="" className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600">
                    Reviews
                    <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
                  </a>
                </nav>
              </div>

              <div className="mt-8 flow-root sm:mt-12">
                <h1 className="text-16px font-bold">Delivered To Your Door</h1>
                <p className="mt-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
                <h1 className="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
                <p className="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;







// setTimeout(() => {
      //   setTimeout(() => {
      //     setShowPopup(false); // Hide pop-up after 3 seconds
      //   }, 1000);
      // }, 1000); // Simulate a loading delay
  
      // console.log(cart);