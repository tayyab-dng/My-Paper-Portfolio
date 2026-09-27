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
    <section id="direction" className="aw1-a w-full px-[4vw] md:px-[2vw] py-[6vw] md:py-[4vw] border-t border-[#1d1d1b]/30">
      <div className="w-full flex flex-col md:flex-row gap-[8vw] md:gap-[4vw]">
        {/* Left Column: Trophy + Selected Awards Heading + Dropcap Paragraph */}
        <div className="aw1-col w-full md:w-[38vw] flex flex-col">
          {/* Trophy Photograph */}
          <div className="aw1-inner w-full border border-[#1d1d1b] overflow-hidden bg-[#e2dedb] mb-[4vw] md:mb-[3vw]">
            <img
              src="/assets/trophy.jpeg"
              alt="Awards Trophy"
              draggable={false}
              className="w-full h-auto block select-none object-cover"
            />
          </div>

          {/* Heading: SELECTED AWARDS! */}
          <div className="aw1-block flex flex-col mb-[3vw]">
            <h2
              className="font-canopee text-[22vw] md:text-[13.5vw] leading-[17vw] md:leading-[10vw] uppercase font-normal text-[#1d1d1b] m-0 tracking-[-0.04em]"
            >
              Sele<span className="font-editorial italic">c</span>ted
            </h2>
            <h2
              className="font-canopee text-[22vw] md:text-[14vw] leading-[17vw] md:leading-[11vw] uppercase font-normal text-[#1d1d1b] m-0 tracking-[-0.04em]"
            >
              Awards!
            </h2>
          </div>

          {/* Hairline Divider */}
          <div className="w-full h-[1px] bg-[#1d1d1b]/35 my-[2vw]" />

          {/* Dropcap Statement */}
          <div className="h-drop w-full">
            <h5
              className="font-editorial text-[6.5vw] md:text-[2.25vw] leading-[8vw] md:leading-[2.7vw] font-light text-[#1d1d1b] text-left"
              style={{
                letterSpacing: '-0.02em',
              }}
            >
              <span
                className="float-left font-canopee text-[20vw] md:text-[7vw] leading-[17vw] md:leading-[5vw] mr-[2vw] md:mr-[1vw] mb-[1vw] bg-[#1d1d1b] text-[#cdc6be] px-[2vw] md:px-[0.75vw] pt-[1.5vw] md:pt-[0.75vw] pb-[0.5vw]"
                style={{ fontFeatureSettings: '"ss03"' }}
              >
                A
              </span>
              s a multidisciplinary freelance, who’s passionate about creating iconic digital exp-eriences through motion, typography and creative coding for companies and agencies globally.
            </h5>
          </div>
        </div>

        {/* Right Column: Interactive Accordion of Awards */}
        <div className="aw1-col ri w-full md:flex-1 flex flex-col">
          <div className="aw1-list w-full flex flex-col divide-y divide-[#1d1d1b]/35 border-y border-[#1d1d1b]/35">
            {AWARDS_CATEGORIES.map((cat) => {
              const isOpen = openCategory === cat.id;
              return (
                <div key={cat.id} className="aw1-item w-full py-[3.5vw] md:py-[2vw] flex flex-col">
                  {/* Category Title Row / Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    className="aw1-title w-full flex items-center justify-between cursor-pointer select-none text-left bg-transparent border-none p-0 group"
                    aria-expanded={isOpen}
                  >
                    <div className="h-[7vw] md:h-[3.8vw] flex items-center">
                      <img
                        src={cat.brandImg}
                        alt={cat.brandName}
                        draggable={false}
                        className="h-full w-auto max-w-[55vw] md:max-w-[28vw] object-contain select-none"
                      />
                    </div>

                    {/* Explore Down Arrow Circle */}
                    <div
                      className={`w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw] flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <img
                        src="/assets/explore.svg"
                        alt="Toggle"
                        draggable={false}
                        className="w-full h-full object-contain select-none opacity-80 group-hover:opacity-100"
                      />
                    </div>
                  </button>

                  {/* Expanded Accordion Projects List */}
                  {isOpen && (
                    <div className="aw1-outer w-full mt-[3vw] md:mt-[2vw] flex flex-col gap-[3vw] md:gap-[1.5vw] transition-all duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3vw] md:gap-[1.5vw] pt-[1vw]">
                        {cat.projects.map((proj, idx) => (
                          <Link
                            key={`${proj.slug}-${idx}`}
                            href={proj.href}
                            draggable={false}
                            className="aw1-link flex items-center p-[2vw] md:p-[1vw] border border-[#1d1d1b]/25 hover:border-[#1d1d1b] transition-all bg-[#cdc6be]/40 hover:bg-[#cdc6be] group"
                          >
                            {/* Project Thumbnail */}
                            <div className="aw1-thumb w-[24vw] md:w-[8vw] h-[18vw] md:h-[6vw] flex-shrink-0 border border-[#1d1d1b]/40 overflow-hidden bg-[#806454]">
                              <img
                                src={proj.thumb}
                                alt={proj.slug}
                                draggable={false}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>

                            {/* Project Info */}
                            <div className="aw1-info flex-1 flex flex-col justify-center ml-[3vw] md:ml-[1.2vw] overflow-hidden">
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
                              <span className="font-editorial text-[3vw] md:text-[0.9vw] leading-tight text-[#1d1d1b]/85 truncate">
                                {proj.price}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
