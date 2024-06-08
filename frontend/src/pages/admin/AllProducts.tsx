import { ToastContainer,toast } from 'react-toastify';
import ProductsCard from './cards/ProductsCard'
import axios from 'axios'
import { useEffect, useState } from 'react';

export interface ProductInterface {
    _id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    __v: number;
  }
  

const AllProducts = () => {
    const [allproducts,setAllProducts]=useState<ProductInterface[]>([])
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_KEY}product/getallproducts`,{headers:{
            Authorization:'Bearer '+localStorage.getItem('token')
        }})
        .then((res)=>{
           setAllProducts(res?.data?.products)
          })
          .catch((err) => {
            toast.error(err?.response?.data?.message, { position: "top-right" });
          });
    },[])
  return (
    <div className="font-sans p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-md">
    <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">Food and Flavours</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {allproducts?.map(product=>(
        <ProductsCard name={product.name} price={product.price} description={product.description} _id={product._id} category={product.category} image={product.image} __v={product.__v}/>
      ))}
    </div>
    <ToastContainer/>
  </div>
  )
}

export default AllProducts