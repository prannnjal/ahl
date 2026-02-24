import React from 'react';
import Image from 'next/image';

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "RESIDENTIAL ELEVATORS",
      description: "Elegant and reliable elevators customized for apartments and private homes.",
      image: "/New folder (2)/1.png",
      showArrow: true
    },
    {
      id: 2,
      title: "COMMERCIAL ELEVATORS",
      description: "High-capacity and high-speed elevators designed for busy office buildings and malls.",
      image: "/New folder (2)/2.png",
      showArrow: true
    },
    {
      id: 3,
      title: "CUSTOM DESIGNS",
      description: "Bespoke cabins matching your architectural aesthetics and premium requirements.",
      image: "/New folder (2)/Frame .png",
      showArrow: true
    },
    {
      id: 4,
      title: "ELEVATOR MODERNIZATION",
      description: "Upgrading legacy systems with modern safety, speed, and aesthetic enhancements.",
      image: "/New folder (2)/4.png",
      showArrow: true
    },
    {
      id: 5,
      title: "MAINTENANCE & REPAIR",
      description: "24/7 proactive maintenance to ensure smooth, uninterrupted elevator operations.",
      image: "/New folder (2)/5.png",
      showArrow: true
    },
    {
      id: 6,
      title: "SAFETY INSPECTIONS",
      description: "Rigorous testing and compliance checks to maintain the highest safety standards.",
      image: "/New folder (2)/Frame 198.png",
      showArrow: true
    },
    {
      id: 7,
      title: "SMART SYSTEMS",
      description: "Integrating intelligent destination control and IoT-enabled monitoring.",
      image: "/New folder (2)/7.png",
      showArrow: true
    },
    {
      id: 8,
      title: "PANORAMIC ELEVATORS",
      description: "Stunning glass elevators providing passengers with a scenic ride experience.",
      image: "/New folder (2)/8.png",
      showArrow: true
    },
    {
      id: 9,
      title: "FREIGHT ELEVATORS",
      description: "Heavy-duty solutions engineered to safely transport goods in industrial settings.",
      image: "/New folder (2)/Frame 41 (1).png",
      showArrow: true
    }
  ];

  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-none">
        {/* Mobile Layout */}
        <div className="grid grid-cols-1 gap-[2px] md:hidden">
          {services.map((service) => (
            <div key={`mobile-${service.id}`} className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={service.id <= 3}
                  sizes="(max-width: 768px) 100vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/55 z-10"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className="text-white font-semibold uppercase leading-tight tracking-tight"
                      style={{
                        fontSize: 'clamp(1.35rem, 5vw, 1.75rem)',
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {service.title === "INDUSTRIAL TESTING + VALIDATION" ? (
                        <>
                          INDUSTRIAL
                          <br />
                          TESTING+VALIDATION
                        </>
                      ) : (
                        service.title
                      )}
                    </h3>
                    <p
                      className="text-white/90 mt-3 text-sm leading-snug text-justify"
                      style={{
                        maxWidth: '100%',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {service.description}
                    </p>
                  </div>
                  <span
                    className="font-semibold leading-none text-white select-none"
                    style={{
                      fontSize: 'clamp(2.75rem, 10vw, 3.5rem)',
                      WebkitTextStroke: '0.3px white',
                      color: 'transparent',
                      textStroke: '0.3px white',
                    }}
                  >
                    /{service.id}
                  </span>
                </div>
                {service.showArrow && (
                  <div className="flex justify-end">
                    <svg
                      className="text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      style={{ width: '28px', height: '28px' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-[2px]">
          {services.map((service) => (
            <div key={`tablet-${service.id}`} className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={service.id <= 3}
                  sizes="(max-width: 1024px) 50vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/55 z-10"></div>
              <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3
                      className="text-white font-semibold uppercase leading-tight tracking-tight"
                      style={{
                        fontSize: 'clamp(1.35rem, 3.4vw, 1.85rem)',
                        letterSpacing: '-0.04em',
                      }}
                    >
                      {service.title === "INDUSTRIAL TESTING + VALIDATION" ? (
                        <>
                          INDUSTRIAL
                          <br />
                          TESTING+VALIDATION
                        </>
                      ) : (
                        service.title
                      )}
                    </h3>
                    <p
                      className="text-white/90 mt-4 text-sm leading-snug"
                      style={{
                        maxWidth: 'clamp(14rem, 22vw, 18rem)',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {service.description.replace(/\n/g, ' ')}
                    </p>
                  </div>
                  <span
                    className="font-semibold leading-none text-white select-none"
                    style={{
                      fontSize: 'clamp(3rem, 6vw, 3.75rem)',
                      WebkitTextStroke: '0.3px white',
                      color: 'transparent',
                      textStroke: '0.3px white',
                    }}
                  >
                    /{service.id}
                  </span>
                </div>
                {service.showArrow && (
                  <div className="flex justify-end">
                    <svg
                      className="text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      style={{ width: '32px', height: '32px' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2px' }}>
          {services.map((service) => (
            <div
              key={service.id}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={service.id <= 3}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="absolute inset-0 bg-black/50 z-10"></div>

              <div className="absolute top-5 right-5 md:top-6 md:right-6 lg:top-7 lg:right-7 z-20">
                <span
                  className="font-semibold leading-none text-white select-none"
                  style={{
                    fontSize: '64px',
                    WebkitTextStroke: '0.3px white',
                    color: 'transparent',
                    textStroke: '0.3px white',
                  }}
                >
                  /{service.id}
                </span>
              </div>

              {service.showArrow && (
                <div className="absolute top-1/2 right-3 md:right-4 lg:right-5 -translate-y-1/2 z-20">
                  <svg
                    className="text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    style={{ width: '32px', height: '32px' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <div className="absolute z-20" style={{ top: '20px', left: '26px' }}>
                <h3
                  className="text-white"
                  style={{
                    width: '169px',
                    height: '72px',
                    fontWeight: 600,
                    fontSize: '30px',
                    lineHeight: '100%',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {service.title === "INDUSTRIAL TESTING + VALIDATION" ? (
                    <>
                      INDUSTRIAL
                      <br />
                      TESTING+VALIDATION
                    </>
                  ) : (
                    service.title
                  )}
                </h3>
              </div>

              <div className="absolute z-20" style={{ top: '102px', left: '26px' }}>
                <p
                  className="text-white"
                  style={{
                    width: '384px',
                    height: '38px',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0',
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
