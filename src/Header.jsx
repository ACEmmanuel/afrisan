import React, { useState, useEffect } from 'react';


const Header = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'; // Prevent scrolling when menu is open
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling when menu is closed
  };


  // useEffect(() => {
  //   const handleScroll = () => {
  //     const offset = window.scrollY;
  //     if (offset > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  
  return (
    <>
    {/* Desktop Menu */}

      {/* <header className={` w-full top-0 left-0 p-6 font-radio transition-all duration-300 flex justify-between items-center h-20 ${isScrolled ? 'transparent text-white' : 'bg-transparent text-black'}`}> */}
      <header className='w-full top-0 left-0 p-8 font-radio transition-all duration-300 flex justify-between items-center h-20 transparent text-black'>

        <h1 className='text-black font-medium text-2xl'>Afrisan</h1>


        {/*Search Section Large Screen*/}
        <div className='hidden lg:flex'>   
        {/* md:order-2 */}
          <form class="max-w-md mx-auto">   
              <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div class="relative ">

                {/* Search Icon */}
                  <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none ml-16">
                      <i class='bx bx-search-alt-2 text-[1.25rem] text-gray-500'></i>
                  </div>

                {/* Search Bar */}
                  <input type="text" id="default-search" class="block w-[25rem] p-[.9rem] ps-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 ml-16 outline-none" placeholder="Search fashion, food..." required />
                  <button type="submit" class="text-white absolute -end-1 bottom-2 bg-blue-700 hover:bg-blue-800  font-medium rounded-full text-sm px-4 py-2 ">Search</button>
              </div>
          </form>
        </div>


        {/* Navigation Section */}
        <div class="hidden md:flex gap-10 font-DM font-medium text-[15px]">
          <a href="#" class="text-gray-800 hover:text-blue-600">Home</a>


          <div class="group">
            <button class="flex items-center text-gray-800 hover:text-blue-600">Store
            <i class='bx bx-chevron-down'></i>
              </button>
                
              <div class="absolute mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg hidden group-hover:block p-2">
                <a href="#" class="block px-4 py-2 text-gray-900 hover:bg-gray-100">Category 1</a>
                <a href="#" class="block px-4 py-2 text-gray-900 hover:bg-gray-100">Category 2</a>
                <a href="#" class="block px-4 py-2 text-gray-900 hover:bg-gray-100">Category 3</a>
              </div>
          </div>

          <a href="#" class="text-gray-800 hover:text-blue-600">Contact us</a>
        </div>


        




        {/* Mobile Menu Toggle Button  */}
        <div className='flex items-center lg:hidden gap-4 text-[1.6rem]'>

          {/* Search Icon and Menu */}
          <i class='bx bx-search-alt'></i> 
          {isMenuOpen ? <i class='bx bx-x ' onClick={closeMenu}></i> :   <i class='bx bx-menu' onClick={toggleMenu}></i>}
        

          {/* Mobile Menu Dropdown*/}
          {isMenuOpen && (
            <div className="absolute inset-0 top-[5rem] text-[16px] bg-black z-50 p-6 flex flex-col gap-4 h-max w-[96%] mx-auto rounded-md">
              <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white">Home</a>

              <button className=" flex items-center justify-between w-full px-4 py-2 text-gray-300 hover:bg-blue-600"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Store <i class='bx bx-chevron-down'></i>
              </button>


              {/* Dropdown Menu for Store Mobile Screen*/}
              {isDropdownOpen && (
                <div className="" >
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-blue-600" >Category 1</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-blue-600">Category 2</a>
                  <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-blue-600">Category 3</a>
                </div>
              )}
              <a href="#" className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white">Contact us</a>
            </div>
        )}
      </div>





      </header>
    </>
  );
};


export default Header;



// #EA661E



     