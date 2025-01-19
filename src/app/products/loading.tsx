'use client'

import React from 'react';
import ThemeText from '@/components/ThemeText'; 
import Button from '@/components/Button'; 

export default function Loading() {
  return (
    <div className="md:px-12 lg:px-16 xl:px-32">
      <section className="mt-10 px-8">
        {/* Section Heading Skeleton */}
        <div className="h-6 w-40 bg-gray-300 animate-pulse rounded mb-6"></div>

        {/* Products Grid with Skeleton */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array(8)
            .fill(null)
            .map((_, index) => (
             <div
  key={index}
  className="flex items-center justify-center w-full"
>
  <div className="relative flex flex-col w-full h-auto rounded-lg overflow-hidden bg-white shadow-md">
    {/* Product Image Skeleton */}
    <div className="relative w-full h-[350px] bg-gray-300 animate-pulse rounded-lg"></div>

    {/* Badge Section Skeleton */}
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

    {/* Info Section Skeleton */}
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


  </div>
</div>


            ))}
        </div>

        {/* Newsletter Section Skeleton */}
        <div className="bg-[#F0F2F3] py-10 mt-20">
          <div className="text-center mb-10">
            <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto animate-pulse"></div>
            <div className="flex flex-col sm:flex-row items-center justify-center mt-5 gap-4 px-4">
              <div className="h-10 bg-gray-200 rounded w-full sm:w-[300px] animate-pulse"></div>
              <div className="h-10 bg-gray-300 rounded w-20 animate-pulse"></div>
            </div>
          </div>

          {/* Instagram Section Skeleton */}
          <div className="text-center">
            <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-6 animate-pulse"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8">
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 h-32 w-full animate-pulse rounded-lg"
                  ></div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
