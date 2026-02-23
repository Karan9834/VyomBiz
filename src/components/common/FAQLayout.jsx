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
        <section id="faq" className="py-20 bg-white scroll-mt-32 relative z-10">
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-24">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* Left side: Heading */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <div className="w-12 h-12 bg-[#1e40af]/10 rounded-xl flex items-center justify-center text-[#1e40af] mb-4">
                                <HelpCircle size={24} />
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                                {title.split(' ')[0]} <span className="text-[#f1a134]">{title.split(' ').slice(1).join(' ')}</span>
                            </h2>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">
                                {subtitle}
                            </p>
                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">{contactTitle}</p>
                                <p className="text-[11px] text-slate-500 mb-4 leading-relaxed">
                                    {contactText}
                                </p>
                                <button className="w-full bg-[#1e40af] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all shadow-md text-xs">
                                    Chat with an Expert
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Accordion */}
                    <div className="lg:w-2/3 space-y-3">
                        {faqs && faqs.length > 0 ? (
                            faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className={`group border rounded-xl transition-all duration-300 ${openIndex === idx ? 'border-[#f1a134] bg-orange-50/5 shadow-md shadow-orange-100/10' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                        className="w-full px-6 py-4 flex items-center justify-between text-left"
                                    >
                                        <span className={`text-[15px] md:text-base font-bold transition-colors pr-4 ${openIndex === idx ? 'text-[#1e40af]' : 'text-slate-900 group-hover:text-[#1e40af]'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-[#f1a134] text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-slate-100'}`}>
                                            {openIndex === idx ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
                                        </div>
                                    </button>

                                    {openIndex === idx && (
                                        <div className="px-6 pb-5 animate-in fade-in slide-in-from-top-2 duration-300 border-t border-slate-50 mt-1 pt-4">
                                            <p className="text-slate-500 font-medium text-[14px] leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-2xl">
                                <p className="text-slate-400 font-bold text-sm">No FAQs available at the moment.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQLayout;
