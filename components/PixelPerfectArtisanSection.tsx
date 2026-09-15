import React from 'react';

export default function PixelPerfectArtisanSection() {
  return (
    <section className="w-full bg-paper select-none px-[2vw] pt-[4vw] pb-[5vw] overflow-hidden">
      {/* ============================================================ */}
      {/* ROW 1: THE + PIXEL (Left) & Star Glasses Avatar-2 (Right)    */}
      {/* ============================================================ */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:h-[47vw]">
        {/* Left Column: Avatar Hat Thumbnail + "THE", then "PIXEL" */}
        <div className="w-full lg:w-[49%] flex flex-col justify-between h-full">
          {/* Top Line: Avatar Hat Thumbnail + "THE" */}
          <div className="w-full flex items-start">
            {/* Authentic ratio hat detail thumbnail */}
            <div className="w-[24vw] sm:w-[18vw] lg:w-[14vw] h-[34vw] sm:h-[26vw] lg:h-[22vw] border border-[#1d1d1b] overflow-hidden shrink-0 relative bg-[#5e4435]">
              <img
                src="/assets/avatar-hat.jpeg"
                alt="Niccolò Miranda Hat Detail"
                className="w-full h-full object-cover object-[center_20%] select-none"
              />
            </div>
            {/* Colossal "THE" filling the height of the hat thumbnail */}
            <h2 className="font-condensed text-[30vw] leading-[0.78] text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal m-0 p-0 ml-[1.5vw]">
              The
            </h2>
          </div>

          {/* Bottom Line: "PIXEL" starting flush at the left margin */}
          <div className="w-full mt-[1.2vw]">
            <h2 className="font-condensed text-[30vw] leading-[0.8] text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal m-0 p-0">
              Pixel
            </h2>
          </div>
        </div>

        {/* Right Column: Avatar-2 with Yellow Star Glasses (47vw x 46.5vw) */}
        <div className="w-full lg:w-[49%] flex justify-end items-start mt-6 lg:mt-0">
          <div className="w-full lg:w-[47vw] h-[80vw] sm:h-[60vw] lg:h-[46.5vw] border border-[#1d1d1b] overflow-hidden shrink-0 bg-[#806352]">
            <img
              src="/assets/avatar-2.jpeg"
              alt="Niccolò Miranda Star Glasses"
              className="w-full h-full object-cover object-[50%_28%] select-none"
            />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* ROW 2: Trophy Thumbnail + "PERFECT"                          */}
      {/* ============================================================ */}
      <div className="w-full flex flex-col sm:flex-row items-center mt-[2.5vw]">
        {/* Golden Trophy Cup Thumbnail (27vw x 22vw) */}
        <div className="w-[45vw] sm:w-[35vw] lg:w-[27vw] h-[35vw] sm:h-[28vw] lg:h-[22vw] border border-[#1d1d1b] overflow-hidden shrink-0 bg-[#806454]">
          <img
            src="/assets/trophy.jpeg"
            alt="Awards Trophy"
            className="w-full h-full object-cover object-[center_60%] select-none"
          />
        </div>

        {/* "PERFECT" with signature Domaine Display curved 'c' */}
        <h2 className="font-condensed text-[28vw] sm:text-[30vw] lg:text-[30vw] leading-[20vw] text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal m-0 p-0 ml-[1.5vw] flex-1 whitespace-nowrap">
          Perfe<span className="font-display font-medium tracking-[-0.03em] inline-block">c</span>t
        </h2>
      </div>

      {/* ============================================================ */}
      {/* ROW 3: Massive "ARTISAN" Black Box + Awwwards/Client Accolades*/}
      {/* ============================================================ */}
      <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-[2.5vw] mt-[2.5vw]">
        {/* Left: Framed "ARTISAN" Black Box (snug 25.4vw Canopee typography) */}
        <div className="w-full lg:w-[62.5%] bg-[#1d1d1b] px-[1.5vw] pt-[2vw] pb-[0.8vw] flex items-center shrink-0">
          <h2 className="font-condensed text-[22vw] sm:text-[24vw] lg:text-[24vw] leading-[0.8] text-[#cdc6be] uppercase tracking-[-0.045em] text-left block font-normal select-none pointer-events-none w-full m-0 p-0 whitespace-nowrap">
            Artisan
          </h2>
        </div>

        {/* Right: Editorial Narrative + AWWWARDS Block */}
        <div className="w-full lg:w-[35%] border-t lg:border-t-0 lg:border-l border-[#1d1d1b] pt-6 lg:pt-0 lg:pl-[2.5vw] flex flex-col justify-between py-[0.5vw]">
          <p className="font-editorial text-base sm:text-lg lg:text-[1.85vw] text-[#1d1d1b] font-light leading-[1.3] lg:leading-[2.3vw] tracking-[-0.015em]">
            Over the past 5+ years, I&apos;ve teamed up with high-profile clients and partners globally earning{' '}
            <span className="underline underline-offset-[0.3vw] decoration-[0.5px] decoration-[#1d1d1b]/50 cursor-pointer">
              mentions &amp; awards
            </span>{' '}
            from digital platforms like The FWA,
          </p>

          {/* Colossal AWWWARDS Headline */}
          <div className="my-2 lg:my-[0.6vw]">
            <a
              href="https://www.awwwards.com/niccolo.miranda"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-75 transition-opacity cursor-pointer"
            >
              <h2 className="font-condensed text-[5rem] sm:text-[6.5vw] lg:text-[7.8vw] leading-[0.85] text-[#1d1d1b] uppercase tracking-[-0.04em] font-normal">
                Awwwards
              </h2>
            </a>
          </div>

          <p className="font-editorial text-base sm:text-lg lg:text-[1.85vw] text-[#1d1d1b] font-light leading-[1.3] lg:leading-[2.3vw] tracking-[-0.015em]">
            Communication Arts, Site Inspire, Behance, Codrops and many others.
          </p>
        </div>
      </div>
    </section>
  );
}
