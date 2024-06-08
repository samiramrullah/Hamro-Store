import React,{useState,useEffect} from 'react'
import ProductCard from '../utils/cards/ProductCard';
import axios from 'axios';
interface Rating {
    rate: number;
    count: number;
  }
  
  export interface ProductInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }
const Product = () => {
    const [allProducts,setAllProducts]=useState<ProductInterface[]>([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_KEY}product/getallproducts`,{headers:{
            Authorization:'Bearer '+localStorage.getItem('token')
        }})
        .then((res)=>setAllProducts(res.data))
        .catch(err=>console.log(err))
      },[])
    return (
        <>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-6 flex items-end justify-between gap-4">
                    <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Selected</h2>

                    <a href="1" className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show more</a>
                </div>
                <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                    {allProducts?.map(product=>(
                        <ProductCard id={product.id} title={product.title} image={product.image} price={product.price} rating={product.rating} description={product.description} category={product.category}/>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Product