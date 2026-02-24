import React from 'react';
import Image from 'next/image';

export const DesignSection = () => {
  return (
    <section className="relative overflow-hidden lg:h-[400px]">
      {/* Linear Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,25,47,1)] to-[rgba(205,64,11,1)] z-0"></div>

      {/* Background Image with wavy patterns */}
      <div className="absolute inset-0 z-5">
        <Image
          src="/1 11.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-80"
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>

      {/* Mobile View */}
      <div className="lg:hidden relative z-20 container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">

          {/* Left Side - Case Studies Content */}
          <div className="text-white w-full">
            <h2 className="font-bold mb-4 tracking-tight text-2xl">Recent Installations</h2>
            <div className="w-full">
              <p className="leading-relaxed font-normal mb-4 text-sm">
                Every project we take on is more than an installation; it's a story of safety, precision, and purpose.
              </p>
              <p className="leading-relaxed font-normal text-sm">
                Some of the many projects we've brought to life, built with passion and dedication at Aura Elevators.
              </p>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="text-white w-full text-right">
            <div className="mb-4">
              <blockquote
                className="mb-4 text-lg font-bold"
                style={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.125rem',
                  lineHeight: '120%',
                  letterSpacing: '-0.04em',
                  textAlign: 'right'
                }}
              >
                "We're thrilled to collaborate with them! They simply build exceptional elevators."
              </blockquote>
            </div>
            <div className="flex flex-col items-end space-y-1">
              <p
                style={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: 'clamp(1.05rem, 3.4vw, 1.35rem)',
                  lineHeight: '110%',
                  letterSpacing: '-0.04em'
                }}
              >
                Skyline Apartments
              </p>
              <p
                style={{
                  color: 'white',
                  fontWeight: 400,
                  fontSize: 'clamp(0.85rem, 2.6vw, 1.05rem)',
                  lineHeight: '110%',
                  letterSpacing: '-0.04em'
                }}
              >
                Premium Residential Complex
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block relative z-20" style={{
        height: '100%'
      }}>

        {/* Left Side - Case Studies Content - Independent from left edge */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center text-white" style={{
          paddingLeft: 'clamp(1rem, 4.68vw, 4rem)'
        }}>
          <h2 className="font-bold mb-4 tracking-tight" style={{
            fontSize: 'clamp(1.25rem, 2.2vw, 1.875rem)',
            color: 'white'
          }}>Recent Installations</h2>
          <div style={{
            width: 'clamp(280px, 33.31vw, 455px)',
            height: 'clamp(80px, 8.05vw, 110px)'
          }}>
            <p className="leading-relaxed font-normal mb-4" style={{
              fontSize: 'clamp(0.75rem, 1.17vw, 1rem)',
              color: 'white'
            }}>
              Every project we take on is more than an installation; it's a story of safety, precision, and purpose.
            </p>
            <p className="leading-relaxed font-normal" style={{
              fontSize: 'clamp(0.75rem, 1.17vw, 1rem)',
              color: 'white'
            }}>
              Some of the many projects we've brought to life, built with passion and dedication at Aura Elevators.
            </p>
          </div>
        </div>

        {/* Right Side - Testimonial - Independent from right edge */}
        <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center text-white text-right" style={{
          paddingRight: 'clamp(1rem, 4.68vw, 4rem)'
        }}>
          <div className="mb-4" style={{ maxWidth: 'clamp(300px, 40vw, 600px)' }}>
            <blockquote
              className="mb-4"
              style={{
                color: 'white',
                fontWeight: 700,
                fontSize: 'clamp(1rem, 2.64vw, 2.25rem)',
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              "We're thrilled to collaborate with them! They simply build exceptional elevators."
            </blockquote>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <p
              style={{
                color: 'white',
                fontWeight: 600,
                fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                lineHeight: '110%',
                letterSpacing: '-0.04em'
              }}
            >
              Skyline Apartments
            </p>
            <p
              style={{
                color: 'white',
                fontWeight: 400,
                fontSize: 'clamp(0.9rem, 1.4vw, 1.1rem)',
                lineHeight: '110%',
                letterSpacing: '-0.04em'
              }}
            >
              Premium Residential Complex
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
