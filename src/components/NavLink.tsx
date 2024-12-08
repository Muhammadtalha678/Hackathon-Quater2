
import Link from 'next/link'
import React from 'react'
import ThemeText from './ThemeText'
import { usePathname } from "next/navigation";
interface LinksProps{
    name: string,
  path: string,
  onclick?:() => void
}
const NavLink = (props: LinksProps) => {
  const pathname = usePathname()
  return (
    <Link href={props.path} onClick={props.onclick}>
      <ThemeText fontWeight='font-normal'
        className={`text-[14px]  ${pathname === props.path ? 'text-[#007580]' : 'text-[#636270]'}  leading-6`}>
              {props.name}
          </ThemeText>
      </Link>
  )
}

export default NavLink
