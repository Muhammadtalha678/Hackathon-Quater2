import { inter } from '@/utils/fonts'
import React from 'react'


const SectionHeading = ({heading}:{heading:string}) => {
  return (
    <h1 className={`${inter.className } text-[25px] sm:text-[32px] leading-9 text-[#272343] font-medium`}>
          {heading}
    </h1>
  )
}

export default SectionHeading
