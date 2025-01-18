export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
    return (
   <div className="md:px-12 lg:px-16 xl:px-32">
  <section className="mt-10 px-8">
    {/* Section Heading */}
    <div className="h-6 w-40 bg-gray-300 animate-pulse rounded mb-6"></div>

    {/* Products Grid */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array(8)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            className="max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden w-full"
          >
            {/* Skeleton for Product Image */}
            <div className="bg-gray-200 h-48 w-full animate-pulse"></div>

            {/* Skeleton for Product Details */}
            <div className="p-4">
              {/* Product Name */}
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
              {/* Product Price */}
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
              {/* Add to Cart Button */}
              <div className="h-10 bg-gray-300 rounded w-full animate-pulse"></div>
            </div>
          </div>
        ))}
    </div>

    {/* Newsletter Section */}
    <div className="bg-[#F0F2F3] py-10 mt-20">
      <div className="text-center mb-10">
        <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto animate-pulse"></div>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-5 gap-4 px-4">
          <div className="h-10 bg-gray-200 rounded w-full sm:w-[300px] animate-pulse"></div>
          <div className="h-10 bg-gray-300 rounded w-20 animate-pulse"></div>
        </div>
      </div>

      {/* Instagram Section */}
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

    )
}