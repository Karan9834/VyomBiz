import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How many directors are needed for a Public Limited Company?",
        answer: "A minimum of three directors are required for a Public Limited Company. There is no maximum limit, although the Articles of Association (AoA) may specify one."
    },
    {
        question: "Is there a minimum paid-up capital requirement?",
        answer: "As per the latest Companies Act amendments, there is no specific minimum paid-up capital requirement to start a Public Company. However, substantial capital is usually recommended for business operations."
    },
    {
        question: "Can a Private Limited Company be converted into a Public Limited Company?",
        answer: "Yes, a Private Limited Company can be converted into a Public Limited Company by altering its MoA and AoA and following the procedures prescribed under the Companies Act."
    },
    {
        question: "What is the difference between a 'Listed' and 'Unlisted' Public Company?",
        answer: "A listed public company has its shares traded on a recognized stock exchange (like NSE or BSE). An unlisted public company is not listed on an exchange but still has the structure of a public company."
    },
    {
        question: "What are the annual compliance requirements?",
        answer: "Public companies have strict compliance needs, including annual board meetings, AGM, filing of annual returns (MGT-7), financial statements (AOC-4), and internal audits."
    }
];

const PublicFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tight">Enterprise FAQ</h2>
                    <p className="text-slate-500 font-bold text-xl">Get clear answers to complex corporate questions.</p>
                </div>

                <div className="grid gap-6">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`bg-white rounded-[2.5rem] overflow-hidden transition-all duration-300 border-2 ${openIndex === idx ? "border-secondary shadow-2xl scale-[1.02]" : "border-slate-100 shadow-sm hover:border-slate-200"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className="w-full px-10 py-8 flex items-center justify-between text-left"
                            >
                                <span className={`text-xl font-black transition-colors ${openIndex === idx ? "text-primary" : "text-slate-700"}`}>
                                    {faq.question}
                                </span>
                                {openIndex === idx ? (
                                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary shadow-lg">
                                        <Minus size={24} strokeWidth={3} />
                                    </div>
                                ) : (
                                    <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                                        <Plus size={24} strokeWidth={3} />
                                    </div>
                                )}
                            </button>

                            {openIndex === idx && (
                                <div className="px-10 pb-10 animate-in fade-in slide-in-from-top-4 duration-500">
                                    <div className="pt-6 border-t border-slate-50 text-slate-600 font-bold leading-relaxed text-lg">
                                        {faq.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-24 relative">
                    <div className="absolute inset-0 bg-secondary/20 blur-[100px] rounded-full" />
                    <div className="bg-gradient-to-br from-[#072b47] to-slate-900 rounded-[4rem] p-12 lg:p-20 text-center text-white relative flex flex-col items-center">
                        <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center text-secondary mb-10 border border-secondary/20">
                            <Plus size={40} />
                        </div>
                        <h3 className="text-4xl font-black mb-6">Need Specialized Corporate Structuring?</h3>
                        <p className="text-slate-300 mb-12 max-w-2xl font-bold text-lg leading-relaxed">
                            Our corporate lawyers and CAs specialize in complex public setups and IPO readiness.
                            Let's build your enterprise legacy together.
                        </p>
                        <button className="px-12 py-5 bg-secondary text-primary font-black rounded-2xl hover:scale-105 active:scale-95 transition-all text-xl shadow-2xl shadow-secondary/30">
                            Consult Senior Partner
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PublicFAQ;
