import React from "react";

const OurJourney = () => {
    const milestones = [
        {
            year: "2026",
            title: "The Genesis",
            desc: "VyomBiz was born with a mission to decentralize professional expertise and make it available to every small business in India."
        },
        {
            year: "2026 Q2",
            title: "Tech Revolution",
            desc: "Launched our AI-driven compliance engine, reducing traditional processing times by over 60%."
        },
        {
            year: "2026 Q3",
            title: "100K Stories",
            desc: "Reached the milestone of empowering 100,000+ businesses across 28 states and 8 Union Territories."
        },
        {
            year: "Present",
            title: "The Big Leap",
            desc: "Expanding our network to 10,000+ top-tier professionals, ensuring that every VyomBiz client gets elite advice locally."
        }
    ];

    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-4xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Our Journey</h2>
                    <div className="w-20 h-1.5 bg-[#f1a134] mx-auto rounded-full" />
                </div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 hidden lg:block" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {milestones.map((item, idx) => (
                            <div key={idx} className="relative group">
                                {/* Dot for Desktop */}
                                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white border-4 border-[#f1a134] rounded-full -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block group-hover:scale-150 transition-transform duration-300" />

                                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-[#f1a134]/30 transition-all text-center lg:text-left h-full flex flex-col items-center lg:items-start">
                                    <div className="text-3xl font-black text-[#f1a134] mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                        {item.year}
                                    </div>
                                    <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{item.title}</h4>
                                    <p className="text-slate-500 font-bold text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurJourney;
