'use client';

import React, { useState, useEffect } from 'react';
import WorkSidebarNav from '@/components/WorkSidebarNav';
import WorkHorizontalTrack from '@/components/WorkHorizontalTrack';
import FullscreenMenuModal from '@/components/FullscreenMenuModal';

export default function WorkPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Miranda — Work';
  }, []);

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#cdc6be] text-[#1d1d1b]">
      {/* Rotated Left Sidebar Navigation */}
      <WorkSidebarNav onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Horizontal Work Track with 16 Interactive Accordion Projects */}
      <WorkHorizontalTrack />

      {/* Fullscreen Menu Modal with Active Red Line on WORK */}
      <FullscreenMenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeItem="WORK"
      />
    </main>
  );
}
