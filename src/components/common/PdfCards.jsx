import React from "react";
import { useNavigate } from "react-router-dom";
import { Download, FileText, ArrowRight } from "lucide-react";

/**
 * PdfCards Component
 * Display individual newsletter/publication issues with a professional SaaS aesthetic.
 * Refined for visual rhythm, interaction, and brand consistency.
 */
const PdfCards = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div className="group h-full bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_-12px_rgba(7,43,71,0.15)] border border-slate-100 flex flex-col transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-t-3xl">
        {card.image ? (
          <>
            <img
              src={card.image}
              alt={card.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1586282391129-59a998fd03d0?auto=format&fit=crop&w=800&q=80";
              }}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Subtle Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#072b47]/20 to-transparent opacity-60"></div>
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#072b47] to-[#114a7c] flex items-center justify-center">
            <FileText size={48} className="text-white/20" />
          </div>
        )}

        {/* Date Badge - Lighter and Integrated */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FFE90A]"></span>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#072b47]">
            {card.date.replace("Published on ", "")}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-7 flex flex-col flex-grow">
        {/* Title - Consistent 2-line clamp */}
        <h3 className="font-extrabold text-[1.15rem] leading-[1.4] text-[#072b47] mb-3 transition-colors group-hover:text-blue-600 line-clamp-2 min-h-[2.8rem]">
          {card.title}
        </h3>

        {/* Description - Consistent 3-line clamp */}
        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3 font-medium">
          {card.desc}
        </p>

        {/* Action Area - Visual Hierarchy */}
        <div className="flex items-center gap-3 pt-6 border-t border-slate-50 mt-auto">
          <button
            onClick={() => navigate('/pending')}
            className="flex-[3] bg-[#072b47] hover:bg-[#114a7c] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-md hover:shadow-lg shadow-blue-900/10 group/btn-dl">
            <Download size={18} className="group-hover/btn-dl:animate-pulse" />
            <span className="text-sm">Download</span>
          </button>

          <button
            onClick={() => navigate('/pending')}
            className="flex-[1] h-[52px] border-2 border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#072b47] hover:border-[#FFE90A] hover:bg-[#FFE90A]/5 transition-all group/arrow">
            <ArrowRight size={20} className="group-hover/arrow:translate-x-1.5 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfCards;
