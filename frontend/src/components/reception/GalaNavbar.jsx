import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft, Sparkles } from 'lucide-react';
import { weddingData } from '../../data/weddingData';

export default function GalaNavbar({ navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { couple } = weddingData;

  const navLinks = [
    { label: 'PROGRAM', href: '#program', id: 'program' },
    { label: 'HERITAGE', href: '#heritage', id: 'heritage' },
    { label: 'THE VENUE', href: '#venue', id: 'venue' },
    { label: 'GALLERY', href: '#gallery', id: 'gallery' },
    { label: 'TOAST & RSVP', href: '#rsvp', id: 'rsvp' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 max-w-5xl mx-auto px-4 pointer-events-auto">
      {/* Floating Glassmorphic Pill Dock */}
      <div
        className={`flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#180308]/92 backdrop-blur-xl border border-gold-400/50 shadow-[0_10px_35px_rgba(0,0,0,0.7)]'
            : 'bg-[#22050D]/85 backdrop-blur-lg border border-gold-500/35 shadow-2xl'
        }`}
      >
        {/* Monogram Crest Link */}
        <a
          href="#gala-hero"
          className="group flex items-center space-x-2 text-gold-300 hover:text-gold-200 transition-colors"
        >
          <div className="w-8 h-8 rounded-full border border-gold-400/70 bg-imperial-950 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
            <span className="font-cinzel text-xs text-gold-400 font-bold">R</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-script text-lg sm:text-xl leading-none text-gold-200 group-hover:text-gold-100">
              {couple.monogram}
            </span>
            <span className="text-[8px] font-cinzel tracking-[0.25em] text-gold-400/80 uppercase leading-none">
              RECEPTION GALA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-[11px] tracking-[0.2em] font-cinzel font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`py-1 relative transition-colors duration-200 ${
                  isActive
                    ? 'text-gold-200 font-semibold'
                    : 'text-stone-300 hover:text-gold-300'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[1.5px] bg-gold-400 shadow-[0_0_6px_#D4AF37]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Church Wedding Crosslink */}
        <div className="hidden lg:flex items-center space-x-3">
          {navigate && (
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-imperial-900/90 hover:bg-imperial-800 border border-gold-400/60 text-gold-200 text-[10px] font-cinzel tracking-wider uppercase font-semibold transition-all shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              title="Return to Main Holy Matrimony & Wedding Invitation"
            >
              <ArrowLeft size={11} className="text-gold-400" />
              <span>CHURCH WEDDING (DEC 21)</span>
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gold-300 hover:text-gold-200 p-1.5 border border-gold-500/40 rounded-full"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#1A0309]/95 backdrop-blur-2xl border border-gold-400/40 rounded-2xl p-5 shadow-2xl animate-fade-in text-center font-cinzel">
          <div className="flex flex-col space-y-3.5 text-xs tracking-[0.25em] text-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 rounded hover:bg-gold-500/15 hover:text-gold-300 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {navigate && (
              <div className="pt-3 border-t border-gold-500/30">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/');
                  }}
                  className="w-full py-2.5 rounded-full bg-imperial-900 border border-gold-400 text-gold-200 text-xs tracking-wider uppercase font-bold"
                >
                  ← CHURCH WEDDING (DEC 21)
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

