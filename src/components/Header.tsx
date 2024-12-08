import React from 'react'
import NavbarLogo from '../../public/NavbarLogo.png'
import Cart from '../../public/cart.png'
import Image from 'next/image'
import Link from 'next/link'
import ThemeText from './ThemeText'
import { dm_sans } from '@/utils/fonts'
import TopHeader from './TopHeader'
import NavLinkHeader from './NavLinkHeader'
const Header = () => {
  return (
    <div>
      {/* header 1 */}
      <TopHeader />
      {/* header 2 */}
      <div className='h-20 px-4 md:px-8 lg:px-12 xl:px-36 bg-[#F0F2F3] flex items-center'>
          <div className="flex w-full justify-between">
          <Link href={'/'}>
              <Image src={NavbarLogo} alt='Navbar logo'/>
          </Link>
          <div className='bg-[#FFFFFF] w-[120px] h-[144ps] rounded-lg flex items-center px-2'>
            <div className='flex items-center gap-4 '>
                <Image src={Cart} alt='cart' width={22} height={22}/>
                <ThemeText  fontWeight='font-medium' className='text-[12px] leading-3'>Cart</ThemeText>
                <div className={`flex items-center justify-center w-5 h-5 bg-[#007580] rounded-2xl `}>
                <p className={`${dm_sans.className} text-[10px] text-[#fff] leading-[10px]`}>2</p>
                </div>
            </div>
          </div>
          </div>
      </div>
      {/* header-3 */}
      <NavLinkHeader/>
    </div>
  )
}

export default Header
