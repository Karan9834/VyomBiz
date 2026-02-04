import React from "react";

const Home = () => {
    return (
        <section className="relative py-20 px-6 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"></div>

            <div className="max-w-[1200px] mx-auto text-center relative z-10">
                <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-bold rounded-full mb-6 border border-blue-100">
                    🚀 Next-Gen Business Solutions
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 leading-[1.1]">
                    Precision-Driven Legal & <br />
                    <span className="text-blue-600">Compliance SaaS</span>
                </h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    VyomBiz streamlines your business registration, IP protection, and environmental compliance
                    with state-of-the-art automation and expert oversight.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="px-10 py-4 bg-primary text-white font-bold rounded-2xl shadow-xl shadow-blue-200 hover:bg-[#0a3a5e] hover:-translate-y-1 transition-all text-lg">
                        Get Started
                    </button>
                    <button className="px-10 py-4 bg-white text-slate-800 font-bold rounded-2xl border-2 border-slate-100 hover:bg-slate-50 hover:-translate-y-1 transition-all text-lg shadow-sm">
                        View Pricing
                    </button>
                </div>

                {/* Mock Stats */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-slate-100">
                    {[
                        { label: "Active Users", val: "10k+" },
                        { label: "Compliance Rate", val: "99.9%" },
                        { label: "Secured Data", val: "100%" },
                        { label: "Expert Support", val: "24/7" },
                    ].map((stat, i) => (
                        <div key={i}>
                            <p className="text-3xl font-black text-slate-800">{stat.val}</p>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Home;
