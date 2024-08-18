import React from 'react';
import { feature } from '../data.js';
import Card from '../components/Card.jsx';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <>
      <div className='container flex justify-center mx-auto mt-4 font-IBM'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 lg:gap-2 p-2 lg:p-0 cursor-pointer'>
          {feature.map((e) => {
            const { id, img, name, rate } = e;

            return (
              <Link to={`/product/${id}`} key={id}>
                <Card image={img} title={name} rate={rate} />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Featured;
