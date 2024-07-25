import React from 'react'

import { feature } from '../data.js'
import Card from '../components/Card.jsx'

const Featured = () => {
  return (
    <>
        <div className='container flex justify-around gap-2 w-full mx-auto px-4'>

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
    </>
  )
}

export default Featured