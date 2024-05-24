import Collections from '@/Components/Collections'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Navbar from '@/Components/Navbar'
import NewsLetter from '@/Components/NewsLetter'
import SpecialOffer from '@/Components/SpecialOffer'
import TrendingProduct from '@/Components/TrendingProduct'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <TrendingProduct/>
    <SpecialOffer/>
    <Collections/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}

export default page