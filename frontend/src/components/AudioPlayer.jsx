import React, { useState, useRef } from 'react';
import { Disc3, Music, Volume2, VolumeX, Sparkles } from 'lucide-react';
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

      {/* Floating Royal Vintage Vinyl Medallion */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={togglePlay}
          className="group relative flex items-center space-x-3 bg-gradient-to-r from-imperial-950 to-imperial-800 text-white px-4 py-3 border-2 border-gold-500 shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_4px_30px_rgba(212,175,55,0.6)] transition-all duration-300 active:scale-95 deckled-card-gold"
          aria-label={isPlaying ? 'Pause music' : 'Play royal wedding music'}
        >
          {/* Rotating Vinyl Disc */}
          <div
            className={`w-8 h-8 rounded-full border-2 border-gold-400 bg-stone-900 flex items-center justify-center relative overflow-hidden ${
              isPlaying ? 'animate-spin-slow' : ''
            }`}
          >
            {/* Concentric Grooves */}
            <div className="absolute inset-1 rounded-full border border-gold-500/30" />
            <div className="absolute inset-2 rounded-full border border-gold-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-gold-400 border border-stone-900" />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-cinzel text-[10px] tracking-[0.25em] uppercase text-gold-300 font-bold">
              {isPlaying ? 'PAUSE MELODY' : 'PLAY MELODY'}
            </span>
            <span className="text-[9px] text-stone-300 font-sans tracking-wider">
              {isPlaying ? 'Wedding Harmonies' : 'Tap to Listen'}
            </span>
          </div>

          {/* Equalizer Bars */}
          {isPlaying && (
            <div className="flex items-end space-x-0.5 h-3.5 pl-1">
              <span className="w-0.5 h-3 bg-gold-400 animate-pulse" />
              <span className="w-0.5 h-2 bg-gold-200 animate-pulse delay-75" />
              <span className="w-0.5 h-3.5 bg-gold-400 animate-pulse delay-150" />
              <span className="w-0.5 h-1.5 bg-gold-200 animate-pulse delay-100" />
            </div>
          )}
        </button>
      </div>
    </>
  );
}
