'use client';

import React from 'react';
import Link from 'next/link';

export default function AllWorkShowcase() {
  return (
    <section className="w-full bg-paper select-none px-4 sm:px-[2vw] pt-6 sm:pt-[4vw] pb-8 sm:pb-[4vw] border-t border-[#1d1d1b]/35">
      <div className="w-full flex flex-col-reverse lg:flex-row items-stretch justify-between gap-8 lg:gap-0">
        {/* ============================================================ */}
        {/* LEFT COLUMN: WOW CONCEPT                                     */}
        {/* ============================================================ */}
        <div className="w-full lg:w-[32%] lg:border-r border-[#1d1d1b]/35 lg:pr-[2.5vw] flex flex-col justify-start">
          <Link
            href="/work/wow-concept"
            className="group block w-full cursor-pointer"
          >
            {/* Project Image 28:13 ratio */}
            <div className="w-full aspect-[28/11] lg:aspect-[28/13] border border-[#1d1d1b] overflow-hidden bg-[#806454]">
              <img
                src="/assets/wow-concept-store.webp"
                alt="WOW Concept Store"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out select-none"
              />
            </div>

            {/* Title & Orange NEW Badge */}
            <div className="flex items-center mt-3 lg:mt-[0.8vw] gap-2 lg:gap-[0.5vw]">
              <h3
                style={{ fontVariantLigatures: 'none' }}
                className="font-condensed text-3xl sm:text-3xl lg:text-[1.8vw] text-[#1d1d1b] uppercase tracking-[-0.03em] font-normal m-0 p-0 leading-none"
              >
                WOW CONCEPT
              </h3>
              <span className="bg-[#c03f13] text-[#cdc6be] font-condensed text-xs sm:text-sm lg:text-[1.1vw] uppercase px-1.5 lg:px-[0.35vw] py-0.5 lg:py-[0.05vw] rounded-[0.2vw] leading-tight">
                New
              </span>
            </div>

            {/* Editorial Description */}
            <p className="font-editorial text-[4.4vw] sm:text-base lg:text-[1.2vw] text-[#1d1d1b] font-light leading-[1.3] lg:leading-[1.5vw] tracking-[-0.01em] mt-2 lg:mt-[0.8vw] max-w-[95%]">
              WOW Concept is a the world’s first concept store based in Madrid revolutionizing retail with a dynamic &amp; interactive shopping experience.
            </p>
          </Link>
        </div>

        {/* ============================================================ */}
        {/* CENTER COLUMN: ALL WORK! HERO EMBED                          */}
        {/* On mobile: displayed at the top with colossal 2-line layout  */}
        {/* ============================================================ */}
        <div className="w-full lg:w-[36%] lg:border-r border-[#1d1d1b]/35 lg:px-[2.5vw] flex flex-col items-start lg:items-center justify-start lg:justify-center text-left lg:text-center my-0 lg:my-0">
          <Link
            href="/work"
            className="group relative inline-flex items-center justify-start lg:justify-center p-0 lg:px-[3vw] lg:py-[1.2vw] cursor-pointer"
          >
            {/* Hand-drawn Oval Ellipse SVG (desktop only) */}
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
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

            {/* Headline Title: Stacked on mobile "ALL WO" line 1, "RK!" line 2 */}
            <h2 className="font-condensed text-[29vw] sm:text-[25vw] lg:text-[4.5vw] leading-[0.76] lg:leading-none text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal relative z-10 m-0 p-0 text-left lg:text-center">
              All W<span className="font-display">o</span><br className="block lg:hidden" />rk!
            </h2>
          </Link>

          {/* Subtitle */}
          <p className="font-editorial text-[6.5vw] sm:text-xl lg:text-[2.2vw] leading-[1.15] lg:leading-[2.8vw] text-[#1d1d1b] font-light tracking-[-0.03em] mt-3 lg:mt-[1.2vw] max-w-[90%] text-left lg:text-center">
            Handpicked highlights —<br className="block sm:hidden" /> spanning the last few years.
          </p>

          {/* Caption */}
          <div className="flex items-center gap-1.5 lg:gap-[0.3vw] mt-3 lg:mt-[1.8vw]">
            <span className="font-condensed text-[4vw] sm:text-sm lg:text-[1.3vw] text-[#1d1d1b] uppercase font-normal tracking-[-0.02em]">
              Tip!
            </span>
            <span className="font-editorial text-[3.8vw] sm:text-sm lg:text-[1.15vw] text-[#1d1d1b] font-light tracking-[-0.01em]">
              Click on the sides to explore
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT COLUMN: THE ROGER HUB (hidden on mobile in reference)  */}
        {/* ============================================================ */}
        <div className="hidden lg:flex w-[32%] pl-[2.5vw] flex-col justify-start">
          <Link
            href="/work/the-roger-hub"
            className="group block w-full cursor-pointer"
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
          </Link>
        </div>
      </div>
    </section>
  );
}
