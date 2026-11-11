import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { weddingData } from '../../data/weddingData';

export default function NewGalaNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('gala-hero');
  const { couple } = weddingData;

  const navLinks = [
    { label: 'GALA', href: '#gala-hero', id: 'gala-hero' },
    { label: 'PROGRAM', href: '#gala-program', id: 'gala-program' },
    { label: 'HERITAGE', href: '#gala-heritage', id: 'gala-heritage' },
    { label: 'VENUE', href: '#gala-venue', id: 'gala-venue' },
    { label: 'MOMENTS', href: '#gala-gallery', id: 'gala-gallery' },
    { label: 'WISHES', href: '#gala-rsvp', id: 'gala-rsvp' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.id);
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-40 px-4 sm:px-6 pointer-events-none">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-500 pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
          scrolled
            ? 'bg-[#180309]/90 backdrop-blur-xl border border-gold-400/40 shadow-[0_8px_30px_rgba(0,0,0,0.7)]'
            : 'bg-[#180309]/70 backdrop-blur-md border border-gold-400/25 shadow-lg'
        }`}
      >
        {/* Monogram Brand Mark: Interlocking R & B Rings */}
        <a
          href="#gala-hero"
          className="group flex items-center space-x-3 text-gold-300 hover:text-gold-200 transition-all cursor-pointer"
        >
          <div className="relative flex items-center -space-x-2 group-hover:-space-x-1 transition-all duration-300">
            <div className="w-8 h-8 rounded-full border border-gold-400/80 bg-gradient-to-br from-[#1F1F2E] to-[#0D0D15] flex items-center justify-center text-xs font-cinzel font-bold text-gold-300 shadow-lg group-hover:border-gold-300 transition-colors z-10">
              R
            </div>
            <div className="w-8 h-8 rounded-full border border-gold-400/80 bg-gradient-to-br from-[#1F1F2E] to-[#0D0D15] flex items-center justify-center text-xs font-cinzel font-bold text-gold-300 shadow-lg group-hover:border-gold-300 transition-colors z-20">
              B
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.22em] font-semibold text-white group-hover:text-gold-200 transition-colors leading-none">
              ROBIN <span className="font-script text-gold-400 text-sm sm:text-base font-normal">&amp;</span> BENIGLA
            </span>
            <span className="text-[7.5px] font-cinzel tracking-[0.3em] uppercase text-gold-400/90 leading-none mt-1">
              RECEPTION GALA • DEC 30
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-[10.5px] tracking-[0.2em] font-cinzel font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`py-1 relative transition-colors duration-300 ${
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

        {/* Quick RSVP CTA */}
        <div className="hidden sm:flex items-center">
          <a
            href="#gala-rsvp"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500/20 via-gold-400/30 to-gold-500/20 hover:from-gold-500/30 hover:to-gold-400/40 border border-gold-400/60 text-gold-200 font-cinzel text-[10px] tracking-widest uppercase font-semibold transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
          >
            SEND BLESSING
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gold-300 hover:text-gold-200 p-1.5 border border-gold-500/40 rounded-full cursor-pointer"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto bg-[#180309]/95 backdrop-blur-2xl border border-gold-400/40 rounded-2xl p-5 shadow-2xl animate-fade-in text-center font-cinzel pointer-events-auto">
          <div className="flex flex-col space-y-3 text-xs tracking-[0.25em] text-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 rounded-lg hover:bg-gold-500/15 hover:text-gold-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

