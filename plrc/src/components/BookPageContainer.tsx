import React from 'react';

interface BookPageContainerProps {
  children: React.ReactNode;
  chapterBadge?: string;
  className?: string;
}

export const BookPageContainer: React.FC<BookPageContainerProps> = ({
  children,
  chapterBadge,
  className = '',
}) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto my-2 sm:my-4 px-2 sm:px-4">
      {/* Clean Main Page Sheet with gentle paper styling and light borders */}
      <div className={`bg-[#faf8f0] text-stone-900 border-l-4 sm:border-l-6 border-l-amber-900/90 border border-stone-200 shadow-md rounded-2xl p-5 sm:p-8 md:p-10 relative overflow-hidden min-h-[75vh] flex flex-col justify-between space-y-6 ${className}`}>
        
        {/* Royal Bookmark Ribbon */}
        {chapterBadge && (
          <div className="absolute top-0 right-6 sm:right-10 z-20 pointer-events-none">
            <div className="px-3 py-1.5 bg-stone-900 text-amber-300 shadow-sm rounded-b-lg border-x border-b border-amber-500/40 flex items-center justify-center">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider">
                {chapterBadge}
              </span>
            </div>
          </div>
        )}

        {/* Inner Content */}
        <div className="relative z-10 flex-1 flex flex-col justify-between space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};
