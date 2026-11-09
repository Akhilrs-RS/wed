import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function Navbar({ navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'OUR STORY', href: '#story', id: 'story' },
    { label: 'THE FAMILIES', href: '#parents', id: 'parents' },
    { label: 'THE VENUES', href: '#the-day', id: 'the-day' },
    { label: 'RSVP', href: '#rsvp', id: 'rsvp' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background elevation state
      setScrolled(window.scrollY > 40);

      // Top scroll reading progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100));
        setScrollProgress(progress);
      }

      // Active section spy
      const scrollPos = window.scrollY + 200;
      let currentSection = '';
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = link.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(74,14,23,0.08)] py-3 border-b border-gold-500/30'
          : 'bg-transparent py-5 border-b border-gold-500/15'
      }`}
    >
      {/* Scroll Reading Gold Progress Filament */}
      <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gold-500/15 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gold-400 via-gold-500 to-amber-300 relative transition-all duration-150 ease-out shadow-[0_0_8px_rgba(212,175,55,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Glowing Head Point */}
          <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_6px_#D4AF37]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Royal Crest Monogram */}
        <a
          href="#"
          className="group flex items-center space-x-3 text-imperial-800 transition-transform duration-300 hover:scale-105"
        >
          <div className="w-8 h-8 rounded-full border border-gold-500/60 flex items-center justify-center bg-gold-100/40 shadow-sm transition-transform duration-500 group-hover:rotate-180">
            <span className="font-cinzel text-xs text-gold-700 font-bold">✦</span>
          </div>
          <span className="font-cinzel-dec text-lg sm:text-xl tracking-[0.2em] text-imperial-800 group-hover:text-gold-700 transition-colors font-semibold">
            R &amp; B
          </span>
        </a>

        {/* Desktop Nav in Cinzel Font with Active Highlighting */}
        <nav className="hidden md:flex items-center space-x-8 text-[11px] lg:text-xs tracking-[0.25em] font-cinzel font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`py-1 relative transition-colors duration-300 ${
                  isActive
                    ? 'text-gold-700 font-semibold'
                    : 'text-stone-700 hover:text-gold-700'
                } after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1.5px] after:bg-gold-500 after:transition-all after:duration-300 ${
                  isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Accent Motif & Reception Route Link */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gold-600 text-xs tracking-widest font-cinzel">
            <Sparkles size={12} className="animate-pulse text-gold-500" />
            <span>DECEMBER 2026</span>
          </div>

          {navigate && (
            <button
              onClick={() => navigate('/reception')}
              className="group inline-flex items-center space-x-1 px-3 py-1 bg-gold-100/60 hover:bg-gold-200/80 text-gold-900 border border-gold-400/60 text-[10px] font-cinzel tracking-wider uppercase font-semibold transition-all shadow-sm cursor-pointer"
              title="Open dedicated Wedding Reception invitation page"
            >
              <span>RECEPTION</span>
              <ArrowRight size={11} className="text-gold-700 transition-transform group-hover:translate-x-0.5" />
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-imperial-800 hover:text-gold-600 p-2 border border-gold-500/30 rounded"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-gold-500/40 px-6 py-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-4 text-center tracking-[0.25em] text-xs font-cinzel font-medium text-stone-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 rounded transition-colors ${
                    isActive
                      ? 'text-gold-800 bg-gold-200/50 font-bold'
                      : 'hover:text-gold-700 hover:bg-gold-100/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {navigate && (
              <div className="pt-4 border-t border-gold-500/20">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/reception');
                  }}
                  className="w-full py-2.5 text-center text-xs tracking-wider uppercase font-cinzel text-gold-900 bg-gold-100/80 border border-gold-400 font-bold cursor-pointer"
                >
                  VIEW RECEPTION (DEC 30) →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
