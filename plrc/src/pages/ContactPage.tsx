import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Instagram,
  MapPin,
  Send,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  MessageSquare,
  Handshake,
  Building2,
  ArrowLeft,
  ArrowRight,
  UploadCloud,
  FileText,
  X,
  Copy,
  Check,
  Paperclip,
  Sparkles
} from 'lucide-react';
import { BookPageContainer } from '../components/BookPageContainer';
import { SOCIAL_LINKS, OPPORTUNITY_ITEMS } from '../data/mockData';

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [formState, setFormState] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    topic: 'Research Collaboration',
    message: ''
  });

  const [attachedFile, setAttachedFile] = useState<{
    name: string;
    size: number;
    formattedSize: string;
  } | null>(null);

  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedState, setCopiedState] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState<string | null>(null);
  
  // Submission success & preview state
  const [submittedModalData, setSubmittedModalData] = useState<{
    name: string;
    institution: string;
    email: string;
    phone: string;
    topic: string;
    message: string;
    fileName?: string;
    formattedSize?: string;
    mailtoUrl: string;
    emailBodyText: string;
  } | null>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const handleFileSelect = (file: File) => {
    setAttachedFile({
      name: file.name,
      size: file.size,
      formattedSize: formatFileSize(file.size)
    });
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailSubject = `[PLRC Collaboration] ${formState.topic} - ${formState.name} (${formState.institution})`;
    
    const emailBodyText = `Dear President University Literature & Research Club (PLRC) Executive Board,

I would like to submit a formal collaboration proposal / inquiry with the following details:

--- INQUIRER DETAILS ---
• Name / Contact Person: ${formState.name}
• University / Organization: ${formState.institution}
• Email Address: ${formState.email}
• WhatsApp / Phone: ${formState.phone ? formState.phone : 'Not specified'}

--- INQUIRY TOPIC ---
• Category / Track: ${formState.topic}

--- SUPPORTING DOCUMENT (OPTIONAL) ---
• Attached File Reference: ${attachedFile ? `${attachedFile.name} (${attachedFile.formattedSize})` : 'None (No document attached)'}

--- COLLABORATION PROPOSAL / MESSAGE ---
${formState.message}

--------------------------------------------------
Sent via President University Literature & Research Club (PLRC) Digital Portal
Recipient: plrc.presidentuniv@gmail.com`;

    const mailtoUrl = `mailto:plrc.presidentuniv@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBodyText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedModalData({
        name: formState.name,
        institution: formState.institution,
        email: formState.email,
        phone: formState.phone,
        topic: formState.topic,
        message: formState.message,
        fileName: attachedFile?.name,
        formattedSize: attachedFile?.formattedSize,
        mailtoUrl,
        emailBodyText
      });

      // Try triggering mailto client
      window.location.href = mailtoUrl;

      // Reset form
      setFormState({
        name: '',
        institution: '',
        email: '',
        phone: '',
        topic: 'Research Collaboration',
        message: ''
      });
      setAttachedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 600);
  };

  const handleCopyMessage = () => {
    if (submittedModalData) {
      navigator.clipboard.writeText(submittedModalData.emailBodyText);
      setCopiedState(true);
      setTimeout(() => setCopiedState(false), 3000);
    }
  };

  const selectOpportunityForForm = (title: string) => {
    setSelectedOpportunity(title);
    setFormState(prev => ({ ...prev, topic: title }));
    const formElement = document.getElementById('inquiry-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BookPageContainer chapterBadge="CHAPTER IV">
      
      <div className="space-y-10">
        
        {/* Page Header matching Chapter II styling */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-amber-900 block mb-1">
            PLRC COLLABORATION & ENGAGEMENT
          </span>
          <h1 className="font-display text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-1.5">
            CHAPTER IV: CONTACT AND OPEN TO OPPORTUNITIES
          </h1>
          <div className="w-16 h-[1.5px] bg-stone-800 mx-auto my-2" />
          <p className="font-literary text-sm sm:text-base text-stone-600 leading-relaxed italic text-center">
            "President University Literature and Research Club is actively open to academic collaborations, institutional partnerships, guest lectures, event sponsorships, and joint publications with student organizations and scholarly institutions worldwide."
          </p>
        </motion.div>

        {/* PRIMARY CHANNELS: INSTAGRAM, EMAIL, CAMPUS ADDRESS ONLY */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-900">
              Official Communication Channels
            </h2>
            <span className="text-[11px] font-mono text-stone-500">
              President University Campus
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Instagram */}
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-3xl bg-white/90 border border-stone-200/90 hover:border-amber-800/40 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-700 flex items-center justify-center border border-pink-200">
                  <Instagram className="w-5 h-5" />
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-stone-700 transition-colors" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 font-semibold">Official Instagram</div>
                <div className="font-display text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
                  {SOCIAL_LINKS.instagramHandle}
                </div>
                <p className="text-xs text-stone-600 font-sans mt-1">
                  Updates, book reviews, events & announcements.
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="p-5 rounded-3xl bg-white/90 border border-stone-200/90 hover:border-amber-800/40 shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center border border-amber-200">
                  <Mail className="w-5 h-5" />
                </div>
                <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-stone-700 transition-colors" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 font-semibold">Club Email</div>
                <div className="font-display text-lg font-bold text-stone-900 group-hover:text-amber-900 transition-colors break-all">
                  {SOCIAL_LINKS.email}
                </div>
                <p className="text-xs text-stone-600 font-sans mt-1">
                  Official correspondence & manuscript queries.
                </p>
              </div>
            </a>

            {/* Location / Campus Address */}
            <div className="p-5 rounded-3xl bg-white/90 border border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center border border-emerald-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <Building2 className="w-4 h-4 text-stone-400" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase text-stone-500 font-semibold">Campus Address</div>
                <div className="font-display text-base font-bold text-stone-900">
                  President University
                </div>
                <p className="text-xs text-stone-600 font-sans mt-1">
                  Jl. Ki Hajar Dewantara, Jababeka, Cikarang.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* OPEN TO OPPORTUNITIES GRID */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-amber-900">
              Open Opportunities & Collaboration Tracks
            </h2>
            <span className="text-[11px] font-mono text-stone-500">
              Period 2026 - 2027
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPPORTUNITY_ITEMS.map((opp) => (
              <div
                key={opp.id}
                className="p-6 rounded-3xl bg-white/90 border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-stone-900 text-amber-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                      {opp.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-700">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{opp.status}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-stone-900">
                    {opp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans text-justify">
                    {opp.description}
                  </p>

                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-mono font-bold text-stone-500 uppercase">
                      Prerequisites:
                    </span>
                    <ul className="text-xs font-mono text-stone-700 space-y-1 list-disc list-inside">
                      {opp.requirements.map((req, i) => (
                        <li key={i} className="leading-snug">{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-500">
                    Inquire via email
                  </span>
                  <button
                    onClick={() => selectOpportunityForForm(opp.title)}
                    className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INQUIRY & COLLABORATION FORM */}
        <section id="inquiry-form-section" className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-stone-800 shadow-xl space-y-6">
          <div className="space-y-1 border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] font-mono font-bold uppercase tracking-wider">
              <MessageSquare className="w-3 h-3" />
              <span>Direct Inquiry Desk</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-stone-900">
              Send a Collaboration Proposal or Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-sans">
              Fill out the details below, and our Executive Board will get back to you promptly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                  Full Name / Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Prof. / Dr. / Scholar Name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                  University / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Universitas Indonesia / Media Partner"
                  value={formState.institution}
                  onChange={(e) => setFormState({ ...formState, institution: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@organization.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+62 812-xxxx-xxxx"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                  Inquiry Topic *
                </label>
                <select
                  value={formState.topic}
                  onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 focus:bg-white transition-all"
                >
                  <option value="Research Collaboration">Research Collaboration</option>
                  <option value="Event Sponsorship">Event Sponsorship</option>
                  <option value="Speaker / Workshop Invitation">Speaker / Workshop Invitation</option>
                  <option value="Call for Papers / Anthology">Call for Papers / Anthology</option>
                  <option value="General Club Inquiry">General Club Inquiry</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-stone-700 mb-1">
                Collaboration Proposal / Message Details *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Explain the background of your proposal, proposed timelines, and target objectives..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-300 text-xs font-sans text-stone-900 focus:outline-hidden focus:border-stone-900 focus:bg-white transition-all resize-none"
              />
            </div>

            {/* Optional Document Upload Box */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="block text-xs font-mono font-bold text-stone-700">
                  Supporting Proposal Document <span className="text-stone-500 font-normal">(Optional)</span>
                </label>
                <span className="text-[11px] font-mono text-stone-500">
                  PDF, DOCX, ZIP (Max 15MB)
                </span>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,.zip,.png,.jpg,.jpeg"
                onChange={handleFileInputChange}
                className="hidden"
                id="collaboration-file-upload"
              />

              {!attachedFile ? (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`p-4 rounded-2xl border-2 border-dashed transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-1.5 ${
                    isDragOver
                      ? 'border-amber-700 bg-amber-50/80 text-amber-900'
                      : 'border-stone-300 bg-stone-50 hover:bg-stone-100/80 text-stone-600'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-stone-200 shadow-xs flex items-center justify-center text-stone-700">
                    <UploadCloud className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-mono">
                    <span className="font-bold text-stone-900 underline decoration-amber-600 underline-offset-2">Click to browse file</span> or drag & drop here
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Attach proposal pitch decks, letters of intent, or terms of reference.
                  </p>
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-300/80 flex items-center justify-between gap-3 shadow-xs">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className="w-8 h-8 rounded-xl bg-stone-900 text-amber-300 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-mono font-bold text-stone-900 truncate">
                        {attachedFile.name}
                      </div>
                      <div className="text-[11px] font-mono text-stone-500">
                        {attachedFile.formattedSize} • Ready to be referenced in email
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="p-1.5 rounded-lg bg-white hover:bg-rose-50 text-stone-500 hover:text-rose-600 border border-stone-200 transition-colors cursor-pointer"
                    title="Remove attached document"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs font-mono text-stone-500 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-800" />
                <span>Dispatches directly to: <strong className="text-stone-800">plrc.presidentuniv@gmail.com</strong></span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 active:scale-98 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Preparing Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit & Send to plrc.presidentuniv@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </section>

        {/* SUBMISSION CONFIRMATION MODAL & DIRECT EMAIL DISPATCH */}
        <AnimatePresence>
          {submittedModalData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
              onClick={() => setSubmittedModalData(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#faf8f4] border-2 border-stone-800 rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-5 text-stone-900 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-start justify-between gap-4 border-b border-stone-300 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-900">
                        Proposal Form Dispatched
                      </span>
                      <h3 className="font-display text-xl font-bold text-stone-900">
                        Ready to Send to PLRC Gmail
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setSubmittedModalData(null)}
                    className="p-2 rounded-xl bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2 text-xs font-mono">
                  <div className="flex justify-between border-b border-stone-100 pb-1.5">
                    <span className="text-stone-500">Destination Email:</span>
                    <strong className="text-stone-900 text-amber-950 font-bold">plrc.presidentuniv@gmail.com</strong>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-1.5">
                    <span className="text-stone-500">Inquirer:</span>
                    <span className="text-stone-900 font-semibold">{submittedModalData.name} ({submittedModalData.institution})</span>
                  </div>
                  <div className="flex justify-between border-b border-stone-100 pb-1.5">
                    <span className="text-stone-500">Topic:</span>
                    <span className="text-stone-900">{submittedModalData.topic}</span>
                  </div>
                  {submittedModalData.fileName && (
                    <div className="flex justify-between border-b border-stone-100 pb-1.5">
                      <span className="text-stone-500">Attached File:</span>
                      <span className="text-amber-900 font-bold">{submittedModalData.fileName} ({submittedModalData.formattedSize})</span>
                    </div>
                  )}
                </div>

                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  Your collaboration message has been formatted. If your email app did not open automatically, you can open it directly or copy the formatted text below to paste into your Gmail/Webmail.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={submittedModalData.mailtoUrl}
                    className="flex-1 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 active:scale-98 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all text-center"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Email App</span>
                  </a>

                  <button
                    onClick={handleCopyMessage}
                    className="flex-1 py-3 px-4 rounded-xl bg-stone-200 hover:bg-stone-300 active:scale-98 text-stone-900 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {copiedState ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span className="text-emerald-700">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Message Text</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
              navigate('/research');
            }}
            title="Return to Chapter III: Research and Publications"
            aria-label="Return to Chapter III: Research and Publications"
            className="p-3.5 sm:px-5 sm:py-3.5 rounded-2xl bg-stone-200 hover:bg-stone-300 active:scale-95 text-stone-800 transition-all flex items-center justify-center cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => {
              window.dispatchEvent(new CustomEvent('plrc-dismiss-navigator'));
              navigate('/');
            }}
            title="Return to Chapter I: President University Literature & Research Club"
            aria-label="Return to Chapter I: President University Literature & Research Club"
            className="p-3.5 sm:px-6 sm:py-4 rounded-2xl bg-stone-900 hover:bg-stone-800 active:scale-95 text-amber-300 transition-all flex items-center justify-center shadow-lg hover:shadow-xl cursor-pointer group hover:scale-[1.03]"
          >
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </BookPageContainer>
  );
};
