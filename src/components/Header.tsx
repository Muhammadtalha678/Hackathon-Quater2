'use client';
import React, { useState, useEffect } from 'react';
import TopHeader from './TopHeader';
 import NavLinkHeader from './NavLinkHeader';
import MainHeader from './Header/MainHeader';
import SearchComponent from './Search';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);  // State to track scroll direction
  const [lastScrollY, setLastScrollY] = useState(0);  // To store the last scroll position
  const [scrollingTimeout, setScrollingTimeout] = useState<NodeJS.Timeout | null>(null);  // Timeout for detecting scroll stop

  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scroll down: Hide navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        // Scroll up: Show navbar
        setIsScrolled(false);
      }

      // Clear the previous timeout to reset the scroll stop detection
      if (scrollingTimeout) {
        clearTimeout(scrollingTimeout);
      }

      // Set a timeout to show the navbar when the user stops scrolling
      const timeout = setTimeout(() => {
        setIsScrolled(false);  // Navbar reappears after a short delay
      }, 150);  // Delay in ms (150ms after the user stops scrolling)

      setScrollingTimeout(timeout);  // Save the timeout reference
      setLastScrollY(currentScrollY);  // Update last scroll position
    };

    window.addEventListener('scroll', handleScroll);  // Attach scroll event listener

    return () => {
      window.removeEventListener('scroll', handleScroll);  // Cleanup on unmount
      if (scrollingTimeout) {
        clearTimeout(scrollingTimeout);  // Cleanup timeout on unmount
      }
    };
  }, [lastScrollY, scrollingTimeout]);  // Add `lastScrollY` and `scrollingTimeout` to the dependency array

  return (
    <header
      className={`sticky top-0 z-50 bg-[#F0F2F3] transition-transform duration-300 ease-in-out ${
        isScrolled ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Top Header */}
      <TopHeader />

      {/* Main Header */}
     <MainHeader/>

      {/* Search Bar for Small Screens */}
      <div className="md:hidden flex">
  <SearchComponent />
</div>

      {/* Navigation Links */}
      <NavLinkHeader />
    </header>
  );
};

export default Header;
