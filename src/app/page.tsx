import Button from "@/components/Button";
import ThemeText from "@/components/ThemeText";
import { inter } from "@/utils/fonts";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Product1 from '../../public/Product1.png'
import Company1 from '../../public/company1.png'
import Company2 from '../../public/company2.png'
import Company3 from '../../public/company3.png'
import Company4 from '../../public/company4.png'
import Company5 from '../../public/company5.png'
import Company6 from '../../public/company6.png'
import Company7 from '../../public/company7.png'


export default function Home() {
  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-36 ">
      {/* hero section */}
      <section>
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

      {/* companies section */}
      <section className="mt-5">
        <div className="grid gap-4 grid-cols-7  w-full">
          <div className="cols-span-1  flex items-center justify-center">
            <Image src={Company1} alt="company 1"/>
          </div>
          <div className="cols-span-1  flex items-center justify-center">
            <Image src={Company2} alt="company 2"/>
          </div>
          <div className="cols-span-1  flex items-center justify-center">
            <Image src={Company3} alt="company 3"/>
          </div>
          <div className="cols-span-1  flex items-center justify-center">
            <Image src={Company4} alt="company 4"/>
          </div>
          <div className="cols-span-1  flex items-center justify-center">
            <Image src={Company5} alt="company 5"/>
          </div>
          <div className="cols-span-1  flex items-center justify-center">
            <Image src={Company6} alt="company 6"/>
          </div>
          <div className="cols-span-1  flex items-center justify-center">
            <Image src={Company7} alt="company 7"/>
          </div>
        </div>
      </section>
      
    </div>
  );
}
