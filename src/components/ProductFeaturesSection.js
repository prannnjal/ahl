import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ProductFeaturesSection = () => {
  return (
    <section className="bg-white">
      <div className="w-full px-0">
        <div className="grid grid-cols-2 gap-0 h-[750px]">

          {/* Image 56 - Left 50% */}
          <div className="relative w-full h-full">
            <Image
              src="/aura-elevators/WhatsApp_Image_2026-02-24_at_10.43.32_AM_2_.jpeg"
              alt="Product Feature 1"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 right-0 z-10 pb-4 md:pb-6 pr-8 md:pr-12">
              <p
                style={{
                  color: 'rgba(143, 143, 143, 1)',
                  textAlign: 'right'
                }}
              >
                Aura Elevators
                <br />
                Smooth Ride Technology
              </p>
            </div>
          </div>

          {/* Image 57 - Right 50% */}
          <Link href="#" className="relative w-full h-full block cursor-pointer">
            <Image
              src="/aura-elevators/WhatsApp_Image_2026-02-24_at_10.43.32_AM.jpeg"
              alt="Product Feature 2"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 right-0 z-10 pb-4 md:pb-6 pr-8 md:pr-12">
              <p
                style={{
                  color: 'rgba(143, 143, 143, 1)',
                  textAlign: 'right'
                }}
              >
                Aura Elevators
                <br />
                Smart Destination Control
              </p>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

