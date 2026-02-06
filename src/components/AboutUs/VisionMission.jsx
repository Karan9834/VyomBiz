import React from "react";
import { Eye, Target, Heart } from "lucide-react";

const VisionMission = () => {
    return (
        <section className="py-12 bg-slate-50 relative overflow-hidden">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-4xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">Driven by Purpose, Guided by <span className="text-[#f1a134]">Innovation</span></h2>
                    <p className="text-lg text-slate-500 font-bold italic leading-relaxed">
                        "VyomBiz was founded on the belief that legal and financial compliance should be a catalyst for business growth, not a barrier."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Mission */}
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-blue-100 group-hover:text-blue-200 transition-colors">
                            <Target size={120} strokeWidth={1} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Our Mission</h3>
                            <p className="text-slate-500 font-bold leading-relaxed">
                                To empower 1 million entrepreneurs across India by 2030 through accessible, transparent, and technology-driven compliance solutions that simplify the business lifecycle.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="bg-[#072b47] p-10 rounded-[2.5rem] shadow-xl border border-[#0a3a5e] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors">
                            <Eye size={120} strokeWidth={1} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-[#f1a134] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-900/40">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-white mb-6 tracking-tight">Our Vision</h3>
                            <p className="text-white/70 font-bold leading-relaxed">
                                To become India's Most Trusted Digital Economy Enabler, creating a frictionless business environment where compliance is invisible and success is inevitable.
                            </p>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-orange-100 group-hover:text-orange-200 transition-colors">
                            <Heart size={120} strokeWidth={1} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-100">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight">Our Values</h3>
                            <p className="text-slate-500 font-bold leading-relaxed">
                                Integrity in every filing, Innovation in every line of code, and Empathy for every entrepreneur. We win only when our clients win.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
