import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Navigation, ExternalLink, Sparkles, Copy, Check } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import WeddingImage from './common/WeddingImage';

export default function TheDay() {
  const { marriage, reception } = weddingData.events;
  const [copiedMarriage, setCopiedMarriage] = useState(false);
  const [copiedReception, setCopiedReception] = useState(false);

  const copyAddress = (text, type) => {
    navigator.clipboard?.writeText(text);
    if (type === 'marriage') {
      setCopiedMarriage(true);
      setTimeout(() => setCopiedMarriage(false), 2000);
    } else {
      setCopiedReception(true);
      setTimeout(() => setCopiedReception(false), 2000);
    }
  };

  const createGoogleCalendarLink = (title, startIso, location, details) => {
    const startDate = new Date(startIso);
    const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000);
    const formatGDate = (d) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      title
    )}&dates=${formatGDate(startDate)}/${formatGDate(endDate)}&details=${encodeURIComponent(
      details
    )}&location=${encodeURIComponent(location)}`;
  };

  return (
    <section id="the-day" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-[11px] md:text-xs font-cinzel tracking-[0.3em] uppercase text-gold-700 font-semibold">
              SACRED CEREMONIES &amp; VENUES
            </span>
            <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-gold-500" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl text-imperial-900 font-medium tracking-tight">
            The Holy Matrimony &amp; Reception
          </h2>
          <p className="mt-4 text-stone-700 font-serif italic text-base sm:text-lg">
            “Two distinct moments of covenant, thanksgiving, and joy.”
          </p>
        </div>

        {/* =========================================================================
            DESTINATION 1: The Holy Matrimony (Cathedral Gothic Arch Card)
           ========================================================================= */}
        <div className="mb-24 relative bg-white/90 border-2 border-gold-500/50 shadow-2xl deckled-card-gold overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-gold-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left Image: Church Gateway */}
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-full overflow-hidden group">
              <WeddingImage
                src={marriage.image}
                alt={marriage.venue.name}
                className="w-full h-full min-h-[340px] lg:min-h-[500px] transition-transform duration-700 group-hover:scale-105"
                fallbackSrc="/images/bd.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-imperial-950/40 via-transparent to-imperial-950/20" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6 inline-flex items-center space-x-2 px-4 py-1.5 bg-black/70 backdrop-blur-md border border-gold-400/60 text-gold-200 text-[10px] tracking-[0.25em] uppercase font-cinzel">
                <span>✝ SACRED CEREMONY</span>
              </div>
            </div>

            {/* Right Velvet Wine Card */}
            <div className="lg:col-span-5 bg-gradient-to-b from-imperial-800 to-imperial-900 text-white p-8 sm:p-12 md:p-14 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gold-500/40">
              <div>
                <span className="text-[11px] tracking-[0.3em] uppercase font-cinzel text-gold-300 font-semibold block mb-2">
                  THE HOLY SACRAMENT
                </span>
                <h3 className="font-cinzel text-3xl sm:text-4xl text-white font-medium mb-6">
                  {marriage.title}
                </h3>

                {/* Date & Time Lockup */}
                <div className="flex items-center space-x-6 py-6 border-y border-gold-500/30 mb-8">
                  <div className="font-cinzel text-5xl sm:text-6xl text-gold-300 font-bold leading-none">
                    {marriage.day}
                  </div>
                  <div className="space-y-1 font-cinzel text-xs tracking-[0.2em] uppercase text-gold-100">
                    <div className="font-semibold text-sm">{marriage.month} {marriage.year}</div>
                    <div className="text-gold-300 flex items-center space-x-2">
                      <Clock size={13} />
                      <span>{marriage.time}</span>
                      <span>•</span>
                      <span>{marriage.dayOfWeek}</span>
                    </div>
                  </div>
                </div>

                {/* Venue Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-2 text-gold-400">
                    <MapPin size={18} className="shrink-0 mt-1" />
                    <div>
                      <h4 className="font-cinzel text-lg sm:text-xl text-white font-medium leading-snug">
                        {marriage.venue.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-300 font-sans mt-1">
                        {marriage.venue.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Interactive Copy Address */}
                <button
                  onClick={() => copyAddress(marriage.venue.fullAddress, 'marriage')}
                  className="inline-flex items-center space-x-2 text-[11px] text-gold-300 hover:text-white font-mono bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded transition-colors mb-6 border border-gold-500/20"
                >
                  {copiedMarriage ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedMarriage ? 'Address Copied! ✓' : 'Copy Venue Address'}</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gold-500/20">
                <a
                  href={marriage.venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase font-cinzel font-semibold text-imperial-950 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 px-6 py-3.5 shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  <Navigation size={14} />
                  <span>NAVIGATE GOOGLE MAPS</span>
                  <ExternalLink size={12} />
                </a>

                <a
                  href={createGoogleCalendarLink(
                    `Robin & Benigla - Holy Matrimony`,
                    marriage.fullDateString,
                    marriage.venue.fullAddress,
                    `Join Robin Varghese & Benigla J L in celebrating their Holy Matrimony at ${marriage.venue.name}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase font-cinzel font-semibold text-gold-200 hover:text-white px-4 py-3.5 border border-gold-500/40 hover:border-gold-300 transition-colors"
                >
                  <Calendar size={14} />
                  <span>ADD TO CALENDAR</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DESTINATION 2: The Wedding Reception (Grand Banquet Gateway)
           ========================================================================= */}
        <div className="relative bg-white/90 border-2 border-gold-500/50 shadow-2xl deckled-card-gold overflow-hidden backdrop-blur-md transition-all duration-300 hover:border-gold-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left Content Card */}
            <div className="lg:col-span-5 bg-[#FAF7F2]/95 p-8 sm:p-12 md:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gold-500/40">
              <div>
                <span className="text-[11px] tracking-[0.3em] uppercase font-cinzel text-gold-700 font-semibold block mb-2">
                  AND THEN WE CELEBRATE
                </span>
                <h3 className="font-cinzel text-3xl sm:text-4xl text-imperial-900 font-medium mb-1">
                  {reception.title}
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
                <div className="space-y-3 mb-6">
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

                {/* Interactive Copy Address */}
                <button
                  onClick={() => copyAddress(reception.venue.fullAddress, 'reception')}
                  className="inline-flex items-center space-x-2 text-[11px] text-stone-600 hover:text-imperial-900 font-mono bg-stone-100 hover:bg-stone-200 px-3 py-1.5 rounded transition-colors mb-6 border border-stone-200"
                >
                  {copiedReception ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                  <span>{copiedReception ? 'Address Copied! ✓' : 'Copy Venue Address'}</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gold-500/20">
                <a
                  href={reception.venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase font-cinzel font-semibold text-white bg-imperial-800 hover:bg-imperial-900 px-6 py-3.5 shadow-lg transition-all border border-gold-500 hover:scale-105 active:scale-95"
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
                  className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] uppercase font-cinzel font-semibold text-imperial-800 hover:text-gold-700 px-4 py-3.5 border border-gold-500/40 transition-colors"
                >
                  <Calendar size={14} />
                  <span>ADD TO CALENDAR</span>
                </a>
              </div>
            </div>

            {/* Right Image: Auditorium */}
            <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-full overflow-hidden group">
              <WeddingImage
                src={reception.image}
                alt={reception.venue.name}
                className="w-full h-full min-h-[340px] lg:min-h-[500px] transition-transform duration-700 group-hover:scale-105"
                fallbackSrc="/images/bd.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-imperial-950/40 via-transparent to-imperial-950/20" />
              
              {/* Badge */}
              <div className="absolute top-6 right-6 inline-flex items-center space-x-2 px-4 py-1.5 bg-black/70 backdrop-blur-md border border-gold-400/60 text-gold-200 text-[10px] tracking-[0.25em] uppercase font-cinzel">
                <span>🥂 GRAND RECEPTION BANQUET</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
