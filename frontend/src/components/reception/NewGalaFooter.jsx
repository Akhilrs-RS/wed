import React from 'react';
import { Sparkles, Heart } from 'lucide-react';
import { weddingData } from '../../data/weddingData';

export default function NewGalaFooter({ onOpenEnvelope }) {
  const { couple, receptionSite } = weddingData;

  return (
    <footer className="py-16 sm:py-24 relative bg-black/90 text-white border-t border-gold-400/40 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
        
        {/* Monogram Seal */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <span className="font-script text-4xl sm:text-5xl text-gold-200 drop-shadow-md">
            {couple.monogram}
          </span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
          <p className="font-cinzel text-[9.5px] sm:text-[10.5px] tracking-[0.35em] uppercase text-gold-400/90 font-semibold">
            THE WEDDING RECEPTION GALA • KANYAKUMARI
          </p>
        </div>

        {/* Date & Venue Reminder */}
        <div className="text-xs text-stone-300 font-sans space-y-1">
          <p className="font-cinzel tracking-wider text-gold-300 font-semibold text-sm">
            {receptionSite.date} • {receptionSite.time}
          </p>
          <p className="text-stone-400 text-xs">
            {receptionSite.venue.fullAddress}
          </p>
        </div>

        {/* Scripture Verse */}
        <div className="max-w-md mx-auto py-3 border-y border-gold-500/20">
          <p className="font-serif italic text-gold-200 text-sm sm:text-base">
            “{couple.verse.text}”
          </p>
          <span className="block font-cinzel text-[9px] tracking-widest text-gold-400/80 uppercase mt-1">
            {couple.verse.reference}
          </span>
        </div>

        {/* Re-Open Royal Envelope Button */}
        {onOpenEnvelope && (
          <div className="pt-2">
            <button
              onClick={onOpenEnvelope}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full border border-gold-400/70 bg-[#25060E] hover:bg-[#380812] text-gold-200 font-cinzel text-xs tracking-wider uppercase transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles size={13} className="text-gold-400" />
              <span>Re-open Royal Envelope</span>
            </button>
          </div>
        )}

        {/* Copyright */}
        <div className="pt-8 border-t border-gold-500/20 text-[10px] text-stone-500 font-mono tracking-wider">
          ROBIN VARGHESE &amp; BENIGLA J L • WEDDING RECEPTION CELEBRATION • 2026
        </div>
      </div>
    </footer>
  );
}
