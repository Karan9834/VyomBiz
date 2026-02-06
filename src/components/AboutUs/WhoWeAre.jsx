import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Globe } from "lucide-react";

const WhoWeAre = () => {
    const highlights = [
        {
            icon: <Zap className="text-yellow-500" />,
            title: "AI-Powered Compliance",
            desc: "Integrating AI-enabled technology to simplify legal and regulatory processes across 1000+ business types."
        },
        {
            icon: <Globe className="text-blue-500" />,
            title: "Global Reach",
            desc: "Catering to sectors from BFSI to manufacturing and international trade with a platform that consolidates all needs."
        },
        {
            icon: <ShieldCheck className="text-green-500" />,
            title: "Trusted Expertise",
            desc: "Get legal help from over 10,000+ Independent Professionals including seasoned Lawyers, CAs, and Engineers."
        },
        {
            icon: <CheckCircle2 className="text-[#f1a134]" />,
            title: "Client-Centric",
            desc: "Prompt responses within 30 minutes. Our commitment to satisfaction is at the heart of everything we do."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-[12px] font-black text-blue-600 uppercase tracking-[0.2em] mb-4">Who We Are</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                            Streamlining Business in India: Your Solution for <span className="text-[#f1a134]">Complex Compliance</span>
                        </h3>
                        <div className="space-y-6 text-lg text-slate-500 font-medium leading-relaxed mb-10">
                            <p>
                                We offer India's largest platform for managing compliance, integrating high-end technology to simplify legal processes. Our ecosystem is designed to help entrepreneurs focus on growth while we handle the intricacies of regulation.
                            </p>
                            <p>
                                From small startups to world-renowned companies, we serve a diverse range of customers with the same level of dedication and excellence. Our platform consolidates all compliance needs under a single, secure login.
                            </p>
                        </div>
                        <button className="px-10 py-4 bg-[#072b47] text-white font-black rounded-2xl shadow-xl hover:shadow-[#072b47]/20 hover:-translate-y-1 transition-all uppercase tracking-widest text-sm">
                            Meet Our Experts
                        </button>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-[#f1a134]/30 hover:bg-white hover:shadow-2xl transition-all group">
                                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{item.title}</h4>
                                <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
