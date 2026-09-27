'use client';

import React, { useEffect } from 'react';
import PaperHeader from '@/components/PaperHeader';
import AboutHeroSection from '@/components/AboutHeroSection';
import AboutAwardsSection from '@/components/AboutAwardsSection';
import AboutExperienceSection from '@/components/AboutExperienceSection';
import AboutPublicationsSection from '@/components/AboutPublicationsSection';
import AboutClientsSection from '@/components/AboutClientsSection';
import AboutWorkSidebar from '@/components/AboutWorkSidebar';
import LiveMarqueeHeadline from '@/components/LiveMarqueeHeadline';
import PaperFooter from '@/components/PaperFooter';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'Tayyab Safdar Portfolio — About';
  }, []);

  return (
    <main className="min-h-screen w-full bg-[#cdc6be] text-[#1d1d1b] relative overflow-x-hidden selection:bg-[#1d1d1b] selection:text-[#cdc6be]">
      {/* Fixed Paper Header with Active ABOUT indicator and Amsterdam, NL */}
      <PaperHeader activeItem="ABOUT" isFixed={true} leftTitle="Amsterdam, NL" />

      {/* Section 1: Hero with ABOUT ME Black Box & Amsterdam Statement */}
      <AboutHeroSection />

      {/* Section 2: Selected Awards with Trophy, Dropcap & Interactive Accordion */}
      <AboutAwardsSection />

      {/* Section 3: Work Experience with Dashed Border Cards & Skills Badges */}
      <AboutExperienceSection />

      {/* Section 4: Publications with Avatar-2 & 13 Bracketed Editorial Articles */}
      <AboutPublicationsSection />

      {/* Section 5: Clients & Partners with HURRAH! Box & Dual Visual Grid */}
      <AboutClientsSection />

      {/* Section 6: ALL WORK! Sidebar with Om Swami, Animated Doodle & WOW Concept */}
      <AboutWorkSidebar />

      {/* Section 7: Running Infinite Marquee Ribbon */}
      <LiveMarqueeHeadline />

      {/* Section 8: Authentic Newspaper Footer */}
      <PaperFooter />
    </main>
  );
}
