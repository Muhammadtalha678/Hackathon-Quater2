'use client'
import React from 'react'
import Image from "next/image";
import { Product } from '@/interfaces/Product';
import { urlFor } from '@/sanity/lib/image';
import { useCart } from '@/context/CartContext';
import Button from '../Button';
const ProductDetailData = ({ prodDetail }: { prodDetail: Product }) => {
  const imageUrl = urlFor(prodDetail?.image?.asset?._ref).url()
  const {addToCart,cart} = useCart()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
              {/* Main Chair Image */}
              <div className="flex justify-center">
                <Image
                  src={imageUrl}
                  alt="Library Stool Chair"
                  width={500}
                  height={500}
                  className="rounded-lg "
                />
              </div>
      
              {/* Chair Details */}
              <div className="flex flex-col justify-center space-y-10">
                <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">
                  {prodDetail.title}
                </h1>
                <div>
                  <span className="bg-teal-600 text-white text-sm lg:text-base font-semibold px-4 py-2 rounded-full">
                    ${ prodDetail.price?prodDetail.price : prodDetail.priceWithoutDiscount}
                  </span>
                </div>
                <p className="text-sm lg:text-base text-gray-600">
                  {prodDetail.description}
                </p>
                {cart.find((e) => e._id === prodDetail._id) ?
                  <div className='rounded-lg lg:w-40 px-4 py-2 bg-teal-600 shadow text-white text-sm lg:text-base text-center' >
                  Add to Cart
                  </div> :
                  <Button borderRad='rounded-lg' width='lg:w-40 px-4' height='py-2' clickButton={() => addToCart(prodDetail)}
                   bg='bg-[#5CCFD9] shadow hover:bg-teal-700 hover:text-white text-sm lg:text-base ' >
                  Add to Cart
                  </Button>
                  }
              </div>
            </div>
  )
}

export default ProductDetailData
