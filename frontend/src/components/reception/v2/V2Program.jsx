import React from 'react';
import { GlassWater, Users, Music2, UtensilsCrossed, Sparkles } from 'lucide-react';
import { weddingData } from '../../../data/weddingData';
import ScrollReveal from '../../common/ScrollReveal';

export default function V2Program() {
  const { schedule } = weddingData.receptionSite;

  const icons = [
    <GlassWater size={22} className="text-gold-300" />,
    <Users size={22} className="text-gold-300" />,
    <Music2 size={22} className="text-gold-300" />,
    <UtensilsCrossed size={22} className="text-gold-300" />,
  ];

  return (
    <section id="v2-program" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center space-x-3 text-[10.5px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-400 font-semibold mb-3">
              <span className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent to-gold-400" />
              <span>THE BANQUET CHRONOLOGY</span>
              <span className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent to-gold-400" />
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-medium tracking-tight">
              Order of the Evening
            </h2>
            <p className="mt-3 text-stone-300 font-serif italic text-base sm:text-lg max-w-lg mx-auto">
              “Every hour crafted for warmth, joyous hospitality, and unforgettable memories.”
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Stage Horizontal Card Deck */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {schedule.map((item, index) => (
            <ScrollReveal key={item.title} animation="fade-up" delay={index * 120}>
              <div className="group relative p-7 rounded-3xl bg-[#12121B]/90 hover:bg-[#181824] border border-white/10 hover:border-gold-400/60 shadow-[0_15px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-500 hover:scale-[1.03] flex flex-col justify-between h-full">
                
                {/* Header Node: Phase Number + Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-cinzel text-2xl font-bold text-white/30 group-hover:text-gold-400/80 transition-colors">
                      0{index + 1}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      {icons[index % icons.length]}
                    </div>
                  </div>

                  {/* Timing & Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-cinzel text-lg font-bold text-gold-300">
                      {item.time}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[8.5px] font-cinzel tracking-widest uppercase bg-gold-500/15 text-gold-200 border border-gold-400/30 font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-cinzel text-lg sm:text-xl text-white font-medium mb-2 group-hover:text-gold-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Bottom Gold Accent Bar */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[10px] font-cinzel tracking-wider text-stone-400 group-hover:text-gold-300 transition-colors">
                  <span>EVENING PHASE {index + 1}</span>
                  <span className="w-8 h-px bg-gold-400/40 group-hover:w-12 transition-all" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

