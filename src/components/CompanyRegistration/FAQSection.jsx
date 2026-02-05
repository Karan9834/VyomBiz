import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "How long does it take to register a Private Limited Company?",
        answer: "Typically, it takes 7 to 10 working days to get the Certificate of Incorporation, depending on the ROC processing time and name availability."
    },
    {
        question: "Can one person start a Private Limited Company?",
        answer: "No, a Private Limited Company requires at least two directors and two shareholders. If you want to start alone, you can opt for a One Person Company (OPC)."
    },
    {
        question: "Is it mandatory to have a commercial office address?",
        answer: "No, you can register your company using a residential address as its registered office. You just need a utility bill and an NOC from the owner."
    },
    {
        question: "What are the compliance requirements after incorporation?",
        answer: "Major post-incorporation compliances include appointing an auditor, filing INC-20A (Commencement of Business), and maintaining statutory registers."
    },
    {
        question: "Can a foreign national be a director in an Indian company?",
        answer: "Yes, a foreign national can be a director. However, at least one director on the board must be a resident of India (stayed in India for 182+ days)."
    }
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">Frequently Asked Questions</h2>
                    <p className="text-slate-500 font-medium">Everything you need to know about company registration.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-slate-800">{faq.question}</span>
                                {openIndex === idx ? (
                                    <ChevronUp className="text-secondary" />
                                ) : (
                                    <ChevronDown className="text-slate-400" />
                                )}
                            </button>

                            {openIndex === idx && (
                                <div className="px-8 pb-8 animate-in slide-in-from-top-4 duration-300">
                                    <div className="pt-2 border-t border-slate-50 text-slate-500 font-medium leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-primary rounded-[2.5rem] p-10 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
                    <h3 className="text-2xl font-black mb-4">Still have questions?</h3>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto font-medium">
                        Our legal experts are ready to help you navigate the complexities of business registration.
                    </p>
                    <button className="px-10 py-4 bg-secondary text-primary font-black rounded-xl hover:scale-105 transition-transform">
                        Chat with our Experts
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
