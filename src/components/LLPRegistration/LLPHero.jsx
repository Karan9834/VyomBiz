import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const LLPHero = () => {
    return (
        <section className="relative overflow-hidden bg-primary py-20 text-white">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
                            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                            <span className="text-sm font-bold uppercase tracking-wider">Fastest LLP Setup in India</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-[1.1]">
                            Online <span className="text-secondary">LLP</span> <br />
                            Registration in <span className="text-secondary">India</span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                            Combine the benefits of a partnership and a company. Get your Limited Liability Partnership registered with expert legal support and 100% money-back guarantee.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Minimal Compliance Requirements",
                                "No Minimum Capital Needed",
                                "LLP Name Approval",
                                "Drafting of LLP Agreement",
                                "DSC for 2 Partners"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                                        <CheckCircle size={16} />
                                    </div>
                                    <span className="font-medium text-slate-200">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-4 items-center">
                            <div className="flex -space-x-3">
                                {[11, 12, 13, 14].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-full border-4 border-primary bg-slate-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                    </div>
                                ))}
                                <div className="w-12 h-12 rounded-full border-4 border-primary bg-secondary flex items-center justify-center text-primary font-black text-xs">
                                    +45k
                                </div>
                            </div>
                            <p className="text-sm text-slate-400">
                                Trusted by <span className="text-white font-bold">45,000+</span> partners across India
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl text-slate-800">
                        <div className="mb-8">
                            <h3 className="text-2xl font-black mb-2">Book Free LLP Consultation</h3>
                            <p className="text-slate-500 font-medium">Get a call back from our legal experts</p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Partner Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all font-medium"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Phone</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">Your Email</label>
                                <input
                                    type="email"
                                    placeholder="email@example.com"
                                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all font-medium"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-400 uppercase ml-1">City</label>
                                <input
                                    type="text"
                                    placeholder="Enter your city"
                                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary focus:ring-4 focus:ring-secondary/10 outline-none transition-all font-medium"
                                />
                            </div>

                            <button className="w-full py-4 bg-[#f1a134] text-[#072b47] font-black rounded-xl shadow-lg shadow-orange-100/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-4 group">
                                Start LLP Registration
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LLPHero;
