import React, { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';

export default function NewGalaGallery() {
  const { gallery } = weddingData;
  const [activeIndex, setActiveIndex] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') setActiveIndex((prev) => (prev + 1) % gallery.length);
      if (e.key === 'ArrowLeft') setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, gallery.length]);

  return (
    <section id="gala-gallery" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-400 font-semibold mb-3">
              <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gold-400" />
              <span>CAPTURED MEMORIES</span>
              <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gold-400" />
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight">
              Salon des Moments
            </h2>
            <p className="mt-3 text-stone-300 font-serif italic text-base sm:text-lg max-w-lg mx-auto">
              “A visual anthology of love, laughter, and timeless devotion.”
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {gallery.map((item, idx) => {
            const isFeatured = idx === 0 || idx === 6;

            return (
              <ScrollReveal
                key={item.id}
                animation="fade-up"
                delay={idx * 60}
                className={isFeatured ? 'col-span-2 row-span-2' : 'col-span-1'}
              >
                <div
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative rounded-2xl overflow-hidden bg-black/40 border border-gold-400/30 hover:border-gold-300/80 shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] ${
                    isFeatured ? 'h-[360px] sm:h-[480px]' : 'h-[180px] sm:h-[230px]'
                  }`}
                  title={`View ${item.caption}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt || item.caption}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  {/* Hover Icon Hint */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-gold-400/60 flex items-center justify-center text-gold-200">
                      <Maximize2 size={13} />
                    </span>
                  </div>

                  {/* Caption */}
                  <div className="absolute bottom-3 inset-x-3 text-left">
                    <h4 className="font-cinzel text-xs sm:text-sm font-semibold text-white truncate drop-shadow-sm">
                      {item.caption}
                    </h4>
                    <p className="text-[10px] font-sans text-gold-300/90 truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Modal Lightbox */}
      {activeIndex !== null && (
        <div
          onClick={() => setActiveIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 select-none animate-fade-in"
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-gold-300 hover:text-white p-2 rounded-full border border-gold-400/50 bg-black/60 transition-colors cursor-pointer z-50"
            aria-label="Close photo view"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
            }}
            className="absolute left-4 sm:left-8 text-gold-300 hover:text-white p-3 rounded-full border border-gold-400/50 bg-black/60 transition-all hover:scale-110 active:scale-95 cursor-pointer z-50"
            aria-label="Previous moment"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((prev) => (prev + 1) % gallery.length);
            }}
            className="absolute right-4 sm:right-8 text-gold-300 hover:text-white p-3 rounded-full border border-gold-400/50 bg-black/60 transition-all hover:scale-110 active:scale-95 cursor-pointer z-50"
            aria-label="Next moment"
          >
            <ChevronRight size={22} />
          </button>

          {/* Lightbox Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border-2 border-gold-400/70 shadow-2xl bg-black flex flex-col items-center"
          >
            <img
              src={gallery[activeIndex].src}
              alt={gallery[activeIndex].caption}
              className="max-h-[72vh] w-auto object-contain"
            />
            <div className="w-full p-4 bg-[#180309] border-t border-gold-500/30 text-center">
              <span className="font-cinzel text-[10px] tracking-widest uppercase text-gold-400 block mb-0.5">
                MOMENT {activeIndex + 1} OF {gallery.length}
              </span>
              <h3 className="font-cinzel text-lg text-white font-medium">
                {gallery[activeIndex].caption}
              </h3>
              <p className="text-xs text-stone-300 font-sans italic mt-0.5">
                {gallery[activeIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
