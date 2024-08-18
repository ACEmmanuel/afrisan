import React from 'react';

// Define a functional component named DashboardSidebar
const DashboardSidebar = () => {
  return (
    <>
      {/* Container with padding and overflow control */}
      <div className="py-3 overflow-y-auto">
        {/* Unordered list with spacing between items and divider between them */}
        <ul className="font-medium divide-y-[1px] divide-gray-600">
          
          {/* List item for Dashboard link */}
          <li className='my-3'>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              
              {/* Dashboard label */}
              <span className="ms-3">Dashboard</span>
            </a>
          </li>

          {/* List item for E-commerce section with dropdown */}
          <li>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 my-2"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
             
              {/* E-commerce label */}
              <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
              {/* Dropdown indicator */}
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            {/* Drop Down List */}
          </li>

          {/* List item for Kanban */}
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group  my-2"
            >
             
              {/* Kanban label*/}
              <span className="flex-1 ms-3 whitespace-nowrap">Kanban</span>
            </a>
          </li>

          {/* List item for Sign In */}
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group my-2"
            >
            
              {/* Sign In label */}
              <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
            </a>
          </li>

          {/* List item for Sign Up */}
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group my-2"
            >
             
              {/* Sign Up label */}
              <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
            </a>
          </li>

        </ul>
      </div>
    </>
  );
};

export default DashboardSidebar;















            {/* Dropdown menu items */}
            {/* <ul id="dropdown-example" className="hidden py-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Billing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  Invoice
                </a>
              </li>
            </ul> */}