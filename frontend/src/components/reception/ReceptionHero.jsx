import React, { useState } from 'react';
import { Sparkles, Heart, Navigation, Calendar, ExternalLink, ChevronDown, Maximize2, X } from 'lucide-react';
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
        particleCount: 80,
        spread: 85,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#9E2A2B', '#FAF6F0', '#E6C687', '#3B0E17', '#C5A059']
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
        <div
          className="absolute top-[18%] right-[35%] w-2 h-2 rounded-full bg-gold-400/50 blur-[0.5px] animate-pulse"
          style={{ animationDuration: '3.2s' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 my-auto">
        
        {/* =========================================================================
            HAUTE-COUTURE ROYAL HERALDIC PROCLAMATION FOLIO (IMAGE-FREE MASTERPIECE)
           ========================================================================= */}
        <ScrollReveal animation="fade-up" duration={850}>
          <div className="relative bg-[#FFFDF9]/95 backdrop-blur-md border-2 border-gold-500/70 rounded-2xl p-6 sm:p-12 md:p-16 deckled-card-gold shadow-2xl transition-all duration-300 overflow-hidden">
            
            {/* Inner Gold Pinstripe Filigree Border */}
            <div className="absolute inset-2 sm:inset-3 border border-gold-400/40 rounded-xl pointer-events-none" />
            <div className="absolute inset-3.5 sm:inset-5 border border-gold-500/20 rounded-lg pointer-events-none" />

            {/* Corner Baroque SVG Filigrees */}
            {/* Top-Left */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 w-16 h-16 pointer-events-none opacity-60">
              <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                <path d="M 0,30 Q 30,30 30,0" />
                <path d="M 0,50 Q 50,50 50,0" />
                <path d="M 12,12 Q 35,35 45,12" />
                <circle cx="28" cy="28" r="3.5" fill="#D4AF37" />
              </svg>
            </div>
            {/* Top-Right */}
            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-16 h-16 pointer-events-none opacity-60 rotate-90">
              <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                <path d="M 0,30 Q 30,30 30,0" />
                <path d="M 0,50 Q 50,50 50,0" />
                <path d="M 12,12 Q 35,35 45,12" />
                <circle cx="28" cy="28" r="3.5" fill="#D4AF37" />
              </svg>
            </div>
            {/* Bottom-Left */}
            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 w-16 h-16 pointer-events-none opacity-60 -rotate-90">
              <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                <path d="M 0,30 Q 30,30 30,0" />
                <path d="M 0,50 Q 50,50 50,0" />
                <path d="M 12,12 Q 35,35 45,12" />
                <circle cx="28" cy="28" r="3.5" fill="#D4AF37" />
              </svg>
            </div>
            {/* Bottom-Right */}
            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-16 h-16 pointer-events-none opacity-60 rotate-180">
              <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="1.5">
                <path d="M 0,30 Q 30,30 30,0" />
                <path d="M 0,50 Q 50,50 50,0" />
                <path d="M 12,12 Q 35,35 45,12" />
                <circle cx="28" cy="28" r="3.5" fill="#D4AF37" />
              </svg>
            </div>

            {/* =====================================================================
                SECTION 1: ROYAL CAMEO MEDALLION FEATURING bb.jpg
               ===================================================================== */}
            <div className="relative z-10 text-center mb-6">
              
              {/* Royal Cameo Brooch Medallion with bb.jpg */}
              <div className="inline-flex items-center justify-center relative mb-5">
                {/* Outer Pulsing Candlelight Halo */}
                <div className="absolute -inset-2.5 rounded-full border-2 border-gold-400/40 animate-pulse pointer-events-none" />


                {/* Cameo Brooch Circle Framing bb.jpg */}
                <div
                  onClick={() => setModalOpen(true)}
                  className="group relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full border-4 border-gold-500/80 shadow-[0_10px_35px_rgba(212,175,55,0.4)] p-1 bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 cursor-pointer overflow-hidden transform transition-all duration-500 hover:scale-105 active:scale-95"
                  title="Click to view full portrait"
                  aria-label="View couple portrait"
                >
                  {/* Inner Bezel Ring */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-gold-200/60 shadow-inner">
                    <img
                      src={couple.heroImage || '/images/bb.jpg'}
                      alt="Robin Varghese & Benigla J L"
                      className="w-full h-full object-cover object-[center_32%] transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle Vignette Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-imperial-950/40 via-transparent to-black/10 pointer-events-none" />

                    {/* Hover View Icon */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 size={16} className="text-gold-200 drop-shadow" />
                    </div>
                  </div>
                </div>

                {/* Bottom R & B Monogram Ribbon Pill */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-imperial-950 text-gold-300 border border-gold-400/80 text-[10px] sm:text-xs font-cinzel tracking-[0.2em] uppercase font-bold shadow-xl flex items-center space-x-1.5 z-20 whitespace-nowrap">
                  <span>{couple.monogram}</span>
                  <span className="text-gold-500 text-[8px]">•</span>
                  <span className="text-[9px] text-gold-400/90 tracking-widest">30.12.26</span>
                </div>
              </div>

              {/* Royal Proclamation Eyebrow */}
              <div className="flex items-center justify-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-700 font-semibold">
                <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-gold-500" />
                <span>CORDIALLY INVITED TO CELEBRATE</span>
                <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-gold-500" />
              </div>

              {/* Main Reception Title */}
              <div className="mt-3">
                <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl text-imperial-950 font-medium tracking-[0.12em] uppercase leading-tight">
                  WEDDING RECEPTION
                </h2>
                <p className="font-pinyon text-2xl sm:text-3xl text-gold-700 mt-1">
                  An Evening of Festive Banquet, Music &amp; Heartfelt Thanksgiving
                </p>
              </div>
            </div>

            {/* =====================================================================
                SECTION 2: COUPLE NAMES IN METALLIC GOLD SHIMMER
               ===================================================================== */}
            <div className="relative z-10 text-center my-6 sm:my-8 py-5 border-y border-gold-500/30 max-w-2xl mx-auto">
              <div className="space-y-1">
                <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-imperial-950 font-medium tracking-tight">
                  <span className="gold-text-shimmer inline-block">Robin Varghese</span>
                </h1>

                <div className="flex items-center justify-center space-x-4 my-2">
                  <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-gold-500" />
                  <span className="font-pinyon text-3xl sm:text-5xl text-gold-600 font-normal select-none">
                    &amp;
                  </span>
                  <span className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-gold-500" />
                </div>

                <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-imperial-950 font-medium tracking-tight">
                  <span className="gold-text-shimmer inline-block">Benigla J L</span>
                </h1>
              </div>

              {/* Honoring the Families */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-5 border-t border-gold-400/20 text-xs text-stone-700 font-serif">
                <div className="space-y-0.5">
                  <span className="font-cinzel text-[9px] tracking-widest uppercase text-gold-700 font-semibold block">
                    SON OF
                  </span>
                  <p className="font-semibold text-imperial-950 text-sm">
                    {couple.groom.parents.father} &amp; {couple.groom.parents.mother}
                  </p>
                  <p className="text-[11px] text-stone-500 italic">
                    {couple.groom.origin}
                  </p>
                </div>

                <div className="space-y-0.5">
                  <span className="font-cinzel text-[9px] tracking-widest uppercase text-gold-700 font-semibold block">
                    DAUGHTER OF
                  </span>
                  <p className="font-semibold text-imperial-950 text-sm">
                    {couple.bride.parents.father} &amp; {couple.bride.parents.mother}
                  </p>
                  <p className="text-[11px] text-stone-500 italic">
                    {couple.bride.origin}
                  </p>
                </div>
              </div>

              {/* Holy Scripture Verse Pill */}
              <div className="inline-block bg-gold-100/70 border border-gold-500/40 px-4 py-1.5 rounded-full mt-6 shadow-sm">
                <p className="font-serif italic text-imperial-950 text-xs sm:text-sm">
                  “{couple.verse.text}” —{' '}
                  <span className="font-cinzel font-semibold text-gold-800">
                    {couple.verse.reference}
                  </span>
                </p>
              </div>
            </div>

            {/* =====================================================================
                SECTION 3: THE IMPERIAL DATE & VENUE SEAL (ARCHITECTURAL PASS)
               ===================================================================== */}
            <div className="relative z-10 max-w-2xl mx-auto my-6 sm:my-8">
              <div className="bg-gradient-to-r from-imperial-950 via-[#300C13] to-imperial-950 text-white border-2 border-gold-500 p-5 sm:p-6 shadow-2xl deckled-card-gold rounded-sm">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center">
                  
                  {/* Left: Day & Month */}
                  <div className="flex items-center justify-center space-x-3.5 md:border-r border-gold-500/40 md:pr-4">
                    <div className="font-cinzel text-5xl sm:text-6xl text-gold-300 font-bold leading-none">
                      {receptionSite.day}
                    </div>
                    <div className="text-left font-cinzel text-xs tracking-[0.25em] uppercase text-stone-200">
                      <div className="font-bold text-gold-300 text-sm">
                        {receptionSite.month}
                      </div>
                      <div className="text-gold-200/90 text-xs">
                        {receptionSite.year}
                      </div>
                      <div className="text-stone-300 text-[10px] mt-0.5">
                        {receptionSite.dayOfWeek}
                      </div>
                    </div>
                  </div>

                  {/* Center: Evening Time */}
                  <div className="font-cinzel md:border-r border-gold-500/40 md:px-3 py-2 md:py-0 border-y md:border-y-0 border-gold-500/20">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-stone-400 block mb-0.5">
                      BANQUET ARRIVAL
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-gold-300 tracking-wider">
                      {receptionSite.time}
                    </span>
                    <span className="text-[9px] tracking-wider text-gold-400/80 uppercase block mt-0.5 font-sans">
                      EVENING CELEBRATION
                    </span>
                  </div>

                  {/* Right: Venue Proclamation */}
                  <div className="font-cinzel md:pl-3">
                    <span className="text-[10px] tracking-[0.25em] uppercase text-stone-400 block mb-0.5">
                      VENUE
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-gold-300 block leading-tight">
                      {receptionSite.venue.name}
                    </span>
                    <span className="text-[10px] tracking-wider text-stone-300 uppercase block mt-1 font-sans">
                      Punniyam, Kanyakumari
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================================================================
                SECTION 4: INTERACTIVE ACTION SUITE
               ===================================================================== */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
              
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
                <span>{blessingSent ? 'BLESSING SENT! ❤️' : 'SEND A BLESSING'}</span>
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

      {/* Cameo Full Photo Modal Lightbox */}
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
