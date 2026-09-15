'use client';

import React from 'react';

export default function AboutHeroSection() {
  return (
    <section className="w-full pt-[14.5vh] px-[2vw] pb-[6vw] flex flex-col select-none">
      <div className="w-full flex flex-col">
        {/* Solid Black ABOUT ME Box - single line with exact Webflow typography */}
        <div className="w-full block mb-0 overflow-hidden">
          <h1 className="bg-[#1d1d1b] text-[#cdc6be] font-condensed uppercase text-[33vw] leading-[23vw] pt-[3.5vw] pr-[3vw] pb-0 pl-[0.8vw] tracking-[-0.04em] font-normal m-0 block whitespace-nowrap select-none">
            A<span className="tracking-[-0.03em]">b</span>
            <span className="font-display font-medium tracking-[-0.06em]">o</span>
            ut Me
          </h1>
        </div>

        {/* Amsterdam Statement with Triple Crosses Logo (.aw1-desc) */}
        <div className="relative w-full mt-[3.5vw]">
          {/* Amsterdam 3 Crosses Logo (.aw1-img) */}
          <div className="absolute left-0 top-[4vw] w-[12vw] pointer-events-none select-none">
            <img
              src="/assets/ams-logo.svg"
              alt="Amsterdam Crosses"
              draggable={false}
              className="w-full h-auto object-contain select-none"
            />
          </div>

          {/* Editorial Headline Statement (.aw1-head) */}
          <h2
            className="font-editorial text-[7.3vw] leading-[7.5vw] font-light text-[#1d1d1b] m-0 select-none tracking-[-0.015em]"
            style={{
              textIndent: '13vw',
            }}
          >
            Amsterdam-based independent Designer &amp; Developer with focus on Art direction, Motion and Branding.
          </h2>
        </div>
      </div>
    </section>
  );
}
