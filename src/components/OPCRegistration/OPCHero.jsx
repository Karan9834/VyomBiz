import React from "react";
import { CheckCircle, ArrowRight, UserCheck } from "lucide-react";

const OPCHero = () => {
    return (
        <section className="relative overflow-hidden bg-primary py-20 text-white">
            {/* Design accents */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-80 h-80 bg-secondary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-[80px]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left text */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
                            <UserCheck size={16} className="text-secondary" />
                            <span className="text-xs font-black uppercase tracking-widest">Ideal for Solo Entrepreneurs</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
                            One Person <br />
                            <span className="text-secondary">Company</span> (OPC) <br />
                            Registration
                        </h1>

                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg">
                            Enjoy the benefits of a private limited company while maintaining 100% control as a solo founder. Start your professional business journey with VyomBiz.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Single Owner & Director Structure",
                                "Limited Liability Protection",
                                "Continuous Corporate Existence",
                                "Ease of Raising Funds",
                                "Least Compliance among Companies"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                                        <CheckCircle size={16} strokeWidth={3} />
                                    </div>
                                    <span className="font-bold text-slate-200">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?u=opc${i}`} alt="user" />
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-slate-400 font-bold">
                                Joined by <span className="text-white">12,000+</span> solo founders
                            </p>
                        </div>
                    </div>

                    {/* Right form */}
                    <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-2xl text-slate-800">
                        <div className="mb-8">
                            <h3 className="text-2xl font-black mb-1">Get Free OPC Advice</h3>
                            <p className="text-slate-500 font-bold">Launch your solo brand in 7-10 days</p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-1.5">
                                <label className="text-xs font-black text-slate-400 uppercase ml-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary transition-all font-bold"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-black text-slate-400 uppercase ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="email@example.com"
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary transition-all font-bold"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-black text-slate-400 uppercase ml-1">Mobile</label>
                                    <input
                                        type="tel"
                                        placeholder="+91"
                                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary transition-all font-bold"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-black text-slate-400 uppercase ml-1">City</label>
                                <input
                                    type="text"
                                    placeholder="Your city"
                                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary transition-all font-bold"
                                />
                            </div>

                            <button className="w-full py-4 bg-secondary text-primary font-black rounded-xl shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 mt-4">
                                Start Registration Now
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OPCHero;
