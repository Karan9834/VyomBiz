import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

const faqs = [
    {
        question: "What is the difference between an LLP and a Partnership Firm?",
        answer: "In an LLP, partners have limited liability and the entity is a separate legal person distinct from its owners. In a traditional partnership, partners have unlimited liability."
    },
    {
        question: "Is audit mandatory for all LLPs?",
        answer: "No, audit is mandatory only if the annual turnover exceed ₹40 Lakhs or the contribution exceeds ₹25 Lakhs."
    },
    {
        question: "Can anyone become a partner in an LLP?",
        answer: "Yes, any individual or body corporate (including foreign nationals and foreign companies) can become a partner in an LLP."
    },
    {
        question: "Is it possible to convert a Partnership Firm into an LLP?",
        answer: "Yes, the LLP Act allows for the conversion of a partnership firm or a private limited company into an LLP."
    },
    {
        question: "What is the role of an LLP Agreement?",
        answer: "An LLP agreement is a legal document that defines the rights, duties, and obligations of the partners towards each other and the LLP."
    }
];

const LLPFAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">LLP Frequently Asked Questions</h2>
                    <p className="text-slate-500 font-medium text-lg">Clear your doubts about Limited Liability Partnerships.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all shadow-sm hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left transition-colors"
                            >
                                <span className="text-lg font-bold text-slate-800">{faq.question}</span>
                                {openIndex === idx ? (
                                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-primary">
                                        <ChevronUp size={20} />
                                    </div>
                                ) : (
                                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                                        <ChevronDown size={20} />
                                    </div>
                                )}
                            </button>

                            {openIndex === idx && (
                                <div className="px-8 pb-8 animate-in slide-in-from-top-4 duration-300">
                                    <div className="pt-4 border-t border-slate-50 text-slate-600 font-medium leading-relaxed text-[17px]">
                                        {faq.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-gradient-to-br from-primary to-slate-900 rounded-[3rem] p-10 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />

                    <h3 className="text-3xl font-black mb-6 relative">Ready to set up your LLP?</h3>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto font-medium text-lg relative leading-relaxed">
                        Join thousands of professionals who have successfully built their brand with our effortless registration process.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 relative">
                        <button className="px-10 py-4 bg-secondary text-primary font-black rounded-2xl hover:scale-105 transition-all shadow-xl shadow-secondary/20">
                            Get Online Consultation
                        </button>
                        <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-black rounded-2xl hover:bg-white/20 transition-all flex items-center gap-2">
                            <MessageCircle size={20} />
                            WhatsApp Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LLPFAQ;
