import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * High-performance, 60fps scroll-triggered animation container.
 * Powered by native IntersectionObserver.
 */
export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 750,
  className = '',
  threshold = 0.12,
  once = true
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // If IntersectionObserver is unavailable, default to visible
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) {
        observer.unobserve(currentEl);
      }
    };
  }, [threshold, once]);

  // Compute dynamic transform / opacity based on animation prop
  const getHiddenClasses = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-10';
      case 'fade-down':
        return 'opacity-0 -translate-y-10';
      case 'fade-left':
        return 'opacity-0 -translate-x-12';
      case 'fade-right':
        return 'opacity-0 translate-x-12';
      case 'zoom-in':
        return 'opacity-0 scale-95';
      case 'zoom-out':
        return 'opacity-0 scale-105';
      default:
        return 'opacity-0 translate-y-10';
    }
  };

  const getVisibleClasses = () => {
    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={elementRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all cubic-bezier(0.16, 1, 0.3, 1) transform will-change-transform ${
        isVisible ? getVisibleClasses() : getHiddenClasses()
      } ${className}`}
    >
      {children}
    </div>
  );
}
