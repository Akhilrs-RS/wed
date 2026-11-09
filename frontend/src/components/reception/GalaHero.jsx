import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, Navigation, Calendar, ExternalLink, ChevronDown, Maximize2, X, Clock } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';
import confetti from 'canvas-confetti';

export default function GalaHero() {
  const { couple, receptionSite } = weddingData;
  const [blessingSent, setBlessingSent] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Live Countdown state targeting Dec 30, 2026, 5:30 PM
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(receptionSite.fullDateString).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [receptionSite.fullDateString]);

  const triggerHeroBlessing = () => {
    setBlessingSent(true);
    try {
      confetti({
        particleCount: 85,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#9E2A2B', '#FAF6F0', '#E6C687', '#3B0E17', '#F5D061']
      });
    } catch (e) {
      console.log('Confetti error:', e);
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
      id="gala-hero"
      className="relative min-h-screen pt-32 pb-16 sm:pb-24 flex flex-col items-center justify-center overflow-hidden text-center text-white select-none"
    >
      {/* Radiant Starlight Bokeh Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/4 left-[10%] w-3.5 h-3.5 rounded-full bg-amber-400/40 blur-[1px] animate-pulse" />
        <div
          className="absolute top-1/3 right-[12%] w-4 h-4 rounded-full bg-gold-300/45 blur-[2px] animate-ping"
          style={{ animationDuration: '4.5s' }}
        />
        <div
          className="absolute bottom-1/4 left-[15%] w-3 h-3 rounded-full bg-amber-300/50 blur-[1px] animate-pulse"
          style={{ animationDuration: '3.2s' }}
        />
        <div
          className="absolute bottom-1/3 right-[18%] w-3 h-3 rounded-full bg-white/70 blur-[1px] animate-ping"
          style={{ animationDuration: '5s' }}
        />
        <div
          className="absolute top-[18%] right-[32%] w-2.5 h-2.5 rounded-full bg-gold-400/50 blur-[0.5px] animate-pulse"
          style={{ animationDuration: '2.8s' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 my-auto">
        <ScrollReveal animation="fade-up" duration={850}>
          
          {/* =====================================================================
              1. ROYAL CAMEO MEDALLION WITH bb.jpg
             ===================================================================== */}
          <div className="inline-flex items-center justify-center relative mb-6">
            {/* Pulsing Starlight Halo */}
            <div className="absolute -inset-3 rounded-full border-2 border-gold-400/40 animate-pulse pointer-events-none" />

            {/* Latin Cross Crest */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-gold-400 bg-imperial-950 flex items-center justify-center shadow-lg z-20">
              <span className="font-cinzel text-xs text-gold-300 font-bold">✝</span>
            </div>

            {/* Cameo Brooch Circle Framing bb.jpg */}
            <div
              onClick={() => setModalOpen(true)}
              className="group relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full border-4 border-gold-400/80 shadow-[0_12px_45px_rgba(212,175,55,0.45)] p-1 bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 cursor-pointer overflow-hidden transform transition-all duration-500 hover:scale-105 active:scale-95"
              title="Click to view full portrait"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden border border-gold-200/60 shadow-inner">
                <img
                  src={couple.heroImage || '/images/bb.jpg'}
                  alt="Robin Varghese & Benigla J L"
                  className="w-full h-full object-cover object-[center_32%] transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none" />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 size={16} className="text-gold-200 drop-shadow" />
                </div>
              </div>
            </div>

            {/* Bottom R & B Ribbon Badge */}
            <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-imperial-950 text-gold-300 border border-gold-400/90 text-[10px] sm:text-xs font-cinzel tracking-[0.25em] uppercase font-bold shadow-2xl flex items-center space-x-1.5 z-20 whitespace-nowrap">
              <span>{couple.monogram}</span>
              <span className="text-gold-500 text-[8px]">•</span>
              <span className="text-[9px] text-gold-300/90">30.12.26</span>
            </div>
          </div>

          {/* =====================================================================
              2. GALA RECEPTION TITLE & PROCLAMATION
             ===================================================================== */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-300 font-semibold">
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-gold-400" />
              <span>THE ROYAL WEDDING RECEPTION CELEBRATION</span>
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-gold-400" />
            </div>

            {/* Couple Names in Metallic Gold Foil Shimmer */}
            <div className="py-2">
              <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white">
                <span className="gold-text-shimmer inline-block">Robin Varghese</span>
              </h1>
              <div className="flex items-center justify-center space-x-4 my-2">
                <span className="w-12 sm:w-24 h-[1px] bg-gradient-to-r from-transparent to-gold-400" />
                <span className="font-pinyon text-4xl sm:text-5xl text-gold-400 select-none">&amp;</span>
                <span className="w-12 sm:w-24 h-[1px] bg-gradient-to-l from-transparent to-gold-400" />
              </div>
              <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white">
                <span className="gold-text-shimmer inline-block">Benigla J L</span>
              </h1>
            </div>

            <p className="font-pinyon text-2xl sm:text-3xl text-gold-200/90 tracking-wide max-w-xl mx-auto">
              An Evening of Festive Banquet, Music &amp; Heartfelt Thanksgiving
            </p>

            <div className="inline-block bg-imperial-950/70 border border-gold-400/40 px-4 py-1.5 rounded-full shadow-md">
              <p className="font-serif italic text-gold-200 text-xs sm:text-sm">
                “{couple.verse.text}” —{' '}
                <span className="font-cinzel font-semibold text-gold-400">
                  {couple.verse.reference}
                </span>
              </p>
            </div>
          </div>

          {/* =====================================================================
              3. INTEGRATED LIVE RECEPTION COUNTDOWN (DEC 30, 2026 • 5:30 PM)
             ===================================================================== */}
          <div className="my-8 max-w-2xl mx-auto">
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#24060E]/90 to-[#180308]/90 border border-gold-400/50 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-center space-x-2 text-[10px] sm:text-xs font-cinzel tracking-[0.25em] text-gold-300 uppercase mb-3 font-semibold">
                <Clock size={13} className="text-gold-400" />
                <span>COUNTDOWN TO THE GALA BANQUET</span>
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {[
                  { value: timeLeft.days, label: 'DAYS' },
                  { value: timeLeft.hours, label: 'HOURS' },
                  { value: timeLeft.minutes, label: 'MINUTES' },
                  { value: timeLeft.seconds, label: 'SECONDS' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 sm:p-3 rounded-xl bg-imperial-950/90 border border-gold-500/30 text-center shadow-inner"
                  >
                    <div className="font-cinzel text-2xl sm:text-4xl font-bold text-gold-300 leading-none">
                      {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="font-cinzel text-[9px] sm:text-[10px] tracking-widest text-gold-400/70 uppercase mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-[11px] sm:text-xs font-cinzel tracking-wider text-stone-300 mt-3 pt-3 border-t border-gold-500/20">
                WEDNESDAY, 30 DECEMBER 2026 • 5:30 PM • UTHIRAM AUDITORIUM
              </div>
            </div>
          </div>

          {/* =====================================================================
              4. INTERACTIVE ACTION SUITE
             ===================================================================== */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
            <button
              onClick={triggerHeroBlessing}
              className="group relative inline-flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-imperial-900 to-imperial-800 hover:from-imperial-800 hover:to-imperial-700 text-gold-200 font-cinzel text-xs tracking-[0.2em] uppercase font-semibold border border-gold-400 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Heart
                size={14}
                className={`text-gold-400 transition-transform ${
                  blessingSent ? 'scale-125 fill-gold-400' : 'group-hover:scale-110'
                }`}
              />
              <span>{blessingSent ? 'BLESSING SENT! ✨' : 'SEND A BLESSING'}</span>
            </button>

            <a
              href={receptionSite.venue.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3.5 bg-[#2B0812]/90 hover:bg-imperial-800 text-gold-200 border border-gold-400/60 font-cinzel text-xs tracking-[0.15em] uppercase font-semibold shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <Navigation size={13} className="text-gold-400" />
              <span>NAVIGATE VENUE</span>
              <ExternalLink size={11} className="text-gold-400" />
            </a>

            <a
              href={createGoogleCalendarLink(
                'Robin & Benigla - Wedding Reception',
                receptionSite.fullDateString,
                receptionSite.venue.fullAddress,
                `Join Robin Varghese & Benigla J L for their Wedding Reception at ${receptionSite.venue.name}`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-3.5 bg-imperial-950/90 hover:bg-black text-gold-300 border border-gold-400/50 font-cinzel text-xs tracking-[0.15em] uppercase font-semibold shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <Calendar size={13} className="text-gold-400" />
              <span>ADD TO CALENDAR</span>
            </a>
          </div>

          {/* Scroll Cue */}
          <div
            onClick={() => {
              const el = document.getElementById('program');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-8 text-center flex flex-col items-center justify-center cursor-pointer select-none group"
          >
            <span className="font-pinyon text-lg text-gold-300/80 group-hover:text-gold-200 transition-colors">
              Explore the Evening Program
            </span>
            <ChevronDown size={18} className="text-gold-400 animate-bounce mt-0.5" />
          </div>
        </ScrollReveal>
      </div>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full flex flex-col items-center"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white p-2 transition-colors cursor-pointer"
              aria-label="Close portrait view"
            >
              <X size={28} />
            </button>
            <img
              src={couple.heroImage || '/images/bb.jpg'}
              alt="Robin Varghese & Benigla J L"
              className="max-h-[82vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-gold-400/30"
            />
            <p className="font-cinzel text-sm tracking-widest uppercase text-gold-300 mt-4">
              Robin Varghese &amp; Benigla J L
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
