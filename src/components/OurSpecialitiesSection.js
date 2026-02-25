import React from 'react';
import Image from 'next/image';

export const OurSpecialitiesSection = () => {
  return (
    <section className="relative bg-white lg:h-[400px]">


      {/* Mobile View */}
      <div className="lg:hidden px-4 sm:px-6 mt-6">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <h2
              className="text-gray-900 mb-4 sm:mb-6 text-2xl sm:text-3xl"
              style={{
                fontWeight: 700,
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              Our Specialities
            </h2>

            <div
              className="text-gray-900 text-base sm:text-lg"
              style={{
                fontWeight: 400,
                lineHeight: '100%',
                letterSpacing: '-0.04em'
              }}
            >
              <p className="mb-4">
                Every building needs a reliable elevation solution.
              </p>
              <p>
                At AHL Elevators, we provide top-tier elevator installations, custom designs, and responsive maintenance to elevate your spaces.
              </p>
            </div>
          </div>

          {/* Right Side - Image with Testimonial Overlay */}
          <div className="relative w-full h-[300px] sm:h-[350px] overflow-hidden rounded-lg">

            {/* Testimonial Text Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-end px-4 sm:px-6">
              <div className="text-right max-w-full sm:max-w-lg">
                <blockquote
                  className="text-black mb-4 text-xl sm:text-2xl"
                  style={{
                    fontWeight: 700,
                    lineHeight: '100%',
                    letterSpacing: '-0.04em'
                  }}
                >
                  "If you are looking for safe and premium elevator installations, we deliver excellence from design to handover."
                </blockquote>

                <div className="space-y-1">
                  <p
                    className="text-black text-base sm:text-lg"
                    style={{
                      fontWeight: 600,
                      lineHeight: '100%',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    Deepak
                  </p>
                  <p
                    className="text-black text-base sm:text-lg"
                    style={{
                      fontWeight: 400,
                      lineHeight: '120%',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    Operations Manager, AHL Elevators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block relative h-full">
        {/* Left Side - Text Content - Independent from left edge */}
        <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center" style={{
          paddingLeft: 'clamp(1rem, 4.68vw, 4rem)'
        }}>
          <h2
            className="text-gray-900 mb-4 sm:mb-6 text-[36px]"
            style={{
              fontWeight: 700,
              lineHeight: '100%',
              letterSpacing: '-0.04em'
            }}
          >
            Our Specialities
          </h2>

          <div
            className="text-gray-900 text-[20px]"
            style={{
              fontWeight: 400,
              lineHeight: '100%',
              letterSpacing: '-0.04em',
              maxWidth: 'clamp(300px, 40vw, 600px)'
            }}
          >
            <p className="mb-4">
              Every building needs a reliable elevation solution.
            </p>
            <p>
              At AHL Elevators, we provide top-tier elevator installations, custom designs, and responsive maintenance to elevate your spaces.
            </p>
          </div>
        </div>

        {/* Right Side - Image with Testimonial Overlay - Independent from right edge */}
        <div className="absolute right-0 top-0 bottom-0" style={{
          width: 'clamp(400px, 50vw, 800px)',
          paddingRight: 'clamp(1rem, 4.68vw, 4rem)'
        }}>
          <div className="relative w-full h-full overflow-hidden rounded-lg">

            {/* Testimonial Text Overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-end">
              <div className="text-right" style={{ maxWidth: 'clamp(300px, 35vw, 558px)' }}>
                <blockquote
                  className="text-black mb-4 text-[36px]"
                  style={{
                    fontWeight: 700,
                    lineHeight: '100%',
                    letterSpacing: '-0.04em'
                  }}
                >
                  "If you are looking for safe and premium elevator installations, we deliver excellence from design to handover."
                </blockquote>

                <div className="space-y-1">
                  <p
                    className="text-black text-[20px]"
                    style={{
                      fontWeight: 600,
                      lineHeight: '100%',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    Deepak
                  </p>
                  <p
                    className="text-black text-[20px]"
                    style={{
                      fontWeight: 400,
                      lineHeight: '120%',
                      letterSpacing: '-0.04em'
                    }}
                  >
                    Operations Manager, AHL Elevators
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >
  );
};
