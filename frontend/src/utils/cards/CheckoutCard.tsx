import React from 'react'
import { cartInterface } from './CartCard'
const CheckoutCard = (props:cartInterface) => {
    return (
        <div className="flex items-start gap-4">
            <div className="w-32 h-28 max-lg:w-24 max-lg:h-24 flex p-2 shrink-0 bg-gray-300 rounded-md">
                <img src={props.image} className="w-full object-contain" />
            </div>
            <div className="w-full">
                <h3 className="text-base text-white">{props.name}</h3>
                <ul className="text-xs text-gray-300 space-y-1 mt-2">
                    {/* <li>Size <span className="float-right">37</span></li> */}
                    <li>{props.quantity} 
                    {/* <span className="float-right">2</span> */}
                    </li>
                    <li>{props.price} <span className="float-right">${((props.price)*(props.quantity)).toFixed(3)}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default CheckoutCard