import React from 'react';
import Image from 'next/image';
import { ReadMoreButton } from './ReadMoreButton';

export const ProductShowcaseSection = () => {
  return (
    <section className="bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen" style={{ gap: '1px' }}>

          {/* Left Side - Two Panels */}
          <div className="grid grid-cols-2 lg:grid-cols-1 min-h-[50vh] lg:min-h-[1136px]" style={{ gap: '1px' }}>

            {/* Top-Left Panel - Device Detail 1 */}
            <div className="bg-gray-100 overflow-hidden relative w-full min-h-[220px] sm:min-h-[280px] lg:min-h-[560px]">
              <Image
                src="/aura-elevators/WhatsApp_Image_2026-02-24_at_10.43.31_AM_1_.jpeg"
                alt="Device Detail - Fingerprint Sensor"
                fill
                className="object-cover scale-[1.04] lg:scale-[1.08]"
                style={{ transformOrigin: 'center' }}
              />
            </div>

            {/* Bottom-Left Panel - Device Detail 2 */}
            <div className="bg-gray-100 overflow-hidden relative w-full min-h-[220px] sm:min-h-[280px] lg:min-h-[560px]">
              <Image
                src="/aura-elevators/WhatsApp_Image_2026-02-24_at_10.43.31_AM.jpeg"
                alt="Device Detail - Connectors"
                fill
                className="object-cover scale-[1.04] lg:scale-[1.08]"
                style={{ transformOrigin: 'center' }}
              />
            </div>

          </div>

          {/* Right Side - 3rd Card + Read More Button */}
          <div className="flex flex-col h-full min-h-screen lg:min-h-[1136px]">
            {/* Right Panel - Hero Section */}
            <div className="relative overflow-hidden w-full h-full">
              <Image
                src="/aura-elevators/WhatsApp_Image_2026-02-24_at_10.43.32_AM_1_.jpeg"
                alt="Burning Bike Concept"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              {/* Mobile Copy */}
              <div className="absolute bottom-24 left-0 right-0 px-6 z-20 lg:hidden">
                <div className="space-y-3">
                  <h2
                    className="text-white font-bold tracking-tight"
                    style={{
                      fontSize: 'clamp(1.75rem, 6vw, 2.25rem)',
                      lineHeight: '1',
                      letterSpacing: '-0.04em',
                    }}
                  >
                    Engineered to Elevate.
                  </h2>
                  <p
                    className="text-white/95 font-light leading-snug"
                    style={{
                      fontSize: 'clamp(0.95rem, 4.2vw, 1.1rem)',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Our installation process is built on precision, safety, and reliability, delivering modern and efficient elevator systems for any building.
                  </p>
                </div>
              </div>

              {/* Desktop Copy */}
              <div className="hidden lg:block absolute bottom-16 left-6 right-6 z-20">
                <div className="p-5">
                  <h2
                    className="text-white mb-3"
                    style={{
                      fontWeight: 700,
                      fontSize: '36px',
                      lineHeight: '100%',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    Engineered to Elevate.
                  </h2>
                  <p
                    className="text-white mb-4"
                    style={{
                      maxWidth: '338px',
                      fontWeight: 200,
                      fontSize: '20px',
                      lineHeight: '100%',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    Our installation process is built on precision, safety, and reliability, delivering modern and efficient elevator systems for any building.
                  </p>
                </div>
              </div>




            </div>

            {/* Read More Button - Below 3rd Card Only */}

          </div>

        </div>
      </div>
    </section>
  );
};
