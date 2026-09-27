'use client';

import React from 'react';

export default function AboutExperienceSection() {
  const dashBgStyle = {
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23333' stroke-width='2' stroke-dasharray='11%2c11' stroke-dashoffset='30' stroke-linecap='square'/%3e%3c/svg%3e")`,
    borderRadius: '10px',
  };

  return (
    <div className="aw1-b w-full px-[4vw] md:px-[2vw] py-[6vw] md:py-[4vw] select-none border-t border-[#1d1d1b]/20">
      {/* Eyebrow Label */}
      <div className="aw-eyebrow slide font-editorial italic text-[4.5vw] md:text-[1.5vw] text-[#1d1d1b]/80 mb-[3vw] md:mb-[2vw]">
        Work Experience
      </div>

      {/* Horizontal Cards Slider */}
      <div className="aw-slider__content w-full flex flex-row gap-[4vw] md:gap-[2.5vw] overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory">
        {/* Card 1: Opportunities */}
        <div
          style={dashBgStyle}
          className="aw-item__content w-[85vw] md:w-[31vw] min-w-[85vw] md:min-w-[31vw] p-[6vw] md:p-[2.5vw] flex flex-col justify-between flex-shrink-0 snap-start"
        >
          <div>
            <h3
              className="aw-slider__head font-editorial text-[9vw] md:text-[3.2vw] leading-[1.05] font-light text-[#1d1d1b] mb-[2vw] md:mb-[1vw]"
            >
              Looking for <br />new opportunties!
            </h3>
            <div className="aw-eyebrow small font-editorial text-[3.8vw] md:text-[1.1vw] text-[#1d1d1b]/70 mb-[4vw] md:mb-[2vw]">
              Available from December 2021
            </div>
          </div>

          <div className="aw-slider__desc font-editorial text-[4.5vw] md:text-[1.35vw] leading-[1.4] text-[#1d1d1b]/85">
            Whether you&apos;re looking for an expert for a cool digital project — or have a full-time job opportunity, you can easily reach me by clicking{' '}
            <a
              href="mailto:info@niccolomiranda.com?subject=Project%20Inquiry"
              className="underline decoration-[#1d1d1b]/40 hover:decoration-[#1d1d1b] font-medium text-[#1d1d1b]"
            >
              here
            </a>.
          </div>
        </div>

        {/* Card 2: Independent / Freelance */}
        <div
          style={dashBgStyle}
          className="aw-item__content w-[85vw] md:w-[31vw] min-w-[85vw] md:min-w-[31vw] p-[6vw] md:p-[2.5vw] flex flex-col justify-between flex-shrink-0 snap-start"
        >
          <div>
            <h3
              className="aw-slider__head font-editorial text-[9vw] md:text-[3.2vw] leading-[1.05] font-light text-[#1d1d1b] mb-[2vw] md:mb-[1vw]"
            >
              Independent /<br />Freelance
            </h3>
            <div className="aw-eyebrow small font-editorial text-[3.8vw] md:text-[1.1vw] text-[#1d1d1b]/70 mb-[4vw] md:mb-[2vw]">
              from 2017–2021
            </div>
          </div>

          {/* Skill Badges */}
          <div className="aw-skill__wrap flex flex-wrap gap-[2vw] md:gap-[0.6vw] items-center pt-[2vw]">
            <span className="font-canopee text-[4.8vw] md:text-[1.4vw] uppercase tracking-wider bg-[#1d1d1b] text-[#cdc6be] px-[2vw] md:px-[0.6vw] py-[0.5vw] md:py-[0.15vw]">
              UI/UX DESIGN
            </span>
            <span className="font-canopee text-[4.8vw] md:text-[1.4vw] uppercase tracking-wider bg-[#1d1d1b] text-[#cdc6be] px-[2vw] md:px-[0.6vw] py-[0.5vw] md:py-[0.15vw]">
              FRONT-END
            </span>
            <span className="font-canopee text-[4.8vw] md:text-[1.4vw] uppercase tracking-wider bg-[#1d1d1b] text-[#cdc6be] px-[2vw] md:px-[0.6vw] py-[0.5vw] md:py-[0.15vw]">
              BRANDING
            </span>
            <span className="font-canopee text-[4.8vw] md:text-[1.4vw] uppercase tracking-wider bg-[#1d1d1b] text-[#cdc6be] px-[2vw] md:px-[0.6vw] py-[0.5vw] md:py-[0.15vw]">
              INTERACTION
            </span>
            <span className="font-canopee text-[4.8vw] md:text-[1.4vw] uppercase tracking-wider bg-[#1d1d1b] text-[#cdc6be] px-[2vw] md:px-[0.6vw] py-[0.5vw] md:py-[0.15vw]">
              ILLUSTRATION
            </span>
            <span className="font-canopee text-[4.8vw] md:text-[1.4vw] uppercase tracking-wider bg-[#1d1d1b] text-[#cdc6be] px-[2vw] md:px-[0.6vw] py-[0.5vw] md:py-[0.15vw]">
              3D DESIGN
            </span>
          </div>
        </div>

        {/* Card 3: Awwwards Panel */}
        <div
          style={dashBgStyle}
          className="aw-item__content w-[85vw] md:w-[31vw] min-w-[85vw] md:min-w-[31vw] p-[6vw] md:p-[2.5vw] flex flex-col justify-between flex-shrink-0 snap-start"
        >
          <div>
            <h3
              className="aw-slider__head font-editorial text-[9vw] md:text-[3.2vw] leading-[1.05] font-light text-[#1d1d1b] mb-[2vw] md:mb-[1vw]"
            >
              Awwwards<br />Panel
            </h3>
            <div className="aw-eyebrow small font-editorial text-[3.8vw] md:text-[1.1vw] text-[#1d1d1b]/70 mb-[4vw] md:mb-[2vw]">
              from 2018–2021
            </div>
          </div>

          {/* Badges */}
          <div className="aw-skill__wrap flex flex-wrap gap-[2vw] md:gap-[0.6vw] items-center pt-[2vw]">
            <span className="font-canopee text-[4.8vw] md:text-[1.4vw] uppercase tracking-wider bg-[#1d1d1b] text-[#cdc6be] px-[2vw] md:px-[0.6vw] py-[0.5vw] md:py-[0.15vw]">
              JUDGE
            </span>
            <span className="font-canopee text-[4.8vw] md:text-[1.4vw] uppercase tracking-wider bg-[#1d1d1b] text-[#cdc6be] px-[2vw] md:px-[0.6vw] py-[0.5vw] md:py-[0.15vw]">
              TEACHER
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
