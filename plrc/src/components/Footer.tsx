import React from 'react';
import { PLRCLogo } from './PLRCLogo';
import { Feather, Mail, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-stone-900 text-stone-300 pt-10 pb-8 px-6 mt-16 border-t-4 border-amber-800 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-stone-800">
        {/* Col 1: Brand & Logo */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <PLRCLogo className="w-12 h-12" size={50} />
            <div>
              <h4 className="font-display text-base font-bold text-stone-100">
                PLRC Synthesis
              </h4>
              <p className="text-[11px] font-mono text-amber-400">
                President University
              </p>
            </div>
          </div>
          <p className="text-xs text-stone-400 italic leading-relaxed">
            "Integrate ideas and synthesize innovation"
          </p>
        </div>

        {/* Col 2: About / Cabinet */}
        <div className="space-y-2 text-xs">
          <h5 className="font-mono text-amber-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <Feather className="w-3.5 h-3.5" />
            <span>Synthesis Cabinet 2026-2027</span>
          </h5>
          <p className="text-stone-400 leading-relaxed">
            The primary academic sanctuary for student research, publications, and literary excellence at President University.
          </p>
        </div>

        {/* Col 3: Location & Contact */}
        <div className="space-y-2 text-xs font-mono text-stone-400">
          <h5 className="font-mono text-amber-400 font-bold uppercase tracking-wider text-[11px]">
            Location & Contact
          </h5>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-stone-500 shrink-0" />
            <span>President University, Jababeka, Cikarang</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-stone-500 shrink-0" />
            <span>plrc.presidentuniv@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-stone-500 shrink-0" />
            <span>Synthesis Cabinet Archives</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-stone-500">
        <p>© 2026-2027 President University Literature and Research Club. All rights reserved.</p>
        <p className="italic text-amber-500/80">Synthesis Cabinet Edition</p>
      </div>
    </footer>
  );
};
