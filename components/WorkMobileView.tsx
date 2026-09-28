'use client';

import React from 'react';
import Link from 'next/link';
import PaperFooter from '@/components/PaperFooter';

interface WorkMobileViewProps {
  onOpenMenu: () => void;
}

interface MobileProject {
  id: string;
  name: string;
  year: string;
  isNew?: boolean;
  img: string;
  svgTitle?: string;
  href: string;
}

const MOBILE_PROJECTS: MobileProject[] = [
  {
    id: 'wow-concept',
    name: 'WOW CONCEPT',
    year: '2023',
    isNew: true,
    img: '/assets/projects/wow-concept.webp',
    svgTitle: '/assets/projects/wow-concept.svg',
    href: '/work/wow-concept',
  },
  {
    id: 'the-roger-hub',
    name: 'THE ROGER HUB',
    year: '2023',
    isNew: true,
    img: '/assets/projects/the-roger-hub.webp',
    svgTitle: '/assets/projects/the-roger-hub.svg',
    href: '/work/the-roger-hub',
  },
  {
    id: 'cobo',
    name: 'COBO©',
    year: '2022',
    isNew: false,
    img: '/assets/projects/cobo.webp',
    svgTitle: '/assets/projects/cobo.svg',
    href: '/work/cobo',
  },
  {
    id: 'thinkers',
    name: 'THINKERS',
    year: '2022',
    isNew: false,
    img: '/assets/projects/thinkers.jpeg',
    svgTitle: '/assets/projects/thinkers.svg',
    href: '/work/thinkers',
  },
  {
    id: 'argor-heraeus',
    name: 'ARGOR-HAEREUS',
    year: '2022',
    isNew: false,
    img: '/assets/projects/argor-heraeus.jpeg',
    svgTitle: '/assets/projects/argor-heraeus.svg',
    href: '/work/argor-heraeus',
  },
  {
    id: 'om-swami',
    name: 'OM SWAMI',
    year: '2022',
    isNew: false,
    img: '/assets/projects/om-swami.jpeg',
    svgTitle: '/assets/projects/om-swami.svg',
    href: '/work/om-swami',
  },
  {
    id: 'the-books-of-ye',
    name: 'BOOKS OF YE',
    year: '2022',
    isNew: false,
    img: '/assets/projects/the-books-of-ye.jpeg',
    svgTitle: '/assets/projects/the-books-of-ye.svg',
    href: '/work/the-books-of-ye',
  },
  {
    id: 'the-hiring-chain',
    name: 'THE HIRING CHAIN',
    year: '2021',
    isNew: false,
    img: '/assets/projects/the-hiring-chain.jpeg',
    svgTitle: '/assets/projects/the-hiring-chain.svg',
    href: '/work/the-hiring-chain',
  },
  {
    id: 'sal-parasuco',
    name: 'SAL PARASUCO',
    year: '2021',
    isNew: false,
    img: '/assets/projects/sal-parasuco.jpeg',
    svgTitle: '/assets/projects/sal-parasuco.svg',
    href: '/work/sal-parasuco',
  },
  {
    id: 'aquerone',
    name: 'AQUERONE',
    year: '2021',
    isNew: false,
    img: '/assets/projects/aquerone.jpeg',
    svgTitle: '/assets/projects/aquerone.svg',
    href: '/work/aquerone',
  },
  {
    id: 'prada',
    name: 'PRADA',
    year: '2022',
    isNew: false,
    img: '/assets/projects/prada.jpeg',
    svgTitle: '/assets/projects/prada.svg',
    href: '/work/prada',
  },
  {
    id: 'avroko',
    name: 'AVRO | KO',
    year: '2023',
    isNew: true,
    img: '/assets/projects/avroko.jpeg',
    svgTitle: '/assets/projects/avroko.svg',
    href: '/work/avroko',
  },
  {
    id: 'deplace-maison',
    name: 'DEPLACE MAISON',
    year: '2019',
    isNew: false,
    img: '/assets/projects/deplace-maison.jpeg',
    svgTitle: '/assets/projects/deplace-maison.svg',
    href: '/work/deplace-maison',
  },
  {
    id: 'loftgarten',
    name: 'LOFTGARTEN',
    year: '2020',
    isNew: false,
    img: '/assets/projects/loftgarten.jpeg',
    svgTitle: '/assets/projects/loftgarten.svg',
    href: '/work/loftgarten',
  },
  {
    id: 'chiara-luzzana',
    name: 'CHIARA LUZZANA',
    year: '2020',
    isNew: false,
    img: '/assets/projects/chiara-luzzana.jpeg',
    svgTitle: '/assets/projects/chiara-luzzana.svg',
    href: '/work/chiara-luzzana',
  },
  {
    id: 'edoardo-smerilli',
    name: 'EDOARDO SMERILLI',
    year: '2020',
    isNew: false,
    img: '/assets/projects/edoardo-smerilli.jpeg',
    svgTitle: '/assets/projects/edoardo-smerilli.svg',
    href: '/work/edoardo-smerilli',
  },
  {
    id: 'unexpected-time',
    name: 'UNEXPECTED TIME',
    year: '2023',
    isNew: false,
    img: '/assets/unexpected-time.webp',
    svgTitle: '/assets/unexpected-time-title.svg',
    href: '/work/wow-concept',
  },
];

export default function WorkMobileView({ onOpenMenu }: WorkMobileViewProps) {
  return (
    <div className="w-full min-h-screen bg-[#cdc6be] text-[#1d1d1b] flex flex-col select-none">
      {/* 1. Top Paper Masthead Navigation (68px height, NO border-bottom matching reference) */}
      <header className="relative w-full h-[68px] bg-transparent flex items-center justify-between px-[15.7px] z-30 shrink-0">
        {/* Left spacer for optical balance */}
        <div className="w-7" />

        {/* Center: Authentic Paper Portfolio Masthead */}
        <a href="/" className="cursor-pointer hover:opacity-75 transition-opacity inline-flex items-center justify-center">
          <img
            src="/assets/header.svg"
            alt="The Paper Portfolio"
            className="h-[20px] w-auto object-contain select-none pointer-events-none"
          />
        </a>

        {/* Right: 2-line Hamburger Menu Trigger matching reference */}
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Open Menu"
          className="group flex flex-col justify-center items-center gap-[5px] p-1.5 focus:outline-none cursor-pointer"
        >
          <span className="w-[28px] h-[2px] bg-[#1d1d1b] transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span className="w-[28px] h-[2px] bg-[#1d1d1b] transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </header>

      {/* 2. "FEATURED WORK" Newspaper Banner + Stamp (.head-w matching reference) */}
      <div
        style={{
          width: '361.56px',
          marginTop: '17.19px',
          marginBottom: '35.36px',
        }}
        className="relative max-w-full mx-auto flex flex-col items-start px-[4.3px] select-none"
      >
        {/* Black Box 1: FEATURED (Authentic 352.94px x 121.81px) */}
        <div
          style={{
            width: '352.94px',
            height: '121.81px',
            padding: '11.79px 11.79px 3.93px 3.93px',
            backgroundColor: '#1d1d1b',
            color: '#cdc6be',
            boxSizing: 'border-box',
          }}
          className="overflow-hidden select-none"
        >
          <h1
            style={{
              fontFamily: 'Canopee, sans-serif',
              fontSize: '138.73px',
              lineHeight: '106.11px',
              letterSpacing: '-6.94px',
            }}
            className="uppercase font-normal m-0 p-0 text-left select-none"
          >
            Featured
          </h1>
        </div>

        {/* Black Box 2: WORK (Authentic 254.47px x 111.03px) */}
        <div
          style={{
            width: '254.47px',
            height: '111.03px',
            marginTop: '7.86px',
            padding: '11.79px 11.79px 0px 7.86px',
            backgroundColor: '#1d1d1b',
            color: '#cdc6be',
            boxSizing: 'border-box',
          }}
          className="overflow-hidden select-none"
        >
          <h1
            style={{
              fontFamily: 'Canopee, sans-serif',
              fontSize: '129.69px',
              lineHeight: '98.25px',
              letterSpacing: '-6.48px',
            }}
            className="uppercase font-normal m-0 p-0 text-left select-none"
          >
            <span>W</span>
            <span style={{ fontFamily: '"Domaine Display", serif', letterSpacing: '-0.07em' }}>o</span>
            <span>rk</span>
          </h1>
        </div>

        {/* Postage Stamp: Absolute position at top of WORK (aligned with bottom of FEATURED) */}
        <div
          style={{
            position: 'absolute',
            top: '121.38px',
            left: '260.58px',
            width: '98.25px',
            height: '122.47px',
          }}
          className="pointer-events-none select-none flex items-center justify-center overflow-hidden"
        >
          <img
            src="/assets/stamp.png"
            alt="Miranda Stamp"
            draggable={false}
            className="w-full h-full object-contain select-none pointer-events-none"
          />
        </div>
      </div>

      {/* 3. Project List with Horizontal Dividers (.brand-wrap__touch, 78.58px row step) */}
      <div
        style={{
          width: '361.56px',
        }}
        className="max-w-full mx-auto flex flex-col px-[4.3px]"
      >
        {MOBILE_PROJECTS.map((project) => (
          <div
            key={project.id}
            style={{
              paddingBottom: '7.86px',
              marginBottom: '11.79px',
              borderBottom: '1px solid rgba(29, 29, 27, 0.4)',
            }}
            className="w-full select-none"
          >
            <Link
              href={project.href}
              style={{ height: '57.94px' }}
              className="w-full flex items-center justify-start hover:bg-[#1d1d1b]/5 transition-colors cursor-pointer select-none"
            >
              {/* Project Thumbnail (70.73px x 51.08px, NO border) */}
              <div
                style={{
                  width: '70.73px',
                  height: '51.08px',
                }}
                className="overflow-hidden shrink-0 bg-[#806454] select-none"
              >
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="lazy"
                />
              </div>

              {/* Project Info (.brand-wrapper) */}
              <div
                style={{
                  marginLeft: '15.72px',
                  height: '57.94px',
                }}
                className="flex-1 flex flex-col justify-start min-w-0"
              >
                {/* SVG brand title */}
                {project.svgTitle ? (
                  <div style={{ height: '31.44px' }} className="flex items-center shrink-0">
                    <img
                      src={project.svgTitle}
                      alt={project.name}
                      className="h-full w-auto max-w-[210px] object-contain object-left select-none pointer-events-none"
                    />
                  </div>
                ) : (
                  <h3
                    style={{ fontFamily: 'Canopee, sans-serif' }}
                    className="text-[28px] leading-none text-[#1d1d1b] uppercase font-normal truncate m-0 p-0"
                  >
                    {project.name}
                  </h3>
                )}

                {/* Sub-row: New Badge + Year (.div-block-53) */}
                <div style={{ marginTop: '3.93px' }} className="flex items-center">
                  {project.isNew && (
                    <div
                      style={{
                        backgroundColor: '#c03f13',
                        padding: '1.965px 3.93px 1.179px',
                        marginRight: '7.86px',
                      }}
                      className="inline-flex items-center justify-center shrink-0"
                    >
                      <span
                        style={{
                          fontFamily: 'Canopee, sans-serif',
                          fontSize: '15.72px',
                          lineHeight: '15.72px',
                          color: '#cdc6be',
                        }}
                        className="uppercase select-none"
                      >
                        New
                      </span>
                    </div>
                  )}
                  <span
                    style={{
                      fontFamily: '"Editorial New", sans-serif',
                      fontSize: '13.76px',
                      lineHeight: '11.79px',
                      color: '#1d1d1b',
                    }}
                    className="font-light select-none"
                  >
                    {project.year}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* 4. "LET'S TALK!" Section matching reference */}
      <div className="w-[361.56px] max-w-full mx-auto px-[4.3px] pt-12 pb-16 flex flex-col items-start border-t border-[#1d1d1b]/35 mt-6">
        <h2 className="font-condensed text-[32vw] leading-[0.78] text-[#1d1d1b] uppercase tracking-[-0.05em] font-normal m-0 p-0 text-left">
          Let&apos;s<br />Talk!
        </h2>
        <p className="font-editorial text-[6.2vw] font-light leading-[1.2] text-[#1d1d1b] text-left mt-4 tracking-[-0.02em]">
          Are you looking for an eye-catcher design? Let&apos;s create something great together.
        </p>
        <div className="font-editorial text-[3.8vw] text-[#1d1d1b] text-left mt-3 tracking-[-0.01em]">
          <span className="font-condensed text-[4.2vw] uppercase mr-1">AVAILABILITY</span> — February 2026
        </div>
        <div className="w-full mt-8">
          <a
            href="mailto:info@niccolomiranda.com"
            className="w-full h-[18vw] min-h-[64px] max-h-[90px] flex items-center justify-center border border-[#1d1d1b]/40 rounded-[50%] bg-transparent hover:bg-[#1d1d1b] hover:text-[#cdc6be] text-[#1d1d1b] transition-all cursor-pointer"
          >
            <span className="font-condensed text-[7vw] leading-none uppercase tracking-[-0.03em] font-normal">
              Email Me
            </span>
          </a>
        </div>
      </div>

      {/* Unified Newspaper Footer */}
      <PaperFooter />
    </div>
  );
}
