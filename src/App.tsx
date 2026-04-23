import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROTOTYPES, QUESTIONS } from './constants/data';
import { PrototypeType, Prototype } from './types';
import { BloodCurtain } from './components/BloodCurtain';
import { QuestionCard } from './components/QuestionCard';
import { ResultView } from './components/ResultView';
import { MistTransition } from './components/MistTransition';
import { Shield, Eye, Lock, Scissors, ChevronRight } from 'lucide-react';

import { InteractiveBloodDrip } from './components/InteractiveBloodDrip';

export default function App() {
  const [view, setView] = useState<'opening' | 'intro' | 'transition' | 'quiz' | 'result'>('opening');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerHistory, setAnswerHistory] = useState<{ scores: Record<PrototypeType, number>; questionIdx: number }[]>([]);
  const [scores, setScores] = useState<Record<PrototypeType, number>>({
    BLACK_WIDOW: 0,
    ANGEL_OF_DEATH: 0,
    REVENGE_KILLER: 0,
    POWER_SEEKER: 0,
    CULT_FOLLOWER: 0,
    PREDATOR: 0,
  });
  const [result, setResult] = useState<Prototype | null>(null);

  useEffect(() => {
    // Start with opening curtain
  }, []);

  const startTest = () => {
    setView('transition');
  };

  const onSelectOption = (optionIdx: number) => {
    // Save current state to history before updating
    setAnswerHistory(prev => [...prev, { scores: { ...scores }, questionIdx: currentQuestion }]);

    const question = QUESTIONS[currentQuestion];
    const option = question.options[optionIdx];

    const newScores = { ...scores };
    Object.entries(option.scores).forEach(([type, score]) => {
      newScores[type as PrototypeType] += (score as number);
    });
    setScores(newScores);

    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const onBack = () => {
    if (answerHistory.length === 0) return;

    const lastState = answerHistory[answerHistory.length - 1];
    setScores(lastState.scores);
    setCurrentQuestion(lastState.questionIdx);
    setAnswerHistory(prev => prev.slice(0, -1));
  };

  const calculateResult = (finalScores: Record<PrototypeType, number>) => {
    let maxType: PrototypeType = 'BLACK_WIDOW';
    let maxScore = -1;

    Object.entries(finalScores).forEach(([type, score]) => {
      if (score > maxScore) {
        maxScore = score;
        maxType = type as PrototypeType;
      }
    });

    setResult(PROTOTYPES[maxType]);
    setView('result');
  };

  const reset = () => {
    setScores({
      BLACK_WIDOW: 0,
      ANGEL_OF_DEATH: 0,
      REVENGE_KILLER: 0,
      POWER_SEEKER: 0,
      CULT_FOLLOWER: 0,
      PREDATOR: 0,
    });
    setAnswerHistory([]);
    setCurrentQuestion(0);
    setResult(null);
    setView('intro');
  };

  return (
    <div 
      className="relative min-h-screen overflow-hidden font-serif transition-colors duration-1000"
      id="app-root"
    >
      {/* DEBUG ARCHIVE SELECTOR (Temporary for Review) */}
      <div className="fixed bottom-4 left-4 z-50 flex gap-2 opacity-0 hover:opacity-100 transition-opacity">
        {Object.keys(PROTOTYPES).map(key => (
          <button 
            key={key} 
            onClick={() => {
              setResult(PROTOTYPES[key]);
              setView('result');
            }}
            className="px-2 py-1 bg-noir-black border border-noir-paper/20 text-[8px] font-mono hover:bg-noir-blood hover:text-white"
          >
            DEBUG: {key}
          </button>
        ))}
      </div>

      {/* GLOBAL ATMOSPHERICS */}
      <div className="vignette z-40" />
      <div className="texture-overlay z-50" />
      <div className="veil-drape z-40" />
      <div className="atmos-glow z-0" />
      <div className="smudge-bg fixed inset-0 opacity-40 z-0 pointer-events-none" />

      <AnimatePresence>
        {(view === 'opening' || view === 'intro') && (
          <InteractiveBloodDrip key="blood-drip" />
        )}
      </AnimatePresence>

      {/* Decorative Background Artifacts: Organic Darkness */}
      <div className="absolute top-[15%] right-[-5%] opacity-[0.03] pointer-events-none z-0 scale-150 rotate-12">
        <svg width="600" height="600" viewBox="0 0 200 200" fill="none" stroke="#d8cdbd" strokeWidth="0.5">
          {/* Dried Branch Outlines */}
          <path d="M100 200 Q 110 150 90 100 Q 120 80 140 40 M90 100 Q 60 70 30 50 M110 140 Q 150 130 180 140" />
          <path d="M105 195 Q 115 145 95 95 Q 125 75 145 35 M95 95 Q 65 65 35 45" opacity="0.5" />
          <path d="M80 180 Q 90 160 85 140 Q 100 130 110 110" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="absolute bottom-[10%] left-[-2%] opacity-[0.02] pointer-events-none z-0">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor">
          {/* Crow Silhouette */}
          <path d="M21,11C21,11 19.5,10.5 18,11C16.5,11.5 15.5,13 14,12.5C12.5,12 12,10.5 11,10.5C10,10.5 8.5,11.5 7.5,12.5C6.5,13.5 6,15.5 6,15.5C6,15.5 7.5,14 9,14.5C10.5,15 11.5,16.5 13,16C14.5,15.5 15,14 16,14C17,14 18.5,14.5 19.5,14.5C20.5,14.5 21,11 21,11M16,9C16,9 15.5,8.5 15,8.5C14.5,8.5 14,9 14,9.5C14,10 14.5,10.5 15,10.5C15.5,10.5 16,10 16,9.5C16,9 16,9 16,9Z" />
        </svg>
      </div>

      <div className="absolute top-[40%] left-[40%] opacity-[0.02] pointer-events-none z-0 rotate-45">
         <svg width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.1">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <path d="M12 6l-1 5h2zM12 18l1-5h-2z" />
         </svg>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* SHARED HEADER (Limited visibility in Result/Quiz for focus) */}
        {view !== 'opening' && view !== 'transition' && (
          <header className="p-8 flex justify-between items-start border-b border-noir-paper/5 relative">
            <div className="flex flex-col gap-1">
              <span className="font-typewriter text-[10px] tracking-[0.2em] opacity-40 uppercase">Bureau of Psychological Deviance</span>
              <span className="font-mono text-[9px] tracking-[0.2em] opacity-30 uppercase">Confidential Manuscript // No. 9172-B</span>
            </div>
            <div className="text-right flex flex-col items-end">
              <div className="marker-highlight px-3 py-1 text-noir-blood font-mono text-[10px] uppercase tracking-widest">
                Classified
              </div>
            </div>
          </header>
        )}

        <main className="flex-1 flex flex-col relative">
          <AnimatePresence mode="wait">
            {view === 'opening' && (
              <BloodCurtain key="opening" onComplete={() => setView('intro')} />
            )}

            {view === 'intro' && (
              <motion.div
                key="intro"
                className="flex-grow flex flex-col items-center justify-center p-6 px-24 text-center relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1.5 }}
              >
                {/* Mouse Tracking Flashlight Effect */}
                <motion.div 
                  className="fixed inset-0 z-10 pointer-events-none mix-blend-soft-light opacity-50"
                  onMouseMove={(e) => {
                    const { clientX, clientY } = e;
                    const flashlight = document.getElementById('flashlight-mask');
                    if (flashlight) {
                      flashlight.style.background = `radial-gradient(600px at ${clientX}px ${clientY}px, rgba(216, 205, 189, 0.15), transparent 80%)`;
                    }
                  }}
                  id="flashlight-mask"
                />

                {/* Left Vertical Text: Institutional Label */}
                <div className="absolute left-12 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[11px] font-mono tracking-[0.5em] opacity-30 whitespace-nowrap uppercase hidden lg:block hover:opacity-100 transition-opacity cursor-default">
                  Bureau of Deviant Archetypes // Section IV
                </div>

                {/* Main Titles */}
                <div className="space-y-4 mb-12 relative group">
                  <motion.h2 
                    className="text-noir-blood italic text-2xl font-light mb-2 opacity-80 tracking-wide font-serif cursor-default"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    Assessment Archive // 档案记录
                  </motion.h2>
                  
                  <motion.h1 
                    className="text-5xl md:text-9xl font-black tracking-tighter leading-[0.8] text-noir-ink font-serif uppercase cursor-default select-none transition-all duration-700 hover:tracking-[0.12em] hover:text-noir-blood"
                  >
                    <span className="block italic">Femme</span>
                    <span className="block md:-mt-4">Fatale</span>
                    <span className="block text-lg md:text-2xl tracking-[0.4em] font-typewriter mt-4 opacity-50 font-normal">The Dossier</span>
                  </motion.h1>
                  
                  <div className="absolute -top-10 -left-10 w-24 h-24 border border-noir-blood/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 pointer-events-none" />
                  
                  <p className="font-serif text-sm tracking-[0.3em] uppercase mt-6 opacity-60 text-noir-mist group-hover:text-noir-blood transition-colors">
                    《 女 连 环 杀 手 原 型 测 试 》
                  </p>
                </div>

                {/* Descriptive Tagline with interactive highlight */}
                <motion.div 
                  className="max-w-md border-t border-b border-noir-paper/20 py-8 mb-12 relative group"
                  whileHover={{ backgroundColor: 'rgba(139, 0, 0, 0.02)' }}
                >
                  <p className="text-sm md:text-base leading-relaxed md:leading-loose font-typewriter text-noir-mist transition-all duration-500 group-hover:opacity-100">
                    This is not a test. This is a classification.<br/>
                    You will be catalogued. You will be archived.<br/>
                    Answer truthfully. The file knows when you lie.
                  </p>
                  <div className="absolute bottom-1 right-1 font-hand text-[10px] text-noir-blood opacity-0 group-hover:opacity-40 transition-opacity">
                    ( proceed with caution )
                  </div>
                </motion.div>

                {/* Decorative Case File Assets (Scattered) */}
                <div className="relative mb-16 h-80 w-full max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-noir-blood opacity-[0.02] blur-3xl pointer-events-none" />
                  
                  {[
                    { src: '/c6f0d73e-147b-496e-8d58-771ce1ad4053.png', rotate: -6, x: -80, y: 0, z: 10, label: 'FILE-REF-X01' },
                    { src: '/c66733ed-82fc-4bed-88f9-831fa7c1f7af.png', rotate: 4, x: 60, y: 20, z: 20, label: 'FILE-REF-X02' },
                    { src: '/cd85db8a-3cbb-4fe7-9a47-e3d8aa716af3.png', rotate: -2, x: 0, y: -40, z: 30, scale: 1.1, label: 'PRIMARY-SUBJECT' },
                    { src: '/97a7ca15-d6eb-423e-b473-f6d188ff96a4.png', rotate: 8, x: -60, y: 60, z: 15, label: 'FIELD-DATA-009' }
                  ].map((asset, i) => (
                    <motion.div 
                      key={i}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-noir-black p-1 shadow-2xl border border-noir-paper/10 group cursor-crosshair overflow-hidden"
                      style={{ 
                        width: i === 2 ? '180px' : '140px',
                        height: i === 2 ? '240px' : '180px',
                        zIndex: asset.z,
                        x: asset.x,
                        y: asset.y,
                        rotate: asset.rotate,
                        scale: asset.scale || 1
                      }}
                      initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                      animate={{ opacity: 1, scale: asset.scale || 1, rotate: asset.rotate }}
                      transition={{ delay: 0.5 + i * 0.2, type: 'spring', stiffness: 50 }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 0, 
                        zIndex: 100,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <img 
                        src={asset.src} 
                        alt={`Intro Asset ${i}`} 
                        className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-x-0 bottom-0 p-1 bg-gradient-to-t from-noir-black text-[7px] font-mono text-noir-mist/40 text-center uppercase tracking-tighter">
                        {asset.label}
                      </div>
                      <div className="absolute top-0 left-0 w-full h-full border border-noir-paper/5 pointer-events-none" />
                    </motion.div>
                  ))}
                  
                  {/* Decorative lines connecting folders */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 100 100">
                    <path d="M30 50 Q 50 30 70 50" stroke="currentColor" fill="none" strokeWidth="0.2" strokeDasharray="2 2" />
                    <path d="M40 70 Q 50 80 60 70" stroke="currentColor" fill="none" strokeWidth="0.2" strokeDasharray="1 1" />
                  </svg>
                </div>

                {/* Call to Action: The Start Button as a Seal */}
                <div className="relative">
                  <motion.button
                    onClick={startTest}
                    className="group relative px-10 py-4 bg-noir-black/95 text-noir-paper border border-noir-paper/30 hover:border-noir-blood hover:text-noir-blood transition-all duration-500 overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="font-mono text-[10px] tracking-[0.6em] uppercase font-bold relative z-10 transition-colors group-hover:text-noir-blood">Open Folder [ Enter ]</span>
                    
                    {/* Animated background on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-noir-blood opacity-0 group-hover:opacity-5 transition-opacity"
                    />
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-noir-paper group-hover:border-noir-blood transition-colors" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-noir-paper group-hover:border-noir-blood transition-colors" />
                    
                    <div className="absolute -right-4 -top-4 w-12 h-12 rounded-full bg-noir-blood flex items-center justify-center shadow-lg border-2 border-noir-black group-hover:scale-120 group-hover:rotate-12 transition-transform">
                      <ChevronRight className="w-6 h-6 text-white" />
                    </div>
                  </motion.button>
                  
                  {/* Subtle hint text */}
                  <motion.div 
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-typewriter text-[9px] text-noir-mist opacity-0 transition-opacity"
                    animate={{ opacity: [0, 0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                  >
                    Authorization required to access restricted files.
                  </motion.div>
                </div>

                {/* Interactive Red "Confidential" Stamp */}
                <motion.div 
                  className="absolute top-1/2 right-[5%] rotate-[15deg] opacity-20 pointer-events-none hidden xl:block group/stamp"
                  whileHover={{ rotate: 10, scale: 1.1, opacity: 0.6 }}
                >
                  <div className="border-[4px] border-noir-blood px-6 py-2 text-noir-blood font-mono font-black text-4xl tracking-[0.2em] uppercase mix-blend-multiply group-hover/stamp:mix-blend-normal transition-all">
                    Classified
                  </div>
                </motion.div>

                {/* Hidden "Ghost" text that appears only on hover area */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 opacity-0 hover:opacity-10 transition-opacity cursor-default select-none font-mono text-[8px] text-noir-mist max-w-lg text-center">
                  WARNING: SUBJECTS DEPICTED IN THIS ARCHIVE ARE EXTREMELY DANGEROUS. 
                  THE BUREAU TAKES NO RESPONSIBILITY FOR PSYCHOLOGICAL DISTRESS OR OBSESSION.
                </div>
              </motion.div>
            )}
            {view === 'transition' && (
              <MistTransition key="transition" onComplete={() => setView('quiz')} />
            )}

            {view === 'quiz' && (
              <div key="quiz" className="flex-grow flex flex-col justify-center p-6 py-12">
                <QuestionCard
                  question={QUESTIONS[currentQuestion]}
                  currentStep={currentQuestion + 1}
                  totalSteps={QUESTIONS.length}
                  onSelect={onSelectOption}
                  onBack={currentQuestion > 0 ? onBack : undefined}
                />
              </div>
            )}

            {view === 'result' && result && (
              <ResultView key="result" prototype={result} onRestart={reset} />
            )}
          </AnimatePresence>
        </main>

        {/* SHARED FOOTER */}
        {view !== 'opening' && view !== 'transition' && (
          <footer className="p-8 flex flex-col md:flex-row justify-between items-end border-t border-noir-paper/10 gap-8">
            <div className="w-full md:w-1/3 flex flex-col gap-2">
              <div className="flex gap-4">
                <div className="w-1 h-1 bg-noir-blood"></div>
                <div className="w-1 h-1 bg-noir-paper/20"></div>
                <div className="w-1 h-1 bg-noir-paper/20"></div>
              </div>
              <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">
                {view === 'quiz' ? `${QUESTIONS.length - currentQuestion} Nodes Remaining for Classification` : 'System Standby / Ready for Input'}
              </span>
            </div>

            <div className="flex-1 flex justify-center gap-6 md:gap-12">
              {['NOIR', 'GOTHIC', 'DOSSIER'].map((tag) => (
                <div key={tag} className="text-[10px] font-mono opacity-40 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full border border-noir-blood"></span> {tag}
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/3 text-right">
              <p className="text-[9px] font-mono opacity-30 leading-tight uppercase">
                Unauthorized duplication is a criminal offense.<br/>Bureau of Deviant Archetypes © 1948 - 2026
              </p>
            </div>
          </footer>
        )}
      </div>

      {/* Atmospheric Background Icons (Keep existing or update) */}
      <div className="fixed bottom-10 left-10 opacity-5 pointer-events-none z-0">
        <Eye size={120} className="text-noir-mist" />
      </div>
    </div>
  );
}
