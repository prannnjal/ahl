import React from 'react';
import Image from 'next/image';

export const VisionsMissionsSection = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center" style={{ gap: '2px' }}>

          {/* Left Side - Technical Drawing */}
          <div className="relative">
            <Image
              src="/aura-elevators/WhatsApp_Image_2026-02-24_at_10.43.27_AM.jpeg"
              alt="Elevator Design"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="relative bg-white p-8 rounded-lg">
            {/* Decorative Arrow Icon - Top Right */}
            <div className="absolute top-4 right-4">
              <Image
                src="/New folder/Next Arrow.svg"
                alt="Arrow"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>

            <div className="space-y-6">
              {/* Heading */}
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                <span className="text-black">Visions</span>{' '}
                <span className="text-blue-600">make meaningful</span>{' '}
                <span className="text-black">missions.</span>
              </h2>

              {/* First Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed">
                At Aura Elevators, we believe every building deserves safe and reliable mobility. Your vision is the starting point and our mission is to shape it into a precise, functional, and elegant elevator solution.
              </p>

              {/* Second Paragraph */}
              <p className="text-lg text-gray-700 leading-relaxed">
                By combining creativity with engineering excellence, we bridge the gap between concept and execution, ensuring your goals are met with innovation, efficiency, and impact.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
