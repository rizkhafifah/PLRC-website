import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Layers, GraduationCap, Sparkles, ShieldCheck } from 'lucide-react';
import { CABINET_INFO, DIVISIONS, BOARD_OF_DIRECTORS } from '../data/mockData';
import { PLRCLogo } from './PLRCLogo';

export const FolderArchive: React.FC = () => {
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);

  return (
    <div className="w-full font-sans select-none space-y-6 pt-0 mt-0">
      
      {/* SECTION 1: PENJELASAN SYNTHESIS CABINET */}
      <section className="space-y-3">
        {/* Cabinet Header with official PLRC Logo */}
        <div className="flex items-center gap-3 border-b border-stone-300 pb-2">
          <div className="p-1.5 rounded-xl bg-stone-950/90 border border-amber-500/50 shadow-md drop-shadow-[0_0_10px_rgba(212,175,55,0.3)] flex-shrink-0">
            <PLRCLogo className="w-10 h-10" size={42} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-800" />
              <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                Synthesis Cabinet
              </h3>
            </div>
            <p className="text-xs font-mono text-amber-900 font-semibold">
              Academic Year {CABINET_INFO.period} • President University
            </p>
          </div>
        </div>

        {/* Motto */}
        <div className="py-2 border-l-3 border-amber-900 pl-3.5 text-amber-950 font-literary italic text-sm sm:text-base leading-relaxed text-justify bg-stone-100/80 rounded-r-xl font-medium">
          "{CABINET_INFO.motto}"
        </div>

        {/* Cabinet Description */}
        <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans text-justify">
          {CABINET_INFO.aboutCabinet}
        </p>

        {/* Board of Directors Profile Section */}
        <div className="pt-3 border-t border-stone-300 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-900 block">
              Board of Directors Profile
            </span>
            <span className="text-[11px] font-mono text-stone-500 font-medium">
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
                  className="p-4 sm:p-5 rounded-2xl bg-white border border-amber-800/25 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 cursor-pointer group"
                >
                  {/* Portrait Photo with Grayscale to Color Interactive Hover */}
                  <div className="relative w-24 h-28 sm:w-28 sm:h-32 rounded-xl overflow-hidden border-2 border-amber-800 shadow-md flex-shrink-0 bg-stone-100">
                    <img
                      src={member.image}
                      alt={member.name}
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

                    <div className="pt-2 flex items-center justify-center sm:justify-start gap-3 text-xs font-mono text-stone-600">
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
        </div>
      </section>

      {/* SECTION 2: ALL WORKING DIVISIONS */}
      <section className="space-y-4 pt-4 border-t-2 border-stone-800">
        <div className="flex items-center justify-between pb-2 border-b border-stone-300">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-stone-900">
            <Layers className="w-4 h-4 text-amber-900" />
            <span>Working Divisions under Synthesis Cabinet (2026-2027)</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-stone-900 text-amber-300 text-xs font-mono font-bold">
            {DIVISIONS.length} Divisions
          </span>
        </div>

        <div className="divide-y divide-stone-300 border-t border-stone-300">
          {DIVISIONS.map((div) => (
            <div
              key={div.id}
              className="py-3.5 first:pt-2.5 last:pb-1 space-y-2 hover:bg-stone-100/40 px-2 rounded-xl transition-all duration-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded bg-stone-900 text-amber-300 font-mono text-xs font-bold shadow-xs">
                    {div.shortCode}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-stone-900">
                    {div.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-stone-800 leading-relaxed font-literary italic text-justify">
                "{div.description}"
              </p>

              <div className="pt-0.5 flex flex-wrap gap-1.5">
                {div.focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-stone-200/80 text-stone-800 text-[11px] font-mono border border-stone-300/80 hover:bg-stone-300/80 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
