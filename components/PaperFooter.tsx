'use client';

import React from 'react';

export default function PaperFooter() {
  return (
    <footer className="w-full bg-[#cdc6be] select-none px-4 sm:px-[2vw] py-4 sm:py-[2.5vw] flex flex-row items-center justify-between gap-2 border-t border-[#1d1d1b]/35">
      {/* Left: Brand, Mini Stamp, and Legal */}
      <div className="flex items-center">
        {/* TAYYAB© in Canopee (desktop/tablet) */}
        <span className="hidden sm:inline font-condensed text-xl sm:text-2xl lg:text-[1.8vw] text-[#1d1d1b] uppercase tracking-[-0.03em] font-normal leading-none mr-2">
          Tayyab©
        </span>

        {/* Vintage Postal Mini Stamp - hidden on mobile < sm matching reference */}
        <div className="hidden sm:block w-5 sm:w-7 lg:w-[1.8vw] overflow-hidden shrink-0">
          <img
            src="/assets/mini-stamp.png"
            alt="Tayyab Postal Stamp"
            className="w-full h-auto object-contain select-none"
          />
        </div>

        {/* Legal Link */}
        <a
          href="/legal"
          className="sm:ml-4 lg:ml-[1vw] font-editorial text-sm sm:text-base lg:text-[1.35vw] text-[#1d1d1b] font-light hover:underline underline-offset-[0.2vw]"
        >
          Legal
        </a>
      </div>

      {/* Right: Social Platform Links in Canopee */}
      <div className="flex items-center font-condensed text-[3.2vw] sm:text-xl lg:text-[1.6vw] text-[#1d1d1b] uppercase tracking-[-0.02em] font-normal whitespace-nowrap">
        <a
          href="https://twitter.com/niccolomiranda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-65 transition-opacity"
        >
          Twitter
        </a>
        <span className="mx-1.5 sm:mx-2 lg:mx-[0.6vw] text-[2.8vw] sm:text-base lg:text-[1.5vw] text-[#1d1d1b]/60 leading-none">
          •
        </span>
        <a
          href="https://instagram.com/niccolomiranda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-65 transition-opacity"
        >
          Insta<span className="font-display font-medium">g</span>ram
        </a>
        <span className="mx-1.5 sm:mx-2 lg:mx-[0.6vw] text-[2.8vw] sm:text-base lg:text-[1.5vw] text-[#1d1d1b]/60 leading-none">
          •
        </span>
        <a
          href="https://dribbble.com/niccolomiranda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-65 transition-opacity"
        >
          Dribbble
        </a>
        <span className="mx-1.5 sm:mx-2 lg:mx-[0.6vw] text-[2.8vw] sm:text-base lg:text-[1.5vw] text-[#1d1d1b]/60 leading-none">
          •
        </span>
        <a
          href="https://www.behance.net/niccolomiranda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-65 transition-opacity"
        >
          Behan<span className="font-display font-medium">c</span>e
        </a>
      </div>
    </footer>
  );
}
