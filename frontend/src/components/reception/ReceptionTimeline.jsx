import React from 'react';
import { Clock, Sparkles, Utensils, Heart, Music, Wine } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';

export default function ReceptionTimeline() {
  const { schedule } = weddingData.receptionSite;

  const getIcon = (index) => {
    switch (index) {
      case 0:
        return <Wine size={18} className="text-gold-600" />;
      case 1:
        return <Heart size={18} className="text-gold-600" />;
      case 2:
        return <Music size={18} className="text-gold-600" />;
      case 3:
      default:
        return <Utensils size={18} className="text-gold-600" />;
    }
  };

  return (
    <section id="schedule" className="py-24 md:py-32 relative border-t border-gold-500/20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-gold-500" />
              <span className="text-[11px] md:text-xs font-cinzel tracking-[0.3em] uppercase text-gold-700 font-semibold">
                EVENING PROGRAMME
              </span>
              <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl text-imperial-900 font-medium tracking-tight">
              Schedule of Events
            </h2>
            <p className="mt-4 text-stone-700 font-serif italic text-base sm:text-lg">
              “An orderly sequence of fellowship, celebration, and feasting.”
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <ScrollReveal
              key={item.time}
              animation={index % 2 === 0 ? "fade-left" : "fade-right"}
              delay={index * 120}
              duration={750}
            >
              <div className="relative bg-white/90 backdrop-blur-md border border-gold-500/40 p-6 sm:p-8 deckled-card shadow-lg transition-all duration-300 hover:border-gold-500 hover:shadow-xl group h-full flex flex-col justify-between">
                
                {/* Top Row: Time & Badge */}
                <div className="flex items-center justify-between border-b border-gold-500/20 pb-4 mb-4">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-full bg-gold-100/70 border border-gold-400/50 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                      {getIcon(index)}
                    </div>
                    <div className="flex items-center space-x-1.5 font-cinzel text-base sm:text-lg text-imperial-950 font-bold">
                      <Clock size={14} className="text-gold-600" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  <span className="px-3 py-1 text-[9px] font-cinzel tracking-[0.2em] uppercase font-bold text-gold-800 bg-gold-100/80 border border-gold-400/40 rounded-full">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-cinzel text-lg sm:text-xl text-imperial-900 font-medium mb-2 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-serif italic text-stone-600 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Bottom decorative gold flourish */}
                <div className="w-8 h-[1px] bg-gold-400/40 mt-4 group-hover:w-16 transition-all duration-500" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
