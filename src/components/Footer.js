import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer
      className="py-8 relative"
      style={{
        background: "linear-gradient(to right, rgba(11, 25, 47, 1), rgba(205, 64, 11, 1))"
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/2 11.png"
          alt="Footer Background"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end" style={{ gap: '2rem' }}>
          {/* Company Info & Social Media */}
          <div className="space-y-6">
            <a href="/" className="text-2xl font-bold text-white tracking-widest uppercase mb-6 inline-block">
              AHL Elevators
            </a>
            {/* Contact Information */}
            <div className="text-white space-y-3 max-w-sm">
              <p className="font-bold text-lg text-[#ffed00]">Deepak Yadav</p>
              <p className="text-sm flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+919667972293" className="hover:text-[#ffed00] transition-colors">+91 9667972293</a>
              </p>
              <p className="text-sm flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:ahlelevators56@gmail.com" className="hover:text-[#ffed00] transition-colors break-all">ahlelevators56@gmail.com</a>
              </p>
              <div className="text-sm mt-4 space-y-3">
                <p>
                  <strong className="text-[#ffed00]">Address:</strong> Khasara no. 2941/8, Gali No. 9,<br />
                  Laxman Vihar, Gurugram, Haryana-122001
                </p>
                <p>
                  <strong className="text-[#ffed00]">Corporate office:</strong> Basai Industrial Area<br />
                  Opp Basai Dhankot Railway Station<br />
                  Gurugram Haryana- 122001
                </p>
                <p>
                  <strong className="text-[#ffed00]">Corporate office:</strong> Delhi, Gurugram, Rewari, Neemran, Narnaul
                </p>
              </div>
            </div>
            {/* Copyright */}
            <div className="space-y-2 text-left pt-2">
              <p className="text-white text-sm opacity-80">©2025 AHL Elevators</p>
              <p className="text-white text-sm opacity-80">All Rights Reserved</p>
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-3 text-left">
            {/* PAGES */}
            <div className="space-y-4" style={{ marginRight: 'clamp(7rem, 14vw, 14rem)' }}>
              <h3 className="text-white text-sm font-bold uppercase tracking-wide">PAGES</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white text-sm hover:text-gray-300 transition-colors">About</Link></li>
                <li><Link href="/case-studies" className="text-white text-sm hover:text-gray-300 transition-colors">Case Studies</Link></li>
                <li><Link href="/contact-us" className="text-white text-sm hover:text-gray-300 transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div className="space-y-4" style={{ marginRight: 'clamp(10rem, 20vw, 20rem)' }}>
              <h3 className="text-white text-sm font-bold uppercase tracking-wide">SERVICES</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Residential Elevators</Link></li>
                <li><Link href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Commercial Elevators</Link></li>
                <li><Link href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Maintenance & Repairs</Link></li>
                <li><Link href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Modernization & Upgrades</Link></li>
                <li><Link href="#" className="text-white text-sm hover:text-gray-300 transition-colors">Custom Installations</Link></li>
              </ul>
            </div>

            {/* TERMS & CONDITIONS */}
            <div className="space-y-4">
              <h3 className="text-white text-sm font-bold uppercase tracking-wide">TERMS & CONDITIONS</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy-policy" className="text-white text-sm hover:text-gray-300 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-white text-sm hover:text-gray-300 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="mt-12 pt-8 text-center border-t border-white/20">
          <p className="text-white text-sm font-semibold tracking-wide">
            Taking You Upward And Beyond!
          </p>
        </div>
      </div>
    </footer>
  );
};
