import React from 'react';

export default function WebsiteStampBanner() {
  return (
    <section className="relative w-full border-b border-[#1d1d1b]/35 px-[2vw] py-[2.5vw] select-none bg-paper">
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-[2vw]">
        {/* Massive framed "WEBSITE" black block (authentic 1:1 proportion to Image 1) */}
        <div className="w-full lg:w-[75vw] bg-[#1d1d1b] pt-[2.8vw] pb-[1.8vw] px-[1.8vw] flex items-center shrink-0">
          <h2 className="font-condensed text-[23vw] sm:text-[24vw] lg:text-[30vw] leading-[18vw] text-[#cdc6be] uppercase tracking-[-0.045em] text-left block font-normal select-none pointer-events-none w-full m-0 p-0 whitespace-nowrap">
            Website
          </h2>
        </div>

        {/* Authentic Postage Stamp (21vw Widescreen Proportion, height aligned to black box) */}
        <div className="w-full lg:w-[20vw] flex justify-center lg:justify-end items-center shrink-0">
          <img
            src="/assets/stamp.png"
            alt="Niccolò Miranda Stamp"
            className="w-[50vw] sm:w-[32vw] lg:w-[20vw] max-w-none h-auto object-contain select-none pointer-events-none mix-blend-multiply"
          />
        </div>
      </div>
    </section>
  );
}
