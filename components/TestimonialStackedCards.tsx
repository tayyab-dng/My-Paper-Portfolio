'use client';

import React, { useState } from 'react';

interface Testimonial {
  id: string;
  quote: string;
  avatar: string;
  name: React.ReactNode;
  role: React.ReactNode;
  transformDesktop: string;
  defaultZIndex: number;
}

const testimonials: Testimonial[] = [
  {
    id: 's-1',
    quote: '“Blurring the line between design & dev, Niccolo has an umatched eye for detail and precise execution in his work which pushes the whole industry forward”',
    avatar: '/assets/sam-day.jpg',
    name: 'SAM DAY',
    role: 'Creative Director & Designer',
    transformDesktop: 'lg:translate-x-0',
    defaultZIndex: 10,
  },
  {
    id: 's-2',
    quote: '"Niccolò‘s eye for detail & design as well as his impeccable aesthetics, make him one of the leaders in today’s digital design scene"',
    avatar: '/assets/sofia-papadopoulou.jpg',
    name: (
      <>
        S<span className="font-display">o</span>fia Papad
        <span className="font-display">o</span>p
        <span className="font-display">o</span>ul
        <span className="font-display">o</span>u
      </>
    ),
    role: 'Designer & Art Director',
    transformDesktop: 'lg:-translate-x-[22vw]',
    defaultZIndex: 20,
  },
  {
    id: 's-3',
    quote: '"High-skilled designer who creates novel experiences with ease and craft. His signature is more vivid on each new project he launches and this is only the start"',
    avatar: '/assets/bruno-arizio.jpg',
    name: (
      <>
        Brun<span className="font-display">o</span> Arizi
        <span className="font-display">o</span>
      </>
    ),
    role: (
      <>
        Creative Director at{' '}
        <a
          href="https://brunoarizio.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-[0.2vw] decoration-[#1d1d1b]/60 hover:text-[#1d1d1b]"
        >
          Studio BA
        </a>
      </>
    ),
    transformDesktop: 'lg:-translate-x-[43vw]',
    defaultZIndex: 30,
  },
  {
    id: 's-4',
    quote: '"A very promising Creative Director and Interactive Designer given his natural aesthetic taste and innate instinct for functionality"',
    avatar: '/assets/enea-rossi.jpg',
    name: (
      <>
        Enea R<span className="font-display">o</span>ssi
      </>
    ),
    role: (
      <>
        Co-Founder at{' '}
        <a
          href="https://adoratorio.studio/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-[0.2vw] decoration-[#1d1d1b]/60 hover:text-[#1d1d1b]"
        >
          Adoratorio
        </a>
      </>
    ),
    transformDesktop: 'lg:-translate-x-[65vw]',
    defaultZIndex: 40,
  },
];

export default function TestimonialStackedCards() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section className="w-full bg-paper select-none px-[2vw] pt-[1vw] pb-[6vw] overflow-hidden">
      {/* Container matching Webflow .h-item.r & .aw-block-w */}
      <div className="w-full flex flex-col lg:flex-row items-stretch lg:items-start justify-start relative">
        {testimonials.map((card) => {
          const isActive = activeCard === card.id;

          return (
            <div
              key={card.id}
              onClick={() => setActiveCard(isActive ? null : card.id)}
              style={{
                zIndex: isActive ? 60 : card.defaultZIndex,
              }}
              className={`w-full lg:w-[40vw] h-auto min-h-[60vw] lg:min-h-0 lg:h-[25vw] bg-[#cdc6be] border-[2.5px] border-[#1d1d1b] rounded-[2vw] lg:rounded-[0.8vw] flex flex-col justify-between p-6 sm:p-8 lg:p-[2.5vw_3vw_3vw] relative shrink-0 mb-6 lg:mb-0 shadow-[-4px_4px_6px_rgba(29,29,27,0.2)] cursor-pointer transition-all duration-300 ease-out ${card.transformDesktop} ${
                isActive ? 'lg:-translate-y-3 shadow-[-6px_10px_16px_rgba(29,29,27,0.3)]' : 'hover:lg:-translate-y-1'
              }`}
            >
              {/* Authentic Inset Dashed Border Stitch Overlay */}
              <div className="absolute inset-0 p-2 lg:p-[0.7vw] pointer-events-none z-0">
                <div
                  className="w-full h-full rounded-[1.5vw] lg:rounded-[0.5vw]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23333' stroke-width='2.5' stroke-dasharray='11%2c11' stroke-dashoffset='30' stroke-linecap='square'/%3e%3c/svg%3e")`,
                  }}
                />
              </div>

              {/* Card Quote Content */}
              <div className="relative z-10 w-full">
                <p
                  className={`font-editorial text-lg sm:text-xl lg:text-[2.2vw] text-[#1d1d1b] font-light ${
                    card.id === 's-4' ? 'lg:leading-[2.8vw]' : 'lg:leading-[3vw]'
                  } tracking-[-0.03em]`}
                  style={{
                    textDecoration: 'underline',
                    textUnderlineOffset: '0.3vw',
                    textDecorationThickness: '0.5px',
                    textDecorationColor: 'rgba(0, 0, 0, 0.45)',
                  }}
                >
                  {card.quote}
                </p>
              </div>

              {/* Author Info at the bottom of the card */}
              <div className="relative z-10 flex items-center mt-6 lg:mt-[2vw]">
                {/* Circular Portrait Avatar (3vw x 3vw) */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[3vw] lg:h-[3vw] rounded-full border border-[#1d1d1b] overflow-hidden shrink-0 bg-[#806454]">
                  <img
                    src={card.avatar}
                    alt="Testimonial Author"
                    className="w-full h-full object-cover select-none"
                    loading="lazy"
                  />
                </div>

                {/* Name & Role */}
                <div className="ml-3 sm:ml-4 lg:ml-[1vw] flex flex-col text-left">
                  <h3 className="font-condensed text-2xl sm:text-3xl lg:text-[2.2vw] leading-[1] lg:leading-[2vw] text-[#1d1d1b] uppercase tracking-[-0.03em] font-normal mb-[0.2vw]">
                    {card.name}
                  </h3>
                  <div className="font-editorial text-sm sm:text-base lg:text-[1.4vw] leading-[1.3] lg:leading-[1.3vw] text-[#1d1d1b] font-light tracking-[-0.01em]">
                    {card.role}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
