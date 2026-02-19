import React from "react";
import { Eye, Target, Heart } from "lucide-react";

const VisionMission = () => {
    return (
        <section className="py-12 bg-slate-50 relative overflow-hidden">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072b47] mb-6 tracking-tighter italic text-center">Driven by Purpose. Guided by <span className="text-[#f1a134]">Innovation.</span></h2>
                    <p className="text-base text-slate-500 font-normal leading-relaxed max-w-3xl mx-auto">
                        At <span className="text-[#072b47] font-bold">VyomBiz</span>, we believe compliance should fuel growth, not slow it down. By blending technology with human expertise, we turn complex legal and financial processes into smooth, reliable experiences that help businesses move forward with confidence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Mission */}
                    <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-200 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-blue-50 group-hover:text-blue-100 transition-colors">
                            <Target size={100} strokeWidth={1} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-100">
                                <Target size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-6 tracking-tight">Our Mission</h3>
                            <p className="text-slate-500 font-normal leading-relaxed text-sm">
                                To empower 1 million entrepreneurs across India by 2030 with transparent, accessible, and technology-driven compliance solutions that simplify every stage of the business journey.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="bg-[#072b47] p-10 rounded-[2rem] shadow-xl border border-[#0a3a5e] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-white/10 transition-colors">
                            <Eye size={100} strokeWidth={1} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-[#f1a134] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-900/40">
                                <Eye size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">Our Vision</h3>
                            <p className="text-white/70 font-normal leading-relaxed text-sm">
                                To become India’s most trusted digital economy enabler—creating a seamless business ecosystem where compliance works quietly in the background and success comes naturally.
                            </p>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-200 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-orange-50 group-hover:text-orange-100 transition-colors">
                            <Heart size={100} strokeWidth={1} />
                        </div>
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-50">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#072b47] mb-6 tracking-tight">Our Values</h3>
                            <p className="text-slate-500 font-normal leading-relaxed text-sm">
                                Integrity in every action, innovation in every solution, and empathy for every entrepreneur. We believe true success is achieved only when our clients grow and win with us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
