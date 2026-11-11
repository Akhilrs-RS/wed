import React, { useState, useEffect } from 'react';
import { Send, Heart, GlassWater, MessageCircleHeart } from 'lucide-react';
import confetti from 'canvas-confetti';
import ScrollReveal from '../common/ScrollReveal';

export default function NewGalaRSVP() {
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Friend');
  const [message, setMessage] = useState('');
  const [toastCount, setToastCount] = useState(142);
  const [hasToasted, setHasToasted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [wishes, setWishes] = useState([]);
  const [reactions, setReactions] = useState({
    1: { '❤️': 45, '🥂': 32, '💐': 28, '🎉': 38 },
    2: { '❤️': 60, '🥂': 48, '💐': 35, '🎉': 52 },
  });

  // Load and persist toast count & wishes from localStorage
  useEffect(() => {
    try {
      const savedCount = localStorage.getItem('rb_gala_toasts');
      if (savedCount) setToastCount(parseInt(savedCount, 10));

      const savedWishes = localStorage.getItem('rb_gala_wishes');
      if (savedWishes) {
        setWishes(JSON.parse(savedWishes));
      } else {
        setWishes([
          {
            id: 1,
            name: 'Kavitha & Anand',
            relation: 'Family',
            message: 'Heartiest congratulations to Robin and Benigla! Wishing you a lifetime of laughter, harmony, and endless blessings.',
            date: 'DEC 2026'
          },
          {
            id: 2,
            name: 'Dr. Mathews Varghese',
            relation: 'Well-wisher',
            message: 'May your union be blessed with peace and joy as you begin this majestic chapter together in Kanyakumari and Kerala.',
            date: 'DEC 2026'
          }
        ]);
      }
    } catch (e) {
      console.log('LocalStorage load error:', e);
    }
  }, []);

  const handleRaiseToast = () => {
    const newCount = toastCount + 1;
    setToastCount(newCount);
    setHasToasted(true);
    try {
      localStorage.setItem('rb_gala_toasts', String(newCount));
      confetti({
        particleCount: 85,
        spread: 100,
        origin: { y: 0.75 },
        colors: ['#D4AF37', '#FAF6F0', '#E2C785', '#E11D48', '#FFD700']
      });
    } catch (e) {
      console.log('Toast error:', e);
    }
    setTimeout(() => setHasToasted(false), 3000);
  };

  const handleReaction = (wishId, emoji) => {
    setReactions((prev) => {
      const current = prev[wishId] || { '❤️': 0, '🥂': 0, '💐': 0, '🎉': 0 };
      return {
        ...prev,
        [wishId]: {
          ...current,
          [emoji]: (current[emoji] || 0) + 1,
        },
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      relation: relation,
      message: message.trim(),
      date: 'JUST NOW'
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem('rb_gala_wishes', JSON.stringify(updated));
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#FAF6F0', '#E2C785']
      });
    } catch (err) {
      console.log('Save wish error:', err);
    }

    setName('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="gala-rsvp" className="py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-400 font-semibold mb-3">
              <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-gold-400" />
              <span>GUESTBOOK &amp; WISHES</span>
              <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-gold-400" />
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl text-white font-medium tracking-tight">
              Raise a Toast &amp; Send Love
            </h2>
            <p className="mt-3 text-stone-300 font-serif italic text-base sm:text-lg max-w-lg mx-auto">
              “Leave your heartfelt greetings and virtual champagne toast for Robin &amp; Benigla.”
            </p>
          </div>
        </ScrollReveal>

        {/* Live Champagne Toast Bar */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#28060F] via-[#1F040A] to-[#28060F] border border-gold-400/50 shadow-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1">
              <span className="font-cinzel text-xs uppercase tracking-widest text-gold-400 font-bold block">
                CELEBRATION TOAST TALLY
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl text-white font-medium">
                <span className="text-gold-300 font-bold">{toastCount}</span> Virtual Toasts Raised
              </h3>
              <p className="text-xs text-stone-300 font-sans">
                Tap the button to raise a celebratory champagne glass for the couple!
              </p>
            </div>

            <button
              onClick={handleRaiseToast}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-imperial-950 font-cinzel text-xs tracking-wider uppercase font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-2 shrink-0 cursor-pointer gold-sheen-sweep"
            >
              <GlassWater size={17} />
              <span>{hasToasted ? 'TOAST RAISED! 🥂' : 'RAISE A TOAST 🥂'}</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Grid: Left Message Form + Right Living Wishes Wall */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ===================================================================
              LEFT COLUMN: WISH FORM
             =================================================================== */}
          <div className="lg:col-span-5">
            <ScrollReveal animation="fade-left">
              <div className="p-6 sm:p-8 rounded-3xl bg-[#1C0308]/90 border border-gold-400/40 shadow-xl backdrop-blur-md">
                <h3 className="font-cinzel text-xl text-white font-medium mb-1">
                  Send Your Blessings
                </h3>
                <p className="text-xs text-stone-400 font-sans mb-6">
                  Your message will appear instantly on the couple's celebration wall.
                </p>

                {submitted && (
                  <div className="mb-4 p-3 rounded-xl bg-gold-500/20 border border-gold-400/50 text-gold-200 text-xs font-cinzel text-center">
                    Thank you! Your warm wishes have been sent to Robin &amp; Benigla ❤️
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-[10px] font-cinzel uppercase tracking-wider text-gold-300 mb-1.5 font-semibold">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Samuel &amp; Family"
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-gold-400/30 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-gold-300 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-cinzel uppercase tracking-wider text-gold-300 mb-1.5 font-semibold">
                      RELATION TO THE COUPLE
                    </label>
                    <select
                      value={relation}
                      onChange={(e) => setRelation(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-gold-400/30 text-white text-xs focus:outline-none focus:border-gold-300 font-sans"
                    >
                      <option value="Friend" className="bg-[#1C0308]">Friend</option>
                      <option value="Family" className="bg-[#1C0308]">Family / Relative</option>
                      <option value="Colleague" className="bg-[#1C0308]">Colleague</option>
                      <option value="Well-wisher" className="bg-[#1C0308]">Well-wisher</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-cinzel uppercase tracking-wider text-gold-300 mb-1.5 font-semibold">
                      BLESSINGS &amp; GREETINGS *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your wishes for Robin and Benigla..."
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-gold-400/30 text-white placeholder-stone-500 text-xs focus:outline-none focus:border-gold-300 font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-imperial-950 font-cinzel text-xs tracking-wider uppercase font-bold shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 cursor-pointer gold-sheen-sweep"
                  >
                    <Send size={14} />
                    <span>POST BLESSING</span>
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: LIVING WISHES WALL
             =================================================================== */}
          <div className="lg:col-span-7 space-y-4">
            <ScrollReveal animation="fade-right">
              <div className="space-y-4 max-h-[560px] overflow-y-auto pr-1">
                {wishes.map((item) => {
                  const currentReactions = reactions[item.id] || { '❤️': 0, '🥂': 0, '💐': 0, '🎉': 0 };

                  return (
                    <div
                      key={item.id}
                      className="p-5 sm:p-6 rounded-2xl bg-[#1C0308]/75 border border-gold-400/30 hover:border-gold-300/60 shadow-md backdrop-blur-sm transition-all duration-300 text-left"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-cinzel text-sm sm:text-base text-white font-semibold">
                            {item.name}
                          </h4>
                          <span className="px-2 py-0.5 rounded-full text-[8.5px] font-cinzel uppercase tracking-wider bg-gold-500/15 text-gold-300 border border-gold-400/30">
                            {item.relation}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono uppercase tracking-wider text-stone-400">
                          {item.date}
                        </span>
                      </div>

                      <p className="font-serif italic text-stone-200 text-xs sm:text-sm leading-relaxed mb-4">
                        “{item.message}”
                      </p>

                      {/* Interactive Reaction Pills */}
                      <div className="flex items-center space-x-2 pt-2 border-t border-gold-500/15 text-xs">
                        {['❤️', '🥂', '💐', '🎉'].map((emoji) => (
                          <button
                            key={emoji}
                            onClick={() => handleReaction(item.id, emoji)}
                            className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/5 hover:bg-gold-500/20 border border-gold-400/25 transition-all hover:scale-110 active:scale-95 text-stone-200 cursor-pointer"
                            title={`React with ${emoji}`}
                          >
                            <span>{emoji}</span>
                            <span className="text-[10px] font-mono text-gold-300 font-medium">
                              {currentReactions[emoji] || 0}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

