'use client';

import React from 'react';

interface AboutHeaderNavProps {
  onOpenMenu: () => void;
}

export default function AboutHeaderNav({ onOpenMenu }: AboutHeaderNavProps) {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-[10.8vh] z-40 bg-[#cdc6be] border-b border-[#1d1d1b]/25 flex items-center justify-between px-[2vw] select-none">
      {/* Left: Location ("Amsterdam, NL.") */}
      <div className="flex items-center">
        <span className="font-editorial text-[1.8vh] leading-[2vh] text-[#1d1d1b] font-normal tracking-normal select-none">
          Amsterdam, NL.
        </span>
      </div>

      {/* Center: The Paper Portfolio Gothic SVG Logo */}
      <div className="flex items-center justify-center">
        <a
          href="/"
          className="cursor-pointer hover:opacity-75 transition-opacity inline-flex items-center justify-center"
        >
          <img
            src="/assets/header.svg"
            alt="The Paper Portfolio"
            draggable={false}
            className="w-auto h-[2.5vh] max-h-[26px] object-contain select-none pointer-events-none"
          />
        </a>
      </div>

      {/* Right: Hamburger Menu Trigger */}
      <div className="flex items-center justify-end">
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open Menu"
          className="group flex flex-col justify-center items-center gap-[6px] p-2 focus:outline-none cursor-pointer"
        >
          <span className="w-[3.5vh] min-w-[24px] h-[2px] bg-[#1d1d1b] transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span className="w-[3.5vh] min-w-[24px] h-[2px] bg-[#1d1d1b] transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </header>
  );
}
