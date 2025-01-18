export default function Loading() {
    <div className="flex flex-col items-center p-6 min-h-screen bg-gray-50">
  {/* Main Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
    {/* Main Chair Image */}
    <div className="flex justify-center">
      <img
        src="/path-to-your-image.jpg"
        alt="Library Stool Chair"
        className="rounded-lg shadow-md w-[500px] h-[500px]"
      />
    </div>

    {/* Chair Details */}
    <div className="flex flex-col justify-center space-y-6">
      <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">
        Library Stool Chair
      </h1>
      <div>
        <span className="inline-block bg-teal-600 text-white text-sm lg:text-base font-semibold px-4 py-2 rounded-full shadow">
          $20.00 USD
        </span>
      </div>
      <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
      </p>
      <button className="px-4 py-2 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 text-sm lg:text-base lg:w-40 transition-colors duration-200">
        Add To Cart
      </button>
    </div>
  </div>

  {/* Featured Products Section */}
  <div className="w-full max-w-6xl mt-12">
    <div className="flex justify-between items-center">
      <h2 className="text-lg lg:text-2xl font-semibold text-gray-800">
        Featured Products
      </h2>
      <a
        href="#"
        className="text-teal-600 text-sm lg:text-base hover:underline"
      >
        View all
      </a>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
      {/* Featured Product Cards */}
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <img
          src="/path-to-image-1.jpg"
          alt="Chair 1"
          className="rounded-md w-[140px] h-[140px]"
        />
        <p className="text-sm lg:text-base text-gray-800 mt-2 text-center">
          Library Stool Chair
        </p>
        <p className="text-sm lg:text-base text-gray-600 font-semibold">
          $99
        </p>
      </div>
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <img
          src="/path-to-image-2.jpg"
          alt="Chair 2"
          className="rounded-md w-[140px] h-[140px]"
        />
        <p className="text-sm lg:text-base text-gray-800 mt-2 text-center">
          Library Stool Chair
        </p>
        <p className="text-sm lg:text-base text-gray-600 font-semibold">
          $99
        </p>
      </div>
      <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <img
          src="/path-to-image-3.jpg"
          alt="Chair 3"
          className="rounded-md w-[140px] h-[140px]"
        />
        <p className="text-sm lg:text-base text-gray-800 mt-2 text-center">
          Library Stool Chair
        </p>
        <p className="text-sm lg:text-base text-gray-600 font-semibold">
          $99
        </p>
      </div>
      {/* Add more cards as needed */}
    </div>
  </div>
</div>

}