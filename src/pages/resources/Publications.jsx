import React, { useState } from "react";
import PdfCards from "../../components/common/PdfCards";
import publicationsData from "../../data/publicationsData";
import PageTemplate from "../../components/common/PageTemplate";
import { BookOpen, FileText, ArrowRight, TrendingUp } from "lucide-react";

/**
 * Publications Component
 * Enhanced with a 2-column hero layout and a functional 'Show More' button.
 * Maintains VyomBiz brand identity.
 */
const Publications = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const data = Array.isArray(publicationsData) ? publicationsData : [];

  const handleLoadMore = () => {
    if (isLoadingMore) return;
    setIsLoadingMore(true);
    // Simulate a network delay for premium feel
    setTimeout(() => {
      setVisibleCount(prev => prev + 6);
      setIsLoadingMore(false);
    }, 800);
  };

  return (
    <PageTemplate title="Publications | VyomBiz">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .smooth-shadow-hover:hover {
          box-shadow: 0 20px 40px -10px rgba(7, 43, 71, 0.15);
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.95; transform: scale(1.02); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>

      <div className="bg-[#f8fafc] min-h-screen font-sans">

        {/* 1. HERO SECTION (2-Column Layout) */}
        <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden bg-gradient-to-b from-[#eef4f8] to-[#f8fafc]">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Left Content */}
              <div className="lg:col-span-7 text-left animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-blue-100 rounded-full text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm hover:scale-105 transition-transform cursor-default">
                  <BookOpen size={14} className="text-[#072b47]" />
                  <span className="text-[#072b47]">Knowledge Hub</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#072b47] leading-[1.1] mb-6 tracking-tight">
                  Expert Industry <br />
                  <span className="relative inline-block mt-2 group">
                    <span className="relative z-10 text-blue-600">Publications.</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 md:h-4 bg-[#FFE90A] -z-10 rounded-sm group-hover:h-full transition-all duration-300 opacity-80"></span>
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                  Deep dives into regulatory frameworks, market analysis, and strategic business reports curated by industry veterans and legal experts.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="#publications-grid" className="bg-[#072b47] hover:bg-[#114a7c] text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-900/20 active:scale-95">
                    Browse Reports
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>

              {/* Right Illustration */}
              <div className="lg:col-span-5 hidden lg:block relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl animate-pulse-slow transition-transform duration-500 hover:scale-[1.02]">
                  <img
                    src="/publications_hero_illustration.png"
                    alt="Research Publications"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. PDF INFO BAR */}
        <section className="bg-white border-y border-slate-100 py-6">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-4">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-500 shadow-sm">
              <FileText size={20} />
            </div>
            <h3 className="text-[#072b47] font-bold text-lg md:text-xl">
              Professional Reports Available in PDF Format
            </h3>
          </div>
        </section>

        {/* 3. PUBLICATIONS GRID */}
        <section className="py-16 bg-[#f8fafc]" id="publications-grid">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#072b47] mb-4">Latest Research Library</h2>
              <div className="w-20 h-1 bg-[#FFE90A] mx-auto rounded-full"></div>
            </div>

            {data.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {data.slice(0, visibleCount).map((card, index) => (
                    <div key={index} className="h-full animate-fade-in-up" style={{ animationDelay: `${(index % 6) * 0.1}s` }}>
                      <PdfCards card={card} />
                    </div>
                  ))}
                </div>

                {visibleCount < data.length && (
                  <div className="mt-20 text-center">
                    <button
                      onClick={handleLoadMore}
                      disabled={isLoadingMore}
                      className={`bg-white border-2 border-slate-200 text-[#072b47] px-12 py-5 rounded-2xl font-black text-sm uppercase transition-all shadow-sm active:scale-95 ${isLoadingMore ? 'opacity-70' : 'hover:border-[#072b47] hover:shadow-md'}`}
                    >
                      {isLoadingMore ? 'Loading Papers...' : 'View More Papers'}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20 text-slate-400">
                <p>Loading the library...</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </PageTemplate>
  );
};

export default Publications;