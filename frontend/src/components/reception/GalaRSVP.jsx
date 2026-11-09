import React, { useState } from 'react';
import { Send, Heart, Wine, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import confetti from 'canvas-confetti';

export default function GalaRSVP() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    attending: 'yes',
    guests: '1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [wishes, setWishes] = useState([
    {
      name: 'Thomas & Elizabeth',
      city: 'Kollam',
      text: 'Heartiest congratulations Robin & Benigla! Eagerly awaiting the grand reception gala in Kanyakumari. God bless you abundantly!'
    },
    {
      name: 'Dr. Samuel Joseph & Family',
      city: 'Nagercoil',
      text: 'Wishing you both a lifetime of happiness, peace, and harmony. Looking forward to celebrating this festive evening with you!'
    },
    {
      name: 'Priya & Ashwin',
      city: 'Trivandrum',
      text: 'May your new journey together be filled with boundless joy, laughter, and blessings. Cheers to the newlyweds!'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;

    // Trigger champagne gold celebration confetti
    try {
      confetti({
        particleCount: 90,
        spread: 85,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#9E2A2B', '#FAF6F0', '#F5D061', '#E6C687']
      });
    } catch (err) {}

    if (formData.message) {
      setWishes((prev) => [
        {
          name: formData.name,
          city: 'Esteemed Guest',
          text: formData.message
        },
        ...prev
      ]);
    }

    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-24 sm:py-32 relative text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-down" duration={700}>
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center space-x-3 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-cinzel text-gold-300 font-semibold mb-3">
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-gold-400" />
              <span>CONFIRMATION &amp; BLESSINGS</span>
              <span className="w-10 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-gold-400" />
            </div>

            <h2 className="font-cinzel text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Reception RSVP &amp; Toast Wall
            </h2>
            <p className="font-pinyon text-2xl sm:text-3xl text-gold-300/90 mt-2">
              Raise a Champagne Toast for Robin &amp; Benigla
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: RSVP Form */}
          <div className="lg:col-span-6">
            <ScrollReveal animation="fade-right" duration={800}>
              <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#24060E]/95 to-[#180308]/95 border-2 border-gold-400/50 shadow-2xl backdrop-blur-md">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-imperial-950 border-2 border-gold-400 flex items-center justify-center mx-auto shadow-lg">
                      <CheckCircle2 size={32} className="text-gold-300" />
                    </div>
                    <h3 className="font-cinzel text-2xl font-medium text-white">
                      Toast Received With Joy!
                    </h3>
                    <p className="font-serif italic text-gold-200 text-sm max-w-sm mx-auto">
                      “Thank you {formData.name} for confirming your gracious presence. We warmly await celebrating this unforgettable evening with you!”
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', attending: 'yes', guests: '1', message: '' });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-full bg-imperial-900 border border-gold-400 text-gold-200 text-xs font-cinzel tracking-wider uppercase font-semibold"
                    >
                      SUBMIT ANOTHER WISH
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs">
                    <div>
                      <label className="font-cinzel text-[10px] tracking-widest uppercase text-gold-300 block mb-1">
                        YOUR FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Thomas Kurian"
                        className="w-full px-4 py-3 rounded-xl bg-imperial-950/80 border border-gold-500/40 text-white placeholder-stone-500 focus:outline-none focus:border-gold-400 transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-cinzel text-[10px] tracking-widest uppercase text-gold-300 block mb-1">
                          PHONE / WHATSAPP
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-imperial-950/80 border border-gold-500/40 text-white placeholder-stone-500 focus:outline-none focus:border-gold-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="font-cinzel text-[10px] tracking-widest uppercase text-gold-300 block mb-1">
                          TOTAL ATTENDING
                        </label>
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-imperial-950/80 border border-gold-500/40 text-white focus:outline-none focus:border-gold-400 transition-colors"
                        >
                          <option value="1" className="bg-imperial-950">1 Guest</option>
                          <option value="2" className="bg-imperial-950">2 Guests (Couple)</option>
                          <option value="3" className="bg-imperial-950">3 Guests</option>
                          <option value="4" className="bg-imperial-950">4 Guests (Family)</option>
                          <option value="5+" className="bg-imperial-950">5+ Guests</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="font-cinzel text-[10px] tracking-widest uppercase text-gold-300 block mb-1">
                        ATTENDANCE STATUS
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, attending: 'yes' })}
                          className={`py-2.5 px-3 rounded-xl font-cinzel text-[11px] tracking-wider uppercase border transition-all ${
                            formData.attending === 'yes'
                              ? 'bg-gradient-to-r from-imperial-900 to-imperial-800 border-gold-400 text-gold-200 font-bold shadow-lg'
                              : 'bg-imperial-950/60 border-gold-500/30 text-stone-400 hover:text-stone-200'
                          }`}
                        >
                          🥂 ATTENDING BANQUET
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, attending: 'regret' })}
                          className={`py-2.5 px-3 rounded-xl font-cinzel text-[11px] tracking-wider uppercase border transition-all ${
                            formData.attending === 'regret'
                              ? 'bg-gradient-to-r from-imperial-900 to-imperial-800 border-gold-400 text-gold-200 font-bold shadow-lg'
                              : 'bg-imperial-950/60 border-gold-500/30 text-stone-400 hover:text-stone-200'
                          }`}
                        >
                          DECLINE WITH LOVE
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="font-cinzel text-[10px] tracking-widest uppercase text-gold-300 block mb-1">
                        BLESSINGS &amp; WARM WISHES
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your blessings for Robin & Benigla..."
                        className="w-full px-4 py-3 rounded-xl bg-imperial-950/80 border border-gold-500/40 text-white placeholder-stone-500 focus:outline-none focus:border-gold-400 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-imperial-900 to-imperial-800 hover:from-imperial-800 hover:to-imperial-700 text-gold-200 border border-gold-400 font-cinzel text-xs tracking-[0.2em] uppercase font-bold shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-98 flex items-center justify-center space-x-2"
                    >
                      <Wine size={15} className="text-gold-400" />
                      <span>RAISE TOAST &amp; CONFIRM RSVP</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Digital Wishing Well Wall */}
          <div className="lg:col-span-6 space-y-4">
            <ScrollReveal animation="fade-left" duration={800}>
              <div className="flex items-center space-x-2 text-xs font-cinzel tracking-widest uppercase text-gold-300 mb-2">
                <MessageCircle size={15} className="text-gold-400" />
                <span>GUEST BLESSINGS &amp; TOASTS</span>
              </div>

              <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-1">
                {wishes.map((w, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#20050B]/85 border border-gold-500/30 shadow-lg backdrop-blur-md"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-cinzel text-sm font-semibold text-gold-200">
                        {w.name}
                      </span>
                      <span className="text-[10px] font-sans text-gold-400/70">
                        {w.city}
                      </span>
                    </div>
                    <p className="font-serif italic text-stone-300 text-xs sm:text-sm leading-relaxed">
                      “{w.text}”
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

