import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ViewAllProjectsStrip = () => {
  return (
    <Link href="/gp-hybrid-bike" className="block">
      <section className="h-12 flex items-center -mt-19 cursor-pointer hover:opacity-90 transition-opacity" style={{ backgroundColor: 'rgba(255, 242, 8, 1)' }}>
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-center space-x-2">
            <h2 className="text-black text-base font-bold tracking-wide uppercase">
              VIEW ALL PROJECTS
            </h2>
            <Image
              src="/Group 17.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="text-black"
            />
          </div>
        </div>
      </section>
    </Link>
  );
};



