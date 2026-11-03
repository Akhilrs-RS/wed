import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Sparkles, MessageSquare, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: 'both',
    guests: '1',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [wishes, setWishes] = useState([]);
  const [reactions, setReactions] = useState({
    1: { '❤️': 24, '✝️': 18, '🥂': 32 },
    2: { '❤️': 45, '✝️': 60, '💐': 28 },
  });

  useEffect(() => {
    try {
      const saved = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('rb_royal_wishes') : null;
      if (saved) {
        setWishes(JSON.parse(saved));
        return;
      }
    } catch (e) {
      console.warn('localStorage read error:', e);
    }

    const initial = [
      {
        id: 1,
        name: "Thomas & Elizabeth Kurian",
        message: "May the Lord bless your covenant with immense joy, peace, and eternal devotion. Hearty congratulations Robin & Benigla!",
        date: "Just now"
      },
      {
        id: 2,
        name: "Rev. Fr. Mathew Varghese",
        message: "Heartfelt prayers and archiepiscopal blessings for Robin and Benigla as you unite as one in Christ.",
        date: "Yesterday"
      }
    ];
    setWishes(initial);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('rb_royal_wishes', JSON.stringify(initial));
      }
    } catch (e) {
      // Ignore in restricted environments
    }
  }, []);

  const handleReaction = (wishId, emoji) => {
    setReactions((prev) => {
      const current = prev[wishId] || {};
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
    if (!formData.name) return;

    // Dual-cannon gold and rose confetti burst
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#96741B', '#4A0E17', '#F9ECC7', '#FAF7F2']
      });

      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#D4AF37', '#FAF7F2']
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#4A0E17', '#D4AF37']
        });
      }, 250);
    } catch (err) {}

    const newWish = {
      id: Date.now(),
      name: formData.name,
      message: formData.message || "Sending our prayers, joy, and warm blessings for a lifetime together!",
      date: "Just now"
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('rb_royal_wishes', JSON.stringify(updated));
      }
    } catch (e) {
      console.warn('localStorage save error:', e);
    }
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-24 md:py-32 relative border-t border-gold-500/30">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-gold-500" />
            <span className="text-[11px] md:text-xs font-cinzel tracking-[0.3em] uppercase text-gold-700 font-semibold">
              HONOR US WITH YOUR PRESENCE
            </span>
            <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-gold-500" />
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl text-imperial-900 font-medium tracking-tight">
            RSVP &amp; Digital Guestbook
          </h2>
          <p className="mt-4 text-stone-700 font-serif italic text-base sm:text-lg">
            “Kindly confirm your attendance and inscribe your warm blessings for the couple.”
          </p>
        </div>

        {/* Embossed Form Container with Glassmorphism */}
        <div className="bg-white/90 backdrop-blur-md border-2 border-gold-500/50 p-8 sm:p-14 shadow-2xl deckled-card-gold relative mb-20">
          {submitted ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 bg-gold-100 text-gold-700 border border-gold-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-cinzel text-3xl sm:text-4xl text-imperial-900 font-medium mb-3">
                Blessings Received, {formData.name}
              </h3>
              <p className="font-serif italic text-stone-700 text-base max-w-md mx-auto mb-8">
                Your presence and heartfelt prayers honor Robin &amp; Benigla deeply. We rejoice in celebrating with you!
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', phone: '', attending: 'both', guests: '1', message: '' });
                }}
                className="font-cinzel text-xs tracking-[0.2em] uppercase text-imperial-800 border-b-2 border-gold-500 hover:text-gold-700 transition-colors pb-1"
              >
                Inscribe Another Blessing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-cinzel text-stone-800 font-semibold mb-2">
                    Your Esteemed Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Mathew Philip"
                    className="w-full bg-[#FAF7F2] border border-gold-500/40 px-4 py-3.5 text-sm focus:border-gold-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-cinzel text-stone-800 font-semibold mb-2">
                    Contact / Mobile
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98470 12345"
                    className="w-full bg-[#FAF7F2] border border-gold-500/40 px-4 py-3.5 text-sm focus:border-gold-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-cinzel text-stone-800 font-semibold mb-2">
                    Your Attendance
                  </label>
                  <select
                    value={formData.attending}
                    onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-gold-500/40 px-4 py-3.5 text-sm focus:border-gold-600 focus:outline-none transition-colors font-sans"
                  >
                    <option value="both">Attending Both: Matrimony &amp; Reception</option>
                    <option value="marriage">Attending Holy Matrimony (21 Dec)</option>
                    <option value="reception">Attending Reception (30 Dec)</option>
                    <option value="regret">Sending Prayerful Blessings from Afar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-cinzel text-stone-800 font-semibold mb-2">
                    Attending Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-gold-500/40 px-4 py-3.5 text-sm focus:border-gold-600 focus:outline-none transition-colors font-sans"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                    <option value="4">4+ Persons (Family)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-cinzel text-stone-800 font-semibold mb-2">
                  A Word of Blessing for Robin &amp; Benigla
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Inscribe a prayer, wish, or blessing..."
                  className="w-full bg-[#FAF7F2] border border-gold-500/40 px-4 py-3.5 text-sm focus:border-gold-600 focus:outline-none transition-colors font-serif italic"
                />
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-imperial-900 to-imperial-800 hover:from-imperial-800 hover:to-gold-700 text-white font-cinzel text-xs tracking-[0.25em] uppercase font-semibold px-10 py-4 transition-all duration-300 shadow-xl border border-gold-500 hover:scale-105 active:scale-95"
                >
                  <Sparkles size={16} className="text-gold-300" />
                  <span>BESTOW YOUR BLESSING &amp; RSVP</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Digital Guestbook Plaque Wall with Interactive Emoji Reactions */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-gold-700 font-cinzel text-xs tracking-[0.25em] uppercase font-semibold mb-8">
            <MessageSquare size={16} />
            <span>WORDS OF BLESSING &amp; CELEBRATION</span>
          </div>

          <div className="space-y-4">
            {wishes.slice(0, 4).map((item) => {
              const currentReactions = reactions[item.id] || {};
              return (
                <div
                  key={item.id}
                  className="bg-white/85 backdrop-blur-md border border-gold-500/35 p-6 rounded-none shadow-md deckled-card relative transition-all duration-300 hover:border-gold-500"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-cinzel text-base text-imperial-900 font-semibold">
                      {item.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gold-700 font-cinzel">
                      {item.date}
                    </span>
                  </div>
                  <p className="font-serif italic text-sm text-stone-700 leading-relaxed mb-4">
                    “{item.message}”
                  </p>

                  {/* Interactive Reaction Pills */}
                  <div className="flex items-center space-x-2 pt-2 border-t border-stone-100 text-xs">
                    {['❤️', '✝️', '🥂', '💐'].map((emoji) => (
                      <button
                        key={emoji}
                        onClick={() => handleReaction(item.id, emoji)}
                        className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full bg-gold-50/70 hover:bg-gold-100/90 border border-gold-500/30 transition-all hover:scale-110 active:scale-95 text-stone-700"
                        title={`React with ${emoji}`}
                      >
                        <span>{emoji}</span>
                        <span className="text-[11px] font-mono text-gold-800 font-medium">
                          {currentReactions[emoji] || 0}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
