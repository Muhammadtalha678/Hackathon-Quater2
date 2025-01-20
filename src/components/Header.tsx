'use client';
import React, { useState } from 'react';
import NavbarLogo from '../../public/NavbarLogo.png';
import Cart from '../../public/cart.png';
import Image from 'next/image';
import Link from 'next/link';
import ThemeText from './ThemeText';
import { dm_sans } from '@/utils/fonts';
import TopHeader from './TopHeader';
import NavLinkHeader from './NavLinkHeader';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F0F2F3]">
      {/* Top Header */}
      <TopHeader />

      {/* Main Header */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8 lg:px-12 xl:px-36 bg-[#F0F2F3]">
        {/* Logo */}
        <Link href={'/'}>
          <Image src={NavbarLogo} alt="Navbar logo" />
        </Link>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="hidden md:flex items-center flex-1 mx-4"
        >
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for products..."
            className="flex-1 h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007580] bg-white text-sm"
          />
          <button
            type="submit"
            className="h-12 px-6 ml-2 rounded-lg bg-[#007580] text-white text-sm hover:bg-[#005f66]"
          >
            Search
          </button>
        </form>

        {/* Cart */}
        <div className="bg-[#FFFFFF] flex items-center px-2 cursor-pointer h-12 rounded-lg">
          <Link href={'/cart'}>
            <div className="flex items-center gap-4">
              <Image src={Cart} alt="cart" width={22} height={22} />
              <ThemeText fontWeight="font-medium" className="text-[12px] leading-3">
                Cart
              </ThemeText>
              <div
                className={`flex items-center justify-center w-5 h-5 bg-[#007580] rounded-2xl`}
              >
                <p className={`${dm_sans.className} text-[10px] text-[#fff] leading-[10px]`}>
                  {cart.length}
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Search Bar for Small Screens */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex md:hidden items-center px-4 py-2 bg-[#F0F2F3]"
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for products..."
          className="flex-1 h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007580] bg-white text-sm"
        />
        <button
          type="submit"
          className="h-12 px-6 ml-2 rounded-lg bg-[#007580] text-white text-sm hover:bg-[#005f66]"
        >
          Search
        </button>
      </form>

      {/* Navigation Links */}
      <NavLinkHeader />
    </header>
  );
};

export default Header;
