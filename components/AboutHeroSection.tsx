'use client';

import React from 'react';

export default function AboutHeroSection() {
  return (
    <section className="aw-1 w-full pt-[77px] md:pt-[135px] px-[4vw] md:px-[2vw] pb-[3vw] flex flex-col select-none">
      <div className="aw1-header w-full flex flex-col">
        {/* Solid Black ABOUT ME Box */}
        <div className="h-item h1 w-full block mb-0 relative">
          <h1
            className="head ab bg-[#1d1d1b] text-[#cdc6be] uppercase text-[31vw] md:text-[33vw] leading-[23vw] pt-[3.5vw] pr-[3vw] pb-0 pl-[0.8vw] tracking-[-0.05em] font-normal m-0 block whitespace-nowrap select-none text-left"
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

        {/* Amsterdam Statement with Triple Crosses Logo */}
        <div className="aw1-desc relative w-full mt-4 md:mt-0">
          {/* Amsterdam 3 Crosses Logo */}
          <div className="aw1-img absolute left-0 top-[2vw] md:top-[4vw] w-[16vw] md:w-[12vw] pointer-events-none select-none">
            <img
              src="/assets/ams-logo.svg"
              alt="Amsterdam Crosses"
              draggable={false}
              className="aw1-image w-full h-auto block select-none"
            />
          </div>

          {/* Editorial Headline Statement */}
          <h2
            className="aw1-head text-[10.5vw] md:text-[7.3vw] leading-[10.8vw] md:leading-[7.5vw] font-light text-[#1d1d1b] m-0 select-none pt-[1vw] md:pt-[2.5vw] pr-[1.2vw]"
            style={{
              textIndent: '18vw',
              textTransform: 'none',
              fontFamily: '"Editorial New", serif',
              letterSpacing: '-0.04em',
            }}
          >
            Amsterdam-based independent Designer &amp; Developer with focus on Art direction, Motion and Branding.
          </h2>
        </div>
      </div>
    </section>
  );
}
