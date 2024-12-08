import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import Image from 'next/image'
import React from 'react'
import Prod2 from '../../../public/product2.png';
import Prod3 from '../../../public/product3.png';
import Prod4 from '../../../public/product4.png';
import Prod15 from '../../../public/product5.png';
import Prod6 from '../../../public/product6.png';
import Prod7 from '../../../public/product7.png';
import Prod8 from '../../../public/product8.png';
import { roboto } from '@/utils/fonts';
const Products = () => {
  return (
    <div className='md:px-12 lg:px-16 xl:px-32'>
       <section className="mt-10 px-8">
          <SectionHeading heading="Products" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <ProductCard sales={true} badge={true} InfoSection={true} productCounts={false} imagePath={Prod15.src} />
            <ProductCard sales={false} badge={true} InfoSection={true} productCounts={false} imagePath={Prod2.src} />
            <ProductCard badge={false} InfoSection={true} productCounts={false} imagePath={Prod3.src} />
            <ProductCard badge={false} InfoSection={true} productCounts={false} imagePath={Prod4.src} />
            <ProductCard sales={true} badge={true}  InfoSection={true} productCounts={false} imagePath={Prod15.src} />
            <ProductCard sales={false} badge={true} InfoSection={true} productCounts={false} imagePath={Prod6.src} />
            <ProductCard badge={false} InfoSection={true} productCounts={false} imagePath={Prod7.src} />
            <ProductCard badge={false} InfoSection={true} productCounts={false} imagePath={Prod8.src} />
            <ProductCard sales={true} badge={true} InfoSection={true} productCounts={false} imagePath={Prod15.src} />
            <ProductCard sales={false} badge={true} InfoSection={true} productCounts={false} imagePath={Prod2.src} />
            <ProductCard sales={true} badge={true}  InfoSection={true} productCounts={false} imagePath={Prod15.src} />
            <ProductCard sales={false} badge={true} InfoSection={true} productCounts={false} imagePath={Prod6.src} />
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8">
          {/* Responsive Images */}
                <Image src={Prod3} alt='Product' className='rounded-lg'/>
                <Image src={Prod2} alt='Product' className='rounded-lg'/>
                <Image src={Prod15} alt='Product' className='rounded-lg'/>
                <Image src={Prod6} alt='Product' className='rounded-lg'/>
                <Image src={Prod7} alt='Product' className='rounded-lg'/>
                <Image src={Prod8} alt='Product' className='rounded-lg'/>              
        </div>
      </div>
    </div>


      </section>
    </div>
  )
}

export default Products
