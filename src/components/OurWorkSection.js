import React from 'react';
import Image from 'next/image';

export const OurWorkSection = () => {
  return (
    <section
      className="relative overflow-visible lg:h-[400px]"
      style={{
        background: 'linear-gradient(to right, rgba(11, 25, 47, 1), rgba(8, 181, 255, 1))',
        minHeight: 'clamp(250px, 14vw, 400px)',
        paddingBottom: 0,
        marginBottom: 0
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/aura-elevators/WhatsApp_Image_2026-02-24_at_10.43.28_AM_1_.jpeg"
          alt="Elevator Installation Example"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>


      {/* Left Side - Testimonial Content - Independent from left edge */}
      <div className="relative z-10" style={{
        minHeight: 'clamp(250px, 14vw, 271px)',
        paddingTop: 'clamp(2rem, 3vw, 4rem)',
        paddingBottom: 'clamp(2rem, 3vw, 4rem)'
      }}>
        {/* Desktop View */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 flex flex-col justify-center text-white" style={{
          paddingLeft: 'clamp(1rem, 4.68vw, 4rem)',
          transform: 'translateY(110px)'
        }}>
          <div className="space-y-4" style={{ maxWidth: 'clamp(280px, 50vw, 967px)' }}>
            <p
              className="text-white"
              style={{
                fontWeight: 600,
                fontSize: 'clamp(1rem, 2.64vw, 2.25rem)',
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              "With AHL Elevators, you get seamless installation and reliable performance. Their team made the entire process incredibly smooth."
            </p>

            <div className="space-y-1">
              <p
                className="text-white font-medium"
                style={{
                  fontSize: 'clamp(0.875rem, 1.46vw, 1.25rem)',
                  lineHeight: '100%',
                  letterSpacing: '-0.04em'
                }}
              >
                Ranjan Gupta
              </p>

              <p
                className="text-white"
                style={{
                  fontSize: 'clamp(0.875rem, 1.46vw, 1.25rem)',
                  lineHeight: '100%',
                  letterSpacing: '-0.04em'
                }}
              >
                Property Manager
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden px-4 sm:px-6 md:px-8 text-white" style={{
          paddingTop: 'clamp(2rem, 3vw, 4rem)'
        }}>
          <div className="space-y-4">
            <p
              className="text-white text-xl md:text-2xl"
              style={{
                fontWeight: 400,
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              "With AHL Elevators, you get seamless installation and reliable performance. Their team made the entire process incredibly smooth."
            </p>

            <div className="space-y-1">
              <p className="text-sm sm:text-base md:text-lg text-white font-medium">
                Ranjan Gupta
              </p>

              <p className="text-sm sm:text-base md:text-lg text-white">
                Property Manager
              </p>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};
