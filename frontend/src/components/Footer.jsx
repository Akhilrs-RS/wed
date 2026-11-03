import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function Footer() {
  const { couple } = weddingData;

  return (
    <footer className="bg-[#FAF7F2] border-t-2 border-gold-500/30 py-20 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Royal Crest */}
        <div className="inline-block mb-8">
          <div className="w-14 h-14 rounded-full border-2 border-gold-500 bg-white flex items-center justify-center mx-auto mb-4 shadow-md">
            <span className="font-cinzel text-xl text-gold-700 font-bold">✝</span>
          </div>
          <span className="font-cinzel-dec text-3xl sm:text-4xl tracking-[0.3em] text-imperial-900 font-semibold block">
            R &amp; B
          </span>
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
        </div>

        {/* Names */}
        <h3 className="font-cinzel text-2xl sm:text-3xl text-imperial-900 font-medium mb-4">
          {couple.groom.fullName} &amp; {couple.bride.fullName}
        </h3>

        {/* Scripture Verse */}
        <p className="font-pinyon text-2xl sm:text-3xl text-imperial-800 max-w-lg mx-auto mb-2 leading-relaxed">
          “{couple.verse.text}”
        </p>
        <p className="font-cinzel text-[11px] tracking-[0.25em] uppercase text-gold-700 font-semibold mb-10">
          — {couple.verse.reference} —
        </p>

        {/* Quick Nav in Cinzel */}
        <div className="flex flex-wrap justify-center gap-6 text-[10px] tracking-[0.25em] uppercase font-cinzel text-stone-600 mb-12">
          <a href="#story" className="hover:text-gold-700 transition-colors">Our Story</a>
          <a href="#parents" className="hover:text-gold-700 transition-colors">The Families</a>
          <a href="#the-day" className="hover:text-gold-700 transition-colors">Venues</a>
          <a href="#rsvp" className="hover:text-gold-700 transition-colors">RSVP</a>
        </div>

        {/* Copyright */}
        <div className="text-[11px] tracking-wider text-stone-400 font-sans border-t border-gold-500/20 pt-8">
          <p className="flex items-center justify-center space-x-2">
            <span>Solemnized in holy matrimony on December 21, 2026</span>
            <Sparkles size={12} className="text-gold-600" />
            <span>Robin &amp; Benigla</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
