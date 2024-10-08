//This header belongs to the home page, i know it looks bad please bear with me 
//Update: I don't know what is going on, but it works. Only touch this code if you know what you're doing
//Update: God help me 😭

import React, {useEffect, useRef, useState} from 'react'

// Components
import SearchBar from '../../SearchBar'; //Mobile Screen search bar
import DashboardSidebar from './subcomponents/DashboardSidebar';
import Cart from '../../pages/Cart/Cart';

// Tablet and PC Screen search bar
import LGSearchBar from './subcomponents/SearchBar'; 

//Redux Toolkit
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const Header = () => {

  // My states
  const [isDropdownOpen, setIsDropdownOpen] = useState({account: false, help: false});
  const [isDropdownOpenMobile, setIsDropdownOpenMobile] = useState({account: false, help: false});
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [totalQuantity, setTotalQuantity] = useState(0);

  // Redux Toolkit
  const navigate = useNavigate();
  const cart = useSelector((state)=> state.cart);

  //Tablet and PC Screen States
  const [searchResults, setSearchResults] = useState([]);  // Store fetched products
  const [error, setError] = useState('');  // Store error messages


  // Larger Screens
  const accountRef = useRef();
  const helpRef = useRef();
  const menuRef = useRef();

  // Mobile Screen
  const mobileAccountRef = useRef();
  const mobileHelpRef = useRef();

  const w = 767;


  const search = () => {
    navigate('/search');
  }
  

   // Update the cart total quantity from local storage
   useEffect(() => {
    const updateCartFromLocalStorage = () => {
      const savedCart = JSON.parse(localStorage.getItem('savedCart'));
      if (savedCart && savedCart.totalQuantity !== undefined) {
        setTotalQuantity(savedCart.totalQuantity);
      }
    };

    // Initial update
    updateCartFromLocalStorage();

    // Event listener for local storage changes
    window.addEventListener('storage', updateCartFromLocalStorage);

    return () => {
      window.removeEventListener('storage', updateCartFromLocalStorage);
    };
  }, []);

  // Update local storage whenever the cart state changes
  useEffect(() => {
    const cartData = { items: cart.items, totalQuantity: cart.totalQuantity, totalPrice: cart.totalPrice, currency: cart.currency };
    localStorage.setItem('savedCart', JSON.stringify(cartData));
  }, [cart]);


  // PC FUNCTION
  const dropDown = (drop) => {
    setIsDropdownOpen((prev)=>{
      return {...prev, 
        [drop]: !prev[drop]
      }
    })
  }
  

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  }

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = 'auto';
    
  }

  

  useEffect(()=>{
    const handleClickOustside = (event) => {
      if (accountRef.current && !accountRef.current.contains(event.target)){
        setIsDropdownOpen((prev) => ({ ...prev, account: false }));
      }

      if (helpRef.current && !helpRef.current.contains(event.target)){
        setIsDropdownOpen((prev) => ({ ...prev, help: false }));
      }

      // if (mobileAccountRef.current && !mobileAccountRef.current.contains(event.target)){
      //   setIsDropdownOpenMobile((prev) => ({ ...prev, account: false }));
      // }

      // if (mobileHelpRef.current && !mobileHelpRef.current.contains(event.target)){
      //   setIsDropdownOpenMobile((prev) => ({ ...prev, help: false }));
      // }

      if (menuRef.current && !menuRef.current.contains(event.target)){
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    }

    const handleResize = () => {
      if (window.innerWidth >= w) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
        document.body.style.transitionDuration = '100ms';
      } 
    };
  
    window.addEventListener('resize', handleResize); 
    handleResize();

    document.addEventListener("mousedown", handleClickOustside);

    return(()=> {
      document.removeEventListener('resize', handleResize)
      document.removeEventListener('mousedown', handleClickOustside)
    })

  
  }, [])








  
  return (
    <>
        <header className='font-DM bg-orange-500 py-5 md:py-2 px-6 lg:px-7 relative text-slate-100 mb-1 z-10'>


          <div className='mx-auto flex justify-between items-center gap-5'>

            {/* Menu Icon */}
            <div className="md:hidden flex items-center" >
                <button className="text-white" onClick={()=>openMenu()}>
                  <svg className={`size-7 transition-transform transform text-gray-800 dark:text-white  ${isMenuOpen? 'rotate-90' : ''} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
                  </svg>
                </button>
              </div>

            {/* Logo */}
            <div className="text-[1.5rem] tracking- leading-5 font-medium cursor-pointer" onClick={()=>navigate('/')}>Afrisan</div>


            {/* Search Bar */}
              <LGSearchBar />
            


            <div className='gap-5 hidden md:flex'>
                {/* Account */}
              <div className='relative' onClick={()=>dropDown('account')} ref={accountRef}>
                <button className='flex items-center gap-1'>
                  <span className='text-[0.9375rem]'>Account</span>
                  <svg className={`w-4 h-4 transition-transform transform ${isDropdownOpen.account ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen.account && (
                 <div className="absolute right-0 mt-4 w-[10rem] bg-white text-black rounded shadow-lg py-2 transition-opacity duration-1000 opacity-100">
                  <div className="absolute top-0 right-0 transform -translate-x-1 -translate-y-1 w-4 h-4 bg-white rotate-45 -z-[99]"></div>
                  <a href="#" className="block py-2 hover:bg-[#efefef] px-4">Profile</a>
                  <a href="#" className="block py-2 hover:bg-[#efefef] px-4">Settings</a>
                  <a href="#" className="block py-2 hover:bg-[#efefef] px-4">Logout</a>
                </div>
                )}
              </div>

              {/* Help */}
              <div className='relative' onClick={()=>{dropDown('help')}} ref={helpRef}>
                <button className='flex items-center gap-1'>
                  <span className='text-[0.9375rem]'>Help</span>
                  <svg className={`w-4 h-4 transition-transform transform ${isDropdownOpen.help ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDropdownOpen.help && (
                 <div className="absolute right-0 mt-4 w-[10rem] bg-white text-black rounded shadow-lg py-2 transition-opacity duration-300 opacity-100">
                  <div className="absolute top-0 right-0 transform -translate-x-1 -translate-y-1 w-4 h-4 bg-white rotate-45 -z-[99]"></div>
                 <a href="#" className="block px-4 py-2 hover:hover:bg-[#efefef]">FAQ</a>
                 <a href="#" className="block px-4 py-2 hover:hover:bg-[#efefef]">Contact Support</a>
               </div>
                )}
              </div>

              {/* Cart Icon*/}
              <Link to={'/cart'} className='relative hidden md:block'>

              {cart.items.length > 0 && (

                <span className='absolute text-white font-bold text-[10px] bg-red-600 rounded-full h-4 w-4 flex items-center justify-center top-[-5px] right-[-5px]'>
                  {cart.totalQuantity}
                </span>

              )}

              <div className={`text-white font-bold`}>
                <svg className='h-[1.3rem] w-[1.3rem] md:w-[1.4rem] md:h-[1.4rem]' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
              </div>
              </Link>


              
            </div>
            
           
            {/* Mobile Menu */}

            {/*Account Icon, Cart Icon and Slide in Menu box*/}
            <div className='flex gap-5'>

              {/* Account Icon */}
              <div>
                <svg className='h-[1.3rem] w-[1.3rem] md:hidden' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                </svg>
              </div>

              {/* Search Icon */}
              <div onClick={search}>
                <svg class="h-[1.3rem] w-[1.3rem] md:hidden text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
              </div>


              {/* Cart Icon*/}
              <Link to={'/cart'} className='relative md:hidden'>

              {cart.items.length > 0 && (

                <span className='absolute text-white font-bold text-[10px] bg-red-600 rounded-full h-4 w-4 flex items-center justify-center top-[-5px] right-[-5px]'>
                  {cart.totalQuantity}
                </span>

              )}

              <div className={`text-white font-bold`}>
                <svg className='h-[1.3rem] w-[1.3rem] md:w-[1.4rem] md:h-[1.4rem]' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                </svg>
              </div>
              </Link>
              
              
              {/* Actual Slide-in Box*/}
              <div className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transform transition-transform duration-[400ms] ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} bg-white dark:bg-gray-800 shadow-lg w-[85vw]`} ref={menuRef}>
                

                {/*Close Button */}
                <div className='flex justify-between items-center my-5 px-1'>
                  <div className="text-[1.5rem] tracking- leading-5 font-medium">Afrisan</div>

                  <span className='font-bold cursor-pointer items-center gap-2 w-fit p-1 hover:bg-gray-700 hover:text-gray-900 rounded-lg text-sm inline-flex ' onClick={()=>closeMenu()}>
                  
                  <svg className={`size-[1.4rem] text-gray-800 dark:text-white transition-transform transform ${isMenuOpen ? '' : 'rotate-90'} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                  </svg>

                </span>
                </div>
                


                  <DashboardSidebar />
  

              </div>   {/* Actual Menu Slide-in Box CLOSE*/}   
            </div> {/* Mobile Icon with Cart Icon and Slide in Menu box CLOSE*/}


          </div>
        </header>
       
        
    </>
  )
}

export default Header;
