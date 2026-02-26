import React from "react";

const AboutHero = () => {
    return (
        <section className="relative py-20 lg:py-32 bg-[#072b47] overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f1a134] transform skew-x-12 translate-x-1/2 hidden lg:block" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#072b47] to-[#0a3a5e]" />

            <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
                <div className="max-w-3xl">
                    <div className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full mb-6">
                        <span className="text-blue-400 text-sm font-black uppercase tracking-widest">Since 2026</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                        We're Redefining <span className="text-[#f1a134]">Business Compliance</span> for the Future.
                    </h1>
                    <p className="text-xl text-blue-100/70 font-medium leading-relaxed max-w-2xl mb-10">
                        VyomBiz is India's premier legal-tech platform, combining elite professional expertise with cutting-edge technology to simplify the complexities of starting and growing a business.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                            <span className="text-3xl font-black text-[#f1a134]">100K+</span>
                            <span className="text-sm text-white/60 font-medium leading-tight text-left">Clients<br />Empowered</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                            <span className="text-3xl font-black text-blue-400">10K+</span>
                            <span className="text-sm text-white/60 font-medium leading-tight text-left">Professional<br />Network</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
