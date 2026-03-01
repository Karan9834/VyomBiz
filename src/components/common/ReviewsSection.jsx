import React, { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Universal Reviews / Testimonials Section
 * @param {Array} reviews  - Array of { name, role, company, rating, text, initials }
 * @param {string} title   - Section heading
 * @param {string} subtitle - Sub-heading
 */
const ReviewsSection = ({
    title = "What Our Clients Say",
    subtitle = "Trusted by 5000+ businesses across India for EPR and environmental compliance.",
    reviews = [],
}) => {
    const [active, setActive] = useState(0);

    const defaultReviews = [
        {
            name: "Rajesh Kumar",
            role: "Director",
            company: "TechVision Electronics Pvt. Ltd.",
            rating: 5,
            initials: "RK",
            text: "Corpbiz made our EPR registration incredibly smooth. Their team handled all the documentation, portal registration, and CPCB follow-ups end-to-end. We got our EPR certificate in less than 3 weeks — absolutely phenomenal service!",
        },
        {
            name: "Priya Sharma",
            role: "Compliance Manager",
            company: "GreenPack Innovations",
            rating: 5,
            initials: "PS",
            text: "As a plastic packaging company, EPR compliance was always a headache. Corpbiz's team not only got us registered but also helped us understand the PWM credit mechanism. Our annual returns are always filed on time without any stress.",
        },
        {
            name: "Anil Mehta",
            role: "CEO",
            company: "BatteryPlus Import & Distribution",
            rating: 5,
            initials: "AM",
            text: "We import batteries and had no idea about EPR requirements. Customs detained our shipment and Corpbiz resolved the EPR registration emergency within days. They are our go-to compliance partner now for all categories.",
        },
        {
            name: "Sunita Rao",
            role: "Environmental Head",
            company: "Electronica Recyclers Ltd.",
            rating: 5,
            initials: "SR",
            text: "Getting our e-waste recycling authorization seemed impossible with all the documentation from SPCB and CPCB. Corpbiz managed everything — from CTE to CTO to final CPCB authorization. Highly professional team!",
        },
        {
            name: "Vivek Joshi",
            role: "Founder",
            company: "NaturePack Solutions",
            rating: 5,
            initials: "VJ",
            text: "The EPR credits procurement service from Corpbiz saved us from a huge penalty. They found verified recyclers, negotiated excellent prices, and completed the portal transaction within 48 hours. 10/10 service quality!",
        },
        {
            name: "Ananya Singh",
            role: "Operations Director",
            company: "Bharat Consumer Electronics",
            rating: 5,
            initials: "AS",
            text: "Corpbiz has been managing our EPR compliance for 3 years now. Their proactive approach — monthly reminders, quarterly reports, target tracking — means we never have to worry about missing a deadline or paying penalties.",
        },
    ];

    const displayReviews = reviews.length > 0 ? reviews : defaultReviews;
    const visible = 3;
    const pages = Math.ceil(displayReviews.length / visible);

    const prev = () => setActive((p) => (p === 0 ? pages - 1 : p - 1));
    const next = () => setActive((p) => (p === pages - 1 ? 0 : p + 1));

    const current = displayReviews.slice(active * visible, active * visible + visible);

    return (
        <section className="py-16 bg-[#f8fafc] border-t border-slate-100">
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 xl:px-24">

                {/* Header */}
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full text-amber-600 text-xs font-black uppercase tracking-wider mb-6">
                        <Star size={12} fill="currentColor" />
                        <span>Client Reviews</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#072b47] mb-4 leading-tight">
                        {title.split(' ').slice(0, -2).join(' ')}{' '}
                        <span className="text-[#f1a134]">{title.split(' ').slice(-2).join(' ')}</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">{subtitle}</p>

                    {/* Star rating badge */}
                    <div className="flex items-center justify-center gap-1.5 mt-6">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={22} className="text-amber-400" fill="#fbbf24" />
                        ))}
                        <span className="ml-2 text-slate-700 font-black text-sm">4.9 / 5.0</span>
                        <span className="text-slate-400 font-bold text-sm ml-1">· 5000+ Reviews</span>
                    </div>
                </div>

                {/* Review Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    {current.map((r, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5"
                        >
                            {/* Quote icon */}
                            <Quote className="text-[#f1a134] opacity-40" size={32} />

                            {/* Stars */}
                            <div className="flex gap-1">
                                {Array.from({ length: r.rating || 5 }).map((_, si) => (
                                    <Star key={si} size={15} fill="#fbbf24" className="text-amber-400" />
                                ))}
                            </div>

                            {/* Review text */}
                            <p className="text-slate-600 font-medium text-[14px] leading-relaxed flex-1">
                                "{r.text}"
                            </p>

                            {/* Reviewer info */}
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1e40af] to-[#3b82f6] flex items-center justify-center text-white font-black text-sm shrink-0">
                                    {r.initials || r.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                </div>
                                <div>
                                    <p className="font-black text-[#072b47] text-sm">{r.name}</p>
                                    <p className="text-xs text-slate-500 font-bold">
                                        {r.role}{r.company ? `, ${r.company}` : ''}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                {pages > 1 && (
                    <div className="flex items-center justify-center gap-4">
                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#1e40af] hover:text-white hover:border-[#1e40af] transition-all shadow-sm"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <div className="flex gap-2">
                            {Array.from({ length: pages }).map((_, pi) => (
                                <button
                                    key={pi}
                                    onClick={() => setActive(pi)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${active === pi ? 'bg-[#f1a134] w-8' : 'bg-slate-200 hover:bg-slate-300'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#1e40af] hover:text-white hover:border-[#1e40af] transition-all shadow-sm"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                )}

                {/* Platform badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={13} fill="#fbbf24" className="text-amber-400" />)}
                        </div>
                        <span>Google Reviews</span>
                    </div>
                    <div className="w-px h-5 bg-slate-200" />
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={13} fill="#00b67a" className="text-green-500" />)}
                        </div>
                        <span>Trustpilot Reviews</span>
                    </div>
                    <div className="w-px h-5 bg-slate-200" />
                    <div className="text-sm font-black text-[#072b47]">
                        43,298+ Happy Clients
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
