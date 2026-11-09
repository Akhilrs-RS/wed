import React from 'react';
import { Heart, Sparkles, ArrowLeft } from 'lucide-react';
import { weddingData } from '../../data/weddingData';

export default function ReceptionFooter({ navigate }) {
  const { couple, receptionSite } = weddingData;

  return (
    <footer className="py-16 bg-imperial-950 text-white relative border-t-2 border-gold-500 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10 space-y-8">
        
        {/* Monogram Seal */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-12 h-12 rounded-full border-2 border-gold-500 bg-imperial-900 flex items-center justify-center shadow-lg">
            <span className="font-cinzel text-base text-gold-400 font-bold">✝</span>
          </div>
          <span className="font-cinzel-dec text-2xl tracking-[0.25em] text-gold-300 font-semibold">
            {couple.monogram}
          </span>
          <p className="font-cinzel text-xs tracking-[0.3em] uppercase text-stone-400">
            THE WEDDING RECEPTION • KANYAKUMARI
          </p>
        </div>

        {/* Verse */}
        <div className="max-w-md mx-auto py-4 border-y border-gold-500/30">
          <p className="font-serif italic text-gold-200 text-sm sm:text-base">
            “{couple.verse.text}”
          </p>
          <span className="block font-cinzel text-[10px] tracking-widest text-gold-400 uppercase mt-2">
            {couple.verse.reference}
          </span>
        </div>

        {/* Date & Venue Summary */}
        <div className="text-xs text-stone-300 font-sans space-y-1">
          <p className="font-cinzel tracking-wider text-gold-300 font-semibold">
            {receptionSite.date} • {receptionSite.time}
          </p>
          <p className="text-stone-400">
            {receptionSite.venue.fullAddress}
          </p>
        </div>

        {/* Navigation & Link back to full invite */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-cinzel tracking-widest uppercase text-stone-300 pt-4">
          <a href="#story" className="hover:text-gold-400 transition-colors">Our Story</a>
          <span>•</span>
          <a href="#parents" className="hover:text-gold-400 transition-colors">Families</a>
          <span>•</span>
          <a href="#venue" className="hover:text-gold-400 transition-colors">Venue</a>
          <span>•</span>
          <a href="#schedule" className="hover:text-gold-400 transition-colors">Schedule</a>
          <span>•</span>
          <a href="#rsvp" className="hover:text-gold-400 transition-colors">RSVP</a>
        </div>

        <div className="pt-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-imperial-900 hover:bg-imperial-800 border border-gold-500/50 hover:border-gold-400 text-gold-300 text-xs font-cinzel tracking-wider uppercase transition-colors"
          >
            <ArrowLeft size={13} />
            <span>VIEW FULL WEDDING INVITATION (DEC 21 &amp; 30)</span>
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gold-500/20 text-[10px] text-stone-500 font-mono tracking-wider">
          ROBIN VARGHESE &amp; BENIGLA J L • WEDDING RECEPTION CELEBRATION
        </div>
      </div>
    </footer>
  );
}
