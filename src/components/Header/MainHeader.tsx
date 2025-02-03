'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavbarLogo from '../../../public/NavbarLogo.png';
import ThemeText from '../ThemeText';
import { dm_sans } from '@/utils/fonts';
import Cart from '../../../public/cart.png';
import { useCart } from '@/context/CartContext';
import SearchCompo from '../Search';

const MainHeader = () => {
    const [searchQuery,setSearchQuery] = useState('')
    const { cart } = useCart();
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log(searchQuery);
            setSearchQuery(searchQuery)
        }, 500);  
        return () => clearTimeout(timer)
    }, [searchQuery])
    
    return (
      <div className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-12 xl:px-36 bg-[#F0F2F3]">
        {/* Logo */}
        <Link href={'/'}>
          <Image src={NavbarLogo} alt="Navbar logo" />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex w-full ">
          <SearchCompo/>
        </div>
        
        {/* Cart */}
        <div className="bg-[#FFFFFF] flex items-center px-2 cursor-pointer h-12 rounded-lg">
          <Link href={'/cart'}>
            <div className="flex items-center gap-4">
              <Image src={Cart} alt="cart" width={22} height={22} />
              <ThemeText fontWeight="font-medium" className="text-[12px] leading-3">
                Cart
              </ThemeText>
              <div
                className={`flex items-center justify-center w-5 h-5 bg-[#007580] rounded-2xl`}
              >
                <p className={`${dm_sans.className} text-[10px] text-[#fff] leading-[10px]`}>
                  {cart.length}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
  )
}

export default MainHeader
