'use client'
import React, { useEffect, useState } from 'react'
import SectionHeading from "@/components/SectionHeading";
import { Category } from '@/interfaces/Category';
import ProductCard from '../ProductCard';
import { Product } from '@/interfaces/Product';
import { urlFor } from '@/sanity/lib/image';
import ProductSkeleton from '../Skeleton/ProductSkeleton';

const CategoryProducts = ({categories,products}:{categories:Category[],products:Product[]}) => {
  const [prod,setProd] = useState<Product[]>([])
  const [categ,setCateg] = useState<Category[]>([])
  useEffect(() => {
    setProd(products)
    setCateg(categories)
  },[categories,products])
  return (
  <section className="mt-32 px-8">
        <SectionHeading heading="Top categories" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10 mt-12 ">
            {
              categ.length > 0 ? 
                categ.map((category,i) => {
                const catProducts = prod.filter((e) => e.category._ref === category._id) 
              const imageUrl = urlFor(category.image.asset._ref).url()
                return <ProductCard InfoSection={false} imagePath={imageUrl} key={i}
                  productCounts={catProducts.length!} title={category.title}
              />
            })
            :
            Array(3).fill(null).map((_, index) => (
              <ProductSkeleton badge={false} getInfo={false} key={index}/>
            ))
              
          }    
        </div>
      </section>
  )
}

export default CategoryProducts
