export default function SkeletonLoader() {
  return (
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-50">
      {/* Main Section Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Main Chair Image Skeleton */}
        <div className="flex justify-center">
          <div className="w-[500px] h-[500px] bg-gray-300 animate-pulse rounded-lg"></div>
        </div>

        {/* Chair Details Skeleton */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="w-[200px] h-[30px] bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-[100px] h-[30px] bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-[250px] h-[20px] bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-[150px] h-[40px] bg-gray-300 animate-pulse rounded-md"></div>
        </div>
      </div>

      {/* Featured Products Skeleton */}
      <div className="w-full max-w-6xl mt-12">
        <div className="flex justify-between items-center">
          <div className="w-[200px] h-[30px] bg-gray-300 animate-pulse rounded-md"></div>
          <div className="w-[100px] h-[30px] bg-gray-300 animate-pulse rounded-md"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
          {/* Skeleton for Featured Product Cards */}
          {
            Array(5).fill(null).map((_, index) => (
              
          <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <div className="w-[140px] h-[140px] bg-gray-300 animate-pulse rounded-md"></div>
            <div className="w-[100px] h-[20px] bg-gray-300 animate-pulse rounded-md mt-2"></div>
            <div className="w-[80px] h-[20px] bg-gray-300 animate-pulse rounded-md mt-2"></div>
          </div>
            ))
          }

          
        </div>
      </div>
    </div>
  );
}
