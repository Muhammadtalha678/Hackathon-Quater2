import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import React from 'react'
import Prod2 from '../../../public/product2.png';
import Prod3 from '../../../public/product3.png';
import Prod15 from '../../../public/product5.png';
import Prod6 from '../../../public/product6.png';
import Prod7 from '../../../public/product7.png';
import Prod8 from '../../../public/product8.png';
import { roboto } from '@/utils/fonts';
import { products } from '@/utils/products';
import { Metadata } from 'next';
import ProductsList from '@/components/Products/ProductsList';


export const metadata: Metadata = {
  title: "Comforty | Products Page",
  description: "Generated by create next app",
};
const Products = async() => {
  try {
    const response = await fetch('https://hackathon-quater2.vercel.app/api/products', {
      cache:'no-cache'
    })
    if (!response.ok) {
      throw new Error("Error Fetching Products");
    }
    const products = await response.json()
    return (
      <div className='md:px-12 lg:px-16 xl:px-32'>
         <ProductsList products={products.data}/>
      </div>
    )
  } catch (error) {
    throw error
  }
}

export default Products
