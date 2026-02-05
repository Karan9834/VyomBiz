import React, { useState } from "react";
import { ChevronDown, ChevronUp, Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Who is eligible to open a One Person Company?",
        answer: "Only a natural person who is an Indian citizen and resident in India (stayed for at least 120 days in the previous year) is eligible to incorporate an OPC."
    },
    {
        question: "Is there any tax benefit for an OPC over a Sole Proprietorship?",
        answer: "Yes, an OPC can deduct several business expenses, including salary to the director, rent to the owner (if using their own property), and interests on loans, which reduces the taxable profit."
    },
    {
        question: "What is the role of a Nominee in an OPC?",
        answer: "The nominee is a person who, in the event of the death or incapacity of the sole member, takes charge of the company to ensure perpetual succession."
    },
    {
        question: "Can an OPC be converted into a Private Limited Company?",
        answer: "Yes, an OPC can voluntarily convert into a Private Limited Company at any time. Earlier, it was mandatory after reaching a certain turnover, but now it's optional."
    },
    {
        question: "What are the common annual compliances for an OPC?",
        answer: "Key compliances include filing Form AOC-4 (Financial Statements), MGT-7A (Annual Return), and DIR-3 KYC (Director's KYC) annually."
    }
];

const OPCFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">OPC FAQs</h2>
                    <p className="text-slate-500 font-bold text-lg">Clear your doubts about starting a One Person Company.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`bg-white rounded-3xl overflow-hidden transition-all duration-300 border-2 ${openIndex === idx ? "border-secondary shadow-xl" : "border-slate-100 hover:border-slate-200"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left"
                            >
                                <span className={`text-lg font-black ${openIndex === idx ? "text-primary" : "text-slate-800"}`}>
                                    {faq.question}
                                </span>
                                {openIndex === idx ? (
                                    <Minus size={20} className="text-secondary" />
                                ) : (
                                    <Plus size={20} className="text-slate-400" />
                                )}
                            </button>

                            {openIndex === idx && (
                                <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                                    <div className="pt-4 border-t border-slate-50 text-slate-600 font-bold leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-white rounded-[3rem] p-10 lg:p-14 text-center border-2 border-slate-100 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <h3 className="text-2xl font-black mb-4 text-primary">Still Confused about OPC?</h3>
                    <p className="text-slate-500 mb-8 max-w-2xl mx-auto font-bold">
                        Our specialized business consultants are here to help you choose the right legal structure for your solo venture.
                    </p>
                    <button className="px-10 py-4 bg-primary text-white font-black rounded-xl hover:bg-primary/90 transition-all shadow-lg">
                        Chat with an Expert
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OPCFAQ;
