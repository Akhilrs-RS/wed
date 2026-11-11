import React from 'react';

export default function V2SoundBar({ isPlaying, onToggleAudio }) {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 select-none">
      <button
        onClick={onToggleAudio}
        className="group relative flex items-center space-x-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-[#0F0F18]/90 border border-white/20 shadow-2xl hover:border-gold-400/80 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xl"
        title={isPlaying ? 'Pause Wedding Melody' : 'Play Wedding Melody'}
        aria-label={isPlaying ? 'Pause background melody' : 'Play background melody'}
      >
        {/* Subtle Ambient Gold Ring */}
        <div className="absolute inset-0 rounded-full border border-gold-400/25 pointer-events-none" />

        {/* Circular Vinyl Icon with Concentric Rings (Reduced Size) */}
        <div className="relative w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-black border border-gold-400/70 flex items-center justify-center shrink-0 overflow-hidden">
          <div
            className={`w-full h-full rounded-full flex items-center justify-center relative ${
              isPlaying ? 'animate-spin-slow' : ''
            }`}
          >
            <div className="absolute inset-0.5 rounded-full border border-gold-400/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex items-center justify-center shadow-inner">
              <div className="w-0.5 h-0.5 rounded-full bg-black" />
            </div>
          </div>
        </div>

        {/* Text Lockup */}
        <div className="text-left font-cinzel leading-tight pr-1 flex items-center space-x-2">
          <div>
            <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-gold-300 group-hover:text-gold-200 transition-colors">
              {isPlaying ? 'PAUSE MELODY' : 'PLAY MELODY'}
            </div>
            <div className="text-[8px] sm:text-[9px] tracking-wider text-stone-400 font-sans italic">
              {isPlaying ? 'Now Playing' : 'Tap to Listen'}
            </div>
          </div>

          {/* Dancing Equalizer Wave Bars */}
          {isPlaying && (
            <div className="flex items-end space-x-0.5 h-3 pb-0.5">
              <span className="w-0.5 bg-gold-400 rounded-full animate-wave-1" />
              <span className="w-0.5 bg-gold-300 rounded-full animate-wave-2" />
              <span className="w-0.5 bg-gold-400 rounded-full animate-wave-3" />
            </div>
          )}
        </div>
      </button>
    </div>
  );
}
