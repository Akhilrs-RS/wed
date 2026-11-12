import React, { useState } from 'react';
import { Mail, Scroll, Sparkles as SparklesIcon, Calendar } from 'lucide-react';
import ScrollReveal from '../../common/ScrollReveal';
import LetterOpening from './LetterOpening';
import RoyalScroll from './RoyalScroll';
import DateScratchCard from './DateScratchCard';

export default function V2LetterAndDates() {
  const [activeTab, setActiveTab] = useState('scratch'); // 'letter', 'scroll', 'scratch'

  const tabs = [
    { id: 'scratch', label: 'SCRATCH & REVEAL DATES', icon: <Calendar size={14} />, badge: 'INTERACTIVE' },
    { id: 'letter', label: 'THE WEDDING EPISTLE', icon: <Mail size={14} />, badge: 'WAX SEAL' },
    { id: 'scroll', label: 'ROYAL PROCLAMATION', icon: <Scroll size={14} />, badge: 'SCROLL' },
  ];

  return (
    <section id="v2-invitation-suite" className="py-24 sm:py-32 relative overflow-hidden">
      
      {/* Ambient Starlight Backdrop Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center space-x-3 text-[10.5px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-400 font-semibold mb-3">
              <span className="w-10 sm:w-14 h-px bg-gradient-to-r from-transparent to-gold-400" />
              <span>THE INVITATION SUITE &amp; DATES</span>
              <span className="w-10 sm:w-14 h-px bg-gradient-to-l from-transparent to-gold-400" />
            </div>
            <h2 className="font-cinzel text-3xl sm:text-5xl text-white font-medium tracking-tight">
              A Proclamation of Love
            </h2>
            <p className="mt-3 text-stone-300 font-serif italic text-base sm:text-lg max-w-xl mx-auto">
              “Unseal the epistle, unroll the sacred royal scroll, and scratch to unveil our wedding dates.”
            </p>
          </div>
        </ScrollReveal>

        {/* High-Fashion Segmented Tab Bar */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-12">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative px-5 py-3 rounded-full text-xs font-cinzel tracking-wider uppercase font-semibold transition-all duration-300 flex items-center space-x-2.5 cursor-pointer backdrop-blur-xl ${
                    isActive
                      ? 'bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-imperial-950 shadow-[0_10px_30px_rgba(212,175,55,0.35)] scale-105'
                      : 'bg-white/[0.04] hover:bg-white/[0.09] text-stone-300 hover:text-white border border-white/10'
                  }`}
                >
                  <span className={isActive ? 'text-imperial-950' : 'text-gold-400'}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                  <span
                    className={`hidden sm:inline-block px-2 py-0.5 rounded-full text-[8px] tracking-widest font-bold ${
                      isActive ? 'bg-imperial-950/20 text-imperial-950' : 'bg-gold-500/15 text-gold-300'
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Tab Content Display Stage */}
        <div className="relative min-h-[460px] flex items-center justify-center">
          {activeTab === 'scratch' && (
            <div className="w-full animate-fade-in">
              <DateScratchCard />
            </div>
          )}

          {activeTab === 'letter' && (
            <div className="w-full animate-fade-in">
              <LetterOpening />
            </div>
          )}

          {activeTab === 'scroll' && (
            <div className="w-full animate-fade-in">
              <RoyalScroll />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

