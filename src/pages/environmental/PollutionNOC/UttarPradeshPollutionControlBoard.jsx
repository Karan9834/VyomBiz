import React from 'react';
import UPPCBHero from '../../../components/environmental/UPPCB/UPPCBHero';
import UPPCBDetails from '../../../components/environmental/UPPCB/UPPCBDetails';
import UPPCBPricing from '../../../components/environmental/UPPCB/UPPCBPricing';
import UPPCBFAQ from '../../../components/environmental/UPPCB/UPPCBFAQ';
import { ArrowRight } from "lucide-react";

const UttarPradeshPollutionControlBoard = () => {
    const similarServices = [
        "License for charging station in UP",
        "E-waste License for Dismantling",
        "Consent for Establishment (CFE) from SPCB",
        "Fire Department NOC",
        "Delhi Pollution Control Committee",
        "CGWA-Water Boring",
        "NOC Pollution Control Board",
        "Phase II Soil and Groundwater Investigations"
    ];

    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                {/* Hero Section */}
                <UPPCBHero />

                {/* Details Section */}
                <UPPCBDetails />

                {/* Pricing / Services Section */}
                <UPPCBPricing />

                {/* FAQ Section */}
                <UPPCBFAQ />

                {/* Author & Similar Services Section */}
                <section className="w-full py-20 lg:py-32 bg-slate-50 border-t border-slate-100">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
                        {/* Author Left Side */}
                        <div className="lg:col-span-7 bg-white p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col md:flex-row items-center md:items-start gap-10 hover:shadow-2xl transition-all duration-500">
                            <div className="w-28 lg:w-36 h-28 lg:h-36 rounded-[2.5rem] bg-[#005a9c]/5 flex items-center justify-center text-[#005a9c] text-4xl lg:text-5xl font-black shrink-0 shadow-inner border border-[#005a9c]/10">
                                ND
                            </div>
                            <div className="text-center md:text-left flex-1">
                                <h3 className="text-2xl lg:text-4xl font-black text-[#072b47] mb-2 leading-tight">Neha Dawra</h3>
                                <p className="text-[#005a9c] font-black uppercase tracking-[0.2em] text-[10px] lg:text-xs mb-6 inline-block bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100/50">Legal Researcher</p>
                                <p className="text-slate-500 font-bold text-sm lg:text-base leading-relaxed mb-8 text-justify md:text-left">
                                    Neha Dawra has 4+ years of experience in legal research and intellectual property advisory. Her expertise lies in analyzing environmental laws, drafting structured legal content, and simplifying complex UPPCB registration procedures into clear, actionable insights.
                                </p>
                                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center gap-4 text-[11px] lg:text-[12px] font-black text-slate-400 uppercase tracking-widest italic bg-slate-50/50 p-4 rounded-2xl">
                                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#f1a134] rounded-full animate-pulse" />Last updated: Feb 20 2026</span>
                                    <span className="hidden sm:block text-slate-300">•</span>
                                    <span className="flex items-center gap-2">Verified by VyomBiz Legal Team</span>
                                </div>
                            </div>
                        </div>

                        {/* Similar Services Right Side */}
                        <div className="lg:col-span-5 bg-white p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col hover:shadow-2xl transition-all duration-500 hover:border-[#005a9c]/10">
                            <h3 className="text-2xl lg:text-3xl font-black text-[#072b47] mb-10 flex items-center gap-4">
                                <div className="w-2.5 h-10 bg-[#f1a134] rounded-full shadow-[0_0_15px_rgba(241,161,52,0.4)]" />
                                Similar Services
                            </h3>
                            <div className="grid grid-cols-1 gap-4 flex-1">
                                {similarServices.map((service, i) => (
                                    <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer border border-transparent hover:border-[#005a9c]/20">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-[#f1a134] transition-colors" />
                                            <span className="text-[13px] lg:text-[15px] font-black text-slate-600 group-hover:text-[#005a9c] transition-colors line-clamp-1">{service}</span>
                                        </div>
                                        <ArrowRight size={18} className="text-slate-300 group-hover:text-[#f1a134] group-hover:translate-x-1 transition-all" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f9fa] to-transparent pointer-events-none z-10" />
        </div>
    );
};

export default UttarPradeshPollutionControlBoard;
