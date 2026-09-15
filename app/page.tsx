import React from 'react';
import PaperHeader from '@/components/PaperHeader';
import ProjectGalleryTrack from '@/components/ProjectGalleryTrack';
import HeroNewspaper from '@/components/HeroNewspaper';
import InteractiveArtistSection from '@/components/InteractiveArtistSection';
import WebsiteStampBanner from '@/components/WebsiteStampBanner';
import UpcomingArtisanSection from '@/components/UpcomingArtisanSection';
import AwardsRow from '@/components/AwardsRow';
import PixelPerfectArtisanSection from '@/components/PixelPerfectArtisanSection';
import TestimonialStackedCards from '@/components/TestimonialStackedCards';
import AllWorkShowcase from '@/components/AllWorkShowcase';
import LiveMarqueeHeadline from '@/components/LiveMarqueeHeadline';
import PaperFooter from '@/components/PaperFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-paper flex flex-col selection:bg-ink selection:text-paper">
      {/* Fixed Paper Masthead Navigation */}
      <PaperHeader />

      {/* Main Newspaper Editorial Body */}
      <div className="w-full flex flex-col">
        {/* Section 1: Top Project Gallery Strip (AvroKO, All Work!, WOW Concept) */}
        <ProjectGalleryTrack />

        {/* Section 2: Colossal "MIRANDA" Newspaper Banner */}
        <HeroNewspaper />

        {/* Section 3: Interactive Artist 2-Column Split (Star Avatar & Eye Portrait) */}
        <InteractiveArtistSection />

        {/* Section 4: Massive Framed "WEBSITE" Block + Vintage Perforated Stamp */}
        <WebsiteStampBanner />

        {/* Section 5: Upcoming Next + Unexpected Time + Artisan Philosophy */}
        <UpcomingArtisanSection />

        {/* Section 6: Awards Metric Strip (SOTD, SOTM, FWA, Mentions) */}
        <AwardsRow />

        {/* Section 7: The Pixel Perfect Artisan Section */}
        <PixelPerfectArtisanSection />

        {/* Section 8: Testimonials Stacked Cards Strip */}
        <TestimonialStackedCards />

        {/* Section 9: All Work 3-Column Showcase (WOW Concept, All Work! Oval, The Roger Hub) */}
        <AllWorkShowcase />

        {/* Section 10: Infinite Live Marquee Running Headline */}
        <LiveMarqueeHeadline />
      </div>

      {/* Authentic Editorial Newspaper Footer */}
      <PaperFooter />
    </main>
  );
}
