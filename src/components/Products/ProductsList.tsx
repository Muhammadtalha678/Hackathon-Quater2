'use client'
import React from 'react'
import { Product } from '@/interfaces/Product'
import SectionHeading from '../SectionHeading'
import ProductCard from '../ProductCard'
import { roboto } from '@/utils/fonts'
import ProdcutsInstagram from './ProdcutsInstagram'
import { urlFor } from '@/sanity/lib/image'
import { useCart } from '@/context/CartContext'

// jest+chae.js+mocka.js
const ProductsList = ({ products }: { products: Product[] }) => {
  const filterInstagram = products.filter((prod) => prod.tags.includes('instagram'))
  const {addToCart} = useCart()
  return (

    <section className="mt-10 px-8">

      <div>
        <SectionHeading heading="Products" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {products.map((prod, i) => {
            const imageUrl = urlFor(prod.image.asset._ref).url()
            return <ProductCard key={i} imagePath={imageUrl} badge={prod.badge!}
              InfoSection={true} title={prod.title} pricewithoutDiscount={prod.priceWithoutDiscount!}
              price={prod.price!} id={prod._id} addToCart={() => addToCart(prod)}/>
          })
          }
        </div>

        <div className="bg-[#F0F2F3] py-10 mt-20">
          {/* Newsletter div */}
          <div className="text-center mb-10">
            <h2 className="text-black text-xl font-bold">Or Subscribe To The Newsletter</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-5 gap-4 px-4">
              <input
                type="email"
                placeholder="Email Address..."
                className="bg-transparent border-b-2 border-black text-black text-lg outline-none px-2 py-1 sm:w-[300px] w-full"
              />
              <button className="text-black text-lg font-semibold hover:underline border-black border-b-2">SUBMIT</button>
            </div>
          </div>

          {/* Instagram div */}
          <div className="text-center">
            <h2 className={"text-black text-xl font-bold mb-6 px-4" + `${roboto.className}`} >
              Follow Products And Discounts On Instagram
            </h2>
            <ProdcutsInstagram filterInsta={filterInstagram} />
          </div>
        </div>
      </div>




    </section>
  )
}

export default ProductsList
