import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Heart, Maximize2, X, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';

export default function NewGalaHero() {
  const { couple, receptionSite } = weddingData;
  const [modalOpen, setModalOpen] = useState(false);
  const [blessingSent, setBlessingSent] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate live countdown to Wednesday, 30 December 2026, 5:30 PM IST
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
        particleCount: 75,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#FAF6F0', '#E2C785', '#E11D48']
      });
    } catch (e) {
      console.log('Confetti error:', e);
    }

    setTimeout(() => setBlessingSent(false), 4000);
  };

  return (
    <section id="gala-hero" className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Editorial Showcase Card */}
        <ScrollReveal animation="fade-up" duration={800}>
          <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#2A0710]/85 via-[#1E050B]/90 to-[#140206]/95 border border-gold-400/40 shadow-[0_25px_70px_rgba(0,0,0,0.8)] backdrop-blur-md overflow-hidden">
            
            {/* Top Delicate Label */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center justify-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-300 font-semibold">
                <span className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-gold-400" />
                <span>THE WEDDING RECEPTION GALA</span>
                <span className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-gold-400" />
              </div>
              <p className="font-pinyon text-2xl sm:text-3xl text-gold-200 mt-2">
                An Evening of Festive Banquet, Music &amp; Heartfelt Thanksgiving
              </p>
            </div>

            {/* Asymmetrical Grid: Left Couple Archway + Right Typography & Countdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* ===================================================================
                  LEFT COLUMN: REGAL PORTRAIT ARCHWAY (bb.jpg)
                 =================================================================== */}
              <div className="lg:col-span-5 flex justify-center order-1">
                <div className="relative group w-full max-w-[320px] sm:max-w-[360px]">
                  {/* Outer Ambient Glow */}
                  <div className="absolute -inset-2 rounded-t-[180px] rounded-b-3xl bg-gradient-to-b from-gold-400/20 via-gold-500/10 to-transparent blur-xl pointer-events-none" />

                  {/* Archway Frame */}
                  <div
                    onClick={() => setModalOpen(true)}
                    className="relative rounded-t-[170px] rounded-b-3xl p-2.5 sm:p-3 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 border-2 border-gold-400/80 shadow-[0_15px_50px_rgba(0,0,0,0.9)] cursor-pointer transform transition-all duration-500 hover:scale-[1.02] active:scale-[0.99]"
                    title="Click to view full portrait"
                  >
                    <div className="relative w-full h-[400px] sm:h-[460px] rounded-t-[160px] rounded-b-2xl overflow-hidden bg-black">
                      <img
                        src={couple.heroImage || '/images/bb.jpg'}
                        alt="Robin Varghese & Benigla J L"
                        className="w-full h-full object-cover object-[center_32%] transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Subtle Bottom Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                      {/* Hover Fullscreen Overlay Hint */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="px-4 py-2 rounded-full bg-black/75 backdrop-blur-md border border-gold-400 text-gold-200 text-xs font-cinzel tracking-wider flex items-center space-x-2 shadow-lg">
                          <Maximize2 size={13} />
                          <span>VIEW PORTRAIT</span>
                        </span>
                      </div>

                      {/* Bottom Caption Pill */}
                      <div className="absolute bottom-4 inset-x-4 text-center pointer-events-none">
                        <span className="font-cinzel text-[9px] tracking-[0.25em] uppercase text-gold-300/90 block mb-0.5">
                          FOREVER &amp; ALWAYS
                        </span>
                        <h4 className="font-cinzel text-lg sm:text-xl text-white font-medium">
                          Robin &amp; Benigla
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===================================================================
                  RIGHT COLUMN: MONUMENTAL TYPOGRAPHY, DATE & LIVE COUNTDOWN
                 =================================================================== */}
              <div className="lg:col-span-7 text-center lg:text-left space-y-6 order-2">
                
                {/* Couple Names */}
                <div>
                  <span className="font-pinyon text-3xl sm:text-4xl text-gold-300 block mb-1">
                    Celebrating the Union of
                  </span>
                  <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl text-white font-medium tracking-tight leading-none">
                    Robin <span className="font-script text-3xl sm:text-5xl text-gold-300">&amp;</span> Benigla
                  </h1>
                </div>

                {/* Date & Time Lockup Pill */}
                <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-4 p-4 rounded-2xl bg-white/5 border border-gold-400/30 backdrop-blur-sm text-left">
                  <div className="flex items-center space-x-3 pr-4 border-r border-gold-400/20">
                    <div className="w-10 h-10 rounded-full border border-gold-400/60 bg-[#2E0713] flex items-center justify-center text-gold-300 shrink-0">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-cinzel uppercase tracking-wider text-gold-300 block font-semibold">
                        DATE &amp; DAY
                      </span>
                      <p className="font-cinzel text-sm sm:text-base text-white font-bold">
                        {receptionSite.date}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full border border-gold-400/60 bg-[#2E0713] flex items-center justify-center text-gold-300 shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] font-cinzel uppercase tracking-wider text-gold-300 block font-semibold">
                        GALA COMMENCES
                      </span>
                      <p className="font-cinzel text-sm sm:text-base text-white font-bold">
                        {receptionSite.time} IST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Venue Quick Link */}
                <div className="flex items-center justify-center lg:justify-start space-x-2 text-stone-300 text-xs font-sans">
                  <MapPin size={15} className="text-gold-400 shrink-0" />
                  <span>
                    <strong className="text-gold-200 font-cinzel">{receptionSite.venue.name}</strong> • {receptionSite.venue.fullAddress}
                  </span>
                </div>

                {/* ===============================================================
                    LIVE ROYAL CHRONOMETER
                   =============================================================== */}
                <div className="pt-2">
                  <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold-300/80 block mb-3 font-semibold text-center lg:text-left">
                    COUNTDOWN TO THE CELEBRATION
                  </span>

                  <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-md mx-auto lg:mx-0">
                    {[
                      { label: 'DAYS', value: timeLeft.days },
                      { label: 'HOURS', value: timeLeft.hours },
                      { label: 'MINUTES', value: timeLeft.minutes },
                      { label: 'SECONDS', value: timeLeft.seconds },
                    ].map((unit) => (
                      <div
                        key={unit.label}
                        className="p-3 sm:p-4 rounded-xl bg-gradient-to-b from-[#2E0713] to-[#180309] border border-gold-400/40 text-center shadow-lg transform transition-transform hover:scale-105"
                      >
                        <span className="block font-cinzel text-xl sm:text-3xl text-gold-200 font-bold leading-none animate-digit-tick">
                          {String(unit.value).padStart(2, '0')}
                        </span>
                        <span className="block text-[8px] sm:text-[9.5px] font-cinzel tracking-[0.2em] text-stone-400 mt-1 uppercase">
                          {unit.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={handleSendBlessing}
                    className="group px-6 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-imperial-950 font-cinzel text-xs tracking-wider uppercase font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-2 cursor-pointer gold-sheen-sweep"
                  >
                    <Heart
                      size={15}
                      className={blessingSent ? 'text-rose-700 fill-rose-700' : 'text-imperial-950 fill-imperial-950'}
                    />
                    <span>{blessingSent ? 'BLESSING SENT! ❤️' : 'SEND A BLESSING'}</span>
                  </button>

                  <a
                    href="#gala-venue"
                    className="px-5 py-3 rounded-full bg-[#180309] hover:bg-[#28050E] border border-gold-400/60 text-gold-200 font-cinzel text-xs tracking-wider uppercase font-semibold transition-all hover:scale-105 active:scale-95 shadow-md flex items-center space-x-2 cursor-pointer"
                  >
                    <MapPin size={14} className="text-gold-400" />
                    <span>VENUE &amp; MAP</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Fullscreen Photo Lightbox Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer animate-fade-in"
        >
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-6 right-6 text-gold-300 hover:text-white p-2 rounded-full border border-gold-400/50 bg-black/60 transition-colors"
            aria-label="Close portrait view"
          >
            <X size={24} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl max-h-[85vh] rounded-2xl overflow-hidden border-2 border-gold-400 shadow-2xl bg-black cursor-default"
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
