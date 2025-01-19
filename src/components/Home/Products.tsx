import { Product } from '@/interfaces/Product'
import React from 'react'
import SectionHeading from '../SectionHeading'
import { urlFor } from '@/helpers/sanityImage.helper'
import ProductCard from '../ProductCard'

const Products = ({products}:{products:Product[]}) => {
  return (
    <section className="mt-32 px-8">
        <div className="flex items-center justify-center">
          <SectionHeading heading="Our Products" />
        </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {
              products.slice(0, 4).map((prod, i) => {
                const imageUrl = urlFor(prod.image.asset._ref).url()
                return <ProductCard id={prod._id} InfoSection={true}
                  imagePath={imageUrl} key={i} title={prod.title} price={prod.price} pricewithoutDiscount={prod.priceWithoutDiscount!}/>
              })
            }
            </div>
      </section>
  )
}

export default Products
