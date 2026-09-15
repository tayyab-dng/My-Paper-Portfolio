'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';

export default function CustomScrollbar() {
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(60);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const dragStartYRef = useRef(0);
  const dragStartScrollYRef = useRef(0);

  const updateThumbPosition = useCallback(() => {
    if (typeof window === 'undefined') return;

    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
    const winHeight = window.innerHeight;
    const maxScroll = docHeight - winHeight;

    if (maxScroll <= 0) {
      setThumbHeight(0);
      return;
    }

    // Minimum thumb height of 45px for ease of clicking/viewing
    const calculatedHeight = Math.max(
      Math.round((winHeight / docHeight) * winHeight),
      45
    );
    setThumbHeight(calculatedHeight);

    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const trackSpace = winHeight - calculatedHeight;
    const calculatedTop = Math.min(
      Math.max(0, (currentScroll / maxScroll) * trackSpace),
      trackSpace
    );

    setThumbTop(calculatedTop);
  }, []);

  const triggerScrollVisibility = useCallback(() => {
    setIsVisible(true);
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = setTimeout(() => {
      if (!isDraggingRef.current && !isHoveredRef.current) {
        setIsVisible(false);
      }
    }, 1000);
  }, []);

  useEffect(() => {
    updateThumbPosition();

    const handleScroll = () => {
      updateThumbPosition();
      triggerScrollVisibility();
    };

    const handleResize = () => {
      updateThumbPosition();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Observer for DOM content / image loading changes
    const resizeObserver = new ResizeObserver(() => {
      updateThumbPosition();
    });
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, [updateThumbPosition, triggerScrollVisibility]);

  // Thumb dragging logic
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    isDraggingRef.current = true;
    setIsDragging(true);
    setIsVisible(true);
    dragStartYRef.current = e.clientY;
    dragStartScrollYRef.current = window.scrollY;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaY = moveEvent.clientY - dragStartYRef.current;
      const winHeight = window.innerHeight;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      const maxScroll = docHeight - winHeight;
      const trackSpace = winHeight - thumbHeight;

      if (trackSpace > 0) {
        const scrollDelta = (deltaY / trackSpace) * maxScroll;
        window.scrollTo({
          top: dragStartScrollYRef.current + scrollDelta,
          behavior: 'instant' as ScrollBehavior,
        });
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);

      if (!isHoveredRef.current) {
        hideTimeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 750);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Track click to jump to scroll position
  const handleTrackClick = (e: React.MouseEvent) => {
    const clickY = e.clientY;
    const winHeight = window.innerHeight;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    const maxScroll = docHeight - winHeight;
    const trackSpace = winHeight - thumbHeight;

    if (trackSpace > 0) {
      const targetTop = clickY - thumbHeight / 2;
      const targetScroll = (targetTop / trackSpace) * maxScroll;
      window.scrollTo({
        top: Math.max(0, Math.min(targetScroll, maxScroll)),
        behavior: 'smooth',
      });
    }
  };

  // Do not render if document is not scrollable
  if (thumbHeight === 0) return null;

  const show = isVisible || isHovered || isDragging;

  return (
    <div
      className={`fixed right-0 top-0 h-full w-[11px] z-[99999] select-none transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ background: 'transparent' }}
      onMouseEnter={() => {
        isHoveredRef.current = true;
        setIsHovered(true);
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        setIsHovered(false);
        if (!isDraggingRef.current) {
          hideTimeoutRef.current = setTimeout(() => {
            setIsVisible(false);
          }, 1000);
        }
      }}
      onClick={handleTrackClick}
    >
      {/* Moving Thumb Indicator (Locomotive Scroll replica) */}
      <div
        className="absolute right-[2px] w-[7px] bg-[#1d1d1b] rounded-[10px] cursor-grab active:cursor-grabbing transition-colors duration-150"
        style={{
          height: `${thumbHeight}px`,
          transform: `translate3d(0, ${thumbTop}px, 0)`,
          opacity: isDragging ? 0.85 : isHovered ? 0.75 : 0.45,
          willChange: 'transform',
        }}
        onMouseDown={handleThumbMouseDown}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
