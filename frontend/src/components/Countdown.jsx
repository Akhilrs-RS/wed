import React, { useState, useEffect } from 'react';
import { Clock, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function Countdown() {
  const targetDate = new Date(weddingData.events.marriage.fullDateString).getTime();

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
    { label: 'DAYS', value: timeLeft.days, max: 365 },
    { label: 'HOURS', value: timeLeft.hours, max: 24 },
    { label: 'MINUTES', value: timeLeft.minutes, max: 60 },
    { label: 'SECONDS', value: timeLeft.seconds, max: 60 },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Title */}
        <div className="inline-flex items-center space-x-2 text-gold-700 text-xs tracking-[0.3em] uppercase font-cinzel font-semibold mb-10">
          <Sparkles size={14} className="text-gold-600" />
          <span>THE CELESTIAL COUNTDOWN</span>
          <Sparkles size={14} className="text-gold-600" />
        </div>

        {/* 4 Circular Golden Dials */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {units.map((unit) => (
            <div
              key={unit.label}
              className="relative p-6 sm:p-8 bg-white/70 border-2 border-gold-500/30 rounded-full flex flex-col items-center justify-center aspect-square shadow-lg deckled-card hover:border-gold-500 transition-colors"
            >
              {/* Outer decorative ring */}
              <div className="absolute inset-2 border border-gold-500/20 rounded-full pointer-events-none" />

              <span className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-imperial-900 font-semibold leading-none">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="mt-2 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-cinzel text-gold-700 font-medium">
                {unit.label}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-stone-600 font-pinyon text-2xl sm:text-3xl">
          Until our sacred vows are pledged before God and loved ones
        </p>
      </div>
    </section>
  );
}
