
import { Product } from '@/interfaces/Product'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
const ProdcutsInstagram = ({filterInsta}:{filterInsta:Product[]}) => {
  
  
    return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-8">
        {
            
                filterInsta.map((instaProduct, i) => {
                  const imageUrl = urlFor(instaProduct.image.asset._ref).url()
                return <Image src={imageUrl} width={300} height={300} alt='Product' className='rounded-lg' key={i}/>
                
              })
        }
                      
    </div>
      
  )
}

export default ProdcutsInstagram
