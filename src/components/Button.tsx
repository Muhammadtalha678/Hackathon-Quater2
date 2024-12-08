import React from 'react'
interface ButtonProps{
  bg?: string,
  width: string,
  height: string,
  borderRad:string,
  children:React.ReactNode
}
const Button = (props:ButtonProps) => {
  return (
    <button className={`${props.borderRad} ${props.bg || 'bg-[#01AD5A]'} ${props.width} ${props.height} items-center`}>
          {props.children}
    </button>
  )
}

export default Button