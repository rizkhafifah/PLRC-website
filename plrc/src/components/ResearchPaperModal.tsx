import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, Download, Share2, Quote as QuoteIcon, Check, ExternalLink } from 'lucide-react';
import { ResearchPaper } from '../types';

interface ResearchPaperModalProps {
  paper: ResearchPaper | null;
  onClose: () => void;
}

export const ResearchPaperModal: React.FC<ResearchPaperModalProps> = ({ paper, onClose }) => {
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!paper) return null;

  const handleCopyCitation = () => {
    const citation = `${paper.authors.join(', ')} (${paper.publishedDate}). "${paper.title}". Synthesis Review Journal, President University Literature and Research Club. DOI: ${paper.doi || '10.1016/j.plrc.synthesis.2025'}`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 2500);
  };

  const handleDownload = () => {
    if (paper.pdfUrl) {
      const link = document.createElement('a');
      link.href = paper.pdfUrl;
      link.download = paper.pdfFileName || `${paper.id}.pdf`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs font-sans">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 cursor-pointer"
        />

        {/* Modal Window with Paper Texture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#faf8f4] border-2 border-stone-800 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar Header */}
          <div className="bg-stone-900 text-stone-100 px-6 py-4 flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-widest font-bold">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Synthesis Research Archive • Publication View</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-stone-900">
            
            {/* Meta Tags */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300/80 font-bold">
                {paper.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-stone-200 text-stone-700 font-medium">
                {paper.publishedDate}
              </span>
              {paper.publicationStatus && (
                <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold">
                  {paper.publicationStatus}
                </span>
              )}
              {paper.doi && (
                <span className="px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-stone-600">
                  DOI: {paper.doi}
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
              {paper.title}
            </h2>

            {/* Author & Affiliation */}
            <div className="p-4 rounded-2xl bg-white border border-stone-200/90 space-y-1 text-xs sm:text-sm">
              <div className="font-semibold text-stone-900">
                Authors: <span className="text-amber-900 font-bold">{paper.authors.join(', ')}</span>
              </div>
              <div className="text-stone-600 font-mono text-xs">
                Affiliation: {paper.department}
              </div>
            </div>

            {/* Abstract Section */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-widest text-stone-500 font-bold">
                Abstract
              </h4>
              <div className="p-5 rounded-2xl bg-white border border-stone-200/90 font-literary text-sm sm:text-base text-stone-800 leading-relaxed text-justify italic">
                "{paper.abstract}"
              </div>
            </div>

            {/* Publication Metrics */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-center">
                <span className="text-[10px] font-mono uppercase text-stone-500 block">Est. Reading Time</span>
                <span className="text-xs font-mono font-bold text-stone-900">{paper.readTime}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-center">
                <span className="text-[10px] font-mono uppercase text-stone-500 block">Access Status</span>
                <span className="text-xs font-mono font-bold text-emerald-700">Open Access PDF</span>
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="bg-stone-100 p-4 sm:p-5 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleCopyCitation}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white hover:bg-stone-200 border border-stone-300 text-stone-800 text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              {copiedCitation ? <Check className="w-4 h-4 text-emerald-600" /> : <QuoteIcon className="w-4 h-4 text-stone-600" />}
              <span>{copiedCitation ? 'Citation Copied!' : 'Copy APA Citation'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 active:scale-98 text-amber-300 text-xs font-mono font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              {downloadSuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
              <span>{downloadSuccess ? 'Downloaded PDF Manuscript' : 'Download Full Paper (.PDF)'}</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
