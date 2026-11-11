import React, { useState, useRef, useEffect } from 'react';
import NewGalaNavbar from '../components/reception/NewGalaNavbar';
import NewGalaHero from '../components/reception/NewGalaHero';
import NewGalaProgram from '../components/reception/NewGalaProgram';
import NewGalaHeritage from '../components/reception/NewGalaHeritage';
import NewGalaVenue from '../components/reception/NewGalaVenue';
import NewGalaGallery from '../components/reception/NewGalaGallery';
import NewGalaRSVP from '../components/reception/NewGalaRSVP';
import NewGalaFooter from '../components/reception/NewGalaFooter';
import NewWaxEnvelope from '../components/reception/NewWaxEnvelope';
import NewSoundBar from '../components/reception/NewSoundBar';
import FloatingPetals from '../components/reception/FloatingPetals';
import ChampagneBokeh from '../components/reception/ChampagneBokeh';
import { weddingData } from '../data/weddingData';

export default function ReceptionApp({ navigate }) {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Initialize romantic background melody
  useEffect(() => {
    const audio = new Audio(weddingData.audio.url);
    audio.loop = true;
    audio.volume = 0.55;
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Autostart audio when guest taps the wax seal
  const handleMusicStart = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Audio autoplay blocked by browser policy:', err);
        });
    }
  };

  // Toggle audio from floating velvet button
  const handleToggleAudio = () => {
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
        .catch((err) => {
          console.log('Audio playback error:', err);
        });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#180309] via-[#24060E] to-[#120205] text-stone-100 font-sans selection:bg-gold-500/30 selection:text-gold-200 overflow-x-hidden">
      
      {/* 3D Wax-Sealed Opening Envelope Ceremony */}
      <NewWaxEnvelope
        isOpen={showEnvelope}
        onClose={() => setShowEnvelope(false)}
        onMusicStart={handleMusicStart}
      />

      {/* Atmospheric Starry Nocturne Canvas Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Radial Vignettes */}
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-amber-500/10 via-transparent to-transparent opacity-40 blur-3xl" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-imperial-800/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gold-600/10 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Rising Golden Champagne Bokeh & Living Stardust */}
      <ChampagneBokeh />

      {/* Realistic Falling Rose Petals & Golden Leaf Particles */}
      <FloatingPetals />

      {/* Main Content Layer */}
      <div className="relative z-10">
        
        {/* Bespoke Floating Glassmorphic Pill Header */}
        <NewGalaNavbar />

        <main>
          {/* 1. Haute Couture Editorial Hero with bb.jpg & Live Chronometer */}
          <NewGalaHero />

          {/* 2. Luminous Filament Evening Gala Program */}
          <NewGalaProgram />

          {/* 3. Two Houses United Heritage Diptych */}
          <NewGalaHeritage />

          {/* 4. Imperial Venue Concierge: Uthiram Auditorium Showcase, Maps & Calendar */}
          <NewGalaVenue />

          {/* 5. Salon des Moments: 11-Photo Captured Memories & Lightbox */}
          <NewGalaGallery />

          {/* 6. Digital Champagne Toast Wall & Wishes Guestbook */}
          <NewGalaRSVP />
        </main>

        {/* Floating Minimalist Sound Bar ("PLAY MELODY / PAUSE MELODY") */}
        <NewSoundBar
          isPlaying={isPlaying}
          onToggleAudio={handleToggleAudio}
        />

        {/* Gala Footer with Monogram & Re-open Royal Envelope */}
        <NewGalaFooter
          onOpenEnvelope={() => setShowEnvelope(true)}
        />
      </div>
    </div>
  );
}
