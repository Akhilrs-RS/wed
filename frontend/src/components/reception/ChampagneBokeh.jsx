import React, { useMemo } from 'react';

export default function ChampagneBokeh() {
  const bubbles = useMemo(() => {
    return Array.from({ length: 22 }, (_, i) => {
      const size = 8 + (i * 7) % 18; // 8px to 25px
      const left = 3 + (i * 19.3) % 94; // 3% to 97%
      const duration = 14 + (i * 3.7) % 12; // 14s to 26s
      const delay = (i * 1.6) % 12; // 0s to 12s
      const driftX = (i % 2 === 0 ? 1 : -1) * (15 + (i * 5) % 30); // -45px to +45px
      const opacity = 0.35 + ((i % 5) * 0.1); // 0.35 to 0.75

      return {
        id: i,
        size,
        left,
        duration,
        delay,
        driftX,
        opacity
      };
    });
  }, []);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden select-none">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full animate-bokeh pointer-events-none will-change-transform"
          style={{
            width: `${b.size}px`,
            height: `${b.size}px`,
            left: `${b.left}%`,
            background: 'radial-gradient(circle at 35% 35%, rgba(255, 238, 170, 0.8) 0%, rgba(212, 175, 55, 0.45) 50%, rgba(180, 130, 20, 0) 75%)',
            boxShadow: '0 0 10px rgba(245, 208, 97, 0.4), inset 0 0 4px rgba(255, 255, 255, 0.6)',
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            '--drift-x': `${b.driftX}px`,
            filter: 'blur(0.3px)'
          }}
        />
      ))}
    </div>
  );
}

