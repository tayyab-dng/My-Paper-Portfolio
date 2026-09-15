import React from 'react';

interface AwardItem {
  subtitle: string;
  title: string;
  count: string;
}

const awardsData: AwardItem[] = [
  {
    subtitle: 'Site of the day',
    title: 'Awards',
    count: '9',
  },
  {
    subtitle: 'Site of the month',
    title: 'Winners',
    count: '1',
  },
  {
    subtitle: 'FWA of the day',
    title: 'Awards',
    count: '6',
  },
  {
    subtitle: 'Acclaimed',
    title: 'Mentions',
    count: '8',
  },
];

export default function AwardsRow() {
  return (
    <section className="w-full border-t border-b border-[#1d1d1b] bg-paper select-none px-[2vw] py-[3.5vw]">
      <div className="w-full flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between items-center gap-8 lg:gap-0">
        {awardsData.map((award) => (
          <div
            key={award.subtitle}
            className="flex items-center justify-center shrink-0"
          >
            <div className="flex flex-col text-left">
              <span className="font-editorial text-sm sm:text-[1.6vw] tracking-[-0.03em] uppercase text-[#1d1d1b] font-light leading-[1.8vw]">
                {award.subtitle}
              </span>
              <span className="font-condensed text-3xl sm:text-[5vw] uppercase tracking-[-0.045em] text-[#1d1d1b] font-normal leading-[5vw]">
                {award.title}
              </span>
            </div>
            <div className="font-display text-6xl sm:text-[11vw] text-[#1d1d1b] font-normal leading-[6vw] ml-[0.6vw]">
              {award.count}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
