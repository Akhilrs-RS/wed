import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Heart, Maximize2, X, Navigation, Calendar, ExternalLink } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';
import confetti from 'canvas-confetti';

export default function ReceptionHero() {
  const { couple, receptionSite } = weddingData;
  const [scrollY, setScrollY] = useState(0);
  const [blessingSent, setBlessingSent] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Smooth 60fps parallax scroll tracking
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerHeroBlessing = () => {
    setBlessingSent(true);
    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#94263A', '#FAF7F2', '#E6C687', '#3B0E17']
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
    <div className="relative overflow-hidden">
      {/* =========================================================================
          ACT I: FULLSCREEN (100vh) CINEMATIC NOCTURNE PARALLAX STAGE
         ========================================================================= */}
      <section className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-stone-950 text-center select-none">
        
        {/* Dynamic Parallax Floral Arch Canvas */}
        <div
          className="absolute -inset-x-0 -top-20 -bottom-20 pointer-events-none will-change-transform"
          style={{
            transform: `translate3d(0, ${Math.min(scrollY * 0.38, 320)}px, 0) scale(${
              1 + Math.min(scrollY * 0.00035, 0.16)
            })`
          }}
        >
          <img
            src="/images/swans_arch.jpg"
            alt="Robin & Benigla Royal Arch"
            className="w-full h-full object-cover object-[center_35%] brightness-[0.92] contrast-[1.05]"
          />
          {/* Fairytale Twilight Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/60 pointer-events-none" />
        </div>

        {/* Ambient Stardust & Living Firefly Light Nodes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[5]">
          <div className="absolute top-1/4 left-[12%] w-2.5 h-2.5 rounded-full bg-amber-300/50 blur-[1px] animate-pulse" />
          <div
            className="absolute top-1/3 right-[15%] w-3.5 h-3.5 rounded-full bg-yellow-200/60 blur-[2px] animate-ping"
            style={{ animationDuration: '4s' }}
          />
          <div
            className="absolute top-2/3 left-[18%] w-3 h-3 rounded-full bg-amber-400/40 blur-[1px] animate-pulse"
            style={{ animationDuration: '3.2s' }}
          />
          <div
            className="absolute top-1/2 right-[22%] w-2 h-2 rounded-full bg-white/70 blur-[0.5px] animate-ping"
            style={{ animationDuration: '4.8s' }}
          />
          <div
            className="absolute bottom-1/4 left-[35%] w-2.5 h-2.5 rounded-full bg-gold-400/50 blur-[1px] animate-pulse"
            style={{ animationDuration: '2.5s' }}
          />
          <div
            className="absolute top-[18%] right-[38%] w-2 h-2 rounded-full bg-amber-200/50 blur-[1px] animate-ping"
            style={{ animationDuration: '3.6s' }}
          />
        </div>

        {/* Top Floating Glassmorphic Pill */}
        <div
          className="relative z-10 pt-24 sm:pt-28 px-4 will-change-transform"
          style={{
            transform: `translate3d(0, -${Math.min(scrollY * 0.12, 80)}px, 0)`,
            opacity: Math.max(1 - scrollY / 420, 0)
          }}
        >
          <div className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full bg-black/45 backdrop-blur-md border border-amber-400/60 shadow-2xl transition-transform hover:scale-105">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping" />
            <span className="font-script text-base sm:text-lg text-amber-100 block leading-tight pt-0.5">
              Wedding Reception
            </span>
            <span className="text-amber-400/70 text-xs">•</span>
            <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] text-amber-200 font-semibold uppercase">
              30.12.26
            </span>
          </div>
        </div>

        {/* Central Monumental Calligraphic Script Names */}
        <div
          className="relative z-10 my-auto py-8 px-4 will-change-transform"
          style={{
            transform: `translate3d(0, -${Math.min(scrollY * 0.18, 120)}px, 0)`,
            opacity: Math.max(1 - scrollY / 580, 0)
          }}
        >
          <div className="space-y-1 sm:space-y-2">
            <h1 className="font-script text-6xl sm:text-8xl md:text-9xl text-amber-100 font-normal leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] tracking-wide">
              {couple.groom.firstName}
            </h1>
            <div className="font-script text-4xl sm:text-5xl md:text-6xl text-amber-200/90 my-1 sm:my-2 italic drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] select-none">
              &amp;
            </div>
            <h2 className="font-script text-6xl sm:text-8xl md:text-9xl text-amber-100 font-normal leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] tracking-wide">
              {couple.bride.firstName}
            </h2>

            <p className="font-pinyon text-2xl sm:text-3xl text-amber-200/95 tracking-wide pt-3 sm:pt-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              An Evening of Festive Banquet &amp; Music
            </p>
          </div>
        </div>

        {/* Bottom Scroll Guide */}
        <div
          className="relative z-10 pb-10 flex flex-col items-center text-amber-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] cursor-pointer"
          style={{ opacity: Math.max(1 - scrollY / 240, 0) }}
          onClick={() => {
            const el = document.getElementById('reception-proclamation');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="font-script text-lg sm:text-xl tracking-wider mb-1">
            Scroll to celebrate
          </span>
          <ChevronDown size={22} className="animate-bounce text-amber-300" />
        </div>
      </section>

      {/* =========================================================================
          ACT II: THE ROYAL RECEPTION PROCLAMATION & INVITATION PORTAL
         ========================================================================= */}
      <section
        id="reception-proclamation"
        className="relative bg-[#FAF6F0] py-20 md:py-28 px-4 sm:px-6 md:px-12 border-b border-amber-900/10"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal animation="fade-up" duration={800}>
            <div className="relative bg-white/95 backdrop-blur-md border-2 border-gold-500/50 rounded-t-[90px] sm:rounded-t-[140px] p-6 sm:p-10 md:p-14 deckled-card-gold shadow-2xl transition-all duration-300">
              
              {/* Top Royal Emblem */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center relative">
                  <div className="w-14 h-14 rounded-full border-2 border-gold-500 bg-gradient-to-b from-gold-100 to-white flex items-center justify-center shadow-lg p-3">
                    <span className="text-2xl text-gold-700 font-cinzel font-bold">✝</span>
                  </div>
                  <div className="absolute -inset-1 rounded-full border border-gold-400/50 animate-ping pointer-events-none" />
                </div>

                <div className="flex items-center justify-center space-x-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-cinzel text-gold-700 font-semibold mt-3">
                  <span className="w-8 h-[1.5px] bg-gold-500/60" />
                  <span>THE WEDDING RECEPTION</span>
                  <span className="w-8 h-[1.5px] bg-gold-500/60" />
                </div>
              </div>

              {/* Grid: Cathedral Arch Portrait (Left) + Proclamation Lockup (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* LEFT COLUMN: Archway Couple Portrait (bb.jpg) */}
                <div className="lg:col-span-5 relative group order-1">
                  <ScrollReveal animation="zoom-in" delay={150} duration={800}>
                    <div className="relative rounded-t-[190px] rounded-b-[24px] border-4 border-gold-500/70 p-3 bg-white shadow-2xl deckled-card-gold transition-all duration-500 group-hover:border-gold-500 group-hover:scale-[1.01]">
                      
                      {/* Interactive Image Container */}
                      <div
                        onClick={() => setModalOpen(true)}
                        className="relative rounded-t-[180px] rounded-b-[18px] overflow-hidden h-[420px] sm:h-[490px] shadow-inner cursor-pointer"
                        title="Click to view full photo"
                      >
                        <img
                          src={couple.heroImage || '/images/bb.jpg'}
                          alt="Robin Varghese & Benigla J L"
                          className="w-full h-full object-cover object-[center_38%] transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-imperial-950/75 via-transparent to-transparent pointer-events-none" />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-4 py-2 bg-black/75 backdrop-blur-sm text-gold-200 text-xs font-cinzel tracking-wider rounded-full flex items-center space-x-2 border border-gold-400 shadow-xl">
                            <Maximize2 size={13} />
                            <span>VIEW FULL PORTRAIT</span>
                          </span>
                        </div>

                        {/* Caption Overlay */}
                        <div className="absolute bottom-5 left-0 right-0 text-center text-white px-4 pointer-events-none">
                          <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold-300 block mb-1">
                            CELEBRATING OUR UNION
                          </span>
                          <h3 className="font-cinzel text-xl sm:text-2xl font-medium tracking-tight">
                            Robin &amp; Benigla
                          </h3>
                        </div>
                      </div>

                      {/* Top Medallion Cross */}
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-gold-500 bg-[#FAF7F2] flex items-center justify-center shadow-md">
                        <span className="font-cinzel text-sm text-gold-700 font-bold">✝</span>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>

                {/* RIGHT COLUMN: Typography, Verse, Date & Action Suite */}
                <div className="lg:col-span-7 text-center lg:text-left order-2 space-y-6">
                  <ScrollReveal animation="fade-left" delay={250}>
                    {/* Scripture Verse Pill */}
                    <div className="inline-block bg-gold-100/70 border border-gold-500/40 px-4 py-2 rounded-full mb-2 shadow-sm">
                      <p className="font-serif italic text-imperial-950 text-xs sm:text-sm">
                        “{couple.verse.text}” —{' '}
                        <span className="font-cinzel font-semibold text-gold-800">
                          {couple.verse.reference}
                        </span>
                      </p>
                    </div>

                    {/* Couple Names */}
                    <div className="space-y-1.5 mt-3">
                      <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-imperial-950 font-normal tracking-tight leading-none">
                        Robin Varghese
                      </h1>
                      <div className="flex items-center justify-center lg:justify-start space-x-4 my-2">
                        <span className="w-12 h-[1px] bg-gold-500" />
                        <span className="font-pinyon text-4xl sm:text-5xl text-gold-600 font-normal select-none">
                          &amp;
                        </span>
                        <span className="w-12 h-[1px] bg-gold-500" />
                      </div>
                      <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-imperial-950 font-normal tracking-tight leading-none">
                        Benigla J L
                      </h1>
                    </div>

                    {/* Warm Invitation Paragraph */}
                    <p className="font-serif italic text-stone-700 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mt-4">
                      Together with their parents, you are warmly invited to an evening of joyous feast, music, and celebration in honor of their wedding.
                    </p>

                    {/* Date Lockup Badge Targeting Dec 30, 2026 */}
                    <div className="inline-flex items-center space-x-6 p-4 sm:p-5 bg-imperial-950 text-white rounded-none border-2 border-gold-500 shadow-xl deckled-card-gold mt-6 text-left">
                      <div className="font-cinzel text-4xl sm:text-5xl text-gold-300 font-bold leading-none pr-4 border-r border-gold-500/40">
                        {receptionSite.day}
                      </div>
                      <div className="font-cinzel text-xs tracking-[0.25em] uppercase text-stone-200 space-y-0.5">
                        <div className="font-semibold text-gold-300 text-sm">
                          {receptionSite.month} {receptionSite.year}
                        </div>
                        <div className="text-stone-300 text-[11px]">
                          {receptionSite.dayOfWeek} • {receptionSite.time}
                        </div>
                        <div className="text-gold-400 text-[10px] font-mono tracking-normal pt-0.5">
                          UTHIRAM AUDITORIUM • PUNNIYAM, KANYAKUMARI
                        </div>
                      </div>
                    </div>

                    {/* Action Suite */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6">
                      {/* Send a Blessing Button */}
                      <button
                        onClick={triggerHeroBlessing}
                        className="group relative inline-flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-imperial-900 to-imperial-800 hover:from-imperial-800 hover:to-imperial-700 text-gold-200 font-cinzel text-xs tracking-[0.2em] uppercase font-semibold border border-gold-500/60 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <Heart
                          size={14}
                          className={`text-gold-400 transition-transform ${
                            blessingSent
                              ? 'scale-125 fill-gold-400'
                              : 'group-hover:scale-110'
                          }`}
                        />
                        <span>
                          {blessingSent ? 'BLESSING SENT! ✨' : 'SEND A BLESSING'}
                        </span>
                      </button>

                      {/* Google Maps Button */}
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
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

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
    </div>
  );
}
