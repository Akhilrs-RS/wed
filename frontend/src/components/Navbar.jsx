import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'OUR STORY', href: '#story' },
    { label: 'THE FAMILIES', href: '#parents' },
    { label: 'CELEBRATIONS', href: '#celebrations' },
    { label: 'THE VENUES', href: '#the-day' },
    { label: 'RSVP', href: '#rsvp' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(74,14,23,0.08)] py-3 border-b border-gold-500/30'
          : 'bg-transparent py-5 border-b border-gold-500/15'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Royal Crest Monogram */}
        <a
          href="#"
          className="group flex items-center space-x-3 text-imperial-800 transition-transform duration-300 hover:scale-105"
        >
          <div className="w-8 h-8 rounded-full border border-gold-500/60 flex items-center justify-center bg-gold-100/40 shadow-sm">
            <span className="font-cinzel text-xs text-gold-700 font-bold">✝</span>
          </div>
          <span className="font-cinzel-dec text-lg sm:text-xl tracking-[0.2em] text-imperial-800 group-hover:text-gold-700 transition-colors font-semibold">
            R &amp; B
          </span>
        </a>

        {/* Desktop Nav in Cinzel Font */}
        <nav className="hidden md:flex items-center space-x-8 text-[11px] lg:text-xs tracking-[0.25em] font-cinzel font-medium text-stone-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-gold-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.5px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Accent Motif */}
        <div className="hidden md:flex items-center space-x-2 text-gold-600 text-xs tracking-widest font-cinzel">
          <span>DECEMBER 2026</span>
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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 hover:text-gold-700 hover:bg-gold-100/50 rounded transition-colors"
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
