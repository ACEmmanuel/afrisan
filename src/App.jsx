import React from 'react'
import { Link } from 'react-router-dom'

import Footer from './components/Footer'
import Header from './components/Header'

function App() {

 return ( 
    <>
      <Header />
      <main className='font-IBM font-bold mx-auto w-fit mt-[7rem] text-[2rem] animate-pulse mb-[10rem]'>
        <Link to="/featured">Click ME</Link>
      </main>
      <Footer />
    </>
  )
}

export default App

























// STARS

      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffcc00" width="24px" height="24px">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2V17.27z"/>
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffcc00" width="24px" height="24px">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg> */}