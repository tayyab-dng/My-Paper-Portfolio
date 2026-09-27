'use client';

import React, { useState } from 'react';
import FullscreenMenuModal from '@/components/FullscreenMenuModal';

interface PaperHeaderProps {
  activeItem?: 'INDEX' | 'WORK' | 'ABOUT';
  isFixed?: boolean;
  leftTitle?: string;
}

export default function PaperHeader({ activeItem = 'INDEX', isFixed = false, leftTitle = 'AI Orchestrator' }: PaperHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={`${isFixed ? 'fixed top-0 left-0' : 'relative md:sticky md:top-0'} z-50 w-full bg-paper border-b border-[#1d1d1b]/20 h-[64px] sm:h-[68px] md:h-[10.8vh] md:min-h-[96px] px-4 sm:px-8 lg:px-[2.5vw] flex items-center justify-between select-none`}>
        {/* Left: Location / Title (Hidden on mobile < md) */}
        <div className="hidden md:flex w-1/3 items-center justify-start">
          <span className="font-editorial text-[1.8vh] sm:text-[15px] md:text-[16px] text-[#1d1d1b] font-normal tracking-normal">
            {leftTitle}
          </span>
        </div>

        {/* Dummy spacer on mobile for exact symmetrical centering */}
        <div className="w-[28px] md:hidden shrink-0" aria-hidden="true" />

        {/* The Authentic Header SVG - Prominent & Bold */}
        <div className="flex-1 md:w-1/3 flex items-center justify-center">
          <a href="/" className="cursor-pointer inline-flex items-center justify-center">
            <img
              src="/assets/header.svg"
              alt="The Paper Portfolio"
              className="h-[23px] sm:h-[26px] md:h-9 md:max-h-[3.6vh] w-auto max-w-[70vw] object-contain select-none pointer-events-none"
            />
          </a>
        </div>

        {/* 2-line Hamburger Menu Trigger */}
        <div className="w-[28px] md:w-1/3 flex items-center justify-end shrink-0">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open Menu"
            className="group flex flex-col justify-center items-end gap-[4px] md:gap-[6px] p-0 md:p-2 focus:outline-none cursor-pointer"
          >
            <span className="w-[28px] sm:w-8 h-[1.5px] md:h-[2px] bg-[#1d1d1b] transition-transform duration-200 group-hover:-translate-x-0.5" />
            <span className="w-[28px] sm:w-8 h-[1.5px] md:h-[2px] bg-[#1d1d1b] transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <FullscreenMenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeItem={activeItem}
      />
    </>
  );
}
