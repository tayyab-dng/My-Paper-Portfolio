'use client';

import React, { useRef, useState, useEffect } from 'react';

export default function AboutExperienceSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const dashBgStyle = {
    backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23333' stroke-width='2.5' stroke-dasharray='11%2c11' stroke-dashoffset='30' stroke-linecap='square'/%3e%3c/svg%3e")`,
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="aw1-b w-full px-[4vw] md:px-[2vw] py-[8vw] md:py-[3vw] select-none border-t border-[#1d1d1b]/30">
      {/* Eyebrow Label */}
      <div className="aw-eyebrow slide font-editorial italic text-[4.5vw] md:text-[1.35vw] text-[#1d1d1b]/80 mb-[4vw] md:mb-[2vw]">
        Work Experience
      </div>

      {/* Interactive Horizontal Cards Slider */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`aw-slider__content w-full flex flex-row overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory ${
          isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
        }`}
        style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
      >
        {/* Card 1: Opportunities */}
        <div
          className="aw-item__content w-[85vw] md:w-[35vw] h-[105vw] md:h-[30vw] min-w-[85vw] md:min-w-[35vw] bg-[#beb5ab] border border-[#1d1d1b] rounded-[3vw] md:rounded-[0.8vw] mr-[4vw] md:mr-[2vw] p-[8vw] md:p-[3vw] flex flex-col justify-between flex-shrink-0 snap-start relative overflow-hidden"
        >
          {/* Inner Dashed Border */}
          <div className="aw-inner absolute inset-0 p-[2vw] md:p-[0.7vw] pointer-events-none z-0">
            <div className="dash w-full h-full rounded-[2vw] md:rounded-[0.6vw]" style={dashBgStyle} />
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <h3 className="aw-slider__head font-editorial text-[8.5vw] md:text-[4vw] leading-[8.5vw] md:leading-[4vw] font-light text-[#1d1d1b] m-0">
                Looking for <br />new opportunties!
              </h3>
              <div className="aw-eyebrow small font-editorial text-[3.8vw] md:text-[1.1vw] text-[#1d1d1b]/70 mt-[2.5vw] md:mt-[1vw]">
                Available from December 2021
              </div>
            </div>

            <div className="aw-slider__desc font-editorial text-[4.2vw] md:text-[1.3vw] leading-[1.35] text-[#1d1d1b]/85 mt-[6vw] md:mt-0">
              Whether you&apos;re looking for an expert for a cool digital project — or have a full-time job opportunity, you can easily reach me by clicking{' '}
              <a
                href="mailto:info@niccolomiranda.com?subject=Project%20Inquiry"
                className="underline decoration-[#1d1d1b]/40 hover:decoration-[#1d1d1b] font-medium text-[#1d1d1b]"
              >
                here
              </a>.
            </div>
          </div>
        </div>

        {/* Card 2: Independent / Freelance */}
        <div
          className="aw-item__content w-[85vw] md:w-[35vw] h-[105vw] md:h-[30vw] min-w-[85vw] md:min-w-[35vw] bg-[#beb5ab] border border-[#1d1d1b] rounded-[3vw] md:rounded-[0.8vw] mr-[4vw] md:mr-[2vw] p-[8vw] md:p-[3vw] flex flex-col justify-between flex-shrink-0 snap-start relative overflow-hidden"
        >
          {/* Inner Dashed Border */}
          <div className="aw-inner absolute inset-0 p-[2vw] md:p-[0.7vw] pointer-events-none z-0">
            <div className="dash w-full h-full rounded-[2vw] md:rounded-[0.6vw]" style={dashBgStyle} />
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <h3 className="aw-slider__head font-editorial text-[8.5vw] md:text-[4vw] leading-[8.5vw] md:leading-[4vw] font-light text-[#1d1d1b] m-0">
                Independent&nbsp;/<br />Freelance
              </h3>
              <div className="aw-eyebrow small font-editorial text-[3.8vw] md:text-[1.1vw] text-[#1d1d1b]/70 mt-[2.5vw] md:mt-[1vw]">
                from 2017–2021
              </div>
            </div>

            {/* Authentic SVG Skill Tags with commas */}
            <div className="aw-skill__wrap mt-[4vw] md:mt-[2vw] flex flex-wrap items-center">
              <div className="aw-skill__item h-[7vw] md:h-[2.5vw] mb-[2vw] md:mb-[0.5vw] inline-block">
                <img
                  src="/assets/ui-design.svg"
                  alt="UI/UX Design"
                  draggable={false}
                  className="aw-skill-img h-full w-auto object-contain block"
                />
              </div>
              <span className="text-comma font-editorial text-[4vw] md:text-[1.3vw] text-[#1d1d1b] mx-[0.6vw] mb-[2vw] md:mb-[0.5vw]">,</span>

              <div className="aw-skill__item h-[7vw] md:h-[2.5vw] mb-[2vw] md:mb-[0.5vw] inline-block">
                <img
                  src="/assets/front-end.svg"
                  alt="Front-End"
                  draggable={false}
                  className="aw-skill-img h-full w-auto object-contain block"
                />
              </div>
              <span className="text-comma font-editorial text-[4vw] md:text-[1.3vw] text-[#1d1d1b] mx-[0.6vw] mb-[2vw] md:mb-[0.5vw]">,</span>

              <div className="aw-skill__item h-[7vw] md:h-[2.5vw] mb-[2vw] md:mb-[0.5vw] inline-block">
                <img
                  src="/assets/branding.svg"
                  alt="Branding"
                  draggable={false}
                  className="aw-skill-img h-full w-auto object-contain block"
                />
              </div>
              <span className="text-comma font-editorial text-[4vw] md:text-[1.3vw] text-[#1d1d1b] mx-[0.6vw] mb-[2vw] md:mb-[0.5vw]">,</span>

              <div className="aw-skill__item h-[7vw] md:h-[2.5vw] mb-[2vw] md:mb-[0.5vw] inline-block">
                <img
                  src="/assets/interactions.svg"
                  alt="Interactions"
                  draggable={false}
                  className="aw-skill-img h-full w-auto object-contain block"
                />
              </div>
              <span className="text-comma font-editorial text-[4vw] md:text-[1.3vw] text-[#1d1d1b] mx-[0.6vw] mb-[2vw] md:mb-[0.5vw]">,</span>

              <div className="aw-skill__item h-[7vw] md:h-[2.5vw] mb-[2vw] md:mb-[0.5vw] inline-block">
                <img
                  src="/assets/illustration.svg"
                  alt="Illustration"
                  draggable={false}
                  className="aw-skill-img h-full w-auto object-contain block"
                />
              </div>
              <span className="text-comma font-editorial text-[4vw] md:text-[1.3vw] text-[#1d1d1b] mx-[0.6vw] mb-[2vw] md:mb-[0.5vw]">,</span>

              <div className="aw-skill__item h-[7vw] md:h-[2.5vw] mb-[2vw] md:mb-[0.5vw] inline-block">
                <img
                  src="/assets/3d-design.svg"
                  alt="3D Design"
                  draggable={false}
                  className="aw-skill-img h-full w-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Awwwards Panel */}
        <div
          className="aw-item__content w-[85vw] md:w-[35vw] h-[105vw] md:h-[30vw] min-w-[85vw] md:min-w-[35vw] bg-[#beb5ab] border border-[#1d1d1b] rounded-[3vw] md:rounded-[0.8vw] mr-[4vw] md:mr-[2vw] p-[8vw] md:p-[3vw] flex flex-col justify-between flex-shrink-0 snap-start relative overflow-hidden"
        >
          {/* Inner Dashed Border */}
          <div className="aw-inner absolute inset-0 p-[2vw] md:p-[0.7vw] pointer-events-none z-0">
            <div className="dash w-full h-full rounded-[2vw] md:rounded-[0.6vw]" style={dashBgStyle} />
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <h3 className="aw-slider__head font-editorial text-[8.5vw] md:text-[4vw] leading-[8.5vw] md:leading-[4vw] font-light text-[#1d1d1b] m-0">
                Awwwards<br />Panel
              </h3>
              <div className="aw-eyebrow small font-editorial text-[3.8vw] md:text-[1.1vw] text-[#1d1d1b]/70 mt-[2.5vw] md:mt-[1vw]">
                from 2018–2021
              </div>
            </div>

            {/* Authentic SVG Badges: Judge & Teacher */}
            <div className="aw-skill__wrap mt-[4vw] md:mt-[2vw] flex flex-wrap items-center">
              <div className="aw-skill__item h-[7vw] md:h-[2.5vw] mb-[2vw] md:mb-[0.5vw] inline-block">
                <img
                  src="/assets/judge.svg"
                  alt="Judge"
                  draggable={false}
                  className="aw-skill-img h-full w-auto object-contain block"
                />
              </div>
              <span className="text-comma font-editorial text-[4vw] md:text-[1.3vw] text-[#1d1d1b] mx-[0.6vw] mb-[2vw] md:mb-[0.5vw]">,</span>

              <div className="aw-skill__item h-[7vw] md:h-[2.5vw] mb-[2vw] md:mb-[0.5vw] inline-block">
                <img
                  src="/assets/teacher.svg"
                  alt="Teacher"
                  draggable={false}
                  className="aw-skill-img h-full w-auto object-contain block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
