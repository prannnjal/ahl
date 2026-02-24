import React from 'react';
import Image from 'next/image';

export const YellowStrip = () => {
  return (
    <section className="relative h-[45px] flex items-center justify-center">
      <a
        href="#"
        aria-label="Book a free consultation"
        className="relative w-full h-full block"
      >
        <Image
          src="/why-artivo/Intersect (1).png"
          alt="Intersect Background"
          fill
          className="object-cover"
        />
        {/* Text and Arrow Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 px-6">
          <span className="text-black font-bold text-sm whitespace-nowrap">
            DISCOVER OUR PROCESS
          </span>
          <Image
            src="/why-artivo/Group 18.svg"
            alt="Arrow"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </a>
    </section>
  );
};
