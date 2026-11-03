import React, { useState } from 'react';
import WeddingImage from './common/WeddingImage';
import { weddingData } from '../data/weddingData';
import { Sparkles, Heart, Maximize2, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OurStory() {
  const { couple } = weddingData;
  const [photoModalOpen, setPhotoModalOpen] = useState(false);
  const [heartsCount, setHeartsCount] = useState(148);
  const [liked, setLiked] = useState(false);

  const handleHeartClick = () => {
    setHeartsCount((prev) => prev + 1);
    setLiked(true);

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D4AF37', '#94263A', '#FAF7F2']
      });
    } catch (e) {}

    setTimeout(() => setLiked(false), 800);
  };

  return (
    <section id="story" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Header Ribbon */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-gold-500" />
          <span className="text-[11px] md:text-xs font-cinzel tracking-[0.3em] uppercase text-gold-700 font-semibold">
            THE CHRONICLE OF OUR LOVE
          </span>
          <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-gold-500" />
        </div>

        {/* Title in Cinzel & Pinyon */}
        <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-imperial-900 font-medium tracking-tight leading-tight mb-4">
          Two Destinies <br />
          <span className="font-pinyon text-4xl sm:text-6xl text-gold-600 block mt-2">
            Intertwined by Grace
          </span>
        </h2>

        {/* Story Prose Card */}
        <div className="max-w-2xl mx-auto my-10 p-8 sm:p-10 rounded-none border border-gold-500/40 bg-white/85 backdrop-blur-md deckled-card relative shadow-2xl">
          {/* Corner gold brackets */}
          <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-gold-500" />
          <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-gold-500" />
          <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-gold-500" />
          <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-gold-500" />

          <p className="font-serif italic text-stone-700 text-base sm:text-lg md:text-xl leading-relaxed font-light">
            “{couple.subtitle}”
          </p>

          <div className="mt-6 flex items-center justify-center space-x-3 text-gold-600">
            <span className="w-8 h-[1px] bg-gold-400" />
            <span className="font-cinzel text-xs tracking-widest uppercase">Robin &amp; Benigla</span>
            <span className="w-8 h-[1px] bg-gold-400" />
          </div>
        </div>

        {/* =========================================================================
            FEATURED BRIDE & GROOM PORTRAIT (bb.jpg) in Interactive Arch Frame
           ========================================================================= */}
        <div className="relative max-w-md mx-auto mt-14 group">
          {/* Outer Cathedral Frame with Hover Elevation */}
          <div className="relative rounded-t-[200px] border-4 border-gold-500/70 p-3.5 bg-white/80 backdrop-blur-md shadow-2xl deckled-card-gold transition-all duration-500 group-hover:scale-[1.02] group-hover:border-gold-500">
            {/* Inner Arch Photo Container */}
            <div
              onClick={() => setPhotoModalOpen(true)}
              className="relative rounded-t-[190px] overflow-hidden border-2 border-gold-400/40 shadow-inner cursor-pointer"
              title="Click to view full photo"
            >
              <WeddingImage
                src={couple.storyImage || "/images/s.jpg"}
                alt={`${couple.groom.fullName} & ${couple.bride.fullName}`}
                className="w-full h-[480px] sm:h-[560px] object-cover object-[center_38%] transition-transform duration-700 group-hover:scale-105"
                fallbackSrc="/images/bb.jpg"
              />

              {/* Hover Zoom Hint */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-black/60 backdrop-blur-sm text-gold-200 text-xs font-cinzel tracking-wider rounded-full flex items-center space-x-2 border border-gold-400">
                  <Maximize2 size={13} />
                  <span>VIEW PORTRAIT</span>
                </span>
              </div>

              {/* Bottom Inset Caption */}
              <div className="absolute bottom-6 left-0 right-0 text-center text-white px-4 pointer-events-none">
                <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-gold-200 block mb-1">
                  BRIDE &amp; GROOM
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-medium tracking-tight">
                  {couple.groom.firstName} &amp; {couple.bride.firstName}
                </h3>
              </div>
            </div>

            {/* Top Cross Seal */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-gold-500 bg-[#FAF7F2] flex items-center justify-center shadow-lg">
              <span className="font-cinzel text-base text-gold-700 font-bold">✝</span>
            </div>
          </div>

          {/* Interactive Heart Blessing Bar */}
          <div className="mt-8 flex items-center justify-center space-x-4">
            <button
              onClick={handleHeartClick}
              className="group/btn inline-flex items-center space-x-2.5 px-6 py-2.5 rounded-full bg-white/90 border border-gold-500/60 shadow-md hover:bg-gold-50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Heart
                size={16}
                className={`transition-all duration-300 ${
                  liked
                    ? 'text-rose-600 fill-rose-600 scale-125'
                    : 'text-imperial-800 fill-gold-400 group-hover/btn:scale-110'
                }`}
              />
              <span className="font-cinzel text-xs tracking-wider uppercase text-imperial-950 font-semibold">
                Send Blessings
              </span>
              <span className="text-xs font-mono font-bold text-gold-700 ml-1">
                {heartsCount}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Couple Portrait */}
      {photoModalOpen && (
        <div
          onClick={() => setPhotoModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl max-h-[90vh] bg-stone-900 border-2 border-gold-500 p-2 shadow-2xl"
          >
            <button
              onClick={() => setPhotoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gold-400 p-2"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <img
              src={couple.storyImage || "/images/s.jpg"}
              alt="Robin & Benigla"
              className="max-h-[80vh] w-auto mx-auto object-contain"
            />
            <div className="text-center py-3 text-gold-300 font-cinzel text-xs tracking-widest">
              ROBIN VARGHESE &amp; BENIGLA J L
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
