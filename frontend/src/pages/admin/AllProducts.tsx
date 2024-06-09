import { ToastContainer,toast } from 'react-toastify';
import ProductsCard from './cards/ProductsCard'
import { useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchProducts } from '../../redux/slice/ProductSlice';


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
    const products = useSelector((state: RootState) => state.products);
    const dispatch=useDispatch<AppDispatch>();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
  return (
    <div className="font-sans p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-md">
    <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-16">Food and Flavours</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.data?.map(product=>(
        <ProductsCard name={product.name} price={product.price} description={product.description} _id={String(product._id)} category={product.category} image={product.image} __v={product.__v}/>
      ))}
    </div>
    <ToastContainer/>
  </div>
  )
}

export default AllProducts