import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X } from 'lucide-react';
import { weddingData } from '../../data/weddingData';

export default function NewWaxEnvelope({ isOpen, onClose, onMusicStart }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFlapOpen, setIsFlapOpen] = useState(false);
  const { couple, receptionSite } = weddingData;

  if (!isOpen) return null;

  const handleOpenEnvelope = () => {
    if (isOpening) return;
    setIsOpening(true);

    setTimeout(() => {
      setIsFlapOpen(true);
    }, 150);

    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#E2C785', '#FAF6F0', '#D4AF37', '#721C2A', '#FFE4A0'],
        disableForReducedMotion: true
      });
    } catch (e) {
      console.log('Confetti effect error:', e);
    }

    if (onMusicStart) {
      onMusicStart();
    }

    setTimeout(() => {
      onClose();
      setIsOpening(false);
      setIsFlapOpen(false);
    }, 1300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg transition-all duration-500 animate-fade-in">
      {/* Radiant Light Burst Animation on Seal Break */}
      {isOpening && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10 overflow-hidden">
          <div className="w-[540px] h-[540px] rounded-full bg-gradient-to-r from-amber-300/40 via-yellow-100/60 to-transparent blur-3xl animate-light-burst" />
        </div>
      )}

      <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
        {/* Skip Button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-stone-400 hover:text-gold-300 p-2 text-xs font-cinzel tracking-widest uppercase flex items-center space-x-1.5 transition-colors cursor-pointer"
          aria-label="Skip envelope animation"
        >
          <span>Skip</span>
          <X size={14} />
        </button>

        {/* 3D Envelope Container */}
        <div className="envelope-container relative">
          <div className="relative rounded-2xl p-6 sm:p-8 envelope-velvet-bg border border-gold-400/50 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden text-center min-h-[490px] flex flex-col items-center justify-between">
            
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
                  fill="#2A0710"
                  stroke="#D4AF37"
                  strokeWidth="1.2"
                  strokeOpacity="0.5"
                />
              </svg>
            </div>

            {/* Ambient Gold Header Frame */}
            <div className="relative z-10 space-y-2 pt-2">
              <span className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-gold-300/90 font-medium block">
                ROYAL CORDIAL INVITATION
              </span>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
              <h2 className="font-cinzel text-xl sm:text-2xl text-gold-100 font-normal tracking-wide">
                The Wedding Reception
              </h2>
            </div>

            {/* Central Monogram & Interactive Wax Seal */}
            <div className="relative z-30 my-6 flex flex-col items-center">
              {/* Couple Initial Monogram */}
              <div className="font-script text-4xl sm:text-5xl text-gold-200 mb-3 drop-shadow-md select-none">
                {couple.monogram}
              </div>

              {/* Physical Wax Seal Button */}
              <button
                onClick={handleOpenEnvelope}
                className={`relative group wax-seal-pearl w-20 h-20 sm:w-22 sm:h-22 rounded-full border-2 border-gold-400/80 flex items-center justify-center cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95 ${
                  isOpening ? 'scale-110' : ''
                }`}
                title="Tap to unseal royal invitation"
                aria-label="Tap to unseal invitation"
              >
                {/* Concentric Gold Rings */}
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full border border-gold-600/60 flex items-center justify-center">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border border-dashed border-gold-700/50 flex items-center justify-center">
                    <span className="font-cinzel text-xs font-bold text-imperial-950 tracking-wider">
                      {couple.monogram}
                    </span>
                  </div>
                </div>

                {/* Subtle Pulse Halo */}
                <div className="absolute -inset-2 rounded-full border border-gold-400/30 animate-pulse pointer-events-none" />
              </button>

              <span className="text-[10px] tracking-[0.25em] uppercase font-cinzel text-gold-300/80 mt-4 block">
                TAP SEAL TO OPEN
              </span>
            </div>

            {/* Date & Destination Footer Preview */}
            <div className="relative z-10 space-y-1.5 pb-2 text-stone-300">
              <p className="font-cinzel text-xs text-gold-200 tracking-wider font-semibold">
                {receptionSite.date} • {receptionSite.time}
              </p>
              <p className="text-[11px] text-stone-400 font-sans">
                {receptionSite.venue.name}, {receptionSite.venue.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

