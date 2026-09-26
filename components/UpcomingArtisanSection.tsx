import React from 'react';

export default function UpcomingArtisanSection() {
  return (
    <section className="w-full border-b border-[#1d1d1b]/35 bg-paper select-none px-4 sm:px-[2vw] py-8 lg:py-[3vw]">
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-10 lg:gap-0">
        {/* ============================================================ */}
        {/* Left Column (65% Width on desktop, 100% on mobile)          */}
        {/* ============================================================ */}
        <div className="w-full lg:w-[65%] border-b-0 lg:border-r border-[#1d1d1b]/35 flex flex-col justify-between">
          {/* Top Row (.h-info-w): Split into Left Info & Right Artwork Card on desktop; stacked on mobile */}
          <div className="w-full flex flex-col sm:flex-row items-stretch justify-between gap-6 sm:gap-0 pb-6 lg:pb-[3vw] pr-0 lg:pr-[3vw]">
            {/* Sub-Column 1: UPCOMING NEXT Headlines & Tip */}
            <div className="w-full sm:w-[48%] pr-0 sm:pr-[2.5vw] flex flex-col justify-start">
              <div>
                <h3 className="font-condensed text-[29vw] sm:text-[4.5vw] text-[#1d1d1b] uppercase tracking-[-0.05em] leading-[0.78] sm:leading-[0.88] font-normal break-words m-0">
                  Up<span className="font-display font-medium text-[27vw] sm:text-[4vw] inline-block">co</span>min<br className="block sm:hidden" /><span className="font-display font-medium text-[27vw] sm:text-[4vw] inline-block">g</span> Next
                </h3>
                <p className="font-editorial text-[6.8vw] sm:text-[2.2vw] text-[#1d1d1b] font-light leading-[1.12] sm:leading-[1.22] tracking-[-0.03em] mt-3">
                  Fresh entry — A selected<br /> work from the latest <br />digital releases.
                </p>
              </div>

              <div className="font-editorial text-[3.8vw] sm:text-[1.2vw] text-[#1d1d1b] tracking-[-0.01em] mt-4 sm:mt-5 mb-5 sm:mb-0">
                <span className="font-condensed font-normal text-[4.2vw] sm:text-[1.35vw] mr-1.5 uppercase">TIP!</span>
                <span className="font-light">Click on the image to explore</span>
              </div>
            </div>

            {/* Sub-Column 2: UNEXPECTED TIME Widescreen Card */}
            <div className="w-full sm:w-[52%] border-t-0 sm:border-l border-[#1d1d1b]/35 pt-0 sm:pt-0 sm:pl-[2.5vw] flex flex-col justify-start mt-4 sm:mt-0">
              {/* Authentic Widescreen 28vw : 11vw Landscape Artwork */}
              <div className="w-full aspect-[28/11] overflow-hidden border border-[#1d1d1b] bg-[#16273b]">
                <img
                  src="/assets/unexpected-time.webp"
                  alt="Unexpected Time"
                  className="w-full h-full object-cover object-[center_25%] select-none"
                />
              </div>

              <div className="flex flex-col gap-1.5 mt-3">
                {/* SVG Title */}
                <div className="h-6 sm:h-[1.5vw] mt-1">
                  <img
                    src="/assets/unexpected-time-title.svg"
                    alt="Unexpected Time"
                    className="h-full w-auto object-contain"
                  />
                </div>

                {/* Description */}
                <p className="font-editorial text-[4.5vw] sm:text-[1.2vw] text-[#1d1d1b] font-light leading-[1.32] sm:leading-[1.35] tracking-[-0.01em] mt-1">
                  Unexpected Time is a classic-furitistic gamification<br className="block sm:hidden" /> web experience showcasing the lost history &amp;<br className="block sm:hidden" /> culture in a world dominated by the virtual reality.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row (.h-inner.set3): Flush Full-Width Avatar-3 Banner (hidden on mobile in reference) */}
          <div className="hidden lg:block w-full overflow-hidden border-t border-b lg:border-t lg:border-b-0 border-[#1d1d1b] bg-[#786154] mt-2 mr-0">
            <img
              src="/assets/avatar-3.jpeg"
              alt="Niccolò Miranda Artisan Concept"
              className="w-full h-auto object-cover select-none block"
            />
          </div>
        </div>

        {/* ============================================================ */}
        {/* Right Column (35% Width): THINK, CREATE DELIVER + Oval Button*/}
        {/* On mobile: hidden (matches reference .h-col.right{display:none})*/}
        {/* ============================================================ */}
        <div className="hidden lg:flex w-[35%] pl-[3vw] flex-col justify-between py-0">
          {/* Ruled Headlines with horizontal baseline lines matching Image 2 */}
          <div className="relative mb-6">
            {/* Ruled baseline guide line across "Think, Create" */}
            <div className="absolute inset-x-0 top-[4.2vw] h-[1px] bg-[#1d1d1b]/25 pointer-events-none" />
            {/* Ruled baseline guide line across "Deliver" */}
            <div className="absolute inset-x-0 bottom-[1.2vw] h-[1px] bg-[#1d1d1b]/25 pointer-events-none" />

            <h3 className="font-condensed text-[5vw] lg:text-[7.6vw] text-[#1d1d1b] uppercase tracking-[-0.04em] leading-[0.88] font-normal">
              Think, <span className="font-display font-medium">C</span>reate
            </h3>
            <h2 className="font-condensed text-[12vw] lg:text-[14.7vw] text-[#1d1d1b] uppercase tracking-[-0.05em] leading-[0.78] font-normal mt-[0.5vw]">
              Deliver
            </h2>
          </div>

          {/* Authentic Drop-Cap Manifesto */}
          <div className="space-y-4 my-auto">
            <p className="has-dropcap">
              A strong project is created by deep collaboration. I design, develop, and deliver websites that drive results and win awards.
            </p>

            <p className="font-editorial text-sm sm:text-[1.5vw] text-[#1d1d1b] font-light leading-relaxed pt-2 tracking-[-0.01em]">
              Like an artisan, I like to start from raw matter and give life to an iconic product that makes your brand stand out, starting from a Visual Strategy that guide the client&apos;s vision to reality.
            </p>
          </div>

          {/* Authentic Massive Oval "ALL WORK" Button (matching Image 3) */}
          <div className="mt-8 pt-4">
            <a
              href="#work"
              className="w-full h-[12vw] min-h-[70px] max-h-[140px] flex items-center justify-center border border-[#1d1d1b]/40 rounded-[50%] bg-transparent hover:bg-[#1d1d1b] hover:text-[#cdc6be] text-[#1d1d1b] transition-all group cursor-pointer"
            >
              <span className="font-condensed text-[5vw] sm:text-[4.5vw] lg:text-[5.5vw] leading-none uppercase tracking-[-0.04em] font-normal transition-colors">
                All W<span className="font-display font-medium">o</span>rk
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
