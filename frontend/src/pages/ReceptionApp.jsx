import React, { useState, useRef, useEffect } from 'react';
import ReceptionNavbar from '../components/reception/ReceptionNavbar';
import ReceptionHero from '../components/reception/ReceptionHero';
import OurStory from '../components/OurStory';
import ReceptionParents from '../components/reception/ReceptionParents';
import ReceptionCountdown from '../components/reception/ReceptionCountdown';
import ReceptionVenue from '../components/reception/ReceptionVenue';
import ReceptionTimeline from '../components/reception/ReceptionTimeline';
import ReceptionGallery from '../components/reception/ReceptionGallery';
import ReceptionRSVP from '../components/reception/ReceptionRSVP';
import ReceptionFooter from '../components/reception/ReceptionFooter';
import WaxSealEnvelope from '../components/reception/WaxSealEnvelope';
import VelvetMusicButton from '../components/reception/VelvetMusicButton';
import FloatingPetals from '../components/reception/FloatingPetals';
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
    <div className="relative min-h-screen text-stone-900 font-sans selection:bg-gold-500/20 selection:text-imperial-900 overflow-x-hidden">
      {/* 3D Wax-Sealed Opening Envelope Ceremony */}
      <WaxSealEnvelope
        isOpen={showEnvelope}
        onClose={() => setShowEnvelope(false)}
        onMusicStart={handleMusicStart}
      />

      {/* Fixed Atmospheric Background (bd.jpg) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/images/bd.jpg"
          alt="Wedding Backdrop"
          className="w-full h-full object-cover object-[center_28%] brightness-[0.95] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[#FAF7F2]/35 pointer-events-none" />
      </div>

      {/* Realistic Falling Petals & Golden Leaf Engine */}
      <FloatingPetals />

      {/* Main Content Layer */}
      <div className="relative z-10">
        {/* Reception Navigation */}
        <ReceptionNavbar navigate={navigate} />

        <main>
          {/* Reception Hero - Dec 30, 2026 at Uthiram Auditorium */}
          <ReceptionHero />

          {/* Couple's Story & Portrait (s.jpg) */}
          <OurStory />

          {/* Beloved Families Lineage (Punniyam & Kottarakara) */}
          <ReceptionParents />

          {/* Live Reception Countdown to 30 Dec 2026, 5:30 PM */}
          <ReceptionCountdown />

          {/* Screenshot-Matched Reception Venue Card (Uthiram Auditorium) */}
          <ReceptionVenue />

          {/* Evening Programme / Schedule of Events (4 Stages) */}
          <ReceptionTimeline />

          {/* 11-Photo Captured Moments Gallery & Modal Lightbox */}
          <ReceptionGallery />

          {/* Dedicated Reception RSVP & Wishes Guestbook */}
          <ReceptionRSVP />
        </main>

        {/* Screenshot-Matched Floating Velvet Music Button ("PLAY MELODY / Tap to Listen") */}
        <VelvetMusicButton
          isPlaying={isPlaying}
          onToggleAudio={handleToggleAudio}
        />

        {/* Reception Footer with Re-open Royal Envelope */}
        <ReceptionFooter
          navigate={navigate}
          onOpenEnvelope={() => setShowEnvelope(true)}
        />
      </div>
    </div>
  );
}
