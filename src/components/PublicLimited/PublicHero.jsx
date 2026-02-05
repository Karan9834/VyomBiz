import React from "react";
import { CheckCircle, ArrowRight, Globe } from "lucide-react";

const PublicHero = () => {
    return (
        <section className="relative overflow-hidden bg-[#072b47] py-24 text-white">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-10">
                            <Globe size={16} className="text-secondary animate-pulse" />
                            <span className="text-sm font-black uppercase tracking-[0.2em] text-slate-200">Scale Without Limits</span>
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
                            Public <span className="text-secondary">Limited</span> <br />
                            Company Setup
                        </h1>

                        <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-xl font-medium">
                            Step into the big league. Raise capital from the public and enjoy the highest level of business credibility with VyomBiz's expert conversion and registration services.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {[
                                "Unlimited Shareholders",
                                "Public Capital Raising",
                                "Easy Transferability",
                                "Maximum Legal Status",
                                "Listing Preparedness",
                                "Expert CA Consultation"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary shrink-0">
                                        <CheckCircle size={16} strokeWidth={3} />
                                    </div>
                                    <span className="font-bold text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-[2rem] max-w-md">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#072b47] overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=pub${i}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <div className="h-10 w-[1px] bg-white/20" />
                            <div>
                                <p className="text-sm text-slate-400 font-bold uppercase tracking-wider">Trusted Support</p>
                                <p className="text-white font-black">200+ Corporate Experts</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[3rem] p-10 lg:p-14 shadow-2xl text-slate-800 relative group transition-all">
                        <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-orange-400 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative">
                            <div className="mb-10">
                                <h3 className="text-3xl font-black mb-3">Enterprise Consultation</h3>
                                <p className="text-slate-500 font-medium text-lg">Speak with our senior legal consultants today</p>
                            </div>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Company / Founder Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all font-bold text-slate-700"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                                        <input
                                            type="email"
                                            placeholder="corporate@email.com"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all font-bold text-slate-700"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Mobile</label>
                                        <input
                                            type="tel"
                                            placeholder="+91"
                                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all font-bold text-slate-700"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Service Required</label>
                                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all font-bold text-slate-700 appearance-none">
                                        <option>Fresh Public Registration</option>
                                        <option>Pvt Ltd to Public Conversion</option>
                                        <option>Compliance Support</option>
                                    </select>
                                </div>

                                <button className="w-full py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 mt-8">
                                    Book Executive Call
                                    <ArrowRight size={22} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PublicHero;
