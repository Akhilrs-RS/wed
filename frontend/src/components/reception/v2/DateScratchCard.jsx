import React, { useRef, useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Sparkles as SparklesIcon, Check, RotateCcw, Eye, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { weddingData } from '../../../data/weddingData';

export default function DateScratchCard() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isScratched, setIsScratched] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const strokeCountRef = useRef(0);
  const celebrationFiredRef = useRef(false);

  const { events, receptionSite } = weddingData;

  // Draw gold foil layer on canvas
  const initFoil = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // High-DPI support
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Reset composite operation
    ctx.globalCompositeOperation = 'source-over';

    // Rich metallic gold gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#8E6915');
    grad.addColorStop(0.18, '#C9A038');
    grad.addColorStop(0.35, '#FFE992');
    grad.addColorStop(0.5, '#D4AF37');
    grad.addColorStop(0.7, '#8A6414');
    grad.addColorStop(0.85, '#F7D974');
    grad.addColorStop(1, '#6F4E09');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Add metallic sheen lines
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    for (let i = -width; i < width * 2; i += 32) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + height, height);
      ctx.lineWidth = 12;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.stroke();
    }

    // Outer decorative border on foil
    ctx.strokeStyle = 'rgba(255, 245, 215, 0.55)';
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    // Inner dashed gold ring
    ctx.setLineDash([6, 6]);
    ctx.strokeStyle = 'rgba(255, 220, 120, 0.4)';
    ctx.strokeRect(16, 16, width - 32, height - 32);
    ctx.setLineDash([]);

    // Central Scratch Callout Typography
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Badge pill
    ctx.fillStyle = 'rgba(20, 12, 5, 0.65)';
    const pillW = Math.min(width - 50, 320);
    const pillH = 42;
    const pillX = width / 2 - pillW / 2;
    const pillY = height / 2 - pillH / 2 - 10;
    ctx.beginPath();
    ctx.roundRect(pillX, pillY, pillW, pillH, 21);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 235, 160, 0.8)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Primary Text
    ctx.fillStyle = '#FFF8E1';
    ctx.font = 'bold 12px Montserrat, sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('RUB OR SCRATCH HERE', width / 2, height / 2 - 10);

    // Subtitle Text
    ctx.fillStyle = '#F5D061';
    ctx.font = '600 10px Montserrat, sans-serif';
    ctx.letterSpacing = '1.5px';
    ctx.fillText('TO UNVEIL SACRED CELEBRATION DATES', width / 2, height / 2 + 30);

    // Mini bottom hint
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = 'italic 10px serif';
    ctx.fillText('(Use your finger or mouse)', width / 2, height / 2 + 52);

    setIsScratched(false);
    setScratchPercent(0);
    celebrationFiredRef.current = false;
  };

  useEffect(() => {
    initFoil();
    const handleResize = () => {
      if (!isScratched) initFoil();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute scratch percentage
  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    try {
      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;
      let transparentPixels = 0;
      const stride = 32; // Fast sampling
      const totalSampled = data.length / (4 * stride);

      for (let i = 3; i < data.length; i += 4 * stride) {
        if (data[i] === 0) {
          transparentPixels++;
        }
      }

      const percent = Math.round((transparentPixels / totalSampled) * 100);
      setScratchPercent(percent);

      // Auto-clear threshold: 38%
      if (percent >= 38 && !celebrationFiredRef.current) {
        celebrationFiredRef.current = true;
        handleAutoReveal();
      }
    } catch (e) {
      console.log('Scratch sample error:', e);
    }
  };

  const handleAutoReveal = () => {
    setIsScratched(true);
    setScratchPercent(100);

    try {
      confetti({
        particleCount: 85,
        spread: 95,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#FAF6F0', '#E5C578', '#FFD700', '#E11D48']
      });
    } catch (e) {
      console.log('Confetti error:', e);
    }
  };

  const handlePointerDown = (e) => {
    if (isScratched) return;
    isDrawingRef.current = true;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    lastPointRef.current = { x, y };
    scratchAt(x, y);
  };

  const handlePointerMove = (e) => {
    if (!isDrawingRef.current || isScratched) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (lastPointRef.current) {
      scratchLine(lastPointRef.current.x, lastPointRef.current.y, x, y);
    } else {
      scratchAt(x, y);
    }
    lastPointRef.current = { x, y };

    strokeCountRef.current++;
    if (strokeCountRef.current % 12 === 0) {
      checkScratchPercentage();
    }
  };

  const handlePointerUp = () => {
    isDrawingRef.current = false;
    lastPointRef.current = null;
    checkScratchPercentage();
  };

  const scratchAt = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
  };

  const scratchLine = (x1, y1, x2, y2) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 56;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  };

  return (
    <div className="w-full max-w-3xl mx-auto select-none">
      
      {/* Outer Luxury Card Shell */}
      <div
        ref={containerRef}
        className="relative rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-white/15 via-white/5 to-white/10 backdrop-blur-2xl border-2 border-gold-400/60 shadow-[0_30px_90px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* Ambient Corner Gleam */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />

        {/* Top Info Bar */}
        <div className="flex items-center justify-between px-3 py-2 mb-3 text-xs font-cinzel">
          <div className="flex items-center space-x-2 text-gold-300">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-ping" />
            <span className="tracking-[0.2em] font-semibold uppercase text-[10px] sm:text-xs">
              SECRET DATE REVEAL TICKET
            </span>
          </div>

          <div className="flex items-center space-x-3 text-[10px] sm:text-xs">
            <span className="text-stone-300 font-sans">
              Revealed: <span className="font-bold text-gold-300">{scratchPercent}%</span>
            </span>
            <button
              onClick={handleAutoReveal}
              className="px-3 py-1 rounded-full border border-gold-400/40 bg-gold-500/10 hover:bg-gold-500/20 text-gold-200 transition-colors cursor-pointer text-[10px] font-cinzel tracking-wider uppercase"
            >
              Reveal All
            </button>
          </div>
        </div>

        {/* Card Stage with Hidden Content and Canvas Foil Overlay */}
        <div className="relative min-h-[360px] sm:min-h-[400px] rounded-2xl overflow-hidden bg-[#0A0A12] border border-white/15 flex flex-col justify-center">
          
          {/* =================================================================
              UNDERNEATH: THE SACRED WEDDING & RECEPTION DATES
             ================================================================= */}
          <div className="p-6 sm:p-10 space-y-6 text-center">
            
            {/* Header Lockup */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/40 text-[9.5px] font-cinzel tracking-[0.3em] uppercase text-gold-300 font-semibold mb-2">
                OFFICIAL CORDIAL DATES
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl text-white font-medium">
                Robin &amp; Benigla
              </h3>
              <p className="font-serif italic text-xs sm:text-sm text-stone-300 mt-1">
                “Mark your calendar for these joyous celebrations of love.”
              </p>
            </div>

            {/* Two Date Milestone Tablets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              
              {/* Milestone 1: Grand Reception Banquet */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-gold-400/40 hover:border-gold-400 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-3 py-1 bg-gold-500/20 border-b border-l border-gold-400/40 rounded-bl-xl text-[8.5px] font-cinzel tracking-widest text-gold-200 uppercase font-bold">
                  MAIN EVENT
                </div>
                
                <span className="text-[10px] uppercase font-cinzel tracking-wider text-gold-400 font-semibold block mb-1">
                  WEDDING RECEPTION
                </span>
                <h4 className="font-cinzel text-xl sm:text-2xl text-white font-bold">
                  30 DEC 2026
                </h4>
                <div className="text-xs text-gold-300 font-cinzel font-semibold mt-0.5">
                  Wednesday • 05:30 PM IST
                </div>
                
                <div className="pt-3 mt-3 border-t border-white/10 text-xs text-stone-300 font-sans space-y-0.5">
                  <p className="font-semibold text-white">Uthiram Auditorium</p>
                  <p className="text-[11px] text-stone-400">Punniyam, Kanyakumari, Tamil Nadu</p>
                </div>
              </div>

              {/* Milestone 2: Holy Matrimony Ceremony */}
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/15 hover:border-gold-400/50 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-3 py-1 bg-white/10 border-b border-l border-white/15 rounded-bl-xl text-[8.5px] font-cinzel tracking-widest text-stone-300 uppercase font-semibold">
                  CEREMONY
                </div>

                <span className="text-[10px] uppercase font-cinzel tracking-wider text-gold-400 font-semibold block mb-1">
                  THE HOLY MATRIMONY
                </span>
                <h4 className="font-cinzel text-xl sm:text-2xl text-white font-bold">
                  21 DEC 2026
                </h4>
                <div className="text-xs text-gold-300 font-cinzel font-semibold mt-0.5">
                  Monday • 11:00 AM IST
                </div>

                <div className="pt-3 mt-3 border-t border-white/10 text-xs text-stone-300 font-sans space-y-0.5">
                  <p className="font-semibold text-white">Ummanoor Mar Semavoon Church</p>
                  <p className="text-[11px] text-stone-400">Kottarakara, Kollam, Kerala</p>
                </div>
              </div>
            </div>

            {/* Scripture Badge */}
            <div className="pt-2 text-[11px] font-serif italic text-gold-200">
              “I have found the one whom my soul loves.” — Song of Solomon 3:4
            </div>
          </div>

          {/* =================================================================
              OVERLAY: SCRATCHABLE METALLIC GOLD FOIL CANVAS
             ================================================================= */}
          {!isScratched && (
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="absolute inset-0 w-full h-full cursor-crosshair touch-none z-20 transition-opacity duration-700"
              style={{
                touchAction: 'none'
              }}
            />
          )}

          {/* Reset / Scratch Again Button (appears after revealed) */}
          {isScratched && (
            <div className="absolute bottom-3 right-3 z-30">
              <button
                onClick={initFoil}
                className="px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-stone-300 hover:text-white font-cinzel text-[10px] tracking-wider uppercase flex items-center space-x-1.5 transition-all shadow-md cursor-pointer"
                title="Reset scratch card"
              >
                <RotateCcw size={12} />
                <span>Scratch Again</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

