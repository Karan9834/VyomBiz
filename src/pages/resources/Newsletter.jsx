import React, { useState } from "react";
import PageTemplate from "../../components/common/PageTemplate";
import pdfCards from "../../data/newsletterData.js";
import PdfCards from "../../components/common/PdfCards";
import { Mail, Bell, ShieldCheck, ArrowRight, TrendingUp, Users, CheckCircle2, Zap, Rocket, User, RefreshCw } from "lucide-react";

/**
 * Newsletter Component
 * Simplified version to ensure visibility and restore functionality.
 */
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [isValidating, setIsValidating] = useState(false);

  // Pagination / View More State
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Safety check for data
  const data = Array.isArray(pdfCards) ? pdfCards : [];

  if (data.length === 0) {
    return (
      <PageTemplate title="Newsletter | VyomBiz">
        <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
          <div className="text-center">
            <RefreshCw className="animate-spin mx-auto mb-4 text-[#072b47]" size={32} />
            <p className="text-slate-500 font-medium">Loading insights...</p>
          </div>
        </div>
      </PageTemplate>
    );
  }

  const latestNewsletter = data[0];
  const otherNewsletters = data.slice(1);

  const validateEmail = (val) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) {
      setEmailError("");
    } else if (!re.test(val)) {
      setEmailError("Please enter a valid business email");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setEmail(val);
    setIsValidating(true);
    setTimeout(() => {
      validateEmail(val);
      setIsValidating(false);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);
    if (email && !emailError) {
      setIsSubscribed(true);
    }
  };

  const handleLoadMore = () => {
    if (isLoadingMore) return;
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 6);
      setIsLoadingMore(false);
    }, 800);
  };

  return (
    <PageTemplate title="Newsletter | VyomBiz">
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
      `}</style>

      <div className="bg-[#f8fafc] min-h-screen font-sans">

        {/* 1. HERO SECTION */}
        <section className="relative pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden bg-gradient-to-b from-[#eef4f8] to-[#f8fafc]">
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 text-left animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-blue-100 rounded-full text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm hover:scale-105 transition-transform cursor-default">
                  <Bell size={14} className="text-[#072b47]" />
                  <span className="text-[#072b47]">VyomBiz Insider</span>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#072b47] leading-[1.1] mb-6 tracking-tight">
                  Insights that help your business <br />
                  <span className="relative inline-block mt-2 group">
                    <span className="relative z-10 text-blue-600">grow.</span>
                    <span className="absolute bottom-2 left-0 w-full h-3 md:h-4 bg-[#FFE90A] -z-10 rounded-sm group-hover:h-full transition-all duration-300 opacity-80"></span>
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
                  Join 10,000+ founders receiving weekly intelligence on regulatory changes, business scaling strategies, and legal compliance.
                </p>

                {!isSubscribed ? (
                  <div className="relative max-w-2xl">
                    <form onSubmit={handleSubmit} className={`hidden md:flex items-center gap-3 p-2 bg-white rounded-2xl shadow-xl shadow-blue-900/5 border transition-all duration-300 ${emailError ? 'border-red-200 ring-2 ring-red-50' : 'border-slate-100 focus-within:ring-4 focus-within:ring-blue-500/10 focus-within:border-blue-200'}`}>
                      <div className="relative flex-1">
                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${emailError ? 'text-red-400' : 'text-slate-400'}`} size={18} />
                        <input
                          type="email"
                          required
                          placeholder="Work email address"
                          value={email}
                          onChange={handleEmailChange}
                          className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none text-slate-700 font-medium placeholder:text-slate-400 bg-transparent"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isValidating}
                        className="bg-[#072b47] hover:bg-[#114a7c] text-white px-8 py-4 rounded-xl font-bold text-base transition-all flex items-center gap-2 group shadow-lg shadow-[#072b47]/20 active:scale-95 disabled:opacity-70"
                      >
                        {isValidating ? <RefreshCw size={18} className="animate-spin" /> : 'Subscribe Free'}
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                    {emailError && <p className="absolute -bottom-7 left-4 text-red-500 text-xs font-bold">{emailError}</p>}
                  </div>
                ) : (
                  <div className="hidden md:flex items-center gap-3 p-4 bg-green-50 border border-green-100 rounded-2xl max-w-xl animate-in fade-in zoom-in duration-500">
                    <CheckCircle2 className="text-green-500" size={24} />
                    <span className="text-green-800 font-bold">Successfully joined! Watch your inbox for a confirmation.</span>
                  </div>
                )}

              </div>

              <div className="lg:col-span-5 hidden lg:block relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <img src="/newsletter_hero_illustration.png" alt="Business Growth Insights" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* 6. ARCHIVE */}
        <section className="pt-8 pb-24 bg-[#f8fafc]" id="archive-grid">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#072b47] mb-6">Explore the Archive</h2>
              <div className="w-24 h-1 bg-[#FFE90A] mx-auto rounded-full mb-6"></div>
              <p className="text-slate-500 font-bold text-lg max-w-2xl mx-auto">Past insights and deep dives.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {otherNewsletters.slice(0, visibleCount).map((card, index) => (
                <div key={index} className="h-full">
                  <PdfCards card={card} />
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <button
                onClick={handleLoadMore}
                disabled={isLoadingMore || visibleCount >= otherNewsletters.length}
                className={`bg-white border-2 border-slate-200 text-[#072b47] px-12 py-5 rounded-2xl font-black text-sm uppercase transition-all shadow-sm active:scale-95 ${isLoadingMore ? 'opacity-70' : 'hover:border-[#072b47]'}`}
              >
                {isLoadingMore ? 'Loading...' : 'View More Issues'}
              </button>
            </div>
          </div>
        </section>


      </div>
    </PageTemplate>
  );
};

export default Newsletter;
