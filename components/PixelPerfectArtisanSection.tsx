import React from 'react';

export default function PixelPerfectArtisanSection() {
  return (
    <section className="w-full bg-paper select-none px-4 sm:px-[2vw] pt-4 sm:pt-[4vw] pb-8 sm:pb-[5vw] overflow-hidden">
      {/* ============================================================ */}
      {/* MOBILE LAYOUT (lg:hidden): Matches niccolomiranda.com mobile */}
      {/* 1. Star Avatar -> 2. THE PIXEL -> 3. PERFECT -> 4. Text -> 5. ARTISAN */}
      {/* ============================================================ */}
      <div className="flex flex-col lg:hidden w-full">
        {/* 1. Star glasses portrait (set5.star in reference) */}
        <div className="w-full aspect-[362/356] border border-[#1d1d1b] overflow-hidden bg-[#806352]">
          <img
            src="/assets/avatar-2.jpeg"
            alt="Tayyab Star Glasses"
            className="w-full h-full object-cover object-[50%_28%] select-none"
          />
        </div>

        {/* 2. "THE PIXEL" line */}
        <div className="flex items-baseline justify-between w-full mt-4">
          <h2 className="font-condensed text-[35vw] leading-[0.72] text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal m-0 p-0">
            The
          </h2>
          <h2 className="font-condensed text-[35vw] leading-[0.72] text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal m-0 p-0">
            Pixel
          </h2>
        </div>

        {/* 3. "PERFECT" line */}
        <div className="w-full mt-1.5">
          <h2 className="font-condensed text-[41vw] leading-[0.75] text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal m-0 p-0">
            Perfe<span className="font-display font-medium tracking-[-0.03em] inline-block">c</span>t
          </h2>
        </div>

        {/* 4. Editorial Narrative Text */}
        <div className="w-full mt-4">
          <p className="font-editorial text-[5.8vw] font-light leading-[1.18] tracking-[-0.02em] text-[#1d1d1b]">
            Over the past 3+ years, I teamed up with high-profile clients and partners globally earning{' '}
            <span className="underline underline-offset-[0.5vw] decoration-[0.5px] decoration-[#1d1d1b]/60">
              mentions &amp; awards
            </span>{' '}
            from digital platforms like The FWA, Awwwards, Communication Arts, Site Inspire, Behance, Codrops and many others.
          </p>
        </div>

        {/* 5. "ARTISAN" Black Box Banner */}
        <div className="w-full bg-[#1d1d1b] px-3 pt-3 pb-1 mt-6 flex items-center justify-center">
          <h2 className="font-condensed text-[38vw] leading-[0.82] text-[#cdc6be] uppercase tracking-[-0.045em] text-left block font-normal select-none pointer-events-none w-full m-0 p-0">
            Artisan
          </h2>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP LAYOUT (hidden lg:block): Preserves 100% exact desktop*/}
      {/* ============================================================ */}
      <div className="hidden lg:block w-full">
        {/* ROW 1: THE + PIXEL (Left) & Star Glasses Avatar-2 (Right) */}
        <div className="w-full flex justify-between items-start h-[47vw]">
          {/* Left Column: Avatar Hat Thumbnail + "THE", then "PIXEL" */}
          <div className="w-[49%] flex flex-col justify-between h-full">
            {/* Top Line: Avatar Hat Thumbnail + "THE" */}
            <div className="w-full flex items-start">
              <div className="w-[14vw] h-[22vw] border border-[#1d1d1b] overflow-hidden shrink-0 relative bg-[#5e4435]">
                <img
                  src="/assets/avatar-hat.jpeg"
                  alt="Tayyab Hat Detail"
                  className="w-full h-full object-cover object-[center_20%] select-none"
                />
              </div>
              <h2 className="font-condensed text-[30vw] leading-[0.78] text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal m-0 p-0 ml-[1.5vw]">
                The
              </h2>
            </div>

            {/* Bottom Line: "PIXEL" */}
            <div className="w-full mt-[1.2vw]">
              <h2 className="font-condensed text-[30vw] leading-[0.8] text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal m-0 p-0">
                Pixel
              </h2>
            </div>
          </div>

          {/* Right Column: Avatar-2 with Yellow Star Glasses */}
          <div className="w-[49%] flex justify-end items-start">
            <div className="w-[47vw] h-[46.5vw] border border-[#1d1d1b] overflow-hidden shrink-0 bg-[#806352]">
              <img
                src="/assets/avatar-2.jpeg"
                alt="Tayyab Star Glasses"
                className="w-full h-full object-cover object-[50%_28%] select-none"
              />
            </div>
          </div>
        </div>

        {/* ROW 2: Trophy Thumbnail + "PERFECT" */}
        <div className="w-full flex items-center mt-[2.5vw]">
          <div className="w-[27vw] h-[22vw] border border-[#1d1d1b] overflow-hidden shrink-0 bg-[#806454]">
            <img
              src="/assets/trophy.jpeg"
              alt="Awards Trophy"
              className="w-full h-full object-cover object-[center_60%] select-none"
            />
          </div>

          <h2 className="font-condensed text-[30vw] leading-[20vw] text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal m-0 p-0 ml-[1.5vw] flex-1 whitespace-nowrap">
            Perfe<span className="font-display font-medium tracking-[-0.03em] inline-block">c</span>t
          </h2>
        </div>

        {/* ROW 3: Massive "ARTISAN" Black Box + Awwwards/Client Accolades */}
        <div className="w-full flex items-stretch justify-between gap-[2.5vw] mt-[2.5vw]">
          <div className="w-[62.5%] bg-[#1d1d1b] px-[1.5vw] pt-[2vw] pb-[0.8vw] flex items-center shrink-0">
            <h2 className="font-condensed text-[24vw] leading-[0.8] text-[#cdc6be] uppercase tracking-[-0.045em] text-left block font-normal select-none pointer-events-none w-full m-0 p-0 whitespace-nowrap">
              Artisan
            </h2>
          </div>

          <div className="w-[35%] border-l border-[#1d1d1b] pl-[2.5vw] flex flex-col justify-between py-[0.5vw]">
            <p className="font-editorial text-[1.85vw] text-[#1d1d1b] font-light leading-[2.3vw] tracking-[-0.015em]">
              Over the past 5+ years, I&apos;ve teamed up with high-profile clients and partners globally earning{' '}
              <span className="underline underline-offset-[0.3vw] decoration-[0.5px] decoration-[#1d1d1b]/50 cursor-pointer">
                mentions &amp; awards
              </span>{' '}
              from digital platforms like The FWA,
            </p>

            <div className="my-[0.6vw]">
              <a
                href="https://www.awwwards.com/niccolo.miranda"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-75 transition-opacity cursor-pointer"
              >
                <h2 className="font-condensed text-[7.8vw] leading-[0.85] text-[#1d1d1b] uppercase tracking-[-0.04em] font-normal">
                  Awwwards
                </h2>
              </a>
            </div>

            <p className="font-editorial text-[1.85vw] text-[#1d1d1b] font-light leading-[2.3vw] tracking-[-0.015em]">
              Communication Arts, Site Inspire, Behance, Codrops and many others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
