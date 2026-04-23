import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface DripData {
  id: number;
  x: number;
  length: number;
  width: number;
  delay: number;
}

export const InteractiveBloodDrip: React.FC = () => {
  const [drips, setDrips] = useState<DripData[]>([]);
  const [lastX, setLastX] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.clientY > 80) return;

    const dist = Math.abs(e.clientX - lastX);
    if (dist > 40) {
      const newDrip: DripData = {
        id: Date.now(),
        x: e.clientX,
        length: Math.random() * 200 + 150,
        width: Math.random() * 4 + 4,
        delay: Math.random() * 0.2,
      };
      // Keep a larger buffer for a "pooling" effect
      setDrips((prev) => [...prev.slice(-20), newDrip]);
      setLastX(e.clientX);
    }
  };

  return (
    <motion.div 
      className="fixed top-0 left-0 w-full h-full z-[100] pointer-events-none overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Invisible Trigger Zone */}
      <div className="absolute top-0 left-0 w-full h-[120px] pointer-events-auto" />

      {/* SVG Container for Gooey Filter Effect */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>

        <g filter="url(#goo)">
          {/* Top pooling bar - the source of the blood */}
          <rect x="0" y="-10" width="100%" height="25" fill="#8b0000" fillOpacity="0.8" />

          <AnimatePresence>
            {drips.map((drip) => (
              <g key={drip.id}>
                {/* The Drip Neck (stretches down) */}
                <motion.rect
                  x={drip.x - drip.width / 2}
                  y="-5"
                  width={drip.width}
                  initial={{ height: 0 }}
                  animate={{ height: drip.length }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 5, 
                    ease: [0.33, 1, 0.68, 1], // Custom slow growth
                    delay: drip.delay 
                  }}
                  fill="#8b0000"
                />

                {/* The Drip Tip (forming the sphere/bead at the bottom) */}
                <motion.circle
                  cx={drip.x}
                  cy={0}
                  r={drip.width * 1.5}
                  initial={{ cy: 0, r: drip.width }}
                  animate={{ 
                    cy: drip.length, 
                    r: [drip.width, drip.width * 2, drip.width * 1.2], // Grows then thins
                    opacity: [1, 1, 0] // Fades at the very end
                  }}
                  transition={{ 
                    duration: 6, 
                    ease: "easeInOut",
                    delay: drip.delay 
                  }}
                  fill="#8b0000"
                />
              </g>
            ))}
          </AnimatePresence>
        </g>
      </svg>

      {/* Glossy Overlay for volumetric depth (separate from filter to stay crisp) */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay">
        {drips.slice(-10).map((drip) => (
          <motion.div
            key={`gloss-${drip.id}`}
            className="absolute top-0 bg-white shadow-[0_0_10px_white] rounded-full w-[2px]"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: drip.length * 0.7, opacity: [0, 0.4, 0] }}
            style={{ left: drip.x - 1 }}
            transition={{ duration: 5, delay: drip.delay }}
          />
        ))}
      </div>
    </motion.div>
  );
};
