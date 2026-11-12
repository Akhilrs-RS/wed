import React, { useState } from 'react';
import { Scroll, ChevronDown, ChevronUp, Heart, Check } from 'lucide-react';
import { weddingData } from '../../../data/weddingData';

export default function RoyalScroll() {
  const [isUnrolled, setIsUnrolled] = useState(false);
  const { couple, receptionSite } = weddingData;

  const toggleScroll = () => {
    setIsUnrolled((prev) => !prev);
  };

  return (
    <div className="w-full max-w-2xl mx-auto select-none">
      
      {/* Scroll Controls Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleScroll}
          className="group relative px-7 py-3 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-imperial-950 font-cinzel text-xs tracking-wider uppercase font-bold shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-2.5 cursor-pointer gold-sheen-sweep"
        >
          <Scroll size={16} />
          <span>{isUnrolled ? 'ROLL UP PROCLAMATION' : 'UNROLL ROYAL SCROLL'}</span>
          {isUnrolled ? <ChevronUp size={16} /> : <ChevronDown size={16} className="animate-bounce" />}
        </button>
      </div>

      {/* Royal Scroll Physical Apparatus */}
      <div className="relative flex flex-col items-center">
        
        {/* ===================================================================
            TOP GILDED BRASS DOWEL & FINIALS
           =================================================================== */}
        <div className="relative z-30 w-full max-w-[420px] sm:max-w-[540px] flex items-center justify-between">
          {/* Left Turned Finial */}
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#FFE79A] via-[#D4AF37] to-[#8C6D1F] border border-[#523B06] shadow-xl flex items-center justify-center shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#523B06]" />
          </div>

          {/* Central Cylindrical Roller */}
          <div className="flex-1 h-5 sm:h-6 mx-[-4px] rounded-full bg-gradient-to-b from-[#FFF2B8] via-[#D4AF37] to-[#7A5B15] shadow-2xl border-y border-[#523B06] relative overflow-hidden">
            <div className="absolute inset-y-0 left-10 right-10 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>

          {/* Right Turned Finial */}
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#FFE79A] via-[#D4AF37] to-[#8C6D1F] border border-[#523B06] shadow-xl flex items-center justify-center shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#523B06]" />
          </div>
        </div>

        {/* ===================================================================
            PARCHMENT CANVAS UNROLLING CONTAINER
           =================================================================== */}
        <div
          className={`relative z-20 w-[92%] sm:w-[88%] max-w-[500px] transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${
            isUnrolled ? 'max-h-[850px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
          }`}
        >
          {/* Authentic Deckled Parchment Texture */}
          <div
            className="relative p-7 sm:p-10 rounded-sm border-x-4 border-gold-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.85)] text-center text-[#2A1E14]"
            style={{
              background: 'linear-gradient(180deg, #FDF9EE 0%, #F5ECCB 35%, #F0E3B6 70%, #F7EECD 100%)',
              boxShadow: 'inset 0 0 35px rgba(168, 126, 42, 0.35), 0 15px 50px rgba(0,0,0,0.9)'
            }}
          >
            {/* Top Ribbon & Wax Stamp Emblem */}
            <div className="flex flex-col items-center justify-center mb-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#B32438] via-[#7E1222] to-[#450711] border-2 border-gold-400 shadow-xl flex items-center justify-center mb-2">
                <span className="font-cinzel text-base font-bold text-gold-200 drop-shadow">
                  R &amp; B
                </span>
              </div>
              <span className="font-cinzel text-[10px] tracking-[0.35em] uppercase text-[#7A5B15] font-bold">
                ROYAL NUPTIAL PROCLAMATION
              </span>
            </div>

            {/* Proclamation Body */}
            <div className="space-y-4 font-serif text-[#3D2C1D]">
              <p className="text-xs sm:text-sm tracking-widest uppercase font-cinzel text-[#8A671B] font-semibold">
                To All Beloved Family, Friends &amp; Well-Wishers
              </p>

              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#22160C] font-semibold">
                Robin Varghese
                <span className="font-script text-2xl sm:text-3xl text-[#9A7017] block sm:inline sm:mx-2">&amp;</span>
                Benigla J L
              </h3>

              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#9A7017] to-transparent mx-auto my-3" />

              <p className="text-xs sm:text-sm leading-relaxed italic">
                “Be it known with joyous thanksgiving that with the blessings of our beloved parents and the guidance of the Almighty, we cordially invite you to share in our Wedding Reception celebration.”
              </p>

              {/* Date Callout in Calligraphy */}
              <div className="py-3 px-4 rounded-xl bg-[#E8D9A8]/50 border border-[#C5A34E]/60 inline-block mx-auto">
                <p className="font-cinzel text-sm sm:text-base font-bold text-[#422B0A]">
                  Wednesday, 30 December 2026
                </p>
                <p className="text-xs font-sans text-[#6B4B18] font-semibold">
                  At 5:30 in the Evening IST
                </p>
                <p className="text-[11px] font-sans text-[#7A5722] mt-0.5">
                  Uthiram Auditorium • Punniyam, Kanyakumari
                </p>
              </div>

              {/* Parents' Honour */}
              <div className="pt-2 text-[11px] text-[#5C4123] font-sans space-y-1">
                <p>
                  <span className="font-semibold text-[#3D280E]">Bride's Parents:</span> Mr. Jegal Prasad. M &amp; Mrs. Letha Pushpam. V (Punniyam)
                </p>
                <p>
                  <span className="font-semibold text-[#3D280E]">Groom's Parents:</span> Mr. Gee Varghese &amp; Mrs. Mariyamma (Kerala)
                </p>
              </div>

              {/* Scripture Verse */}
              <div className="pt-3 border-t border-[#C5A34E]/40 text-xs italic text-[#7A551E]">
                “I have found the one whom my soul loves.”
                <span className="block font-cinzel text-[9.5px] uppercase tracking-wider text-[#9A7017] mt-0.5 font-bold">
                  Song of Solomon 3:4
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================================
            BOTTOM GILDED BRASS DOWEL & FINIALS
           =================================================================== */}
        <div className="relative z-30 w-full max-w-[420px] sm:max-w-[540px] flex items-center justify-between">
          {/* Left Turned Finial */}
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#FFE79A] via-[#D4AF37] to-[#8C6D1F] border border-[#523B06] shadow-xl flex items-center justify-center shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#523B06]" />
          </div>

          {/* Central Cylindrical Roller */}
          <div className="flex-1 h-5 sm:h-6 mx-[-4px] rounded-full bg-gradient-to-b from-[#FFF2B8] via-[#D4AF37] to-[#7A5B15] shadow-2xl border-y border-[#523B06] relative overflow-hidden">
            <div className="absolute inset-y-0 left-10 right-10 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </div>

          {/* Right Turned Finial */}
          <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#FFE79A] via-[#D4AF37] to-[#8C6D1F] border border-[#523B06] shadow-xl flex items-center justify-center shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#523B06]" />
          </div>
        </div>
      </div>
    </div>
  );
}
