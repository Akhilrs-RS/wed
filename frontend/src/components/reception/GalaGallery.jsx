import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';

export default function GalaGallery() {
  const { gallery } = weddingData;
  const [selectedIdx, setSelectedIdx] = useState(null);

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
    <section id="gallery" className="py-24 sm:py-32 relative text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" duration={700}>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-300 font-semibold mb-3">
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-gold-400" />
              <span>CAPTURED MOMENTS</span>
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-gold-400" />
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Memories &amp; Milestones
            </h2>
            <p className="font-pinyon text-2xl sm:text-3xl text-gold-300/90 mt-2">
              A Glimpse into Our Love Story
            </p>
          </div>
        </ScrollReveal>

        {/* 11-Photo Masonry Grid */}
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
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#1E050B] border border-gold-400/40 hover:border-gold-300 shadow-xl hover:shadow-[0_12px_35px_rgba(212,175,55,0.3)] transition-all duration-500 hover:-translate-y-1.5"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={moment.src}
                    alt={moment.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Gradient Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
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

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          onClick={() => setSelectedIdx(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full max-h-[90vh] flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 transition-colors cursor-pointer"
              aria-label="Close photo view"
            >
              <X size={28} />
            </button>

            <button
              onClick={() =>
                setSelectedIdx((prev) => (prev - 1 + gallery.length) % gallery.length)
              }
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={() => setSelectedIdx((prev) => (prev + 1) % gallery.length)}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>

            <img
              src={gallery[selectedIdx].src}
              alt={gallery[selectedIdx].alt}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-gold-400/30"
            />

            <div className="text-center mt-4 text-white">
              <p className="font-script text-2xl text-gold-300">
                {gallery[selectedIdx].subtitle}
              </p>
              <p className="font-cinzel text-sm tracking-widest uppercase text-white/90 mt-0.5">
                {gallery[selectedIdx].caption}
              </p>
              <p className="text-[10px] text-stone-400 font-sans mt-1">
                {selectedIdx + 1} of {gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
