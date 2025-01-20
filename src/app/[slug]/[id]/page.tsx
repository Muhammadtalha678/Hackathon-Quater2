import CategoryLists from '@/components/Category/CategoryLists'
import SectionHeading from '@/components/SectionHeading'
import { Product } from '@/interfaces/Product'
import { CATEGORY_PRODUCTS } from '@/lib/quries'
import { client } from '@/sanity/lib/client'
import React from 'react'

const ProdByCategory = async ({ params }: { params: Promise<{ slug: string, id: string }> }) => {
    const { slug, id } = (await params)
    
    const response:Product[] = await client.fetch(CATEGORY_PRODUCTS, { id })
    if (!response) {
        throw new Error("Error Fetching Product");
    }
    return (
    <div className='md:px-12 lg:px-16 xl:px-32'>
         {
            response.length > 0 
            ? <CategoryLists cateProd={response} slug={slug} />
            : <SectionHeading heading='No Product Found'/>
         }
    </div>
  )
}

export default ProdByCategory
