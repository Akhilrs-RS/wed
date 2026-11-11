import React, { useState, useEffect } from 'react';
import { Menu, X, MailOpen } from 'lucide-react';
import { weddingData } from '../../../data/weddingData';

export default function V2Navbar({ onOpenInvitation }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('v2-hero');
  const { couple } = weddingData;

  const navLinks = [
    { label: 'OVERVIEW', href: '#v2-hero', id: 'v2-hero' },
    { label: 'PROGRAM', href: '#v2-program', id: 'v2-program' },
    { label: 'HERITAGE', href: '#v2-heritage', id: 'v2-heritage' },
    { label: 'VENUE', href: '#v2-venue', id: 'v2-venue' },
    { label: 'MOMENTS', href: '#v2-gallery', id: 'v2-gallery' },
    { label: 'TOASTS', href: '#v2-rsvp', id: 'v2-rsvp' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((l) => l.id);
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom >= 220) {
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
    <header className="fixed top-4 inset-x-0 z-40 px-4 sm:px-8 pointer-events-none">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-500 pointer-events-auto flex items-center justify-between px-5 sm:px-7 py-3 ${
          scrolled
            ? 'bg-[#0B0B12]/90 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
            : 'bg-[#0B0B12]/60 backdrop-blur-md border border-white/10 shadow-lg'
        }`}
      >
        {/* Brand Monogram */}
        <a
          href="#v2-hero"
          className="group flex items-center space-x-3 text-gold-300 hover:text-gold-200 transition-colors"
        >
          <div className="w-8 h-8 rounded-full border border-gold-400/60 bg-gradient-to-br from-gold-500/20 to-transparent flex items-center justify-center text-xs font-cinzel font-bold text-gold-300 shadow-inner group-hover:scale-105 transition-transform">
            R
          </div>
          <div className="flex flex-col text-left">
            <span className="font-cinzel text-sm sm:text-base tracking-[0.2em] font-semibold text-white group-hover:text-gold-200 transition-colors leading-none">
              {couple.monogram}
            </span>
            <span className="text-[7.5px] font-cinzel tracking-[0.3em] uppercase text-gold-400/90 leading-none mt-1">
              RECEPTION GALA
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-[10.5px] tracking-[0.22em] font-cinzel font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`py-1 relative transition-colors duration-300 ${
                  isActive
                    ? 'text-gold-300 font-semibold'
                    : 'text-stone-300 hover:text-gold-200'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400 to-transparent shadow-[0_0_8px_#D4AF37]" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          {onOpenInvitation && (
            <button
              onClick={onOpenInvitation}
              className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-gold-400/40 text-gold-300 font-cinzel text-[10px] tracking-wider uppercase transition-all hover:scale-105 active:scale-95 cursor-pointer"
              title="View Formal Invitation Card"
            >
              <MailOpen size={12} className="text-gold-400" />
              <span>INVITATION</span>
            </button>
          )}

          <a
            href="#v2-rsvp"
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-imperial-950 font-cinzel text-[10px] tracking-widest uppercase font-bold shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            SEND BLESSING
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-gold-300 hover:text-white p-2 rounded-full border border-gold-500/30 cursor-pointer"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-sm mx-auto bg-[#0B0B12]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl animate-fade-in text-center font-cinzel pointer-events-auto">
          <div className="flex flex-col space-y-3.5 text-xs tracking-[0.25em] text-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 rounded-xl hover:bg-gold-500/15 hover:text-gold-300 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {onOpenInvitation && (
              <div className="pt-3 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInvitation();
                  }}
                  className="w-full py-2.5 rounded-full bg-white/10 border border-gold-400/50 text-gold-200 text-xs tracking-wider uppercase font-semibold flex items-center justify-center space-x-2"
                >
                  <MailOpen size={13} className="text-gold-400" />
                  <span>VIEW INVITATION CARD</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
