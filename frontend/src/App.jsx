import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import FamilyBlessings from './components/FamilyBlessings';
import Countdown from './components/Countdown';
import TheDay from './components/TheDay';
import RSVP from './components/RSVP';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';
import PetalCanvas from './components/common/PetalCanvas';

export default function App() {
  return (
    <div className="relative min-h-screen text-stone-900 font-sans selection:bg-gold-500/20 selection:text-imperial-900 overflow-x-hidden">
      {/* =========================================================================
          HIGH VISIBILITY FIXED BACKGROUND (bd.jpg) WITH FACE-ALIGNED POSITIONING
         ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/images/bd.jpg"
          alt="Wedding Backdrop"
          className="w-full h-full object-cover object-[center_28%] brightness-[0.95] contrast-[1.05]"
        />
        {/* Soft Transparent Vignette Overlay: lets bd.jpg show through with crisp readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[#FAF7F2]/35 pointer-events-none" />
      </div>

      {/* Interactive Floating Petals & Gold Dust Canvas */}
      <PetalCanvas />

      {/* Main Content Layer */}
      <div className="relative z-10">
        {/* Sticky Header / Monogram Navigation */}
        <Navbar />

        <main>
          {/* Hero Section with Prominent bd.jpg Arch Showcase */}
          <Hero />

          {/* Story & Bride-Groom Portrait (bb.jpg) */}
          <OurStory />

          {/* Dedicated Parents & Family Blessings Section */}
          <FamilyBlessings />

          {/* Live Wedding Day Countdown */}
          <Countdown />

          {/* The Day: Church Holy Matrimony & Reception Auditorium */}
          <TheDay />

          {/* Interactive RSVP & Blessings Guestbook */}
          <RSVP />
        </main>

        {/* Floating Audio Player */}
        <AudioPlayer />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
