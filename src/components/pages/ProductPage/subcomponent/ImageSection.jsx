import React from 'react'


const ImageSection = ({image}) => {
  return (
    <>
        {/* Section 1 */}
        <div className="w-fit mx-auto px-2">

            {/*Main Image Section */}
            <div className="flex flex-col ">
                <div className=" aspect-square h-[17.5rem] md:h-[18.75rem] mx-auto overflow-hidden rounded-lg">
                    <img className="h-full w-full object-cover bg-no-repeat" src={image} alt="product image" />
                </div>

                {/* Sub Image Section */}
                <div className="mt-2 w-full flex flex-row justify-between items-center mx-auto">
                    
                    <button type="button" className="aspect-square h-[4.8rem]  text-center">
                        <img className="h-full w-full object-cover rounded-lg hover:border-2 hover:border-orange-500" src={image} alt="" />
                    </button>
                    <button type="button" className="aspect-square h-[4.8rem]  text-center">
                        <img className="h-full w-full object-cover rounded-lg hover:border-2 hover:border-orange-500" src={image} alt="" />
                    </button>
                    <button type="button" className="aspect-square h-[4.8rem]  text-center">
                        <img className="h-full w-full object-cover rounded-lg hover:border-2 hover:border-orange-500" src={image} alt="" />
                    </button>
                </div>

            </div>
        </div>
    </>
  )
}

export default ImageSection