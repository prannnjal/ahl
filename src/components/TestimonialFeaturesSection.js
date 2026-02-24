import React from "react";
import Image from "next/image";

export const TestimonialFeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "100+ leading softwares",
      description:
        "We own more than 100 active licenses and subscriptions of industry-leading tools that help us give our clients get the best, for the best.",
    },
    {
      id: 2,
      title: "A team for every project",
      description:
        "We believe in complete project dedication which is why we allocate a team for every project. This has greatly increased our efficiency and reduced turn-around times by 44%.",
    },
    {
      id: 3,
      title: "Confidentiality is the key",
      description:
        "Artivo ensures complete data security with robust NDAs and confidentiality agreements that protect the interests of stakeholders in projects.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0">
        {/* Updated Linear Gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,25,47,1) 0%, rgba(8,181,255,1) 100%)",
          }}
        ></div>

        {/* Black overlay with opacity */}
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(0, 0, 0, 0.3)",
          }}
        ></div>

        {/* White wave pattern */}
        <Image
          src="/1 11.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Intersect image in top right corner */}
      <div className="absolute top-0 right-0 z-20">
        <Image
          src="/product/Intersect.png"
          alt="Intersect Pattern"
          width={550}
          height={350}
          className="object-contain"
        />
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center" style={{ paddingLeft: 'clamp(3rem, 6vw, 6rem)', paddingRight: 'clamp(1rem, 4.68vw, 4rem)' }}>
          <a
            href="https://calendly.com/artivo/free-design-consultation"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a free design consultation"
            className="flex items-center gap-6"
          >
            <span className="text-black font-bold whitespace-nowrap" style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)' }}>
              CLICK HERE TO BOOK A FREE CONSULTATION
            </span>
            <Image
              src="/why-artivo/Group 18.svg"
              alt="Group 18 Pattern"
              width={20}
              height={20}
              className="object-contain"
            />
          </a>
        </div>
      </div>

      <div className="relative z-10" style={{ paddingLeft: 'clamp(1rem, 4.68vw, 4rem)', paddingBottom: 'clamp(1rem, 2vw, 2rem)' }}>
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-8 gap-10">
          {/* Quote */}
          <div className="lg:w-1/2 mt-12" style={{ paddingLeft: 0 }}>
            {/* Desktop / Tablet view */}
            <div className="hidden md:block">
              <blockquote className="text-white text-4xl font-bold leading-tight mb-6">
                "Artivo is where imagination meets precision."
              </blockquote>
              <cite
                className="text-white text-base sm:text-lg opacity-90 block not-italic"
                style={{ fontStyle: 'normal' }}
              >
                <span
                  className="font-semibold"
                  style={{ fontSize: 'clamp(1rem, 1.2vw, 1.25rem)' }}
                >
                  Jessica Wade
                </span>
                <br />
                <span
                  className="opacity-75"
                  style={{ marginTop: '0px', display: 'block' }}
                >
                  Innovation, DLR Hydraulic Tools
                </span>
              </cite>
            </div>

            {/* Mobile-specific view */}
            <div className="block md:hidden">
              <blockquote className="text-white text-2xl sm:text-3xl font-bold leading-tight mb-4">
                "Artivo is where imagination meets precision."
              </blockquote>
              <cite className="text-white text-sm opacity-90 not-italic block">
                <span className="font-semibold text-base">Jessica Wade</span>
                <br />
                <span className="opacity-75 text-sm">
                  Innovation, DLR Hydraulic Tools
                </span>
              </cite>
            </div>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 relative" style={{ gap: '2px', paddingLeft: 0, marginLeft: 'clamp(-1rem, -1vw, -0.5rem)' }}>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="p-6 bg-transparent duration-300 group cursor-pointer relative md:pr-12"
            >
              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-[#ffed00] transition-colors">
                {feature.title}
              </h3>
              <p className="text-white text-sm opacity-90 leading-relaxed" style={{ maxWidth: '330px' }}>
                {feature.description}
              </p>
              {index > 0 && (
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
  );
};
