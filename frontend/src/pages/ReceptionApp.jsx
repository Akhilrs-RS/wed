import React, { useState, useRef, useEffect } from 'react';
import V2Navbar from '../components/reception/v2/V2Navbar';
import V2Hero from '../components/reception/v2/V2Hero';
import V2Program from '../components/reception/v2/V2Program';
import V2Heritage from '../components/reception/v2/V2Heritage';
import V2Venue from '../components/reception/v2/V2Venue';
import V2Gallery from '../components/reception/v2/V2Gallery';
import V2RSVP from '../components/reception/v2/V2RSVP';
import V2Footer from '../components/reception/v2/V2Footer';
import V2SoundBar from '../components/reception/v2/V2SoundBar';
import V2InvitationModal from '../components/reception/v2/V2InvitationModal';
import FloatingPetals from '../components/reception/FloatingPetals';
import ChampagneBokeh from '../components/reception/ChampagneBokeh';
import { weddingData } from '../data/weddingData';

export default function ReceptionApp() {
  const [showInvitationModal, setShowInvitationModal] = useState(false);
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
    <div className="relative min-h-screen bg-gradient-to-b from-[#08080E] via-[#101019] to-[#06060A] text-stone-100 font-sans selection:bg-gold-500/30 selection:text-gold-200 overflow-x-hidden">
      
      {/* Formal Invitation Card Suite Modal */}
      <V2InvitationModal
        isOpen={showInvitationModal}
        onClose={() => setShowInvitationModal(false)}
      />

      {/* Atmospheric Starlight Canvas Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[650px] bg-gradient-to-b from-amber-500/10 via-transparent to-transparent opacity-30 blur-3xl" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-3xl opacity-25" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-3xl opacity-25" />
      </div>

      {/* Rising Golden Champagne Bokeh */}
      <ChampagneBokeh />

      {/* Realistic Falling Rose Petals & Golden Leaf Particles */}
      <FloatingPetals />

      {/* Main Content Layer */}
      <div className="relative z-10">
        
        {/* Floating Minimalist Island Navigation */}
        <V2Navbar onOpenInvitation={() => setShowInvitationModal(true)} />

        <main>
          {/* 1. Haute Couture Editorial Split Hero with bb.jpg & Live Chronometer */}
          <V2Hero />

          {/* 2. 4-Stage Horizontal Evening Program Cards */}
          <V2Program />

          {/* 3. Two Houses United Heritage Diptych (Punniyam & Kerala) */}
          <V2Heritage />

          {/* 4. Panoramic Pavilion Showcase: Uthiram Auditorium with GPS & Calendar */}
          <V2Venue />

          {/* 5. Salon des Moments: 11-Photo Captured Memories & Lightbox */}
          <V2Gallery />

          {/* 6. Live Champagne Toast Bar & Wishes Guestbook */}
          <V2RSVP />
        </main>

        {/* Ultra-Sleek Floating Audio Widget ("PLAY MELODY / PAUSE MELODY") */}
        <V2SoundBar
          isPlaying={isPlaying}
          onToggleAudio={handleToggleAudio}
        />

        {/* Gala Footer with Monogram & Formal Invitation Trigger */}
        <V2Footer
          onOpenInvitation={() => setShowInvitationModal(true)}
        />
      </div>
    </div>
  );
}
