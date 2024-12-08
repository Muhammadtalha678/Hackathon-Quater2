import React from 'react'
import ThemeText from './ThemeText'
import { FaCheck } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const TopHeader = ({sideOneText,sideTwoText,bg,textColor}:{sideOneText?:string,sideTwoText?:React.ReactNode,bg?:string,textColor?:string}) => {
  return (
    <div className={`h-11 px-4 md:px-8 lg:px-12 xl:px-36 ${ bg ||'bg-[#272343]'} flex items-center justify-between`}>
        <div className="flex gap-2 items-center">
            <FaCheck size={13} color='#FFFFFF'/>
              <ThemeText fontWeight='font-normal' className={`${textColor || 'text-[#FFFFFF]'} leading-3 text-[8px] mxs:text-[10px] xs:text-[13px]`}>
                  {sideOneText || 'Free shipping on all orders over $50'}
              </ThemeText>
        </div>
        {sideTwoText || <div className="flex item-center gap-2">
            <div className='flex gap-1  items-center'>
                <ThemeText fontWeight='font-normal' className='text-[8px] mxs:text-[10px] xs:text-[13px] leading-4 text-[#FFFFFF]'>English</ThemeText>
                <FaChevronDown color='#FFFFFF' size={8}/>      
            </div>
            <div className='flex items-center'>
                <ThemeText fontWeight='font-normal' className='text-[8px] mxs:text-[10px] xs:text-[13px] leading-4 text-[#FFFFFF]'>Faqs</ThemeText>
            </div>
            <div className='flex gap-1  items-center'>
                <AiOutlineExclamationCircle  color='white' className='text-[8px] mxs:text-[10px] xs:text-[13px]'/>     
                <ThemeText fontWeight='font-normal' className='text-[8px] mxs:text-[10px] xs:text-[13px] leading-4 text-[#FFFFFF]'>Need Help</ThemeText>
            </div>
        </div>}
    </div>
  )
}

export default TopHeader
