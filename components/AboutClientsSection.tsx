'use client';

import React from 'react';

export default function AboutClientsSection() {
  return (
    <section className="aw-3 w-full px-[4vw] md:px-[2vw] py-[8vw] md:py-[4vw] border-t border-[#1d1d1b]/30 select-none">
      {/* Huge HURRAH! Box */}
      <div className="aw-pattern w-full block mb-[5vw] md:mb-[3vw]">
        <h2
          className="head award bg-[#1d1d1b] text-[#cdc6be] uppercase text-[30vw] md:text-[25vw] leading-[22vw] md:leading-[18vw] pt-[2.5vw] pr-[3vw] pb-0 pl-[1vw] tracking-[-0.05em] font-normal m-0 block whitespace-nowrap select-none text-left"
          style={{ fontFamily: 'Canopee, sans-serif' }}
        >
          Hurrah!
        </h2>
      </div>

      {/* Statement: Clients & Partners */}
      <div className="aw-partner w-full mb-[6vw] md:mb-[4vw]">
        <div className="aw-eyebrow font-editorial italic text-[4.5vw] md:text-[1.35vw] text-[#1d1d1b]/80 mb-[3vw] md:mb-[1.5vw]">
          Clients &amp; Partners
        </div>

        {/* Desktop Statement with Solid Black Badges */}
        <div className="aw3-wrap hidden md:block font-editorial text-[3.8vw] leading-[4.8vw] font-light text-[#1d1d1b]">
          <div className="aw3-line">
            Over the past 3+ years, I teamed up with high-
          </div>
          <div className="aw3-inner flex items-baseline flex-wrap gap-x-[1vw]">
            <span>profile clients and agencies globally such as</span>
            <div className="aw3-client__wrap inline-block">
              <h3 className="aw3-client bg-[#1d1d1b] text-[#cdc6be] px-[0.8vw] pt-[0.5vw] pb-[0.2vw] font-canopee text-[6.5vw] leading-[5.5vw] uppercase font-normal inline-block">
                Prada
              </h3>
            </div>
          </div>
          <div className="aw3-inner lower flex items-baseline flex-wrap gap-x-[0.8vw]">
            <div className="aw3-client__wrap inline-block">
              <h3 className="aw3-client bg-[#1d1d1b] text-[#cdc6be] px-[0.8vw] pt-[0.5vw] pb-[0.2vw] font-canopee text-[6.5vw] leading-[5.5vw] uppercase font-normal inline-block">
                Awwwards
              </h3>
            </div>
            <span className="font-editorial text-[3.8vw] leading-[4.8vw]">,</span>
            <div className="aw3-client__wrap inline-block">
              <h3 className="aw3-client bg-[#1d1d1b] text-[#cdc6be] px-[0.8vw] pt-[0.5vw] pb-[0.2vw] font-canopee text-[6.5vw] leading-[5.5vw] uppercase font-normal inline-block">
                AK<span style={{ fontFamily: '"Domaine Display", serif', letterSpacing: '-0.06em' }}>Q</span>A
              </h3>
            </div>
            <span className="font-editorial text-[3.8vw] leading-[4.8vw]">and much more.</span>
          </div>
        </div>

        {/* Mobile View with Italic Typography matching reference */}
        <div className="aw3-wrap mobile block md:hidden">
          <div
            className="aw3-head font-editorial text-[9vw] leading-[9vw] font-light text-[#1d1d1b]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Over the past 3+ years, I teamed up with high-<br />
            profile clients and partners globally such as Prada, Awwwards, AKQA and much more.
          </div>
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
