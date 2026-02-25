"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export const Navbar = ({ variant = 'default' }) => {
  const pathname = usePathname();
  const isContactTheme = variant === 'contact' || pathname === '/contact-us';
  const navBackground = isContactTheme
    ? 'linear-gradient(90deg, #0B192F 0%, #CD400B 100%)'
    : 'rgba(0, 0, 0, 0.15)';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className="absolute top-0 left-0 right-0 z-50"
      style={{ background: navBackground, opacity: 1 }}
    >
      <div className="py-6 flex justify-between items-center relative" style={{
        paddingLeft: 'clamp(1rem, 4.68vw, 4rem)',
        paddingRight: 'clamp(1rem, 4.68vw, 4rem)'
      }}>
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-white tracking-widest uppercase">
            AHL Elevators
          </a>
        </div>

        {/* Right Side - Navigation Links and Button */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            Our Work
          </a>

          <a href="/about" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            About
          </a>
          <a href="/capabilities" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            Capabilities
          </a>
          <a href="/contact-us" className="text-white text-lg font-medium hover:text-gray-300 transition-colors">
            Contact Us
          </a>

          {/* Connect Button */}
          <a
            href="https://calendly.com/artivo/free-design-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black px-8 py-3 font-semibold text-sm rounded-full transition-colors"
            style={{ backgroundColor: 'rgba(255, 242, 8, 1)' }}
          >
            Book a Free Audit
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden ml-4 flex flex-col gap-1.5 items-center justify-center w-10 h-10 rounded-full border border-white/30"
          onClick={handleToggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-transform duration-300 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-sm border-t border-white/10 transition-[transform,opacity] duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'
          }`}
        style={{
          paddingLeft: 'clamp(1rem, 4.68vw, 4rem)',
          paddingRight: 'clamp(1rem, 4.68vw, 4rem)',
          paddingBottom: 'clamp(2rem, 4vw, 3rem)',
          background: isContactTheme ? navBackground : 'rgba(0,0,0,0.45)'
        }}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col gap-5 pt-6 text-center">
          <a
            href="/"
            className="text-white text-[clamp(1.1rem,4vw,1.35rem)] font-semibold hover:text-gray-300 transition-colors"
            onClick={handleCloseMenu}
          >
            Home
          </a>
          <a
            href="/capabilities"
            className="text-white text-[clamp(1.1rem,4vw,1.35rem)] font-semibold hover:text-gray-300 transition-colors"
            onClick={handleCloseMenu}
          >
            Capabilities
          </a>
          <a
            href="/about"
            className="text-white text-[clamp(1.1rem,4vw,1.35rem)] font-semibold hover:text-gray-300 transition-colors"
            onClick={handleCloseMenu}
          >
            About
          </a>
          <a
            href="/contact-us"
            className="text-white text-[clamp(1.1rem,4vw,1.35rem)] font-semibold hover:text-gray-300 transition-colors"
            onClick={handleCloseMenu}
          >
            Contact Us
          </a>
          <a
            href="https://calendly.com/artivo/free-design-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center text-black py-3 font-semibold text-base rounded-full transition-colors"
            style={{ backgroundColor: 'rgba(255, 242, 8, 1)' }}
            onClick={handleCloseMenu}
          >
            Book a Free Audit
          </a>
        </div>
      </div>
    </nav>
  );
};
