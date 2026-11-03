import React, { useState } from 'react';
import { ArrowDown, Sparkles, Heart, Music } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function Hero() {
  const { couple } = weddingData;
  const [blessingSent, setBlessingSent] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8; // Max 4 deg tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const triggerHeroBlessing = () => {
    setBlessingSent(true);
    setTimeout(() => setBlessingSent(false), 2500);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Floating Sparkle Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-gold-400/60 animate-ping" />
        <div className="absolute top-1/3 right-16 w-3 h-3 rounded-full bg-gold-400/50 animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-gold-500/40 animate-pulse delay-700" />
        <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-gold-300/50 animate-ping delay-500" />
      </div>

      <div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-12 transition-transform duration-300 ease-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
      >
        {/* Ornate Architectural Cathedral Arch Container */}
        <div className="relative mx-auto border-2 border-gold-500/50 rounded-t-[180px] sm:rounded-t-[260px] p-8 sm:p-14 md:p-20 bg-white/80 backdrop-blur-md deckled-card-gold text-center shadow-2xl transition-all duration-300 hover:border-gold-500">
          {/* Subtle Inner Filigree Border */}
          <div className="absolute inset-3 border border-gold-500/30 rounded-t-[170px] sm:rounded-t-[250px] pointer-events-none" />

          {/* Top Royal Cross Crest with Breathing Golden Aura */}
          <div className="inline-flex flex-col items-center justify-center mb-6">
            <div className="relative">
              <div className="w-14 h-14 rounded-full border-2 border-gold-500 bg-gradient-to-b from-gold-100 to-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 cursor-pointer">
                <span className="text-2xl text-gold-700 font-cinzel font-bold">✝</span>
              </div>
              <div className="absolute -inset-1 rounded-full border border-gold-400/40 animate-ping pointer-events-none" />
            </div>

            <div className="flex items-center space-x-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-cinzel text-gold-700 font-semibold mt-3">
              <span className="w-6 h-[1.5px] bg-gold-500/60" />
              <span>THE ROYAL UNION</span>
              <span className="w-6 h-[1.5px] bg-gold-500/60" />
            </div>
          </div>

          {/* Golden Bible Verse Ribbon */}
          <div className="max-w-xl mx-auto my-6 px-4 py-3 bg-gradient-to-r from-transparent via-gold-100/70 to-transparent border-y border-gold-500/40">
            <p className="font-pinyon text-2xl sm:text-3xl md:text-4xl text-imperial-900 leading-snug">
              “{couple.verse.text}”
            </p>
            <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-cinzel text-gold-800 font-semibold mt-1">
              — {couple.verse.reference} —
            </p>
          </div>

          {/* Grand Couple Names with Shimmering Depth */}
          <div className="my-8 md:my-12 space-y-3">
            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-imperial-950 font-medium leading-[1.08] drop-shadow-sm">
              {couple.groom.fullName}
            </h1>

            <div className="flex items-center justify-center space-x-4 py-2">
              <span className="w-12 sm:w-20 h-[1.5px] bg-gradient-to-r from-transparent to-gold-500" />
              <span className="font-pinyon text-4xl sm:text-5xl text-gold-600 italic">
                &amp;
              </span>
              <span className="w-12 sm:w-20 h-[1.5px] bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-imperial-950 font-medium leading-[1.08] drop-shadow-sm">
              {couple.bride.fullName}
            </h1>
          </div>

          {/* Romantic Vow Subtitle */}
          <p className="font-serif italic text-stone-700 text-base sm:text-lg md:text-xl max-w-lg mx-auto font-light leading-relaxed mb-8">
            {couple.heroQuote}
          </p>

          {/* Interactive Date Seal + Bestow Blessing Button */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="inline-flex items-center space-x-3 px-6 py-2.5 rounded-full border border-gold-500/80 bg-gradient-to-r from-gold-100/90 via-white to-gold-100/90 shadow-md">
              <Sparkles size={14} className="text-gold-600" />
              <span className="font-cinzel text-xs sm:text-sm tracking-[0.2em] font-semibold text-imperial-950">
                MONDAY • 21 DECEMBER 2026 • 11:00 AM
              </span>
              <Sparkles size={14} className="text-gold-600" />
            </div>

            {/* Quick Interactive Blessing Trigger */}
            <button
              onClick={triggerHeroBlessing}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-imperial-800 hover:bg-gold-600 text-white font-cinzel text-xs tracking-wider uppercase transition-all shadow-md active:scale-95"
            >
              <Heart size={14} className={`text-gold-300 ${blessingSent ? 'scale-125 fill-gold-300' : ''}`} />
              <span>{blessingSent ? 'Blessing Sent! 💖' : 'Shower Love'}</span>
            </button>
          </div>

          {/* Scroll Down */}
          <div className="mt-12 md:mt-16">
            <a
              href="#story"
              className="inline-flex flex-col items-center space-y-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-cinzel text-stone-600 hover:text-gold-700 transition-colors group"
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
