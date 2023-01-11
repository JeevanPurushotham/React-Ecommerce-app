import React from 'react'
import NavBar from './NavBar'
import Slider from './Slider'
import Categories from './Categories'
import Footer from './Footer'
import { Routes, Route } from "react-router-dom";
import Login from '../mui-component/Login'
import Signup from '../mui-component/Signup'
import Products from '../pages/Products'
import Product from './Product'
import Announcement from './Announcement'
import Cart from './Cart'
import ScrollToTop from 'react-scroll-to-top'
import Categories3 from './Categories3'
// import DataX from './DataX'
import Payment from '../mui-component/Payment'

export default function Home() {
  const homePage = { marginTop: "64px" }
  return (
    <div style={homePage}>
      <NavBar />
      <Announcement />
      <Routes>
        <Route path='/' element={<Slider />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<Signup />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/pay' element={<Payment/>}></Route>
      </Routes>
      <Routes>
        <Route path='/' element={<Categories/>} />
      </Routes>
      <Routes>
        <Route path='/' element={<Categories3 />} />
      </Routes>
      <ScrollToTop smooth/>
      <Footer />
    </div>
  )
}
