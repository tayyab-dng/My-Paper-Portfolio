'use client';

import React, { useEffect } from 'react';
import PaperHeader from '@/components/PaperHeader';
import LiveMarqueeHeadline from '@/components/LiveMarqueeHeadline';
import PaperFooter from '@/components/PaperFooter';
import { ABOUT_PAGE_HTML } from '@/lib/aboutPageHtml';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'Miranda — About';

    // Helper to dynamically load stylesheets without SSR hydration mismatches
    const loadCss = (href: string) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    };
    loadCss('/css/locomotive-scroll.min.css');
    loadCss('/css/webflow-about.css');

    // Helper to load external scripts dynamically
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = () => resolve();
        s.onerror = () => resolve();
        document.body.appendChild(s);
      });
    };

    let scrollInstance: any = null;

    const initEngine = async () => {
      // 1. Load Locomotive Scroll and ButterSlider UMD bundles
      await loadScript('/js/locomotive-scroll.min.js');
      await loadScript('/js/butter-slider.js');

      // 2. Initialize Locomotive Scroll on non-touch devices
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;

      if (!isTouch && (window as any).LocomotiveScroll && scrollContainer) {
        try {
          scrollInstance = new (window as any).LocomotiveScroll({
            el: scrollContainer,
            smooth: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
          });
          (window as any).locomotive = scrollInstance;

          // Re-calculate bounds whenever any image loads
          const imgs = scrollContainer.querySelectorAll('img');
          imgs.forEach((img) => {
            if (!img.complete) {
              img.addEventListener(
                'load',
                () => {
                  if (scrollInstance && scrollInstance.update) scrollInstance.update();
                },
                { once: true }
              );
            }
          });

          // Multi-stage update to guarantee smooth bounds with dynamic images & footer
          setTimeout(() => {
            if (scrollInstance && scrollInstance.update) scrollInstance.update();
          }, 300);
          setTimeout(() => {
            if (scrollInstance && scrollInstance.update) scrollInstance.update();
          }, 1000);
          setTimeout(() => {
            if (scrollInstance && scrollInstance.update) scrollInstance.update();
          }, 2500);
        } catch (e) {
          console.warn('LocomotiveScroll init error:', e);
        }
      }

      // 3. Initialize ButterSlider for horizontal physics dragging
      if ((window as any).butterSlider) {
        try {
          const sliders = (window as any).butterSlider.autoInit();
          if (sliders && sliders[0]) {
            sliders[0].smoothAmount = 1;
            sliders[0].setRelativePosition(window.innerWidth * (0.62 / sliders[0].dragSpeed));
            sliders[0].smoothAmount = 0.15;
          }
        } catch (e) {
          console.warn('ButterSlider init error:', e);
        }
      }

      // 4. Authentic Accordion Toggle Handler with Locomotive Scroll update
      const accordions = document.querySelectorAll('.aw1-title');
      accordions.forEach((el) => {
        if ((el as any)._hasAccordionListener) return;
        (el as any)._hasAccordionListener = true;

        el.addEventListener('click', (e) => {
          e.preventDefault();
          const item = el.closest('.aw1-item') as HTMLElement;
          if (!item) return;
          const outer = item.querySelector('.aw1-outer') as HTMLElement;
          const waypoint = item.querySelector('.aw1-waypoint') as HTMLElement;
          const explore = item.querySelector('.aw-explore') as HTMLElement;
          if (!outer) return;

          const isCurrentlyOpen = item.classList.contains('is-open');

          if (isCurrentlyOpen) {
            item.classList.remove('is-open');
            outer.style.transition = 'height 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
            outer.style.height = '0px';
            if (waypoint) waypoint.style.transform = 'translate3d(0, -100%, 0)';
            if (explore) {
              explore.style.transition = 'transform 0.4s ease';
              explore.style.transform = 'translate3d(0px, 0px, 0px) rotateZ(0deg)';
            }
            setTimeout(() => {
              outer.style.display = 'none';
              if ((window as any).locomotive) (window as any).locomotive.update();
            }, 400);
          } else {
            item.classList.add('is-open');
            outer.style.display = 'block';
            outer.style.height = '0px';
            outer.style.overflow = 'hidden';
            outer.style.transition = 'height 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
            if (waypoint) {
              waypoint.style.transition = 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
              waypoint.style.transform = 'translate3d(0, 0%, 0)';
            }

            // Force reflow and set target height
            const isMobile = window.innerWidth <= 767;
            const targetHeight = isMobile ? 660 : 330;

            requestAnimationFrame(() => {
              outer.style.height = `${targetHeight}px`;
              if (explore) {
                explore.style.transition = 'transform 0.4s ease';
                explore.style.transform = 'translate3d(0px, 0px, 0px) rotateZ(150deg)';
              }
            });

            setTimeout(() => {
              if ((window as any).locomotive) (window as any).locomotive.update();
            }, 450);
          }
        });
      });

      // 5. Authentic Publications Hover Interactions
      const pubLinks = document.querySelectorAll('.pub-link');
      pubLinks.forEach((link) => {
        if ((link as any)._hasHoverListener) return;
        (link as any)._hasHoverListener = true;

        const numbWrap = link.querySelector('.pub-numb__wrap') as HTMLElement;
        const trigger = link.querySelector('.pub-trigger') as HTMLElement;

        if (numbWrap) numbWrap.style.transition = 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)';
        if (trigger) trigger.style.transition = 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)';

        link.addEventListener('mouseenter', () => {
          if (numbWrap) numbWrap.style.transform = 'translate3d(0, -100%, 0)';
          if (trigger) trigger.style.transform = 'translate3d(0, 0, 0)';
        });
        link.addEventListener('mouseleave', () => {
          if (numbWrap) numbWrap.style.transform = 'translate3d(0, 0, 0)';
          if (trigger) trigger.style.transform = 'translate3d(0, 100%, 0)';
        });
      });
    };

    initEngine();

    return () => {
      if (scrollInstance && scrollInstance.destroy) {
        scrollInstance.destroy();
      }
    };
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="w-full min-h-screen bg-[#cdc6be] text-[#1d1d1b] relative selection:bg-[#1d1d1b] selection:text-[#cdc6be]"
    >
      {/* Fixed Paper Header with Amsterdam, NL */}
      <PaperHeader activeItem="ABOUT" isFixed={true} leftTitle="Amsterdam, NL" />

      {/* Main App Container for Virtual Smooth Scroll */}
      <main
        id="app"
        data-scroll-container
        suppressHydrationWarning
        className="app awards appear w-full"
        style={{
          backgroundColor: '#cdc6be',
          minHeight: '100vh',
          width: '100%',
        }}
      >
        <div
          className="about-full-engine-wrapper"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: ABOUT_PAGE_HTML }}
        />

        {/* Section: Unified Infinite Live Marquee Running Headline */}
        <div className="w-full relative z-10">
          <LiveMarqueeHeadline />
        </div>

        {/* Section: Unified Editorial Newspaper Footer */}
        <div className="w-full relative z-10">
          <PaperFooter />
        </div>
      </main>
    </div>
  );
}
