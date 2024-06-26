import { addItem,removeItem,updateQuantity } from '../../redux/slice/CartSlice';
import React from 'react'
import {  useDispatch } from 'react-redux';

 export interface cartInterface{
    id:number;
    name:string;
    quantity:number;
    price:number;
    image:string;
}

const CartCard = (props:cartInterface) => {   
    const dispatch=useDispatch() 
    const addTocart=()=>{
        dispatch(addItem(props))
    }
    const removeFromCart=()=>{
        dispatch(removeItem(props.id))
    }
    const updateCart=()=>{
        dispatch(updateQuantity({
            id:props.id,
            quantity:props.quantity,
        }))
    }
    return (
        <div className="py-5 sm:py-8">
            <div className="flex flex-wrap gap-4 sm:py-2.5 lg:gap-6">
                <div className="sm:-my-2.5">
                    <a href="1" className="group relative block h-40 w-24 overflow-hidden rounded-lg bg-gray-100 sm:h-56 sm:w-40">
                        <img src={`https://hamro-store.onrender.com/${props.image}`} loading="lazy" alt="Image" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    </a>
                </div>
                <div className="flex flex-1 flex-col justify-between">
                    <div>
                        <a href="1" className="mb-1 inline-block text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">Top</a>
                        <span className="block text-gray-500">Size: S</span>
                        <span className="block text-gray-500">Color: White</span>
                    </div>
                    <div>
                        <span className="mb-1 block font-bold text-gray-800 md:text-lg">Rs{(props.price).toFixed(3)}</span>

                        <span className="flex items-center gap-1 text-sm text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                            In stock
                        </span>
                    </div>
                </div>

                <div className="flex w-full justify-between border-t pt-4 sm:w-auto sm:border-none sm:pt-0">
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex h-12 w-20 overflow-hidden rounded border">
                            <div   className="w-full px-4 py-2 outline-none ring-inset ring-indigo-300 transition duration-100 focus:ring">{props?.quantity}</div>

                            <div className="flex flex-col divide-y border-l">
                                <button onClick={addTocart} className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">+</button>
                                <button onClick={updateCart} className="flex w-6 flex-1 select-none items-center justify-center bg-white leading-none transition duration-100 hover:bg-gray-100 active:bg-gray-200">-</button>
                            </div>
                        </div>

                        <button onClick={removeFromCart} className="select-none text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Delete</button>
                    </div>

                    <div className="ml-4 pt-3 sm:pt-2 md:ml-8 lg:ml-16">
                        <span className="block font-bold text-gray-800 md:text-lg">Rs{(props.price)*(props.quantity)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCard