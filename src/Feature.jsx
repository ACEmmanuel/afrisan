import React, {useState} from 'react'
import { feature } from './data'

const Feature = () => {

    
      
   return( 
      <>

          <div className='text-black font-mont text-nowrap cursor-pointer mt-16'>
            <div className='mx-auto px-2 py-6 text-center'>
              <h1 className='font-extrabold text-2xl md:text-4xl uppercase'>featured products</h1>
              <p className='font-medium text-[14px] lg:text-[16px]'>Here is our popular product this month</p>

            <div className='flex flex-wrap justify-center gap-4 mt-1 bg-gray-0 p-9 overflow-hidden'>

              {
                feature.map((e)=>{
                  const {img, id, name} = e;

                  return(
                    <> 

                      <div className='max-w-[13rem] aspect-square p-1'>
                          <img src={img} key={id} className='shadow-md' />
                          <p className='mt-2 font-bold uppercase text-[14px]'>{name}</p>
                      </div>
              
                    </>
                  )
                })
              }
            </div>
            </div>
          </div>
        
        </>
    )
  
}

export default Feature;

                  // <div className=' group group-hover:animate-none'>
                  //   <img src={img} className='size-[16rem] aspect-square animate-marquee'/>
                  //   {/* <img src={img} className='marquee zte size-[16rem]'/> */}
                  // </div>