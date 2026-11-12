import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Heart, Maximize2, X, Navigation } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingData } from '../../../data/weddingData';
import ScrollReveal from '../../common/ScrollReveal';

export default function V2Hero() {
  const { couple, receptionSite } = weddingData;
  const [modalOpen, setModalOpen] = useState(false);
  const [blessingSent, setBlessingSent] = useState(false);
  const [cardTilt, setCardTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const handlePortraitMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Elegant tilt: max 5 degrees
    const rotateX = ((y - centerY) / centerY) * -5.5;
    const rotateY = ((x - centerX) / centerX) * 5.5;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setCardTilt({ rotateX, rotateY, glareX, glareY });
  };

  const handlePortraitMouseLeave = () => {
    setCardTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  useEffect(() => {
    const targetDate = new Date(receptionSite.fullDateString || '2026-12-30T17:30:00+05:30').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [receptionSite.fullDateString]);

  const handleSendBlessing = () => {
    if (blessingSent) return;
    setBlessingSent(true);

    try {
      confetti({
        particleCount: 80,
        spread: 85,
        origin: { y: 0.7 },
        colors: ['#E5C578', '#FAF6F0', '#D4AF37', '#E11D48']
      });
    } catch (e) {
      console.log('Confetti error:', e);
    }

    setTimeout(() => setBlessingSent(false), 4000);
  };

  return (
    <section id="v2-hero" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Split Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ===================================================================
              LEFT COLUMN: ARCHITECTURAL PORTRAIT SHOWCASE (bb.jpg)
             =================================================================== */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
            <ScrollReveal animation="zoom-in" duration={900}>
              <div className="relative group w-full max-w-[340px] sm:max-w-[400px]">
                
                {/* Ambient Multi-Layer Glow */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-gold-500/20 via-amber-400/10 to-transparent blur-2xl pointer-events-none" />

                {/* Beveled Fashion Frame with Interactive 3D Perspective Tilt */}
                <div
                  onClick={() => setModalOpen(true)}
                  onMouseMove={handlePortraitMouseMove}
                  onMouseLeave={handlePortraitMouseLeave}
                  style={{
                    transform: `perspective(1000px) rotateX(${cardTilt.rotateX}deg) rotateY(${cardTilt.rotateY}deg)`,
                    transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="relative rounded-3xl p-3 bg-gradient-to-b from-white/15 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.9)] cursor-pointer will-change-transform"
                  title="Click to view high-resolution portrait"
                >
                  <div className="relative w-full h-[460px] sm:h-[520px] rounded-2xl overflow-hidden bg-black">
                    {/* Ken Burns Breathing Camera Motion */}
                    <img
                      src={couple.heroImage || '/images/bb.jpg'}
                      alt="Robin Varghese & Benigla J L"
                      className="w-full h-full object-cover object-[center_32%] animate-ken-burns will-change-transform"
                    />

                    {/* Dynamic Specular Sheen reacting to cursor position */}
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at ${cardTilt.glareX}% ${cardTilt.glareY}%, rgba(255,255,255,0.35) 0%, rgba(212,175,55,0.15) 35%, transparent 70%)`
                      }}
                    />

                    {/* Gradient Overlay for Mood & Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                    {/* Top Floating Origin Pill */}
                    <div className="absolute top-4 left-4 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-gold-400/50 text-[9.5px] font-cinzel tracking-widest uppercase text-gold-300">
                      <span>KANYAKUMARI • KERALA UNION</span>
                    </div>

                    {/* Hover Fullscreen Overlay Hint */}
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-md border border-gold-400 text-gold-200 text-xs font-cinzel tracking-widest uppercase flex items-center space-x-2 shadow-2xl">
                        <Maximize2 size={13} />
                        <span>VIEW PORTRAIT</span>
                      </span>
                    </div>

                    {/* Bottom Monogram Watermark on Image */}
                    <div className="absolute bottom-5 inset-x-5 text-center pointer-events-none">
                      <span className="font-script text-3xl sm:text-4xl text-gold-200 block drop-shadow-md">
                        {couple.monogram}
                      </span>
                      <p className="font-cinzel text-[9px] tracking-[0.3em] uppercase text-stone-300 mt-0.5">
                        ROBIN &amp; BENIGLA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: EDITORIAL TYPOGRAPHY & CHRONOMETER
             =================================================================== */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7 order-2 lg:order-2">
            
            <ScrollReveal animation="fade-left" delay={150}>
              <div className="inline-flex items-center space-x-3 text-[10.5px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-400 font-semibold">
                <span className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent to-gold-400" />
                <span>THE WEDDING RECEPTION GALA</span>
                <span className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent to-gold-400" />
              </div>

              {/* Couple Grand Typography */}
              <div className="mt-3 space-y-2">
                <h1 className="font-cinzel text-4xl sm:text-6xl lg:text-7xl text-white font-medium tracking-tight leading-none">
                  Robin <span className="font-script text-4xl sm:text-6xl text-gold-300">&amp;</span> Benigla
                </h1>
                <p className="font-serif italic text-stone-300 text-base sm:text-lg lg:text-xl max-w-xl mx-auto lg:mx-0">
                  “Two lives, two families, and one beautiful promise. We invite you to an evening of joyous feast, music, and celebration.”
                </p>
              </div>
            </ScrollReveal>

            {/* Date, Time & Location Pill Deck */}
            <ScrollReveal animation="fade-left" delay={250}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto lg:mx-0">
                
                {/* Date & Time Capsule */}
                <div className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 text-left flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gold-500/15 border border-gold-400/40 flex items-center justify-center text-gold-300 shrink-0">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <span className="block text-[9.5px] font-cinzel uppercase tracking-widest text-gold-400/90 font-semibold">
                      DATE &amp; TIME
                    </span>
                    <p className="font-cinzel text-sm sm:text-base text-white font-bold leading-tight">
                      {receptionSite.date}
                    </p>
                    <span className="text-xs text-stone-300 font-sans">
                      {receptionSite.time} IST
                    </span>
                  </div>
                </div>

                {/* Venue Capsule */}
                <div className="p-4 rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 text-left flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gold-500/15 border border-gold-400/40 flex items-center justify-center text-gold-300 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[9.5px] font-cinzel uppercase tracking-widest text-gold-400/90 font-semibold">
                      CELEBRATION VENUE
                    </span>
                    <p className="font-cinzel text-sm sm:text-base text-white font-bold leading-tight truncate">
                      {receptionSite.venue.name}
                    </p>
                    <span className="text-xs text-stone-300 font-sans truncate block">
                      {receptionSite.venue.location}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* ===============================================================
                SEGMENTED GLASS CHRONOMETER
               =============================================================== */}
            <ScrollReveal animation="fade-left" delay={350}>
              <div className="pt-1">
                <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold-400/80 block mb-3 font-semibold text-center lg:text-left">
                  COUNTDOWN TO THE CELEBRATION
                </span>

                <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-lg mx-auto lg:mx-0">
                  {[
                    { label: 'DAYS', value: timeLeft.days },
                    { label: 'HOURS', value: timeLeft.hours },
                    { label: 'MINUTES', value: timeLeft.minutes },
                    { label: 'SECONDS', value: timeLeft.seconds },
                  ].map((unit) => (
                    <div
                      key={unit.label}
                      className="p-3.5 sm:p-4 rounded-2xl bg-[#14141E]/90 border border-white/10 text-center shadow-xl transform transition-transform hover:scale-105"
                    >
                      <span className="block font-cinzel text-2xl sm:text-4xl text-gold-200 font-bold leading-none animate-digit-tick">
                        {String(unit.value).padStart(2, '0')}
                      </span>
                      <span className="block text-[8px] sm:text-[9.5px] font-cinzel tracking-[0.2em] text-stone-400 mt-1 uppercase">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal animation="fade-left" delay={450}>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={handleSendBlessing}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-imperial-950 font-cinzel text-xs tracking-wider uppercase font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-2 cursor-pointer gold-sheen-sweep"
                >
                  <Heart
                    size={15}
                    className={blessingSent ? 'text-rose-700 fill-rose-700' : 'text-imperial-950 fill-imperial-950'}
                  />
                  <span>{blessingSent ? 'BLESSING SENT! ❤️' : 'SEND A BLESSING'}</span>
                </button>

                <a
                  href="#v2-venue"
                  className="px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-gold-200 font-cinzel text-xs tracking-wider uppercase font-semibold transition-all hover:scale-105 active:scale-95 shadow-md flex items-center space-x-2 cursor-pointer"
                >
                  <Navigation size={14} className="text-gold-400" />
                  <span>VENUE &amp; MAP</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Fullscreen Photo Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer animate-fade-in"
        >
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-6 right-6 text-gold-300 hover:text-white p-2.5 rounded-full border border-white/20 bg-black/60 transition-colors"
            aria-label="Close photo view"
          >
            <X size={24} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl max-h-[85vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black cursor-default"
          >
            <img
              src={couple.heroImage || '/images/bb.jpg'}
              alt="Robin & Benigla"
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}

