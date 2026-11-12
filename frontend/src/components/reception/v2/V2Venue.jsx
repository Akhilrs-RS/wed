import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Copy, Check, Car, Clock } from 'lucide-react';
import { weddingData } from '../../../data/weddingData';
import ScrollReveal from '../../common/ScrollReveal';

export default function V2Venue() {
  const { venue, date, time } = weddingData.receptionSite;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Wedding Reception of Robin & Benigla'
  )}&dates=20261230T120000Z/20261230T170000Z&details=${encodeURIComponent(
    'Wedding Reception Gala celebrating Robin Varghese & Benigla J L at Uthiram Auditorium, Punniyam.'
  )}&location=${encodeURIComponent(venue.fullAddress)}`;

  return (
    <section id="v2-venue" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center space-x-3 text-[10.5px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-400 font-semibold mb-3">
              <span className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent to-gold-400" />
              <span>THE CELEBRATION PAVILION</span>
              <span className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent to-gold-400" />
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-medium tracking-tight">
              Venue &amp; Guest Guide
            </h2>
            <p className="mt-3 text-stone-300 font-serif italic text-base sm:text-lg max-w-lg mx-auto">
              “Uthiram Auditorium, Punniyam — An elegant destination for an evening of joy.”
            </p>
          </div>
        </ScrollReveal>

        {/* Panoramic Venue Showcase */}
        <ScrollReveal animation="zoom-in" duration={800}>
          <div className="rounded-3xl bg-[#12121B]/90 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden backdrop-blur-xl">
            
            {/* Top Panoramic Banner with Drone Pan Sweep */}
            <div className="relative h-[320px] sm:h-[420px] w-full overflow-hidden group">
              <img
                src={venue.image || '/images/auditorium.jpg'}
                alt={venue.name}
                className="w-full h-full object-cover object-center animate-drone-pan will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12121B] via-transparent to-black/40 pointer-events-none" />

              {/* Floating Badges */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <span className="px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-gold-200 text-[10px] font-cinzel tracking-widest uppercase">
                  GRAND RECEPTION BANQUET
                </span>
                <span className="hidden sm:inline-block px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-stone-300 text-[10px] font-cinzel tracking-wider uppercase">
                  KANYAKUMARI DISTRICT
                </span>
              </div>

              {/* Venue Title Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold-400 block mb-1">
                  MAIN AUDITORIUM
                </span>
                <h3 className="font-cinzel text-2xl sm:text-4xl text-white font-medium">
                  {venue.name}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-1">
                  {venue.location}
                </p>
              </div>
            </div>

            {/* Bottom Info & Action Bar */}
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Timing & Full Address */}
              <div className="lg:col-span-6 space-y-4 text-left">
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-400/40 flex items-center justify-center text-gold-300 shrink-0 mt-0.5">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-cinzel tracking-wider text-gold-400 font-semibold block">
                      SCHEDULE &amp; TIMING
                    </span>
                    <p className="font-cinzel text-base sm:text-lg text-white font-bold">
                      {date} • {time} IST
                    </p>
                    <p className="text-xs text-stone-300 font-sans mt-0.5">
                      Evening welcome refreshments followed by felicitation and dinner feast.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 pt-2">
                  {/* Map Pin with Animated Radar Beacon */}
                  <div className="relative w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-400/40 flex items-center justify-center text-gold-300 shrink-0 mt-0.5">
                    <div className="absolute inset-0 rounded-xl border border-gold-400/60 animate-radar-ping pointer-events-none" />
                    <MapPin size={18} className="relative z-10" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-cinzel tracking-wider text-gold-400 font-semibold block">
                      VENUE ADDRESS
                    </span>
                    <p className="font-sans text-sm text-stone-200 leading-relaxed">
                      {venue.fullAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Actions & Amenities */}
              <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <a
                    href={venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-imperial-950 font-cinzel text-xs tracking-wider uppercase font-bold shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 text-center gold-sheen-sweep cursor-pointer"
                  >
                    <Navigation size={15} />
                    <span>GOOGLE MAPS GPS</span>
                  </a>

                  <a
                    href={googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-gold-200 font-cinzel text-xs tracking-wider uppercase font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 text-center cursor-pointer"
                  >
                    <Calendar size={15} className="text-gold-300" />
                    <span>ADD TO CALENDAR</span>
                  </a>
                </div>

                {/* Micro Actions Bar */}
                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center space-x-1.5 text-gold-300 hover:text-white font-cinzel text-[11px] tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copied ? 'ADDRESS COPIED!' : 'COPY ADDRESS'}</span>
                  </button>

                  <div className="inline-flex items-center space-x-1.5 text-stone-300 text-[11px]">
                    <Car size={14} className="text-gold-400" />
                    <span>Complimentary Guest Parking on Premises</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

