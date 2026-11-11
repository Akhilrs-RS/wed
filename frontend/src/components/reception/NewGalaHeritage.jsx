import React from 'react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';

export default function NewGalaHeritage() {
  const { groom, bride } = weddingData.receptionSite.couple;

  return (
    <section id="gala-heritage" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-400 font-semibold mb-3">
              <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gold-400" />
              <span>SACRED LINEAGE &amp; BLESSINGS</span>
              <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gold-400" />
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight">
              Two Families United
            </h2>
            <p className="mt-3 text-stone-300 font-serif italic text-base sm:text-lg max-w-lg mx-auto">
              “With the heartfelt gratitude and blessings of the families who nurtured our dreams.”
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Heraldic Lineage Diptych */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          
          {/* ===================================================================
              BRIDE'S FAMILY TABLET (Hosts in Punniyam, Kanyakumari)
             =================================================================== */}
          <ScrollReveal animation="fade-left" delay={150}>
            <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#28060F]/85 via-[#1E040B]/90 to-[#120205] border border-gold-400/40 shadow-[0_15px_45px_rgba(0,0,0,0.7)] backdrop-blur-md flex flex-col justify-between h-full group hover:border-gold-300/80 transition-all duration-300">
              
              {/* Top Monogram Seal B */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-13 h-13 rounded-full border-2 border-gold-400 bg-[#22040B] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="font-cinzel text-base font-bold text-gold-300">B</span>
              </div>

              <div className="text-center pt-4">
                <span className="text-[10px] font-cinzel tracking-[0.3em] uppercase text-gold-400 font-semibold block mb-1">
                  BRIDE'S HOUSE • PUNNIYAM
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl text-white font-medium mb-1">
                  {bride.fullName}
                </h3>
                <p className="font-pinyon text-2xl text-gold-300 mb-6">
                  Cherished Daughter of
                </p>

                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />

                <div className="space-y-4 text-left">
                  <div className="p-4 rounded-xl bg-black/30 border border-gold-500/20">
                    <span className="block text-[9px] tracking-[0.2em] uppercase font-cinzel text-gold-400 font-semibold">
                      Father
                    </span>
                    <p className="font-serif text-lg sm:text-xl text-white font-normal mt-0.5">
                      {bride.parents.father}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/30 border border-gold-500/20">
                    <span className="block text-[9px] tracking-[0.2em] uppercase font-cinzel text-gold-400 font-semibold">
                      Mother
                    </span>
                    <p className="font-serif text-lg sm:text-xl text-white font-normal mt-0.5">
                      {bride.parents.mother}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gold-500/20 text-center text-xs text-stone-400 font-serif italic">
                “Cordially welcoming our esteemed guests to Punniyam, Kanyakumari.”
              </div>
            </div>
          </ScrollReveal>

          {/* ===================================================================
              GROOM'S FAMILY TABLET (Welcoming Family from Kerala)
             =================================================================== */}
          <ScrollReveal animation="fade-right" delay={300}>
            <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#28060F]/85 via-[#1E040B]/90 to-[#120205] border border-gold-400/40 shadow-[0_15px_45px_rgba(0,0,0,0.7)] backdrop-blur-md flex flex-col justify-between h-full group hover:border-gold-300/80 transition-all duration-300">
              
              {/* Top Monogram Seal R */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-13 h-13 rounded-full border-2 border-gold-400 bg-[#22040B] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <span className="font-cinzel text-base font-bold text-gold-300">R</span>
              </div>

              <div className="text-center pt-4">
                <span className="text-[10px] font-cinzel tracking-[0.3em] uppercase text-gold-400 font-semibold block mb-1">
                  GROOM'S HOUSE • KERALA
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl text-white font-medium mb-1">
                  {groom.fullName}
                </h3>
                <p className="font-pinyon text-2xl text-gold-300 mb-6">
                  Cherished Son of
                </p>

                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mb-6" />

                <div className="space-y-4 text-left">
                  <div className="p-4 rounded-xl bg-black/30 border border-gold-500/20">
                    <span className="block text-[9px] tracking-[0.2em] uppercase font-cinzel text-gold-400 font-semibold">
                      Father
                    </span>
                    <p className="font-serif text-lg sm:text-xl text-white font-normal mt-0.5">
                      {groom.parents.father}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/30 border border-gold-500/20">
                    <span className="block text-[9px] tracking-[0.2em] uppercase font-cinzel text-gold-400 font-semibold">
                      Mother
                    </span>
                    <p className="font-serif text-lg sm:text-xl text-white font-normal mt-0.5">
                      {groom.parents.mother}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gold-500/20 text-center text-xs text-stone-400 font-serif italic">
                “With lifelong prayers and devotion from Kottarakara, Kollam, Kerala.”
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

