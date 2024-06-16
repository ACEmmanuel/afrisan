import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Feature from './Feature.jsx'
import New from './New.jsx'
import Delivery from './Delivery.jsx'

import Footer from './Footer.jsx'

function App() {

 return ( 
    <>
    <div className='bg-gray-300 h-[100vh]'>

      <Header />
      <Hero />

    </div>
     

      <Feature />
      <New />



      <Footer />
    </>
  )
}

export default App
