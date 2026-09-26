'use client';

import React from 'react';

interface AboutHeaderNavProps {
  onOpenMenu: () => void;
}

export default function AboutHeaderNav({ onOpenMenu }: AboutHeaderNavProps) {
  return (
    <nav className="fixed top-0 left-0 w-full z-[999] select-none pointer-events-auto">
      <div className="w-full h-[10.8vh] bg-[#cdc6be] flex flex-row justify-between items-center px-[2vw] py-[4vh] transition-transform duration-400">
        {/* Left: Location / Title ("AI Orchestrator") */}
        <div className="flex-1 flex items-center relative z-[3]">
          <div className="font-editorial text-[1.8vh] leading-[2vh] text-[#1d1d1b] font-light tracking-normal select-none">
            AI Orchestrator
          </div>
        </div>

        {/* Center: Tayyab Safdar Portfolio Logo */}
        <a
          href="/"
          aria-label="brand"
          className="w-[19vh] relative z-[3] flex items-center justify-center cursor-pointer select-none"
        >
          <img
            src="/assets/header.svg"
            alt="Tayyab Safdar Portfolio"
            draggable={false}
            className="w-full h-auto block select-none pointer-events-none"
          />
        </a>

        {/* Right: Hamburger Menu Trigger */}
        <div className="flex-1 flex items-center justify-end relative z-[3]">
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Open Menu"
            className="cursor-pointer flex flex-col items-end justify-center bg-transparent border-none p-0 focus:outline-none"
          >
            <div className="flex flex-col items-end justify-center">
              <div className="w-[2rem] h-[2px] bg-[#1d1d1b] relative block" />
              <div className="w-[2rem] h-[2px] bg-[#1d1d1b] relative block mt-[0.19rem]" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
