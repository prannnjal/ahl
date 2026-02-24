'use client';

import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { InnovativeAffiliationsSection } from '@/components/InnovativeAffiliationsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';

function FooterStyleSection() {
  return (
    <section
      className="py-12 relative"
      style={{ background: 'linear-gradient(to right, rgba(25, 88, 99, 1),rgba(11, 25, 47, 1))' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/2 11.png"
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Large decorative line drawing image - right side */}
      <div className="absolute right-0 top-1/2 -translate-y-[2%] z-10 pointer-events-none">
        <div className="relative w-[240px] sm:w-[300px] md:w-[340px] lg:w-[390px] h-[160px] sm:h-[200px] md:h-[240px] lg:h-[290px]">
          <Image
            src="/about/Artivo - GP Line Drawings 1.png"
            alt="Artivo Line Drawing Large Decorative"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="relative z-20" style={{ paddingLeft: 'clamp(1rem, 4.68vw, 4rem)' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-center">
          {/* Left-aligned Quote Content */}
          <div className="lg:col-span-3 text-left max-w-xl" style={{ paddingLeft: 0 }}>
            <blockquote
              className="text-white text-xl sm:text-2xl lg:text-[36px] mb-4"
              style={{
                fontWeight: 700,
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
            <div className="space-y-1">
              <p
                className="text-white text-base sm:text-lg lg:text-[20px]"
                style={{
                  fontWeight: 500,
                  lineHeight: '100%',
                  letterSpacing: '-0.04em'
                }}
              >
                Steve Jobs
              </p>
              <p
                className="text-white text-base sm:text-lg lg:text-[20px]"
                style={{
                  fontWeight: 400,
                  lineHeight: '100%',
                  letterSpacing: '-0.04em'
                }}
              >
                Co-founder, Apple Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutView({ variant = 'desktop' }) {
  return (
    <div className="min-h-screen bg-white" data-variant={`about-${variant}`}>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/1.png"
            alt="About Hero"
            fill
            priority
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10" />
        {/* Hero Text Content */}
        <div className="absolute inset-0 z-20 flex items-end justify-start">
          <div style={{ paddingLeft: 'clamp(1rem, 4.68vw, 4rem)' }}>
            <blockquote
              className="text-white text-xl sm:text-2xl lg:text-[36px] text-left max-w-3xl mb-4 drop-shadow-lg"
              style={{
                fontWeight: 700,
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              "There is good design, then there is better design."<br />
              At Aura Elevators, we aim for the best."
            </blockquote>
            <div className="space-y-1 mb-16">
              <p
                className="text-white text-base sm:text-lg lg:text-[20px]"
                style={{
                  fontWeight: 500,
                  lineHeight: '100%',
                  letterSpacing: '-0.04em'
                }}
              >
                Michael
              </p>
              <p
                className="text-white text-base sm:text-lg lg:text-[20px]"
                style={{
                  fontWeight: 400,
                  lineHeight: '100%',
                  letterSpacing: '-0.04em'
                }}
              >
                Director of Operations, Aura Elevators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-white py-8">
        <div
          className="w-full"
          style={{ paddingLeft: 0, paddingRight: 'clamp(1rem, 4.68vw, 4rem)' }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-2 gap-x-1 text-center">
            {/* Row 1 */}
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#0074CB]">10+</div>
              <div className="text-xs text-gray-700 mt-1">Years of Experience</div>
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#0074CB]">1200+</div>
              <div className="text-xs text-gray-700 mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#0074CB]">$6.0m</div>
              <div className="text-xs text-gray-700 mt-1">Saved on Maintenance overheads</div>
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">12</div>
              <div className="text-xs text-gray-700 mt-1">Safety Accreditations</div>
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">55</div>
              <div className="text-xs text-gray-700 mt-1">Team of experts</div>
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">45+</div>
              <div className="text-xs text-gray-700 mt-1">Industry-leading tools</div>
            </div>
            {/* Row 2 */}
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">&lt; 24 wks</div>
              <div className="text-xs text-gray-700 mt-1">Average Project Duration</div>
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#0074CB]">98%</div>
              <div className="text-xs text-gray-700 mt-1">Efficiency Rating</div>
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#0074CB]">94%</div>
              <div className="text-xs text-gray-700 mt-1">Success Rate</div>
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-[#0074CB]">10+</div>
              <div className="text-xs text-gray-700 mt-1">Global Establishments</div>
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">11.2%</div>
              <div className="text-xs text-gray-700 mt-1">EBITDA Ratio</div>
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">7.25%</div>
              <div className="text-xs text-gray-700 mt-1">CAGR in ANZ Market</div>
            </div>
            {/* Row 3 */}
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">18,000+</div>
              <div className="text-xs text-gray-700 mt-1">Social Members</div>
            </div>
            <div>
              <div className="text-base sm:text-lg lg:text-2xl font-bold text-black">15,000 sqm</div>
              <div className="text-xs text-gray-700 mt-1">Prototyping Space</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer-styled Section with your content goes here */}
      <FooterStyleSection />

      {/* Our Mission Section */}
      <section className="relative pt-16 bg-white overflow-hidden" style={{ paddingBottom: 'clamp(2rem, 4vw, 4rem)' }}>
        {/* Subtle right-side background pattern */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-10 z-0">

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-3">Our Mission</h2>
          <p className="text-gray-600 max-w-3xl mb-10">
            To transform ideas into market-ready products through exceptional design,
            engineering excellence, and manufacturing expertise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-[220px] flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold" style={{
                  fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                  WebkitTextStroke: 'clamp(0.8px, 0.2vw, 1px) #000',
                  color: 'transparent',
                  textStroke: 'clamp(0.8px, 0.2vw, 1px) #000'
                }}>/1</span>
                <Image
                  src="/product/1.svg"
                  alt="Icon 1"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-gray-800 font-semibold mb-3 text-lg">Motivation First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pushing boundaries with cutting-edge technology and artificial intelligence tools.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-[220px] flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold" style={{
                  fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                  WebkitTextStroke: 'clamp(0.8px, 0.2vw, 1px) #000',
                  color: 'transparent',
                  textStroke: 'clamp(0.8px, 0.2vw, 1px) #000'
                }}>/2</span>
                <Image
                  src="/product/2.svg"
                  alt="Icon 2"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-gray-800 font-semibold mb-3 text-lg">Quality Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team is renowned for its commitment to ideation, ensuring growth and success.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-[220px] flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold" style={{
                  fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                  WebkitTextStroke: 'clamp(0.8px, 0.2vw, 1px) #000',
                  color: 'transparent',
                  textStroke: 'clamp(0.8px, 0.2vw, 1px) #000'
                }}>/3</span>
                <Image
                  src="/product/3.svg"
                  alt="Icon 3"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-gray-800 font-semibold mb-3 text-lg">Industry Standards & ISOs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Maintaining the highest standards in every project to fulfil global supply chain.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-200 rounded-lg p-6 bg-white min-h-[220px] flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className="font-semibold" style={{
                  fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                  WebkitTextStroke: 'clamp(0.8px, 0.2vw, 1px) #000',
                  color: 'transparent',
                  textStroke: 'clamp(0.8px, 0.2vw, 1px) #000'
                }}>/4</span>
                <Image
                  src="/product/4.svg"
                  alt="Icon 4"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <h3 className="text-gray-800 font-semibold mb-3 text-lg">Organic Growth & Reach</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We want to reach maximum clients with proceeding reputation and market growth
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Collage Section */}
      <section className="pt-0 pb-12 bg-white">
        <div className="w-full px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 items-stretch">
            {/* Left column: two stacked images */}
            <div className="grid grid-rows-2 gap-1 lg:col-span-1">
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-[290px] overflow-hidden">
                <Image
                  src="/34.png"
                  alt="Showcase A"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-[290px] overflow-hidden">
                <Image
                  src="/16.png"
                  alt="Showcase B"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right column: one tall image spanning 2 columns */}
            <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] lg:h-[584px] lg:col-span-2 overflow-hidden">
              <Image
                src="/30.png"
                alt="Showcase Main"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Background + decorative image section (with text) */}
      <section className="pt-0 pb-12 relative -mt-11 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, rgba(11,25,47,1) 0%, rgba(8,181,255,1) 100%)' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(0, 0, 0, 0.3)' }}
          />
          <Image
            src="/1 11.png"
            alt="Background Pattern"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        {/* Decorative image (right) */}
        <div className="absolute right-0 top-1/2 -translate-y-[2%] z-10 pointer-events-none">

        </div>
        {/* Bottom-center intersect image with overlaid CTA text */}
        <div
          className={`absolute pointer-events-none ${variant === 'mobile'
            ? 'left-0 right-0 bottom-0'
            : 'left-1/2 -translate-x-1/2 -bottom-16 sm:-bottom-20'
            }`}
        >
          <div
            className={`relative ${variant === 'mobile'
              ? 'h-[48px] w-screen max-w-none'
              : 'h-[120px] sm:h-[155px] md:h-[190px] w-[400px] sm:w-[490px] md:w-[580px]'
              }`}
          >
            {variant === 'mobile' ? (
              <div
                className="absolute inset-0"
                style={{
                  background:
                    ' rgba(255,237,0,1) ',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.25)',
                  // clip-path vertices: top-left → top-right → right side down → bottom-right slant → bottom-left slant → left side up
                  clipPath:
                    'polygon(10% 0%, 88% 0%, 100% 100%, 95% 100%, 5% 100%, 0% 100%)',
                }}
              />
            ) : (
              <Image
                src="/about/Intersect (1).png"
                alt="Intersect Decorative"
                fill
                className="object-contain"
                priority
              />
            )}
            {/* CTA overlay centered on the image */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 px-6 z-20">
              <span className="text-black font-bold text-sm whitespace-nowrap">
                CLICK HERE TO BOOK A FREE CONSULTATION
              </span>
              <Image
                src="/why-artivo/Group 18.svg"
                alt="CTA Arrow"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Values Text */}
        <div className="relative z-20" style={{ paddingLeft: 'clamp(1rem, 4.68vw, 4rem)', paddingTop: 'clamp(2rem, 4vw, 4rem)' }}>
          <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6" style={{ paddingLeft: 0 }}>Our Values</h2>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 relative" style={{ gap: '2px', paddingLeft: 0, marginLeft: 'clamp(-1rem, -1vw, -0.5rem)' }}>
            {[
              {
                id: 1,
                title: "Client brief drives innovation",
                description: "We start working on a project only when the client has officially signed & approved a comprehensive design brief that outlines their requirements, deliverables, expectations and vision."
              },
              {
                id: 2,
                title: "Improvisation is necessary",
                description: "Our team strongly believes that innovation must have multiple versions for best results. This is why our projects can have multiple iterations with running changes that surpass client expectations."
              },
              {
                id: 3,
                title: "Safety that leads",
                description: "At Aura Elevators, we believe that true safety goes beyond just compliance. It requires a deep understanding of structural needs and user-centric operations."
              },
            ].map((feature, index) => (
              <div
                key={feature.id}
                className="p-6 bg-transparent duration-300 group cursor-pointer relative md:pr-12"
              >
                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#ffed00] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white text-sm opacity-90 leading-relaxed mb-6" style={{ maxWidth: '330px' }}>
                  {feature.description}
                </p>
                {(index === 1 || index === 2) && (
                  <div
                    className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 group"
                    style={{ right: 'calc(100% + clamp(0.25rem, 0.6vw, 0.75rem))' }}
                  >
                    <svg
                      className="w-5 h-5 text-white group-hover:text-[#ffed00] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen bicycle image section */}
      <section className="relative w-full h-screen overflow-hidden my-[4px]">
        <Image
          src="/about/freepik__make-render-of-the-bicycle-in-the-reference-image-__90791 1.png"
          alt="Bicycle Render"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* Left-corner text */}
        <div
          className={`absolute inset-0 z-10 flex justify-start ${variant === 'mobile' ? 'items-end' : 'items-end'
            }`}
          style={{
            paddingBottom: variant === 'mobile' ? 'clamp(4rem, 10vw, 6rem)' : 0,
          }}
        >
          <div
            className={`pr-8 max-w-2xl ${variant === 'mobile' ? 'pb-4' : 'pb-10'
              }`}
            style={{ paddingLeft: 'clamp(1rem, 4.68vw, 4rem)' }}
          >
            <h3
              className="text-white text-3xl sm:text-4xl font-bold mb-4"
              style={{ letterSpacing: '-0.04em' }}
            >
              Engineered to Elevate.
            </h3>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed" style={{ letterSpacing: '-0.04em' }}>
              Our installation process is built on precision, safety, and reliability, delivering modern and efficient elevator systems for any building.
            </p>
          </div>
        </div>
        {/* Bottom-right decorative image with overlaid CTA */}
        <div
          className={`absolute z-10 ${variant === 'mobile'
            ? 'right-0 bottom-0'
            : 'right-0 -bottom-4 sm:-bottom-19'
            }`}
        >
          <div
            className={`relative ${variant === 'mobile'
              ? 'w-[calc(100vw-1rem)] max-w-[380px] h-[50px]'
              : 'w-[360px] sm:w-[440px] md:w-[520px] lg:w-[600px] h-[120px] sm:h-[150px] md:h-[180px]'
              }`}
          >
            {variant === 'mobile' ? (
              <div
                className="absolute inset-0 rounded-[0px]"
                style={{
                  background:
                    ' rgba(255,237,0,1) ',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.25)',

                  clipPath:
                    'polygon(13% 0%, 100% 0%, 100% 100%, 95% 100%, 5% 100%, 0% 100%)',
                }}
              />
            ) : (
              <Image
                src="/about/as.png"
                alt="Decorative Bottom Right"
                fill
                className="object-contain"
                priority
              />
            )}

            {/* CTA overlay centered on the image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-20">
              <div
                className={`flex items-center justify-center gap-3 text-black font-semibold text-sm sm:text-base whitespace-nowrap px-3 py-1 rounded-full ${variant === 'mobile' ? 'translate-y-0 w-full' : '-translate-y-2'
                  }`}
              >
                <span className="truncate">
                  CLICK HERE AND GET YOUR QUOTE
                </span>
                <Image
                  src="/why-artivo/Group 18.svg"
                  alt="CTA Arrow"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Innovative Affiliations Section */}
      <InnovativeAffiliationsSection />



      {/* Contact Section */}
      <ContactSection />



      {/* Testimonials Section */}
      <TestimonialsSection />

      <Footer />
    </div>
  );
}

const DesktopAboutView = () => <AboutView variant="desktop" />;
const MobileAboutView = () => <AboutView variant="mobile" />;

export default function About() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopAboutView />
      </div>
      <div className="block md:hidden">
        <MobileAboutView />
      </div>
    </>
  );
}
