import React from 'react'
import Product1 from '../../../public/Product1.png'
import ThemeText from '../ThemeText'
import { inter } from '@/utils/fonts'
import Button from '../Button'
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from "next/image"
const HeroSection = () => {
  return (
    <section className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-0 gap-12 bg-[#F0F2F3]   px-8 py-12 ">
        <div className="flex flex-col gap-4 sm:justify-center">
          <div className="flex flex-col gap-3 ">
            <ThemeText fontWeight="font-normal" className="leading-4 text-[16px] tracking-wider">Welcome to chairy</ThemeText>
            <h1 className={`sm:items-start items-center ${inter.className}  text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:leading-[66px] md:leading-[60pxpx]`}>
              Best Furniture Collection for your Interior.
            </h1>
          </div>
          <Button height="w-[115px] sm:w-[171px]" width="h-[35px] sm:h-[52px]" borderRad="rounded-lg">
            <div className="flex gap-2 sm:gap-4 items-center justify-center">
              <ThemeText fontWeight='font-normal' className='text-white'>Shop Now</ThemeText>
              <FaArrowRightLong color="white" />
            </div>
          </Button>
        </div>
        <div className="flex items-center justify-center">
          <Image src={Product1} alt="hero Image" className="w-[200px] h-[250px] sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[400px]"/>
        </div>
      <div>

        </div>
      </div>
      </section>
  )
}

export default HeroSection
