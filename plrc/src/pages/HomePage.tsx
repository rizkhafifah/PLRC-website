import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ArrowRight, ArrowLeft, Feather, Compass, Target } from 'lucide-react';
import { PLRCLogo } from '../components/PLRCLogo';
import { Footer } from '../components/Footer';
import { BookPageContainer } from '../components/BookPageContainer';

// Silence all sounds as requested
const playPageFlipSound = () => {};

// Abstractly scattered floating background paper sheets for Cover Page (No rows/grids, lower opacity)
const COVER_PAPERS = [
  { id: 1, left: '5%', top: '8%', width: 44, height: 58, rotation: -28, delay: 0.1, duration: 7.2 },
  { id: 2, left: '82%', top: '10%', width: 36, height: 48, rotation: 42, delay: 0.8, duration: 6.8 },
  { id: 3, left: '16%', top: '76%', width: 48, height: 62, rotation: 15, delay: 1.4, duration: 8.0 },
  { id: 4, left: '88%', top: '65%', width: 40, height: 52, rotation: -22, delay: 0.3, duration: 7.5 },
  { id: 5, left: '4%', top: '46%', width: 52, height: 66, rotation: 65, delay: 1.9, duration: 8.5 },
  { id: 6, left: '74%', top: '84%', width: 42, height: 54, rotation: -38, delay: 0.6, duration: 6.9 },
  { id: 7, left: '30%', top: '12%', width: 34, height: 44, rotation: -12, delay: 2.1, duration: 7.8 },
  { id: 8, left: '64%', top: '6%', width: 46, height: 60, rotation: 28, delay: 1.1, duration: 8.2 },
  { id: 9, left: '12%', top: '28%', width: 38, height: 50, rotation: -48, delay: 0.4, duration: 6.5 },
  { id: 10, left: '86%', top: '38%', width: 50, height: 64, rotation: 20, delay: 1.7, duration: 7.6 },
  { id: 11, left: '26%', top: '88%', width: 36, height: 46, rotation: -18, delay: 2.4, duration: 8.4 },
  { id: 12, left: '52%', top: '90%', width: 44, height: 56, rotation: 35, delay: 0.9, duration: 7.1 },
  { id: 13, left: '7%', top: '82%', width: 40, height: 52, rotation: -55, delay: 1.3, duration: 7.9 },
  { id: 14, left: '78%', top: '24%', width: 48, height: 62, rotation: -10, delay: 2.0, duration: 8.1 },
  { id: 15, left: '44%', top: '5%', width: 38, height: 48, rotation: 18, delay: 0.5, duration: 6.7 },
  { id: 16, left: '92%', top: '86%', width: 42, height: 54, rotation: 50, delay: 1.6, duration: 7.4 },
  { id: 17, left: '22%', top: '52%', width: 36, height: 46, rotation: -32, delay: 2.3, duration: 8.6 },
  { id: 18, left: '68%', top: '48%', width: 46, height: 58, rotation: 38, delay: 1.0, duration: 7.3 },
];

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);

  // Cover Page Animation States
  const [logoCentered, setLogoCentered] = useState(false);
  const [typedPresidentText, setTypedPresidentText] = useState('');
  const [isPresidentTyping, setIsPresidentTyping] = useState(false);
  const [showGlitchClub, setShowGlitchClub] = useState(false);

  // Page 2 Typewriter States
  const [typedTitle, setTypedTitle] = useState('');
  const [isTitleDone, setIsTitleDone] = useState(false);
  const [typedExplanation, setTypedExplanation] = useState('');
  const [isExplanationDone, setIsExplanationDone] = useState(false);

  const fullTitle = "President University Literature and Research Club";
  const fullExplanation = "President University Literature and Research Club (PLRC) serves as the primary academic sanctuary for student publications, critical writing, creative storytelling, and open research at President University. Operating under the Synthesis Cabinet (2026-2027), our organization connects student scholars across all faculties to publish research papers, compile anthologies, and foster intellectual dialogues.";

  // Cover Page Animation Sequence
  useEffect(() => {
    if (currentPage === 1) {
      // Step 1: Logo is immediately ready on center
      setLogoCentered(true);
    }
  }, [currentPage]);

  // Step 2: Once logo is centered on Cover, type out "President University"
  useEffect(() => {
    if (currentPage === 1 && logoCentered && !showGlitchClub) {
      setIsPresidentTyping(true);
      const target = "President University";
      let idx = 0;
      const typingInterval = setInterval(() => {
        idx++;
        if (idx <= target.length) {
          setTypedPresidentText(target.slice(0, idx));
        } else {
          clearInterval(typingInterval);
          setIsPresidentTyping(false);
          // Step 3: Trigger glitch text when typing finishes
          setShowGlitchClub(true);
        }
      }, 40);

      return () => clearInterval(typingInterval);
    }
  }, [currentPage, logoCentered, showGlitchClub]);

  // Typewriter animation for Main Title on Page 2 (starts purely from 0/empty)
  useEffect(() => {
    if (currentPage === 2) {
      setTypedTitle('');
      setIsTitleDone(false);
      setTypedExplanation('');
      setIsExplanationDone(false);

      let idx = 0;
      const interval = setInterval(() => {
        idx++;
        if (idx <= fullTitle.length) {
          setTypedTitle(fullTitle.slice(0, idx));
        } else {
          clearInterval(interval);
          setIsTitleDone(true);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [currentPage]);

  // Typewriter animation for Explanation (starts purely from 0 after title finishes)
  useEffect(() => {
    if (currentPage === 2 && isTitleDone && !isExplanationDone) {
      let idx = 0;
      const interval = setInterval(() => {
        idx++;
        if (idx <= fullExplanation.length) {
          setTypedExplanation(fullExplanation.slice(0, idx));
        } else {
          clearInterval(interval);
          setIsExplanationDone(true);
        }
      }, 10);

      return () => clearInterval(interval);
    }
  }, [currentPage, isTitleDone, isExplanationDone]);

  // Handler to instantly skip all typing & glitch animations
  const handleSkipAnimation = () => {
    // Skip Cover Page (Page 1) animations
    setLogoCentered(true);
    setTypedPresidentText("President University");
    setIsPresidentTyping(false);
    setShowGlitchClub(true);
    // Skip Page 2 typewriter animations
    setTypedTitle(fullTitle);
    setIsTitleDone(true);
    setTypedExplanation(fullExplanation);
    setIsExplanationDone(true);
  };

  // Scroll to top whenever currentPage changes with smooth, natural scrolling
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Fast and lightweight page switcher
  const goToPage = (pageNumber: number) => {
    if (pageNumber === currentPage) return;
    window.dispatchEvent(new CustomEvent('plrc-dismiss-navigator'));
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen text-stone-900 font-sans relative overflow-x-hidden bg-[#f4f1ea] flex flex-col justify-between">
      
      {/* PAGE CONTENT CONTAINER */}
      <AnimatePresence mode="wait">
        
        {/* ==========================================
            PAGE 1: FULL SINGLE PAGE COVER
           ========================================== */}
        {currentPage === 1 && (
          <motion.div
            key="page-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="min-h-screen w-full relative flex flex-col justify-between p-6 sm:p-12 text-white bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(10, 8, 6, 0.85), rgba(18, 14, 10, 0.93)), url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')`
            }}
          >
            {/* Clean, low-overhead background atmosphere (No heavy CPU animation loops) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-25">
              <div className="absolute top-10 left-10 w-28 h-36 bg-amber-100/30 rounded border border-amber-900/20 rotate-[-12deg]" />
              <div className="absolute bottom-16 right-16 w-32 h-44 bg-amber-100/30 rounded border border-amber-900/20 rotate-[15deg]" />
              <div className="absolute top-1/2 left-6 w-24 h-32 bg-amber-100/20 rounded border border-amber-900/15 rotate-[25deg]" />
            </div>

            {/* Top Spacing adjusted for balanced mobile vertical centering */}
            <div className="hidden sm:block h-2" />

            {/* Center Content: Logo + Title + Tagline (Grand, large, perfectly centered on mobile & desktop) */}
            <div className="my-auto py-4 sm:py-8 flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-4 relative z-10 w-full">
              
              {/* Stable, perfectly centered container with generous spacing */}
              <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-10 md:space-y-12 w-full">
                
                {/* Grand Official Logo with calm, elegant scale and fade-in */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-center justify-center mb-1 sm:mb-3"
                >
                  <div
                    className="p-4 sm:p-7 md:p-8 rounded-full bg-stone-950/90 border-2 border-amber-500/70 shadow-[0_0_50px_rgba(245,158,11,0.25)] relative"
                  >
                    <PLRCLogo className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80" size={340} />
                  </div>
                </motion.div>

                {/* Title & Tagline */}
                <div className="space-y-3 sm:space-y-6 w-full">
                  <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] tracking-tight leading-tight sm:leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center font-['Times_New_Roman',Times,serif]">
                    {/* President University */}
                    <span className="text-white font-['Times_New_Roman',Times,serif] font-bold">
                      {typedPresidentText || "President University"}
                      {isPresidentTyping && (
                        <span className="animate-pulse text-amber-400 ml-1 font-mono font-normal">|</span>
                      )}
                    </span>

                    {/* Literature and Research Club (Calm, slow, and graceful Fade & Slide in) */}
                    <AnimatePresence>
                      {showGlitchClub && (
                        <motion.span
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
                          className="text-amber-300 font-['Times_New_Roman',Times,serif] font-bold mt-2 sm:mt-4 drop-shadow-[0_4px_20px_rgba(245,158,11,0.4)] inline-block"
                        >
                          Literature and Research Club
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </h1>
                  
                  {/* TAGLINE: "Integrate Ideas and Synthesize Innovation" (Smooth Delayed Fade-Up Effect) */}
                  <AnimatePresence>
                    {showGlitchClub && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                        className="pt-2 sm:pt-4"
                      >
                        <p className="text-lg sm:text-3xl md:text-4xl lg:text-5xl italic tracking-wide font-['Times_New_Roman',Times,serif] font-normal drop-shadow-md">
                          <span className="text-white font-normal font-['Times_New_Roman',Times,serif]">"Integrate Ideas and </span>
                          <span className="text-yellow-400 font-normal font-['Times_New_Roman',Times,serif]">Synthesize Innovation"</span>
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>

            {/* Bottom Right Section: Compact Symbol-Only "NEXT PAGE" Button */}
            <div className="absolute bottom-4 right-3 sm:bottom-5 sm:right-5 z-30">
              <motion.button
                initial={{ opacity: 0, y: 15, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                onClick={() => goToPage(2)}
                title="Next Page (Chapter I)"
                aria-label="Next Page"
                className="relative group cursor-pointer overflow-hidden rounded-2xl p-[1px] transition-all duration-300 hover:scale-[1.08] active:scale-[0.96] focus:outline-none"
              >
                {/* Glowing Outer Shimmer Gradient Border */}
                <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-200 to-amber-500 rounded-2xl opacity-80 group-hover:opacity-100 transition-opacity" />
                
                {/* Inner Dark Gold Body */}
                <div className="relative p-3 rounded-[15px] bg-stone-950/95 hover:bg-stone-900/95 flex items-center justify-center text-amber-300 border border-amber-300/30 shadow-[0_0_12px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.button>
            </div>

          </motion.div>
        )}

        {/* ==========================================
            PAGE 2: ABOUT PLRC + VISION AND MISSION (CHAPTER I)
           ========================================== */}
        {currentPage === 2 && (
          <motion.div
            key="page-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <BookPageContainer chapterBadge="CHAPTER I">
              
              {/* Page Header matching Chapter II, III, IV styling */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-3xl mx-auto mb-6"
              >
                <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-amber-900 block mb-1">
                  PLRC INSTITUTIONAL PROFILE
                </span>
                <h1 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-1.5">
                  CHAPTER I: GET TO KNOW ABOUT LITERATURE AND RESEARCH CLUB AT PRESIDENT UNIVERSITY
                </h1>
                <div className="w-16 h-[1.5px] bg-stone-800 mx-auto my-2" />
                <p className="font-literary text-sm sm:text-base text-stone-600 leading-relaxed italic text-center">
                  "The primary academic sanctuary for student publications, critical writing, creative storytelling, and open research at President University."
                </p>
              </motion.div>

              {/* Main Content Section */}
              <div className="space-y-6">
                
                <div className="flex flex-col md:flex-row items-center gap-6 border-b border-stone-300 pb-8">
                  <PLRCLogo className="w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0" size={130} />
                  <div className="space-y-2 text-center md:text-left flex-1 justify-center flex flex-col">
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-amber-900 flex items-center gap-2 justify-center md:justify-start">
                      <Feather className="w-4 h-4" />
                      <span>About President University Literature & Research Club</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-tight min-h-[2.5rem]">
                      {typedTitle}
                      {!isTitleDone && (
                        <span className="inline-block w-1.5 h-6 bg-amber-800 ml-1 animate-pulse align-middle" />
                      )}
                    </h2>
                  </div>
                </div>

                {/* About PLRC Prose */}
                <div className="space-y-3">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-600">
                    Organizational Overview:
                  </h3>
                  <div className="font-literary text-lg sm:text-2xl text-stone-900 leading-relaxed border-l-4 border-amber-800 pl-5 py-2 bg-stone-100/60 rounded-r-xl min-h-[5rem]">
                    <p className="italic text-justify">
                      {typedExplanation}
                      {isTitleDone && !isExplanationDone && (
                        <span className="inline-block w-1.5 h-5 bg-amber-800 ml-1 animate-pulse align-middle" />
                      )}
                    </p>
                  </div>
                </div>

                {/* VISION & MISSION */}
                <div className="py-6 border-y border-stone-300 my-8 space-y-8">
                  
                  {/* VISION */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-widest text-amber-900">
                      <Compass className="w-5 h-5 text-amber-800" />
                      <span>VISION</span>
                    </div>
                    <p className="font-literary text-lg sm:text-2xl text-stone-900 leading-relaxed text-justify font-normal">
                      "To become the leading multidisciplinary incubator for student literacy and research at President University, fostering an inclusive and globally competitive ecosystem that nurtures young researchers and championship-winning innovators."
                    </p>
                  </div>

                  {/* MISSION */}
                  <div className="space-y-4 pt-6 border-t border-stone-200">
                    <div className="flex items-center gap-2 text-sm font-mono font-bold uppercase tracking-widest text-amber-900">
                      <Target className="w-5 h-5 text-amber-800" />
                      <span>MISSION</span>
                    </div>
                    
                    <div className="space-y-3.5 font-literary text-lg sm:text-2xl text-stone-900 leading-relaxed font-normal">
                      <div className="grid grid-cols-[28px_1fr] sm:grid-cols-[36px_1fr] gap-x-2 items-baseline">
                        <span className="font-mono text-base sm:text-xl text-amber-900 font-bold select-none">1.</span>
                        <p className="font-normal text-stone-900 text-justify">
                          Improving Literacy Engagement & Digital Accessibility across multidisciplinary domains.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-[28px_1fr] sm:grid-cols-[36px_1fr] gap-x-2 items-baseline">
                        <span className="font-mono text-base sm:text-xl text-amber-900 font-bold select-none">2.</span>
                        <p className="font-normal text-stone-900 text-justify">
                          Providing Multidisciplinary Research Mentorship & Academic Skill Development.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-[28px_1fr] sm:grid-cols-[36px_1fr] gap-x-2 items-baseline">
                        <span className="font-mono text-base sm:text-xl text-amber-900 font-bold select-none">3.</span>
                        <p className="font-normal text-stone-900 text-justify">
                          Preparing Student Researchers for Competitions, Conferences & Academic Publications.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Page Bottom Navigation Buttons */}
              <div className="pt-6 border-t border-stone-300 flex items-center justify-between gap-4">
                <button
                  onClick={() => goToPage(1)}
                  title="Return to Cover (Page 1)"
                  aria-label="Return to Cover (Page 1)"
                  className="p-3.5 sm:px-5 sm:py-3.5 rounded-2xl bg-stone-200 hover:bg-stone-300 active:scale-95 text-stone-800 transition-all flex items-center justify-center cursor-pointer shadow-xs"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('plrc-dismiss-navigator'));
                    navigate('/cabinet');
                  }}
                  title="Next to Chapter II: Get to know about Synthesis Cabinet"
                  aria-label="Next to Chapter II: Get to know about Synthesis Cabinet"
                  className="p-3.5 sm:px-6 sm:py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 active:scale-95 text-amber-300 transition-all flex items-center justify-center shadow-lg cursor-pointer group hover:scale-[1.03]"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </BookPageContainer>
          </motion.div>
        )}

      </AnimatePresence>

      {/* FOOTER (ONLY SHOWN ON PAGE 2 AND SUBSEQUENT PAGES, NOT ON COVER) */}
      {currentPage !== 1 && <Footer />}

    </div>
  );
};

