'use client';

import React from 'react';

export default function AboutHeroSection() {
  return (
    <section className="w-full pt-[4.2vh] px-[2vw] pb-[3vw] flex flex-col select-none">
      <div className="w-full flex flex-col">
        {/* Solid Black ABOUT ME Box - single line with exact Webflow typography */}
        <div className="w-full block mb-0 relative">
          <h1
            className="bg-[#1d1d1b] text-[#cdc6be] uppercase text-[33vw] leading-[23vw] pt-[3.5vw] pr-[3vw] pb-0 pl-[0.8vw] tracking-[-0.05em] font-normal m-0 block whitespace-nowrap select-none text-left"
            style={{ fontFamily: 'Canopee, sans-serif' }}
          >
            A<span className="tracking-[-0.03em]">b</span>
            <span
              className="font-medium tracking-[-0.06em]"
              style={{ fontFamily: '"Domaine Display", serif' }}
            >
              o
            </span>
            ut Me
          </h1>
        </div>

        {/* Amsterdam Statement with Triple Crosses Logo (.aw1-desc) */}
        <div className="relative w-full">
          {/* Amsterdam 3 Crosses Logo (.aw1-img) */}
          <div className="absolute left-0 top-[4vw] w-[12vw] pointer-events-none select-none">
            <img
              src="/assets/ams-logo.svg"
              alt="Amsterdam Crosses"
              draggable={false}
              className="w-full h-auto block select-none"
            />
          </div>

          {/* Editorial Headline Statement (.aw1-head) */}
          <h2
            className="text-[7.3vw] leading-[7.5vw] font-light text-[#1d1d1b] m-0 select-none pt-[2.5vw] pr-[1.2vw]"
            style={{
              textIndent: '13vw',
              textTransform: 'none',
              fontFamily: '"Editorial New", serif',
              letterSpacing: '-0.05em',
            }}
          >
            Amsterdam-based independent Designer &amp; Developer with focus on Art direction, Motion and Branding.
          </h2>
        </div>
      </div>
    </section>
  );
}
