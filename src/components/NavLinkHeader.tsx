'use client'
import { navLinks } from '@/utils/link'
import React from 'react'
import NavLink from './NavLink'
import ThemeText from './ThemeText'
import Menu from './Menu'

const NavLinkHeader = () => {
  return (
    <div className='h-[74px] border-b-2 bg-[#FFFFFF] w-full px-4 md:px-8 lg:px-12 xl:px-36 flex items-center justify-between'>
      <div className="hidden sm:flex gap-8">
        {navLinks.map((e,i) => {
            return <NavLink name={e.name} path={e.path} key={i+1} />
        })}
      </div>
      <div className="flex sm:hidden gap-8">
        <Menu size={24}/>
      </div>
      <div className="flex gap-2">
        <ThemeText fontWeight='font-normal' className='text-[#636270] text-[12px] xs:text-[14px] leading-4'>Contact:</ThemeText>
        <ThemeText fontWeight='font-medium' className='text-[#272343] text-[12px] xs:text-[14px] leading-4'>(808) 555-0111</ThemeText>
        
      </div>
    </div>
  )
}

export default NavLinkHeader
