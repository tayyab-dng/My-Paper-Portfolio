import React from 'react';

export default function HeroNewspaper() {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-[2.2vw] pt-4 sm:pt-5 lg:pt-[1.8vw] pb-4 sm:pb-5 lg:pb-[1.8vw] select-none">
      {/* Black Background Headline Box with paper gaps on left and right */}
      <div className="w-full bg-[#1d1d1b] pt-[3.8vw] pb-[2.5vw] px-[1.5vw] overflow-hidden flex items-center justify-center">
        <h1 className="font-condensed text-[43vw] sm:text-[45vw] text-[#cdc6be] uppercase tracking-[-0.04em] text-center leading-[28vw] w-full block font-normal select-none pointer-events-none whitespace-nowrap">
          Tayyab
        </h1>
      </div>
    </section>
  );
}
