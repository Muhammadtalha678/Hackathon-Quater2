import React from 'react'

const GallerySkeleton = () => {
  return (
      <>
       <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-2 items-center">
      {/* Vertical text skeleton */}
              <div className="writing-mode-vertical hidden text-xl font-medium tracking-wider md:block pt-6"
              style={{
                writingMode: 'vertical-rl',
                textOrientation: 'revert',
                transform: 'rotate(180deg)', // Rotates the text so it reads bottom-to-top
            }}
              >
        <div className="h-full bg-gray-300 w-full rounded animate-pulse"></div>
      </div>

      {/* Images section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Orange chair (left side) skeleton */}
        <div className="w-full md:w-[48%] h-[500px] bg-gray-300 animate-pulse"></div>

        {/* Other chairs (right side) skeleton */}
        <div className="grid grid-cols-2 gap-4 w-full h-[500px] md:w-[60%] lg:w-[48%]">
          {
            Array(4).fill(null).map((_, index) => (
                <div className="aspect-squar" key={index}>
                  <div className='h-full bg-gray-300 rounded animate-pulse'></div>
                </div>
              
            ))
          }
        </div>
      </div>
      </div>
          </>
  )
}

export default GallerySkeleton
