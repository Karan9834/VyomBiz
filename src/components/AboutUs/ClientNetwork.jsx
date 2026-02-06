import React from "react";
import { Trophy, HelpCircle, GraduationCap } from "lucide-react";

const ClientNetwork = () => {
    const cards = [
        {
            icon: <Trophy className="text-[#f1a134]" size={40} />,
            title: "India’s No.1 Legal Platform",
            desc: "Get the legal help from over 10,000+ Independent Professionals across India"
        },
        {
            icon: <HelpCircle className="text-[#f1a134]" size={40} />,
            title: "Get Legal Advice",
            desc: "Post your queries and get response from highly experienced professionals within 30 minutes."
        },
        {
            icon: <GraduationCap className="text-[#f1a134]" size={40} />,
            title: "Contact a Lawyer/CA/Engineers Now?",
            desc: "Contact & get legal advice from our network of independent professionals for your specific matter."
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 lg:px-24">
                <h2 className="text-3xl md:text-3xl font-[900] text-slate-900 mb-8 tracking-tight leading-tight max-w-2xl">
                    Over 100,000 clients choose VyomBiz for their legal solutions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div key={idx} className="p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                            <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-8 border border-slate-50 group-hover:scale-110 transition-transform">
                                {card.icon}
                            </div>
                            <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
                                {card.title}
                            </h4>
                            <p className="text-slate-500 font-bold leading-relaxed">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientNetwork;
