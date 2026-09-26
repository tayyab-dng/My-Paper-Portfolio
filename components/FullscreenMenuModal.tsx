'use client';

import React, { useEffect, useState } from 'react';

interface FullscreenMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem?: 'INDEX' | 'WORK' | 'ABOUT';
  onSelectItem?: (item: 'INDEX' | 'WORK' | 'ABOUT') => void;
}

export default function FullscreenMenuModal({
  isOpen,
  onClose,
  activeItem = 'INDEX',
  onSelectItem,
}: FullscreenMenuModalProps) {
  const [currentActive, setCurrentActive] = useState<'INDEX' | 'WORK' | 'ABOUT'>(activeItem);

  // Sync external activeItem if provided
  useEffect(() => {
    setCurrentActive(activeItem);
  }, [activeItem]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNavClick = (item: 'INDEX' | 'WORK' | 'ABOUT') => {
    setCurrentActive(item);
    if (onSelectItem) {
      onSelectItem(item);
    } else {
      if (item === 'INDEX') {
        if (typeof window !== 'undefined' && window.location.pathname !== '/') {
          window.location.href = '/';
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (item === 'WORK') {
        if (typeof window !== 'undefined' && window.location.pathname !== '/work') {
          window.location.href = '/work';
        }
      } else if (item === 'ABOUT') {
        if (typeof window !== 'undefined' && window.location.pathname !== '/about') {
          window.location.href = '/about';
        }
      }
    }
    setTimeout(() => {
      onClose();
    }, 280);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[9999] w-screen h-screen bg-[#1d1d1b] text-[#cdc6be] flex flex-col justify-between items-center select-none overflow-hidden"
    >
      {/* Subtle authentic paper grain texture overlay on dark background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-[url('/assets/paper-texture.jpg')] bg-repeat"
        aria-hidden="true"
      />

      {/* Top Header Bar */}
      <div className="relative z-10 w-full h-[10.8vh] min-h-[76px] sm:min-h-[86px] md:min-h-[96px] px-6 sm:px-8 lg:px-[2.5vw] flex items-center justify-between">
        {/* Left: Clean and empty matching reference */}
        <div className="w-1/3" />

        {/* Center: Tayyab Safdar Portfolio in gothic typography */}
        <div className="w-1/3 flex items-center justify-center">
          <img
            src="/assets/header.svg"
            alt="Tayyab Safdar Portfolio"
            className="h-7 sm:h-8 md:h-9 max-h-[3.6vh] w-auto object-contain select-none pointer-events-none filter invert brightness-[0.88]"
          />
        </div>

        {/* Right: Sharp 'X' Close Button */}
        <div className="w-1/3 flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Menu"
            className="p-2 text-[#cdc6be] hover:opacity-75 transition-opacity focus:outline-none cursor-pointer flex items-center justify-center"
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Center Nav Links Stack: Authentic Webflow Architecture */}
      <nav className="relative z-10 flex flex-col items-center justify-center my-auto w-full text-center">
        {/* INDEX Link */}
        <div
          className="relative inline-flex items-center justify-center mx-auto cursor-pointer group"
          onClick={() => handleNavClick('INDEX')}
        >
          <h1 className="font-condensed uppercase text-[27vh] sm:text-[29vh] md:text-[30vh] leading-[18vh] sm:leading-[19.5vh] md:leading-[20vh] tracking-[-0.05em] pt-[3vh] pr-[1.5vh] text-[#cdc6be] group-hover:text-[#beb5ab] group-hover:tracking-[-0.03em] transition-all duration-300 select-none">
            Index
          </h1>
          {currentActive === 'INDEX' && (
            <div
              className="absolute left-[-3%] right-[-3%] h-[1.5vh] min-h-[14px] bg-[#c03f13] top-1/2 -translate-y-1/2 pointer-events-none z-20"
              aria-hidden="true"
            />
          )}
        </div>

        {/* WORK Link: Canopee + Domaine Display O */}
        <div
          className="relative inline-flex items-center justify-center mx-auto cursor-pointer group"
          onClick={() => handleNavClick('WORK')}
        >
          <h1 className="font-condensed uppercase text-[27vh] sm:text-[29vh] md:text-[30vh] leading-[18vh] sm:leading-[19.5vh] md:leading-[20vh] tracking-[-0.05em] pt-[4vh] pr-[1.5vh] text-[#cdc6be] group-hover:text-[#beb5ab] group-hover:tracking-[-0.03em] transition-all duration-300 select-none">
            W<span className="font-display font-medium tracking-[-0.06em]">o</span>rk
          </h1>
          {currentActive === 'WORK' && (
            <div
              className="absolute left-[-3%] right-[-3%] h-[1.5vh] min-h-[14px] bg-[#c03f13] top-1/2 -translate-y-1/2 pointer-events-none z-20"
              aria-hidden="true"
            />
          )}
        </div>

        {/* ABOUT Link: Canopee + Domaine Display O */}
        <div
          className="relative inline-flex items-center justify-center mx-auto cursor-pointer group"
          onClick={() => handleNavClick('ABOUT')}
        >
          <h1 className="font-condensed uppercase text-[27vh] sm:text-[29vh] md:text-[30vh] leading-[18vh] sm:leading-[19.5vh] md:leading-[20vh] tracking-[-0.05em] pt-[3vh] pr-[1.5vh] text-[#cdc6be] group-hover:text-[#beb5ab] group-hover:tracking-[-0.03em] transition-all duration-300 select-none">
            Ab<span className="font-display font-medium tracking-[-0.06em]">o</span>ut
          </h1>
          {currentActive === 'ABOUT' && (
            <div
              className="absolute left-[-3%] right-[-3%] h-[1.5vh] min-h-[14px] bg-[#c03f13] top-1/2 -translate-y-1/2 pointer-events-none z-20"
              aria-hidden="true"
            />
          )}
        </div>
      </nav>

      {/* Bottom Footer Social Links matching Niccolò Miranda Webflow spec */}
      <footer className="relative z-10 w-full pb-[3.5vh] pt-4 flex items-center justify-center gap-2 sm:gap-3 text-[#cdc6be] font-condensed uppercase text-[15px] md:text-[1.3vw] leading-[1.5vw] tracking-[-0.01em]">
        <a
          href="https://twitter.com/niccolomiranda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity"
        >
          twitter
        </a>
        <span className="text-[#cdc6be] px-0.5">·</span>
        <a
          href="https://instagram.com/niccolomiranda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity"
        >
          insta<span className="font-display font-medium tracking-[-0.02em]">g</span>ram
        </a>
        <span className="text-[#cdc6be] px-0.5">·</span>
        <a
          href="https://dribbble.com/niccolomiranda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity"
        >
          dribbble
        </a>
        <span className="text-[#cdc6be] px-0.5">·</span>
        <a
          href="https://www.behance.net/niccolomiranda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity"
        >
          behan<span className="font-display font-medium tracking-[-0.02em]">c</span>e
        </a>
      </footer>
    </div>
  );
}
