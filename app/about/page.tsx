'use client';

import React, { useEffect } from 'react';
import PaperHeader from '@/components/PaperHeader';
import AboutHeroSection from '@/components/AboutHeroSection';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'Tayyab Safdar Portfolio — About';
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#cdc6be] text-[#1d1d1b] relative overflow-x-hidden">
      {/* Fixed/Sticky Paper Header - identical to the Home page */}
      <PaperHeader activeItem="ABOUT" />

      {/* Hero Section */}
      <AboutHeroSection />
    </main>
  );
}
