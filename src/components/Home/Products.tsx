
import { Product } from '@/interfaces/Product'
import React from 'react'
import SectionHeading from '../SectionHeading'
import ProductCard from '../ProductCard'
import { urlFor } from '@/sanity/lib/image'
import ProductSkeleton from '../Skeleton/ProductSkeleton'

const Products = ({ products }: { products: Product[] }) => {
  
  return (
    <section className="mt-32 px-8">
        <div className="flex items-center justify-center">
          <SectionHeading heading="Our Products" />
        </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {
          products.length >0 ?
              products.slice(0, 8).map((prod, i) => {
                const imageUrl = urlFor(prod.image.asset._ref).url()
                return <ProductCard id={prod._id} InfoSection={true}
                  imagePath={imageUrl} key={i} title={prod.title} price={prod.price} pricewithoutDiscount={prod.priceWithoutDiscount!}/>
              })
            : (
              Array(8)
            .fill(null)
            .map((_, index) => (
              <ProductSkeleton key={index}/>
            ))
            )
            }
            </div>
      </section>
  )
}

export default Products
