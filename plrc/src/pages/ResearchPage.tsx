import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Search,
  Download,
  ExternalLink,
  ChevronRight,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  BookMarked,
  CheckCircle2,
  GraduationCap,
  ShieldCheck
} from 'lucide-react';
import { RESEARCH_PAPERS } from '../data/mockData';
import { ResearchPaper } from '../types';
import { BookPageContainer } from '../components/BookPageContainer';
import { ResearchPaperModal } from '../components/ResearchPaperModal';

export const ResearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPaper, setSelectedPaper] = useState<ResearchPaper | null>(null);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  // Filtering by search query only
  const filteredPapers = RESEARCH_PAPERS.filter(paper => {
    return (
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.some(a => a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      paper.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase())) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleDownloadClick = (e: React.MouseEvent, paper: ResearchPaper) => {
    e.stopPropagation();
    if (paper.pdfUrl) {
      const link = document.createElement('a');
      link.href = paper.pdfUrl;
      link.download = paper.pdfFileName || `${paper.id}.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setDownloadNotice(`Downloading: "${paper.title.slice(0, 28)}..." (${paper.pdfFileName || 'PDF'})`);
    setTimeout(() => setDownloadNotice(null), 3500);
  };

  return (
    <BookPageContainer chapterBadge="CHAPTER III">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {downloadNotice && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-2xl bg-stone-900 text-amber-300 border border-amber-500/40 shadow-2xl font-mono text-xs flex items-center gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{downloadNotice}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <ResearchPaperModal
        paper={selectedPaper}
        onClose={() => setSelectedPaper(null)}
      />

      <div className="space-y-10">
        
        {/* Page Header matching Chapter II styling */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-amber-900 block mb-1">
            PLRC SCHOLARLY ARCHIVE
          </span>
          <h1 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-1.5">
            CHAPTER III: RESEARCH AND PUBLICATIONS
          </h1>
          <div className="w-16 h-[1.5px] bg-stone-800 mx-auto my-2" />
          <p className="font-literary text-sm sm:text-base text-stone-600 leading-relaxed italic text-center">
            "A curated repository of peer-reviewed student scholarship, literary criticism, digital humanities research, and interdisciplinary cultural studies authored exclusively by members of the President University Literature & Research Club."
          </p>
        </motion.div>

        {/* Search Bar */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white/70 p-4 rounded-2xl border border-stone-200 shadow-xs backdrop-blur-xs">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80 flex items-center">
              <Search className="absolute left-3.5 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search papers, authors, keywords..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-stone-100/80 border border-stone-300 text-xs font-sans text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-stone-900 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 text-stone-400 hover:text-stone-600 text-xs font-mono cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Result Counter */}
            <div className="text-xs font-mono text-stone-500 font-medium">
              Showing {filteredPapers.length} of {RESEARCH_PAPERS.length} published manuscripts
            </div>
          </div>
        </section>

        {/* Papers Grid */}
        <section className="space-y-6">
          {filteredPapers.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-white/50 border border-stone-300 space-y-3">
              <BookMarked className="w-12 h-12 text-stone-400 mx-auto" />
              <h3 className="font-display text-xl font-bold text-stone-800">
                No matching publications found
              </h3>
              <p className="text-xs font-mono text-stone-500 max-w-sm mx-auto">
                Try adjusting your search query to find published manuscripts.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-2 px-4 py-2 rounded-xl bg-stone-900 text-amber-300 text-xs font-mono font-bold cursor-pointer hover:bg-stone-800 transition-colors"
              >
                Clear Search Query
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPapers.map((paper, idx) => (
                <motion.article
                  key={paper.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setSelectedPaper(paper)}
                  className="p-6 rounded-3xl bg-white/90 border border-stone-200/90 hover:border-amber-800/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:-translate-y-1 relative overflow-hidden"
                >
                  {/* Decorative corner index */}
                  <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none overflow-hidden">
                    <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 rotate-45 bg-amber-100 w-16 h-4 border-b border-amber-300" />
                  </div>

                  <div className="space-y-3.5">
                    {/* Meta Header */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded-md bg-stone-900 text-amber-300 font-bold text-[10px]">
                        {paper.category}
                      </span>
                      <span className="text-stone-500 font-medium text-[11px]">• {paper.publishedDate}</span>
                      {paper.publicationStatus && (
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300 font-semibold text-[10px]">
                          {paper.publicationStatus}
                        </span>
                      )}
                    </div>

                    {/* Paper Title */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-amber-950 transition-colors leading-snug">
                      {paper.title}
                    </h3>

                    {/* Author & Department */}
                    <div className="space-y-0.5 text-xs">
                      <div className="text-stone-900 font-semibold">
                        Authors: <span className="text-amber-900">{paper.authors.join(', ')}</span>
                      </div>
                      <div className="text-stone-500 font-mono text-[11px]">
                        {paper.department}
                      </div>
                    </div>

                    {/* Abstract preview */}
                    <p className="font-literary text-xs sm:text-sm text-stone-700 leading-relaxed italic text-justify line-clamp-3">
                      "{paper.abstract}"
                    </p>
                  </div>

                  {/* Card Footer Info & Buttons */}
                  <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between gap-2 text-xs font-mono">
                    <div className="text-[11px] text-stone-500 flex items-center gap-2">
                      <span>{paper.readTime}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => handleDownloadClick(e, paper)}
                        title="Download PDF"
                        className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-900 transition-colors cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </button>

                      <span className="inline-flex items-center gap-1 text-xs font-bold text-stone-900 group-hover:text-amber-900">
                        <span>Read</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>

        {/* Bottom Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-stone-300 flex items-center justify-between gap-4"
        >
          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('plrc-dismiss-navigator'));
              navigate('/cabinet');
            }}
            title="Return to Chapter II: Get to know about Synthesis Cabinet"
            aria-label="Return to Chapter II: Get to know about Synthesis Cabinet"
            className="p-3.5 sm:px-5 sm:py-3.5 rounded-2xl bg-stone-200 hover:bg-stone-300 active:scale-95 text-stone-800 transition-all flex items-center justify-center cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('plrc-dismiss-navigator'));
              navigate('/contact');
            }}
            title="Next to Chapter IV: Contact and Open to Opportunities"
            aria-label="Next to Chapter IV: Contact and Open to Opportunities"
            className="p-3.5 sm:px-6 sm:py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 active:scale-95 text-amber-300 transition-all flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer group hover:scale-[1.03]"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </BookPageContainer>
  );
};
