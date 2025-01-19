import { Product } from '@/interfaces/Product'
import React from 'react'
import SectionHeading from '../SectionHeading'
import ProductCard from '../ProductCard'
import { urlFor } from '@/helpers/sanityImage.helper'

const FeatuedProducts = ({featProd}:{featProd:Product[]}) => {
  return (
    <section className="mt-32 px-8">
        <SectionHeading heading="Featured Products" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 ">
            {
               featProd.slice(0,4).map( (featProduct, i) => {
                
                const imageUrl = urlFor(featProduct.image.asset._ref).url()
                return <ProductCard InfoSection={true} badge={featProduct.badge!} price={featProduct.price}
                  pricewithoutDiscount={featProduct.priceWithoutDiscount!} title={featProduct.title}
                  imagePath={imageUrl} id={featProduct._id} key={i}/>
              })
            }
         </div>
      </section>
  )
}

export default FeatuedProducts
