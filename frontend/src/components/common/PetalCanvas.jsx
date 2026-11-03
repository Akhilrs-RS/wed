import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function PetalCanvas() {
  const canvasRef = useRef(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Rose Petals & Gold Sparkles
    const petals = Array.from({ length: 28 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      r: Math.random() * 8 + 6,
      d: Math.random() * 1.5 + 0.8,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 1.5,
      color: Math.random() > 0.4 ? 'rgba(212, 175, 55, 0.45)' : 'rgba(220, 110, 130, 0.45)', // Gold & Rose
      type: Math.random() > 0.5 ? 'petal' : 'sparkle',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.d;
        p.x += Math.sin(p.y * 0.01) * 0.8;
        p.rotation += p.rotSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);

        if (p.type === 'petal') {
          // Curved petal
          ctx.beginPath();
          ctx.ellipse(0, 0, p.r * 1.2, p.r * 0.7, Math.PI / 4, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        } else {
          // 4-point star sparkle
          ctx.beginPath();
          for (let i = 0; i < 4; i++) {
            ctx.lineTo(Math.cos((i * Math.PI) / 2) * p.r, Math.sin((i * Math.PI) / 2) * p.r);
            ctx.lineTo(
              Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (p.r * 0.35),
              Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (p.r * 0.35)
            );
          }
          ctx.closePath();
          ctx.fillStyle = 'rgba(235, 195, 100, 0.6)';
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-20 transition-opacity duration-700"
        style={{ opacity: isActive ? 1 : 0 }}
      />
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsActive(!isActive)}
        title={isActive ? 'Pause floating petals' : 'Enable floating petals'}
        className="fixed bottom-6 left-6 z-40 bg-imperial-950/80 hover:bg-imperial-900 text-gold-300 p-2.5 rounded-full border border-gold-500/50 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center text-xs"
        aria-label="Toggle floating petals"
      >
        <Sparkles size={16} className={isActive ? 'animate-spin-slow text-gold-400' : 'opacity-60'} />
      </button>
    </>
  );
}
