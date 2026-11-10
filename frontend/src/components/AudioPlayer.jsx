import React, { useState, useRef } from 'react';
import { weddingData } from '../data/weddingData';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log("Audio playback prevented:", error);
        });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingData.audio.url}
        loop
        preload="auto"
      />

      {/* Floating Musical Notes Animation when playing */}
      {isPlaying && (
        <div className="fixed bottom-16 right-7 pointer-events-none flex space-x-2 text-gold-400 select-none z-50">
          <span className="animate-bounce text-xs drop-shadow">♪</span>
          <span className="animate-bounce delay-150 text-[10px] drop-shadow">♫</span>
          <span className="animate-bounce delay-300 text-sm drop-shadow">♬</span>
        </div>
      )}

      {/* Screenshot-Matched Compact Play Melody Button */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none">
        <button
          onClick={togglePlay}
          className="group relative flex items-center space-x-2.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-sm bg-[#22050B] border border-gold-500 shadow-xl hover:shadow-[0_4px_20px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          title={isPlaying ? "Pause Wedding Melody" : "Play Wedding Melody"}
          aria-label={isPlaying ? "Pause background melody" : "Play background melody"}
        >
          {/* Outer Gold Accent */}
          <div className="absolute inset-0 rounded-sm border border-gold-400/30 pointer-events-none" />

          {/* Circular Vinyl Icon with Concentric Rings (Compact Refined Size) */}
          <div className="relative w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#180307] border border-gold-500/70 flex items-center justify-center shrink-0 overflow-hidden">
            <div
              className={`w-full h-full rounded-full flex items-center justify-center relative ${
                isPlaying ? 'animate-spin-slow' : ''
              }`}
            >
              <div className="absolute inset-0.5 rounded-full border border-gold-400/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex items-center justify-center shadow-inner">
                <div className="w-0.5 h-0.5 rounded-full bg-[#180307]" />
              </div>
            </div>
          </div>

          {/* Text Lockup Matching Screenshot */}
          <div className="text-left font-cinzel leading-tight pr-1">
            <div className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-gold-300 group-hover:text-gold-200 transition-colors">
              {isPlaying ? 'PAUSE MELODY' : 'PLAY MELODY'}
            </div>
            <div className="text-[8px] sm:text-[9px] tracking-wider text-gold-400/80 font-sans italic">
              {isPlaying ? 'Now Playing' : 'Tap to Listen'}
            </div>
          </div>
        </button>
      </div>
    </>
  );
}
