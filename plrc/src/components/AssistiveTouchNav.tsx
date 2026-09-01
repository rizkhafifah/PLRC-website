import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  Layers,
  BookOpen,
  Compass,
  Sparkles,
  X,
  Volume2,
  VolumeX,
  BookMarked,
  RotateCcw,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import { PLRCLogo } from './PLRCLogo';
import { PageRoute } from '../types';

interface AssistiveTouchNavProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const AssistiveTouchNav: React.FC<AssistiveTouchNavProps> = ({
  soundEnabled,
  onToggleSound,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showChatPopup, setShowChatPopup] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active route
  const isCoverPage = location.pathname === '/';
  const currentPath = isCoverPage ? 'home' : location.pathname.replace('/', '');

  // Trigger chat popup when on cover page after brief entrance delay, dismiss on page turn
  useEffect(() => {
    const handleDismiss = () => {
      setShowChatPopup(false);
    };

    window.addEventListener('plrc-dismiss-navigator', handleDismiss);

    if (isCoverPage) {
      const timer = setTimeout(() => {
        setShowChatPopup(true);
      }, 1200);
      return () => {
        clearTimeout(timer);
        window.removeEventListener('plrc-dismiss-navigator', handleDismiss);
      };
    } else {
      setShowChatPopup(false);
    }

    return () => {
      window.removeEventListener('plrc-dismiss-navigator', handleDismiss);
    };
  }, [isCoverPage, location.pathname]);

  const navItems = [
    {
      id: 'home',
      label: 'Chapter I',
      sub: 'Get to Know About Literature & Research Club',
      path: '/',
      icon: Home,
      color: 'bg-amber-100 text-amber-900 border-amber-200'
    },
    {
      id: 'cabinet',
      label: 'Chapter II',
      sub: 'Get to know about Synthesis Cabinet',
      path: '/cabinet',
      icon: Layers,
      color: 'bg-stone-100 text-stone-900 border-stone-300'
    },
    {
      id: 'research',
      label: 'Chapter III',
      sub: 'Research and Publications',
      path: '/research',
      icon: BookOpen,
      color: 'bg-sky-100 text-sky-900 border-sky-200'
    },
    {
      id: 'contact',
      label: 'Chapter IV',
      sub: 'Contact and Open to Opportunities',
      path: '/contact',
      icon: Users,
      color: 'bg-emerald-100 text-emerald-900 border-emerald-200'
    }
  ];

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    setShowChatPopup(false);
    navigate(path);
  };

  const handleOpenMenu = () => {
    setShowChatPopup(false);
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Invisible constraint boundary for dragging */}
      <div
        ref={constraintsRef}
        className="fixed inset-4 pointer-events-none z-50 overflow-hidden"
      />

      {/* Expanded Radial / Grid Menu Overlay Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-stone-950/40 backdrop-blur-md z-40 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-[#faf8f5] rounded-3xl p-6 shadow-2xl border border-stone-200/80 relative overflow-hidden"
            >
              {/* Subtle top brand decoration */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-5">
                <div>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-stone-400 block font-sans">
                    PLRC Synthesis Nav
                  </span>
                  <h3 className="font-display text-lg text-stone-900 font-medium">
                    Navigation Menu
                  </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Items Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = currentPath === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.05 }}
                      onClick={() => handleNavigate(item.path)}
                      className={`group relative p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between h-28 cursor-pointer ${
                        isActive
                          ? 'bg-stone-900 text-stone-50 border-stone-900 shadow-md'
                          : 'bg-white hover:bg-stone-100/80 border-stone-200/80 text-stone-800 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                            isActive
                              ? 'bg-stone-800 text-amber-300'
                              : 'bg-stone-100 text-stone-700'
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                        )}
                      </div>

                      <div>
                        <div className="font-medium text-sm leading-tight group-hover:translate-x-0.5 transition-transform">
                          {item.label}
                        </div>
                        <div
                          className={`text-[11px] mt-0.5 font-normal ${
                            isActive ? 'text-stone-300' : 'text-stone-400'
                          }`}
                        >
                          {item.sub}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {/* Utility Action Bar */}
              <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs text-stone-600">
                <button
                  onClick={onToggleSound}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer text-stone-600"
                >
                  {soundEnabled ? (
                    <>
                      <Volume2 className="w-4 h-4 text-emerald-600" />
                      <span>Audio On</span>
                    </>
                  ) : (
                    <>
                      <VolumeX className="w-4 h-4 text-stone-400" />
                      <span>Audio Off</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating iPhone AssistiveTouch Button + Chat Popup Tooltip */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.15}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setTimeout(() => setIsDragging(false), 150)}
        className="fixed top-6 right-5 sm:top-8 sm:right-7 z-50 cursor-grab active:cursor-grabbing touch-none select-none"
      >
        <div className="relative flex items-center justify-end">
          
          {/* Welcoming Interactive Chat Bubble Popup (Ultra Compact in English) */}
          <AnimatePresence>
            {showChatPopup && !isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: 15 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.85, x: 10 }}
                transition={{ type: 'spring', damping: 22, stiffness: 300 }}
                className="absolute right-15 sm:right-16 top-0 w-48 sm:w-52 p-2.5 rounded-xl bg-stone-950 text-stone-100 border border-amber-400/50 shadow-xl pointer-events-auto cursor-default"
              >
                {/* Speech Bubble Arrow Tail */}
                <div className="absolute top-4 -right-1.5 w-0 h-0 border-y-4 border-y-transparent border-l-6 border-l-stone-950" />

                <div className="space-y-1.5">
                  {/* Mini Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-300 font-mono text-[9px] font-bold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Navigator</span>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowChatPopup(false);
                      }}
                      className="w-4 h-4 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Close"
                    >
                      <X className="w-2.5 h-2.5" />
                    </button>
                  </div>

                  {/* Body Text */}
                  <p className="text-[11px] font-sans text-stone-300 leading-snug">
                    Need quick access to chapters or audio tools?
                  </p>

                  {/* Single compact button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenMenu();
                    }}
                    className="w-full py-1 px-2 rounded-md bg-amber-400 hover:bg-amber-300 text-stone-950 font-mono text-[10px] font-bold flex items-center justify-center gap-1 transition-all cursor-pointer shadow-xs active:scale-95"
                  >
                    <span>Open Menu</span>
                    <ChevronRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB Circle Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (!isDragging) {
                handleOpenMenu();
              }
            }}
            aria-label="Open Assistive Touch Navigation Menu"
            className="relative group w-14 h-14 rounded-full bg-stone-950/90 hover:bg-stone-900 backdrop-blur-xl border border-amber-400/50 shadow-2xl flex items-center justify-center transition-all duration-300 p-1 cursor-pointer"
          >
            {/* Inner Assistive Touch Concentric Rings */}
            <span className="absolute inset-0.5 rounded-full border border-amber-300/30 pointer-events-none" />
            
            {/* Inner Glowing Core Logo / Icon */}
            <div className="relative z-10 flex items-center justify-center text-stone-100 w-full h-full">
              {isOpen ? (
                <X className="w-6 h-6 text-amber-300" />
              ) : (
                <PLRCLogo className="w-10 h-10 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)] group-hover:scale-105 transition-transform" size={48} />
              )}
            </div>

            {/* Subtle pulse glow hint when idle */}
            <span className="absolute -inset-1 rounded-full bg-amber-400/25 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};
