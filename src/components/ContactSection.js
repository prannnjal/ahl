import React from "react";
import Image from "next/image";

export const ContactSection = () => {
  return (
    <section className="bg-white" style={{ marginTop: 'clamp(2rem, 4vw, 4rem)' }}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-10">
          <div className="space-y-6 mt-8">
            <div>
              <h2
                className="text-3xl font-bold leading-tight mb-4"
                style={{
                  background: 'linear-gradient(to right, rgba(12, 25, 48, 1), rgba(203, 65, 13, 1))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.04em'
                }}
              >
                Let's connect and<br />bring your ideas to life.
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Ready to bring your vision to life? Get in touch and let's transform your ideas into reality.
              </p>
            </div>

            <div className="space-y-5">
              <MobileContactDetail
                icon={
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title="Our Location"
                description={
                  <>
                    Address: Khasara no. 2941/8, Gali No. 9,<br />
                    Laxman Vihar, Gurugram, Haryana-122001<br /><br />
                    Corporate office: Delhi, Gurugram, Rewari, Neemran, Narnaul
                  </>
                }
              />
              <MobileContactDetail
                icon={
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title="Email Us"
                description={
                  <a
                    href="mailto:ahlelevators56@gmail.com"
                    className="text-gray-500 hover:text-red-600 transition-colors duration-200 break-words"
                  >
                    ahlelevators56@gmail.com
                  </a>
                }
              />
              <MobileContactDetail
                icon={
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h1.28a1 1 0 01.95.68l1.07 3.21a1 1 0 01-.27 1.04l-1.52 1.52a12.04 12.04 0 005.66 5.66l1.52-1.52a1 1 0 011.04-.27l3.21 1.07a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
                  </svg>
                }
                title="Call Us"
                description={
                  <a
                    href="tel:+919667972293"
                    className="text-gray-500 hover:text-red-600 transition-colors duration-200"
                  >
                    +91 9667972293
                  </a>
                }
              />

            </div>
          </div>

          <ContactForm />
        </div>

        {/* Tablet & Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2" style={{ gap: '2px' }}>
          {/* Left Section - Contact Information */}
          <div className="space-y-6 sm:space-y-8 mt-8 sm:mt-12 md:mt-16 lg:mt-24">
            <div style={{ maxWidth: 'clamp(250px, 40vw, 500px)' }}>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight mb-4 sm:mb-5 md:mb-6"
                style={{
                  background: 'linear-gradient(to right, rgba(12, 25, 48, 1), rgba(203, 65, 13, 1))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.04em'
                }}
              >
                Let's connect and<br />bring your ideas to life.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Ready to bring your vision to life? <br />Get in touch and let's transform your ideas into reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6 sm:space-y-8">
              {/* Location */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Our Location</h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    Address: Khasara no. 2941/8, Gali No. 9,<br />
                    Laxman Vihar, Gurugram, Haryana-122001<br /><br />
                    Corporate office: Delhi, Gurugram, Rewari, Neemran, Narnaul
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Email Us</h3>
                  <a
                    href="mailto:ahlelevators56@gmail.com"
                    className="text-gray-500 text-sm sm:text-base break-words hover:text-red-600 transition-colors duration-200"
                  >
                    ahlelevators56@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 mt-1">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h1.28a1 1 0 01.95.68l1.07 3.21a1 1 0 01-.27 1.04l-1.52 1.52a12.04 12.04 0 005.66 5.66l1.52-1.52a1 1 0 011.04-.27l3.21 1.07a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.163 21 3 14.837 3 7V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Call Us</h3>
                  <a
                    href="tel:+919667972293"
                    className="text-gray-500 text-sm sm:text-base hover:text-red-600 transition-colors duration-200"
                  >
                    +91 9667972293
                  </a>
                </div>
              </div>


            </div>
          </div>

          {/* Right Section - Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const MobileContactDetail = ({ icon, title, description }) => (
  <div className="flex items-start space-x-3">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div className="flex-1">
      <h3 className="text-gray-800 font-semibold mb-1 text-sm">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const ContactForm = () => (
  <div className="bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl overflow-hidden">
    <div className="relative h-32 sm:h-36 md:h-40 lg:h-44 bg-gray-800 overflow-hidden">
      <Image
        src="/aura-elevators/WhatsApp_Image_2026-02-24_at_10.43.32_AM.jpeg"
        alt="Form Header Background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8">
        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Let's connect</h3>
        <p className="text-gray-200 text-sm sm:text-base">
          Our team is ready to answer your questions and<br />discuss your project needs
        </p>
      </div>
    </div>

    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <form className="space-y-4 sm:space-y-5 md:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          <div className="sm:col-span-1">
            <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Your Name</label>
            <input
              type="text"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              style={{ borderColor: 'rgba(217, 217, 217, 1)' }}
              placeholder="Enter your name"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Specialisation</label>
            <select
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              style={{ borderColor: 'rgba(217, 217, 217, 1)' }}
            >
              <option>Select...</option>
              <option>Residential Elevators</option>
              <option>Commercial Elevators</option>
              <option>Elevator Modernization</option>
              <option>Maintenance & Repair</option>
              <option>Custom Designs</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Phone Number</label>
            <div className="flex space-x-2">
              <select
                className="px-2 sm:px-3 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                style={{ borderColor: 'rgba(217, 217, 217, 1)' }}
              >
                <option>+91</option>
                <option>+1</option>
                <option>+61</option>
                <option>+64</option>
              </select>
              <input
                type="tel"
                className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                style={{ borderColor: 'rgba(217, 217, 217, 1)' }}
                placeholder="Enter phone number"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-red-500 focus-border-transparent"
              style={{ borderColor: 'rgba(217, 217, 217, 1)' }}
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">Send us a message</label>
          <textarea
            rows={4}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg focus:ring-2 focus:ring-red-500 focus-border-transparent resize-y"
            style={{ borderColor: 'rgba(217, 217, 217, 1)' }}
            placeholder="Tell us about your project..."
          ></textarea>
        </div>

        <div className="bg-gray-50 p-4 sm:p-5 md:p-6 rounded-lg">
          <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
            Stay ahead with AHL Elevators updates on elevator safety, maintenance, and modernizations that help your building run smoother.
          </p>
          <label className="flex items-start sm:items-center space-x-2 sm:space-x-3">
            <input type="checkbox" className="mt-1 sm:mt-0 rounded border-gray-300 text-red-600 focus:ring-red-500 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-gray-700 text-xs sm:text-sm">Yes, subscribe me to your design blogs for more updates.</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base rounded-lg transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
);
