import React from 'react';
import { weddingData } from '../../../data/weddingData';
import ScrollReveal from '../../common/ScrollReveal';

export default function V2Heritage() {
  const { groom, bride } = weddingData.receptionSite.couple;

  return (
    <section id="v2-heritage" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center space-x-3 text-[10.5px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-400 font-semibold mb-3">
              <span className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent to-gold-400" />
              <span>HONORING OUR SACRED LINEAGE</span>
              <span className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent to-gold-400" />
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-medium tracking-tight">
              Two Families United in Love
            </h2>
            <p className="mt-3 text-stone-300 font-serif italic text-base sm:text-lg max-w-lg mx-auto">
              “With lifelong prayers and devotion from the parents who guided our steps.”
            </p>
          </div>
        </ScrollReveal>

        {/* Heraldic Diptych Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          
          {/* ===================================================================
              BRIDE'S LINEAGE TABLET (Hosts in Punniyam, Kanyakumari)
             =================================================================== */}
          <ScrollReveal animation="fade-left" delay={150}>
            <div className="relative p-8 sm:p-11 rounded-3xl bg-[#12121B]/90 border border-white/10 hover:border-gold-400/50 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.015] flex flex-col justify-between h-full group">
              
              {/* Top Medallion B */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-cinzel tracking-[0.25em] uppercase text-gold-400 font-semibold block">
                    BRIDE'S HOUSE
                  </span>
                  <p className="font-sans text-xs text-stone-400">
                    Punniyam, Kanyakumari, Tamil Nadu
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                  <span className="font-cinzel text-lg font-bold text-gold-300">B</span>
                </div>
              </div>

              {/* Bride Name & Parents */}
              <div className="py-6 space-y-5">
                <div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl text-white font-medium">
                    {bride.fullName}
                  </h3>
                  <p className="font-pinyon text-2xl text-gold-300 mt-0.5">
                    Beloved Daughter of
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="block text-[9.5px] tracking-[0.2em] uppercase font-cinzel text-gold-400/90 font-semibold">
                      Father
                    </span>
                    <p className="font-serif text-lg sm:text-xl text-white font-normal mt-0.5">
                      {bride.parents.father}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="block text-[9.5px] tracking-[0.2em] uppercase font-cinzel text-gold-400/90 font-semibold">
                      Mother
                    </span>
                    <p className="font-serif text-lg sm:text-xl text-white font-normal mt-0.5">
                      {bride.parents.mother}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-4 border-t border-white/10 text-center text-xs text-stone-400 font-serif italic">
                “Cordially welcoming our family and friends to Punniyam.”
              </div>
            </div>
          </ScrollReveal>

          {/* ===================================================================
              GROOM'S LINEAGE TABLET (Welcoming Family from Kerala)
             =================================================================== */}
          <ScrollReveal animation="fade-right" delay={300}>
            <div className="relative p-8 sm:p-11 rounded-3xl bg-[#12121B]/90 border border-white/10 hover:border-gold-400/50 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.015] flex flex-col justify-between h-full group">
              
              {/* Top Medallion R */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-cinzel tracking-[0.25em] uppercase text-gold-400 font-semibold block">
                    GROOM'S HOUSE
                  </span>
                  <p className="font-sans text-xs text-stone-400">
                    Kottarakara, Kollam, Kerala
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center group-hover:scale-105 transition-transform shadow-inner">
                  <span className="font-cinzel text-lg font-bold text-gold-300">R</span>
                </div>
              </div>

              {/* Groom Name & Parents */}
              <div className="py-6 space-y-5">
                <div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl text-white font-medium">
                    {groom.fullName}
                  </h3>
                  <p className="font-pinyon text-2xl text-gold-300 mt-0.5">
                    Beloved Son of
                  </p>
                </div>

                <div className="space-y-3.5">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="block text-[9.5px] tracking-[0.2em] uppercase font-cinzel text-gold-400/90 font-semibold">
                      Father
                    </span>
                    <p className="font-serif text-lg sm:text-xl text-white font-normal mt-0.5">
                      {groom.parents.father}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="block text-[9.5px] tracking-[0.2em] uppercase font-cinzel text-gold-400/90 font-semibold">
                      Mother
                    </span>
                    <p className="font-serif text-lg sm:text-xl text-white font-normal mt-0.5">
                      {groom.parents.mother}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-4 border-t border-white/10 text-center text-xs text-stone-400 font-serif italic">
                “With heartfelt prayers and warm greetings from Kerala.”
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

