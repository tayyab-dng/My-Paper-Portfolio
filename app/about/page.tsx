'use client';

import React, { useState, useEffect } from 'react';
import AboutHeaderNav from '@/components/AboutHeaderNav';
import AboutHeroSection from '@/components/AboutHeroSection';
import FullscreenMenuModal from '@/components/FullscreenMenuModal';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'Miranda — About';
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#cdc6be] text-[#1d1d1b] relative overflow-x-hidden">
      {/* Top Navbar */}
      <AboutHeaderNav onOpenMenu={() => setIsMenuOpen(true)} />

      {/* Hero Section */}
      <AboutHeroSection />

      {/* Fullscreen Navigation Menu Modal with Red Marker on ABOUT */}
      <FullscreenMenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeItem="ABOUT"
      />
    </main>
  );
}
