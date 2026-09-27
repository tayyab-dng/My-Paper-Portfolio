'use client';

import React from 'react';
import { PUBLICATIONS } from '@/lib/aboutData';

export default function AboutPublicationsSection() {
  return (
    <section className="aw-2 w-full px-[4vw] md:px-[2vw] py-[8vw] md:py-[4vw] border-t border-[#1d1d1b]/30 select-none">
      {/* Publications Header + Avatar Image */}
      <div className="div-block-44 w-full flex items-center justify-between pb-[3vw] md:pb-[2vw] border-b border-[#1d1d1b]/30">
        <h3
          className="aw2-head font-canopee text-[17vw] md:text-[11vw] leading-[12vw] md:leading-[8vw] uppercase font-normal text-[#1d1d1b] m-0 tracking-[-0.04em]"
        >
          Publi<span style={{ fontFamily: '"Domaine Display", serif', fontWeight: 500, letterSpacing: '-0.02em' }}>c</span>ati<span style={{ fontFamily: '"Domaine Display", serif', fontWeight: 500, letterSpacing: '-0.02em' }}>o</span>ns
        </h3>

        {/* Avatar with star eyes */}
        <div className="div-block-52 w-[20vw] md:w-[10vw] h-[12vw] md:h-[7vw] border border-[#1d1d1b] overflow-hidden bg-[#e2dedb] flex-shrink-0 flex items-center justify-center">
          <img
            src="/assets/avatar-2.jpeg"
            alt="Avatar"
            draggable={false}
            className="w-full h-full object-cover select-none"
          />
        </div>
      </div>

      {/* Publications Grid */}
      <div className="publications w-full mt-[2vw] overflow-hidden">
        <div className="article-grid grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-[#1d1d1b]/30 md:gap-x-[3vw] md:gap-y-0">
          {PUBLICATIONS.map((pub) => (
            <div
              key={pub.num}
              role="listitem"
              className="article-item relative border-b border-[#1d1d1b]/30 pt-[2vw] pb-[6vw] md:pb-[3vw]"
            >
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                className="pub-link flex relative group no-underline text-inherit cursor-pointer"
              >
                {/* Aside Number & Animated Hover Trigger */}
                <aside className="article-aside absolute flex items-end justify-end w-auto md:w-[5.5vw] h-auto md:h-[6vw] overflow-hidden left-0 top-[2.5vw] md:top-[1.2vw]">
                  <div className="pub-numb__wrap flex items-center transition-transform duration-300 md:group-hover:-translate-y-[120%]">
                    <div className="pub-numb">
                      <div className="numb font-editorial text-[8vw] md:text-[3.3vw] leading-[6vw] md:leading-[3.6vw] font-light text-[#1d1d1b] text-center">
                        {pub.num}
                      </div>
                    </div>
                  </div>

                  {/* Circular Article Trigger that slides up on desktop hover with matching SVG icon */}
                  <div className="pub-trigger absolute w-[4.3vw] h-[4.3vw] rounded-full border border-[#1d1d1b] bg-[#beb5ab] hidden md:flex items-center justify-center -bottom-[5vw] left-[0.6vw] transition-all duration-300 md:group-hover:bottom-[0.8vw]">
                    <img
                      src={pub.ico}
                      alt=""
                      draggable={false}
                      className="w-[2vw] h-[2vw] object-contain select-none"
                    />
                  </div>
                </aside>

                {/* Article Block: Eyebrow + Title */}
                <div className="article-block relative ml-[11vw] md:ml-[1vw] md:left-[5.5vw] flex-1">
                  <div className="article-header flex items-center h-[6vw] md:h-[1.4vw] mb-[1vw] md:mb-[0.6vw]">
                    <div className="pub-source font-editorial text-[3vw] md:text-[1vw] leading-[4vw] md:leading-[1vw] text-[#1d1d1b]/80">
                      {pub.source} – {pub.year}
                    </div>
                    <img
                      src={pub.ico}
                      alt=""
                      draggable={false}
                      className="pub-ico h-[4.5vw] md:h-[1.8vw] ml-[2vw] md:ml-[0.8vw] opacity-80"
                    />
                  </div>

                  <div className="article-title__wrap max-w-[65%] md:max-w-[78%] inline-block">
                    <h4
                      className="article-title font-editorial text-[7vw] md:text-[3vw] leading-[7vw] md:leading-[3vw] font-medium tracking-[-0.04em] text-[#1d1d1b] group-hover:underline underline-offset-4 decoration-[#1d1d1b]/40 group-hover:decoration-[#1d1d1b] transition-all m-0"
                    >
                      {pub.title}
                    </h4>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
