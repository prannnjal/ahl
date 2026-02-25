import Image from "next/image";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { DesignSection } from "@/components/DesignSection";
import { YellowStrip } from "@/components/YellowStrip";
import { ProductShowcaseSection } from "@/components/ProductShowcaseSection";
import { OurSpecialitiesSection } from "@/components/OurSpecialitiesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { VisionsMissionsSection } from "@/components/VisionsMissionsSection";
import { OurWorkSection } from "@/components/OurWorkSection";
import { ProductFeaturesSection } from "@/components/ProductFeaturesSection";
import { ViewAllProjectsStrip } from "@/components/ViewAllProjectsStrip";
import { InnovativeAffiliationsSection } from "@/components/InnovativeAffiliationsSection";
import { ContactForm } from "@/components/ContactForm";
import { ContactSection } from "@/components/ContactSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { GearIcon, DocumentIcon, UserIcon, AwardIcon, QuoteIcon } from "@/components/Icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* The Elevator Installation Process Banner */}
      <section className="relative w-full h-12 sm:h-16 md:h-[72px] overflow-hidden">
        {/* Gradient Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(12, 25, 47, 1), rgba(10, 103, 151, 1), rgba(26, 27, 27, 1))'
          }}
        />

        {/* Subtle darker horizontal line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50" />

        {/* Centered Text */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h2 className="font-medium tracking-wide text-center px-4 text-lg sm:text-xl md:text-[30px]"
            style={{
              color: 'rgba(255, 255, 255, 1)'
            }}>
            Our Installation Process
          </h2>
        </div>
      </section>

      {/* Full Screen Gradient Section */}
      <section className="relative w-full min-h-screen overflow-hidden py-8 sm:py-12 md:py-16 lg:py-0 lg:h-screen">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(11, 25, 47, 1), rgba(26, 26, 26, 1))'
          }}
        />
        {/* Curve Effect Overlay - Desktop only */}
        <div className="absolute inset-0 z-10 hidden lg:block">
          <Image
            src="/Grids/Curve Effect.png"
            alt="Curve Effect"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Process Content */}
        <div className="relative z-20 flex items-center justify-center min-h-screen lg:absolute lg:inset-0">
          {/* Mobile Layout - Vertical Stack */}
          <div className="lg:hidden w-full px-4 sm:px-6 pb-24 space-y-8 pt-8">
            {/* Central Symbols */}
            <div className="relative mx-auto" style={{ width: 'clamp(100px, 25vw, 150px)', height: 'clamp(100px, 25vw, 150px)' }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-2xl uppercase tracking-widest text-center">AHL<br />Elevators</span>
              </div>
            </div>

            {/* Process Steps - Vertical Stack */}
            {/* Step 1 */}
            <div className="text-center max-w-[280px] mx-auto">
              <div className="flex justify-center mb-2">
                <span className="font-semibold" style={{
                  fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                  WebkitTextStroke: 'clamp(0.8px, 0.2vw, 1px) white',
                  color: 'transparent',
                  textStroke: 'clamp(0.8px, 0.2vw, 1px) white'
                }}>/1</span>
              </div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-2" style={{ letterSpacing: '-0.04em' }}>Site Inspection</h3>
              <p className="text-white text-xs sm:text-sm font-normal leading-relaxed" style={{ lineHeight: '22px' }}>We visit your building, apartment, or commercial space for a thorough evaluation.</p>
            </div>

            {/* Step 2 */}
            <div className="text-center max-w-[280px] mx-auto">
              <div className="flex justify-center mb-2">
                <span className="font-semibold" style={{
                  fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                  WebkitTextStroke: 'clamp(0.8px, 0.2vw, 1px) white',
                  color: 'transparent',
                  textStroke: 'clamp(0.8px, 0.2vw, 1px) white'
                }}>/2</span>
              </div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-2" style={{ letterSpacing: '-0.04em' }}>Custom Planning</h3>
              <p className="text-white text-xs sm:text-sm font-normal leading-relaxed" style={{ lineHeight: '22px' }}>Designing the perfect elevator solution matching your aesthetics and requirements.</p>
            </div>

            {/* Step 3 */}
            <div className="text-center max-w-[280px] mx-auto">
              <div className="flex justify-center mb-2">
                <span className="font-semibold" style={{
                  fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                  WebkitTextStroke: 'clamp(0.8px, 0.2vw, 1px) white',
                  color: 'transparent',
                  textStroke: 'clamp(0.8px, 0.2vw, 1px) white'
                }}>/3</span>
              </div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-2" style={{ letterSpacing: '-0.04em' }}>Professional Installation</h3>
              <p className="text-white text-xs sm:text-sm font-normal leading-relaxed" style={{ lineHeight: '22px' }}>Our expert team safely installs the elevator with minimal disruption.</p>
            </div>

            {/* Step 4 */}
            <div className="text-center max-w-[280px] mx-auto">
              <div className="flex justify-center mb-2">
                <span className="font-semibold" style={{
                  fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                  WebkitTextStroke: 'clamp(0.8px, 0.2vw, 1px) white',
                  color: 'transparent',
                  textStroke: 'clamp(0.8px, 0.2vw, 1px) white'
                }}>/4</span>
              </div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-2" style={{ letterSpacing: '-0.04em' }}>Safety Testing</h3>
              <p className="text-white text-xs sm:text-sm font-normal leading-relaxed" style={{ lineHeight: '22px' }}>Rigorous testing to ensure world-class safety and smooth operation.</p>
            </div>

            {/* Step 5 */}
            <div className="text-center max-w-[280px] mx-auto">
              <div className="flex justify-center mb-2">
                <span className="font-semibold" style={{
                  fontSize: 'clamp(1.5rem, 6vw, 2rem)',
                  WebkitTextStroke: 'clamp(0.8px, 0.2vw, 1px) white',
                  color: 'transparent',
                  textStroke: 'clamp(0.8px, 0.2vw, 1px) white'
                }}>/5</span>
              </div>
              <h3 className="text-white text-base sm:text-lg font-semibold mb-2" style={{ letterSpacing: '-0.04em' }}>Handover & Maintenance</h3>
              <p className="text-white text-xs sm:text-sm font-normal leading-relaxed" style={{ lineHeight: '22px' }}>Ready to use! We also provide ongoing maintenance and support.</p>
            </div>
          </div>

          {/* Desktop/Tablet Layout - Circle Arrangement */}
          <div className="hidden lg:block relative w-full h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Central Symbols Logo */}
              <div className="relative z-10" style={{ width: 'clamp(100px, 12vw, 200px)', height: 'clamp(100px, 12vw, 200px)' }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-3xl uppercase tracking-widest text-center leading-tight">AHL<br />Elevators</span>
                </div>
              </div>

              {/* Process Steps - Arranged in Circle around the center */}
              {/* Step 1 - Top Center */}
              <div className="absolute left-1/2 -translate-x-1/2 text-center" style={{ top: '8%', maxWidth: '400px' }}>
                <div className="flex justify-center mb-1 sm:mb-2">
                  <span className="font-semibold" style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                    WebkitTextStroke: 'clamp(0.8px, 0.08vw, 1.2px) white',
                    color: 'transparent',
                    textStroke: 'clamp(0.8px, 0.08vw, 1.2px) white'
                  }}>/1</span>
                </div>
                <h3
                  className="text-white mx-auto mb-1 sm:mb-2"
                  style={{ width: 'clamp(210px, 16vw, 310px)', height: 'clamp(24px, 1.875vw, 36px)', fontWeight: 600, fontSize: 'clamp(0.875rem, 1.8vw, 1.5rem)', lineHeight: '100%', letterSpacing: '-0.04em', textAlign: 'center' }}
                >
                  Site Inspection
                </h3>
                <p
                  className="text-white mx-auto"
                  style={{ width: 'clamp(220px, 16.6vw, 319px)', height: 'clamp(32px, 2.3vw, 44px)', fontWeight: 400, fontSize: 'clamp(0.625rem, 1.2vw, 0.875rem)', lineHeight: '22px', textAlign: 'center' }}
                >
                  We visit your building, apartment, or commercial space for a thorough evaluation.
                </p>
              </div>

              {/* Step 2 - Right Middle */}
              <div className="absolute translate-y-[-50%] text-center" style={{ top: '42%', right: '15%', maxWidth: '400px' }}>
                <div className="flex justify-center mb-1 sm:mb-2">
                  <span className="font-semibold" style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                    WebkitTextStroke: 'clamp(0.8px, 0.08vw, 1.2px) white',
                    color: 'transparent',
                    textStroke: 'clamp(0.8px, 0.08vw, 1.2px) white'
                  }}>/2</span>
                </div>
                <h3
                  className="text-white mx-auto mb-1 sm:mb-2"
                  style={{ width: 'clamp(210px, 16vw, 310px)', height: 'clamp(24px, 1.875vw, 36px)', fontWeight: 600, fontSize: 'clamp(0.875rem, 1.8vw, 1.5rem)', lineHeight: '100%', letterSpacing: '-0.04em', textAlign: 'center' }}
                >
                  Custom Planning
                </h3>
                <p
                  className="text-white mx-auto"
                  style={{ width: 'clamp(300px, 24vw, 460px)', height: 'clamp(32px, 2.3vw, 44px)', fontWeight: 400, fontSize: 'clamp(0.625rem, 1.2vw, 0.875rem)', lineHeight: '22px', textAlign: 'center' }}
                >
                  Designing the perfect elevator solution matching your aesthetics and requirements.
                </p>
              </div>

              {/* Step 3 - Bottom Right */}
              <div className="absolute text-center" style={{ bottom: '18%', right: '18%', maxWidth: '400px' }}>
                <div className="flex justify-center mb-1 sm:mb-2">
                  <span className="font-semibold" style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                    WebkitTextStroke: 'clamp(0.8px, 0.08vw, 1.2px) white',
                    color: 'transparent',
                    textStroke: 'clamp(0.8px, 0.08vw, 1.2px) white'
                  }}>/3</span>
                </div>
                <h3
                  className="text-white mx-auto mb-1 sm:mb-2"
                  style={{ width: 'clamp(210px, 16vw, 310px)', height: 'clamp(24px, 1.875vw, 36px)', fontWeight: 600, fontSize: 'clamp(0.875rem, 1.8vw, 1.5rem)', lineHeight: '100%', letterSpacing: '-0.04em', textAlign: 'center' }}
                >
                  Professional Installation
                </h3>
                <p
                  className="text-white mx-auto"
                  style={{ width: 'clamp(240px, 18vw, 350px)', height: 'clamp(32px, 2.3vw, 44px)', fontWeight: 400, fontSize: 'clamp(0.625rem, 1.2vw, 0.875rem)', lineHeight: '22px', textAlign: 'center' }}
                >
                  Our expert team safely installs the elevator with minimal disruption.
                </p>
              </div>

              {/* Step 4 - Bottom Left */}
              <div className="absolute text-center" style={{ bottom: '18%', left: '18%', maxWidth: '400px' }}>
                <div className="flex justify-center mb-1 sm:mb-2">
                  <span className="font-semibold" style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                    WebkitTextStroke: 'clamp(0.8px, 0.08vw, 1.2px) white',
                    color: 'transparent',
                    textStroke: 'clamp(0.8px, 0.08vw, 1.2px) white'
                  }}>/4</span>
                </div>
                <h3
                  className="text-white mx-auto mb-1 sm:mb-2"
                  style={{ width: 'clamp(210px, 16vw, 310px)', height: 'clamp(24px, 1.875vw, 36px)', fontWeight: 600, fontSize: 'clamp(0.875rem, 1.8vw, 1.5rem)', lineHeight: '100%', letterSpacing: '-0.04em', textAlign: 'center' }}
                >
                  Safety Testing
                </h3>
                <p
                  className="text-white mx-auto"
                  style={{ width: 'clamp(300px, 24vw, 460px)', height: 'clamp(32px, 2.3vw, 44px)', fontWeight: 400, fontSize: 'clamp(0.625rem, 1.2vw, 0.875rem)', lineHeight: '22px', textAlign: 'center' }}
                >
                  Rigorous testing to ensure world-class safety and smooth operation.
                </p>
              </div>

              {/* Step 5 - Left Middle */}
              <div className="absolute translate-y-[-50%] text-center" style={{ top: '42%', left: '15%', maxWidth: '400px' }}>
                <div className="flex justify-center mb-1 sm:mb-2">
                  <span className="font-semibold" style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                    WebkitTextStroke: 'clamp(0.8px, 0.08vw, 1.2px) white',
                    color: 'transparent',
                    textStroke: 'clamp(0.8px, 0.08vw, 1.2px) white'
                  }}>/5</span>
                </div>
                <h3
                  className="text-white mx-auto mb-1 sm:mb-2"
                  style={{ width: 'clamp(210px, 16vw, 310px)', height: 'clamp(24px, 1.875vw, 36px)', fontWeight: 600, fontSize: 'clamp(0.875rem, 1.8vw, 1.5rem)', lineHeight: '100%', letterSpacing: '-0.04em', textAlign: 'center' }}
                >
                  Handover & Maintenance
                </h3>
                <p
                  className="text-white mx-auto"
                  style={{ width: 'clamp(250px, 18.5vw, 360px)', height: 'clamp(32px, 2.3vw, 44px)', fontWeight: 400, fontSize: 'clamp(0.625rem, 1.2vw, 0.875rem)', lineHeight: '22px', textAlign: 'center' }}
                >
                  Ready to use! We also provide ongoing maintenance and support.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Sections Container with consistent gaps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {/* Our Specialities Section */}
        <OurSpecialitiesSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Our Work Section */}
        <OurWorkSection />

        {/* Product Showcase Section */}
        <ProductShowcaseSection />

        {/* Design Section */}
        <DesignSection />

        {/* Product Features Section */}
        <ProductFeaturesSection />

        {/* Innovative Affiliations Section */}
        <InnovativeAffiliationsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
