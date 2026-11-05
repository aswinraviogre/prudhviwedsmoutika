import React from 'react';

const PETAL_ITEMS = ["🌸", "🌸", "🌿", "🌸", "🌼", "🌿", "🌸"];

export default function PetalsOverlay({ count = 12 }) {
  const petals = React.useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      left: Math.random() * 100,
      duration: 14 + Math.random() * 16,
      delay: Math.random() * 12,
      size: 14 + Math.random() * 22,
      char: PETAL_ITEMS[i % PETAL_ITEMS.length]
    }));
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((petal, index) => (
        <span
          key={index}
          className="absolute animate-float-petal"
          style={{
            left: `${petal.left}%`,
            top: "-10vh",
            fontSize: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            filter: "drop-shadow(0 2px 4px hsl(var(--ink) / 0.1))"
          }}
        >
          {petal.char}
        </span>
      ))}
    </div>
  );
}

