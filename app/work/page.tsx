'use client';

import React, { useState, useEffect } from 'react';
import WorkSidebarNav from '@/components/WorkSidebarNav';
import WorkHorizontalTrack from '@/components/WorkHorizontalTrack';
import WorkMobileView from '@/components/WorkMobileView';
import FullscreenMenuModal from '@/components/FullscreenMenuModal';

export default function WorkPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Tayyab Safdar Portfolio — Work';
  }, []);

  return (
    <main className="relative w-full bg-[#cdc6be] text-[#1d1d1b]">
      {/* Desktop View: Horizontal Work Track with Rotated Left Sidebar */}
      <div className="hidden md:flex relative w-screen h-screen overflow-hidden">
        <WorkSidebarNav onOpenMenu={() => setIsMenuOpen(true)} />
        <WorkHorizontalTrack />
      </div>

      {/* Mobile View: Vertical Editorial Work Page matching reference niccolomiranda.com/work */}
      <div className="block md:hidden w-full min-h-screen">
        <WorkMobileView onOpenMenu={() => setIsMenuOpen(true)} />
      </div>

      {/* Fullscreen Menu Modal with Active Red Line on WORK */}
      <FullscreenMenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeItem="WORK"
      />
    </main>
  );
}
