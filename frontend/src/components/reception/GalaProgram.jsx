import React from 'react';
import { Clock, Sparkles, Utensils, Music, Wine, Gift } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

export default function GalaProgram() {
  const stages = [
    {
      time: '05:30 PM',
      title: 'Grand Reception Welcome',
      subtitle: 'Guest Arrival & Refreshments',
      description: 'Warm evening reception entrance with traditional welcomed drinks and orchestral wedding melodies.',
      badge: 'STAGE I • ARRIVAL',
      icon: Wine
    },
    {
      time: '06:30 PM',
      title: 'Nuptial Welcome & Felicitations',
      subtitle: 'Grand Entrance of the Newlyweds',
      description: 'Formal arrival of Robin & Benigla, honored blessings, and heartfelt words of fellowship from both families.',
      badge: 'STAGE II • BLESSINGS',
      icon: Gift
    },
    {
      time: '07:30 PM',
      title: 'Ceremonial Cake Cutting & Serenade',
      subtitle: 'Celebration of Two Hearts',
      description: 'Joyous cutting of the wedding cake, champagne toasts, and romantic live acoustic performances.',
      badge: 'STAGE III • HARMONY',
      icon: Music
    },
    {
      time: '08:00 PM',
      title: 'Festive Dinner Banquet',
      subtitle: 'Grand Traditional Feast',
      description: 'An exquisite culinary banquet served in honor of all guests, celebrating love, faith, and hospitality.',
      badge: 'STAGE IV • BANQUET',
      icon: Utensils
    }
  ];

  return (
    <section id="program" className="py-24 sm:py-32 relative text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" duration={700}>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-300 font-semibold mb-3">
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-gold-400" />
              <span>EVENING ITINERARY</span>
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-gold-400" />
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl font-medium tracking-tight text-white">
              The 4-Stage Gala Program
            </h2>
            <p className="font-pinyon text-2xl sm:text-3xl text-gold-300/90 mt-2">
              Wednesday, 30 December 2026 • 5:30 PM Onwards
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Stage Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={idx * 100}
                duration={750}
              >
                <div className="group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#24060E]/90 to-[#180308]/90 border border-gold-400/40 hover:border-gold-400 shadow-xl hover:shadow-[0_10px_35px_rgba(212,175,55,0.25)] transition-all duration-300 hover:-translate-y-1 backdrop-blur-md">
                  
                  {/* Top Badge & Time */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gold-500/25">
                    <span className="text-[10px] font-cinzel tracking-[0.2em] uppercase text-gold-400/90 font-semibold">
                      {stage.badge}
                    </span>
                    <div className="flex items-center space-x-1.5 text-gold-300 font-cinzel text-sm sm:text-base font-bold">
                      <Clock size={14} className="text-gold-400" />
                      <span>{stage.time}</span>
                    </div>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start space-x-4">
                    <div className="w-11 h-11 rounded-full bg-imperial-950 border border-gold-400/60 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform">
                      <Icon size={18} className="text-gold-300" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-cinzel text-lg sm:text-xl font-medium text-white group-hover:text-gold-200 transition-colors">
                        {stage.title}
                      </h3>
                      <p className="font-pinyon text-xl text-gold-400/90">
                        {stage.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-stone-300 mt-4 leading-relaxed font-light">
                    {stage.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
