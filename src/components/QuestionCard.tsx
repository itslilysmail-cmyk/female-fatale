import React from 'react';
import { motion } from 'motion/react';
import { Question } from '../types';
import { ArrowLeft } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  currentStep: number;
  totalSteps: number;
  onSelect: (optionIdx: number) => void;
  onBack?: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentStep,
  totalSteps,
  onSelect,
  onBack
}) => {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-2xl mx-auto"
    >
      {/* Dossier Header for Question */}
      <div className="mb-12 relative p-8 paper-texture dossier-border">
        {question.chapter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="font-typewriter text-[10px] tracking-[0.4em] mb-4 text-noir-mist uppercase"
          >
            {question.chapter}
          </motion.div>
        )}
        <div className="flex items-end gap-4 mb-2">
           <span className="font-hand text-4xl text-noir-blood opacity-80 leading-none -rotate-6">
            #{currentStep}
          </span>
          <div className="h-[2px] flex-grow bg-noir-mist/20 mb-2 dotted-border" />
          <span className="font-mono text-[10px] text-noir-mist mb-1 uppercase tracking-widest">
            folio {currentStep} / {totalSteps}
          </span>
        </div>
        <div className="absolute top-2 right-2 annotation text-[10px] opacity-30">
          Incomplete.
        </div>
      </div>

      {/* Chapter Main Visual */}
      {question.chapterImage && (
        <motion.div 
          className="mb-6 md:mb-10 relative h-40 md:h-64 w-full overflow-hidden dossier-border bg-noir-black p-1 md:p-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <img 
            src={question.chapterImage} 
            alt="Chapter Visual" 
            className="w-full h-full object-cover brightness-90 contrast-110 opacity-90 transition-all duration-700 hover:brightness-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir-black/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 font-mono text-[8px] md:text-[9px] text-noir-mist/60 uppercase tracking-[0.4em] bg-noir-black/80 px-2 py-1">
            Visual Record_REF_{question.id}
          </div>
        </motion.div>
      )}

      {/* Question Text */}
      <div className="mb-6 md:mb-10 min-h-[60px] md:min-h-[80px] flex items-center px-4 relative">
        <div className="absolute left-0 top-0 w-1 h-full bg-noir-blood/20" />
        <h2 className="text-lg md:text-3xl font-serif italic text-noir-paper leading-tight font-light marker-highlight">
          {question.text}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {question.options.map((option, idx) => (
          <motion.button
            key={idx}
            onClick={() => onSelect(idx)}
            whileHover="hover"
            variants={{
              hover: { x: 10 }
            }}
            className="group w-full text-left p-6 border border-noir-paper/20 bg-noir-black/95 hover:bg-noir-blood/10 hover:border-noir-blood transition-all flex items-center gap-6 relative overflow-hidden shadow-sm"
          >
            <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 flex items-center justify-center border border-noir-paper/10 text-noir-mist group-hover:border-noir-blood group-hover:text-noir-blood font-hand text-xl md:text-2xl transition-all relative">
              {String.fromCharCode(65 + idx)}
              
              {/* Flying Crow Animation */}
              <motion.div
                className="absolute pointer-events-none text-noir-blood hidden md:block"
                initial={{ opacity: 0, scale: 0, y: 0, x: 0 }}
                variants={{
                  hover: { 
                    opacity: [0, 1, 0.8, 0],
                    scale: [0.5, 1.2, 1, 0.8],
                    y: [10, -50, -80, -100],
                    x: [0, 10, 30, 50],
                    rotate: [0, -15, 0, 15],
                    transition: { duration: 1.5, ease: "easeOut" }
                  }
                }}
                animate={undefined} // Controlled by group hover
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21,11C21,11 19.5,10.5 18,11C16.5,11.5 15.5,13 14,12.5C12.5,12 12,10.5 11,10.5C10,10.5 8.5,11.5 7.5,12.5C6.5,13.5 6,15.5 6,15.5C6,15.5 7.5,14 9,14.5C10.5,15 11.5,16.5 13,16C14.5,15.5 15,14 16,14C17,14 18.5,14.5 19.5,14.5C20.5,14.5 21,11 21,11M16,9C16,9 15.5,8.5 15,8.5C14.5,8.5 14,9 14,9.5C14,10 14.5,10.5 15,10.5C15.5,10.5 16,10 16,9.5C16,9 16,9 16,9Z" />
                </svg>
              </motion.div>
            </div>
            <span className="text-sm md:text-lg text-noir-paper/70 group-hover:text-noir-paper transition-colors font-serif italic group-hover:marker-highlight">
              {option.text}
            </span>
            <div className="absolute right-4 opacity-0 group-hover:opacity-20 transition-opacity annotation text-sm">
               Selected?
            </div>
          </motion.button>
        ))}
      </div>

      {/* Navigation / Back Button */}
      {onBack && (
        <motion.div 
          className="mt-8 flex justify-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <button
            onClick={onBack}
            className="group flex items-center gap-2 px-4 py-2 border border-noir-paper/10 hover:border-noir-blood/40 text-noir-mist hover:text-noir-blood transition-all font-mono text-[10px] uppercase tracking-widest"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Previous Node // 返回上一题
          </button>
        </motion.div>
      )}

      {/* Decorative Crow on random pages or just progress */}
      <div className="mt-20 flex justify-end opacity-10">
         <span className="font-mono text-[10px] tracking-tighter uppercase whitespace-pre line-clamp-1">
            CLASSIFIED // DO NOT REPRODUCE // CLASSIFIED // DO NOT REPRODUCE
         </span>
      </div>
    </motion.div>
  );
};
