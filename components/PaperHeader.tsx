'use client';

import React, { useState } from 'react';
import FullscreenMenuModal from '@/components/FullscreenMenuModal';

export default function PaperHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-[#cdc6be] border-b border-[#1d1d1b]/30 h-[10.8vh] min-h-[76px] sm:min-h-[86px] md:min-h-[96px] px-6 sm:px-8 lg:px-[2.5vw] flex items-center justify-between select-none">
        {/* Location */}
        <div className="w-1/3 flex items-center justify-start">
          <span className="font-editorial text-[1.8vh] sm:text-[15px] md:text-[16px] text-[#1d1d1b] font-normal tracking-normal">
            Amsterdam, NL.
          </span>
        </div>

        {/* The Authentic Header SVG ("The Paper Portfolio" in gothic calligraphy) */}
        <div className="w-1/3 flex items-center justify-center">
          <img
            src="/assets/header.svg"
            alt="The Paper Portfolio"
            className="h-7 sm:h-8 md:h-9 max-h-[3.6vh] w-auto object-contain select-none pointer-events-none"
          />
        </div>

        {/* 2-line Hamburger Menu Trigger */}
        <div className="w-1/3 flex items-center justify-end">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
            className="group flex flex-col justify-center items-end gap-[6px] p-2 focus:outline-none cursor-pointer"
          >
            <span className="w-7 sm:w-8 h-[2px] bg-[#1d1d1b] transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span className="w-7 sm:w-8 h-[2px] bg-[#1d1d1b] transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <FullscreenMenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
