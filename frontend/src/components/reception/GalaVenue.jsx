import React from 'react';
import { MapPin, Navigation, Calendar, ExternalLink, Sparkles, Wind, Car, Utensils } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';

export default function GalaVenue() {
  const { receptionSite } = weddingData;

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
    <section id="venue" className="py-24 sm:py-32 relative text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" duration={700}>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-300 font-semibold mb-3">
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-gold-400" />
              <span>THE GALA DESTINATION</span>
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-gold-400" />
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl font-medium tracking-tight text-white">
              The Grand Reception Pavilion
            </h2>
            <p className="font-pinyon text-2xl sm:text-3xl text-gold-300/90 mt-2">
              Uthiram Auditorium • Punniyam, Kanyakumari
            </p>
          </div>
        </ScrollReveal>

        {/* Master Venue Card */}
        <ScrollReveal animation="fade-up" duration={850}>
          <div className="relative rounded-3xl overflow-hidden border-2 border-gold-400/50 bg-[#20050B]/90 shadow-2xl backdrop-blur-md">
            
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Auditorium Image with Chandelier Glow */}
              <div className="lg:col-span-7 relative min-h-[350px] sm:min-h-[420px] lg:min-h-[500px] overflow-hidden">
                <img
                  src={receptionSite.venue.image || '/images/auditorium.jpg'}
                  alt="Uthiram Auditorium Banquet Hall"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Badge Overlay */}
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-gold-400/60 text-gold-200 text-[10px] font-cinzel tracking-[0.25em] uppercase">
                  <span>🥂 GRAND BANQUET HALL</span>
                </div>
              </div>

              {/* Right Column: Venue Details & Action Suite */}
              <div className="lg:col-span-5 p-8 sm:p-10 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/30">
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase font-cinzel text-gold-400 font-semibold block mb-1">
                      RECEPTION DESTINATION
                    </span>
                    <h3 className="font-cinzel text-2xl sm:text-3xl font-medium text-white">
                      {receptionSite.venue.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
                      {receptionSite.venue.fullAddress}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 gap-3 py-4 border-y border-gold-500/20 text-xs text-stone-300 font-sans">
                    <div className="flex items-center space-x-3">
                      <Wind size={15} className="text-gold-400 shrink-0" />
                      <span>Air-Conditioned Grand Celebration Ballroom</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Utensils size={15} className="text-gold-400 shrink-0" />
                      <span>Dedicated Traditional Feast &amp; Dining Hall</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Car size={15} className="text-gold-400 shrink-0" />
                      <span>Spacious On-Site Guest Parking Area</span>
                    </div>
                  </div>

                  {/* Date & Time summary */}
                  <div className="p-3.5 rounded-xl bg-imperial-950/80 border border-gold-500/30 text-xs font-cinzel tracking-wider text-gold-300">
                    <div className="font-semibold text-sm">WEDNESDAY, 30 DECEMBER 2026</div>
                    <div className="text-[11px] text-stone-300 mt-0.5">5:30 PM • EVENING CELEBRATION</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6">
                  <a
                    href={receptionSite.venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-imperial-900 to-imperial-800 hover:from-imperial-800 hover:to-imperial-700 text-gold-200 border border-gold-400 font-cinzel text-xs tracking-[0.15em] uppercase font-semibold shadow-lg transition-all hover:scale-105 active:scale-95 gold-sheen-sweep"
                  >
                    <Navigation size={14} className="text-gold-400" />
                    <span>GOOGLE MAPS</span>
                    <ExternalLink size={12} className="text-gold-400" />
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
                    className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-imperial-950/90 hover:bg-black text-gold-300 border border-gold-500/50 font-cinzel text-xs tracking-[0.15em] uppercase font-semibold shadow-sm transition-all hover:scale-105 active:scale-95 gold-sheen-sweep"
                  >
                    <Calendar size={14} className="text-gold-400" />
                    <span>ADD TO CALENDAR</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

