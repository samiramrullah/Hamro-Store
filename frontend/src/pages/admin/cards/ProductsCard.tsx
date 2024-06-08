import React from 'react'
import { ProductInterface } from '../AllProducts'

const ProductsCard = (props:ProductInterface) => {
  return (
    <div className="bg-gray-100 p-2 overflow-hidden cursor-pointer">
        <div className="bg-white flex flex-col h-full">
          <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src={`https://hamro-store.onrender.com/${props.image}`} alt={props.name}
              className="h-full w-full object-cover" />
          </div>
          <div className="p-6 text-center flex-1">
            <h3 className="text-lg font-bold text-gray-800">{props.name}</h3>
            <h4 className="text-xl text-gray-800 font-bold mt-3">Rs.{props.price}</h4>
          </div>
          <button type="button" className="bg-gray-700 font-semibold hover:bg-gray-800 text-white text-sm px-2 py-2.5 w-full">Delete</button>
        </div>
      </div>
  )
}

export default ProductsCard