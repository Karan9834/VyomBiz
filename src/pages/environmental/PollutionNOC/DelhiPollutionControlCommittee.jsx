import React from "react";
import DPCCHero from "../../../components/environmental/DPCC/DPCCHero";
import DPCCPricing from "../../../components/environmental/DPCC/DPCCPricing";
import DPCCDetails from "../../../components/environmental/DPCC/DPCCDetails";
import DPCCFAQ from "../../../components/environmental/DPCC/DPCCFAQ";
import { ArrowRight, Star, Quote } from "lucide-react";

/**
 * Delhi Pollution Control Committee Page
 * Modular structure following the VyomBiz pattern.
 */
const DelhiPollutionControlCommittee = () => {
    // Similar Services Data
    const similarServices = [
        "E-waste License for Dismantling",
        "CGWA-Water Boring",
        "License for charging station in UP",
        "Uttar Pradesh Pollution Control Board",
        "Phase II Soil and Groundwater Investigations",
        "NOC Pollution Control Board",
        "Consent for Establishment (CFE)",
        "Fire Department NOC"
    ];

    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                {/* 1. Hero Section */}
                <DPCCHero />

                {/* Temporary Placeholder Images */}
                <div className="max-w-7xl mx-auto px-6 py-10 w-full overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Environmental 1" className="w-full h-64 object-cover rounded-[2rem] shadow-xl" />
                        <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800" alt="Environmental 2" className="w-full h-64 object-cover rounded-[2rem] shadow-xl" />
                        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" alt="Environmental 3" className="w-full h-64 object-cover rounded-[2rem] shadow-xl" />
                    </div>
                </div>


                {/* 2. Pricing Section */}
                <DPCCPricing />

                {/* 3. Main Details Section (Includes Floating Navbar) */}
                <DPCCDetails />

                {/* 4. Testimonials Section */}
                <section className="w-full py-20 lg:py-32 bg-white overflow-hidden border-y border-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20 lg:mb-24 px-4">
                            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Client Experiences</h2>
                            <p className="text-[#005a9c] font-black uppercase tracking-[0.2em] text-xs lg:text-sm">Trusted by 10,000+ businesses across Delhi.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-sm relative group hover:bg-white hover:shadow-2xl transition-all duration-500">
                                    <div className="absolute top-8 right-10 text-[#005a9c]/10 group-hover:text-[#005a9c]/20 transition-colors">
                                        <Quote size={60} fill="currentColor" />
                                    </div>
                                    <div className="flex text-yellow-400 mb-8 gap-1">
                                        {[...Array(5)].map((_, star) => <Star key={star} size={18} fill="currentColor" />)}
                                    </div>
                                    <p className="text-slate-600 font-bold text-base lg:text-lg italic mb-10 leading-relaxed relative z-10">
                                        "Getting DPCC authorization for our manufacturing unit was daunting until we consulted VyomBiz. Their team handled the categorization and CTE filing flawlessly."
                                    </p>
                                    <div className="flex items-center gap-5 pt-6 border-t border-slate-200">
                                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-slate-200 flex items-center justify-center font-black text-[#072b47] text-lg lg:text-xl shadow-inner uppercase">
                                            {i === 1 ? "SK" : i === 2 ? "AM" : "VP"}
                                        </div>
                                        <div>
                                            <span className="block font-black text-base text-[#072b47] leading-none mb-1">
                                                {i === 1 ? "Sanjay Kumar" : i === 2 ? "Amit Mehra" : "Vikas Puri"}
                                            </span>
                                            <span className="text-[10px] lg:text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none">
                                                {i === 1 ? "Operations Head" : i === 2 ? "Factory Owner" : "Compliance Director"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. FAQ Section */}
                <DPCCFAQ />

                {/* 6. Author & Similar Services Section */}
                <section className="w-full py-20 lg:py-32 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

                        {/* Author Card */}
                        <div className="lg:col-span-7 bg-white p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col md:flex-row items-center md:items-start gap-10">
                            <div className="w-28 lg:w-36 h-28 lg:h-36 rounded-[2.5rem] bg-[#005a9c]/5 flex items-center justify-center text-[#005a9c] text-4xl lg:text-5xl font-black shrink-0 shadow-inner border border-[#005a9c]/10">
                                ND
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl lg:text-4xl font-black text-[#072b47] mb-2 leading-none">Neha Dawra</h3>
                                <p className="text-[#005a9c] font-black uppercase tracking-[0.2em] text-[10px] lg:text-xs mb-6 inline-block bg-blue-50 px-3 py-1 rounded-full">Legal Researcher</p>
                                <p className="text-slate-500 font-bold text-sm lg:text-base leading-relaxed mb-8 text-justify md:text-left">
                                    Neha Dawra has 4+ years of experience in legal research and environmental advisory. Her expertise lies in analyzing DPCC guidelines, drafting structured compliance reports, and simplifying complex environmental registration procedures.
                                </p>
                                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center gap-4 text-[11px] lg:text-[12px] font-black text-slate-400 uppercase tracking-widest italic">
                                    <span>Last updated: Feb 20 2026</span>
                                    <span className="hidden sm:block opacity-30">•</span>
                                    <span>Verified by VyomBiz Environmental Team</span>
                                </div>
                            </div>
                        </div>

                        {/* Similar Services Card */}
                        <div className="lg:col-span-5 bg-white p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col">
                            <h3 className="text-2xl lg:text-3xl font-black text-[#072b47] mb-10 flex items-center gap-4">
                                <div className="w-2 h-10 bg-[#005a9c] rounded-full" />
                                Similar Services
                            </h3>
                            <div className="grid grid-cols-1 gap-4 flex-1">
                                {similarServices.map((service, i) => (
                                    <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer border border-transparent hover:border-[#005a9c]/10">
                                        <span className="text-[13px] lg:text-[15px] font-black text-slate-600 group-hover:text-[#005a9c] transition-colors line-clamp-1">{service}</span>
                                        <ArrowRight size={18} className="text-slate-300 group-hover:text-[#005a9c] group-hover:translate-x-1 transition-all" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>


            </div>
            {/* Gradient fade to footer */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f9fa] to-transparent pointer-events-none z-10" />
        </div>
    );
};

export default DelhiPollutionControlCommittee;
