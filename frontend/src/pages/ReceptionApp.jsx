import React from 'react';
import ReceptionNavbar from '../components/reception/ReceptionNavbar';
import ReceptionHero from '../components/reception/ReceptionHero';
import OurStory from '../components/OurStory';
import ReceptionParents from '../components/reception/ReceptionParents';
import ReceptionCountdown from '../components/reception/ReceptionCountdown';
import ReceptionVenue from '../components/reception/ReceptionVenue';
import ReceptionTimeline from '../components/reception/ReceptionTimeline';
import ReceptionRSVP from '../components/reception/ReceptionRSVP';
import ReceptionFooter from '../components/reception/ReceptionFooter';
import AudioPlayer from '../components/AudioPlayer';
import PetalCanvas from '../components/common/PetalCanvas';

export default function ReceptionApp({ navigate }) {
  return (
    <div className="relative min-h-screen text-stone-900 font-sans selection:bg-gold-500/20 selection:text-imperial-900 overflow-x-hidden">
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

      {/* Interactive Floating Petals & Gold Dust Canvas */}
      <PetalCanvas />

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

          {/* Evening Programme / Schedule of Events */}
          <ReceptionTimeline />

          {/* Dedicated Reception RSVP & Wishes Guestbook */}
          <ReceptionRSVP />
        </main>

        {/* Floating Audio Brooch */}
        <AudioPlayer />

        {/* Reception Footer */}
        <ReceptionFooter navigate={navigate} />
      </div>
    </div>
  );
}
