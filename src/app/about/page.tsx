import Image from 'next/image';
import Prod15 from '../../../public/product5.png';
import About1 from '../../../public/about1.png';
import About2 from '../../../public/about2.png';
import About3 from '../../../public/about3.png';
import About4 from '../../../public/about4.png';

import Popular1 from '../../../public/popular1.png'
import Popular2 from '../../../public/popular11.png'
import Popular3 from '../../../public/popular111.png'
const AboutPage = () => {
  return (
    <div>
      <section className=" py-12 px-4 md:px-12 lg:px-16 xl:px-32">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-teal-700 text-white flex flex-col justify-center p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
            <p className="text-lg mb-6">
              At Comforty, we believe that the right chair can transform your space and elevate
              your comfort. Specializing in ergonomic design, premium materials, and modern
              aesthetics, we craft chairs that seamlessly blend style with functionality.
            </p>
            <button className="bg-white text-teal-700 py-2 px-4 rounded-md self-start hover:bg-teal-600 hover:text-white">
              View Collection
            </button>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={Prod15}
              alt="Chair Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Brand Features Section */}
      <section className="py-12 md:px-12 lg:px-16 xl:px-32 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">What Makes Our Brand Different</h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Next day as standard',
              description: 'Order before 3pm and get your order the next day as standard.',
              icon: About1,
            },
            {
              title: 'Made by true artisans',
              description: 'Handmade crafted goods made with real passion and craftsmanship.',
              icon: About2
            },
            {
              title: 'Unbeatable prices',
              description: 'For our materials and quality, you won’t find better prices anywhere.',
              icon: About3
            },
            {
              title: 'Recycled packaging',
              description:
                'We use 100% recycled to ensure our footprint is more manageable.',
              icon: About4
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg  text-center flex flex-col items-center"
            >
              <Image src={feature.icon} alt={feature.title} className="w-12 h-12 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-12  md:px-12 lg:px-16 xl:px-32 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl font-bold mb-8">Our Popular Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                {
                  title: 'The Dandy chair',
                  price: '$99.00',
                  image:  Popular2,
                },
                {
                  title: 'The Dandy chair',
                  price: '$99.00',
                  image:  Popular3,
                },
              {
                title: 'The Poplar suede sofa',
                price: '$99.00',
                image:  Popular1,
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg "
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-60  rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-teal-700 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
