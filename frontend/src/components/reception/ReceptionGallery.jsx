import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';

export default function ReceptionGallery() {
  const { gallery } = weddingData;
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') setSelectedIdx((prev) => (prev + 1) % gallery.length);
      if (e.key === 'ArrowLeft') setSelectedIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, gallery.length]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-down" duration={700}>
          <div className="text-center mb-16 md:mb-20">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-gold-500" />
              <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold-700 font-semibold">
                Captured Moments
              </p>
              <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            <h2 className="font-display text-3xl sm:text-5xl text-imperial-950 font-normal">
              Memories &amp; Milestones
            </h2>

            <div className="flex items-center justify-center my-4 space-x-3">
              <div className="w-16 h-px bg-gold-400/40" />
              <span className="text-gold-500 font-serif text-sm">✦</span>
              <div className="w-16 h-px bg-gold-400/40" />
            </div>

            <p className="font-sans text-xs sm:text-sm text-stone-600 max-w-md mx-auto font-light leading-relaxed">
              A glimpse into the cherished moments and sanctuaries that frame the beginning of our married life.
            </p>
          </div>
        </ScrollReveal>

        {/* 11-Photo Moments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((moment, idx) => (
            <ScrollReveal
              key={moment.id}
              animation="fade-up"
              delay={idx * 60}
              duration={700}
            >
              <div
                onClick={() => setSelectedIdx(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white border border-gold-400/40 hover:border-gold-500 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={moment.src}
                    alt={moment.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-imperial-950/85 via-imperial-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                    <span className="font-script text-2xl text-gold-300 leading-none mb-1">
                      {moment.subtitle}
                    </span>
                    <h4 className="font-cinzel text-base tracking-wide font-normal">
                      {moment.caption}
                    </h4>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal Lightbox */}
      {selectedIdx !== null && (
        <div
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 transition-colors cursor-pointer"
              aria-label="Close photo view"
            >
              <X size={28} />
            </button>

            {/* Prev Button */}
            <button
              onClick={() =>
                setSelectedIdx((prev) => (prev - 1 + gallery.length) % gallery.length)
              }
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={() => setSelectedIdx((prev) => (prev + 1) % gallery.length)}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>

            {/* Full Image */}
            <img
              src={gallery[selectedIdx].src}
              alt={gallery[selectedIdx].alt}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* Captions */}
            <div className="text-center mt-4 text-white">
              <p className="font-script text-2xl text-gold-300">
                {gallery[selectedIdx].subtitle}
              </p>
              <p className="font-cinzel text-sm tracking-widest uppercase text-white/90 mt-0.5">
                {gallery[selectedIdx].caption}
              </p>
              <p className="text-[10px] text-white/50 font-sans mt-1">
                {selectedIdx + 1} of {gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

