'use client';

import React from 'react';
import { PUBLICATIONS } from '@/lib/aboutData';

export default function AboutPublicationsSection() {
  return (
    <section className="aw-2 w-full px-[4vw] md:px-[2vw] py-[6vw] md:py-[5vw] border-t border-[#1d1d1b]/30 select-none">
      {/* Publications Header + Avatar Image */}
      <div className="w-full flex items-center justify-between pb-[3vw] md:pb-[2vw] border-b border-[#1d1d1b]/35">
        <h3
          className="aw2-head font-canopee text-[18vw] md:text-[11vw] leading-none uppercase font-normal text-[#1d1d1b] m-0 tracking-[-0.04em]"
        >
          Publi<span className="font-editorial italic">c</span>ati<span className="font-editorial italic">o</span>ns
        </h3>

        {/* Avatar with star eyes */}
        <div className="w-[14vw] md:w-[7vw] h-[14vw] md:h-[7vw] border border-[#1d1d1b] overflow-hidden bg-[#e2dedb] flex-shrink-0">
          <img
            src="/assets/avatar-2.jpeg"
            alt="Avatar"
            draggable={false}
            className="w-full h-full object-cover select-none"
          />
        </div>
      </div>

      {/* Publications 3-Column Grid */}
      <div className="publications w-full mt-[2vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-[#1d1d1b]/25 md:gap-x-[4vw] md:gap-y-[3vw]">
          {PUBLICATIONS.map((pub) => (
            <a
              key={pub.num}
              href={pub.href}
              target="_blank"
              rel="noopener noreferrer"
              draggable={false}
              className="article-item py-[4vw] md:py-[1.5vw] flex items-start group border-b md:border-b border-[#1d1d1b]/20 md:border-[#1d1d1b]/25 transition-colors"
            >
              {/* Number with brackets: (1) */}
              <div className="pub-numb w-[14vw] md:w-[4vw] flex-shrink-0 flex items-center pt-[0.5vw]">
                <span className="font-editorial text-[8vw] md:text-[2.8vw] leading-none text-[#1d1d1b]/70 font-light group-hover:text-[#1d1d1b] transition-colors">
                  ({pub.num})
                </span>
              </div>

              {/* Publication Block */}
              <div className="article-block flex-1 flex flex-col justify-start pl-[2vw] md:pl-[0.8vw]">
                {/* Source + Year + Type Icon */}
                <div className="article-header flex items-center gap-[1.5vw] md:gap-[0.5vw] text-[#1d1d1b]/60 mb-[1vw] md:mb-[0.4vw] font-editorial text-[3.8vw] md:text-[1.1vw]">
                  <span>{pub.source}</span>
                  <span>–</span>
                  <span>{pub.year}</span>
                  <div className="w-[3.5vw] md:w-[1.2vw] h-[3.5vw] md:h-[1.2vw] flex items-center justify-center ml-[0.5vw]">
                    <img
                      src={pub.ico}
                      alt=""
                      draggable={false}
                      className="w-full h-full object-contain opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </div>

                {/* Article Title */}
                <h4
                  className="article-title font-editorial text-[6vw] md:text-[2vw] leading-[1.15] font-light text-[#1d1d1b] group-hover:underline underline-offset-4 decoration-[#1d1d1b]/40 group-hover:decoration-[#1d1d1b] transition-all"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {pub.title}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
