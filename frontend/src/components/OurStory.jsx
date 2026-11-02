import React from 'react';
import WeddingImage from './common/WeddingImage';
import { weddingData } from '../data/weddingData';
import { Sparkles } from 'lucide-react';

export default function OurStory() {
  const { couple } = weddingData;

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
        <div className="max-w-2xl mx-auto my-10 p-8 sm:p-10 rounded-none border border-gold-500/30 bg-white/80 backdrop-blur-md deckled-card relative shadow-xl">
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
            FEATURED BRIDE & GROOM PORTRAIT (bb.jpg) in Royal Cathedral Arch Frame
           ========================================================================= */}
        <div className="relative max-w-md mx-auto mt-14 group">
          {/* Subtle Outer Glow & Filigree Border */}
          <div className="relative rounded-t-[200px] border-4 border-gold-500/60 p-3 bg-white/70 backdrop-blur-md shadow-2xl deckled-card-gold transition-transform duration-500 group-hover:scale-[1.01]">
            {/* Inner Filigree Arch */}
            <div className="relative rounded-t-[190px] overflow-hidden border-2 border-gold-400/40 shadow-inner">
              <WeddingImage
                src={couple.portrait}
                alt={`${couple.groom.fullName} & ${couple.bride.fullName}`}
                className="w-full h-[480px] sm:h-[560px] object-cover object-top"
                fallbackSrc="/images/bd.jpg"
              />
              {/* Subtle Warm Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-imperial-950/60 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Inset Caption */}
              <div className="absolute bottom-6 left-0 right-0 text-center text-white px-4">
                <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-gold-200 block mb-1">
                  BRIDE &amp; GROOM
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl font-medium tracking-tight">
                  {couple.groom.firstName} &amp; {couple.bride.firstName}
                </h3>
              </div>
            </div>

            {/* Top Seal Pin */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-2 border-gold-500 bg-[#FAF7F2] flex items-center justify-center shadow-lg">
              <span className="font-cinzel text-base text-gold-700 font-bold">✝</span>
            </div>
          </div>

          {/* Under-frame caption */}
          <div className="mt-6 flex items-center justify-center space-x-2 text-stone-500 font-cinzel text-xs tracking-widest">
            <Sparkles size={14} className="text-gold-600" />
            <span>ROBIN VARGHESE &amp; BENIGLA J L</span>
            <Sparkles size={14} className="text-gold-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
