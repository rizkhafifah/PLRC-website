import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, FileText, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    department: '',
    category: 'Literature Analysis',
    abstract: '',
    email: '',
    draftLink: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        title: '',
        authors: '',
        department: '',
        category: 'Literature Analysis',
        abstract: '',
        email: '',
        draftLink: ''
      });
    }, 2800);
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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#faf8f4] border-2 border-stone-800 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-stone-900 text-stone-100 px-6 py-4 flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-300 uppercase tracking-widest font-bold">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Call for Papers • Abstract Submission</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8 overflow-y-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center border-2 border-emerald-600 shadow-md">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-stone-900">
                  Manuscript Proposal Received
                </h3>
                <p className="font-literary text-stone-700 text-sm max-w-md mx-auto leading-relaxed italic">
                  "Thank you for submitting your research abstract to the PLRC Synthesis Editorial Board. Our review committee will evaluate your proposal within 5-7 business days."
                </p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-stone-200 text-stone-800 font-mono text-xs">
                  Confirmation sent to {formData.email || 'your email'}
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold block">
                    PLRC Scholarly Repository
                  </span>
                  <h3 className="font-display text-xl font-bold text-stone-900">
                    Submit Abstract for Peer-Review
                  </h3>
                  <p className="text-xs text-stone-600 font-sans">
                    Open to all President University students and collaborative scholars.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                      Paper Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Critical Analysis of Archipelago Narratives"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                        Authors (Separated by comma) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jane Doe, John Smith"
                        value={formData.authors}
                        onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                        Major & Department *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Information Technology | 2025"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                        Research Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 transition-colors"
                      >
                        <option value="Literature Analysis">Literature Analysis</option>
                        <option value="Critical Theory">Critical Theory</option>
                        <option value="Socio-Cultural Studies">Socio-Cultural Studies</option>
                        <option value="Linguistics">Linguistics</option>
                        <option value="Creative Criticism">Creative Criticism</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                        Contact Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@student.president.ac.id"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                      Abstract (150-300 words) *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Outline research background, theoretical framework, methodology, and key analytical findings..."
                      value={formData.abstract}
                      onChange={(e) => setFormData({ ...formData, abstract: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                      Manuscript Drive / PDF Link (Optional)
                    </label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/..."
                      value={formData.draftLink}
                      onChange={(e) => setFormData({ ...formData, draftLink: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-mono font-bold transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 active:scale-98 text-amber-300 text-xs font-mono font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit for Peer Review</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
