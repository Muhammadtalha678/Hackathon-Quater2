'use client'
import React from 'react'
interface ButtonProps{
  bg?: string,
  width: string,
  height: string,
  borderRad:string,
  children: React.ReactNode,
  clickButton?:() => void
}
const Button = (props:ButtonProps) => {
  return (
    <button className={`${props.borderRad} ${props.bg || 'bg-[#01AD5A]'} ${props.width} ${props.height} items-center`}
    onClick={props.clickButton}>
          {props.children}
    </button>
  )
}

export default Button