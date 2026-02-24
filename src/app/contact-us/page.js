import React from 'react';
import { Navbar } from '@/components/Navbar';
import { ContactSection } from '@/components/ContactSection';
import { InnovativeAffiliationsSection } from '@/components/InnovativeAffiliationsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar variant="contact" />

      {/* Contact Section as Hero */}
      <div style={{ marginTop: 'clamp(6rem, 12vw, 12rem)' }}>
        <ContactSection />
      </div>

      {/* Innovative Affiliations Section */}
      <InnovativeAffiliationsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
