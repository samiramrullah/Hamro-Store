import Collections from '@/components/Collections'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import NewsLetter from '@/components/NewsLetter'
import SpecialOffer from '@/components/SpecialOffer'
import TrendingProduct from '@/components/TrendingProduct'
 


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