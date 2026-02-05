import React from "react";
import { TrendingUp, Users, Lock, Milestone, ShieldCheck, BarChart3, Building } from "lucide-react";

const PublicDetails = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                {/* Benefits Section */}
                <div className="mb-32">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">Advantages of Public Registration</h2>
                        <p className="text-slate-500 font-bold text-lg">Unleash your business potential with the most transparent and prestigious legal structure in India.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            { title: "Public Capital", desc: "The only entity allowed to raise capital directly from the general public via IPOs.", icon: <TrendingUp className="text-green-600" /> },
                            { title: "No Share Limit", desc: "Onboard as many shareholders as you need. There's no upper limit for Public companies.", icon: <Users className="text-blue-600" /> },
                            { title: "Limited Liability", desc: "Protection of personal assets for all directors and members beyond their shareholding.", icon: <Lock className="text-orange-600" /> },
                            { title: "Stock Exchange", desc: "Easier path to list on NSE/BSE, providing exits for investors and liquidity for shares.", icon: <BarChart3 className="text-purple-600" /> },
                            { title: "Enhanced Image", desc: "Public companies command more trust from banks, vendors, and international clients.", icon: <Building className="text-teal-600" /> },
                            { title: "Separate Identity", desc: "The company holds property and contracts in its own name, distinct from its owners.", icon: <Milestone className="text-red-600" /> },
                        ].map((item, idx) => (
                            <div key={idx} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-secondary transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/10 transition-colors" />
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg mb-8 relative z-10">
                                    {item.icon}
                                </div>
                                <h4 className="text-2xl font-black text-primary mb-4 relative z-10">{item.title}</h4>
                                <p className="text-slate-500 font-bold leading-relaxed relative z-10">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Requirements & Difference Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-32">
                    <div className="bg-[#0b2c4d] rounded-[4rem] p-12 lg:p-16 text-white shadow-2xl">
                        <h3 className="text-4xl font-black mb-10 text-secondary">Pre-Requisites</h3>
                        <div className="space-y-8">
                            {[
                                { t: "Min 7 Members", d: "You need at least seven shareholders to form a public company." },
                                { t: "Min 3 Directors", d: "Requirement of at least three directors on the board." },
                                { t: "Digital Signature", d: "DSC for all directors and subscribers is mandatory." },
                                { t: "Registered Office", d: "A physical address in India to receive official correspondence." },
                                { t: "Name Ending", d: "The company name must end with precisely 'Limited'." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black mb-1">{item.t}</h4>
                                        <p className="text-slate-400 font-bold">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-orange-50 rounded-[4rem] p-12 lg:p-16 border-2 border-orange-100 flex flex-col justify-center">
                        <h3 className="text-4xl font-black mb-10 text-primary">Key Restrictions</h3>
                        <div className="space-y-8">
                            <div className="p-8 bg-white rounded-[2rem] shadow-sm">
                                <h4 className="text-sm font-black text-orange-600 uppercase tracking-widest mb-4">Transfer of Shares</h4>
                                <p className="text-slate-600 font-bold leading-relaxed">Unlike Private companies, the right to transfer shares in a Public company cannot be restricted by the Articles of Association.</p>
                            </div>
                            <div className="p-8 bg-white rounded-[2rem] shadow-sm">
                                <h4 className="text-sm font-black text-orange-600 uppercase tracking-widest mb-4">Accepting Deposits</h4>
                                <p className="text-slate-600 font-bold leading-relaxed">Public limited companies can accept deposits from the general public, subject to the provisions of the Companies Act.</p>
                            </div>
                            <div className="p-8 bg-white rounded-[2rem] shadow-sm">
                                <h4 className="text-sm font-black text-orange-600 uppercase tracking-widest mb-4">Managerial Remuneration</h4>
                                <p className="text-slate-600 font-bold leading-relaxed">There are specific legal limits on the remuneration that can be paid to directors and managers of a public company.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Audit & Success Trust */}
                <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-black mb-8">Our Public Incorporation Stats</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { n: "500+", l: "Public Co Established" },
                                { n: "100%", l: "MCA Approval Rate" },
                                { n: "₹10Cr+", l: "Avg. Capital Structuring" },
                                { n: "15yrs", l: "CA/CS Experience" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <p className="text-5xl font-black text-secondary mb-2">{stat.n}</p>
                                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">{stat.l}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PublicDetails;
