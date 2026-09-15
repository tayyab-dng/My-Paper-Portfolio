'use client';

import React from 'react';

export default function AllWorkShowcase() {
  return (
    <section className="w-full bg-paper select-none px-[2vw] pt-[4vw] pb-[4vw] border-t border-[#1d1d1b]/35">
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-0">
        {/* ============================================================ */}
        {/* LEFT COLUMN: WOW CONCEPT                                     */}
        {/* ============================================================ */}
        <div className="w-full lg:w-[32%] lg:border-r border-[#1d1d1b]/35 lg:pr-[2.5vw] flex flex-col justify-start">
          <a
            href="https://wowconcept.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full"
          >
            {/* Project Image 28:13 ratio */}
            <div className="w-full aspect-[28/13] border border-[#1d1d1b] overflow-hidden bg-[#806454]">
              <img
                src="/assets/wow-concept-store.webp"
                alt="WOW Concept Store"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out select-none"
              />
            </div>

            {/* Title & Orange NEW Badge */}
            <div className="flex items-center mt-[0.8vw] gap-[0.5vw]">
              <h3
                style={{ fontVariantLigatures: 'none' }}
                className="font-condensed text-2xl sm:text-3xl lg:text-[1.8vw] text-[#1d1d1b] uppercase tracking-[-0.03em] font-normal m-0 p-0 leading-none"
              >
                WOW CONCEPT
              </h3>
              <span className="bg-[#c03f13] text-[#cdc6be] font-condensed text-xs sm:text-sm lg:text-[1.1vw] uppercase px-[0.35vw] py-[0.05vw] rounded-[0.2vw] leading-tight">
                New
              </span>
            </div>

            {/* Editorial Description */}
            <p className="font-editorial text-sm sm:text-base lg:text-[1.2vw] text-[#1d1d1b] font-light leading-[1.4] lg:leading-[1.5vw] tracking-[-0.01em] mt-[0.8vw] max-w-[95%]">
              WOW Concept is a the world’s first concept store based in Madrid revolutionizing retail with a dynamic &amp; interactive shopping experience.
            </p>
          </a>
        </div>

        {/* ============================================================ */}
        {/* CENTER COLUMN: ALL WORK! HERO EMBED                          */}
        {/* ============================================================ */}
        <div className="w-full lg:w-[36%] lg:border-r border-[#1d1d1b]/35 lg:px-[2.5vw] flex flex-col items-center justify-center text-center my-6 lg:my-0">
          <a
            href="/work"
            className="group relative inline-flex items-center justify-center px-[3vw] py-[1.2vw] cursor-pointer"
          >
            {/* Hand-drawn Oval Ellipse SVG */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 500 146"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="250"
                cy="73"
                rx="242"
                ry="68"
                stroke="#1d1d1b"
                strokeWidth="2.5"
                className="group-hover:stroke-[#c03f13] transition-colors duration-300"
              />
            </svg>

            {/* Headline Title */}
            <h2 className="font-condensed text-4xl sm:text-5xl lg:text-[4.5vw] leading-none text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal relative z-10 m-0 p-0">
              All W<span className="font-display">o</span>rk!
            </h2>
          </a>

          {/* Subtitle */}
          <p className="font-editorial text-lg sm:text-xl lg:text-[2.2vw] leading-[1.3] lg:leading-[2.8vw] text-[#1d1d1b] font-light tracking-[-0.03em] mt-[1.2vw] max-w-[90%]">
            Handpicked highlights – spanning the last few years.
          </p>

          {/* Caption */}
          <div className="flex items-center gap-[0.3vw] mt-[1.8vw]">
            <span className="font-condensed text-xs sm:text-sm lg:text-[1.3vw] text-[#1d1d1b] uppercase font-normal tracking-[-0.02em]">
              Tip!
            </span>
            <span className="font-editorial text-xs sm:text-sm lg:text-[1.15vw] text-[#1d1d1b] font-light tracking-[-0.01em]">
              Click on the sides to explore
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: THE ROGER HUB                                  */}
        {/* ============================================================ */}
        <div className="w-full lg:w-[32%] lg:pl-[2.5vw] flex flex-col justify-start">
          <a
            href="https://www.on-running.com/en-us/theroger"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full"
          >
            {/* Project Image 28:13 ratio */}
            <div className="w-full aspect-[28/13] border border-[#1d1d1b] overflow-hidden bg-[#806454]">
              <img
                src="/assets/roger-hub.webp"
                alt="The Roger Hub"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out select-none"
              />
            </div>

            {/* Title & Orange NEW Badge */}
            <div className="flex items-center mt-[0.8vw] gap-[0.5vw]">
              <h3
                style={{ fontVariantLigatures: 'none' }}
                className="font-condensed text-2xl sm:text-3xl lg:text-[1.8vw] text-[#1d1d1b] uppercase tracking-[-0.03em] font-normal m-0 p-0 leading-none"
              >
                THE ROGER HUB
              </h3>
              <span className="bg-[#c03f13] text-[#cdc6be] font-condensed text-xs sm:text-sm lg:text-[1.1vw] uppercase px-[0.35vw] py-[0.05vw] rounded-[0.2vw] leading-tight">
                New
              </span>
            </div>

            {/* Editorial Description */}
            <p className="font-editorial text-sm sm:text-base lg:text-[1.2vw] text-[#1d1d1b] font-light leading-[1.4] lg:leading-[1.5vw] tracking-[-0.01em] mt-[0.8vw] max-w-[95%]">
              The Roger Hub is an immersive web experience showcasing the tennis-inspired &apos;On&apos; sneakers, a collaboration born out of a partnership with the legendary Roger Federer.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
