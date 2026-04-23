import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface BloodCurtainProps {
  onComplete: () => void;
}

export const BloodCurtain: React.FC<BloodCurtainProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'flowing' | 'receding' | 'done'>('flowing');

  useEffect(() => {
    // Flowing duration
    const timer1 = setTimeout(() => setPhase('receding'), 1500);
    // Receding duration
    const timer2 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] bg-noir-black flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Background Texture for the liquid */}
          <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-multiply">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
          </div>

          {/* Flowing Liquid Layers */}
          <motion.div
            className="absolute inset-x-0 top-0 bg-[#4a0508] origin-top"
            initial={{ height: 0 }}
            animate={{ 
              height: phase === 'flowing' ? '120%' : '0%' 
            }}
            transition={{ 
              duration: phase === 'flowing' ? 1.5 : 2, 
              ease: phase === 'flowing' ? "easeIn" : "easeInOut" 
            }}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 90%, 80% 100%, 60% 95%, 40% 100%, 20% 95%, 0 100%)',
              boxShadow: '0 10px 50px rgba(0,0,0,1)'
            }}
          />

          <motion.div
            className="absolute inset-x-0 top-0 bg-noir-blood origin-top"
            initial={{ height: 0 }}
            animate={{ 
              height: phase === 'flowing' ? '100%' : '0%' 
            }}
            transition={{ 
              duration: phase === 'flowing' ? 1.8 : 1.8, 
              ease: phase === 'flowing' ? "easeIn" : "easeInOut",
              delay: phase === 'flowing' ? 0.2 : 0
            }}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% 95%, 75% 100%, 50% 90%, 25% 100%, 0 95%)'
            }}
          />

          {/* Central Hint */}
          <motion.div
             className="relative z-10 font-typewriter text-noir-paper/40 text-sm tracking-[0.5em] uppercase text-center"
             initial={{ opacity: 0 }}
             animate={{ opacity: phase === 'flowing' ? 1 : 0 }}
             transition={{ duration: 0.5, delay: 0.5 }}
          >
            Breaking Seal
          </motion.div>

          {/* Vignette overlay */}
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
