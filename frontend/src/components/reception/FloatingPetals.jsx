import React, { useState, useEffect, useRef } from 'react';

const PETAL_SHAPES = [
  {
    w: 18,
    h: 24,
    r: '70% 30% 70% 30% / 30% 70% 30% 70%',
    bg: 'radial-gradient(circle, rgba(163,38,56,0.35) 0%, rgba(122,29,45,0.2) 100%)'
  },
  {
    w: 16,
    h: 22,
    r: '30% 70% 30% 70% / 70% 30% 70% 30%',
    bg: 'radial-gradient(circle, rgba(212,175,55,0.45) 0%, rgba(184,134,11,0.25) 100%)'
  },
  {
    w: 20,
    h: 16,
    r: '60% 40% 60% 40% / 40% 60% 40% 60%',
    bg: 'radial-gradient(circle, rgba(235,178,187,0.4) 0%, rgba(200,140,150,0.2) 100%)'
  },
  {
    w: 14,
    h: 18,
    r: '50% 50% 50% 50% / 60% 60% 40% 40%',
    bg: 'radial-gradient(circle, rgba(250,246,240,0.6) 0%, rgba(220,205,185,0.3) 100%)'
  },
  {
    w: 8,
    h: 8,
    r: '50%',
    bg: 'radial-gradient(circle, rgba(255,223,128,0.7) 0%, rgba(212,175,55,0) 70%)'
  }
];

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const animFrameRef = useRef(null);
  const timeRef = useRef(0);
  const scrollRef = useRef(0);

  // Track window scroll for gentle parallax
  useEffect(() => {
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize petals
  useEffect(() => {
    const initialPetals = Array.from({ length: 24 }, (_, i) => ({
      id: i,
      shape: PETAL_SHAPES[i % PETAL_SHAPES.length],
      x: randomBetween(0, 100),
      y: randomBetween(-20, 110),
      vx: randomBetween(-0.003, 0.003),
      vy: randomBetween(0.005, 0.012),
      rotate: randomBetween(0, 360),
      vr: randomBetween(-0.05, 0.05),
      opacity: randomBetween(0.4, 0.85),
      scale: randomBetween(0.7, 1.3),
      depth: randomBetween(0.08, 0.25),
      wavePhase: randomBetween(0, Math.PI * 2)
    }));
    setPetals(initialPetals);
  }, []);

  // Run 60fps simulation
  useEffect(() => {
    let lastTime = performance.now();

    const updateLoop = (now) => {
      const delta = Math.min(now - lastTime, 32);
      lastTime = now;
      timeRef.current += delta * 0.001;

      setPetals((prevPetals) =>
        prevPetals.map((p) => {
          let newX =
            p.x +
            p.vx * delta +
            Math.sin(timeRef.current + p.wavePhase) * 0.003;
          let newY = p.y + p.vy * delta;
          let newRotate = p.rotate + p.vr * delta;

          if (newY > 115) {
            newY = -10;
            newX = randomBetween(0, 100);
          }
          if (newX < -5) newX = 105;
          if (newX > 105) newX = -5;

          return {
            ...p,
            x: newX,
            y: newY,
            rotate: newRotate
          };
        })
      );

      setScrollY(scrollRef.current);
      animFrameRef.current = requestAnimationFrame(updateLoop);
    };

    animFrameRef.current = requestAnimationFrame(updateLoop);
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-20 pointer-events-none overflow-hidden select-none">
      {petals.map((p) => {
        const parallaxOffset = (scrollY * p.depth * 0.1) % 100;
        const currentTop = ((p.y - parallaxOffset + 120) % 120) - 10;

        return (
          <div
            key={p.id}
            className="absolute pointer-events-none select-none will-change-transform"
            style={{
              width: p.shape.w,
              height: p.shape.h,
              borderRadius: p.shape.r,
              background: p.shape.bg,
              boxShadow:
                p.shape.w <= 8 ? '0 0 6px rgba(212,175,55,0.5)' : 'none',
              filter: 'blur(0.4px)',
              left: `${p.x}vw`,
              top: `${currentTop}vh`,
              opacity: p.opacity,
              transform: `translate3d(0, 0, 0) rotate(${p.rotate}deg) scale(${p.scale})`
            }}
          />
        );
      })}
    </div>
  );
}
