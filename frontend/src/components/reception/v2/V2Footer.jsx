import React from 'react';
import { MailOpen } from 'lucide-react';
import { weddingData } from '../../../data/weddingData';

export default function V2Footer({ onOpenInvitation }) {
  const { couple, receptionSite } = weddingData;

  return (
    <footer className="py-20 sm:py-28 relative bg-[#07070B] text-white border-t border-white/10 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-7">
        
        {/* Names Header */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <h3 className="font-cinzel text-2xl sm:text-4xl text-white font-medium tracking-wide">
            Robin <span className="font-script text-3xl sm:text-5xl text-gold-300">&amp;</span> Benigla
          </h3>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-1" />
          <p className="font-cinzel text-[10px] sm:text-xs tracking-[0.35em] uppercase text-gold-400/90 font-semibold">
            THE WEDDING RECEPTION GALA • KANYAKUMARI
          </p>
        </div>

        {/* Date & Destination */}
        <div className="text-xs text-stone-300 font-sans space-y-1">
          <p className="font-cinzel tracking-wider text-gold-200 font-semibold text-sm sm:text-base">
            {receptionSite.date} • {receptionSite.time} IST
          </p>
          <p className="text-stone-400 text-xs">
            {receptionSite.venue.fullAddress}
          </p>
        </div>

        {/* Scripture Quote */}
        <div className="max-w-md mx-auto py-4 border-y border-white/10">
          <p className="font-serif italic text-gold-200 text-sm sm:text-base">
            “{couple.verse.text}”
          </p>
          <span className="block font-cinzel text-[9.5px] tracking-widest text-gold-400/80 uppercase mt-1">
            {couple.verse.reference}
          </span>
        </div>

        {/* Open Formal Invitation Card Trigger */}
        {onOpenInvitation && (
          <div className="pt-2">
            <button
              onClick={onOpenInvitation}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-gold-400/60 bg-white/5 hover:bg-white/10 text-gold-200 font-cinzel text-xs tracking-wider uppercase transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MailOpen size={14} className="text-gold-400" />
              <span>View Formal Invitation Suite</span>
            </button>
          </div>
        )}

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-[10px] text-stone-500 font-mono tracking-wider">
          ROBIN VARGHESE &amp; BENIGLA J L • WEDDING RECEPTION CELEBRATION • 2026
        </div>
      </div>
    </footer>
  );
}

