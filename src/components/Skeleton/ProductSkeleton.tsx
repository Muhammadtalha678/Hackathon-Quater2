import React from 'react'
import Button from '../Button'
import ThemeText from '../ThemeText'

const ProductSkeleton = ({getInfo= true,badge= true}:{getInfo?:boolean,badge?:boolean}) => {
  return (
      <div
      className="flex items-center justify-center w-full"
    >
      <div className="relative flex flex-col w-full h-auto rounded-lg overflow-hidden bg-white shadow-md">
        {/* Product Image Skeleton */}
        <div className="relative w-full h-[350px] bg-gray-300 animate-pulse rounded-lg"></div>
    
        {/* Badge Section Skeleton */}
       {
        badge && 
         <div className="absolute top-0 flex justify-between w-full p-2">
          {/* Neutral badge button (gray) */}
          <Button
            width={'w-14'}
            height={'h-7'}
            borderRad={'rounded'}
            bg="bg-gray-400"
          >
            <ThemeText fontWeight="font-normal" className="text-[12px] leading-3 text-white">
              {""}
            </ThemeText>
          </Button>
        </div>
       }
    
        {/* Info Section Skeleton */}
      {getInfo &&
         <div className="pt-2 w-full flex items-center">
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-1">
          {/* Product Title Skeleton */}
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2 animate-pulse">
            <span className="sr-only">Product Title</span>
          </div>
          {/* Product Price Skeleton */}
          <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse">
            <span className="sr-only">Product Price</span>
          </div>
          {/* Product Discount Price Skeleton */}
          <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse mt-2">
            <span className="sr-only">Discount Price</span>
          </div>
        </div>
        <div className="flex">
          {/* Add to Cart Button Skeleton */}
          <Button width="w-[44px]" height="h-[44px]" borderRad="rounded-lg" bg="bg-gray-400">
            <div className="flex items-center justify-center">
              <span className="sr-only">Add to Cart</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
      }
    
    
      </div>
    </div>
  )
}

export default ProductSkeleton
