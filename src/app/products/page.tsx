import { Metadata } from 'next';
import ProductsList from '@/components/Products/ProductsList';
import { Product } from '@/interfaces/Product';
import SectionHeading from '@/components/SectionHeading';


export const metadata: Metadata = {
  title: "Comforty | Products Page",
  description: "Generated by create next app",
};
const Products = async() => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
      cache:'no-store'
    })
    
    if (!response.ok) {
      // this error come when request not found
      throw new Error("Invalid request");
    }
    const products:{error:boolean,data:Product[],message:string} = await response.json()
    if (products.error) {
      throw new Error(products.message);
    }
    return (
      <div className='md:px-12 lg:px-16 xl:px-32'>
         {
          products.data.length > 0 
          ?
          <ProductsList products={products.data}/>
          : 
          <div className='mt-10 px-8'>
            <SectionHeading heading="No Products Found"/>
          
          </div>
        }
      </div>
    )
}

export default Products
