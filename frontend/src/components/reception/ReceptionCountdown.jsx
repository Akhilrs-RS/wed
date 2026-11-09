import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { weddingData } from '../../data/weddingData';
import ScrollReveal from '../common/ScrollReveal';

export default function ReceptionCountdown() {
  const targetDate = new Date(weddingData.receptionSite.fullDateString).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (!isNaN(difference) && difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal animation="fade-up" duration={700}>
          {/* Title */}
          <div className="inline-flex items-center space-x-2 text-gold-700 text-xs tracking-[0.3em] uppercase font-cinzel font-semibold mb-10">
            <Sparkles size={14} className="text-gold-600 animate-pulse" />
            <span>COUNTDOWN TO THE GRAND RECEPTION</span>
            <Sparkles size={14} className="text-gold-600 animate-pulse" />
          </div>
        </ScrollReveal>

        {/* 4 Circular Golden Dials */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {units.map((unit, index) => (
            <ScrollReveal
              key={unit.label}
              animation="zoom-in"
              delay={index * 120}
              duration={700}
            >
              <div className="relative p-6 sm:p-8 bg-white/85 backdrop-blur-md border-2 border-gold-500/40 rounded-full flex flex-col items-center justify-center aspect-square shadow-xl deckled-card hover:border-gold-500 hover:scale-105 transition-all duration-300">
                <div className="absolute inset-2 border border-gold-500/20 rounded-full pointer-events-none" />

                <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-imperial-900 font-semibold leading-none">
                  {String(unit.value).padStart(2, '0')}
                </span>
                <span className="mt-2 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-cinzel text-gold-700 font-medium">
                  {unit.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={500}>
          <p className="mt-10 text-stone-700 font-pinyon text-2xl sm:text-3xl">
            Until the celebration begins at Uthiram Auditorium • 30 December 2026
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
