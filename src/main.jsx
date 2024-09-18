import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';  // Import PersistGate
import './index.css';

import ErrorPage from './components/layout/ErrorPage.jsx';
import Featured from './components/Featured.jsx';
import ProductPage from './components/pages/ProductPage/ProductPage.jsx';
import Cart from './components/pages/Cart/Cart.jsx';

import { store, persistor } from './app/store.js';  // Import persistor

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} errorElement={<ErrorPage />} />
      <Route path="/featured" element={<Featured />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/cart" element={<Cart />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>  {/* Wrap with PersistGate */}
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
