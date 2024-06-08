import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Index from './pages/Index'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import Layout from './pages/admin/Layout'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/dashboard/*' element={<Layout/>}/>
    </Routes>
    </>
  )
}

export default App