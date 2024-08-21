import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route
} from 'react-router-dom'

import './index.css'


import ErrorPage from './components/layout/ErrorPage.jsx'
import Featured from './components/Featured.jsx'
import ProductPage from './components/pages/ProductPage/ProductPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path= "/" element= {<App />} errorElement= {<ErrorPage />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </>
  )
)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
