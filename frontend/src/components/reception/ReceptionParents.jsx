import React from 'react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';

export default function ReceptionParents() {
  const { groom, bride } = weddingData.receptionSite.couple;

  return (
    <section id="parents" className="py-24 md:py-32 relative border-y border-gold-500/30 overflow-hidden">
      {/* Background Watermark Cross */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
        <span className="font-cinzel text-[20rem] md:text-[32rem] text-gold-900 font-bold">
          ✝
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Ribbon */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-gold-500" />
              <span className="text-[11px] md:text-xs font-cinzel tracking-[0.3em] uppercase text-gold-700 font-semibold">
                HONORING OUR SACRED LINEAGE
              </span>
              <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl text-imperial-900 font-medium tracking-tight">
              Our Beloved Families
            </h2>
            <p className="mt-4 text-stone-700 font-serif italic text-base sm:text-lg">
              “With the prayers and lifelong blessings of those who raised us with devotion.”
            </p>
          </div>
        </ScrollReveal>

        {/* Dual Heraldic Lineage Tablets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 max-w-5xl mx-auto">
          
          {/* BRIDE'S LINEAGE TABLET (Hosts in Kanyakumari) */}
          <ScrollReveal animation="fade-left" delay={150} duration={850}>
            <div className="relative bg-white/85 backdrop-blur-md border-2 border-gold-500/50 rounded-t-[80px] p-8 sm:p-12 deckled-card-gold transition-all duration-300 hover:shadow-2xl hover:border-gold-500 h-full flex flex-col justify-between">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-gold-500 bg-[#FAF7F2] flex items-center justify-center shadow-md">
                <span className="font-cinzel text-lg text-gold-700 font-bold">✝</span>
              </div>

              <div className="text-center pt-6">
                <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold-700 font-semibold block mb-2">
                  BRIDE'S FAMILY • PUNNIYAM
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl text-imperial-900 font-medium mb-1">
                  {bride.fullName}
                </h3>
                <p className="font-pinyon text-2xl text-gold-600 mb-6">
                  Beloved Daughter of
                </p>

                <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />

                <div className="space-y-6 text-stone-700">
                  <div className="p-4 bg-gold-50/70 border border-gold-500/25 rounded-none">
                    <span className="block text-[10px] tracking-[0.2em] uppercase font-cinzel text-stone-500 font-semibold">
                      Father
                    </span>
                    <p className="font-serif text-xl sm:text-2xl text-imperial-900 font-normal mt-1">
                      {bride.parents.father}
                    </p>
                  </div>

                  <div className="p-4 bg-gold-50/70 border border-gold-500/25 rounded-none">
                    <span className="block text-[10px] tracking-[0.2em] uppercase font-cinzel text-stone-500 font-semibold">
                      Mother
                    </span>
                    <p className="font-serif text-xl sm:text-2xl text-imperial-900 font-normal mt-1">
                      {bride.parents.mother}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gold-500/20 text-xs text-stone-500 font-serif italic">
                  “Every good and perfect gift is from above. — James 1:17”
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* GROOM'S LINEAGE TABLET (Welcoming Family from Kerala) */}
          <ScrollReveal animation="fade-right" delay={300} duration={850}>
            <div className="relative bg-white/85 backdrop-blur-md border-2 border-gold-500/50 rounded-t-[80px] p-8 sm:p-12 deckled-card-gold transition-all duration-300 hover:shadow-2xl hover:border-gold-500 h-full flex flex-col justify-between">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-gold-500 bg-[#FAF7F2] flex items-center justify-center shadow-md">
                <span className="font-cinzel text-lg text-gold-700 font-bold">✝</span>
              </div>

              <div className="text-center pt-6">
                <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-gold-700 font-semibold block mb-2">
                  GROOM'S FAMILY • KERALA
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl text-imperial-900 font-medium mb-1">
                  {groom.fullName}
                </h3>
                <p className="font-pinyon text-2xl text-gold-600 mb-6">
                  Beloved Son of
                </p>

                <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-8" />

                <div className="space-y-6 text-stone-700">
                  <div className="p-4 bg-gold-50/50 border border-gold-500/20 rounded-none">
                    <span className="block text-[10px] tracking-[0.2em] uppercase font-cinzel text-stone-400 font-semibold">
                      Father
                    </span>
                    <p className="font-serif text-xl sm:text-2xl text-imperial-900 font-normal mt-1">
                      {groom.parents.father}
                    </p>
                  </div>

                  <div className="p-4 bg-gold-50/50 border border-gold-500/20 rounded-none">
                    <span className="block text-[10px] tracking-[0.2em] uppercase font-cinzel text-stone-400 font-semibold">
                      Mother
                    </span>
                    <p className="font-serif text-xl sm:text-2xl text-imperial-900 font-normal mt-1">
                      {groom.parents.mother}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gold-500/20 text-xs text-stone-500 font-serif italic">
                  “May the peace and favor of the Lord rest upon this heritage forever.”
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

