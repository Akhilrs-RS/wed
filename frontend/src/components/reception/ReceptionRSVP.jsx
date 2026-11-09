import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Sparkles, MessageSquare, Heart } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

export default function ReceptionRSVP() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: 'attending',
    guests: '1',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [wishes, setWishes] = useState([]);
  const [reactions, setReactions] = useState({
    1: { '❤️': 38, '✝️': 24, '🥂': 42 },
    2: { '❤️': 56, '✝️': 72, '💐': 35 },
  });

  useEffect(() => {
    try {
      const saved = typeof window !== 'undefined' && window.localStorage ? localStorage.getItem('rb_reception_wishes') : null;
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
        name: "Dr. Abraham & Susan Mathew",
        message: "Eagerly waiting to celebrate your wedding reception at Uthiram Auditorium. Heartiest congratulations dear Robin & Benigla!",
        date: "Just now"
      },
      {
        id: 2,
        name: "Justin & Priya Varghese",
        message: "Wishing Robin and Benigla a lifetime of joyful companionship, divine blessings, and endless love. See you on the 30th!",
        date: "Yesterday"
      }
    ];
    setWishes(initial);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('rb_reception_wishes', JSON.stringify(initial));
      }
    } catch (e) {}
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

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#96741B', '#4A0E17', '#F9ECC7', '#FAF7F2']
      });
    } catch (e) {}

    const newWish = {
      id: Date.now(),
      name: formData.name,
      message: formData.message || "Looking forward to celebrating with you at Uthiram Auditorium! Hearty congratulations!",
      date: "Just now"
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('rb_reception_wishes', JSON.stringify(updated));
      }
    } catch (e) {}
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-24 md:py-32 relative border-t border-gold-500/30 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <ScrollReveal animation="fade-up" duration={700}>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-gold-500" />
              <span className="text-[11px] md:text-xs font-cinzel tracking-[0.3em] uppercase text-gold-700 font-semibold">
                RECEPTION ATTENDANCE
              </span>
              <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-gold-500" />
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl text-imperial-900 font-medium tracking-tight">
              RSVP &amp; Digital Guestbook
            </h2>
            <p className="mt-4 text-stone-700 font-serif italic text-base sm:text-lg">
              “Kindly confirm your attendance for the Wedding Reception at Uthiram Auditorium.”
            </p>
          </div>
        </ScrollReveal>

        {/* Embossed Form Container */}
        <ScrollReveal animation="fade-up" delay={200} duration={800}>
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
                  Your presence and blessings honor Robin &amp; Benigla deeply. We look forward to welcoming you at Uthiram Auditorium!
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', attending: 'attending', guests: '1', message: '' });
                  }}
                  className="font-cinzel text-xs tracking-[0.2em] uppercase text-imperial-800 border-b-2 border-gold-500 hover:text-gold-700 transition-colors pb-1"
                >
                  Send Another Blessing
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-cinzel tracking-wider uppercase text-stone-700 font-semibold mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Samuel George"
                      className="w-full bg-[#FAF7F2] border border-gold-500/40 px-4 py-3 text-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-500 rounded-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel tracking-wider uppercase text-stone-700 font-semibold mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FAF7F2] border border-gold-500/40 px-4 py-3 text-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-500 rounded-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-cinzel tracking-wider uppercase text-stone-700 font-semibold mb-2">
                      Will You Attend?
                    </label>
                    <select
                      value={formData.attending}
                      onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-gold-500/40 px-4 py-3 text-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-500 rounded-none transition-colors"
                    >
                      <option value="attending">Joyfully Attending Reception Banquet (Uthiram Auditorium)</option>
                      <option value="declined">Sending Prayers &amp; Blessings from Afar</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-cinzel tracking-wider uppercase text-stone-700 font-semibold mb-2">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-gold-500/40 px-4 py-3 text-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-500 rounded-none transition-colors"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4+">Family / 4+ Persons</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-cinzel tracking-wider uppercase text-stone-700 font-semibold mb-2">
                    Inscribe Your Warm Blessing &amp; Wishes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Wishing Robin and Benigla boundless joy, peace, and grace as you start your new journey together..."
                    className="w-full bg-[#FAF7F2] border border-gold-500/40 px-4 py-3 text-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-500 rounded-none transition-colors resize-none"
                  />
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-imperial-900 to-imperial-800 hover:from-imperial-800 hover:to-gold-700 text-white font-cinzel text-xs tracking-[0.25em] uppercase font-semibold px-10 py-4 transition-all duration-300 shadow-xl border border-gold-500 hover:scale-105 active:scale-95"
                  >
                    <Sparkles size={16} className="text-gold-300" />
                    <span>CONFIRM RECEPTION RSVP</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>

        {/* Digital Guestbook Plaque Wall */}
        <ScrollReveal animation="fade-up" delay={300} duration={800}>
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
        </ScrollReveal>
      </div>
    </section>
  );
}
