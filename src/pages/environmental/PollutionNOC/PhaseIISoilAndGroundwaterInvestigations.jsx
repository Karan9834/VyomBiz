import React from "react";
import PhaseIISoilHero from "../../../components/environmental/PhaseIISoil/PhaseIISoilHero";
import PhaseIISoilPricing from "../../../components/environmental/PhaseIISoil/PhaseIISoilPricing";
import PhaseIISoilDetails from "../../../components/environmental/PhaseIISoil/PhaseIISoilDetails";
import PhaseIISoilFAQ from "../../../components/environmental/PhaseIISoil/PhaseIISoilFAQ";
import { ArrowRight, Star, Quote } from "lucide-react";

const PhaseIISoilAndGroundwaterInvestigations = () => {
    const similarServices = [
        "NOC Pollution Control Board",
        "Uttar Pradesh Pollution Control Board",
        "Delhi Pollution Control Committee",
        "Consent for Establishment (CFE) from SPCB",
        "E-waste License for Dismantling",
        "License for charging station in UP",
        "Fire Department NOC",
        "CGWA-Water Boring"
    ];

    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                {/* 1. Hero Section */}
                <PhaseIISoilHero />

                {/* Temporary Placeholder Images */}
                <div className="max-w-7xl mx-auto px-6 py-10 w-full overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Environmental 1" className="w-full h-64 object-cover rounded-[2rem] shadow-xl" />
                        <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=800" alt="Environmental 2" className="w-full h-64 object-cover rounded-[2rem] shadow-xl" />
                        <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" alt="Environmental 3" className="w-full h-64 object-cover rounded-[2rem] shadow-xl" />
                    </div>
                </div>


                {/* 2. Pricing Section */}
                <PhaseIISoilPricing />

                {/* 3. Details Section */}
                <PhaseIISoilDetails />

                {/* 4. Choose Corpbiz / VyomBiz Section */}
                <section className="w-full py-20 lg:py-32 bg-white overflow-hidden border-y border-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-20 px-4">
                            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Why Opt for VyomBiz?</h2>
                            <p className="text-[#005a9c] font-black uppercase tracking-[0.2em] text-xs lg:text-sm">"Top choice for Soil and Groundwater investigations"</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[
                                { title: "1000+ Completed", desc: "Assisted in Successful Completion of Phase I and Phase II Investigations." },
                                { title: "200+ Experts", desc: "A Network of 200+ Environmental Experts and Geologists." },
                                { title: "Crores Saved", desc: "Saved Over 1 Crore Rupees in Performing accurate Environmental Investigations." },
                                { title: "99.5% Success", desc: "Maintains a 99.5% success rate in Delivering Accurate Lab Reports." },
                                { title: "10+ Years", desc: "Industry-proven Experience in Phase II Subsurface Investigations." },
                                { title: "24/7 Support", desc: "Round-the-clock Support for Coordination and Client Due Diligence." }
                            ].map((feature, i) => (
                                <div key={i} className="bg-slate-50 p-10 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:bg-white hover:-translate-y-2 transition-all">
                                    <div className="w-12 h-12 bg-blue-50 text-[#005a9c] font-black rounded-full flex items-center justify-center shrink-0 mb-6 border border-blue-100">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-xl font-black text-[#072b47] mb-4">{feature.title}</h3>
                                    <p className="text-slate-600 font-medium leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. FAQ Section */}
                <PhaseIISoilFAQ />

                {/* 6. Author & Similar Services Section */}
                <section className="w-full py-20 lg:py-32 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

                        <div className="lg:col-span-7 bg-white p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col md:flex-row items-center md:items-start gap-10">
                            <div className="w-28 lg:w-36 h-28 lg:h-36 rounded-[2.5rem] bg-[#005a9c]/5 flex items-center justify-center text-[#005a9c] text-4xl lg:text-5xl font-black shrink-0 shadow-inner border border-[#005a9c]/10">
                                ND
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl lg:text-4xl font-black text-[#072b47] mb-2 leading-none">Neha Dawra</h3>
                                <p className="text-[#005a9c] font-black uppercase tracking-[0.2em] text-[10px] lg:text-xs mb-6 inline-block bg-blue-50 px-3 py-1 rounded-full">Legal Researcher</p>
                                <p className="text-slate-500 font-bold text-sm lg:text-base leading-relaxed mb-8 text-justify md:text-left">
                                    Neha Dawra brings extensive expertise analyzing EPA and ASTM norms for Property Risk Assessments (RECs) and remediation of contaminated soil/groundwater zones.
                                </p>
                                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center gap-4 text-[11px] lg:text-[12px] font-black text-slate-400 uppercase tracking-widest italic">
                                    <span>Last updated: Feb 20 2026</span>
                                    <span className="hidden sm:block opacity-30">•</span>
                                    <span>Verified by VyomBiz Legal Team</span>
                                </div>
                            </div>
                        </div>

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
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f8f9fa] to-transparent pointer-events-none z-10" />
        </div>
    );
};

export default PhaseIISoilAndGroundwaterInvestigations;
