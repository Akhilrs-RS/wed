import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function Hero() {
  const { couple, events } = weddingData;

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#FAF7F2]">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-100/40 via-transparent to-transparent pointer-events-none" />

      {/* Floating Gold Sparkle Canvas Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-gold-400/50 animate-ping" />
        <div className="absolute top-1/3 right-16 w-3 h-3 rounded-full bg-gold-400/40 animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/5 w-2 h-2 rounded-full bg-gold-500/30 animate-pulse delay-700" />
        <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-gold-300/40 animate-ping delay-500" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Ornate Architectural Cathedral Arch Container */}
        <div className="relative mx-auto border-2 border-gold-500/40 rounded-t-[180px] sm:rounded-t-[260px] p-8 sm:p-14 md:p-20 bg-white/60 backdrop-blur-md deckled-card-gold text-center">
          {/* Subtle Inner Filigree Border */}
          <div className="absolute inset-3 border border-gold-500/25 rounded-t-[170px] sm:rounded-t-[250px] pointer-events-none" />

          {/* Top Royal Cross Crest */}
          <div className="inline-flex flex-col items-center justify-center mb-6">
            <div className="w-12 h-12 rounded-full border border-gold-500/80 bg-gradient-to-b from-gold-100 to-white flex items-center justify-center shadow-md mb-2">
              <span className="text-xl text-gold-700 font-cinzel font-bold">✝</span>
            </div>
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-cinzel text-gold-700 font-semibold">
              <span className="w-6 h-[1px] bg-gold-500/60" />
              <span>THE ROYAL UNION</span>
              <span className="w-6 h-[1px] bg-gold-500/60" />
            </div>
          </div>

          {/* Golden Bible Verse Ribbon */}
          <div className="max-w-xl mx-auto my-6 px-4 py-3 bg-gradient-to-r from-transparent via-gold-100/50 to-transparent border-y border-gold-500/30">
            <p className="font-pinyon text-2xl sm:text-3xl md:text-4xl text-imperial-800 leading-snug">
              “{couple.verse.text}”
            </p>
            <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-cinzel text-gold-800 font-semibold mt-1">
              — {couple.verse.reference} —
            </p>
          </div>

          {/* Grand Couple Names */}
          <div className="my-8 md:my-12 space-y-3">
            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-imperial-900 font-medium leading-[1.08]">
              {couple.groom.fullName}
            </h1>

            <div className="flex items-center justify-center space-x-4 py-2">
              <span className="w-12 sm:w-20 h-[1px] bg-gold-500/60" />
              <span className="font-pinyon text-4xl sm:text-5xl text-gold-600 italic">
                &amp;
              </span>
              <span className="w-12 sm:w-20 h-[1px] bg-gold-500/60" />
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-imperial-900 font-medium leading-[1.08]">
              {couple.bride.fullName}
            </h1>
          </div>

          {/* Romantic Vow Subtitle */}
          <p className="font-serif italic text-stone-600 text-sm sm:text-base md:text-lg max-w-lg mx-auto font-light leading-relaxed mb-8">
            {couple.heroQuote}
          </p>

          {/* Golden Wedding Date Seal */}
          <div className="inline-flex items-center space-x-3 px-6 py-2 rounded-full border border-gold-500/60 bg-gradient-to-r from-gold-100/80 via-white to-gold-100/80 shadow-sm">
            <Sparkles size={14} className="text-gold-600" />
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.2em] font-semibold text-imperial-900">
              MONDAY • 21 DECEMBER 2026 • 11:00 AM
            </span>
            <Sparkles size={14} className="text-gold-600" />
          </div>

          {/* Scroll to Explore CTA */}
          <div className="mt-12 md:mt-16">
            <a
              href="#story"
              className="inline-flex flex-col items-center space-y-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-cinzel text-stone-500 hover:text-gold-700 transition-colors group"
            >
              <span>SCROLL TO ENTER</span>
              <div className="w-8 h-8 rounded-full border border-gold-500/50 flex items-center justify-center group-hover:border-gold-700 transition-colors">
                <ArrowDown size={14} className="text-gold-600 group-hover:translate-y-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
