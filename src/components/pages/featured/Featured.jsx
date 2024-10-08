import React, { useEffect, useState } from 'react';
import Card from '../../common/Card.jsx';
import { Link, Outlet } from 'react-router-dom';
import { fetchAllData } from '../../../api/api.js';
import Loading from '../../common/Loading.jsx';
import Skeleton from '../../common/Skeleton.jsx';

const Featured = () => {

  const [allItems, setAllItems] =  useState(null);
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage errors

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const items = await fetchAllData();
        setAllItems(items)
        // setLoading(false)
      } catch (error) {
        setError(error)
        // setLoading(false)
      }
  }

  fetchData();

  }, [allItems])

  // if (loading) return <Loading />;
    if (error) return <p>{error}</p>;

  return (
    <>
      <div className='container flex justify-center mx-auto my-10 font-DM px-2 lg:px-0'>
        <div className='flex gap-4 h-fit w-full overflow-auto cursor-pointer containee'>
          {allItems ? (allItems.map((e) => {
            const { id, img, name, rate } = e;

            return (
              <>
                <Link to={`/product/${id}`} key={id}>
                  <Card image={img} title={name} rate={rate} />
                </Link>
              </>
            );
          })) : (
            <Skeleton />
          )
        }
        </div>
        
      </div>
    </>
  );
};

export default Featured;







{/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 lg:gap-2 p-2 lg:p-0 cursor-pointer'> */}
