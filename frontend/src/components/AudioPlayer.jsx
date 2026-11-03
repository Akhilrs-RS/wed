import React, { useState, useRef } from 'react';
import { Disc3, Music, Volume2, VolumeX, Sparkles, Play, Pause } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
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

      {/* Compact Royal Golden Vinyl Medallion (Reduced Size) */}
      <div 
        className="fixed bottom-5 right-5 z-50 flex items-center"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Subtle Slide-out Tooltip */}
        <div
          className={`hidden sm:flex items-center space-x-2 mr-3 px-3 py-1.5 bg-imperial-950/90 backdrop-blur-md border border-gold-500/50 rounded-full shadow-lg transition-all duration-300 pointer-events-none ${
            showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
        >
          <Sparkles size={11} className="text-gold-400" />
          <span className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-gold-200 whitespace-nowrap">
            {isPlaying ? 'Pause Harmony' : 'Play Wedding Melody'}
          </span>
        </div>

        {/* Floating Musical Notes Animation when playing */}
        {isPlaying && (
          <div className="absolute -top-7 left-2 pointer-events-none flex space-x-2 text-gold-400 select-none">
            <span className="animate-bounce text-xs drop-shadow">♪</span>
            <span className="animate-bounce delay-150 text-[10px] drop-shadow">♫</span>
            <span className="animate-bounce delay-300 text-sm drop-shadow">♬</span>
          </div>
        )}

        {/* Sleek Circular Royal Brooch Button */}
        <button
          onClick={togglePlay}
          className={`relative w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-br from-imperial-900 via-imperial-950 to-black text-white p-1 border-2 border-gold-400/80 shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.7)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center ${
            isPlaying ? 'ring-2 ring-gold-400/60 ring-offset-1 ring-offset-stone-900' : ''
          }`}
          aria-label={isPlaying ? 'Pause music' : 'Play royal wedding music'}
          title={isPlaying ? 'Pause music' : 'Play wedding music'}
        >
          {/* Outer Gold Filigree Ring */}
          <div className="absolute inset-0.5 rounded-full border border-gold-500/30 pointer-events-none" />

          {/* Rotating Vinyl Disc */}
          <div
            className={`w-full h-full rounded-full bg-stone-900 flex items-center justify-center relative overflow-hidden ${
              isPlaying ? 'animate-spin-slow' : ''
            }`}
          >
            {/* Concentric Vinyl Grooves */}
            <div className="absolute inset-1 rounded-full border border-gold-500/20" />
            <div className="absolute inset-2 rounded-full border border-gold-500/15" />
            
            {/* Center Royal Gold Crest */}
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 flex items-center justify-center shadow-inner">
              {isPlaying ? (
                <div className="flex items-center space-x-0.5">
                  <span className="w-0.5 h-2.5 bg-imperial-950 rounded-full" />
                  <span className="w-0.5 h-2.5 bg-imperial-950 rounded-full" />
                </div>
              ) : (
                <Play size={10} className="text-imperial-950 fill-imperial-950 ml-0.5" />
              )}
            </div>
          </div>

          {/* Micro Equalizer Bar Indicator on Edge when Playing */}
          {isPlaying && (
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-end space-x-0.5 h-2 px-1.5 py-0.5 bg-imperial-950/90 rounded-full border border-gold-500/40">
              <span className="w-0.5 h-1.5 bg-gold-400 animate-pulse" />
              <span className="w-0.5 h-2.5 bg-gold-200 animate-pulse delay-75" />
              <span className="w-0.5 h-1.5 bg-gold-400 animate-pulse delay-150" />
            </div>
          )}
        </button>
      </div>
    </>
  );
}
