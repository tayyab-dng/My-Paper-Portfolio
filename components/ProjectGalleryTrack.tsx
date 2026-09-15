import React from 'react';

export default function ProjectGalleryTrack() {
  return (
    <section className="w-full border-b border-[#1d1d1b]/30 bg-transparent relative">
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px]">
        {/* ============================================================ */}
        {/* Left Card: AvroKO                                            */}
        {/* ============================================================ */}
        <div className="relative md:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b md:border-b-0">
          {/* Authentic AvroKO Artwork Image (28:11 Widescreen) */}
          <div className="w-full aspect-[28/11] overflow-hidden border border-[#1d1d1b] mb-4 bg-[#120e0b]">
            <img
              src="/assets/avro-ko.jpeg"
              alt="AvroKO"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            {/* Title Row: SVG Title + [NEW] Badge */}
            <div className="flex items-center gap-2 h-6 sm:h-7">
              <img
                src="/assets/avro-ko-title.svg"
                alt="AvroKO"
                className="h-full w-auto object-contain select-none pointer-events-none"
              />
              <span className="bg-[#c03f13] text-[#cdc6be] font-condensed text-[12px] sm:text-[13px] font-normal px-1.5 py-[1px] rounded-[2px] tracking-wide uppercase leading-tight">
                New
              </span>
            </div>

            {/* Description */}
            <p className="font-editorial text-[14px] sm:text-[15px] lg:text-[16px] text-[#1d1d1b] font-light leading-[1.4] tracking-[-0.01em]">
              AvroKO is an award-winning global design firm, established itself as a global leader in interior architecture for hospitality, restaurant and bars.
            </p>
          </div>

          {/* Small partial divider line (not full height, has space top and bottom) */}
          <div className="hidden md:block absolute right-0 top-12 bottom-12 w-[1px] bg-[#1d1d1b]/30 pointer-events-none" />
        </div>

        {/* ============================================================ */}
        {/* Center Column: ALL WORK! Hero Index                          */}
        {/* ============================================================ */}
        <div className="relative md:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between items-center text-center border-b md:border-b-0">
          <div className="my-auto flex flex-col items-center group cursor-pointer">
            {/* Headline in pure authentic Domaine Display */}
            <div className="relative inline-block mb-3">
              <h2 className="font-display text-[3.6rem] sm:text-[4.4rem] lg:text-[5.2rem] text-[#1d1d1b] uppercase tracking-[-0.02em] leading-[0.88] font-normal transition-transform duration-300 group-hover:scale-[1.01]">
                ALL WORK!
              </h2>
              {/* Subtle hover doodle outline matching niccolomiranda.com */}
              <svg
                viewBox="0 0 500 146"
                className="absolute -inset-x-5 -inset-y-2.5 w-[calc(100%+2.5rem)] h-[calc(100%+1.25rem)] pointer-events-none transition-all duration-700 ease-out opacity-0 group-hover:opacity-100"
              >
                <ellipse
                  cx="250"
                  cy="72.9"
                  rx="242.4"
                  ry="68.5"
                  fill="none"
                  stroke="#96b59f"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>

            {/* 3-line Editorial Description */}
            <div className="font-editorial text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] text-[#1d1d1b] leading-[1.12] tracking-[-0.03em] font-light mt-3 mb-6 max-w-[340px] text-center">
              <p>A Featured selection</p>
              <p>the latest work —</p>
              <p>of the last years.</p>
            </div>
          </div>

          {/* Caption with Sentence-Case Typography */}
          <div className="flex items-baseline justify-center gap-1.5 text-[#1d1d1b]">
            <span className="font-condensed font-normal text-sm sm:text-base uppercase tracking-tight">TIP!</span>
            <span className="font-editorial font-light text-xs sm:text-sm tracking-[-0.01em]">Drag sideways to navigate</span>
          </div>

          {/* Small partial divider line (not full height, has space top and bottom) */}
          <div className="hidden md:block absolute right-0 top-12 bottom-12 w-[1px] bg-[#1d1d1b]/30 pointer-events-none" />
        </div>

        {/* ============================================================ */}
        {/* Right Card: WOW CONCEPT                                      */}
        {/* ============================================================ */}
        <div className="relative md:col-span-4 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          {/* Authentic WOW Concept Image (28:11 Widescreen) */}
          <div className="w-full aspect-[28/11] overflow-hidden border border-[#1d1d1b] mb-4 bg-[#578fc9]">
            <img
              src="/assets/wow-concept.webp"
              alt="WOW Concept"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            {/* Title Row: SVG Title + [NEW] Badge */}
            <div className="flex items-center gap-2 h-6 sm:h-7">
              <img
                src="/assets/wow-concept-title.svg"
                alt="WOW Concept"
                className="h-full w-auto object-contain select-none pointer-events-none"
              />
              <span className="bg-[#c03f13] text-[#cdc6be] font-condensed text-[12px] sm:text-[13px] font-normal px-1.5 py-[1px] rounded-[2px] tracking-wide uppercase leading-tight">
                New
              </span>
            </div>

            {/* Description */}
            <p className="font-editorial text-[14px] sm:text-[15px] lg:text-[16px] text-[#1d1d1b] font-light leading-[1.4] tracking-[-0.01em]">
              WOW Concept is a the world’s first concept store based in Madrid revolutionizing retail with a dynamic &amp; interactive shopping experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
