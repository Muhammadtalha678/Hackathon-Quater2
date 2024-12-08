
import Prod2 from '../../../../public/product2.png';
import Prod3 from '../../../../public/product3.png';
import Prod15 from '../../../../public/product5.png';
import Prod6 from '../../../../public/product6.png';
import Prod7 from '../../../../public/product7.png';
import Prod8 from '../../../../public/product8.png';
import { products } from "@/utils/products";
import Image from "next/image";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const images = [
    {image:Prod2},
    {image:Prod3},
    {image:Prod15},
    {image:Prod6},
    {image:Prod7},
  ]
  const { id } = params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
     <div className="flex flex-col items-center p-6 min-h-screen">
      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
        {/* Main Chair Image */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt="Library Stool Chair"
            width={500}
            height={500}
            className="rounded-lg "
          />
        </div>

        {/* Chair Details */}
        <div className="flex flex-col justify-center space-y-10">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">
            Library Stool Chair
          </h1>
          <div>
            <span className="bg-teal-600 text-white text-sm lg:text-base font-semibold px-4 py-2 rounded-full">
              $20.00 USD
            </span>
          </div>
          <p className="text-sm lg:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing.
          </p>
          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 text-sm lg:text-base lg:w-40">
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
          {/* {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={`/chair${index + 1}.jpg`} // Replace with your product images
                alt={`Chair ${index + 1}`}
                width={140}
                height={140}
                className="rounded-md"
              />
              <p className="text-sm lg:text-base text-gray-800 mt-2">
                Library Stool Chair
              </p>
              <p className="text-sm lg:text-base text-gray-600 font-semibold">
                $99
              </p>
            </div>
          ))} */}
          {
            images.map((e, i) => {
              return  <div key={i+1} className="flex flex-col items-center">
              <Image
                src={e.image} // Replace with your product images
                alt={`Chair`}
                width={140}
                height={140}
                className="rounded-md"
              />
              <p className="text-sm lg:text-base text-gray-800 mt-2">
                Library Stool Chair
              </p>
              <p className="text-sm lg:text-base text-gray-600 font-semibold">
                $99
              </p>
            </div>
            })
             }
        </div>
      </div>
    </div>
  );
}