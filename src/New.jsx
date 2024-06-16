import React, {useState} from 'react'
import { fresh } from './data'

const New = () => {

    
      
   return( 
      <>

          <div className='text-black font-mont text-nowrap cursor-pointer mt-10'>
            <div className='mx-auto px-2 py-6 text-center'>
              <h1 className='font-extrabold text-2xl md:text-4xl uppercase'>New Arrival</h1>
              <p className='font-medium text-[14px] lg:text-[16px]'>Fresh from the warehouse</p>

            <div className='flex flex-wrap justify-center gap-4 mt-1 bg-gray-0 p-9 overflow-hidden'>

              {
                fresh.map((e)=>{
                  const {img, id, name} = e;

                  return(
                    <> 

                      <div className='max-w-[13rem] max-h-[13rem]  aspect-square p-1'>
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

export default New;

                  // <div className=' group group-hover:animate-none'>
                  //   <img src={img} className='size-[16rem] aspect-square animate-marquee'/>
                  //   {/* <img src={img} className='marquee zte size-[16rem]'/> */}
                  // </div>