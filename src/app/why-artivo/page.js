import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { WhyArtivoContentSection } from '@/components/WhyArtivoContentSection';
import { TestimonialFeaturesSection } from '@/components/TestimonialFeaturesSection';
import { ContactSection } from '@/components/ContactSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

export default function WhyArtivo() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <Image
            src="/WHY.png"
            alt="Why Artivo Hero"
            fill
            className="object-cover"
          />
        </div>

        {/* Pattern overlay (bottom 40%) */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ height: '40%' }}
        >
          <Image
            src="/WHY-Pattern.png"
            alt="Hero Pattern"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>

        {/* Hero content */}
        <div className="absolute inset-0 z-20 flex items-end justify-start">
          <div
            className="text-left max-w-[60rem]"
            style={{ paddingLeft: 'clamp(1rem, 4.68vw, 4rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}
          >
            <blockquote
              className="text-white text-xl sm:text-2xl lg:text-[36px] mb-4 drop-shadow-lg"
              style={{ fontWeight: 700, lineHeight: '100%', letterSpacing: '-0.04em' }}
            >
              “It’s so interesting to see how Artivo can make all your<br />ideas come to life, only more beautifully and brilliantly.”
            </blockquote>
            <div className="space-y-1">
              <p
                className="text-white text-base sm:text-lg lg:text-[20px]"
                style={{ fontWeight: 500, lineHeight: '100%', letterSpacing: '-0.04em' }}
              >
                Bill Jackson
              </p>
              <p
                className="text-white text-base sm:text-lg lg:text-[20px]"
                style={{ fontWeight: 400, lineHeight: '120%', letterSpacing: '-0.04em' }}
              >
                Head of Innovation, JBM Avionics
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Artivo Content Section */}
      <WhyArtivoContentSection />

      {/* Testimonial and Features Section */}
      <TestimonialFeaturesSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
