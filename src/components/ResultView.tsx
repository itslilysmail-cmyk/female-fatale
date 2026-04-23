import React from 'react';
import { motion } from 'motion/react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { Prototype } from '../types';
import { FileText, ArrowLeft, RefreshCw, Bookmark, AlertTriangle } from 'lucide-react';

interface ResultViewProps {
  prototype: Prototype;
  onRestart: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ prototype, onRestart }) => {
  const chartData = [
    { subject: 'DOMINANCE', A: prototype.stats.dominance, fullMark: 100 },
    { subject: 'EMPATHY', A: prototype.stats.empathy, fullMark: 100 },
    { subject: 'CALCULATION', A: prototype.stats.calculation, fullMark: 100 },
    { subject: 'IMPULSIVITY', A: prototype.stats.impulsivity, fullMark: 100 },
    { subject: 'NARCISSISM', A: prototype.stats.narcissism, fullMark: 100 },
  ];

  return (
    <motion.div
      className="max-w-4xl mx-auto py-12 px-4 md:px-6 overflow-x-hidden"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      style={{ '--accent-color': prototype.theme.accent } as React.CSSProperties}
    >
      {/* Dossier Card Container */}
      <motion.div 
        className="relative mb-8 md:mb-12 p-6 md:p-10 border border-noir-paper/10 shadow-2xl overflow-hidden group/dossier paper-texture dossier-border" 
        style={{ backgroundColor: prototype.theme.bg }}
        whileHover="hover"
      >
        {/* Archetype Specific Glow */}
        <div className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-1000 group-hover/dossier:opacity-40" 
             style={{ background: `radial-gradient(circle at center, ${prototype.theme.glow} 0%, transparent 70%)` }} />

        {/* Subtle Annotation Top-Left */}
        <div className="absolute top-4 left-10 font-typewriter text-[9px] text-noir-mist uppercase tracking-[0.4em] opacity-30 pointer-events-none">
          Official Document / 官方档案
        </div>

        {/* Hover Wax Seal */}
        <motion.div 
          className="absolute -top-4 -right-4 z-20 pointer-events-none"
          variants={{
            hover: { scale: 1.15, rotate: -8, filter: 'brightness(1.3)' }
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <div className="relative w-28 h-28">
             <div className="absolute inset-0 bg-[#8b0000] rounded-full blur-[0.5px] opacity-95 shadow-xl" 
                  style={{ clipPath: 'polygon(50% 0, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0 50%, 15% 15%)', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)' }} 
             />
             <div className="absolute inset-3 border-2 border-noir-black/30 rounded-full flex items-center justify-center">
                <span className="font-serif text-noir-black/50 text-4xl font-bold select-none">†</span>
             </div>
             <motion.div 
               className="absolute inset-0 bg-noir-blood blur-2xl rounded-full -z-10"
               variants={{ hover: { opacity: 0.5, scale: 1.3 } }}
               initial={{ opacity: 0, scale: 1 }}
             />
          </div>
        </motion.div>

        {/* Header Section */}
        <div className="relative z-10 mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-noir-mist font-mono text-[10px] mb-2 uppercase tracking-[0.2em]">
            <FileText size={12} />
            <span className="text-noir-mist/50">Dossier ID:</span>
            <span className="text-noir-paper">{prototype.id.replace('_', '-')}-99X</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1">
              <h1 className="text-4xl md:text-8xl mb-1 tracking-tighter text-noir-paper uppercase italic leading-[1] md:leading-[0.8] drop-shadow-sm break-words" style={{ color: prototype.theme.accent }}>
                {prototype.titleEn}
              </h1>
              <div className="flex items-baseline gap-4">
                <h2 className="text-2xl md:text-4xl font-serif italic" style={{ color: prototype.theme.accent }}>
                  {prototype.titleZh}
                </h2>
                <div className="circle-mark w-16 md:w-24 h-8 md:h-10 -ml-12 pointer-events-none border-noir-blood/40" />
              </div>
            </div>

            {/* Scrapbook Evidence Photos */}
            <div className="relative h-[320px] md:h-auto md:w-80 md:min-h-[480px] mt-6 md:mt-0">
              {prototype.evidenceImages.map((img, index) => {
                const rotations = [-8, 5, -3];
                const positions = [
                  { top: '0%', left: '0%' },
                  { top: '15%', left: '35%' },
                  { top: '35%', left: '10%' },
                ];
                const rotation = rotations[index % rotations.length];
                const pos = positions[index % positions.length];
                const labels = ['PRIMARY_EXHIBIT', 'FIELD_EVIDENCE_B', 'SUBJECT_SURVEILLANCE'];

                return (
                  <motion.div
                    key={index}
                    className="absolute bg-noir-black p-1 shadow-2xl border border-noir-paper/20 group/evidence cursor-zoom-in"
                    style={{ 
                      width: index === 0 ? '190px' : '160px',
                      rotate: rotation,
                      zIndex: 10 + (prototype.evidenceImages.length - index),
                      ...pos
                    }}
                    initial={{ x: 50, opacity: 0, scale: 0.8 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2, type: 'spring', damping: 15 }}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 0, 
                      zIndex: 100,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                  >
                    <img 
                      src={img} 
                      alt={`Evidence ${index}`} 
                      className="w-full h-auto object-contain grayscale brightness-75 contrast-125 transition-all duration-700 group-hover/evidence:grayscale-0 group-hover/evidence:brightness-100 group-hover/evidence:contrast-100"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Multi-layered tape effect */}
                    <div className="absolute -top-3 left-1/4 w-10 h-6 bg-noir-paper/10 backdrop-blur-[2px] -rotate-12 pointer-events-none skew-x-12" />
                    {index === 1 && <div className="absolute -bottom-2 -right-4 w-14 h-5 bg-noir-paper/15 backdrop-blur-[1px] rotate-45 pointer-events-none" />}
                    
                    <div className="absolute top-0 right-0 p-1 px-2 bg-noir-blood/30 text-[5px] font-mono leading-none tracking-widest uppercase whitespace-nowrap -rotate-45 translate-x-3 translate-y-[-2px] border-b border-noir-blood/20">
                      Archive Verified
                    </div>

                    <div className="absolute bottom-2 left-2 flex flex-col gap-0.5">
                      <span className="font-typewriter text-[7px] text-noir-paper/30 italic uppercase tracking-tighter">
                        {labels[index % labels.length]}
                      </span>
                      <span className="font-mono text-[5px] text-noir-mist opacity-40">
                         TIMESTAMP: {new Date().toLocaleDateString()}
                      </span>
                    </div>

                    {/* Fingerprint or ink smudge overlay on hover */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 relative inline-block p-4 border-l-2" style={{ borderColor: prototype.theme.accent, background: `${prototype.theme.accent}05` }}>
            <p className="text-xl font-serif italic text-noir-mist leading-relaxed">
              "{prototype.tagline}"
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start relative z-10">
          <div className="space-y-10">
            <section className="relative">
              <h3 className="font-typewriter text-[11px] text-noir-mist uppercase tracking-[0.3em] mb-4 border-b pb-1 flex justify-between" style={{ borderColor: `${prototype.theme.accent}33` }}>
                <span style={{ color: prototype.theme.accent }}>Psychographic / 画像分析</span>
                <span className="opacity-50 text-[9px] italic">Verified ✓</span>
              </h3>
              <p className="text-noir-paper leading-relaxed italic text-lg marker-highlight p-2">
                {prototype.interpretation}
              </p>
            </section>

            <section className="relative">
              <h3 className="font-typewriter text-[11px] text-noir-mist uppercase tracking-[0.3em] mb-4 border-b pb-1 flex items-center gap-2" style={{ borderColor: `${prototype.theme.accent}33` }}>
                <FileText size={10} style={{ color: prototype.theme.accent }} />
                Historical Subject / 对应案例: {prototype.characterName}
              </h3>
              <div className="relative group/crime bg-noir-black/40 p-4 md:p-6 border-l-4 overflow-hidden" style={{ borderColor: prototype.theme.accent }}>
                <div className="relative z-10">
                  <div className="font-typewriter text-[10px] opacity-40 mb-3 uppercase tracking-widest">
                    Period: {prototype.characterYears}
                  </div>
                  <p className="text-noir-paper/90 font-serif text-base leading-relaxed whitespace-pre-wrap">
                    {prototype.crimeProfile}
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-2 text-noir-blood opacity-20 rotate-12 scale-110 md:scale-150 pointer-events-none z-0">
                   <AlertTriangle size={48} />
                </div>
              </div>
            </section>
          </div>

          {/* Radar Chart Section */}
          <div className="h-[320px] w-full bg-noir-ash/20 p-4 md:p-6 rounded-sm border border-noir-paper/10 shadow-inner">
             <div className="font-typewriter text-[8px] text-noir-mist mb-2 uppercase text-right tracking-[0.5em]">Statistical Calibration</div>
            <ResponsiveContainer width="100%" height="90%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="rgba(0,0,0,0.1)" strokeDasharray="3 3" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'currentColor', fontSize: 8, fontFamily: 'monospace', opacity: 0.6 }} />
                <Radar
                  name="Archetype"
                  dataKey="A"
                  stroke={prototype.theme.accent}
                  fill={prototype.theme.accent}
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>

      {/* Secondary Info Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div 
          className="p-6 md:p-8 border border-noir-paper/10 bg-noir-ash/30 paper-texture"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="flex items-center gap-2 font-typewriter text-[10px] text-noir-mist uppercase tracking-[0.3em] mb-6">
            <Bookmark size={14} /> Historical References
          </h3>
          <ul className="space-y-4 font-serif italic text-noir-paper/90 text-sm">
            {prototype.references.map((ref, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <span className="text-noir-blood opacity-60 group-hover:opacity-100 transition-opacity">†</span> 
                <span className="border-b border-transparent group-hover:border-noir-blood/20 transition-all">{ref}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="p-6 md:p-8 border border-noir-paper/10 bg-noir-ash/30 flex flex-col justify-center items-center text-center relative overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none scale-125 -rotate-12">
             {/* Decorative Archive Seal SVG Background */}
             <svg viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <circle cx="50" cy="50" r="45" strokeWidth="0.5" />
                <path d="M50 10 L50 90 M10 50 L90 50" strokeWidth="0.2" />
             </svg>
          </div>

          <div className="relative mb-6 z-10 group cursor-help">
            <div className="w-24 h-24 rounded-full border-2 border-noir-paper/10 flex items-center justify-center transition-all duration-700 group-hover:border-noir-blood/40 group-hover:rotate-180">
              <div className="w-16 h-16 rounded-full bg-noir-blood/10 border border-noir-blood/20 flex items-center justify-center">
                 <span className="font-serif text-noir-blood text-3xl opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all">Ω</span>
              </div>
            </div>
            <div className="mt-3 font-typewriter text-[9px] text-noir-blood opacity-40 uppercase tracking-[0.4em]">Archived Case No. 7192</div>
          </div>
          
          <p className="text-[9px] font-mono text-noir-mist/50 uppercase leading-relaxed tracking-wider max-w-[200px]">
            This dossier is the intellectual property of the Anonymous Archive. 
            Redistribution is punishable by silence.
          </p>
        </motion.div>
      </div>

      {/* Action Footer */}
      <motion.div 
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={onRestart}
          className="group relative flex items-center gap-3 px-10 py-4 bg-noir-blood/10 border border-noir-blood/30 hover:bg-noir-blood hover:text-noir-paper transition-all duration-300 font-mono text-xs tracking-[0.3em] uppercase text-noir-blood overflow-hidden"
        >
          <div className="absolute inset-x-0 h-[1px] bg-noir-paper/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left top-0" />
          <RefreshCw size={14} className="group-hover:rotate-180 transition-transform duration-700" />
          <span>Begin New Inquiry / 重新开始审讯</span>
        </button>
        <div className="text-[10px] font-mono text-noir-mist/30 tracking-[0.2em] italic">
          — END OF TRANSMISSION —
        </div>
      </motion.div>
    </motion.div>
  );
};
