
import React from 'react'
import { Product } from '@/interfaces/Product'
import Image from "next/image";
import Prod3 from '../../../public/product3.png';
import GallerySkeleton from '../Skeleton/GallerySkeleton';
import { urlFor } from '@/sanity/lib/image';

const ExploreStyles = ({ galleryProd }: { galleryProd: Product[] }) => {
  return (
    <section className="mt-32 px-8">
      {
    
      <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 items-center">
        {/* Vertical text */}
        <div
          className="writing-mode-vertical hidden text-xl font-medium tracking-wider text-zinc-900 md:block pt-6"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'revert',
            transform: 'rotate(180deg)', // Rotates the text so it reads bottom-to-top
          }}
        >
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Images section */}
        {
          galleryProd.length > 0 ?
          <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Orange chair (left side) */}
          <div className="w-full md:w-[48%]">
            <Image
              src={Prod3}
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Other chairs (right side) */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            {
              
              galleryProd.slice(0,4).map((g, i) => {
              const imageUrl = urlFor(g.image.asset._ref).url()
              return <div className="aspect-square" key={i}>
              <Image
                src={imageUrl}
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
              </div>
            
          
            })
          }
          </div>
        </div>
        :<GallerySkeleton/>
        }
      </div>
    
  }
    </section>
  )
}

export default ExploreStyles
