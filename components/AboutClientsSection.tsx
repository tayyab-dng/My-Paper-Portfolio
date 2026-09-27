'use client';

import React from 'react';

export default function AboutClientsSection() {
  return (
    <section className="aw-3 w-full px-[4vw] md:px-[2vw] py-[6vw] md:py-[5vw] border-t border-[#1d1d1b]/30 select-none">
      {/* Huge HURRAH! Box */}
      <div className="aw-pattern w-full block mb-[4vw] md:mb-[3vw]">
        <h2
          className="head award bg-[#1d1d1b] text-[#cdc6be] uppercase text-[30vw] md:text-[25vw] leading-[22vw] md:leading-[18vw] pt-[2.5vw] pr-[3vw] pb-0 pl-[1vw] tracking-[-0.05em] font-normal m-0 block whitespace-nowrap select-none text-left"
          style={{ fontFamily: 'Canopee, sans-serif' }}
        >
          Hurrah!
        </h2>
      </div>

      {/* Statement: Clients & Partners */}
      <div className="aw-partner w-full mb-[5vw] md:mb-[4vw]">
        <div className="aw-eyebrow font-editorial italic text-[4.5vw] md:text-[1.5vw] text-[#1d1d1b]/80 mb-[2vw] md:mb-[1vw]">
          Clients &amp; Partners
        </div>

        {/* Editorial Text Statement */}
        <div className="aw3-wrap font-editorial text-[7.5vw] md:text-[3.8vw] leading-[1.1] font-light text-[#1d1d1b] max-w-5xl tracking-[-0.03em]">
          Over the past 3+ years, I teamed up with high-profile clients and partners globally such as{' '}
          <span className="font-editorial italic font-normal">Prada</span>,{' '}
          <span className="font-editorial italic font-normal">Awwwards</span>,{' '}
          <span className="font-editorial italic font-normal">AKQA</span> and much more.
        </div>
      </div>

      {/* Visual Image Grid: Avatar + Trust Photo */}
      <div className="aw-grid w-full grid grid-cols-1 md:grid-cols-2 gap-[4vw] md:gap-[2.5vw]">
        {/* Left Column: Avatar Portrait */}
        <div className="aw-column le w-full border border-[#1d1d1b] overflow-hidden bg-[#e2dedb] aspect-[4/3] md:aspect-[16/11]">
          <img
            src="/assets/avatar-2.jpeg"
            alt="Niccolò Miranda Portrait"
            draggable={false}
            className="w-full h-full object-cover select-none hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Right Column: Trust Photo - Hidden on mobile per live reference */}
        <div className="aw-column ri hidden md:block w-full border border-[#1d1d1b] overflow-hidden bg-[#e2dedb] aspect-[4/3] md:aspect-[16/11]">
          <img
            src="/assets/trust.jpeg"
            alt="Trust Visual"
            draggable={false}
            className="w-full h-full object-cover select-none hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
