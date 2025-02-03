'use client'
import { Product } from '@/interfaces/Product'
import React from 'react'
import SectionHeading from '../SectionHeading'
import ProductCard from '../ProductCard'
import { urlFor } from '@/sanity/lib/image'
import { useCart } from '@/context/CartContext'
import BreadCrumb from '../ui/BreadCrumb/BreadCrumb'


const CategoryLists = ({cateProd,slug}:{cateProd:Product[],slug:string}) => {
    const {addToCart} = useCart()
    return (
     <section className="mt-10 px-8">

      <div>
        {/* <SectionHeading heading={slug.split('-').join(' ').toUpperCase()} /> */}
        <BreadCrumb link={['Home',`${slug}`]}/>
        <SectionHeading heading={slug} />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {
            cateProd.map((prod,ind) => {
                const imageUrl = urlFor(prod.image.asset._ref).url()
                return <ProductCard imagePath={imageUrl} key={ind} id={prod._id} InfoSection={true}
                title={prod.title} price={prod.price} pricewithoutDiscount={prod.priceWithoutDiscount!}
                badge={prod.badge} addToCart={() => addToCart(prod)} />
            })
          }
        </div>

        
      </div>




    </section>
  )
}

export default CategoryLists
