'use client';

import React from 'react';

export default function LiveMarqueeHeadline() {
  // 6 identical blocks in set A, 6 identical blocks in set B
  // Translating from 0% to -50% creates a mathematically flawless, seamless infinite loop with ZERO gaps.
  const repeatList = Array.from({ length: 8 });

  return (
    <div className="w-full h-[11vw] min-h-[65px] max-h-[160px] border-t border-b border-[#1d1d1b] bg-paper select-none flex items-center overflow-hidden relative flex-nowrap whitespace-nowrap">
      <style jsx>{`
        @keyframes marqueeSeamless {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .marquee-inner {
          display: flex;
          align-items: center;
          flex-direction: row;
          flex-wrap: nowrap;
          white-space: nowrap;
          width: max-content;
          will-change: transform;
          animation: marqueeSeamless 22s linear infinite;
        }
      `}</style>

      <div className="marquee-inner">
        {/* Set 1 & Set 2 combined for a 100% gapless continuous ribbon */}
        {repeatList.map((_, idx) => (
          <div
            key={idx}
            className="flex items-center shrink-0 flex-nowrap whitespace-nowrap mr-[2.5vw]"
          >
            {/* Headline Phrase */}
            <h4 className="font-editorial text-[6vw] font-light leading-none tracking-[-0.04em] text-[#1d1d1b] whitespace-nowrap m-0 p-0 select-none">
              Let&apos;s create something together
            </h4>

            {/* Email Me Solid Black Box */}
            <a
              href="mailto:info@niccolomiranda.com?subject=Project%20Request"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1d1d1b] ml-[1.5vw] px-[0.8vw] pt-[0.5vw] pb-[0.8vw] relative bottom-[0.4vw] inline-flex items-center justify-center shrink-0 hover:opacity-80 transition-opacity"
            >
              <span className="font-condensed text-[6vw] leading-[4vw] text-[#cdc6be] uppercase tracking-[-0.03em] font-normal pt-[0.5vw] whitespace-nowrap select-none">
                Email Me
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
