import React, { useState } from 'react';
import { ArrowDown, Sparkles, Heart, Maximize2, X, ChevronDown } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import WeddingImage from './common/WeddingImage';
import ScrollReveal from './common/ScrollReveal';
import confetti from 'canvas-confetti';

export default function Hero() {
  const { couple } = weddingData;
  const [blessingSent, setBlessingSent] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const triggerHeroBlessing = () => {
    setBlessingSent(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#94263A', '#FAF7F2']
      });
    } catch (e) {}
    setTimeout(() => setBlessingSent(false), 2500);
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Floating Sparkle Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-gold-400/60 animate-ping" />
        <div className="absolute top-1/3 right-16 w-3 h-3 rounded-full bg-gold-400/50 animate-pulse delay-300" />
        <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-gold-500/40 animate-pulse delay-700" />
        <div className="absolute bottom-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-gold-300/50 animate-ping delay-500" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 my-auto">
        {/* =========================================================================
            HERO GATEWAY: DUAL-SHOWCASE WITH CLEAR VISIBILITY OF bb.jpg's FACE
           ========================================================================= */}
        <ScrollReveal animation="fade-up" duration={800}>
          <div className="relative bg-white/85 backdrop-blur-md border-2 border-gold-500/50 rounded-t-[100px] sm:rounded-t-[140px] p-6 sm:p-10 md:p-14 deckled-card-gold shadow-2xl transition-all duration-300">
            
            {/* Top Royal Emblem */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center relative">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border-2 border-gold-500 bg-gradient-to-b from-gold-100 to-white flex items-center justify-center shadow-lg p-3">
                  <span className="text-2xl text-gold-700 font-cinzel font-bold">✦</span>
                </div>
                <div className="absolute -inset-1 rounded-full border border-gold-400/50 animate-ping pointer-events-none" />
              </div>

              <div className="flex items-center justify-center space-x-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-cinzel text-gold-700 font-semibold mt-3">
                <span className="w-8 h-[1.5px] bg-gold-500/60" />
                <span>THE ROYAL UNION</span>
                <span className="w-8 h-[1.5px] bg-gold-500/60" />
              </div>
            </div>

            {/* Grid Layout: bb.jpg Face Showcase (Left) + Wedding Details (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* =====================================================================
                  LEFT COLUMN: PROMINENT bb.jpg FACE ARCHWAY SHOWCASE
                 ===================================================================== */}
              <div className="lg:col-span-5 relative group order-1 lg:order-1">
                <ScrollReveal animation="zoom-in" delay={200} duration={800}>
                  <div className="relative rounded-t-[180px] rounded-b-[24px] border-4 border-gold-500/70 p-3 bg-white/90 backdrop-blur-md shadow-2xl deckled-card-gold transition-all duration-500 group-hover:border-gold-500 group-hover:scale-[1.01]">
                    
                    {/* Image Container with Face-Centered Object Position for bb.jpg */}
                    <div
                      onClick={() => setModalOpen(true)}
                      className="relative rounded-t-[170px] rounded-b-[18px] overflow-hidden h-[420px] sm:h-[480px] shadow-inner cursor-pointer"
                      title="Click to view full photo"
                    >
                      <img
                        src={couple.heroImage || "/images/bb.jpg"}
                        alt="Robin Varghese & Benigla J L"
                        className="w-full h-full object-cover object-[center_38%] transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Subtle Gradient for Bottom Label */}
                      <div className="absolute inset-0 bg-gradient-to-t from-imperial-950/70 via-transparent to-transparent pointer-events-none" />

                      {/* Hover Hint */}
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-4 py-2 bg-black/70 backdrop-blur-sm text-gold-200 text-xs font-cinzel tracking-wider rounded-full flex items-center space-x-2 border border-gold-400 shadow-lg">
                          <Maximize2 size={13} />
                          <span>VIEW FULL PHOTO</span>
                        </span>
                      </div>

                      {/* Caption on Photo */}
                      <div className="absolute bottom-5 left-0 right-0 text-center text-white px-4 pointer-events-none">
                        <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold-300 block mb-1">
                          UNITED IN LOVE
                        </span>
                        <h3 className="font-cinzel text-xl sm:text-2xl font-medium tracking-tight">
                          Robin &amp; Benigla
                        </h3>
                      </div>
                    </div>

                    {/* Top Royal Seal on Arch */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-gold-500 bg-[#FAF7F2] flex items-center justify-center shadow-md">
                      <span className="font-cinzel text-sm text-gold-700 font-bold">✦</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* =====================================================================
                  RIGHT COLUMN: WEDDING INVITATION TYPOGRAPHY & INTERACTIVE BLESSING
                 ===================================================================== */}
              <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-2 space-y-6">
                <ScrollReveal animation="fade-left" delay={300}>
                  {/* Bible Verse Banner */}
                  <div className="inline-block bg-gold-100/60 border border-gold-500/40 px-4 py-2 rounded-full mb-2 shadow-sm">
                    <p className="font-serif italic text-imperial-950 text-xs sm:text-sm">
                      “{couple.verse.text}” — <span className="font-cinzel font-semibold text-gold-800">{couple.verse.reference}</span>
                    </p>
                  </div>

                  {/* Couple Names */}
                  <div className="space-y-2 mt-4">
                    <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-imperial-950 font-normal tracking-tight leading-none">
                      Robin Varghese
                    </h1>
                    <div className="flex items-center justify-center lg:justify-start space-x-4 my-2">
                      <span className="w-12 h-[1px] bg-gold-500" />
                      <span className="font-pinyon text-4xl sm:text-5xl text-gold-600 font-normal">&amp;</span>
                      <span className="w-12 h-[1px] bg-gold-500" />
                    </div>
                    <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-imperial-950 font-normal tracking-tight leading-none">
                      Benigla J L
                    </h1>
                  </div>

                  {/* Invitation Subtext */}
                  <p className="font-serif italic text-stone-700 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mt-4">
                    Together with our families, we invite you to celebrate the holy sacrament of our marriage as we begin our life together in Christ.
                  </p>

                  {/* Date Lockup Badge */}
                  <div className="inline-flex items-center space-x-6 p-4 sm:p-5 bg-imperial-950 text-white rounded-none border-2 border-gold-500 shadow-xl deckled-card-gold mt-6">
                    <div className="font-cinzel text-4xl sm:text-5xl text-gold-300 font-bold leading-none pr-4 border-r border-gold-500/40">
                      21
                    </div>
                    <div className="text-left font-cinzel text-xs tracking-[0.25em] uppercase text-stone-200">
                      <div className="font-semibold text-gold-300 text-sm">DECEMBER 2026</div>
                      <div className="text-stone-300 text-[11px] mt-0.5">MONDAY • 11:00 AM</div>
                      <div className="text-gold-400 text-[10px] mt-1 font-mono tracking-normal">UMMANOOR, KERALA</div>
                    </div>
                  </div>

                  {/* Action Buttons: Blessings & Quick Scroll */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6">
                    <button
                      onClick={triggerHeroBlessing}
                      className="group relative inline-flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-imperial-900 to-imperial-800 hover:from-imperial-800 hover:to-imperial-700 text-gold-200 font-cinzel text-xs tracking-[0.2em] uppercase font-semibold border border-gold-500/60 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                      <Heart size={14} className={`text-gold-400 transition-transform ${blessingSent ? 'scale-125 fill-gold-400' : 'group-hover:scale-110'}`} />
                      <span>{blessingSent ? 'BLESSING SENT! ✨' : 'SEND A BLESSING'}</span>
                    </button>

                    <a
                      href="#the-day"
                      className="inline-flex items-center space-x-2 px-6 py-3.5 bg-white/80 hover:bg-white text-imperial-900 font-cinzel text-xs tracking-[0.2em] uppercase font-semibold border border-gold-500/50 hover:border-gold-500 transition-all duration-300 hover:shadow-md"
                    >
                      <span>VIEW VENUES</span>
                      <ArrowDown size={14} className="text-gold-600 group-hover:translate-y-1 transition-transform" />
                    </a>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Floating Animated Scroll Down Cue */}
      <div className="relative z-10 mt-8 mb-2 flex flex-col items-center pointer-events-auto">
        <a
          href="#story"
          className="group flex flex-col items-center space-y-2 text-gold-800/80 hover:text-gold-700 transition-colors"
          aria-label="Scroll to read our story"
        >
          <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase font-semibold drop-shadow-sm">
            SCROLL TO EXPLORE
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-gold-600/60 flex items-start justify-center p-1 bg-white/40 backdrop-blur-sm shadow-sm group-hover:border-gold-600 transition-colors">
            <span className="w-1.5 h-2.5 rounded-full bg-gold-600 animate-bounce mt-1" />
          </div>
        </a>
      </div>

      {/* Fullscreen Photo Lightbox for bb.jpg */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-xl max-h-[90vh] bg-stone-900 border-2 border-gold-500 p-2 shadow-2xl"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gold-400 p-2"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <img
              src={couple.heroImage || "/images/bb.jpg"}
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
