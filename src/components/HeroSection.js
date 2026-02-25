import React from 'react';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover min-w-full min-h-full"
        >
          <source src="/aura-elevators/WhatsApp_Video_2026-02-24_at_10.43.30_AM_1_.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradients */}
      {/* Left side gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10"></div>
      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>

      {/* Hero content */}
      <div className="absolute inset-0 z-20 flex items-center justify-start">
        <div className="px-4 sm:px-8 lg:px-16">
          <blockquote
            className="text-white"
            style={{
              fontWeight: 400,
              fontStyle: 'italic',
              letterSpacing: '-4%'
            }}
          >
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-[48px] leading-tight lg:leading-[1.2] max-w-xs sm:max-w-sm md:max-w-xl lg:w-[600px] drop-shadow-lg">
              <span className="font-bold text-yellow-400">AHL Elevators</span><br />
              Installing excellence in <br className="hidden lg:block" />
              buildings, apartments, and commercial spaces.
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};
