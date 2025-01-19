import { Product } from "@/interfaces/Product";
import { Category } from "@/interfaces/Category";
import HeroSection from "@/components/Home/HeroSection";
import Companies from "@/components/Home/Companies";
import FeatuedProducts from "@/components/Home/FeatuedProducts";
import CategoryProducts from "@/components/Home/CategoryProducts";
import ExploreStyles from "@/components/Home/ExploreStyles";
import Products from "@/components/Home/Products";


export default async function Home() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home`, { cache: 'no-store' })
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const {data} = await response.json()
     const {featuredProducts,categories,products}:{featuredProducts:Product[],categories:Category[],products:Product[]} = data
       return (
    <div className=" md:px-12 lg:px-16 xl:px-32 ">
      {/* hero section */}
     <HeroSection/>

      {/* companies section */}
      <Companies/>
      
      {/* Featured Product Section */}
      <FeatuedProducts featProd={featuredProducts}/>
      {/* Top Categories  */}
      <CategoryProducts categories={categories} products={products}/>

      {/* explore styles */}
     <ExploreStyles/>
       

      {/* products */}
      <Products products={products}/>
    </div>
  );
  } catch (error) {
    throw error
  }
 
}
