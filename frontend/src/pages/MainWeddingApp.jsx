/*
 * NOTE: MainWeddingApp (Church Wedding Page) is currently commented out as requested.
 * The website currently defaults directly to ReceptionApp (Grand Gala Reception).
 * All code below is completely preserved and ready to be un-commented whenever needed.
 */

/*
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import FamilyBlessings from '../components/FamilyBlessings';
import Countdown from '../components/Countdown';
import TheDay from '../components/TheDay';
import RSVP from '../components/RSVP';
import AudioPlayer from '../components/AudioPlayer';
import Footer from '../components/Footer';
import PetalCanvas from '../components/common/PetalCanvas';

export default function MainWeddingApp({ navigate }) {
  return (
    <div className="relative min-h-screen text-stone-900 font-sans selection:bg-gold-500/20 selection:text-imperial-900 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/images/bd.jpg"
          alt="Wedding Backdrop"
          className="w-full h-full object-cover object-[center_28%] brightness-[0.95] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-[#FAF7F2]/35 pointer-events-none" />
      </div>

      <PetalCanvas />

      <div className="relative z-10">
        <Navbar navigate={navigate} />

        <main>
          <Hero />
          <OurStory />
          <FamilyBlessings />
          <Countdown />
          <TheDay />
          <RSVP />
        </main>

        <AudioPlayer />
        <Footer navigate={navigate} />
      </div>
    </div>
  );
}
*/

export default function MainWeddingApp() {
  return null;
}


