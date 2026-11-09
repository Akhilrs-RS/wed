import React from 'react';
import { MapPin, Calendar, Clock, Navigation, ExternalLink } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import WeddingImage from '../common/WeddingImage';
import ScrollReveal from '../common/ScrollReveal';

export default function ReceptionVenue() {
  const { reception } = weddingData.events;

  const createGoogleCalendarLink = (title, startIso, location, details) => {
    const startDate = new Date(startIso);
    const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);
    const formatGDate = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${formatGDate(startDate)}/${formatGDate(endDate)}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}`;
  };

  return (
    <section id="venue" className="py-24 md:py-32 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-gold-500" />
              <span className="text-[11px] md:text-xs font-cinzel tracking-[0.3em] uppercase text-gold-700 font-semibold">
                THE RECEPTION DESTINATION
              </span>
              <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-imperial-900 font-medium tracking-tight">
              Reception Banquet &amp; Venue
            </h2>
            <p className="mt-4 text-stone-600 font-serif italic text-base sm:text-lg">
              “Join us as we celebrate with joyful hearts, melodious music, and an exquisite banquet.”
            </p>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            UTHIRAM AUDITORIUM CARD (EXACT MATCH TO SCREENSHOT)
           ========================================================================= */}
        <ScrollReveal animation="fade-up" delay={200} duration={850}>
          <div className="relative bg-white border-2 border-gold-500/40 shadow-2xl deckled-card-gold overflow-hidden max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              
              {/* Left Content Card */}
              <div className="lg:col-span-5 bg-[#FAF7F2] p-8 sm:p-12 md:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gold-500/40">
                <div>
                  <span className="text-[11px] tracking-[0.3em] uppercase font-cinzel text-gold-700 font-semibold block mb-2">
                    AND THEN WE CELEBRATE
                  </span>
                  <h3 className="font-cinzel text-3xl sm:text-4xl text-imperial-900 font-medium mb-1 leading-tight">
                    WEDDING<br />RECEPTION
                  </h3>
                  <p className="font-pinyon text-2xl text-gold-700 mb-6">
                    An Evening of Festive Banquet &amp; Music
                  </p>

                  {/* Date & Time Lockup */}
                  <div className="flex items-center space-x-6 py-6 border-y border-gold-500/30 mb-8">
                    <div className="font-cinzel text-5xl sm:text-6xl text-imperial-900 font-bold leading-none">
                      {reception.day}
                    </div>
                    <div className="space-y-1 font-cinzel text-xs tracking-[0.2em] uppercase text-stone-700">
                      <div className="font-semibold text-sm text-imperial-950">{reception.month} {reception.year}</div>
                      <div className="text-gold-700 flex items-center space-x-2">
                        <Clock size={13} />
                        <span>{reception.time}</span>
                        <span>•</span>
                        <span>{reception.dayOfWeek}</span>
                      </div>
                    </div>
                  </div>

                  {/* Venue Details */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start space-x-2 text-gold-700">
                      <MapPin size={18} className="shrink-0 mt-1" />
                      <div>
                        <h4 className="font-cinzel text-lg sm:text-xl text-imperial-950 font-medium leading-snug">
                          {reception.venue.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 font-sans mt-1">
                          {reception.venue.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Stacked vertically exactly as in screenshot */}
                <div className="flex flex-col space-y-3 pt-4 border-t border-gold-500/20">
                  <a
                    href={reception.venue.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase font-cinzel font-semibold text-white bg-imperial-800 hover:bg-imperial-900 px-6 py-3.5 shadow-lg transition-all border border-gold-500 w-fit hover:scale-105 active:scale-95"
                  >
                    <Navigation size={14} className="text-gold-300" />
                    <span>NAVIGATE GOOGLE MAPS</span>
                    <ExternalLink size={12} className="text-gold-300" />
                  </a>

                  <a
                    href={createGoogleCalendarLink(
                      `Robin & Benigla - Wedding Reception`,
                      reception.fullDateString,
                      reception.venue.fullAddress,
                      `Join Robin Varghese & Benigla J L for their Wedding Reception at ${reception.venue.name}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase font-cinzel font-semibold text-imperial-800 hover:text-gold-700 px-4 py-3 border border-gold-500/40 hover:border-gold-500 transition-colors bg-white w-fit"
                  >
                    <Calendar size={14} />
                    <span>ADD TO CALENDAR</span>
                  </a>
                </div>
              </div>

              {/* Right Image: Auditorium - Matching Screenshot */}
              <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-full overflow-hidden">
                <WeddingImage
                  src={reception.image || '/images/auditorium.jpg'}
                  alt={reception.venue.name}
                  className="w-full h-full min-h-[340px] lg:min-h-[500px] object-cover"
                  fallbackSrc="/images/bd.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-imperial-950/40 via-transparent to-imperial-950/20" />
                
                {/* Badge */}
                <div className="absolute top-6 right-6 inline-flex items-center space-x-2 px-4 py-1.5 bg-black/60 backdrop-blur-md border border-gold-400/50 text-gold-200 text-[10px] tracking-[0.25em] uppercase font-cinzel">
                  <span>🥂 GRAND RECEPTION BANQUET</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

