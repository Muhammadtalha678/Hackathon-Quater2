'use client'
import { useCart } from '@/context/CartContext'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaRegTrashAlt } from 'react-icons/fa'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import SectionHeading from '../SectionHeading'
const CartList = () => {
    const {cart,addToCart,removeFromCart,decreaseFromCart} = useCart()
  return (
    cart.length > 0 ? 
    <div className="grid md:grid-cols-3 gap-8">
              {/* Items Section */}
              <div className="md:col-span-2 bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Bag</h2>
                {
                  cart.map((item, i) => (
                         <div
                    key={i}
                    className="flex items-start justify-between border-b pb-4 mb-4"
                  >
                    {/* Image and Item Details */}
                    <div className="flex items-start gap-4 w-full">
                      <Image
                        src={urlFor(item.image.asset._ref).url()}
                        width={300} height={300}
                        alt={item.title}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <div className="flex items-center mt-2 gap-2">
                    {item.quantity > 1 ?
                    <button
                      className="px-2 py-1 border rounded text-sm font-medium bg-gray-100 hover:bg-gray-200"
                      aria-label="Decrease quantity" onClick={() => decreaseFromCart(item._id)}
                    >
                      -
                    </button> :
                    <div
                      className="px-2 py-1 border rounded text-sm font-medium bg-gray-100 hover:bg-gray-200"
                      aria-label="Decrease quantity"
                    >
                      -
                    </div>
                    }
                    <p className="text-sm text-gray-500">
                      Quantity: <span className="font-medium">{item.quantity}</span>
                    </p>
                    <button
                      className="px-2 py-1 border rounded text-sm font-medium bg-gray-100 hover:bg-gray-200"
                      aria-label="Increase quantity" onClick={() => addToCart(item)}
                    >
                      +
                    </button>
                  </div>
                        
                        <div className="flex items-center gap-4 mt-2">
                          {/* Heart and Delete Buttons */}
                          <button className="text-gray-500 hover:text-red-500">
                            <CiHeart className="w-5 h-5" />
                          </button>
                          <button className="text-gray-500 hover:text-red-500" onClick={() => removeFromCart(item._id)}>
                            <FaRegTrashAlt className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Price */}
                    <p className="font-bold text-lg">${item.price * item.quantity}</p>
                  </div>
                    ))
                }
              </div>
    
              {/* Summary Section */}
              <div className="p-6 rounded-lg ">
                <h2 className="text-2xl font-bold mb-4">Summary</h2>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600">Subtotal</p>                         
                  <p className="font-bold">${cart.reduce((total: number, item) => (total + (item.price * item.quantity)) , 0)}</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600">Estimated Delivery & Handling</p>
                  <p className="text-green-500">Free</p>
                </div>
                <div className="flex justify-between items-center border-t pt-4">
                  <h3 className="text-lg font-bold">Total</h3>
                  <h3 className="text-lg font-bold">${cart.reduce((total: number, item) => (total + item.price * (item.quantity)) , 0)}</h3>
                </div>
                <button className="w-full bg-teal-500 text-white py-2 mt-6 rounded-md hover:bg-teal-600">
                  Member Checkout
                </button>
              </div>
    </div> :
    <div className='text-center'>
        <SectionHeading heading='Your Cart is Empty'/>
    </div>
  )
}

export default CartList
