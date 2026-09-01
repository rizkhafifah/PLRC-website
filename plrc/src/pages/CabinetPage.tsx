import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { CABINET_INFO, DIVISIONS, BOARD_OF_DIRECTORS, CLUB_ADVISOR } from '../data/mockData';
import { BookPageContainer } from '../components/BookPageContainer';
import { PLRCLogo } from '../components/PLRCLogo';
import {
  BookOpen,
  PenTool,
  Library,
  LayoutGrid,
  Globe,
  ChevronDown,
  ChevronUp,
  Layers,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users,
  ArrowLeft,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const CabinetPage: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);
  
  // Selected Division State - null by default, or ID when clicked
  const [selectedDivisionId, setSelectedDivisionId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return BookOpen;
      case 'PenTool': return PenTool;
      case 'Library': return Library;
      case 'LayoutGrid': return LayoutGrid;
      case 'Globe': return Globe;
      case 'Users': return Users;
      case 'Sparkles': return Sparkles;
      case 'GraduationCap': return GraduationCap;
      case 'ShieldCheck': return ShieldCheck;
      default: return BookOpen;
    }
  };

  const handleDivisionClick = (divId: string) => {
    if (selectedDivisionId === divId) {
      setSelectedDivisionId(null); // toggle collapse
    } else {
      setSelectedDivisionId(divId);
    }
  };

  const selectedDivision = DIVISIONS.find((d) => d.id === selectedDivisionId);

  return (
    <div className="min-h-screen bg-[#faf8f4] text-stone-900 pt-4 sm:pt-6 font-sans flex flex-col justify-between">
      <div className="max-w-6xl mx-auto px-2 sm:px-6 w-full pb-6">
        <BookPageContainer chapterBadge="CHAPTER II">
          
          {/* Chapter II Header - Consistent with Chapter I, III, IV */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-6"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-amber-900 block mb-1">
              PLRC SYNTHESIS CABINET (2026–2027)
            </span>
            <h1 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-1.5">
              CHAPTER II: GET TO KNOW ABOUT SYNTHESIS CABINET
            </h1>
            <div className="w-16 h-[1.5px] bg-stone-800 mx-auto my-2" />
            <p className="font-literary text-sm sm:text-base text-stone-600 leading-relaxed italic text-center">
              "Integrate Ideas and Synthesize Innovation — Uniting student leaders, researchers, and creative writers under the Synthesis Cabinet."
            </p>
          </motion.div>

          <div className="space-y-8">
            
            {/* SECTION 1: SYNTHESIS CABINET OVERVIEW */}
            <section className="space-y-4">
              {/* Cabinet Header with official PLRC / Synthesis Cabinet Logo */}
              <div className="flex flex-col sm:flex-row items-center gap-4 border-b border-stone-300 pb-4">
                <div className="p-2.5 rounded-2xl bg-stone-950/90 border border-amber-500/50 shadow-md drop-shadow-[0_0_12px_rgba(212,175,55,0.35)] flex-shrink-0">
                  <PLRCLogo 
                    className="w-12 h-12 sm:w-14 sm:h-14" 
                    size={56} 
                    customSrc="/images/logo/logo-synthesis.png"
                  />
                </div>
                <div className="text-center sm:text-left space-y-1.5 flex flex-col justify-center">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-800" />
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
                      Synthesis Cabinet
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-amber-900 font-semibold tracking-wide">
                    Academic Year {CABINET_INFO.period} • President University
                  </p>
                </div>
              </div>

              {/* Motto Banner */}
              <div className="py-3 border-l-4 border-amber-900 pl-4 text-amber-950 font-literary italic text-base sm:text-lg leading-relaxed text-justify bg-stone-100/90 rounded-r-2xl font-medium">
                "{CABINET_INFO.motto}"
              </div>

              {/* Cabinet Description Narrative */}
              <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-sans text-justify">
                {CABINET_INFO.aboutCabinet}
              </p>
            </section>

            {/* SECTION 2: ADVISOR PROFILE */}
            <section className="pt-6 border-t border-stone-300 space-y-4">
              <div className="flex items-center justify-between pb-1 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-800" />
                  <span>Advisor Profile</span>
                </div>
                <span className="text-xs font-mono text-stone-600 font-semibold">
                  Club Advisor
                </span>
              </div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-amber-800/35 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 cursor-pointer group"
              >
                {/* Portrait Photo with Grayscale to Color Interactive Hover */}
                <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-amber-800 shadow-md flex-shrink-0 bg-stone-100">
                  <img
                    src={CLUB_ADVISOR.image}
                    alt={CLUB_ADVISOR.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                    }}
                    className="w-full h-full object-cover transition-all duration-500 filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white animate-pulse" />
                </div>

                {/* Profile Details */}
                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-stone-900 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                      {CLUB_ADVISOR.role}
                    </span>
                    <span className="text-xs font-mono text-stone-500 font-medium">
                      {CLUB_ADVISOR.affiliation}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                      {CLUB_ADVISOR.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono font-semibold text-amber-900 mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                      <GraduationCap className="w-4 h-4" />
                      <span>{CLUB_ADVISOR.position}</span>
                    </p>
                  </div>

                  <div className="pt-1 flex items-center justify-center sm:justify-start gap-3 text-xs font-mono text-stone-600">
                    <span className="inline-flex items-center gap-1.5 text-stone-800 group-hover:text-amber-900 font-semibold transition-colors">
                      <span>{CLUB_ADVISOR.department}</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* SECTION 3: BOARD OF DIRECTORS PROFILE */}
            <section className="pt-6 border-t border-stone-300 space-y-4">
              <div className="flex items-center justify-between pb-1 border-b border-stone-200">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-amber-900">
                  <GraduationCap className="w-4 h-4 text-amber-800" />
                  <span>Board of Directors Profile</span>
                </div>
                <span className="text-xs font-mono text-stone-600 font-semibold">
                  5 Executive Members
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {BOARD_OF_DIRECTORS.map((member) => {
                  const isHovered = hoveredMemberId === member.id;

                  return (
                    <motion.div
                      key={member.id}
                      onMouseEnter={() => setHoveredMemberId(member.id)}
                      onMouseLeave={() => setHoveredMemberId(null)}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-amber-800/25 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 cursor-pointer group"
                    >
                      {/* Portrait Photo with Grayscale to Color Interactive Hover */}
                      <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-amber-800 shadow-md flex-shrink-0 bg-stone-100">
                        <img
                          src={member.image}
                          alt={member.name}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800";
                          }}
                          className={`w-full h-full object-cover transition-all duration-500 ${
                            isHovered
                              ? 'filter-none scale-105'
                              : 'filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105'
                          }`}
                        />
                        <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white animate-pulse" />
                      </div>

                      {/* Profile Details */}
                      <div className="space-y-2 text-center sm:text-left flex-1">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-stone-900 text-amber-300 text-[10px] font-mono font-bold uppercase tracking-wider">
                            {member.role}
                          </span>
                          <span className="text-xs font-mono text-stone-500 font-medium">
                            President University
                          </span>
                        </div>

                        <div>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-xs sm:text-sm font-mono font-semibold text-amber-900 mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                            <GraduationCap className="w-4 h-4" />
                            <span>{member.major}</span>
                          </p>
                        </div>

                        <div className="pt-1 flex items-center justify-center sm:justify-start gap-3 text-xs font-mono text-stone-600">
                          <span className="inline-flex items-center gap-1.5 text-stone-800 group-hover:text-amber-900 font-semibold transition-colors">
                            <span>{member.role} • Synthesis Cabinet</span>
                            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* SECTION 3: WORKING DIVISIONS UNDER SYNTHESIS CABINET */}
            <section className="pt-8 border-t-2 border-stone-800 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-stone-300">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-stone-900">
                  <Layers className="w-4 h-4 text-amber-900" />
                  <span>Working Divisions under Synthesis Cabinet (2026–2027)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-amber-950 italic">
                    (Click any division to reveal details)
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-stone-900 text-amber-300 text-xs font-mono font-bold">
                    {DIVISIONS.length} Divisions
                  </span>
                </div>
              </div>

              {/* Interactive Divisions List */}
              <div className="space-y-3">
                {DIVISIONS.map((div) => {
                  const Icon = getIcon(div.iconName);
                  const isSelected = selectedDivisionId === div.id;

                  return (
                    <div
                      key={div.id}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isSelected
                          ? 'bg-amber-50/40 border-amber-800/60 shadow-lg ring-1 ring-amber-800/30'
                          : 'bg-white hover:bg-stone-50/80 border-stone-300/80 shadow-xs'
                      }`}
                    >
                      {/* Clickable Division Header Bar */}
                      <button
                        onClick={() => handleDivisionClick(div.id)}
                        className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`p-2.5 rounded-xl transition-colors ${
                            isSelected
                              ? 'bg-stone-900 text-amber-300 shadow-md'
                              : 'bg-stone-100 text-stone-800 group-hover:bg-stone-200'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="px-2 py-0.5 rounded bg-stone-900 text-amber-300 font-mono text-[11px] font-bold">
                                {div.shortCode}
                              </span>
                              <span className="text-xs font-mono text-stone-500">
                                Working Division
                              </span>
                            </div>
                            <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">
                              {div.name}
                            </h3>
                          </div>
                        </div>

                        {/* Expand / Collapse Indicator */}
                        <div className="flex items-center gap-2">
                          <span className="hidden sm:inline text-xs font-mono font-semibold text-amber-900">
                            {isSelected ? 'Hide Details' : 'View Working Division'}
                          </span>
                          <div className={`p-2 rounded-xl border transition-all ${
                            isSelected
                              ? 'bg-stone-900 text-amber-300 border-stone-900'
                              : 'bg-stone-100 text-stone-700 border-stone-200'
                          }`}>
                            {isSelected ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </div>
                      </button>

                      {/* Expanded Working Division Content (Appears ONLY when clicked) */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="border-t border-amber-800/20 bg-white p-5 sm:p-7 space-y-6"
                          >
                            {/* Division Overview */}
                            <div className="space-y-2">
                              <h4 className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold">
                                Division Overview & Mandate
                              </h4>
                              <p className="font-literary text-base sm:text-lg text-stone-900 leading-relaxed bg-stone-50 p-4 rounded-xl border border-stone-200 italic text-justify">
                                "{div.description}"
                              </p>
                            </div>

                            {/* Two-column layout: Flagship Projects & Core Specializations */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                              
                              {/* Left 2 Cols: Key Projects */}
                              <div className="lg:col-span-2 space-y-3">
                                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-700 font-bold">
                                  Key Work Programs & Flagships
                                </h4>
                                <div className="space-y-2.5">
                                  {div.keyProjects.map((proj, idx) => (
                                    <div
                                      key={idx}
                                      className="p-3.5 rounded-xl bg-stone-50/80 border border-stone-200 flex items-start justify-between gap-4 hover:border-amber-700/40 transition-colors"
                                    >
                                      <div>
                                        <div className="font-display text-sm sm:text-base font-bold text-stone-900 mb-0.5">
                                          {proj.title}
                                        </div>
                                        <p className="text-xs text-stone-600 font-sans">
                                          {proj.desc}
                                        </p>
                                      </div>
                                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold shrink-0 ${
                                        proj.status === 'Published'
                                          ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                                          : proj.status === 'Ongoing'
                                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                          : 'bg-stone-200 text-stone-800 border border-stone-300'
                                      }`}>
                                        {proj.status}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Right Col: Focus Areas */}
                              <div className="space-y-3">
                                <h4 className="text-xs font-mono uppercase tracking-wider text-stone-700 font-bold">
                                  Core Specializations
                                </h4>
                                <div className="p-4 rounded-xl bg-amber-50/30 border border-amber-800/20 space-y-2.5">
                                  <ul className="space-y-2">
                                    {div.focusAreas.map((area, idx) => (
                                      <li key={idx} className="flex items-start gap-2 text-xs text-stone-800 leading-snug font-sans">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-800 shrink-0 mt-0.5" />
                                        <span>{area}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </section>

          </div>

          {/* PAGE NAVIGATION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 pt-6 border-t border-stone-300 flex items-center justify-between gap-4"
          >
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('plrc-dismiss-navigator'));
                navigate('/');
              }}
              title="Return to Chapter I: President University Literature & Research Club"
              aria-label="Return to Chapter I: President University Literature & Research Club"
              className="p-3.5 sm:px-5 sm:py-3.5 rounded-2xl bg-stone-200 hover:bg-stone-300 active:scale-95 text-stone-800 transition-all flex items-center justify-center cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('plrc-dismiss-navigator'));
                navigate('/research');
              }}
              title="Next to Chapter III: Research and Publications"
              aria-label="Next to Chapter III: Research and Publications"
              className="p-3.5 sm:px-6 sm:py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 active:scale-95 text-amber-300 transition-all flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer group hover:scale-[1.03]"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </BookPageContainer>
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};
