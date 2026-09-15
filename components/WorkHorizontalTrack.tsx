'use client';

import React, { useRef, useState, useEffect } from 'react';

interface Project {
  id: string;
  name: string;
  year: string;
  isNew: boolean;
  tags: string[];
  desc: string;
  svgTitle: string;
  img: string;
}

const PROJECTS: Project[] = [
  {
    id: 'wow-concept',
    name: 'WOW CONCEPT',
    year: '2023',
    isNew: true,
    tags: ['eCommerce', 'Fashion', 'Retail'],
    desc: 'WOW Concept is a the world’s first concept store based in Madrid revolutionizing retail with a dynamic & interactive shopping experience.',
    svgTitle: '/assets/projects/wow-concept.svg',
    img: '/assets/projects/wow-concept.webp',
  },
  {
    id: 'the-roger-hub',
    name: 'THE ROGER HUB',
    year: '2023',
    isNew: true,
    tags: ['3D Experience', 'Footwear', 'Editorial'],
    desc: "The Roger Hub is an immersive web experience showcasing the tennis-inspired 'On' sneakers, a collaboration born out of a partnership with the legendary Roger Federer.",
    svgTitle: '/assets/projects/the-roger-hub.svg',
    img: '/assets/projects/the-roger-hub.webp',
  },
  {
    id: 'avroko',
    name: 'AVRO | KO',
    year: '2023',
    isNew: true,
    tags: ['Architecture', 'Hospitality', 'Interior'],
    desc: 'AvroKO is an award-winning global design firm, established itself as a global leader in interior architecture for hospitality, restaurant and bars.',
    svgTitle: '/assets/projects/avroko.svg',
    img: '/assets/projects/avroko.jpeg',
  },
  {
    id: 'cobo',
    name: 'COBO©',
    year: '2022',
    isNew: false,
    tags: ['Innovation', 'Manufacturing', 'Footwear'],
    desc: 'Cobo is a worldwide leader in injection moulding for footwear, delivering full-service experiences of cutting-edge soles and components globally.',
    svgTitle: '/assets/projects/cobo.svg',
    img: '/assets/projects/cobo.webp',
  },
  {
    id: 'thinkers',
    name: 'THINKERS',
    year: '2022',
    isNew: false,
    tags: ['E-Learning', 'Academy', 'Design'],
    desc: 'Thinkers is an experimental e-learning platform that offers a wide variety of creative masterclass by award-winning digital thinkers on the Awwwards community.',
    svgTitle: '/assets/projects/thinkers.svg',
    img: '/assets/projects/thinkers.jpeg',
  },
  {
    id: 'argor-heraeus',
    name: 'ARGOR-HERAEUS',
    year: '2022',
    isNew: false,
    tags: ['Corporate', 'Precious Metals', 'Supply Chain'],
    desc: 'Argor-Heraeus, the world’s largest provider of precious metals along the supply chain. Dive in and explore the Golden Link.',
    svgTitle: '/assets/projects/argor-heraeus.svg',
    img: '/assets/projects/argor-heraeus.jpeg',
  },
  {
    id: 'om-swami',
    name: 'OM SWAMI',
    year: '2022',
    isNew: false,
    tags: ['Editorial', 'Author', 'Biography'],
    desc: 'Om Swami is a spiritual leader, bestselling author and serial entrepreneur who resides in the Himalayan foothills.',
    svgTitle: '/assets/projects/om-swami.svg',
    img: '/assets/projects/om-swami.jpeg',
  },
  {
    id: 'the-books-of-ye',
    name: 'BOOKS OF YE',
    year: '2022',
    isNew: false,
    tags: ['Culture', 'Typography', 'Archive'],
    desc: 'The Books of Ye is a digital archive cataloging the creative journey, visual iconography, and public declarations of Kanye West.',
    svgTitle: '/assets/projects/the-books-of-ye.svg',
    img: '/assets/projects/the-books-of-ye.jpeg',
  },
  {
    id: 'prada',
    name: 'PRADA',
    year: '2022',
    isNew: false,
    tags: ['Luxury', 'Fashion', 'Campaign'],
    desc: 'Digital visual direction and motion conceptualization for high-fashion runway editorial showcases.',
    svgTitle: '/assets/projects/prada.svg',
    img: '/assets/projects/prada.jpeg',
  },
  {
    id: 'the-hiring-chain',
    name: 'THE HIRING CHAIN',
    year: '2021',
    isNew: false,
    tags: ['Social Impact', 'Campaign', 'Non-Profit'],
    desc: 'The Hiring Chain is a global campaign initiative encouraging businesses to hire people with Down syndrome, soundtracked by Sting.',
    svgTitle: '/assets/projects/the-hiring-chain.svg',
    img: '/assets/projects/the-hiring-chain.jpeg',
  },
  {
    id: 'aquerone',
    name: 'AQUERONE',
    year: '2021',
    isNew: false,
    tags: ['Wellness', 'Luxury', 'Packaging'],
    desc: 'Sophisticated botanical cosmetics and premium organic cannabis lifestyle experience designed for discerning aesthetics.',
    svgTitle: '/assets/projects/aquerone.svg',
    img: '/assets/projects/aquerone.jpeg',
  },
  {
    id: 'sal-parasuco',
    name: 'SAL PARASUCO',
    year: '2021',
    isNew: false,
    tags: ['Denim', 'Archive', 'Fashion'],
    desc: 'The definitive archival showcase honoring four decades of pioneering stretch denim, avant-garde silhouettes, and Italian craftsmanship.',
    svgTitle: '/assets/projects/sal-parasuco.svg',
    img: '/assets/projects/sal-parasuco.jpeg',
  },
  {
    id: 'edoardo-smerilli',
    name: 'EDOARDO SMERILLI',
    year: '2020',
    isNew: false,
    tags: ['Film Direction', 'Cinematography', 'Visual Effects'],
    desc: 'Portfolio of Italian film director Edoardo Smerilli, exploring dark whimsy, hyper-stylized fiction, and surreal compositions.',
    svgTitle: '/assets/projects/edoardo-smerilli.svg',
    img: '/assets/projects/edoardo-smerilli.jpeg',
  },
  {
    id: 'chiara-luzzana',
    name: 'CHIARA LUZZANA',
    year: '2020',
    isNew: false,
    tags: ['Sound Design', 'Audio Branding', 'Interactive Audio'],
    desc: 'World-renowned sound designer transforming brand identities into harmonic symphonies derived entirely from pure product noises.',
    svgTitle: '/assets/projects/chiara-luzzana.svg',
    img: '/assets/projects/chiara-luzzana.jpeg',
  },
  {
    id: 'loftgarten',
    name: 'LOFTGARTEN',
    year: '2020',
    isNew: false,
    tags: ['Creative Agency', 'Digital Production', 'Motion Design'],
    desc: 'Creative agency producing digital storytelling and high-impact visual campaigns for global innovators.',
    svgTitle: '/assets/projects/loftgarten.svg',
    img: '/assets/projects/loftgarten.jpeg',
  },
  {
    id: 'deplace-maison',
    name: 'DEPLACE MAISON',
    year: '2019',
    isNew: false,
    tags: ['Footwear', 'Streetwear', 'Handcrafted'],
    desc: 'Italian handcrafted urban footwear brand defined by playful aesthetics and street-smart elegance.',
    svgTitle: '/assets/projects/deplace-maison.svg',
    img: '/assets/projects/deplace-maison.jpeg',
  },
];

export default function WorkHorizontalTrack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

  // Wheel event listener: translates vertical scroll to horizontal scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.15;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // Mouse drag-to-scroll support
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    containerRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  const toggleProject = (id: string) => {
    setActiveProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#cdc6be] pl-[14vh]">
      {/* Scrollable Horizontal Track */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className="w-full h-full flex flex-row items-stretch overflow-x-auto overflow-y-hidden select-none cursor-default scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {/* Column 0: Authentic Intro Column (.c-0) */}
        <div className="shrink-0 h-full flex flex-col justify-start items-start pt-[6vh] pl-[6vh] pr-[20vh] border-r border-[#1d1d1b]/30 bg-[#cdc6be]">
          {/* Authentic head-w Stack */}
          <header className="relative flex flex-col items-start select-none">
            {/* FEATURED Box */}
            <h1 className="bg-[#1d1d1b] text-[#cdc6be] font-condensed text-[24vh] leading-[17vh] uppercase pt-[2.5vh] pr-[1.5vh] pb-[1vh] pl-[1vh] tracking-[-0.04em] font-normal m-0 inline-block">
              Featured
            </h1>

            {/* WORK Box */}
            <h1 className="bg-[#1d1d1b] text-[#cdc6be] font-condensed text-[24vh] leading-[17vh] uppercase mt-[1.5vh] pt-[2.5vh] pr-[1.5vh] pb-[0.4vh] pl-[1vh] tracking-[-0.04em] font-normal m-0 inline-block">
              <span className="tracking-[-0.1em]">W</span>
              <span className="font-display font-medium tracking-[-0.07em]">o</span>
              <span>rk</span>
            </h1>

            {/* div-block-34: Perforated Sunburst Stamp */}
            <div className="absolute right-[-3.1vh] bottom-[0.1vh] w-[17vh] pointer-events-none select-none">
              <img
                src="/assets/stamp.png"
                alt="Postage Stamp"
                draggable={false}
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </header>

          {/* drop-wrap: Dropcap Paragraph */}
          <div className="mt-[7vh] max-w-[40rem] select-none">
            <h5 className="has-dropcap-work">
              As an artisan, I like to start from raw matter and give life to an iconic product that makes your brand stand out — starting from a Visual Strategy that guide the client’s vision to reality.
            </h5>
          </div>
        </div>

        {/* 16 Authentic Project Spines (.brand-item) */}
        {PROJECTS.map((p) => {
          const isOpen = activeProjectId === p.id;
          return (
            <div
              key={p.id}
              className={`shrink-0 h-full flex flex-row items-stretch transition-colors duration-300 ${
                isOpen ? 'bg-[#d8cfc5]' : ''
              }`}
            >
              {/* Vertical Spine Column (.brand-inner) */}
              <div
                onClick={() => toggleProject(p.id)}
                className="w-[18vh] h-full flex flex-col justify-between items-center pt-[24vh] pb-[8vh] border-r border-[#1d1d1b]/30 cursor-pointer select-none transition-colors duration-200 hover:bg-[#d8cfc5]"
              >
                {/* Brand Title SVG Rotated (.brand-title-w) */}
                <div
                  className="w-[43vh] h-[6.3vh] flex items-center justify-center pointer-events-none"
                  style={{ transform: 'rotate(90deg)' }}
                >
                  <img
                    src={p.svgTitle}
                    alt={p.name}
                    draggable={false}
                    className="h-full w-auto max-w-none object-contain select-none"
                  />
                </div>

                {/* Brand Info (New badge + Year) */}
                <div className="flex flex-col items-center justify-end">
                  {p.isNew && (
                    <div
                      className="bg-[#c03f13] text-[#cdc6be] font-condensed text-[3vh] leading-[3vh] uppercase rounded-[0.7vh] mb-[2vh] px-[0.4vh] pt-[0.6vh] pb-[0.7vh] select-none"
                      style={{ writingMode: 'vertical-lr' }}
                    >
                      New
                    </div>
                  )}
                  <div
                    className="font-editorial text-[2.5vh] leading-[3vh] text-[#1d1d1b] select-none"
                    style={{ writingMode: 'vertical-lr' }}
                  >
                    {p.year}
                  </div>
                </div>
              </div>

              {/* Expandable Case Study Accordion (.book-wrap) */}
              <div
                className={`h-full flex flex-col justify-start items-center pt-[6vh] border-r border-[#1d1d1b]/30 bg-[#cdc6be] overflow-hidden transition-[width] duration-500 ease-[cubic-bezier(0.645,0.045,0.355,1)] ${
                  isOpen ? 'w-[75vh]' : 'w-0'
                }`}
                style={{ transformOrigin: '0%' }}
              >
                {/* book-title__tags */}
                <div className="w-[75vh] flex justify-center items-center gap-[1.5vh] mb-[2vh] shrink-0">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-editorial italic text-[1.8vh] text-[#1d1d1b] border border-[#1d1d1b]/40 rounded-full px-[1.6vh] py-[0.3vh]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* book-title-w */}
                <div className="w-[40vh] flex justify-center items-center mt-[3vh] shrink-0">
                  <img
                    src={p.svgTitle}
                    alt={p.name}
                    className="w-full h-auto max-w-none object-contain"
                  />
                </div>

                {/* book-quote-w */}
                <div className="w-[50vh] max-w-[55vh] text-center mt-[4vh] shrink-0 px-4">
                  <p className="font-editorial text-[2.6vh] leading-[3.3vh] text-[#1d1d1b] font-normal">
                    {p.desc}
                  </p>
                </div>

                {/* book-img-w */}
                <div className="w-full flex-1 border-t border-[#1d1d1b]/30 mt-[5vh] flex justify-center items-center overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-[110vh] max-w-none h-full object-cover"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
