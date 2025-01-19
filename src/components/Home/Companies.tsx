import Image from "next/image";
import Company1 from '../../../public/company1.png'
import Company2 from '../../../public/company2.png'
import Company3 from '../../../public/company3.png'
import Company4 from '../../../public/company4.png'
import Company5 from '../../../public/company5.png'
import Company6 from '../../../public/company6.png'
import Company7 from '../../../public/company7.png'

const Companies = () => {
  return (
    <section className=" px-8">
        <div className="grid gap-4 grid-cols-7 w-full">
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
  )
}

export default Companies
