import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MailOpen, Heart, RotateCcw } from 'lucide-react';
import { weddingData } from '../../../data/weddingData';

export default function LetterOpening() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlapOpen, setIsFlapOpen] = useState(false);
  const [isLetterExtracted, setIsLetterExtracted] = useState(false);
  const { couple, receptionSite } = weddingData;

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);

    // 1. Break wax seal & flip 3D flap
    setTimeout(() => {
      setIsFlapOpen(true);
      try {
        confetti({
          particleCount: 65,
          spread: 80,
          origin: { y: 0.62 },
          colors: ['#D4AF37', '#FAF6F0', '#9E2A2B', '#E6C687']
        });
      } catch (e) {
        console.log('Confetti error:', e);
      }
    }, 200);

    // 2. Slide and unfold letter
    setTimeout(() => {
      setIsLetterExtracted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsLetterExtracted(false);
    setTimeout(() => {
      setIsFlapOpen(false);
      setTimeout(() => {
        setIsOpen(false);
      }, 400);
    }, 300);
  };

  return (
    <div className="w-full max-w-xl mx-auto select-none">
      
      {/* Outer Envelope Wrapper */}
      <div className="relative flex flex-col items-center">
        
        {/* Helper Hint */}
        <div className="mb-4 text-center">
          {!isOpen ? (
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-200 text-xs font-cinzel tracking-wider uppercase">
              <Mail size={14} className="text-gold-300" />
              <span>TAP WAX SEAL TO UNSEAL EPISTLE</span>
            </span>
          ) : (
            <button
              onClick={handleReset}
              className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-stone-300 hover:text-white text-[11px] font-cinzel tracking-wider uppercase transition-colors cursor-pointer"
            >
              <RotateCcw size={12} />
              <span>Reseal Letter</span>
            </button>
          )}
        </div>

        {/* 3D Envelope System */}
        <div className="relative w-full max-w-[420px] envelope-container">
          
          {/* =================================================================
              EXTRACTED LETTER (Floats up and unfolds)
             ================================================================= */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isLetterExtracted
                ? 'opacity-100 translate-y-0 scale-100 mb-6 relative z-30'
                : 'opacity-0 translate-y-12 scale-95 pointer-events-none absolute inset-x-4 top-10 z-10'
            }`}
          >
            <div className="p-7 sm:p-9 rounded-2xl bg-[#FCF8F0] border-2 border-[#D4AF37]/60 shadow-[0_25px_70px_rgba(0,0,0,0.9)] text-[#2B1B10] text-center font-serif relative overflow-hidden">
              {/* Subtle watermark monogram */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
                <span className="font-cinzel text-9xl font-bold">RB</span>
              </div>

              {/* Letter Header */}
              <div className="pb-4 border-b border-[#D4AF37]/30 mb-5">
                <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-[#8F6819] font-bold block mb-1">
                  A PERSONAL EPISTLE
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl text-[#1E120A] font-medium">
                  Dearest Family &amp; Friends,
                </h3>
              </div>

              {/* Letter Body */}
              <div className="space-y-3.5 text-xs sm:text-sm text-[#453123] leading-relaxed italic text-left">
                <p>
                  As we stand on the threshold of our married life together, our hearts overflow with gratitude for the love, prayers, and counsel you have gifted us throughout our journey.
                </p>
                <p>
                  We warmly invite you to grace our Wedding Reception with your cherished presence — to share in an evening filled with laughter, festive cuisine, music, and grateful thanksgiving.
                </p>
                <p className="font-semibold text-[#2D1B0D]">
                  Your blessings will forever illuminate our home and the future we build together.
                </p>
              </div>

              {/* Sign-off Lockup */}
              <div className="pt-6 mt-6 border-t border-[#D4AF37]/30 flex flex-col items-center justify-center space-y-1">
                <p className="font-serif italic text-xs text-[#6B4E38]">
                  With all our love and warmest welcome,
                </p>
                <div className="font-script text-3xl sm:text-4xl text-[#8E6A1B] py-1">
                  Robin &amp; Benigla
                </div>
                <span className="font-cinzel text-[9.5px] tracking-widest text-[#8F6819] uppercase font-semibold">
                  DECEMBER 2026 • PUNNIYAM &amp; KERALA
                </span>
              </div>
            </div>
          </div>

          {/* =================================================================
              VELVET ENVELOPE BODY
             ================================================================= */}
          <div
            onClick={!isOpen ? handleOpenEnvelope : undefined}
            className={`relative rounded-3xl p-6 sm:p-8 envelope-velvet-bg border-2 border-gold-400/50 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden text-center transition-all duration-700 min-h-[260px] flex flex-col items-center justify-between z-20 ${
              !isOpen ? 'cursor-pointer hover:border-gold-400 hover:scale-[1.02]' : ''
            }`}
          >
            {/* Top 3D Flap */}
            <div
              className={`absolute top-0 inset-x-0 h-32 z-20 pointer-events-none envelope-flap-top transition-transform duration-700 ${
                isFlapOpen ? 'envelope-flap-open' : ''
              }`}
            >
              <svg
                viewBox="0 0 400 140"
                className="w-full h-full drop-shadow-2xl"
                preserveAspectRatio="none"
              >
                <polygon
                  points="0,0 400,0 200,135"
                  fill="#2A080F"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                />
              </svg>
            </div>

            {/* Central Monogram on Front */}
            <div className="relative z-10 pt-8 pb-4">
              <span className="font-cinzel text-[10px] tracking-[0.3em] uppercase text-gold-400/90 font-semibold block mb-1">
                THE CORDIAL INVITATION
              </span>
              <h4 className="font-cinzel text-xl sm:text-2xl text-white font-medium">
                Robin &amp; Benigla
              </h4>
              <p className="text-xs text-stone-300 font-sans mt-1">
                {receptionSite.venue.name} • {receptionSite.date}
              </p>
            </div>

            {/* Interactive Wax Seal Stamp */}
            <div className="relative z-30 pt-2 pb-2">
              <button
                type="button"
                onClick={handleOpenEnvelope}
                className="group relative w-16 h-16 rounded-full bg-gradient-to-br from-[#991B1B] via-[#7F1D1D] to-[#450A0A] border-2 border-gold-400 shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer"
                title="Click to break wax seal"
                aria-label="Break wax seal and open invitation letter"
              >
                <div className="absolute inset-1 rounded-full border border-gold-300/40" />
                <span className="font-cinzel text-sm font-bold text-gold-200 drop-shadow">
                  R &amp; B
                </span>
                
                {/* Glow ring on hover */}
                <div className="absolute -inset-1 rounded-full bg-gold-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </button>
            </div>

            {/* Bottom Accent */}
            <div className="relative z-10 text-[9px] font-cinzel tracking-widest text-gold-400/80 uppercase">
              SEALED WITH BLESSINGS • 2026
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
