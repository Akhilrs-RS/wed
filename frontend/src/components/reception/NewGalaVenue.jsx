import React, { useState } from 'react';
import { MapPin, Navigation, Calendar, Copy, Check, Car, Sparkles } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';

export default function NewGalaVenue() {
  const { venue, date, time } = weddingData.receptionSite;
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(venue.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  // Google Calendar Link generator for Wednesday, 30 Dec 2026, 5:30 PM IST
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Wedding Reception of Robin & Benigla'
  )}&dates=20261230T120000Z/20261230T170000Z&details=${encodeURIComponent(
    'Wedding Reception Gala celebrating Robin Varghese & Benigla J L at Uthiram Auditorium, Punniyam.'
  )}&location=${encodeURIComponent(venue.fullAddress)}`;

  return (
    <section id="gala-venue" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-400 font-semibold mb-3">
              <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gold-400" />
              <span>THE DESTINATION</span>
              <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gold-400" />
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight">
              Venue &amp; Guest Concierge
            </h2>
            <p className="mt-3 text-stone-300 font-serif italic text-base sm:text-lg max-w-lg mx-auto">
              “Join us at the grand ballroom of Uthiram Auditorium for an unforgettable evening.”
            </p>
          </div>
        </ScrollReveal>

        {/* Venue Showcase Card */}
        <ScrollReveal animation="zoom-in" duration={800}>
          <div className="relative rounded-3xl bg-gradient-to-b from-[#28060F]/85 via-[#1C0308]/90 to-[#120205] border border-gold-400/40 shadow-[0_25px_70px_rgba(0,0,0,0.8)] backdrop-blur-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Venue Photo */}
              <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] overflow-hidden group">
                <img
                  src={venue.image || '/images/auditorium.jpg'}
                  alt={venue.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#180309] via-transparent to-black/20 pointer-events-none" />

                {/* Badge on Photo */}
                <div className="absolute top-6 left-6 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-gold-400/60 text-gold-200 text-[10px] font-cinzel tracking-widest uppercase">
                  <span>GRAND BANQUET HALL</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold-300 block mb-1">
                    BANQUET CELEBRATION
                  </span>
                  <h3 className="font-cinzel text-2xl sm:text-3xl text-white font-medium">
                    {venue.name}
                  </h3>
                  <p className="text-stone-300 text-xs mt-1">
                    {venue.location}
                  </p>
                </div>
              </div>

              {/* Right Column: Directions, Calendar, and Tips */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                
                {/* Event Schedule Details */}
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/5 border border-gold-400/25">
                    <span className="text-[10px] uppercase font-cinzel tracking-wider text-gold-400 font-semibold block mb-1">
                      RECEPTION TIMING
                    </span>
                    <p className="font-cinzel text-lg sm:text-xl text-white font-bold">
                      {date}
                    </p>
                    <p className="text-stone-300 text-xs mt-0.5">
                      Doors Open at {time} IST • Evening Dinner &amp; Music
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-gold-400/25">
                    <span className="text-[10px] uppercase font-cinzel tracking-wider text-gold-400 font-semibold block mb-1">
                      FULL ADDRESS
                    </span>
                    <p className="font-sans text-sm text-stone-200 leading-relaxed">
                      {venue.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Interactive Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {/* Google Maps Button */}
                  <a
                    href={venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-imperial-950 font-cinzel text-xs tracking-wider uppercase font-bold shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 cursor-pointer gold-sheen-sweep text-center"
                  >
                    <Navigation size={15} />
                    <span>GOOGLE MAPS GPS</span>
                  </a>

                  {/* Add to Calendar Button */}
                  <a
                    href={googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-xl bg-[#26050D] hover:bg-[#340712] border border-gold-400/60 text-gold-200 font-cinzel text-xs tracking-wider uppercase font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md flex items-center justify-center space-x-2 cursor-pointer text-center"
                  >
                    <Calendar size={15} className="text-gold-300" />
                    <span>ADD TO CALENDAR</span>
                  </a>
                </div>

                {/* 1-Click Copy Address & Parking */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400 border-t border-gold-500/20">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center space-x-1.5 text-gold-300 hover:text-gold-200 font-cinzel text-[11px] tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    <span>{copied ? 'ADDRESS COPIED!' : 'COPY ADDRESS'}</span>
                  </button>

                  <div className="inline-flex items-center space-x-1.5 text-stone-400 text-[11px]">
                    <Car size={14} className="text-gold-400" />
                    <span>Spacious Guest Parking Available</span>
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

