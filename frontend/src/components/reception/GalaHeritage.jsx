import React from 'react';
import { Heart, Sparkles, MapPin } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';

export default function GalaHeritage() {
  const { couple } = weddingData;

  return (
    <section id="heritage" className="py-24 sm:py-32 relative text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" duration={700}>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-300 font-semibold mb-3">
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-gold-400" />
              <span>THE UNION OF TWO FAMILIES</span>
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-gold-400" />
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Nuptial Heritage &amp; Blessings
            </h2>
            <p className="font-pinyon text-2xl sm:text-3xl text-gold-300/90 mt-2">
              Two Traditions, One Covenant in Christ
            </p>
          </div>
        </ScrollReveal>

        {/* Symmetrical Heritage Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Groom's Lineage (Left) */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-right" duration={800}>
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#24060E]/90 to-[#180308]/90 border border-gold-400/40 shadow-2xl backdrop-blur-md text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-imperial-950 border border-gold-400/50 text-[9px] font-cinzel tracking-[0.25em] uppercase text-gold-300 mb-3 font-semibold">
                  GROOM'S ROOTS • KERALA
                </span>

                <h3 className="font-cinzel text-2xl sm:text-3xl font-medium text-white">
                  Robin Varghese
                </h3>

                <div className="my-4 py-3 border-y border-gold-500/25 space-y-1">
                  <p className="font-cinzel text-[10px] tracking-widest uppercase text-gold-400">
                    BELOVED PARENTS
                  </p>
                  <p className="font-serif text-base text-gold-100 font-semibold">
                    {couple.groom.parents.father} &amp; {couple.groom.parents.mother}
                  </p>
                  <p className="flex items-center justify-center lg:justify-start space-x-1.5 text-xs text-stone-300 mt-1">
                    <MapPin size={12} className="text-gold-400" />
                    <span>{couple.groom.origin}</span>
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  Rooted in deep Christian faith, humility, and the warm traditions of Kottarakara, Kollam, offering heartfelt gratitude for the blessings of this sacred day.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Center Couple Cameo (Middle) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-4">
            <ScrollReveal animation="zoom-in" delay={150} duration={800}>
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-gold-400 p-1 bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 shadow-xl overflow-hidden">
                <img
                  src="/images/s.jpg"
                  alt="Robin & Benigla"
                  className="w-full h-full object-cover object-[center_30%] rounded-full"
                />
              </div>
              <div className="font-pinyon text-3xl text-gold-300 mt-3 select-none">
                &amp;
              </div>
            </ScrollReveal>
          </div>

          {/* Bride's Lineage (Right) */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-left" duration={800}>
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#24060E]/90 to-[#180308]/90 border border-gold-400/40 shadow-2xl backdrop-blur-md text-center lg:text-left">
                <span className="inline-block px-3 py-1 rounded-full bg-imperial-950 border border-gold-400/50 text-[9px] font-cinzel tracking-[0.25em] uppercase text-gold-300 mb-3 font-semibold">
                  BRIDE'S ROOTS • TAMIL NADU
                </span>

                <h3 className="font-cinzel text-2xl sm:text-3xl font-medium text-white">
                  Benigla J L
                </h3>

                <div className="my-4 py-3 border-y border-gold-500/25 space-y-1">
                  <p className="font-cinzel text-[10px] tracking-widest uppercase text-gold-400">
                    BELOVED PARENTS
                  </p>
                  <p className="font-serif text-base text-gold-100 font-semibold">
                    {couple.bride.parents.father} &amp; {couple.bride.parents.mother}
                  </p>
                  <p className="flex items-center justify-center lg:justify-start space-x-1.5 text-xs text-stone-300 mt-1">
                    <MapPin size={12} className="text-gold-400" />
                    <span>{couple.bride.origin}</span>
                  </p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                  Cherished in the coastal grace of Punniyam, Kanyakumari, welcoming all families and friends with warmth, music, and an unforgettable evening feast.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

