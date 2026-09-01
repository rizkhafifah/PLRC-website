import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Feather } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

// 16 Manuscript sheets with slow, graceful, floating tumble
const MANUSCRIPTS = [
  { id: 1, left: '5%', rot: -14, drift: -25, delay: 0.05, duration: 3.2, width: 150, height: 190, section: '§01' },
  { id: 2, left: '13%', rot: 20, drift: 30, delay: 0.25, duration: 3.4, width: 160, height: 200, section: '§09' },
  { id: 3, left: '21%', rot: -16, drift: -18, delay: 0.12, duration: 3.1, width: 145, height: 185, section: '§02' },
  { id: 4, left: '29%', rot: 12, drift: 22, delay: 0.35, duration: 3.3, width: 165, height: 205, section: '§04' },
  { id: 5, left: '37%', rot: -10, drift: -28, delay: 0.18, duration: 3.25, width: 155, height: 195, section: '§03' },
  { id: 6, left: '45%', rot: 22, drift: 25, delay: 0.28, duration: 3.45, width: 170, height: 210, section: '§10' },
  { id: 7, left: '53%', rot: -18, drift: -20, delay: 0.42, duration: 3.3, width: 160, height: 200, section: '§13' },
  { id: 8, left: '61%', rot: 15, drift: 30, delay: 0.1, duration: 3.15, width: 175, height: 215, section: '§14' },
  { id: 9, left: '69%', rot: -20, drift: -24, delay: 0.32, duration: 3.35, width: 155, height: 195, section: '§05' },
  { id: 10, left: '77%', rot: 14, drift: 18, delay: 0.2, duration: 3.2, width: 165, height: 205, section: '§11' },
  { id: 11, left: '85%', rot: -12, drift: -30, delay: 0.26, duration: 3.4, width: 150, height: 190, section: '§06' },
  { id: 12, left: '92%', rot: 18, drift: 22, delay: 0.08, duration: 3.1, width: 145, height: 185, section: '§07' },
  { id: 13, left: '25%', rot: 8, drift: 26, delay: 0.45, duration: 3.35, width: 160, height: 200, section: '§08' },
  { id: 14, left: '49%', rot: -15, drift: -25, delay: 0.5, duration: 3.25, width: 165, height: 205, section: '§15' },
  { id: 15, left: '73%', rot: 16, drift: 28, delay: 0.55, duration: 3.3, width: 155, height: 195, section: '§16' },
  { id: 16, left: '40%', rot: -6, drift: 15, delay: 0.6, duration: 3.15, width: 160, height: 200, section: '§17' },
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [typedTitle, setTypedTitle] = useState('');
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [startFalling, setStartFalling] = useState(false);
  const fullText = "President University Literature and Research Club: Synthesis Cabinet";

  // Step 1: Type out the full text slowly and deliberately
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index <= fullText.length) {
        setTypedTitle(fullText.slice(0, index));
      } else {
        clearInterval(interval);
        setIsTypingDone(true);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Step 2: Once typing completes, pause gently before releasing the papers
  useEffect(() => {
    if (isTypingDone) {
      const dropTimer = setTimeout(() => {
        setStartFalling(true);
      }, 350);

      return () => clearTimeout(dropTimer);
    }
  }, [isTypingDone]);

  // Step 3: When the falling papers reach around mid-screen (~1.5s in slow motion), switch to cover
  useEffect(() => {
    if (startFalling) {
      const completionTimer = setTimeout(() => {
        onComplete();
      }, 1500);

      return () => clearTimeout(completionTimer);
    }
  }, [startFalling, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.35, ease: "easeOut" } 
      }}
      className="fixed inset-0 z-50 bg-[#f7f4ed] text-[#1c1a17] overflow-hidden select-none"
      style={{
        backgroundImage: `radial-gradient(#d8cfbe 1.2px, transparent 1.2px)`,
        backgroundSize: '24px 24px',
      }}
    >
      {/* 1. Center Archive Initialising Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4">
        <div className="flex flex-col items-center text-center space-y-3 max-w-xl">
          <div className="w-14 h-14 rounded-full bg-stone-300/60 border border-stone-400/40 flex items-center justify-center text-stone-600 shadow-sm mb-1 backdrop-blur-xs">
            <BookOpen className="w-6 h-6 text-stone-700/80" />
          </div>

          <div className="flex items-center justify-center gap-1.5 text-stone-500 text-[10px] font-mono tracking-[0.2em] font-semibold uppercase">
            <Feather className="w-3 h-3 text-amber-800" />
            <span>INITIALISING ARCHIVE...</span>
          </div>

          <h2 className="font-serif text-lg sm:text-2xl text-stone-700/80 tracking-tight font-medium">
            {typedTitle}
            {!isTypingDone && (
              <span className="inline-block w-0.5 h-4 sm:h-5 bg-amber-800 ml-1 animate-pulse" />
            )}
          </h2>
        </div>
      </div>

      {/* 2. Cascading Manuscripts Falling Gently and Slowly with Realistic Air Resistance */}
      <AnimatePresence>
        {startFalling && (
          <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
            {MANUSCRIPTS.map((sheet) => (
              <motion.div
                key={sheet.id}
                initial={{
                  y: '-280px',
                  x: 0,
                  opacity: 0,
                  rotate: sheet.rot - 12,
                  scale: 0.92,
                }}
                animate={{
                  y: '125vh',
                  x: [0, sheet.drift, -sheet.drift * 0.4, sheet.drift * 0.2],
                  opacity: [0, 0.95, 1, 0.9, 0],
                  rotate: [sheet.rot - 12, sheet.rot + 8, sheet.rot - 6, sheet.rot + 14],
                  scale: [0.92, 1, 1, 0.96],
                }}
                transition={{
                  duration: sheet.duration,
                  delay: sheet.delay,
                  ease: [0.25, 0.1, 0.25, 1], // Gentle, natural slow float easing
                }}
                style={{
                  position: 'absolute',
                  left: sheet.left,
                  top: 0,
                  width: `${sheet.width}px`,
                  minHeight: `${sheet.height}px`,
                }}
                className="p-3.5 bg-[#faf8f2] border border-[#d6cbba] rounded-xs shadow-[0_10px_28px_rgba(40,30,15,0.12)] flex flex-col justify-between"
              >
                <div className="flex items-center justify-between pb-1 border-b border-stone-300 mb-2">
                  <span className="font-mono text-[8.5px] font-bold text-stone-700 tracking-wider">
                    PLRC MANUSCRIPT
                  </span>
                  <span className="font-mono text-[8.5px] text-amber-900 font-bold">
                    {sheet.section}
                  </span>
                </div>

                <div className="space-y-1.5 flex-1 py-1">
                  <div className="w-full h-1.5 bg-stone-700/60 rounded-full" />
                  <div className="w-[92%] h-1.5 bg-stone-700/50 rounded-full" />
                  <div className="w-[96%] h-1.5 bg-stone-700/55 rounded-full" />
                  <div className="w-[84%] h-1.5 bg-stone-700/45 rounded-full" />
                  <div className="w-[88%] h-1.5 bg-stone-700/50 rounded-full" />
                  <div className="w-[65%] h-1.5 bg-stone-700/40 rounded-full" />
                </div>

                <div className="flex items-center justify-between pt-1.5 border-t border-stone-200 mt-2">
                  <div className="w-10 h-1 bg-amber-900/35 rounded-full" />
                  <div className="w-2.5 h-2.5 rounded-full border border-amber-900/50 bg-amber-800/25" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
