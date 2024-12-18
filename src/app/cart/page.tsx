import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import Prod3 from '../../../public/product3.png';
import Prod8 from '../../../public/product8.png';
import Image from 'next/image';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Comforty | Cart Page",
  description: "Generated by create next app",
};

const ShoppingCart = () => {
  const items = [
    {
      id: 1,
      name: 'Library Stool Chair',
      price: 99,
      size: 'L',
      quantity: 1,
      image: Prod3 // Replace with actual image path
    },
    {
      id: 2,
      name: 'Library Stool Chair',
      price: 99,
      size: 'L',
      quantity: 1,
      image: Prod8, // Replace with actual image path
    },
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className=" ">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Items Section */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Bag</h2>
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between border-b pb-4 mb-4"
              >
                {/* Image and Item Details */}
                <div className="flex items-start gap-4 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Size: {item.size} | Quantity: {item.quantity}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      {/* Heart and Delete Buttons */}
                      <button className="text-gray-500 hover:text-red-500">
                        <CiHeart className="w-5 h-5" />
                      </button>
                      <button className="text-gray-500 hover:text-red-500">
                        <FaRegTrashAlt className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Price */}
                <p className="font-bold text-lg">${item.price}</p>
              </div>
            ))}
          </div>

          {/* Summary Section */}
          <div className="p-6 rounded-lg ">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-bold">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Estimated Delivery & Handling</p>
              <p className="text-green-500">Free</p>
            </div>
            <div className="flex justify-between items-center border-t pt-4">
              <h3 className="text-lg font-bold">Total</h3>
              <h3 className="text-lg font-bold">${subtotal.toFixed(2)}</h3>
            </div>
            <button className="w-full bg-teal-500 text-white py-2 mt-6 rounded-md hover:bg-teal-600">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
