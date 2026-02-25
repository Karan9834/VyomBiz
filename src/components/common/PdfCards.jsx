
import React from "react";
import { Download, FileText, ArrowRight } from "lucide-react";

/**
 * PdfCards Component
 * Display individual newsletter issues with a premium look.
 */
const PdfCards = ({ card }) => {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(7,43,71,0.12)] border border-slate-100 flex flex-col transition-all duration-500 hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {card.image ? (
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#072b47] to-[#114a7c] flex items-center justify-center">
            <FileText size={48} className="text-white/20" />
          </div>
        )}

        {/* Date Badge with Yellow Accent */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border-l-4 border-[#FFE90A]">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#072b47]">
            {card.date.replace("Published on ", "")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="font-extrabold text-lg text-[#072b47] leading-tight mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
          {card.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3 font-medium">
          {card.desc}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="flex-1 bg-slate-50 hover:bg-[#072b47] border border-slate-100 hover:border-[#072b47] text-[#072b47] hover:text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 group/btn-dl">
            <Download size={18} className="group-hover/btn-dl:animate-bounce" />
            <span>Download</span>
          </button>

          <button className="w-12 h-12 border-2 border-slate-100 rounded-xl flex items-center justify-center text-slate-400 hover:text-[#072b47] hover:border-[#FFE90A] hover:bg-[#FFE90A]/5 transition-all group/btn">
            <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfCards;
