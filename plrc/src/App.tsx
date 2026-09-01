import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { LoadingScreen } from './components/LoadingScreen';
import { AssistiveTouchNav } from './components/AssistiveTouchNav';
import { HomePage } from './pages/HomePage';
import { CabinetPage } from './pages/CabinetPage';
import { DivisionsPage } from './pages/DivisionsPage';
import { ResearchPage } from './pages/ResearchPage';
import { ContactPage } from './pages/ContactPage';

// Synthesized audio generator using Web Audio API
export const playSound = (type: 'click' | 'pageFlip' | 'glitch') => {
  try {
    const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    if (type === 'click') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } else if (type === 'pageFlip') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(80, ctx.currentTime + 0.22);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.22);
    }
  } catch {
    // Ignore audio autoplay policy errors
  }
};

const getChapterIndex = (pathname: string) => {
  if (pathname === '/' || pathname === '/home') return 0;
  if (pathname.startsWith('/cabinet') || pathname.startsWith('/divisions') || pathname.startsWith('/synthesis-cabinet')) return 1;
  if (pathname.startsWith('/research')) return 2;
  if (pathname.startsWith('/contact')) return 3;
  return 0;
};

function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);

  const currentIndex = getChapterIndex(location.pathname);
  const prevIndex = getChapterIndex(prevPath);
  const isForward = currentIndex >= prevIndex;

  // Smoothly scroll to the top of the new page on route change and play realistic page turn sound
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (!isLoading && soundEnabled && location.pathname !== prevPath) {
      playSound('pageFlip');
    }
    setPrevPath(location.pathname);
  }, [location.pathname, isLoading, soundEnabled, prevPath]);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.18,
        ease: 'easeIn'
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f4] text-stone-900 relative">
      
      {/* 1. Loading Screen (Applies ONLY ONCE when opening the app) */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen
            onComplete={() => {
              setIsLoading(false);
              if (soundEnabled) playSound('pageFlip');
            }}
          />
        )}
      </AnimatePresence>

      {/* Global Assistive Touch FAB Navigation */}
      {!isLoading && (
        <AssistiveTouchNav
          soundEnabled={soundEnabled}
          onToggleSound={toggleSound}
        />
      )}

      {/* Ultra-lightweight, smooth page transition */}
      {!isLoading && (
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-screen"
          >
            <Routes location={location}>
              
              {/* Chapter I: President University Literature and Research Club */}
              <Route path="/" element={<HomePage />} />
              <Route path="/home" element={<Navigate to="/" replace />} />

              {/* Chapter II: Get to know about Synthesis Cabinet */}
              <Route path="/cabinet" element={<CabinetPage />} />
              <Route path="/divisions" element={<CabinetPage />} />
              <Route path="/synthesis-cabinet" element={<Navigate to="/cabinet" replace />} />

              {/* Chapter III: Research and Publications */}
              <Route path="/research" element={<ResearchPage />} />

              {/* Chapter IV: Contact and Open to Opportunities */}
              <Route path="/contact" element={<ContactPage />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
