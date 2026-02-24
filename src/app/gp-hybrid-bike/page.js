import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';

import { ContactSection } from '@/components/ContactSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

export default function GPHybridBike() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/New folder/Hero Image.png"
            alt="GP Hybrid Bike Hero"
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/20 z-10" />
        
        {/* Testimonial Text - Bottom Left */}
        <div className="absolute bottom-10 left-8 z-20 max-w-2xl">
          <blockquote 
            className="text-white text-xl sm:text-2xl lg:text-[36px] mb-4 drop-shadow-lg"
            style={{ 
              fontWeight: 700,
              lineHeight: '100%',
              letterSpacing: '-0.04em'
            }}
          >
            "The strength of any business lies in its ability to innovate. That's why we choose Artivo."
          </blockquote>
          <div className="text-white space-y-1">
            <p 
              className="text-white text-base sm:text-lg lg:text-[20px]"
              style={{ 
                fontWeight: 500,
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              Calvin Purdue
            </p>
            <p 
              className="text-white text-base sm:text-lg lg:text-[20px]"
              style={{ 
                fontWeight: 400,
                lineHeight: '120%',
                letterSpacing: '-0.04em'
              }}
            >
              General Manager, ORAEVEN Bikes
            </p>
          </div>
        </div>
      </section>

      {/* GP Hybrid Bike Details Section */}
      <section 
        className="relative py-16 overflow-hidden"
        style={{ background: 'linear-gradient(to right, rgba(11, 25, 47, 1), rgba(205, 64, 11, 1))' }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/2 11.png"
            alt="Background Pattern"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Arrow Icon - Top Right */}
        <div
          className="absolute z-10"
          style={{
            top: 'clamp(0.25rem, 2.5vw, 2rem)',
            right: 'clamp(1rem, 4.68vw, 4rem)'
          }}
        >
          <Image
            src="/New folder/Next Arrow
            (1).svg"
            alt="Arrow Icon"
            width={32}
            height={32}
            className="object-contain"
          />
        </div>

        <div
          className="relative z-10 w-full"
          style={{
            paddingLeft: 'clamp(1rem, 4.68vw, 4rem)',
            paddingRight: 'clamp(1rem, 4.68vw, 4rem)'
          }}
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-12 items-start">
            
            {/* Left Side - Heading and Description */}
              <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl xl:text-4xl font-normal text-white leading-tight">
                <span className="font-bold">GP</span> Hybrid Electric Bike
              </h1>
              
              <p
                className="text-white/90 text-base xl:text-base leading-relaxed"
                style={{ maxWidth: 'clamp(320px, 46vw, 600px)' }}
              >
                Artivo was commissioned to design and develop a minimalistically powerful electric bike, ready to conquer most road conditions with comfort features, for first-user and end-user market.
              </p>
            </div>
            
            {/* Right Side - Project Details */}
            <div
              className="space-y-3 text-left lg:text-right lg:self-start lg:justify-self-end"
              style={{ width: 'clamp(260px, 28vw, 420px)' }}
            >
              <div className="border-b border-white/30 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-xs uppercase tracking-wide">Brand</span>
                  <span className="text-white font-semibold text-sm">ORAEVEN Bikes</span>
                </div>
              </div>
              
              <div className="border-b border-white/30 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-xs uppercase tracking-wide">Specialisation</span>
                  <span className="text-white font-semibold text-sm">Full Development</span>
                </div>
              </div>
              
              <div className="border-b border-white/30 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-xs uppercase tracking-wide">Completion</span>
                  <span className="text-white font-semibold text-sm">6 months</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Product and Conceptualisation Section */}
      <section className="py-8 bg-white w-full">
        <div
          className="w-full"
          style={{
            paddingLeft: 'clamp(1rem, 4.68vw, 4rem)',
            paddingRight: 'clamp(1rem, 4.68vw, 4rem)',
            marginLeft: 0,
            marginRight: 0
          }}
        >
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src="/product/Next Arrow.svg"
                  alt="Conceptualisation Arrow"
                  fill
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Conceptualisation
              </h2>
            </div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our dedicated team of designers shared multiple strategies to begin this project and in-doing-so, we were
              <span className="font-semibold text-black"> able to define a creative theme</span> that matched our client's brief.
            </p>
            <div className="space-y-6">
              <div className="relative w-full min-h-[300px] sm:min-h-[340px] bg-white">
                <Image src="/product/b.png" alt="Conceptualisation Design" fill className="object-contain" />
              </div>
              <div className="relative w-full min-h-[320px] sm:min-h-[360px] bg-white">
                <Image src="/product/a.png" alt="Product Design" fill className="object-cover" />
              </div>
              <div className="relative w-full min-h-[300px] sm:min-h-[340px] bg-white">
                <Image src="/product/c.png" alt="Concept Imagery" fill className="object-contain" />
              </div>
              <div className="relative w-full h-72 sm:h-80 bg-black overflow-hidden rounded-tr-[40px]">
                <Image src="/product/d.png" alt="Prototype Imagery" fill className="object-cover" />
              </div>
              <div className="relative w-full h-64 sm:h-72 bg-black overflow-hidden rounded-tl-[40px]">
                <Image src="/product/f.png" alt="Engineering Details" fill className="object-cover" />
              </div>
            </div>
            <a
              href="https://calendly.com/artivo/free-design-consultation"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a free design consultation"
              className="w-full bg-[#FFED00] flex items-center justify-between px-6 py-4 rounded-full shadow-md"
            >
              <span className="text-black font-bold tracking-wide text-sm sm:text-base whitespace-nowrap">
                BRING YOUR IDEAS TO LIFE
              </span>
              <Image src="/why-artivo/Group 18.svg" alt="Arrow Icon" width={22} height={22} className="object-contain" />
            </a>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] items-start gap-10 lg:gap-12">
            <div className="flex flex-col gap-6 max-w-[70rem] lg:pr-10">
              <div className="flex items-center gap-4">
                <div className="relative w-9 h-9">
                  <Image
                    src="/product/Next Arrow.svg"
                    alt="Conceptualisation Arrow"
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                  Conceptualisation
                </h2>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed pl-[3.25rem]">
                <span className="block whitespace-nowrap">
                  Our dedicated team of designers shared multiple strategies to begin this project and in-doing-
                </span>
                <span className="block whitespace-nowrap">
                  so,we were <span className="font-semibold text-black">able to define a creative theme</span> that matched our client's brief.
                </span>
              </p>
            </div>
            <div
              className="relative w-full max-w-[260px] h-[180px] lg:h-[210px] xl:h-[240px] mt-6 lg:mt-0"
              style={{
                marginLeft: 'auto',
                marginRight: 0
              }}
            >
              <Image
                src="/product/b.png"
                alt="Conceptualisation Design"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="-mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative w-full h-[560px] lg:h-[700px] xl:h-[780px] z-10 -translate-y-20 lg:-translate-y-26 -translate-x-[2.5rem]">
              <Image
                src="/product/a.png"
                alt="Product Design"
                fill
                className="object-contain object-left"
              />
            </div>
            <div
              className="relative w-full h-[420px] lg:h-[520px] xl:h-[600px] z-10"
              style={{
                marginRight: 'calc(-1 * clamp(1rem, 4.68vw, 4rem))'
              }}
            >
              <Image
                src="/product/c.png"
                alt="Concept Imagery"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div
            className="grid grid-cols-2 gap-x-[1px] gap-y-6"
            style={{
              marginLeft: 'calc(-1 * clamp(1rem, 4.68vw, 4rem))',
              marginRight: 'calc(-1 * clamp(1rem, 4.68vw, 4rem))',
              marginTop: 'clamp(-10.5rem, -13vw, -6rem)'
            }}
          >
            <div
              className="relative w-full h-[480px] sm:h-[520px] lg:h-[600px] xl:h-[700px] bg-black overflow-hidden rounded-tr-[60px]"
              style={{
                marginTop: 'clamp(-6rem, -10.5vw, -4.75rem)'
              }}
            >
              <Image
                src="/product/d.png"
                alt="Prototype Imagery"
                fill
                className="object-cover"
              />
            </div>
            <div
              className="relative w-full h-[445px] sm:h-[485px] lg:h-[545px] xl:h-[635px] bg-black overflow-hidden rounded-tl-[60px]"
              style={{
                marginTop: 'clamp(-6rem, -10.5vw, -4.75rem)'
              }}
            >
              <Image
                src="/product/f.png"
                alt="Engineering Details"
                fill
                className="object-cover"
              />
            </div>
            <div className="col-span-2 -mt-5.5 lg:-mt-21.5">
              <a
                href="https://calendly.com/artivo/free-design-consultation"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a free design consultation"
                className="ml-auto w-[calc(50%-2px)] h-[48px] sm:h-[56px] lg:h-[64px] bg-[#FFED00] flex items-center justify-start pl-[70px] pr-2 sm:pr-3 lg:pr-4 gap-[70px]"
                style={{ transform: 'translate(0px, -1.5px)' }}
              >
                <span className="text-black font-bold tracking-wide text-[clamp(0.625rem,1vw,0.95rem)] whitespace-nowrap">
                  BRING YOUR IDEAS TO LIFE
                </span>
                <Image
                  src="/why-artivo/Group 18.svg"
                  alt="Arrow Icon"
                  width={24}
                  height={24}
                  className="object-contain"
                  style={{ width: 'clamp(12px, 1.5vw, 24px)', height: 'clamp(12px, 1.5vw, 24px)' }}
                />
              </a>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* CAD Modelling + Simulations Section */}
      <section className="pt-12 -mb-8 bg-white overflow-visible relative">
        <div
          className="w-full relative"
          style={{
            paddingLeft: 'clamp(1rem, 4.68vw, 4rem)',
            paddingRight: 'clamp(1rem, 4.68vw, 4rem)',
            marginLeft: 0,
            marginRight: 0
          }}
        >
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            <div className="flex items-center gap-3">
              <Image src="/product/Frame 157.svg" alt="Arrow Icon" width={28} height={28} className="object-contain opacity-80" />
              <h2 className="text-2xl font-bold text-gray-900 tracking-tight">CAD Modelling + Simulations</h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              The GP Hybrid Electric Bike has been intricately assembled in 3D using componentry axis modelling, giving us
              <span className="font-semibold text-black"> accurate Finite Element Analysis.</span>
            </p>
            <div className="relative w-full h-72 sm:h-80 bg-white">
              <Image src="/product/CycleBG 1.png" alt="GP Hybrid Electric Bike CAD Model" fill className="object-contain" />
            </div>
            <div className="relative w-full h-64 sm:h-72 bg-white">
              <Image src="/1.webp" alt="Bike Wireframe Isometric View" fill className="object-contain" />
            </div>
            <div className="bg-white/95 border border-gray-200 rounded-lg p-4 space-y-1 text-sm font-medium text-gray-900 shadow-sm">
              <div>SCALE: 1:15</div>
              <div>VIEW: ISOMETRIC</div>
              <div>ANGLE: TOP-DOWN</div>
              <div>DISPLAY: WIREFRAME</div>
              <div>TOOL: SOLIDWORKS</div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Section - 50% width (1 column) */}
            <div className="space-y-6">
              {/* Heading with Arrow */}
              <div className="flex items-center gap-3">
                <Image
                  src="/product/Frame 157.svg"
                  alt="Arrow Icon"
                  width={32}
                  height={32}
                  className="object-contain opacity-60"
                />
                <h2 className="text-2xl lg:text-3xl xl:text-3xl font-bold text-gray-900">
                  CAD Modelling + Simulations
                </h2>
              </div>
              
              {/* Paragraph Text */}
              <p className="text-gray-700 text-base xl:text-base leading-relaxed max-w-2xl pl-[3.25rem]">
                The GP Hybrid Electric Bike has been intricately assembled in 3D using componentry axis modelling, giving us{' '}
                <span className="font-semibold text-black">accurate Finite Element Analysis.</span>
              </p>
              
              {/* Bike Image with Background */}
              <div className="relative h-[700px] lg:h-[800px] xl:h-[800px] overflow-visible">
                <div
                  className="absolute w-[50vw] h-full -top-32 lg:-top-24 xl:-top-20"
                  style={{
                    left: 'calc(-50vw + 50% + clamp(1rem, 4.68vw, 4rem) + clamp(5.5rem, 16vw, 21rem))'
                  }}
                >
                  <Image
                    src="/product/CycleBG 1.png"
                    alt="GP Hybrid Electric Bike CAD Model"
                    fill
                    className="object-contain"
                    style={{ objectPosition: 'left center' }}
                  />
                </div>
              </div>
            </div>
            
            {/* Right Section - 50% width (1 column) */}
            <div className="space-y-6 relative">
              {/* Wireframe Image */}
              <div className="relative w-full h-[500px] lg:h-[600px] xl:h-[600px]">
                <Image
                  src="/1.webp"
                  alt="Bike Wireframe Isometric View"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Technical Specifications Block */}
              <div className="absolute bottom-0 right-0 bg-white/95 p-4 space-y-1 text-xs xl:text-xs font-medium text-gray-900">
                <div>SCALE: 1:15</div>
                <div>VIEW: ISOMETRIC</div>
                <div>ANGLE: TOP-DOWN</div>
                <div>DISPLAY: WIREFRAME</div>
                <div>TOOL: SOLIDWORKS</div>
              </div>
            </div>
            
          </div>
          </div>
        </div>
      </section>

      {/* Aerodynamic Simulation Section */}
      <section className="-mt-48 pb-0 bg-white overflow-x-hidden">
  <div className="w-full max-w-none px-0">
    
    {/* Three Equal Panels */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 items-stretch">
      {[
        "/product/aq.png",
        "/product/as.png",
        "/product/ass.png",
      ].map((src, index) => (
        <div key={index} className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] lg:h-[600px] xl:h-[620px] flex items-center justify-center">
          <img
            src={src}
            alt={`Aerodynamic Simulation ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>

    {/* Yellow Call-to-Action Strip */}
    <a
      href="https://calendly.com/artivo/free-design-consultation"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a free design consultation"
      className="w-full max-w-none bg-[#FFF208] py-3 px-6 lg:px-8 flex items-center justify-center gap-3 hover:bg-yellow-300 transition-colors duration-300 cursor-pointer"
    >
      <span className="text-black font-bold tracking-wide text-[clamp(0.65rem,1.1vw,1.1rem)] whitespace-nowrap text-center">
        GOT AN IDEA? LET'S INNOVATE!
      </span>
      <Image
        src="/why-artivo/Group 18.svg"
        alt="Arrow"
        width={24}
        height={24}
        className="object-contain"
        style={{ width: 'clamp(14px, 1.6vw, 26px)', height: 'clamp(14px, 1.6vw, 26px)' }}
      />
    </a>
  </div>
</section>

      {/* Full Screen Image Section */}
      <section className="relative w-full min-h-[400px] h-[60vh] md:h-[70vh] lg:h-screen xl:h-screen overflow-hidden">
        <div className="relative w-full h-full max-w-none">
          <Image
            src="/product/ORAGPEB-BL - Field P1 2.png"
            alt="ORAGPEB-BL Field"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Wave Effect Overlay */}
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="relative w-full h-full scale-140 translate-y-12 lg:translate-y-16 xl:translate-y-16">
              <Image
                src="/product/WAVE EFFECT.png"
                alt="Wave Effect"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
          
          {/* Prototyping & Certification Content Overlay */}
          <div className="absolute top-0 left-0 z-20 p-8 lg:p-12 xl:p-12">
            <div className="max-w-4xl">
              {/* Icon and Heading */}
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/product/Frame 156.svg"
                  alt="Prototyping Icon"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <h2 className="text-2xl lg:text-3xl xl:text-3xl font-bold text-white drop-shadow-lg">
                  Prototyping & Certification
                </h2>
              </div>
              
              {/* Content */}
              <p className="text-white text-base lg:text-lg xl:text-lg leading-relaxed drop-shadow-md text-left">
                Artivo's global network of manufacturers, suppliers and distributors come to play at this stage.
                With an aim to get industrial certifications, the GP Hybrid Electric Bike passed all standards with{' '}
                accurate prototyping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Collage Section */}
      <section className="h-[95vh] w-full bg-white relative z-10 flex items-center justify-center overflow-hidden mt-0.5 sm:mt-1 md:mt-1.5">
        <div className="w-full max-w-none px-0 h-full py-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0.5 sm:gap-1 md:gap-1 lg:gap-1.5 h-full w-full">
            {/* Panel 1 - Merged 1st and 2nd */}
            <div className="relative w-full h-full col-span-2 sm:col-span-2 md:col-span-2">
              <Image
                src="/Grids/Rectangle 46.png"
                alt="Merged Panel 1 and 2"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 66vw, 50vw"
              />
            </div>
            
            {/* Panel 3 - Handlebar Display Close-up */}
            <div className="relative w-full h-full">
              <Image
                src="/Grids/Rectangle 38.png"
                alt="Handlebar Display Close-up"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
            
            {/* Panel 4 - Full Side Profile */}
            <div className="relative w-full h-full">
              <Image
                src="/Grids/Rectangle 47.png"
                alt="Full Side Profile"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
            
            {/* Panel 5 - Handlebar Display Close-up Centered */}
            <div className="relative w-full h-full">
              <Image
                src="/Grids/Rectangle 51.png"
                alt="Handlebar Display Close-up Centered"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
            
            {/* Panel 6 - Top-Down Frame/Handlebar View */}
            <div className="relative w-full h-full">
              <Image
                src="/Grids/Rectangle 50.png"
                alt="Top-Down Frame/Handlebar View"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </div>
            
            {/* Panel 7 - Merged 7th and 8th */}
            <div className="relative w-full h-full col-span-2 sm:col-span-2 md:col-span-2">
              <Image
                src="/Grids/Rectangle 52.png"
                alt="Merged Panel 7 and 8"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 66vw, 50vw"
              />
            </div>
            
            {/* Panel 9 - Merged 9th and 10th */}
            <div className="relative w-full h-full col-span-2 sm:col-span-2 md:col-span-2">
              <Image
                src="/Grids/Rectangle 53.png"
                alt="Merged Panel 9 and 10"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 66vw, 50vw"
              />
            </div>
            
            {/* Panel 11 - Merged 11th and 12th */}
            <div className="relative w-full h-full col-span-2 sm:col-span-2 md:col-span-2">
              <Image
                src="/Grids/Rectangle 49.png"
                alt="Merged Panel 11 and 12"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 66vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

