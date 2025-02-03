import ProductsList from '@/components/Products/ProductsList';
import SectionHeading from '@/components/SectionHeading';
import { client } from '@/sanity/lib/client';
import React from 'react'

const Search = async({searchParams}:{searchParams:Promise<{q:string}>}) => {
  const {q} = (await searchParams)
    //
    console.log(q);
    
  const products = await client.fetch(
  `*[_type == "products" && title match $q]`, 
  { q: `${q}*` } // Wildcard for partial search
);
   
    console.log("products",products);
    return (
     <div className='md:px-12 lg:px-16 xl:px-32'>
         {
          products.length > 0 
          ?
          <ProductsList products={products}/>
          : 
          <div className='mt-10 px-8'>
            <SectionHeading heading="No Products Found"/>
          
          </div>
        }
      </div>
  )
}

export default Search
