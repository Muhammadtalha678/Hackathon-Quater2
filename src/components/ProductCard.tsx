
import Image from 'next/image';
import React from 'react';
import ThemeText from './ThemeText';
import Button from './Button';
import { FiShoppingCart } from 'react-icons/fi';
import { ProdcutCardInterface } from '@/interfaces/ProductCard';
import Link from 'next/link';



const ProductCard = (
  {productCounts,InfoSection,badge,imagePath,id,title,price,pricewithoutDiscount,href}:ProdcutCardInterface) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="relative flex flex-col w-full h-auto rounded-lg overflow-hidden bg-white">
        {/* Badge Section */}

        {/* Image Section */}
        <div className="relative w-full h-[350px] cursor-pointer" >
          <Link href={href?href :`/products/${id}`}>
            <Image
              src={imagePath}
              alt="Featured Product"
              className="w-full h-full object-cover rounded-lg" fill
            />
          </Link>
          {
          
            productCounts && (
            <div className="flex items-center px-7 absolute bottom-0 w-full bg-opacity-60 bg-black h-[70px] rounded-b-lg">
              <div className="flex flex-col gap-1">
                <ThemeText fontWeight="font-medium" className="text-[20px] leading-[22px] text-white">
                  {title}
                </ThemeText>
                <ThemeText fontWeight="font-normal" className="text-[14px] leading-[19px] text-white">
                  {productCounts} Products
                </ThemeText>
              </div>
            </div>
          )}
          {badge && (
          <div className="absolute top-0 flex justify-between w-full p-2 ">
            <Button
              width={'w-14'}
              height={'h-7'}
              borderRad={'rounded'}
              bg={badge === 'Sales' ? 'bg-[#F5813F]' : ''}
            >
              <ThemeText fontWeight="font-normal" className="text-[12px] leading-3 text-white">
                {badge}
              </ThemeText>
            </Button>
          </div>
        )}
        </div>

        {/* Info Section */}
        {InfoSection && (
          <div className="pt-2 w-full flex items-center">
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-1">
                <ThemeText
                  fontWeight="font-normal"
                  className="text-[#007580] text-[16px] leading-[20px]"
                >
                  {title}
                </ThemeText>
                <div className="flex gap-2 items-center">
                  <ThemeText
                    fontWeight="font-normal"
                    className="text-[#272343] text-[18px] leading-[19px]"
                  >
                    {`$${price}`}
                  </ThemeText>
                  {pricewithoutDiscount && (
                    <ThemeText
                      fontWeight="font-normal"
                      className="line-through text-[#9A9CAA] text-[14px] leading-[15px]"
                    >
                      {`$${pricewithoutDiscount}`}
                    </ThemeText>
                  )}
                </div>
              </div>
              <div className="flex">
                <Button width="w-[44px]" height="h-[44px]" borderRad="rounded-lg" bg="bg-[#029FAE]">
                  <div className="flex items-center justify-center">
                    <FiShoppingCart />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
