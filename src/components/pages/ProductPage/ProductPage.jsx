import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchItemFromData } from '../../../api/api';


//Redux Store
import { addItem } from "../../../features/cart/cartSlice"; 
import { useDispatch, useSelector } from "react-redux";


//Components
import Stars from "../../common/Stars";
import Counter from "./subcomponent/Counter";
import ColorSelector from './subcomponent/ColorSelector';
import Header from "../../layout/header/Header"; 
import CartButton from "../Cart/subcomponents/CartButton";
import Loading from "../../common/Loading";


const ProductPage = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
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
  
  

  

  const { img, name, description, price } = item;

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
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
            </svg>
          </div>
      )} 

          
                
      <section className="py-2 font-DM mt-5"> 
        <div className="container mx-auto px-10">
          <div className="flex flex-wrap flex-col md:flex-row mt-0">

          
            {/* Section 1 */}
            <div className="w-fit mx-auto">

              {/*Main Image Section */}
              <div className="flex flex-col ">
                  <div className=" aspect-square h-[17.5rem] md:h-[18.75rem] mx-auto overflow-hidden rounded-lg">
                    <img className="h-full w-full object-cover bg-no-repeat" src={img} alt="product image" />
                  </div>

                {/* Sub Image Section */}
                <div className="mt-2 w-full flex flex-row justify-between items-center mx-auto">
                  
                    <button type="button" className="aspect-square h-[4.8rem]  text-center">
                      <img className="h-full w-full object-cover rounded-lg hover:border-2 hover:border-orange-500" src={img} alt="" />
                    </button>
                    <button type="button" className="aspect-square h-[4.8rem]  text-center">
                      <img className="h-full w-full object-cover rounded-lg hover:border-2 hover:border-orange-500" src={img} alt="" />
                    </button>
                    <button type="button" className="aspect-square h-[4.8rem]  text-center">
                      <img className="h-full w-full object-cover rounded-lg hover:border-2 hover:border-orange-500" src={img} alt="" />
                    </button>
                </div>

              </div>
            </div>

            {/* Section 2 */}
            <div className="w-full min-w-[17.5rem] md:min-w-[18.75rem] mx-auto mt-10">
              <h1 className="text-2xl lg:text-3xl font-medium">{name}</h1>
              <div className="flex items-center mt-2">
                <Stars size={5}/>
                <span className="ml-2 text-gray-600 text-[12px] font-bold ">(4.5/5)</span>
              </div>

              <div className="flex items-center mt-2 text-xl ">
                <span className="font-bold ">${price}</span>
                <span className="text-gray-600 ml-2 line-through">$300</span>
              </div>

              {/* <p className="mt-2 text-gray-600 text-[14px] tracking-tight leading-[1.2]">
                {description}
              </p> */}

              <ColorSelector />

              {/* Size Section */}
              <div className="mt-2 text-sm lg:text-16px">
                <h3 className="font-bold border-t border-[#F1F1F2] pt-4 text-[0.9375rem] uppercase">Choose Size</h3>
                <div className="flex flex-wrap items-center justify-start mt-2 gap-2 w-fit">
                  <button className="px-[0.8rem] py-[0.15rem] hover:bg-[#efefef] border border-gray-300 rounded-full text-[14px]">Small</button>
                  <button className="px-[0.8rem] py-[0.15rem] hover:bg-[#efefef] border border-gray-300 rounded-full text-[14px]">Medium</button>
                  <button className="px-[0.8rem] py-[0.15rem] hover:bg-[#efefef] border border-gray-300 text-black rounded-full text-[14px]">Large</button>
                  <button className="px-[0.8rem] py-[0.15rem] hover:bg-[#efefef] border border-gray-300 rounded-full text-[14px]">XLarge</button>
                </div>
              </div>


              <div className="mt-4 text-sm lg:text-16px border-t border-[#F1F1F2] ">
                <h3 className="font-bold pt-4 text-[0.9375rem] uppercase ">description</h3>
                <p className="text-[0.9375rem] mt-1">{description}</p>
              </div>

              <div className="mt-4 text-sm lg:text-16px">
                <h3 className="font-bold pt-4 text-[0.9375rem] uppercase">details</h3>
                <p className="text-[0.9375rem] mt-1">The details will be here </p>
              </div>

              {/* <Counter /> */}

              <div className="">
                <div onClick={addToCart}>
                  <CartButton value={isLoading ? <Loading /> : 'Add to Cart'} disabled={isLoading} isloading={isLoading}/>
                </div>
              </div>


            </div>

            



            {/* Section 3 */}
           
            


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












      {/* <div className="lg:col-span-3">
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
            </div> */}
