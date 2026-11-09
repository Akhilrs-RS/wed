import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, X } from 'lucide-react';
import { weddingData } from '../../data/weddingData';

export default function WaxSealEnvelope({ isOpen, onClose, onMusicStart }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFlapOpen, setIsFlapOpen] = useState(false);
  const { couple, receptionSite } = weddingData;

  if (!isOpen) return null;

  const handleOpenEnvelope = () => {
    if (isOpening) return;

    setIsOpening(true);

    // Open flap after tiny delay for 3D realism
    setTimeout(() => {
      setIsFlapOpen(true);
    }, 150);

    // Fire golden celebration confetti burst
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FAF6F0', '#9E2A2B', '#E6C687', '#3B0E17'],
        disableForReducedMotion: true
      });
    } catch (e) {
      console.log('Confetti effect error:', e);
    }

    // Start background romantic music upon user gesture
    if (onMusicStart) {
      onMusicStart();
    }

    // Finish unsealing animation and reveal reception invitation
    setTimeout(() => {
      onClose();
      setIsOpening(false);
      setIsFlapOpen(false);
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-500 animate-fade-in">
      {/* Radiant Light Burst Animation on Seal Break */}
      {isOpening && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 overflow-hidden">
          <div className="w-[520px] h-[520px] rounded-full bg-gradient-to-r from-amber-300/50 via-yellow-100/70 to-transparent blur-2xl animate-light-burst" />
        </div>
      )}

      <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
        {/* Skip Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white p-2 text-xs font-cinzel tracking-widest uppercase flex items-center space-x-1.5 transition-colors cursor-pointer"
          aria-label="Skip envelope animation"
        >
          <span>Skip</span>
          <X size={15} />
        </button>

        {/* 3D Envelope Container */}
        <div className="envelope-container relative">
          <div className="relative rounded-2xl p-6 sm:p-8 envelope-velvet-bg border border-amber-400/40 shadow-2xl overflow-hidden text-center min-h-[480px] flex flex-col items-center justify-between">
            
            {/* Top 3D Flap */}
            <div
              className={`absolute top-0 inset-x-0 h-44 z-20 pointer-events-none envelope-flap-top transition-transform duration-1000 ${
                isFlapOpen ? 'envelope-flap-open' : ''
              }`}
            >
              <svg
                viewBox="0 0 400 180"
                className="w-full h-full drop-shadow-xl"
                preserveAspectRatio="none"
              >
                <polygon
                  points="0,0 400,0 200,170"
                  fill="#3B0E17"
                  stroke="#D4AF37"
                  strokeWidth="1.2"
                  strokeOpacity="0.5"
                />
              </svg>
            </div>

            {/* Corner Filigree Flourishes */}
            {/* Top Left */}
            <div className="absolute top-2 left-2 w-24 h-24 pointer-events-none opacity-40">
              <svg viewBox="0 0 100 100" fill="none" stroke="#E6C687" strokeWidth="1.2">
                <path d="M 0,20 Q 35,20 40,0" />
                <path d="M 0,40 Q 50,40 60,0" />
                <circle cx="25" cy="25" r="3" fill="#E6C687" />
              </svg>
            </div>

            {/* Top Right */}
            <div className="absolute top-2 right-2 w-24 h-24 pointer-events-none opacity-40 rotate-90">
              <svg viewBox="0 0 100 100" fill="none" stroke="#E6C687" strokeWidth="1.2">
                <path d="M 0,20 Q 35,20 40,0" />
                <path d="M 0,40 Q 50,40 60,0" />
                <circle cx="25" cy="25" r="3" fill="#E6C687" />
              </svg>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-2 left-2 w-24 h-24 pointer-events-none opacity-40 -rotate-90">
              <svg viewBox="0 0 100 100" fill="none" stroke="#E6C687" strokeWidth="1.2">
                <path d="M 0,20 Q 35,20 40,0" />
                <path d="M 0,40 Q 50,40 60,0" />
                <circle cx="25" cy="25" r="3" fill="#E6C687" />
              </svg>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-2 right-2 w-24 h-24 pointer-events-none opacity-40 rotate-180">
              <svg viewBox="0 0 100 100" fill="none" stroke="#E6C687" strokeWidth="1.2">
                <path d="M 0,20 Q 35,20 40,0" />
                <path d="M 0,40 Q 50,40 60,0" />
                <circle cx="25" cy="25" r="3" fill="#E6C687" />
              </svg>
            </div>

            {/* Envelope Header */}
            <div className="pt-6 relative z-10">
              <span className="inline-block px-3.5 py-1 rounded-full border border-amber-300/30 text-[9px] font-cinzel tracking-[0.3em] uppercase text-amber-200 bg-black/40">
                Reception Invitation
              </span>
              <p className="font-display italic text-amber-100/80 text-sm mt-3">
                Together with their families
              </p>
              <h2 className="font-cinzel text-xl sm:text-2xl text-amber-200 tracking-[0.2em] uppercase mt-1">
                {couple.groom.firstName} &amp; {couple.bride.firstName}
              </h2>
            </div>

            {/* 3D Wax Seal Button */}
            <div className="relative z-30 my-6">
              <button
                onClick={handleOpenEnvelope}
                disabled={isOpening}
                className="group relative cursor-pointer focus:outline-none rounded-full"
                title="Tap seal to open"
                aria-label="Tap wax seal to open reception invitation"
              >
                {/* Pulsing Ripple Ring */}
                <div className="absolute -inset-2.5 rounded-full border border-amber-300/40 animate-ping opacity-60 pointer-events-none" />

                {/* Wax Seal Medallion */}
                <div className="wax-seal-pearl w-20 h-20 sm:w-24 sm:h-24 rounded-full flex flex-col items-center justify-center relative transform transition-transform group-hover:scale-105 active:scale-95 shadow-2xl">
                  {/* Inner Debossed Ring */}
                  <div className="absolute inset-1.5 rounded-full border border-amber-800/30" />

                  {/* Monogram */}
                  <span className="font-script text-2xl sm:text-3xl text-stone-900 font-bold select-none pt-0.5">
                    {couple.monogram}
                  </span>

                  {/* Date on Seal */}
                  <span className="text-[8px] font-cinzel tracking-widest text-stone-800 uppercase mt-0.5 opacity-80">
                    30.12.26
                  </span>
                </div>
              </button>

              <div className="mt-4 flex items-center justify-center space-x-1.5 text-amber-200/90 text-[11px] font-cinzel tracking-[0.2em] uppercase">
                <Sparkles size={12} className="text-amber-300 animate-pulse" />
                <span>Tap seal to open</span>
                <Sparkles size={12} className="text-amber-300 animate-pulse" />
              </div>
            </div>

            {/* Envelope Footer */}
            <div className="pb-3 text-center text-amber-200/70 font-cinzel text-[10px] tracking-widest relative z-10">
              <p className="font-medium text-amber-200">
                WEDNESDAY, DECEMBER 30, 2026 • 5:30 PM
              </p>
              <p className="text-[9px] mt-0.5 text-amber-200/60 uppercase">
                UTHIRAM AUDITORIUM • PUNNIYAM, KANYAKUMARI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

