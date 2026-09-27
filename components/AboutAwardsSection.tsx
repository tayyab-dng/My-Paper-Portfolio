'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AWARDS_CATEGORIES } from '@/lib/aboutData';

export default function AboutAwardsSection() {
  // All categories closed initially by default, matching reference
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (id: string) => {
    setOpenCategory((prev) => (prev === id ? null : id));
  };

  return (
    <section id="direction" className="aw1-a w-full px-[4vw] md:px-[2vw] py-[6vw] md:py-[3vw] border-t border-[#1d1d1b]/30">
      <div className="w-full flex flex-col md:flex-row gap-0">
        {/* Left Column: Selected Awards Heading + Trophy + Dropcap Paragraph */}
        <div className="aw1-col w-full md:w-[40%] flex flex-col md:border-r md:border-[#1d1d1b]/40 md:pr-[3vw] pb-[6vw] md:pb-0">
          <div className="aw1-intro w-full flex flex-col">
            {/* 1. Heading: SELECTED AWARDS! with background hairline dividers */}
            <div className="aw1-block relative flex flex-col mb-[5vw] md:mb-[3vw]">
              {/* Authentic Hairline division lines behind text */}
              <div className="aw-divs absolute inset-0 pointer-events-none flex flex-col justify-center">
                <div className="div-2 w-full h-[1px] bg-[#1d1d1b]/30 my-[3vw] md:my-[1.5vw]" />
                <div className="div-2 w-full h-[1px] bg-[#1d1d1b]/30 my-[3vw] md:my-[1.5vw]" />
              </div>

              <h2
                className="h-head s-1 aw font-canopee text-[36vw] md:text-[13.67vw] leading-[25vw] md:leading-[9vw] uppercase font-normal text-[#1d1d1b] m-0 tracking-[-0.04em] relative z-10"
              >
                Sele<span style={{ fontFamily: '"Domaine Display", serif', fontWeight: 500, letterSpacing: '-0.02em' }}>c</span>ted
              </h2>
              <h2
                className="h-head sub aw font-canopee text-[37vw] md:text-[14vw] leading-[28vw] md:leading-[10vw] uppercase font-normal text-[#1d1d1b] m-0 tracking-[-0.04em] relative z-10"
              >
                Awards!
              </h2>
            </div>

            {/* 2. Trophy Photograph */}
            <div className="aw1-inner w-full border border-[#1d1d1b] overflow-hidden bg-[#e2dedb] mb-[5vw] md:mb-[3vw]">
              <img
                src="/assets/trophy.jpeg"
                alt="Awards Trophy"
                draggable={false}
                className="w-full h-auto block select-none object-cover"
              />
            </div>
          </div>

          {/* 3. Dropcap Statement */}
          <div className="h-drop w-full">
            <h5
              className="has-dropcap font-editorial text-[7.25vw] md:text-[2.25vw] leading-[7.5vw] md:leading-[2.7vw] font-light text-[#1d1d1b] text-left"
              style={{
                letterSpacing: '-0.03em',
              }}
            >
              As a multidisciplinary freelance, who’s passionate about creating iconic digital exp-eriences through motion, typography and creative coding for companies and agencies globally.
            </h5>
          </div>
        </div>

        {/* Right Column: Interactive Accordion of Awards */}
        <div className="aw1-col ri w-full md:w-[60%] flex flex-col md:pl-[3vw] pt-[4vw] md:pt-0">
          <div className="aw1-list w-full flex flex-col divide-y divide-[#1d1d1b]/35 border-y border-[#1d1d1b]/35">
            {AWARDS_CATEGORIES.map((cat) => {
              const isOpen = openCategory === cat.id;
              return (
                <div key={cat.id} className="aw1-item w-full pt-[7vw] pb-[8vw] md:py-[2vw] flex flex-col border-b border-[#1d1d1b]">
                  {/* Category Title Row / Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    className="aw1-title w-full h-[10vw] md:h-[4vw] flex items-center justify-between cursor-pointer select-none text-left bg-transparent border-none p-0 group"
                    aria-expanded={isOpen}
                  >
                    <div className="h-full flex items-center">
                      <img
                        src={cat.brandImg}
                        alt={cat.brandName}
                        draggable={false}
                        className="h-full w-auto max-w-[65vw] md:max-w-[28vw] object-contain select-none"
                      />
                    </div>

                    {/* Explore Down Arrow Circle with Smooth Rotation */}
                    <div
                      className={`w-[8vw] h-[8vw] md:w-[3vw] md:h-[3vw] flex items-center justify-center transition-transform duration-500 ease-out ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <img
                        src="/assets/explore.svg"
                        alt="Toggle"
                        draggable={false}
                        className="w-full h-full object-contain select-none opacity-85 group-hover:opacity-100"
                      />
                    </div>
                  </button>

                  {/* Expanded Accordion Projects List with Smooth Height Transition */}
                  <div
                    className={`aw1-outer w-full overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-[1200px] mt-[4vw] md:mt-[2vw] opacity-100' : 'max-h-0 mt-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="aw-inner__list grid grid-cols-1 md:grid-cols-2 gap-y-[4vw] md:gap-y-[2vw] gap-x-[2vw] pt-[1vw]">
                      {cat.projects.map((proj, idx) => (
                        <div key={`${proj.slug}-${idx}`} className="aw-inner__item w-full">
                          <Link
                            href={proj.href}
                            draggable={false}
                            className="aw1-link flex items-center w-full group no-underline text-inherit"
                          >
                            {/* Project Thumbnail */}
                            <div className="aw1-thumb w-[30vw] md:w-[8vw] h-[22vw] md:h-[6vw] flex-shrink-0 border border-[#1d1d1b] overflow-hidden bg-[#806454]">
                              <img
                                src={proj.thumb}
                                alt={proj.slug}
                                draggable={false}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>

                            {/* Project Info */}
                            <div className="aw1-info flex-1 flex flex-col justify-center ml-[3vw] md:ml-[1.5vw] overflow-hidden">
                              <span className="font-editorial text-[3.2vw] md:text-[1.1vw] text-[#1d1d1b]/70 font-light">
                                {proj.year}
                              </span>
                              <div className="h-[5vw] md:h-[2vw] my-[0.5vw] flex items-center">
                                <img
                                  src={proj.titleSvg}
                                  alt={proj.slug}
                                  draggable={false}
                                  className="h-full w-auto max-w-[35vw] md:max-w-[15vw] object-contain"
                                />
                              </div>
                              <span className="font-editorial text-[2.8vw] md:text-[0.9vw] leading-tight text-[#1d1d1b]/85 truncate">
                                {proj.price}
                              </span>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
