import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

/**
 * Universal FAQ Layout for Registration Pages
 * @param {string} title - The main heading for the FAQ section.
 * @param {string} subtitle - Short description.
 * @param {Array} faqs - Array of objects: { question, answer }
 * @param {string} contactTitle - Title for the contact card.
 * @param {string} contactText - Text for the contact card.
 */
const FAQLayout = ({
    title = "Frequently Asked Questions",
    subtitle = "Everything you need to know about starting your business in India.",
    faqs = [],
    contactTitle = "Still have questions?",
    contactText = "Our experts are available 24/7 to help you resolve your queries."
}) => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Left side: Heading */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <div className="w-16 h-16 bg-[#1e40af]/10 rounded-2xl flex items-center justify-center text-[#1e40af] mb-6">
                                <HelpCircle size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight text-center md:text-left">
                                {title.split(' ')[0]} <span className="text-[#f1a134]">{title.split(' ').slice(1).join(' ')}</span>
                            </h2>
                            <p className="text-slate-500 font-medium text-base md:text-lg leading-relaxed text-center md:text-left">
                                {subtitle}
                            </p>
                            <div className="mt-8 md:mt-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-sm font-bold text-slate-700 mb-3 text-center md:text-left">{contactTitle}</p>
                                <p className="text-xs text-slate-500 mb-5 text-center md:text-left leading-relaxed">
                                    {contactText}
                                </p>
                                <button className="w-full bg-[#1e40af] text-white py-3 md:py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all shadow-md text-sm">
                                    Chat with an Expert
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Accordion */}
                    <div className="lg:w-2/3 space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={`group border rounded-2xl transition-all duration-300 ${openIndex === idx ? 'border-[#f1a134] bg-orange-50/10 shadow-lg shadow-orange-100/20' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                    className="w-full px-5 md:px-8 py-5 md:py-6 flex items-center justify-between text-left"
                                >
                                    <span className={`text-base md:text-lg font-black transition-colors pr-4 ${openIndex === idx ? 'text-[#1e40af]' : 'text-slate-900 group-hover:text-[#1e40af]'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-[#f1a134] text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                                        {openIndex === idx ? <Minus size={14} md:size={18} strokeWidth={3} /> : <Plus size={14} md:size={18} strokeWidth={3} />}
                                    </div>
                                </button>

                                {openIndex === idx && (
                                    <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <div className="h-px bg-slate-100 mb-6" />
                                        <p className="text-slate-500 font-medium leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQLayout;
