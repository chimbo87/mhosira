import { useState } from 'react'
import Home from './pages/home/Home'
import RootLayOut from "./components/roots/RootLayOut";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from './pages/about/About';
import Gallery from './pages/works/Gallery';
import Services from './pages/service/Services';
import ProductDetails from './pages/productdetails/ProductDetails';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayOut/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/our-shop" element={<Gallery/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/product-details/:id" element={<ProductDetails/>}></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
