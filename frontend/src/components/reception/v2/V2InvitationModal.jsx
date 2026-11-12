import React, { useState } from 'react';
import { X, Calendar, Mail, FileText } from 'lucide-react';
import { weddingData } from '../../../data/weddingData';
import DateScratchCard from './DateScratchCard';
import LetterOpening from './LetterOpening';

export default function V2InvitationModal({ isOpen, onClose, onMusicStart }) {
  const [view, setView] = useState('letter'); // Defaults directly to 3D Wax Letter Opening
  if (!isOpen) return null;
  const { couple, receptionSite } = weddingData;

  const handleEnterCelebration = () => {
    if (onMusicStart) {
      onMusicStart();
    }
    onClose();
  };

  return (
    <div
      onClick={handleEnterCelebration}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/92 backdrop-blur-2xl animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl p-5 sm:p-9 rounded-3xl bg-[#0F0F18] border-2 border-gold-400/70 shadow-[0_30px_90px_rgba(0,0,0,0.95)] text-center space-y-6 max-h-[92vh] overflow-y-auto"
      >
        {/* Close / Skip Button */}
        <button
          onClick={handleEnterCelebration}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-stone-400 hover:text-white p-2 rounded-full border border-white/10 transition-colors cursor-pointer z-50 flex items-center space-x-1"
          aria-label="Enter celebration"
          title="Skip to Celebration"
        >
          <span className="text-[10px] font-cinzel tracking-wider uppercase text-stone-400 hover:text-white hidden sm:inline">Skip</span>
          <X size={18} />
        </button>

        {/* Modal Mini Navigation Tabs */}
        <div className="flex items-center justify-center space-x-2 pt-1 pb-1 border-b border-white/10">
          <button
            onClick={() => setView('letter')}
            className={`px-3.5 py-1.5 rounded-full text-[10px] font-cinzel tracking-wider uppercase transition-all flex items-center space-x-1.5 ${
              view === 'letter'
                ? 'bg-gold-500 text-imperial-950 font-bold shadow'
                : 'text-stone-300 hover:text-white bg-white/5'
            }`}
          >
            <Mail size={12} />
            <span>Wax Letter</span>
          </button>
          <button
            onClick={() => setView('card')}
            className={`px-3.5 py-1.5 rounded-full text-[10px] font-cinzel tracking-wider uppercase transition-all ${
              view === 'card'
                ? 'bg-gold-500 text-imperial-950 font-bold shadow'
                : 'text-stone-300 hover:text-white bg-white/5'
            }`}
          >
            Formal Card
          </button>
          <button
            onClick={() => setView('scratch')}
            className={`px-3.5 py-1.5 rounded-full text-[10px] font-cinzel tracking-wider uppercase transition-all flex items-center space-x-1.5 ${
              view === 'scratch'
                ? 'bg-gold-500 text-imperial-950 font-bold shadow'
                : 'text-stone-300 hover:text-white bg-white/5'
            }`}
          >
            <Calendar size={12} />
            <span>Scratch Dates</span>
          </button>
        </div>

        {/* VIEW 1: FORMAL INVITATION CARD */}
        {view === 'card' && (
          <div className="space-y-6 animate-fade-in">
            {/* Monogram Seal */}
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="w-12 h-12 rounded-full border border-gold-400/80 bg-gold-500/10 flex items-center justify-center">
                <span className="font-cinzel text-sm font-bold text-gold-300">R &amp; B</span>
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
          </div>
        )}

        {/* VIEW 2: SCRATCH CARD */}
        {view === 'scratch' && (
          <div className="py-2 animate-fade-in">
            <DateScratchCard />
          </div>
        )}

        {/* VIEW 3: WAX SEAL LETTER */}
        {view === 'letter' && (
          <div className="py-2 animate-fade-in">
            <LetterOpening
              onMusicStart={onMusicStart}
              onEnterCelebration={handleEnterCelebration}
            />
          </div>
        )}

        {/* Enter Celebration Button for Card and Scratch views */}
        {view !== 'letter' && (
          <div className="pt-2">
            <button
              onClick={handleEnterCelebration}
              className="px-7 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-imperial-950 font-cinzel text-xs tracking-wider uppercase font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer gold-sheen-sweep"
            >
              ENTER CELEBRATION
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

