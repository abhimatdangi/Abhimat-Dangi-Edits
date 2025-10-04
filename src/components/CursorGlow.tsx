import React, { useEffect, useRef } from "react";

const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

const CursorGlow: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: pos.current.x, y: pos.current.y });
  const raf = useRef<number>();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.12);
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 80}px, ${pos.current.y - 80}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  // Hide on touch devices
  useEffect(() => {
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (hasTouch && glowRef.current) {
      glowRef.current.style.display = 'none';
    }
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="pointer-events-none fixed z-0 h-40 w-40 rounded-full opacity-50 blur-2xl"
      style={{
        background: "radial-gradient(120px 120px at center, hsl(var(--brand-deep-red) / 0.35), transparent 70%)",
        mixBlendMode: "multiply",
      }}
    />
  );
};

export default CursorGlow;
