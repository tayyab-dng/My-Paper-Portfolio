'use client';

import React from 'react';

interface WorkSidebarNavProps {
  onOpenMenu: () => void;
}

export default function WorkSidebarNav({ onOpenMenu }: WorkSidebarNavProps) {
  return (
    <aside
      className="hidden md:flex fixed left-0 top-0 bottom-0 w-[14vh] h-full z-40 bg-[#cdc6be] border-r border-[#1d1d1b]/40 flex-col-reverse justify-between items-center py-[6vh] select-none"
      style={{
        boxSizing: 'border-box',
      }}
    >
      {/* Bottom: Location / Title ("AI Orchestrator") - rotated 270deg reading bottom-to-top */}
      <div className="flex items-center justify-center">
        <span
          className="font-editorial text-[1.8vh] leading-[2vh] text-[#1d1d1b] font-normal tracking-normal whitespace-nowrap select-none opacity-85"
          style={{
            transform: 'rotate(270deg)',
          }}
        >
          AI Orchestrator
        </span>
      </div>

      {/* Center: Rotated SVG Header Logo ("Tayyab Safdar Portfolio") */}
      <div className="flex items-center justify-center my-auto">
        <a
          href="/"
          className="cursor-pointer hover:opacity-75 transition-opacity inline-flex items-center justify-center"
          style={{
            transform: 'rotate(270deg)',
          }}
        >
          <img
            src="/assets/header.svg"
            alt="Tayyab Safdar Portfolio"
            className="w-[18vh] h-auto object-contain select-none pointer-events-none"
          />
        </a>
      </div>

      {/* Top: 2-line Hamburger Menu Trigger */}
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open Menu"
          className="group flex flex-col justify-center items-center gap-[6px] p-2 focus:outline-none cursor-pointer"
        >
          <span className="w-[3.5vh] h-[2px] bg-[#1d1d1b] transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span className="w-[3.5vh] h-[2px] bg-[#1d1d1b] transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </aside>
  );
}
