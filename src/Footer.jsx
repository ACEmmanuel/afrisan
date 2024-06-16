import React from 'react'

const Footer = () => {
  return (
    <>
        <div className=' bg-black text-white font-DM text-nowrap cursor-pointer mt-10'>
            <div className=' container mx-auto px-2 py-6 text-center space-y-10 divide-y divide-gray-500'>
                
                <div className='justify-between items-center space-y-10 md:space-y-0 md:flex'>
                    <div className='flex flex-col gap-3 items-center md:items-start'>
                        <p className='font-bold text-[1.5rem]'>AFRISAN</p>
                        <p className='text-xs'>EXPLORE AFRICAN-MADE EXCELLENCE</p>
                        <p>SOCIALS HERE</p>
                    </div>

                    <div className='flex flex-row text-[14px] justify-around items-center md:gap-[6rem] lg:gap-[10rem] capitalize'>

                        <div className='flex flex-col gap-2'>
                            <p>Terms & conditions</p>
                            <p>Privacy Policy</p>
                            <p>Shipping & Payment Info</p>
                        </div>   


                        <div className='flex flex-col gap-2'>
                            <p>Return Policy</p>
                            <p>About Us</p>
                            <p>Report Abuse</p>
                        </div>   
                        
                    </div>
                </div>

                <div className='text-[.75rem] pt-6'>
                    <p>copyright 2024 afrisan, All Rights Reserved</p>
                </div>

            </div>
        </div>
    </>
  )
}

export default Footer