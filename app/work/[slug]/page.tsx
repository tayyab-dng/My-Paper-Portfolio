import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS_MAP, ProjectData } from '@/lib/projectsData';
import LiveMarqueeHeadline from '@/components/LiveMarqueeHeadline';
import PaperFooter from '@/components/PaperFooter';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(PROJECTS_MAP).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS_MAP[slug];
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `Miranda — ${project.name}`,
    description: project.desc,
  };
}

const TAG_SVG_MAP: Record<string, string> = {
  ECOMMERCE: '/assets/tags/ecommerce.svg',
  FASHION: '/assets/tags/fashion.svg',
  DIGITAL: '/assets/tags/digital.svg',
  PORTFOLIO: '/assets/tags/portfolio.svg',
  ARCHITECTURE: '/assets/tags/architecture.svg',
  CORPORATE: '/assets/tags/corporate.svg',
  NFT: '/assets/tags/nft.svg',
  MUSIC: '/assets/tags/music.svg',
  CINEMA: '/assets/tags/cinema.svg',
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project: ProjectData | undefined = PROJECTS_MAP[slug] || PROJECTS_MAP['wow-concept'];

  if (!project) {
    notFound();
  }

  const projectKeys = Object.keys(PROJECTS_MAP);
  const currentIndex = projectKeys.indexOf(slug);
  const defaultPrev = PROJECTS_MAP[projectKeys[(currentIndex - 1 + projectKeys.length) % projectKeys.length]] || PROJECTS_MAP['om-swami'];
  const defaultNext = PROJECTS_MAP[projectKeys[(currentIndex + 1) % projectKeys.length]] || PROJECTS_MAP['the-roger-hub'];

  const prevProject = (project.prevSlug && PROJECTS_MAP[project.prevSlug]) || defaultPrev;
  const nextProject = (project.nextSlug && PROJECTS_MAP[project.nextSlug]) || defaultNext;

  const tagSvgs = project.categories
    .map((c) => TAG_SVG_MAP[c.toUpperCase()])
    .filter(Boolean);
  if (tagSvgs.length === 0) {
    tagSvgs.push('/assets/tags/portfolio.svg');
  }

  return (
    <div className="relative w-full min-h-screen bg-[#cdc6be] text-[#1d1d1b] select-none overflow-x-hidden font-editorial">
      <style>{`
        /* Authentic Niccolò Miranda Project Hero Styles */
        .case-intro {
          width: 100%;
          height: 100vh;
          position: relative;
        }

        .cover {
          width: 100%;
          height: 100vh;
          text-align: center;
          position: absolute;
          overflow: hidden;
        }

        .c-inner.blend {
          width: 100%;
          height: 100%;
          background-color: #cdc6be;
          background-position: 50% 35%;
          background-size: cover;
          position: relative;
        }

        /* Desktop Ripped Fold */
        .ripped-wrap {
          position: absolute;
          top: 60%;
          bottom: auto;
          left: 0;
          right: 0;
          pointer-events: none;
        }

        .c-ripped {
          z-index: 1;
          width: 100%;
          height: 60vw;
          background-image: url('/assets/patch.svg');
          background-position: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          top: auto;
          bottom: -43.2vw;
          left: 0;
          right: 0;
          overflow: hidden;
        }

        .scratch {
          z-index: 2;
          width: 102%;
          max-width: none;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: none;
        }

        .pr-info {
          z-index: 10;
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          padding-top: 50vh;
          display: flex;
          position: absolute;
          top: auto;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: none;
        }

        .pr-title__wrap {
          width: 90vw;
          position: relative;
          bottom: 15vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .pr-title {
          width: 100%;
          max-width: none;
          display: inline-block;
        }

        .pr-title__bar {
          width: 100%;
          align-items: center;
          padding: 0.8vw 3vw;
          display: flex;
          position: absolute;
          top: auto;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: auto;
        }

        .divider {
          width: 96%;
          height: 1px;
          background-color: rgba(29, 29, 27, 0.4);
          margin-left: auto;
          margin-right: auto;
          position: absolute;
          top: 0;
          bottom: auto;
          left: 0;
          right: 0;
        }

        .bar-wrap.left {
          flex: 1;
          margin-top: 2vh;
          display: flex;
          align-items: center;
        }

        .bar-client {
          display: flex;
          align-items: center;
          gap: 0.4vw;
        }

        .bar-client .text.disc.bold {
          font-weight: 500;
          font-size: 2vh;
          color: #1d1d1b;
        }

        .bar-client .div-block-51 .text.disc {
          font-weight: 400;
          font-size: 2vh;
          color: #1d1d1b;
        }

        .bar-wrap.center {
          flex: 0 auto;
          justify-content: center;
          align-items: center;
          display: flex;
          margin-top: 2vh;
        }

        .bar-field__wrap {
          height: 3.33vh;
          margin-left: 1vh;
          margin-right: 1vh;
          display: flex;
          align-items: center;
        }

        .bar-field {
          height: 100%;
          max-width: none;
          object-fit: contain;
        }

        .bar-wrap.ri {
          flex: 1;
          justify-content: flex-end;
          align-items: center;
          margin-top: 2vh;
          display: flex;
          gap: 1.5vh;
        }

        .bar-year {
          display: flex;
          align-items: center;
          gap: 0.3vw;
          font-size: 2vh;
          color: #1d1d1b;
        }

        .bar-trigger {
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bar-trigger .explore {
          width: 2.2vh;
          height: 2.2vh;
          object-fit: contain;
        }

        .back-all {
          z-index: 30;
          cursor: pointer;
          background-color: #cdc6be;
          border: 1px solid #1d1d1b;
          border-radius: 0.6vw;
          justify-content: center;
          align-items: center;
          padding: 0.2vw 1vw;
          display: inline-flex;
          position: absolute;
          top: 2vw;
          left: 2vw;
          text-decoration: none;
          color: #1d1d1b;
          white-space: nowrap;
          transition: background-color 0.2s, color 0.2s;
        }

        .back-all:hover {
          background-color: #1d1d1b;
          color: #cdc6be;
        }

        .button-ico {
          margin-right: 0.8vw;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .button-ico .img {
          width: 1.3vw;
          height: 1.3vw;
          object-fit: contain;
        }

        .button-text {
          text-transform: uppercase;
          margin-top: 0.2vw;
          font-family: 'Canopee', sans-serif;
          font-size: 1.3vw;
          font-weight: 400;
          line-height: 1.3vw;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        /* ------------------------------------------ */
        /* AUTHENTIC CASE BODY & LOWER FOLD STYLES    */
        /* ------------------------------------------ */
        .case-wrap {
          width: 100%;
          position: relative;
        }

        .case-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-top: 1vw;
          padding: 3vw 3vw 0 3vw;
          position: relative;
        }

        .pr-info-w {
          width: 48%;
        }

        .has-dropcap {
          font-family: 'Editorial New', Georgia, serif;
          font-size: 2.25vw;
          line-height: 2.7vw;
          text-align: left;
          font-weight: 300;
          letter-spacing: -0.01em;
          color: #1d1d1b;
          margin: 0;
        }

        .has-dropcap::first-letter {
          font-family: 'Canopee', sans-serif;
          font-feature-settings: 'ss03';
          float: left;
          font-size: 7vw;
          line-height: 5vw;
          margin: 0.7vw 1vw 1vw 0vw;
          background-color: #1d1d1b;
          color: #cdc6be;
          padding: 0.75vw 0.4vw 0.5vw 0.5vw;
        }

        .cta-h.work {
          width: 42%;
          height: 15vw;
          background-color: #d3cbc2;
          border: 1px solid rgba(29, 29, 27, 0.5);
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          margin-top: 2vw;
          display: flex;
          text-decoration: none;
          overflow: hidden;
          position: relative;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .cta-h.work:hover {
          background-color: #cdc6be;
          border-color: #1d1d1b;
        }

        .cta-text.work {
          font-family: 'Canopee', sans-serif;
          font-size: 6vw;
          line-height: 6vw;
          text-transform: uppercase;
          letter-spacing: -0.04em;
          color: #1d1d1b;
        }

        .arrow.case {
          width: 16vw;
          margin-left: 1.5vw;
        }

        .case-extra {
          margin-top: 5vw;
          margin-bottom: 4vw;
          padding-left: 2vw;
          padding-right: 2vw;
          display: flex;
          position: relative;
        }

        .ex-col {
          width: 42vw;
          flex: 0 0 auto;
        }

        .col-e.dash {
          padding: 2.5vw 2vw 2.5vw 2.5vw;
          display: inline-block;
          width: 100%;
          background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23333' stroke-width='2.5' stroke-dasharray='11%2c11' stroke-dashoffset='30' stroke-linecap='square'/%3e%3c/svg%3e");
          border-radius: 9px;
        }

        .p-h2 {
          font-family: 'Canopee', sans-serif;
          text-transform: uppercase;
          font-weight: 400;
          letter-spacing: -0.04em;
          margin: 0;
          padding: 0;
        }

        .p-h2.b {
          font-size: 19vw;
          line-height: 13vw;
          display: block;
        }

        .p-h2.bg {
          color: #cdc6be;
          background-color: #1d1d1b;
          padding: 2.5vw 1.5vw 0.7vw 1vw;
          font-size: 17vw;
          line-height: 11vw;
          display: inline-block;
          margin-top: 1vw;
        }

        .f-stamp.p {
          width: 11vw;
          position: relative;
          left: 1.1vw;
          height: auto;
        }

        .f-span.space.sp-2 {
          font-family: 'Domaine Display', serif;
          font-style: italic;
          font-weight: 400;
        }

        .f-span.close {
          font-family: 'Domaine Display', serif;
          font-style: italic;
        }

        .case-desc.wrap {
          margin-top: 3vw;
        }

        .pw-wrap.blend {
          flex: 1;
          margin-left: 4vw;
          position: relative;
          overflow: hidden;
          background-color: #ece9e6;
          border: 1px solid #000;
          border-radius: 0.3vw;
          min-height: 68vw;
        }

        .pw-inner {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
        }

        .pw-img.blend {
          width: 100%;
          height: 100%;
          background-position: 50% 50%;
          background-repeat: no-repeat;
          background-size: cover;
          background-blend-mode: multiply;
        }

        .gallery-open {
          cursor: pointer;
          background-color: #cdc6be;
          border: 1px solid #1d1d1b;
          border-radius: 0.6vw;
          justify-content: center;
          align-items: center;
          padding: 0.6vw 1.5vw;
          display: flex;
          position: absolute;
          bottom: 2vw;
          right: 2vw;
          text-decoration: none;
          color: #1d1d1b;
          z-index: 10;
          transition: background-color 0.2s, color 0.2s;
        }

        .gallery-open:hover {
          background-color: #1d1d1b;
          color: #cdc6be;
        }

        .gallery-open .button-ico {
          margin-right: 0.8vw;
          display: flex;
          align-items: center;
        }

        .gallery-open .button-ico .img {
          width: 1.3vw;
          height: 1.3vw;
          object-fit: contain;
        }

        .gallery-open .button-text {
          font-family: 'Canopee', sans-serif;
          text-transform: uppercase;
          font-size: 1.3vw;
          line-height: 1.3vw;
        }

        /* NEXT PROJECTS SECTION */
        .sidebar.f {
          border-top: 1px solid #1d1d1b;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: stretch;
          margin-top: 5vw;
          padding-top: 3vw;
        }

        .s-grid.left {
          display: flex;
          justify-content: center;
          width: 29vw;
        }

        .item.fl {
          width: 29vw;
          margin-right: 4vw;
        }

        .item-link {
          width: 100%;
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .item-img-w {
          width: 28vw;
          border: 1px solid #1d1d1b;
          overflow: hidden;
        }

        .item-img {
          width: 100%;
          height: 11vw;
          object-fit: cover;
          display: block;
        }

        .item-block {
          margin-top: 1vw;
        }

        .item-tw {
          height: 1.5vw;
          display: flex;
          align-items: center;
        }

        .item-t {
          height: 100%;
          width: auto;
          max-width: none;
          display: block;
          object-fit: contain;
        }

        .item-desc {
          max-width: 95%;
          letter-spacing: -0.01em;
          margin-top: 1vw;
          font-family: 'Editorial New', Georgia, serif;
          font-size: 1.2vw;
          font-weight: 300;
          line-height: 1.5vw;
          color: #1d1d1b;
        }

        .headline.f {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 0 3vw;
          width: 29vw;
          position: relative;
          text-align: center;
        }

        .head-wrap {
          position: relative;
          display: inline-block;
          text-decoration: none;
          color: inherit;
        }

        .head-title.w {
          letter-spacing: -0.05em;
          text-transform: uppercase;
          font-family: 'Canopee', sans-serif;
          font-size: 4.5vw;
          font-weight: 400;
          line-height: 4.5vw;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .head-embed {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 115%;
          height: 140%;
          pointer-events: none;
          z-index: 1;
        }

        .head-embed #headline .doodle-hover {
          fill: none;
          stroke: #1d1d1b;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke-dashoffset: 1100;
          stroke-dasharray: 1100;
          transition: stroke-dashoffset 600ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
        }

        .head-wrap:hover .head-embed #headline .doodle-hover {
          stroke-dashoffset: 0;
        }

        .head-desc {
          letter-spacing: -0.03em;
          margin-top: 1vw;
          font-size: 2.6vw;
          line-height: 3vw;
          font-family: 'Editorial New', Georgia, serif;
          color: #1d1d1b;
          text-align: center;
        }

        .head-caption {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2vw;
          gap: 0.3vw;
        }

        .item-title.cap {
          font-family: 'Canopee', sans-serif;
          font-size: 1.4vw;
          line-height: 1.4vw;
          text-transform: uppercase;
        }

        .item-desc.cap {
          font-family: 'Editorial New', Georgia, serif;
          font-size: 1.2vw;
          line-height: 1.4vw;
          margin-left: 0.2vw;
        }

        .head-mask {
          position: absolute;
          top: -2vw;
          right: -1vw;
        }

        .head-ico {
          width: 3.5vw;
          transform: rotate(-40deg);
        }

        .s-grid {
          display: flex;
          justify-content: center;
          width: 29vw;
        }

        .item.fr {
          width: 29vw;
          margin-left: 4vw;
        }

        .new-w-2.sp {
          background-color: #c03f13;
          border-radius: 0.2vw;
          margin-left: 0.5vw;
          padding: 0.1vw 0.25vw 0;
          display: inline-flex;
          align-items: center;
        }

        .new-2 {
          color: #cdc6be;
          font-family: 'Canopee', sans-serif;
          font-size: 1.2vw;
          font-weight: 400;
          line-height: 1.5vw;
          text-transform: uppercase;
        }

        /* FOOTER MARQUEE & BOTTOM BAR */
        .footer {
          padding: 3vw 2vw 2vw;
          position: relative;
          width: 100%;
        }

        .footer .marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
          border-top: 1px solid rgba(29, 29, 27, 0.5);
          border-bottom: 1px solid rgba(29, 29, 27, 0.5);
          height: 11vw;
          display: flex;
          align-items: center;
        }

        .marquee--inner {
          display: flex;
          white-space: nowrap;
          animation: bettermarquee 22s linear infinite;
        }

        .marquee--inner:hover {
          animation-play-state: paused;
        }

        @keyframes bettermarquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        .marquee-content {
          display: flex;
          align-items: center;
          margin-right: 4vw;
          flex-shrink: 0;
        }

        .f-news {
          font-family: 'Editorial New', Georgia, serif;
          font-style: italic;
          font-size: 6vw;
          line-height: 8vw;
          font-weight: 300;
          letter-spacing: -0.04em;
          margin: 0;
          white-space: nowrap;
          color: #1d1d1b;
        }

        .marquee-link {
          background-color: #1d1d1b;
          color: #cdc6be;
          text-decoration: none;
          padding: 0.2vw 0.8vw 0.4vw;
          margin-left: 1.5vw;
          border-radius: 0.3vw;
          display: inline-flex;
          align-items: center;
          transition: opacity 0.2s;
        }

        .marquee-link:hover {
          opacity: 0.85;
        }

        .marquee-text {
          font-family: 'Canopee', sans-serif;
          font-size: 3.8vw;
          line-height: 3.6vw;
          text-transform: uppercase;
          color: #cdc6be;
        }

        .f-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2vw;
          padding: 0 1vw;
          width: 100%;
        }

        .f-col.left {
          display: flex;
          align-items: center;
          gap: 1vw;
        }

        .f-title {
          font-family: 'Canopee', sans-serif;
          font-size: 1.5vw;
          line-height: 1.5vw;
          text-transform: uppercase;
        }

        .f-year {
          font-family: 'Editorial New', Georgia, serif;
          font-size: 1.3vw;
        }

        .f-stamp {
          width: 1.7vw;
          height: auto;
        }

        .f-link {
          font-family: 'Editorial New', Georgia, serif;
          font-size: 1.3vw;
          color: #1d1d1b;
          text-decoration: none;
        }

        .f-block {
          display: flex;
          align-items: center;
          gap: 0.6vw;
        }

        .f-li {
          font-family: 'Canopee', sans-serif;
          font-size: 1.3vw;
          line-height: 1.3vw;
          text-transform: uppercase;
          color: #1d1d1b;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: opacity 0.2s;
        }

        .f-li:hover {
          opacity: 0.6;
        }

        .f-li.ci {
          font-family: 'Editorial New', Georgia, serif;
        }

        /* ------------------------------------------ */
        /* MOBILE MEDIA QUERY (<= 768px)              */
        /* ------------------------------------------ */
        @media screen and (max-width: 768px) {
          .ripped-wrap {
            top: 60%;
          }

          .c-ripped {
            height: 140vw;
            bottom: -104.8vw;
          }

          .scratch {
            width: 190%;
            top: -40.6vw;
            left: -44.6vw;
            bottom: auto;
          }

          .pr-title__wrap {
            width: 80vw;
            bottom: 14vh;
          }

          .pr-title__bar {
            padding: 3.5vw 4vw 4vw 4vw;
          }

          .divider {
            width: 92%;
          }

          .bar-wrap.left {
            flex: 0 auto;
            margin-top: 0.5vw;
            display: flex;
          }

          .bar-client {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
          }

          .bar-client .text.disc.bold {
            font-size: 3.6vw;
            line-height: 4.2vw;
          }

          .bar-client .div-block-51 .text.disc {
            font-size: 3.6vw;
            line-height: 4.2vw;
          }

          .bar-wrap.center {
            flex: 1;
            margin-top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .bar-field__wrap {
            height: 6.2vw;
            margin-left: 1vw;
            margin-right: 1vw;
          }

          .bar-field__wrap.second {
            display: none;
          }

          .bar-wrap.ri {
            flex: 0 auto;
            flex-direction: column;
            align-items: flex-end;
            margin-top: 0.5vw;
            gap: 1vw;
          }

          .bar-year {
            margin-right: 0;
            gap: 0.2vw;
            font-size: 3.6vw;
            line-height: 4.2vw;
          }

          .bar-trigger {
            margin-top: 0.5vw;
            margin-bottom: 0;
          }

          .bar-trigger .explore {
            width: 4.8vw;
            height: 4.8vw;
          }

          .back-all {
            width: auto;
            border-radius: 1.2vw;
            padding: 2vw 3vw;
            top: 4vw;
            left: 3vw;
            white-space: nowrap;
          }

          .button-ico {
            margin-right: 2vw;
          }

          .button-ico .img {
            width: 3.8vw;
            height: 3.8vw;
          }

          .button-text.back {
            font-size: 4.3vw;
            line-height: 4.3vw;
            margin-top: 0.3vw;
            white-space: nowrap;
          }

          /* Case Info Mobile */
          .case-info {
            flex-direction: column;
            padding: 4vw 4vw 0 4vw;
          }

          .pr-info-w {
            width: 100%;
          }

          .has-dropcap {
            font-size: 6vw;
            line-height: 7.5vw;
            letter-spacing: -0.02em;
          }

          .has-dropcap::first-letter {
            font-size: 20vw;
            line-height: 17vw;
            margin: 1vw 2vw 1vw 0vw;
            padding: 1.5vw 0.8vw 0.5vw 1vw;
          }

          .cta-h.work {
            width: 100%;
            height: 28vw;
            margin-top: 6vw;
          }

          .cta-text.work {
            font-size: 13vw;
            line-height: 9vw;
          }

          .arrow.case {
            display: none;
          }

          /* Case Extra Mobile */
          .case-extra {
            flex-direction: column;
            padding-left: 4vw;
            padding-right: 4vw;
            margin-top: 5vw;
            margin-bottom: 4vw;
          }

          .ex-col {
            width: 100%;
          }

          .col-e.dash {
            padding: 7vw 6vw 7vw 5vw;
          }

          .p-h2.b {
            font-size: 44vw;
            line-height: 30vw;
          }

          .p-h2.bg {
            font-size: 44vw;
            line-height: 31vw;
            padding-top: 5vw;
          }

          .f-stamp.p {
            width: 27vw;
            bottom: 3vw;
            left: 3.4vw;
          }

          .case-desc.wrap {
            margin-top: 8vw;
          }

          .pw-wrap.blend {
            width: 100%;
            height: 90vw;
            min-height: 90vw;
            flex: 0 auto;
            margin-top: 5vw;
            margin-left: 0;
          }

          .gallery-open {
            border-radius: 1.2vw;
            padding: 2vw 3vw;
            bottom: 4vw;
            right: 4vw;
          }

          .gallery-open .button-ico {
            margin-right: 2vw;
          }

          .gallery-open .button-ico .img {
            width: 3.8vw;
            height: 3.8vw;
          }

          .gallery-open .button-text {
            font-size: 4.3vw;
            line-height: 4.3vw;
          }

          /* Next Projects Mobile */
          .sidebar.f {
            flex-direction: column;
            padding-top: 11vw;
            padding-left: 4vw;
            padding-right: 4vw;
          }

          .s-grid.left {
            display: none;
          }

          .headline.f {
            width: 100%;
            align-items: flex-start;
            padding: 0;
            text-align: left;
          }

          .head-wrap {
            width: 100%;
          }

          .head-title.w {
            font-size: 27vw;
            line-height: 21vw;
            text-align: left;
            letter-spacing: -0.05em;
          }

          .head-embed {
            display: none;
          }

          .head-desc {
            font-size: 8vw;
            line-height: 8vw;
            margin-top: 5vw;
            text-align: left;
          }

          .head-caption {
            margin-top: 5vw;
            justify-content: flex-start;
          }

          .item-title.cap {
            font-size: 4vw;
            line-height: 4vw;
          }

          .item-desc.cap {
            font-size: 4vw;
            line-height: 4vw;
            margin-left: 1vw;
          }

          .s-grid {
            width: 100%;
            margin-top: 5vw;
          }

          .item.fr {
            width: 100%;
            margin-left: 0;
          }

          .item-img-w {
            width: 90vw;
          }

          .item-img {
            width: 100%;
            height: 35vw;
          }

          .item-tw {
            height: 7vw;
          }

          .item-desc {
            max-width: 98%;
            margin-top: 4vw;
            font-size: 4.5vw;
            line-height: 4.8vw;
          }

          .new-w-2.sp {
            padding: 0.5vw 1vw;
            border-radius: 0.5vw;
          }

          .new-2 {
            font-size: 3.5vw;
            line-height: 3.5vw;
          }

          /* Footer Mobile */
          .footer {
            padding: 8vw 4vw 6vw;
          }

          .footer .marquee {
            height: 22vw;
          }

          .f-news {
            font-size: 12vw;
            line-height: 11vw;
          }

          .marquee-link {
            padding: 0.5vw 2vw 1vw;
            margin-left: 3vw;
            border-radius: 0.8vw;
          }

          .marquee-text {
            font-size: 10vw;
            line-height: 9vw;
          }

          .f-info {
            margin-top: 5vw;
            padding: 0;
          }

          .f-title, .f-year {
            display: none;
          }

          .f-stamp {
            width: 6vw;
          }

          .f-link {
            font-size: 4vw;
          }

          .f-li {
            font-size: 3.8vw;
            line-height: 3.8vw;
          }

          .f-block {
            gap: 1.5vw;
          }
        }
      `}</style>

      {/* 1. HERO FOLD SECTION (100vh matching authentic layout) */}
      <section className="case-intro relative w-full h-screen overflow-hidden">
        {/* Cover Container */}
        <div className="cover absolute inset-0 w-full h-full text-center overflow-hidden">
          {/* Blend Hero Background Visual */}
          <div
            className="c-inner blend w-full h-full"
            style={{
              backgroundImage: `url('${project.heroBg}')`,
              backgroundPosition: '50% 35%',
              backgroundSize: 'cover',
              backgroundColor: '#cdc6be',
            }}
          />

          {/* Authentic Ripped Paper Overlay */}
          <div className="ripped-wrap pointer-events-none">
            <div className="c-ripped" />
            <img
              src="/assets/scratch.png"
              alt=""
              draggable={false}
              className="scratch select-none"
            />
          </div>

          {/* Project Info: Huge Title + Bottom Metadata Bar */}
          <div className="pr-info">
            {/* Huge Project Title Logo */}
            <div className="pr-title__wrap">
              {project.svgTitle ? (
                <img
                  src={project.svgTitle}
                  alt={project.name}
                  draggable={false}
                  className="pr-title select-none pointer-events-none"
                />
              ) : (
                <h1 className="font-condensed text-[12vw] leading-none uppercase tracking-[-0.04em] text-[#1d1d1b]">
                  {project.name}
                </h1>
              )}
            </div>

            {/* Bottom Metadata Bar */}
            <div className="pr-title__bar">
              {/* Ruled divider line */}
              <div className="divider" />

              {/* Left: Client */}
              <div className="bar-wrap left">
                <div className="bar-client">
                  <div className="text disc bold font-editorial">Client:</div>
                  <div className="div-block-51">
                    <div className="text disc font-editorial">{project.client}</div>
                  </div>
                </div>
              </div>

              {/* Center: Category Badges */}
              <div className="bar-wrap center">
                {tagSvgs[0] && (
                  <div className="bar-field__wrap">
                    <img
                      src={tagSvgs[0]}
                      alt="Category"
                      draggable={false}
                      className="bar-field select-none"
                    />
                  </div>
                )}
                {tagSvgs[1] && (
                  <div className="bar-field__wrap second">
                    <img
                      src={tagSvgs[1]}
                      alt="Category"
                      draggable={false}
                      className="bar-field select-none"
                    />
                  </div>
                )}
              </div>

              {/* Right: Year + Down Arrow Explore Button */}
              <div className="bar-wrap ri">
                <div className="bar-year">
                  <div className="text disc font-editorial">©</div>
                  <div className="text disc font-editorial">{project.year}</div>
                </div>
                <a href="#story" aria-label="Explore case study" className="bar-trigger">
                  <img
                    src="/assets/arrow-down.svg"
                    alt=""
                    draggable={false}
                    className="explore select-none"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Top-Left Authentic "BACK ALL" Button */}
        <Link
          href="/work"
          aria-label="Back to all work"
          className="back-all"
        >
          <div className="button-ico">
            <img
              src="/assets/back-all.svg"
              alt=""
              draggable={false}
              className="img select-none"
            />
          </div>
          <div className="button-text back">
            BACK ALL
          </div>
        </Link>
      </section>

      {/* 2. AUTHENTIC CASE STUDY BODY WRAP */}
      <section id="story" className="case-wrap">
        {/* Intro Section: Dropcap Paragraph + Live Site Oval Button */}
        <div className="case-info">
          <div className="divider" />
          <div className="pr-info-w">
            <h5 className="has-dropcap">
              {project.desc}
            </h5>
          </div>

          <a
            href={project.liveUrl || 'https://wowconcept.com/en/women'}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Live Site"
            draggable={false}
            className="cta-h work"
          >
            <div className="cta-text work">Live Site</div>
            <img
              src="/assets/arrow-long.svg"
              alt=""
              draggable={false}
              className="arrow case"
            />
          </a>
        </div>

        {/* Extra Section: The Work Story Dashed Box + Blend Visual */}
        <div className="case-extra">
          <div className="ex-col">
            <div className="col-e dash">
              <div className="flex float items-center">
                <h2 className="p-h2 b">The</h2>
                <img
                  src="/assets/stamp.png"
                  alt="Miranda Stamp"
                  draggable={false}
                  className="f-stamp p"
                />
              </div>
              <h2 className="p-h2 b">
                <span className="space-2">W</span>
                <span className="f-span space sp-2">o</span>
                <span>rk</span>
              </h2>
              <h2 className="p-h2 bg">
                <span>St</span>
                <span className="f-span close">o</span>
                <span>ry</span>
              </h2>
              <div className="case-desc wrap">
                <h5 className="has-dropcap">
                  {project.story}
                </h5>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container + Gallery Open Button */}
          <div className="pw-wrap blend">
            <div className="pw-inner">
              <div
                className="pw-img blend"
                style={{
                  backgroundImage: `url('${project.heroBg || project.thumbnail}')`,
                }}
              />
            </div>
            <div id="gallery-open" className="gallery-open">
              <div className="button-ico">
                <img
                  src="/assets/gallery.svg"
                  alt=""
                  draggable={false}
                  className="img"
                />
              </div>
              <div className="button-text">
                <span className="f-span space">G</span>allery
              </div>
            </div>
          </div>
        </div>

        {/* 3. AUTHENTIC NEXT PROJECTS SECTION */}
        <div className="sidebar f">
          {/* Left Column (Desktop Only): Previous Project Card */}
          <div className="s-grid left">
            <div className="item fl">
              <Link
                href={`/work/${prevProject.slug}`}
                draggable={false}
                className="item-link"
              >
                <div className="item-img-w">
                  <img
                    src={prevProject.thumbnail}
                    alt={prevProject.name}
                    draggable={false}
                    className="item-img"
                  />
                </div>
                <div className="item-block">
                  <div className="item-tw">
                    {prevProject.svgTitle ? (
                      <img
                        src={prevProject.svgTitle}
                        alt={prevProject.name}
                        draggable={false}
                        className="item-t"
                      />
                    ) : (
                      <span className="font-canopee text-[1.4vw] uppercase">{prevProject.name}</span>
                    )}
                    {prevProject.isNew && (
                      <div className="new-w-2 sp">
                        <div className="new-2">New</div>
                      </div>
                    )}
                  </div>
                  <div className="item-desc">{project.prevDesc || prevProject.desc}</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Center Column: NEXT PROJECTS! Headline + Oval Doodle */}
          <div className="headline f">
            <a
              href="mailto:info@niccolomiranda.com?subject=Project Inquiry"
              className="head-wrap"
            >
              <div className="head-title w">
                Next pr<span className="f-span">o</span>je<span className="f-span">c</span>ts!
              </div>
              <div className="head-embed">
                <svg
                  id="headline"
                  viewBox="0 0 500 146"
                >
                  <ellipse
                    className="head doodle-hover"
                    cx="250"
                    cy="72.9"
                    rx="242.4"
                    ry="68.5"
                  />
                </svg>
              </div>
            </a>
            <div className="head-desc">
              A featured work <br />
              selection – spanning<br />
              the last few years.
            </div>
            <div className="head-caption">
              <div className="item-title cap">TIP! </div>
              <div className="item-desc cap">Click to discover next</div>
            </div>
            <div className="head-mask">
              <img
                src="/assets/web-clip.png"
                alt=""
                draggable={false}
                className="head-ico select-none"
              />
            </div>
          </div>

          {/* Right Column: Next Project Card (The Roger Hub) */}
          <div className="s-grid">
            <div className="item fr">
              <Link
                href={`/work/${nextProject.slug}`}
                draggable={false}
                className="item-link"
              >
                <div className="item-img-w">
                  <img
                    src={nextProject.thumbnail || '/assets/roger-hub.webp'}
                    alt={nextProject.name}
                    draggable={false}
                    className="item-img"
                  />
                </div>
                <div className="item-block por">
                  <div className="item-tw">
                    {nextProject.svgTitle ? (
                      <img
                        src={nextProject.svgTitle}
                        alt={nextProject.name}
                        draggable={false}
                        className="item-t"
                      />
                    ) : (
                      <span className="font-canopee text-[1.4vw] uppercase">{nextProject.name}</span>
                    )}
                    {nextProject.isNew && (
                      <div className="new-w-2 sp">
                        <div className="new-2">New</div>
                      </div>
                    )}
                  </div>
                  <div className="item-desc">{project.nextDesc || nextProject.desc}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* 4. UNIFIED FOOTER: MARQUEE + BOTTOM BAR */}
        <LiveMarqueeHeadline />
        <PaperFooter />
      </section>
    </div>
  );
}
