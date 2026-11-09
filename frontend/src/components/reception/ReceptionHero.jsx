import React, { useState } from 'react';
import { Sparkles, Heart, Maximize2, X, Navigation, Calendar, ExternalLink, ChevronDown } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';
import confetti from 'canvas-confetti';

export default function ReceptionHero() {
  const { couple, receptionSite } = weddingData;
  const [blessingSent, setBlessingSent] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const triggerHeroBlessing = () => {
    setBlessingSent(true);
    try {
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#9E2A2B', '#FAF6F0', '#E6C687', '#3B0E17']
      });
    } catch (e) {
      console.log('Confetti effect error:', e);
    }
    setTimeout(() => setBlessingSent(false), 2600);
  };

  const createGoogleCalendarLink = (title, startIso, location, details) => {
    const startDate = new Date(startIso);
    const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);
    const formatGDate = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, '');

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${formatGDate(startDate)}/${formatGDate(endDate)}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}`;
  };

  return (
    <section
      id="reception-hero"
      className="relative min-h-screen pt-28 pb-16 sm:pb-24 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient Stardust & Candlelight Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/4 left-[8%] w-3 h-3 rounded-full bg-amber-400/40 blur-[1px] animate-pulse" />
        <div
          className="absolute top-1/3 right-[10%] w-4 h-4 rounded-full bg-gold-300/40 blur-[2px] animate-ping"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute bottom-1/4 left-[15%] w-2.5 h-2.5 rounded-full bg-amber-300/50 blur-[1px] animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        <div
          className="absolute bottom-1/3 right-[18%] w-3 h-3 rounded-full bg-white/60 blur-[1px] animate-ping"
          style={{ animationDuration: '4.5s' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 my-auto">
        
        {/* =========================================================================
            THE GRAND ROYAL ARCHWAY FOLIO (UNIFIED SHOW-STOPPING COMPOSITION)
           ========================================================================= */}
        <ScrollReveal animation="fade-up" duration={800}>
          <div className="relative bg-white/95 backdrop-blur-md border-2 border-gold-500/50 rounded-t-[100px] sm:rounded-t-[160px] rounded-b-[24px] p-6 sm:p-10 md:p-14 deckled-card-gold shadow-2xl transition-all duration-300">
            
            {/* Top Royal Monogram Crest & Latin Cross */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center relative">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gold-500 bg-gradient-to-b from-gold-100 to-white flex items-center justify-center shadow-lg p-3">
                  <span className="text-2xl sm:text-3xl text-gold-700 font-cinzel font-bold">✝</span>
                </div>
                <div className="absolute -inset-1.5 rounded-full border border-gold-400/50 animate-ping pointer-events-none" />
              </div>

              {/* Royal Proclamation Arc */}
              <div className="flex items-center justify-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-700 font-semibold mt-4">
                <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent to-gold-500" />
                <span>THE WEDDING RECEPTION OF</span>
                <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-l from-transparent to-gold-500" />
              </div>

              {/* Couple's Names in Metallic Gold Foil Shimmer Typography */}
              <div className="mt-3 sm:mt-4 space-y-1">
                <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-imperial-950 font-medium tracking-tight">
                  <span className="gold-text-shimmer inline-block">Robin Varghese</span>
                </h1>
                <div className="flex items-center justify-center space-x-3 my-1">
                  <span className="w-8 sm:w-12 h-[1px] bg-gold-400/50" />
                  <span className="font-pinyon text-3xl sm:text-4xl text-gold-600 font-normal select-none">&amp;</span>
                  <span className="w-8 sm:w-12 h-[1px] bg-gold-400/50" />
                </div>
                <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-imperial-950 font-medium tracking-tight">
                  <span className="gold-text-shimmer inline-block">Benigla J L</span>
                </h1>
              </div>

              {/* Poetic Subtitle */}
              <p className="font-pinyon text-2xl sm:text-3xl text-gold-700/90 tracking-wide mt-2">
                An Evening of Festive Banquet, Melodies &amp; Heartfelt Thanksgiving
              </p>

              {/* Scripture Verse Pill */}
              <div className="inline-block bg-gold-100/70 border border-gold-500/40 px-4 py-1.5 rounded-full mt-4 shadow-sm">
                <p className="font-serif italic text-imperial-950 text-xs sm:text-sm">
                  “{couple.verse.text}” —{' '}
                  <span className="font-cinzel font-semibold text-gold-800">
                    {couple.verse.reference}
                  </span>
                </p>
              </div>
            </div>

            {/* Central Cathedral Archway Portrait Frame */}
            <div className="relative max-w-xl mx-auto my-6 sm:my-8 group">
              <div className="relative rounded-t-[190px] sm:rounded-t-[220px] rounded-b-[20px] border-4 border-gold-500/80 p-2.5 sm:p-3.5 bg-gradient-to-b from-[#FFFDF8] to-[#FAF6F0] shadow-2xl deckled-card-gold transition-all duration-500 group-hover:border-gold-500">
                
                {/* Candlelight Backlit Halo Glow */}
                <div className="absolute inset-0 rounded-t-[190px] sm:rounded-t-[220px] rounded-b-[20px] bg-gold-400/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity pointer-events-none" />

                {/* Corner Botanical SVG Filigree Ornaments */}
                <div className="absolute top-2 left-2 w-16 h-16 pointer-events-none opacity-50 z-20">
                  <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                    <path d="M 0,25 Q 40,25 45,0" />
                    <circle cx="28" cy="28" r="3" fill="#D4AF37" />
                  </svg>
                </div>
                <div className="absolute top-2 right-2 w-16 h-16 pointer-events-none opacity-50 rotate-90 z-20">
                  <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                    <path d="M 0,25 Q 40,25 45,0" />
                    <circle cx="28" cy="28" r="3" fill="#D4AF37" />
                  </svg>
                </div>

                {/* Clickable Image Arch Container */}
                <div
                  onClick={() => setModalOpen(true)}
                  className="relative rounded-t-[180px] sm:rounded-t-[210px] rounded-b-[16px] overflow-hidden h-[380px] sm:h-[460px] md:h-[520px] shadow-inner cursor-pointer"
                  title="Click to view full portrait"
                >
                  <img
                    src={couple.heroImage || '/images/bb.jpg'}
                    alt="Robin Varghese & Benigla J L"
                    className="w-full h-full object-cover object-[center_36%] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-imperial-950/75 via-transparent to-transparent pointer-events-none" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-black/75 backdrop-blur-sm text-gold-200 text-xs font-cinzel tracking-wider rounded-full flex items-center space-x-2 border border-gold-400 shadow-xl">
                      <Maximize2 size={13} />
                      <span>VIEW FULL PORTRAIT</span>
                    </span>
                  </div>

                  {/* Lower Portrait Caption */}
                  <div className="absolute bottom-5 left-0 right-0 text-center text-white px-4 pointer-events-none">
                    <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold-300 block mb-1">
                      UNITED IN LOVE &amp; FAITH
                    </span>
                    <h3 className="font-cinzel text-lg sm:text-xl font-medium tracking-tight">
                      Robin &amp; Benigla
                    </h3>
                  </div>
                </div>

                {/* Top Center Medallion Cross */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-gold-500 bg-[#FAF7F2] flex items-center justify-center shadow-md z-30">
                  <span className="font-cinzel text-sm text-gold-700 font-bold">✝</span>
                </div>
              </div>
            </div>

            {/* =========================================================================
                THE GILDED EVENING PASS (DATE, TIME & VENUE ANCHOR)
               ========================================================================= */}
            <div className="max-w-2xl mx-auto my-6">
              <div className="bg-imperial-950 text-white border-2 border-gold-500/80 p-4 sm:p-5 shadow-2xl deckled-card-gold flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
                
                {/* Left: Prominent Date */}
                <div className="flex items-center space-x-4 pr-0 sm:pr-6 sm:border-r border-gold-500/40">
                  <div className="font-cinzel text-4xl sm:text-5xl text-gold-300 font-bold leading-none">
                    {receptionSite.day}
                  </div>
                  <div className="font-cinzel text-xs tracking-[0.25em] uppercase text-stone-200 space-y-0.5 text-left">
                    <div className="font-semibold text-gold-300 text-sm">
                      {receptionSite.month} {receptionSite.year}
                    </div>
                    <div className="text-stone-300 text-[11px]">
                      {receptionSite.dayOfWeek}
                    </div>
                  </div>
                </div>

                {/* Center: Evening Time */}
                <div className="font-cinzel text-center px-0 sm:px-4 sm:border-r border-gold-500/40">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400 block">
                    EVENING BANQUET
                  </span>
                  <span className="text-base sm:text-lg font-bold text-gold-300 tracking-wider">
                    {receptionSite.time}
                  </span>
                </div>

                {/* Right: Venue Location */}
                <div className="font-cinzel text-center sm:text-right">
                  <span className="text-sm font-semibold text-gold-300 block leading-tight">
                    {receptionSite.venue.name}
                  </span>
                  <span className="text-[10px] tracking-wider text-stone-300 uppercase block mt-0.5 font-sans">
                    Punniyam, Kanyakumari
                  </span>
                </div>
              </div>
            </div>

            {/* =========================================================================
                INTERACTIVE ACTION SUITE
               ========================================================================= */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4">
              
              {/* Send a Blessing Button */}
              <button
                onClick={triggerHeroBlessing}
                className="group relative inline-flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-imperial-900 to-imperial-800 hover:from-imperial-800 hover:to-imperial-700 text-gold-200 font-cinzel text-xs tracking-[0.2em] uppercase font-semibold border border-gold-500/60 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Heart
                  size={14}
                  className={`text-gold-400 transition-transform ${
                    blessingSent ? 'scale-125 fill-gold-400' : 'group-hover:scale-110'
                  }`}
                />
                <span>{blessingSent ? 'BLESSING SENT! ✨' : 'SEND A BLESSING'}</span>
              </button>

              {/* Navigate Venue Button */}
              <a
                href={receptionSite.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 bg-white hover:bg-gold-50 text-imperial-900 border border-gold-500 font-cinzel text-xs tracking-[0.15em] uppercase font-semibold shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Navigation size={13} className="text-gold-600" />
                <span>NAVIGATE VENUE</span>
                <ExternalLink size={11} className="text-gold-500" />
              </a>

              {/* Add to Calendar Button */}
              <a
                href={createGoogleCalendarLink(
                  'Robin & Benigla - Wedding Reception',
                  receptionSite.fullDateString,
                  receptionSite.venue.fullAddress,
                  `Join Robin Varghese & Benigla J L for their Wedding Reception at ${receptionSite.venue.name}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3.5 bg-gold-100/70 hover:bg-gold-200/80 text-imperial-900 border border-gold-400/60 font-cinzel text-xs tracking-[0.15em] uppercase font-semibold shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Calendar size={13} className="text-gold-700" />
                <span>ADD TO CALENDAR</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div
              onClick={() => {
                const storyEl = document.getElementById('story');
                if (storyEl) storyEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-8 text-center flex flex-col items-center justify-center cursor-pointer select-none group"
            >
              <span className="font-pinyon text-lg text-gold-700 group-hover:text-gold-800 transition-colors">
                Scroll to explore
              </span>
              <ChevronDown size={18} className="text-gold-600 animate-bounce mt-0.5" />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Full Photo Modal Lightbox */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full flex flex-col items-center"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 transition-colors cursor-pointer"
              aria-label="Close photo view"
            >
              <X size={28} />
            </button>
            <img
              src={couple.heroImage || '/images/bb.jpg'}
              alt="Robin Varghese & Benigla J L"
              className="max-h-[82vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/20"
            />
            <p className="font-cinzel text-sm tracking-widest uppercase text-white/90 mt-4">
              Robin Varghese &amp; Benigla J L
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
