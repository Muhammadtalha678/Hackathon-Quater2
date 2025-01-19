import React from 'react'
import SectionHeading from "@/components/SectionHeading";
import { Category } from '@/interfaces/Category';
import ProductCard from '../ProductCard';
import { Product } from '@/interfaces/Product';
import { urlFor } from '@/sanity/lib/image';

const CategoryProducts = ({categories,products}:{categories:Category[],products:Product[]}) => {
  return (
  <section className="mt-32 px-8">
        <SectionHeading heading="Top categories" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 mt-12 ">
            {
              categories.map((category,i) => {
                const catProducts = products.filter((e) => e._id === category._id) 
              const imageUrl = urlFor(category.image.asset._ref).url()
                return <ProductCard InfoSection={false} imagePath={imageUrl} key={i}
                  productCounts={catProducts.length!} title={category.title}
              />
            })
          }    
        </div>
      </section>
  )
}

export default CategoryProducts
