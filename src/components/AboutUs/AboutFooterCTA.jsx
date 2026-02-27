import React from "react";
import { useNavigate } from "react-router-dom";
import CTAButton from "../common/CTAButton";

const AboutFooterCTA = () => {
    const navigate = useNavigate();
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-[#072b47] rounded-[3rem] p-8 md:p-16 border border-[#0a3a5e] shadow-2xl relative overflow-hidden group">
                        {/* Background Decorative Patterns */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-blue-600/20 transition-all duration-700" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#f1a134]/5 blur-[80px] rounded-full -ml-20 -mb-20 group-hover:bg-[#f1a134]/10 transition-all duration-700" />

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                                The Intelligent Choice for <br className="hidden md:block" />
                                <span className="text-[#f1a134]">Modern Business Compliance</span>
                            </h2>

                            <div className="w-20 h-1 bg-white/20 mb-10 rounded-full" />

                            <p className="text-lg md:text-xl text-blue-100/90 font-medium italic leading-relaxed max-w-4xl mb-12">
                                "VyomBiz is a smart compliance platform built for modern businesses. We simplify complex legal and regulatory frameworks using AI-driven technology, backed by trusted human expertise—so you can operate with confidence and focus on growth."
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mt-4">
                                <CTAButton
                                    label="Connect with Experts"
                                    onClick={() => navigate('/contact')}
                                    className="!px-10 !py-5 !text-base !rounded-2xl shadow-xl shadow-blue-900/40"
                                />
                                <button className="px-10 py-5 rounded-2xl border border-white/20 text-white font-bold hover:bg-white/5 transition-all text-base">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFooterCTA;
