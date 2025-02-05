import HeroSection from "@/components/Home/HeroSection";
import Companies from "@/components/Home/Companies";
import FeatuedProducts from "@/components/Home/FeatuedProducts";
import CategoryProducts from "@/components/Home/CategoryProducts";
import ExploreStyles from "@/components/Home/ExploreStyles";
import Products from "@/components/Home/Products";
import { HomePage } from "@/interfaces/HomePage";

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/home`, { cache: 'no-store' })
    if (!response.ok) {
      throw new Error("Invalid Request");
    }
    
  const data: {
    error: boolean,
    data:HomePage,
    message: string
  } = await response.json()
  
    
  if (data.error) {
    throw new Error(data.message);
  }
    const { featuredProducts,categories,products,galleryProducts } = data.data
    
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
     <ExploreStyles galleryProd={galleryProducts}/>
       

      {/* products */}
      <Products products={products}/>
    </div>
  );
 
}
