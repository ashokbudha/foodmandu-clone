import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { clearItem } from '../utility/cartSlice';
import { CircleMinus } from 'lucide-react';

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
  return (
    <div className='w-4/12 mx-auto py-20' >
        <div className='text-center mt-10 mb-6'>

        <h1 className='text-2xl mb-1 '>Cart Items</h1>
        <button className='text-center mx-auto border-1 border-black  px-2 bg-black text-white rounded-sm'
        onClick={()=>{
            dispatch(clearItem());
        }}>Clear Cart</button>
        </div>
        {cartItems.map((item)=>{
            return(
                <div
              key={item.productId}
              className="px-4 py-3 border-b-1 border-gray-200 relative"
            >
              <div className="flex justify-between pr-3">
                <p>{item.name}</p>
                <p>
                  {" "}
                  {new Intl.NumberFormat("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(item.price)}
                </p>
              </div>
               <button className="absolute right-1 top-5 cursor-pointer " onClick={()=>{
                
              }}>
                <CircleMinus className="w-4 h-4 text-green-900" />
              </button>
              <div>
                <p className="text-gray-500 text-sm pr-10">
                  {item.productDesc}
                </p>
              </div>
            </div>
            )

        })}

    </div>
  )
}

export default Cart
