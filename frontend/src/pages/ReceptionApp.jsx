import React, { useState, useRef, useEffect } from 'react';
import GalaNavbar from '../components/reception/GalaNavbar';
import GalaHero from '../components/reception/GalaHero';
import GalaProgram from '../components/reception/GalaProgram';
import GalaHeritage from '../components/reception/GalaHeritage';
import GalaVenue from '../components/reception/GalaVenue';
import GalaGallery from '../components/reception/GalaGallery';
import GalaRSVP from '../components/reception/GalaRSVP';
import GalaFooter from '../components/reception/GalaFooter';
import WaxSealEnvelope from '../components/reception/WaxSealEnvelope';
import VelvetMusicButton from '../components/reception/VelvetMusicButton';
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
    <div className="relative min-h-screen bg-gradient-to-b from-[#180307] via-[#24060E] to-[#120205] text-stone-100 font-sans selection:bg-gold-500/30 selection:text-gold-200 overflow-x-hidden">
      
      {/* 3D Wax-Sealed Opening Envelope Ceremony */}
      <WaxSealEnvelope
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
        <GalaNavbar navigate={navigate} />

        <main>
          {/* 1. Starlight Gala Hero with Integrated Live Countdown */}
          <GalaHero />

          {/* 2. 4-Stage Illuminated Evening Gala Program */}
          <GalaProgram />

          {/* 3. Nuptial Heritage: Kottarakara meets Punniyam (Zero Duplicate Components) */}
          <GalaHeritage />

          {/* 4. The Grand Pavilion: Uthiram Auditorium Showcase */}
          <GalaVenue />

          {/* 5. 11-Photo Captured Moments Gallery & Modal Lightbox */}
          <GalaGallery />

          {/* 6. Digital Champagne Toast Wall & Reception RSVP */}
          <GalaRSVP />
        </main>

        {/* Floating Velvet Music Brooch ("PLAY MELODY / Tap to Listen") */}
        <VelvetMusicButton
          isPlaying={isPlaying}
          onToggleAudio={handleToggleAudio}
        />

        {/* Gala Footer with Re-open Royal Envelope */}
        <GalaFooter
          navigate={navigate}
          onOpenEnvelope={() => setShowEnvelope(true)}
        />
      </div>
    </div>
  );
}
