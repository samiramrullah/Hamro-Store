
import React from 'react'
import { useAppDispatch } from '../../redux/store';
import { addItem } from '../../redux/slice/CartSlice';
import { ProductInterface } from '../../pages/Product';

const ProductCard = (props:ProductInterface) => {
    
    const dispatch = useAppDispatch();
    const handleAddToCart = () => {
        dispatch(addItem({
          id: props._id,
          name: props.name,
          price: props.price,
          quantity: 1,
          image:props.image
        }));
      };
     
          
    return (
        <div>
            <a href="1" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                <img src={`https://hamro-store.onrender.com/${props.image}`} loading="lazy" alt={props?.name} className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
            </a>
            <div className="flex flex-col">
                <a href="1" className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">{props.name}</a>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="font-bold text-gray-800 lg:text-lg">{props.price}</span>
                        {/* <span className="mb-0.5 text-red-500 line-through">$30.00</span> */}
                    </div>
                    <span onClick={handleAddToCart} role="button" className="mb-0.5 text-red-500">Add</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCard