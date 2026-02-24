"use client";

import React from "react";
import Image from "next/image";

export const LogoCarousel = () => {
  const logos = [
    "/logos/Frame 102.png",
    "/logos/Frame 103 (1).png",
    "/logos/Frame 103.png",
    "/logos/Frame 104 (1).png",
    "/logos/Frame 104.png",
    "/logos/Frame 99 (1).png",
    "/logos/Frame 99.png",
    "/logos/Frame 100 (1).png",
    "/logos/Frame 100.png",
    "/logos/Frame 101 (1).png",
    "/logos/Frame 101.png",
    "/logos/Frame 102 (1).png",
  ];

  return (
    <>
      {/* Logo Carousel - Full Width */}
      <div className="w-full overflow-hidden py-4 sm:py-6">
        {/* First Row - Moving Right */}
        <div className="flex animate-scroll-right gap-2 sm:gap-4">
          {logos.map((logo, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-2 sm:px-3"
              style={{ width: "clamp(120px, 28vw, 220px)" }}
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={220}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 w-full h-auto max-h-[60px] sm:max-h-[80px] md:max-h-[100px]"
              />
            </div>
          ))}
          {/* Duplicate logos for seamless loop */}
          {logos.map((logo, index) => (
            <div
              key={`row1-dup-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-2 sm:px-3"
              style={{ width: "clamp(120px, 28vw, 220px)" }}
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={220}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 w-full h-auto max-h-[60px] sm:max-h-[80px] md:max-h-[100px]"
              />
            </div>
          ))}
        </div>

        {/* Second Row - Moving Left */}
        <div className="flex animate-scroll-left mt-3 gap-2 sm:gap-4">
          {logos.slice().reverse().map((logo, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-2 sm:px-3"
              style={{ width: "clamp(120px, 28vw, 220px)" }}
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={220}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 w-full h-auto max-h-[60px] sm:max-h-[80px] md:max-h-[100px]"
              />
            </div>
          ))}
          {/* Duplicate logos for seamless loop */}
          {logos.slice().reverse().map((logo, index) => (
            <div
              key={`row2-dup-${index}`}
              className="flex-shrink-0 flex items-center justify-center px-2 sm:px-3"
              style={{ width: "clamp(120px, 28vw, 220px)" }}
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={220}
                height={140}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 w-full h-auto max-h-[60px] sm:max-h-[80px] md:max-h-[100px]"
              />
            </div>
          ))}
        </div>
      </div>
          
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-scroll-right {
            animation-duration: 40s;
          }
          .animate-scroll-left {
            animation-duration: 40s;
          }
        }
      `}</style>
    </>
  );
};

