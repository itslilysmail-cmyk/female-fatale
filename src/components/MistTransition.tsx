import React from 'react';
import { motion } from 'motion/react';

interface MistTransitionProps {
  onComplete: () => void;
}

export const MistTransition: React.FC<MistTransitionProps> = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Fog layers */}
      <motion.div
        className="absolute inset-0 bg-noir-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[200%] h-[200%] bg-gradient-radial from-noir-mist/20 to-transparent blur-3xl"
            initial={{
              x: i % 2 === 0 ? '-100%' : '100%',
              y: '-50%',
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: i % 2 === 0 ? '50%' : '-50%',
              opacity: 0.6,
              scale: 1.5
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.2,
              ease: "circOut"
            }}
            onAnimationComplete={() => {
              if (i === 4) onComplete();
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-[101] text-noir-paper text-center"
        initial={{ opacity: 0, letterSpacing: '0em' }}
        animate={{ opacity: 1, letterSpacing: '0.5em' }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-mono text-xs uppercase opacity-40">Crossing Threshold...</span>
      </motion.div>
    </motion.div>
  );
};
