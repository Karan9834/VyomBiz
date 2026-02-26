import React from "react";
import { Phone, Star, CheckCircle2, ChevronRight, Users, Scale, ThumbsUp, Briefcase } from 'lucide-react';

/**
 * Universal Hero Layout for Registration Pages
 * Updated to match the Finance Lawyer page styling as per user request.
 */
const HeroLayout = ({
    heroTitlePrefix = "",
    heroTitleMain = "Registration",
    heroTitleSuffix = "in India",
    heroSubtitle = "",
    heroDescription = "Start your business journey with expert legal assistance and 100% money-back guarantee.",
    stats = [
        { count: "5,00,000+", label: "Happy User" },
        { count: "1,00,000+", label: "Cases Resolved" },
        { count: "300+", label: "Expert Advisors" },
        { count: "50+", label: "Services" }
    ],
    formTitle = "Facing a Legal Issue? Connect with an Expert Lawyer Now!",
    bgImage = "/lawyer-service-hero-section-img/hero-section-bg-img.png"
}) => {

    return (
        <section className="relative pt-6 pb-16 lg:pt-8 lg:pb-20 overflow-hidden border-b border-slate-50 bg-white min-h-screen font-sans text-slate-900">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${bgImage}')` }}
            />

            <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">

                {/* Breadcrumb - Dynamic based on title */}
                <div className="flex items-center gap-2 text-[13px] font-normal text-slate-500 mb-8 mt-10">
                    <a href="/" className="hover:text-[#005a9c] underline underline-offset-4">Home</a>
                    <span>&gt;</span>
                    <span className="text-slate-600">{heroTitleMain} {heroTitleSuffix}</span>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mt-10">

                    {/* Left Content */}
                    <div className="w-full lg:w-[60%] space-y-8">
                        <h1 className="text-4xl lg:text-5xl font-semibold text-[#072b47] leading-[1.15] tracking-tight">
                            {heroTitlePrefix && <span>{heroTitlePrefix} </span>}
                            {heroTitleMain} <br className="hidden lg:block" />
                            {heroTitleSuffix}
                        </h1>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            {heroDescription}
                        </p>

                        {/* Status Pills */}
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center gap-3 bg-white border border-slate-100 shadow-sm rounded-xl px-4 py-2.5">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden shadow-sm">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="Expert" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                                    <span className="text-sm font-bold text-slate-700">480+ Experts are online</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white border border-slate-100 shadow-sm rounded-xl px-4 py-2.5">
                                <div className="bg-[#f0f7ff] p-1.5 rounded-full">
                                    <Phone size={16} fill="currentColor" stroke="none" className="text-[#005a9c]" />
                                </div>
                                <span className="text-sm font-bold text-slate-700">120+ ongoing calls</span>
                                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)] ml-1" />
                            </div>
                        </div>

                        {/* Bottom Stats Grid */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100/80 flex items-center justify-between max-w-3xl">
                            {stats.slice(0, 4).map((stat, index) => (
                                <React.Fragment key={index}>
                                    <div className={`flex-1 ${index >= 3 ? 'hidden lg:block text-right' : ''}`}>
                                        <h3 className="text-2xl font-semibold text-[#072b47]">{stat.count}</h3>
                                        <p className="text-[13px] text-slate-400 font-bold uppercase tracking-wider mt-1">{stat.label}</p>
                                    </div>
                                    {index < stats.slice(0, 4).length - 1 && (
                                        <div className={`h-10 w-[1px] bg-slate-200 mx-6 ${index === 2 ? 'hidden lg:block' : 'hidden sm:block'}`} />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="w-full lg:w-[35%] shrink-0">
                        <div className="bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-100 p-8">
                            <h3 className="text-[22px] font-semibold text-[#072b47] mb-8 leading-tight text-center">
                                {formTitle}
                            </h3>

                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50 focus:border-[#005a9c] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium"
                                    />
                                </div>
                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50 focus:border-[#005a9c] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium"
                                    />
                                </div>

                                <div className="text-[11px] text-center text-slate-400 font-bold uppercase tracking-wider">
                                    By proceeding, you agree to our <a href="#" className="text-[#005a9c] hover:underline">T&C*</a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#072b47] text-white font-semibold text-[17px] py-4 rounded-xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 active:scale-95"
                                >
                                    Connect with Expert
                                </button>
                            </form>

                            <div className="mt-8 flex items-center justify-center gap-4 pt-8 border-t border-slate-100">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-8 h-8" />
                                <div className="text-left">
                                    <h4 className="font-black text-[#072b47] text-[15px]">Google Reviews</h4>
                                    <div className="flex items-center gap-2">
                                        <div className="flex text-yellow-400 text-sm gap-0.5">
                                            {'★'.repeat(5)}
                                        </div>
                                        <span className="text-[13px] font-black text-slate-600">4.5/5</span>
                                        <span className="text-[12px] text-slate-400 font-bold ml-1">20k+ Happy Reviews</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroLayout;
