import React from "react";
import { Trophy, HelpCircle, GraduationCap } from "lucide-react";

const ClientNetwork = () => {
    const cards = [
        {
            icon: <Trophy className="text-[#f1a134]" size={40} />,
            title: "🏆 India’s No. 1 Legal Platform",
            desc: "Access trusted legal support from 10,000+ independent professionals across India. Wherever you are, expert help is always within reach."
        },
        {
            icon: <HelpCircle className="text-[#f1a134]" size={40} />,
            title: "❓ Get Legal Advice",
            desc: "Share your query and receive guidance from experienced professionals—quick, reliable, and tailored to your needs, often within 30 minutes."
        },
        {
            icon: <GraduationCap className="text-[#f1a134]" size={40} />,
            title: "🎓 Contact a Lawyer / CA / Engineer Now",
            desc: "Connect directly with verified experts for your specific requirement. Get the right advice, the right solution, at the right time."
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 lg:px-24">
                <h2 className="text-2xl md:text-3xl font-bold text-[#072b47] mb-12 tracking-tight text-center">
                    Over <span className="text-[#f1a134]">100,000</span> Clients Trust VyomBiz
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div key={idx} className="p-8 bg-slate-50/50 rounded-[2rem] border border-slate-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 border border-slate-100 group-hover:scale-110 transition-transform">
                                <div className="scale-75 md:scale-90">{card.icon}</div>
                            </div>
                            <h4 className="text-lg font-bold text-[#072b47] mb-3 tracking-tight leading-tight">
                                {card.title}
                            </h4>
                            <p className="text-slate-500 font-normal leading-relaxed text-sm">
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
