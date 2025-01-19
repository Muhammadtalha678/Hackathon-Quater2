
import { Metadata } from 'next';
import Image from "next/image";
import { Product } from '@/interfaces/Product';
import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';



export const metadata: Metadata = {
  title: "Comforty | Product Details Page",
  description: "Generated by create next app",
};
export default async function ProductDetail({params,}: {params: Promise<{ id: string }>}) {
  const id = (await params).id
  
  try {
    const response = await client.fetch(`*[_type == "products" && _id == $id][0]`, { id })
    const featuredProd = await client.fetch(`*[_type == "products" && "featured" in tags]`)
    if (!response || !featuredProd) {
      throw new Error("Error Fecthing Product");
    }
    const data: Product = await response
    const featured: Product[] = await featuredProd 

    
    const imageUrl = urlFor(data?.image?.asset?._ref).url()
    return (
       <div className="flex flex-col items-center p-6 min-h-screen">
        {/* Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Main Chair Image */}
          <div className="flex justify-center">
            <Image
              src={imageUrl}
              alt="Library Stool Chair"
              width={500}
              height={500}
              className="rounded-lg "
            />
          </div>
  
          {/* Chair Details */}
          <div className="flex flex-col justify-center space-y-10">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">
              {data.title}
            </h1>
            <div>
              <span className="bg-teal-600 text-white text-sm lg:text-base font-semibold px-4 py-2 rounded-full">
                ${ data.price?data.price : data.priceWithoutDiscount}
              </span>
            </div>
            <p className="text-sm lg:text-base text-gray-600">
              {data.description}
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
            <Link
              href="/products"
              className="text-teal-600 text-sm lg:text-base hover:underline"
            >
              View all
            </Link>
          </div>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
            {/* Featured Product Cards */}
            {
              
              featured.map((featProd, i) => {
                // console.log(featProd.tags);
                
                const imageUrl = urlFor(featProd.image.asset._ref).url()
                return  <div key={i} className="flex flex-col items-center">
                <Image
                  src={imageUrl} // Replace with your product images
                  alt={featProd.title}
                  width={140}
                  height={140}
                  className="rounded-md"
                />
                <p className="text-sm lg:text-base text-gray-800 mt-2">
                  {featProd.title}
                </p>
                <p className="text-sm lg:text-base text-gray-600 font-semibold">
                  ${featProd.price ? featProd.price : featProd.priceWithoutDiscount}
                </p>
              </div>
              })
               }
          </div>
        </div>
      </div>
    );
    
  } catch (error) {
    throw error
  }
}