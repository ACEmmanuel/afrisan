import React from 'react'

import { feature } from '../data.js'
import Card from '../components/Card.jsx'

const Featured = () => {
  return (
    <>
      <div className='container flex justify-center mx-auto mt-4'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>

            { 
            feature.map((e) => {

                const {img, name, rate, id} = e;

                return(
                <>
                    <Card image={img} title={name} rate={rate} id={id} />
                </>
                )


            })

            }

        </div>
      </div>
    </>
  )
}

export default Featured




{/* <div className="container mx-auto border border-red-800 flex justify-center">
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0">
    {feature.map((e) => {
      const { img, name, rate, id } = e;
      return (
        <Card key={id} image={img} title={name} rate={rate} />
      );
    })}
  </div>
</div> */}
