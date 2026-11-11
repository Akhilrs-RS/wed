import React from 'react';
import { X } from 'lucide-react';
import { weddingData } from '../../../data/weddingData';

export default function V2InvitationModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const { couple, receptionSite } = weddingData;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg p-8 sm:p-12 rounded-3xl bg-[#0F0F18] border-2 border-gold-400/70 shadow-[0_30px_90px_rgba(0,0,0,0.95)] text-center space-y-6 max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-white p-2 rounded-full border border-white/10 transition-colors cursor-pointer"
          aria-label="Close invitation modal"
        >
          <X size={20} />
        </button>

        {/* Monogram Seal */}
        <div className="flex flex-col items-center justify-center space-y-1">
          <div className="w-12 h-12 rounded-full border border-gold-400/80 bg-gold-500/10 flex items-center justify-center">
            <span className="font-cinzel text-sm font-bold text-gold-300">R</span>
          </div>
          <span className="font-script text-4xl sm:text-5xl text-gold-200 mt-2">
            {couple.monogram}
          </span>
          <span className="text-[9.5px] font-cinzel tracking-[0.35em] uppercase text-gold-400/90 font-semibold block">
            ROYAL CORDIAL INVITATION
          </span>
        </div>

        {/* Couple Invitation Text */}
        <div className="space-y-3 py-2 border-y border-white/10">
          <p className="font-serif italic text-stone-300 text-sm sm:text-base">
            Together with our beloved parents, we cordially request the honour of your presence at the Wedding Reception celebrating the union of
          </p>
          <h2 className="font-cinzel text-2xl sm:text-4xl text-white font-medium">
            Robin <span className="font-script text-2xl sm:text-4xl text-gold-300">&amp;</span> Benigla
          </h2>
          <p className="text-xs font-sans text-stone-400">
            An evening of festive banquet, music &amp; heartfelt thanksgiving
          </p>
        </div>

        {/* Date, Time & Venue */}
        <div className="space-y-1 text-xs font-sans text-stone-300">
          <p className="font-cinzel text-base sm:text-lg text-gold-300 font-bold">
            {receptionSite.date} • {receptionSite.time} IST
          </p>
          <p className="font-cinzel text-white font-semibold">
            {receptionSite.venue.name}
          </p>
          <p className="text-stone-400 text-xs">
            {receptionSite.venue.fullAddress}
          </p>
        </div>

        {/* Scripture Verse */}
        <div className="pt-2 text-stone-300 text-xs font-serif italic">
          “{couple.verse.text}”
          <span className="block font-cinzel text-[9px] uppercase tracking-widest text-gold-400/80 mt-1">
            {couple.verse.reference}
          </span>
        </div>

        {/* Close CTA */}
        <div className="pt-4">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-imperial-950 font-cinzel text-xs tracking-wider uppercase font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            ENTER CELEBRATION
          </button>
        </div>
      </div>
    </div>
  );
}
