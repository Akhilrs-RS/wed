import React, { useState } from 'react';
import { Heart, X, Sparkles, MapPin, Calendar } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import WeddingImage from './common/WeddingImage';
import confetti from 'canvas-confetti';

export default function Celebrations() {
  const { celebrations } = weddingData;
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [likes, setLikes] = useState({ betrothal: 68, haldi: 114, maduramvepp: 92 });
  const [recentlyLiked, setRecentlyLiked] = useState(null);

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    setRecentlyLiked(id);

    try {
      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#94263A', '#FAF7F2']
      });
    } catch (err) {}

    setTimeout(() => setRecentlyLiked(null), 1000);
  };

  return (
    <section id="celebrations" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-[11px] md:text-xs font-cinzel tracking-[0.3em] uppercase text-gold-700 font-semibold">
              BEFORE THE VOWS
            </span>
            <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-gold-500" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl text-imperial-900 font-medium tracking-tight">
            Our Celebrations
          </h2>
          <p className="mt-4 text-stone-700 font-serif italic text-base sm:text-lg">
            “A few cherished milestones leading us to the altar.”
          </p>
        </div>

        {/* Celebrations Grid: Heirloom Keepsake Cards with Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {celebrations.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedEvent(item)}
              className="group cursor-pointer bg-white/85 backdrop-blur-md border border-gold-500/40 p-4 shadow-xl deckled-card hover:border-gold-500 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Frame with Inner Gold Inset */}
              <div>
                <div className="relative h-64 overflow-hidden border border-gold-500/30 bg-stone-100">
                  <WeddingImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    fallbackSrc="/images/bd.jpg"
                  />
                  {/* Subtle Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-imperial-950/40 via-transparent to-transparent pointer-events-none" />

                  {/* Heart Action Badge with Floating Pop */}
                  <button
                    onClick={(e) => handleLike(item.id, e)}
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-imperial-800 text-white flex items-center justify-center shadow-lg hover:bg-gold-600 hover:scale-110 active:scale-95 transition-all border border-gold-400 group/btn"
                    aria-label="Send blessing"
                  >
                    <Heart
                      size={18}
                      className={`transition-all duration-300 ${
                        recentlyLiked === item.id
                          ? 'scale-125 fill-rose-400 text-rose-400'
                          : 'fill-gold-300 text-gold-300 group-hover/btn:scale-110'
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="pt-6 pb-2 text-center">
                  <span className="font-cinzel text-[11px] tracking-[0.25em] uppercase text-gold-700 font-semibold block mb-2">
                    {item.date}
                  </span>
                  <h3 className="font-cinzel text-2xl text-imperial-900 font-medium mb-2 group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-500 font-sans mb-3">
                    {item.location} • {item.address}
                  </p>

                  <p className="font-serif italic text-xs text-stone-600 leading-relaxed px-2">
                    “{item.description}”
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-3 border-t border-gold-500/20 flex items-center justify-between text-[11px] font-cinzel text-stone-500">
                <span className="flex items-center space-x-1.5 text-gold-700 font-medium">
                  <Sparkles size={12} />
                  <span>{likes[item.id]} Blessings</span>
                </span>
                <span className="text-imperial-800 font-semibold group-hover:underline">
                  View Keepsake &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="bg-[#FAF7F2] max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border-2 border-gold-500 deckled-card-gold">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-stone-500 hover:text-imperial-800 p-1"
            >
              <X size={22} />
            </button>

            <div className="h-56 w-full mb-6 overflow-hidden border border-gold-500/30">
              <WeddingImage
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
                fallbackSrc="/images/bd.jpg"
              />
            </div>

            <span className="font-cinzel text-xs tracking-[0.25em] uppercase text-gold-700 font-semibold">
              {selectedEvent.date}
            </span>
            <h3 className="font-cinzel text-3xl text-imperial-900 font-medium mt-1 mb-2">
              {selectedEvent.title}
            </h3>
            <p className="text-xs text-stone-500 mb-4 font-sans">
              {selectedEvent.location} • {selectedEvent.address}
            </p>
            <p className="font-serif italic text-stone-700 text-sm leading-relaxed mb-6">
              “{selectedEvent.description}”
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-6 py-2 bg-imperial-800 text-white font-cinzel text-xs tracking-[0.2em] uppercase hover:bg-gold-700 transition-colors border border-gold-400"
              >
                Close Keepsake
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
