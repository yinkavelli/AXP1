"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>      <header className={`w-full px-6 py-2 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gradient-to-r from-gray-950/95 via-blue-900/95 to-purple-900/95 shadow-lg backdrop-blur-md' 
          : 'bg-gradient-to-r from-gray-950/80 via-blue-900/80 to-purple-900/80'
      }`}><Link href="/" className="flex items-center">
          <Image
            src="/axp_logo.png"
            alt="Axinity Partners"
            width={300}
            height={100}
            className="transition-transform hover:scale-105 duration-300"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-12 text-lg font-medium justify-center items-center w-full text-white font-sans">
          <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/market" className="hover:text-blue-400 transition-colors">Market</Link>
          <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              onClick={handleDropdownClick}
              className="hover:text-blue-400 transition-colors cursor-pointer px-2 py-1 rounded-md flex items-center"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              Services
              <svg 
                className={`ml-1 w-4 h-4 text-blue-300 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              className={`absolute left-0 top-full mt-2 w-56 bg-blue-900 text-white rounded-md shadow-lg transition-all duration-200 ease-in-out ${
                isDropdownOpen 
                  ? 'opacity-100 visible translate-y-0' 
                  : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <Link 
                href="/strategic-advisory" 
                className="block px-6 py-3 text-base hover:bg-blue-800 rounded-t-md transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                Strategic Advisory
              </Link>
              <Link 
                href="/commercial-operations" 
                className="block px-6 py-3 text-base hover:bg-blue-800 rounded-b-md transition-colors"
                onClick={() => setIsDropdownOpen(false)}
              >
                Commercial Operations
              </Link>
            </div>
          </div>
          <Link href="/network" className="hover:text-blue-400 transition-colors">Network</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="focus:outline-none"
          >
            <span className="text-white text-2xl">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </header>
      {/* Mobile menu overlay */}
      <nav className={`fixed top-0 left-0 w-full h-full bg-black/80 z-40 flex flex-col items-center justify-center gap-12 text-2xl font-semibold animate-fade-in-up ${menuOpen ? '' : 'hidden'}`}>
          <Link href="/" className="text-white hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/market" className="text-white hover:text-blue-400" onClick={() => setMenuOpen(false)}>Market</Link>
          <Link href="/about" className="text-white hover:text-blue-400" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/strategic-advisory" className="text-white hover:text-blue-400" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/network" className="text-white hover:text-blue-400" onClick={() => setMenuOpen(false)}>Network</Link>
          <Link href="/contact" className="text-white hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contact</Link>
      </nav>
    </>
  );
}
