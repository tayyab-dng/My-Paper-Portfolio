import React from 'react';

export default function InteractiveArtistSection() {
  return (
    <section className="relative w-full border-b border-[#1d1d1b]/30 px-4 sm:px-6 lg:px-[2vw] pt-1 pb-8 lg:py-12 select-none">
      {/* 3-Column Newspaper Grid (Mobile: 1fr credentials first, then bio; Desktop: 1fr Left : 2fr Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0">
        {/* ============================================================ */}
        {/* Left Column (1fr): INTERACTIVE ARTIST! + Star Avatar + Dropcap*/}
        {/* On mobile: order-2 (appears below face portrait + credentials)*/}
        {/* ============================================================ */}
        <div className="order-2 lg:order-1 lg:col-span-1 pr-0 lg:pr-[3vw] pt-[5vw] lg:pt-0 lg:border-r border-[#1d1d1b]/35 flex flex-col justify-between">
          <div>
            {/* Headline Stack with Ruled Baseline Guide Lines */}
            <div className="relative mb-[5vw] lg:mb-4">
              {/* Ruled lines running through/behind title */}
              <div className="absolute inset-0 flex flex-col justify-around py-3 pointer-events-none opacity-25">
                <div className="w-full h-[1px] bg-[#1d1d1b]" />
                <div className="w-full h-[1px] bg-[#1d1d1b]" />
              </div>

              <div className="relative z-10">
                <h2 className="font-condensed text-[26.5vw] lg:text-[8.2vw] leading-[20vw] lg:leading-[6.2vw] text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal m-0 pt-[1vw] lg:pt-0">
                  Intera<span className="font-['Domaine_Display'] font-medium text-[23.5vw] lg:text-[7.4vw] leading-none inline-block tracking-[-0.02em]">c</span>tive
                </h2>
                <h2 className="font-condensed text-[45vw] lg:text-[14vw] leading-[33vw] lg:leading-[10vw] text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal m-0 pt-[1vw] lg:pt-0">
                  Artist!
                </h2>
              </div>
            </div>

            {/* Authentic Avatar Star Artwork Image */}
            <div className="w-full h-[60vw] sm:h-[45vw] lg:h-[35vw] border border-[#1d1d1b] mt-[5vw] lg:mt-[2vw] mb-[8vw] lg:mb-6 overflow-hidden flex items-center justify-center bg-[#8e7667]">
              <img
                src="/assets/avatar-star.jpeg"
                alt="Niccolò Miranda"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
            </div>
          </div>

          {/* Authentic Drop Cap Editorial Bio */}
          <div className="pt-[2vw] pb-4">
            <h5 className="has-dropcap">
              As a multidisciplinary freelancer, I&apos;m passionate about creating iconic digital experiences through motion, typography, and creative coding for companies and agencies around the world.
            </h5>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Right Column (2fr): Giant Portrait Face + 4x Credentials     */}
        {/* On mobile: order-1 (appears first right below Tayyab banner) */}
        {/* ============================================================ */}
        <div className="order-1 lg:order-2 lg:col-span-2 pl-0 lg:pl-[3vw] flex flex-col justify-between pb-0 lg:pb-0">
          {/* Top: The Authentic Face Portrait Image (avatar-1.jpeg) */}
          <div className="w-full h-[60vw] md:h-[40vw] border border-[#1d1d1b] overflow-hidden flex items-center justify-center bg-[#a68c7c] relative">
            <img
              src="/assets/avatar-1.jpeg"
              alt="Niccolò Miranda Portrait"
              className="w-full h-full object-cover object-[center_37%] select-none pointer-events-none"
            />
          </div>

          {/* Bottom: 4-Tier Huge Credentials Stack with Ruled Lines */}
          <div className="relative mt-2 sm:mt-4 lg:mt-[2.5vw] w-full flex flex-col">
            {/* Line 1 */}
            <div className="relative w-full border-b border-[#1d1d1b]/30 pb-0.5 pt-0.5">
              <h2 className="font-condensed text-[12vw] sm:text-[12vw] lg:text-[8.5vw] leading-[9.8vw] sm:leading-[10vw] lg:leading-[6.6vw] text-[#1d1d1b] uppercase tracking-[-0.04em] font-normal whitespace-nowrap m-0">
                di<span className="font-['Domaine_Display'] font-medium text-[10.8vw] sm:text-[10.8vw] lg:text-[7.6vw] leading-none inline-block tracking-[-0.02em]">g</span>ital art dire<span className="font-['Domaine_Display'] font-medium text-[10.8vw] sm:text-[10.8vw] lg:text-[7.6vw] leading-none inline-block tracking-[-0.02em]">c</span>t<span className="font-['Domaine_Display'] font-medium text-[10.8vw] sm:text-[10.8vw] lg:text-[7.6vw] leading-none inline-block tracking-[-0.02em]">o</span>r
              </h2>
            </div>

            {/* Line 2 */}
            <div className="relative w-full border-b border-[#1d1d1b]/30 pb-0.5 pt-0.5 mt-0 lg:mt-[0.5vw]">
              <h2 className="font-condensed text-[12vw] sm:text-[12vw] lg:text-[8.5vw] leading-[9.8vw] sm:leading-[10vw] lg:leading-[6.6vw] text-[#1d1d1b] uppercase tracking-[-0.04em] font-normal whitespace-nowrap m-0">
                Intera<span className="font-['Domaine_Display'] font-medium text-[10.8vw] sm:text-[10.8vw] lg:text-[7.6vw] leading-none inline-block tracking-[-0.02em]">c</span>tive Desi<span className="font-['Domaine_Display'] font-medium text-[10.8vw] sm:text-[10.8vw] lg:text-[7.6vw] leading-none inline-block tracking-[-0.02em]">g</span>ner
              </h2>
            </div>

            {/* Line 3 */}
            <div className="relative w-full border-b border-[#1d1d1b]/30 pb-0.5 pt-0.5 mt-0 lg:mt-[0.5vw]">
              <h2 className="font-condensed text-[12vw] sm:text-[12vw] lg:text-[8.5vw] leading-[9.8vw] sm:leading-[10vw] lg:leading-[6.6vw] text-[#1d1d1b] uppercase tracking-[-0.04em] font-normal whitespace-nowrap m-0">
                <span className="font-['Domaine_Display'] font-medium text-[10.8vw] sm:text-[10.8vw] lg:text-[7.6vw] leading-none inline-block tracking-[-0.02em]">c</span>reative devel<span className="font-['Domaine_Display'] font-medium text-[10.8vw] sm:text-[10.8vw] lg:text-[7.6vw] leading-none inline-block tracking-[-0.02em]">o</span>per
              </h2>
            </div>

            {/* Line 4 */}
            <div className="relative w-full border-b border-[#1d1d1b]/30 pb-0.5 pt-0.5 mt-0 lg:mt-[0.5vw]">
              <h2 className="font-condensed text-[12vw] sm:text-[12vw] lg:text-[8.5vw] leading-[9.8vw] sm:leading-[10vw] lg:leading-[6.6vw] text-[#1d1d1b] uppercase tracking-[-0.04em] font-normal whitespace-nowrap m-0">
                based in <span className="underline underline-offset-[0.3vw] decoration-[1.5px] decoration-[#1d1d1b]">Amsterdam, NL</span>.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
