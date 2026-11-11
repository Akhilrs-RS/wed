import React from 'react';
import { GlassWater, Users, Music2, UtensilsCrossed } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';

export default function NewGalaProgram() {
  const { schedule } = weddingData.receptionSite;

  const milestoneIcons = [
    <GlassWater size={20} className="text-gold-300" />,
    <Users size={20} className="text-gold-300" />,
    <Music2 size={20} className="text-gold-300" />,
    <UtensilsCrossed size={20} className="text-gold-300" />,
  ];

  return (
    <section id="gala-program" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-400 font-semibold mb-3">
              <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gold-400" />
              <span>EVENING ITINERARY</span>
              <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gold-400" />
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight">
              Order of the Celebration
            </h2>
            <p className="mt-3 text-stone-300 font-serif italic text-base sm:text-lg max-w-lg mx-auto">
              “Every moment curated to welcome, honor, and celebrate with all our loved ones.”
            </p>
          </div>
        </ScrollReveal>

        {/* Luminous Filament Timeline */}
        <div className="relative">
          {/* Central Glowing Golden Filament (Desktop) */}
          <div className="hidden sm:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-gold-400 to-transparent shadow-[0_0_12px_rgba(212,175,55,0.7)] animate-timeline-pulse pointer-events-none" />

          {/* Left Line for Mobile */}
          <div className="sm:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-transparent via-gold-400 to-transparent shadow-[0_0_10px_rgba(212,175,55,0.6)] pointer-events-none" />

          <div className="space-y-8 sm:space-y-12">
            {schedule.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal
                  key={item.title}
                  animation={isEven ? 'fade-right' : 'fade-left'}
                  delay={index * 120}
                >
                  <div
                    className={`relative flex items-center ${
                      isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    } flex-row`}
                  >
                    {/* Content Card */}
                    <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-6">
                      <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#26050D]/80 via-[#1C0308]/90 to-[#120205] border border-gold-400/35 hover:border-gold-300/80 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]">
                        
                        {/* Time & Badge Lockup */}
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-cinzel text-base sm:text-lg font-bold text-gold-300">
                            {item.time}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[9px] font-cinzel tracking-widest uppercase bg-gold-500/20 text-gold-200 border border-gold-400/40 font-semibold">
                            {item.badge}
                          </span>
                        </div>

                        {/* Title & Details */}
                        <h3 className="font-cinzel text-lg sm:text-xl text-white font-medium mb-1 group-hover:text-gold-100 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </div>

                    {/* Central Glowing Icon Node */}
                    <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full border-2 border-gold-400 bg-[#1F040A] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)] z-20 group-hover:scale-110 transition-transform">
                        {milestoneIcons[index % milestoneIcons.length]}
                      </div>
                    </div>

                    {/* Desktop Opposite Empty Placeholder */}
                    <div className="hidden sm:block sm:w-1/2" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
