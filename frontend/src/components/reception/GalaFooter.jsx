import React from 'react';
import { ArrowLeft, Sparkles, Heart } from 'lucide-react';
import { weddingData } from '../../data/weddingData';

export default function GalaFooter({ navigate, onOpenEnvelope }) {
  const { couple, receptionSite } = weddingData;

  return (
    <footer className="py-16 sm:py-20 relative bg-black/85 text-white border-t border-gold-400/40 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
        
        {/* Monogram Emblem */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-12 h-12 rounded-full border border-gold-400 bg-imperial-950 flex items-center justify-center shadow-lg">
            <span className="font-cinzel text-base text-gold-400 font-bold">✝</span>
          </div>
          <span className="font-script text-3xl sm:text-4xl text-gold-200">
            {couple.monogram}
          </span>
          <p className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold-400/80">
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

        {/* Re-Open Royal Envelope Button */}
        {onOpenEnvelope && (
          <div className="pt-2">
            <button
              onClick={onOpenEnvelope}
              className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full border border-gold-400 bg-[#25060E] hover:bg-[#380812] text-gold-200 font-cinzel text-xs tracking-wider uppercase transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles size={13} className="text-gold-400" />
              <span>Re-open Royal Envelope</span>
            </button>
          </div>
        )}

        {/* Navigation back to Holy Matrimony */}
        <div className="pt-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-imperial-950 hover:bg-black border border-gold-500/50 hover:border-gold-400 text-gold-300 text-xs font-cinzel tracking-wider uppercase transition-colors cursor-pointer rounded-full"
          >
            <ArrowLeft size={13} />
            <span>VIEW CHURCH MATRIMONY INVITATION (DEC 21)</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gold-500/20 text-[10px] text-stone-500 font-mono tracking-wider">
          ROBIN VARGHESE &amp; BENIGLA J L • WEDDING RECEPTION CELEBRATION • 2026
        </div>
      </div>
    </footer>
  );
}

