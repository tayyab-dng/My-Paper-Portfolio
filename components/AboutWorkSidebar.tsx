'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutWorkSidebar() {
  return (
    <section className="sidebar w-full border-t border-[#1d1d1b] px-[4vw] md:px-[2vw] pt-[6vw] md:pt-[3vw] pb-[6vw] md:pb-[4vw] select-none">
      <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-[6vw] md:gap-[4vw]">
        {/* Left Card: Om Swami - Order 2 on mobile (after headline), Order 1 on desktop */}
        <div className="s-grid left w-full md:w-[29vw] flex justify-center order-2 md:order-1">
          <div className="item fl w-full">
            <Link
              href="/work/om-swami"
              draggable={false}
              className="item-link block w-full group text-inherit no-underline"
            >
              <div className="item-img-w w-full border border-[#1d1d1b] overflow-hidden aspect-[2.5/1] md:aspect-auto md:h-[11vw] bg-[#806454]">
                <img
                  src="/assets/projects/om-swami.jpeg"
                  alt="Om Swami"
                  draggable={false}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="item-block mt-[2vw] md:mt-[0.8vw]">
                <div className="item-tw h-[6vw] md:h-[1.5vw] flex items-center">
                  <img
                    src="/assets/projects/om-swami.svg"
                    alt="Om Swami"
                    draggable={false}
                    className="h-full w-auto max-w-none object-contain"
                  />
                </div>
                <div className="item-desc font-editorial text-[4vw] md:text-[1.2vw] leading-[1.3] text-[#1d1d1b]/80 font-light mt-[1.5vw] md:mt-[0.6vw]">
                  Om Swami is a spiritual leader, bestselling author and serial entrepreneur who resides in the Himalayan foothills.
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Center: ALL WORK! Headline - Order 1 on mobile, Order 2 on desktop */}
        <div className="headline m w-full md:w-[29vw] flex flex-col items-start md:items-center justify-center text-left md:text-center relative py-[4vw] md:py-[2vw] md:border-x md:border-[#1d1d1b]/40 md:px-[2.5vw] order-1 md:order-2">
          <Link
            href="/work"
            draggable={false}
            className="head-wrap relative inline-block group text-inherit no-underline"
          >
            <div
              className="head-title font-canopee text-[25vw] md:text-[5.2vw] leading-none uppercase font-normal text-[#1d1d1b]"
              style={{ letterSpacing: '-0.04em' }}
            >
              All <span className="tracking-[-0.02em]">W</span>
              <span style={{ fontFamily: '"Domaine Display", serif', fontWeight: 500, fontStyle: 'normal' }}>o</span>rk!
            </div>
            {/* Animated SVG Doodle on Desktop with authentic stroke-draw effect */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[140%] pointer-events-none">
              <svg viewBox="0 0 500 146" className="w-full h-full">
                <ellipse
                  className="fill-none stroke-[#96B59F] transition-all duration-700 ease-out"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  strokeDasharray="1100"
                  strokeDashoffset="1100"
                  style={{
                    transition: 'stroke-dashoffset 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86)',
                  }}
                  cx="250"
                  cy="72.9"
                  rx="242.4"
                  ry="68.5"
                />
              </svg>
            </div>
          </Link>

          <div className="head-desc font-editorial text-[6.5vw] md:text-[2.2vw] leading-[1.1] text-[#1d1d1b]/85 mt-[2vw] md:mt-[1vw] max-w-sm">
            A featured work selection – spanning the last few years.
          </div>

          <div className="head-caption flex items-center gap-[1vw] md:gap-[0.3vw] mt-[2vw] md:mt-[1vw]">
            <span className="font-canopee text-[4vw] md:text-[1.3vw] uppercase text-[#1d1d1b]">
              TIP!
            </span>
            <span className="font-editorial text-[3.8vw] md:text-[1.1vw] text-[#1d1d1b]/70">
              Drag sideways to navigate
            </span>
          </div>
        </div>

        {/* Right Card: WOW Concept - Hidden on mobile per live reference, Order 3 on desktop */}
        <div className="s-grid ri hidden md:flex w-full md:w-[29vw] justify-center md:order-3">
          <div className="item l w-full">
            <Link
              href="/work/wow-concept"
              draggable={false}
              className="item-link block w-full group text-inherit no-underline"
            >
              <div className="item-img-w w-full border border-[#1d1d1b] overflow-hidden aspect-[16/10] md:h-[11vw] bg-[#806454]">
                <img
                  src="/assets/projects/wow-concept.webp"
                  alt="WOW Concept"
                  draggable={false}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="item-block mt-[2vw] md:mt-[0.8vw]">
                <div className="item-tw h-[6vw] md:h-[1.5vw] flex items-center">
                  <img
                    src="/assets/projects/wow-concept.svg"
                    alt="WOW Concept"
                    draggable={false}
                    className="h-full w-auto max-w-none object-contain"
                  />
                  <div className="bg-[#c03f13] text-[#cdc6be] font-canopee text-[3.2vw] md:text-[1.1vw] px-[1.5vw] md:px-[0.4vw] py-[0.2vw] rounded-[0.2vw] uppercase ml-[1.5vw] md:ml-[0.5vw]">
                    New
                  </div>
                </div>
                <div className="item-desc font-editorial text-[4vw] md:text-[1.2vw] leading-[1.3] text-[#1d1d1b]/80 font-light mt-[1.5vw] md:mt-[0.6vw]">
                  WOW Concept is a the world’s first concept store based in Madrid revolutionizing retail with a dynamic &amp; interactive shopping experience.
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
