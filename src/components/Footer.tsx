import Image from 'next/image';
import React from 'react';
import NavbarLogo from '../../public/NavbarLogo.png'
import PayPal from '../../public/paypal.png'
import ThemeText from './ThemeText';
import Link from 'next/link';
import { TiSocialFacebook, TiSocialInstagram, TiSocialPinterest, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti';
import TopHeader from './TopHeader';
const Footer = () => {
  return (
  <div >
    <footer className="bg-white text-black md:px-12 lg:px-16 xl:px-32 px-8 py-12 border-t-2 border-b-2 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Social Media Column */}
        <div>
          {/* <h3 className="font-bold text-lg mb-4">Social Media</h3> */}
          <Image src={NavbarLogo} alt='Bottom Navbar logo ' className='mb-4'/>
          
          <ThemeText fontWeight='font-normal'  className='text-base text-[#272343]'>
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
            Cras egestas purus 
          </ThemeText>
          <ul className="flex mt-4 items-center gap-2">
            <li className='w-5 h-5 rounded-full border-2 flex items-center justify-center transform transition-transform duration-300 hover:scale-125'>
              <Link href="#" className="hover:underline">
                <TiSocialFacebook size={16} className='hover:text-[rgb(43,198,241)]'/>
              </Link>
            </li>
            <li className='w-5 h-5 rounded-full border-2 flex items-center justify-center transform transition-transform duration-300 hover:scale-125'>
              <Link href="#" className="hover:underline">
                <TiSocialTwitter size={16} className='hover:text-[rgb(43,198,241)]'/>
              </Link>
            </li>
            <li className='w-5 h-5 rounded-full border-2 flex items-center justify-center transform transition-transform duration-300 hover:scale-125'>
              <Link href="#" className="hover:underline">
                <TiSocialInstagram size={16} className='hover:text-[hsl(0,88%,56%)]'/>
              </Link>
            </li>
            <li className='w-5 h-5 rounded-full border-2 flex items-center justify-center transform transition-transform duration-300 hover:scale-125'>
              <Link href="#" className="hover:underline">
                <TiSocialPinterest size={16} className='hover:text-[hsl(0,88%,56%)]'/>
              </Link>
            </li>
            <li className='w-5 h-5 rounded-full border-2 flex items-center justify-center transform transition-transform duration-300 hover:scale-105'>
              <Link href="#" className="hover:underline">
                <TiSocialYoutube size={16} className='hover:text-[hsl(0,88%,56%)]'/>
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Category Column */}
        <div>
          <h3 className="font-bold text-sm mb-4 text-[#9A9CAA]">Category</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">
              <ThemeText fontWeight='font-normal' className='text-base leading-[17px]'>
                Sofa
              </ThemeText>
              </a></li>
            <li><a href="#" className="hover:underline">
              <ThemeText fontWeight='font-normal' className='text-base leading-[17px]'>
                Armchair
              </ThemeText>
              </a></li>
            <li><a href="#" className="hover:underline">
              <ThemeText fontWeight='font-normal' className='text-base leading-[17px]'>
                Wing Chair
              </ThemeText>
              </a></li>
            <li><a href="#" className="hover:underline">
              <ThemeText fontWeight='font-normal' className='text-base leading-[17px]'>
                Desk Chair
              </ThemeText>
              </a></li>
            <li><a href="#" className="hover:underline">
              <ThemeText fontWeight='font-normal' className='text-base leading-[17px]'>
                Wodden Chair
              </ThemeText>
              </a></li>
            <li><a href="#" className="hover:underline">
              <ThemeText fontWeight='font-normal' className='text-base leading-[17px]'>
                Park Bench
              </ThemeText>
              </a></li>
          </ul>
        </div>

        {/* Support Column */}
        <div>
          <h3 className="font-bold text-sm mb-4 text-[#9A9CAA]">Support</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">
               <ThemeText fontWeight='font-normal' className='text-base leading-[17px]'>
                Help & Support
              </ThemeText>
              </a></li>
            <li><a href="#" className="hover:underline">
               <ThemeText fontWeight='font-normal' className='text-base leading-[17px]'>
                Terms & Conditions
              </ThemeText>
              </a></li>
            <li><a href="#" className="hover:underline">
               <ThemeText fontWeight='font-normal' className='text-base leading-[17px]'>
                Pivacy Policy
              </ThemeText>
              </a></li>
            <li><a href="#" className="hover:underline">
               <ThemeText fontWeight='font-normal' className='text-base leading-[17px]'>
                Help
              </ThemeText>
              </a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h3 className="font-bold text-sm mb-4 text-[#9A9CAA]">Newsletter</h3>
          <form className="flex items-center border rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 text-sm outline-none"
            />
            <button type="submit" className="bg-[#029FAE] text-white px-4 py-2">
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm">
            Subscribe to our newsletter to get updates on new products and offers.
          </p>
        </div>
      </div>
      {/* <TopHeader/> */}
      </footer>
      <TopHeader sideOneText='@ 2021 - Blogy - Designed & Develop by Zakirsoft'
        sideTwoText={<div className='flex item-center'>
          <div className='flex items-center'>
            <Image src={PayPal} alt='PayPal' />
         </div>
       </div>}
      bg='bg-[#FFFFFF]' textColor='text-[#9A9CAA]'/>
  </div>
  );
};

export default Footer;
