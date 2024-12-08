
import Link from 'next/link'
import React from 'react'
import ThemeText from './ThemeText'

interface LinksProps{
    name: string,
  path: string,
  onclick:() => void
}
const NavLink = (props:LinksProps) => {
  return (
    <Link href={props.path} onClick={props.onclick}>
          <ThemeText fontWeight='font-normal' className='text-[14px] text-[#636270]  leading-6'>
              {props.name}
          </ThemeText>
      </Link>
  )
}

export default NavLink
