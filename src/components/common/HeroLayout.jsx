import React, { useState } from "react";
import { CheckCircle2, Star, ChevronRight, Phone, MessageSquare } from "lucide-react";

/**
 * Universal Hero Layout for Registration Pages
 */
const HeroLayout = ({
    announcementText = "We are India's leading brand for Business Registration.",
    heroTitlePrefix = "",
    heroTitleMain = "Registration",
    heroTitleSuffix = "in India",
    heroSubtitle = "Avail 50% Off – Professional Services",
    heroDescription = "Start your business journey with expert legal assistance and 100% money-back guarantee.",
    whatsIncludedTitle = "What's included?",
    whatsIncludedList = [],
    successRateText = "Successfully Registered 50k+ Companies, 99% Success Rate",
    stats = [
        { count: "42803+", label: "Happy Clients", icon: "🤝" },
        { count: "3500+", label: "Expert Advisors", icon: "👥" },
        { count: "50+", label: "Branch Offices", icon: "🏢" }
    ],
    formTitle = "Get Free Expert Consultation",
    offerBannerTitle = "Republic Day",
    offerBannerPrice = "₹499 — ₹0"
}) => {
    const [whatsappEnabled, setWhatsappEnabled] = useState(true);

    return (
        <div className="relative bg-[#FFFAF5]">
            {/* Top Announcement Bar */}
            <div className="bg-[#FFF8ED] py-1.5 border-b border-orange-100/50">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-[12px] md:text-[13px] font-medium text-slate-500">
                        {announcementText} — <span className="text-[#f1a134] font-bold cursor-pointer hover:underline">Start your dream business with us!</span>
                    </p>
                </div>
            </div>

            {/* Main Hero Section */}
            <section className="relative lg:min-h-[calc(100vh-64px-36px)] flex items-center overflow-hidden py-12 lg:py-0">
                {/* Background Design (Diagonal Shapes) */}
                <div className="absolute top-0 right-0 w-[45%] h-full hidden lg:block pointer-events-none transition-transform duration-1000">
                    <div className="absolute top-[-10%] right-[-10%] w-[120%] h-[70%] bg-[#1e40af] transform rotate-[-15deg] origin-top-right" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[50%] bg-[#f1a134] transform rotate-[-15deg] origin-bottom-right" />
                </div>

                <div className="container mx-auto px-6 lg:px-12 xl:pl-32 relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-8 items-center">

                        {/* Left Content */}
                        <div className="lg:col-span-7 py-4 lg:py-0">
                            <h1 className="text-3xl lg:text-5xl font-[900] text-[#111827] mb-3 leading-tight tracking-tight">
                                {heroTitlePrefix && <span>{heroTitlePrefix} </span>}
                                <span className="text-[#f1a134]">{heroTitleMain}</span> {heroTitleSuffix}
                            </h1>

                            <h2 className="text-lg lg:text-2xl font-black text-slate-800 mb-4 italic">
                                {heroSubtitle}
                            </h2>

                            <p className="text-slate-500 font-bold text-[15px] leading-relaxed mb-6 max-w-xl">
                                {heroDescription}
                            </p>

                            <div className="mb-6">
                                <p className="text-[#f1a134] font-black text-[15px] mb-3 tracking-wide uppercase">{whatsIncludedTitle}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-6">
                                    {whatsIncludedList.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2.5">
                                            <CheckCircle2 size={18} className="text-[#1e40af] shrink-0" strokeWidth={3} />
                                            <span className="font-bold text-slate-700 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 flex items-center gap-2">
                                    <Star size={14} className="text-[#f1a134] fill-[#f1a134]" />
                                    <p className="font-bold text-slate-700 text-sm">{successRateText}</p>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-8">
                                <button className="w-full sm:w-auto bg-[#1e40af] text-white px-7 py-3.5 rounded-lg font-black flex items-center justify-center gap-2 hover:bg-blue-800 transition-all shadow-lg text-sm">
                                    Schedule a call
                                    <ChevronRight size={18} />
                                </button>

                                <div className="flex items-center gap-4 md:gap-6 scale-90 sm:scale-100 origin-center sm:origin-left">
                                    <div className="flex items-center gap-2">
                                        <div className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center border border-slate-100 shrink-0">
                                            <span className="text-[#4285F4] font-black text-lg">G</span>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-0.5">Google Reviews</p>
                                            <div className="flex items-center gap-1">
                                                <span className="font-black text-sm text-slate-700">4.8</span>
                                                <div className="flex text-[#f1a134]">
                                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={8} fill="currentColor" />)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center border border-slate-100 shrink-0">
                                            <Star size={18} className="text-[#00b67a] fill-[#00b67a]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter leading-none mb-0.5">Trustpilot</p>
                                            <div className="flex text-[#00b67a] gap-0.5">
                                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-2.5 h-2.5 bg-[#00b67a]" />)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Stats Tiles - Compact */}
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-2xl">
                                {stats.map((stat, i) => (
                                    <div key={i} className="flex items-center gap-2 md:gap-3 bg-[#FFF8ED]/50 p-2.5 md:p-3 rounded-xl border border-orange-100/50 shadow-sm transition-transform hover:scale-105">
                                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-base md:text-xl shrink-0">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <p className="text-sm md:text-lg font-black text-slate-900 leading-none mb-0.5">{stat.count}</p>
                                            <p className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-tight">{stat.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Form */}
                        <div className="lg:col-span-5 relative">
                            {/* Republic Day Special Offer Banner */}
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-2 z-20">
                                <div className="relative transform rotate-[-8deg] origin-center scale-90">
                                    <div className="bg-[#22c55e] text-white px-5 py-2 rounded shadow-xl border-2 border-white">
                                        <p className="text-[9px] font-bold text-center leading-none mb-1 opacity-90 tracking-tighter line-through decoration-white/60">{offerBannerPrice}</p>
                                        <h4 className="text-xs font-black text-center whitespace-nowrap mb-0.5 uppercase tracking-tighter">{offerBannerTitle}</h4>
                                        <p className="text-[9px] font-bold text-center leading-none opacity-80 uppercase tracking-widest bg-white/20 rounded inline-block w-full">OFFER</p>
                                    </div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#22c55e]" />
                                </div>
                            </div>

                            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 max-w-md mx-auto">
                                <h3 className="text-xl font-extrabold text-slate-900 mb-6 text-center">{formTitle}</h3>

                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-lg focus:border-[#f1a134] outline-none transition-all font-medium text-slate-700 text-sm"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-lg focus:border-[#f1a134] outline-none transition-all font-medium text-slate-700 text-sm"
                                    />
                                    <div className="flex gap-0 border border-slate-200 rounded-lg overflow-hidden focus-within:border-[#f1a134] transition-all">
                                        <div className="px-3 py-3.5 bg-slate-50 border-r border-slate-200 flex items-center gap-1.5">
                                            <img src="https://flagcdn.com/w20/in.png" alt="IN" className="w-5" />
                                            <span className="font-bold text-slate-600 text-sm">+91</span>
                                        </div>
                                        <input
                                            type="tel"
                                            placeholder="Mobile Number"
                                            className="w-full px-5 py-3.5 outline-none font-medium text-slate-700 text-sm"
                                        />
                                    </div>
                                    <select className="w-full px-5 py-3.5 bg-white border border-slate-200 rounded-lg focus:border-[#f1a134] outline-none transition-all font-medium text-slate-700 text-sm appearance-none bg-[url('https://cdn0.iconfinder.com/data/icons/font-awesome-solid-vol-1/512/chevron-down-512.png')] bg-[length:12px] bg-[right_15px_center] bg-no-repeat">
                                        <option value="">Select State</option>
                                        <option>Delhi</option>
                                        <option>Maharashtra</option>
                                        <option>Karnataka</option>
                                    </select>

                                    <div className="flex items-center justify-between pt-1">
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded border border-green-100">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="Whatsapp" className="w-3.5 h-3.5" />
                                                <span className="text-[11px] font-black text-green-600 uppercase">Whatsapp</span>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setWhatsappEnabled(!whatsappEnabled)}
                                            className={`w-10 h-5 rounded-full relative transition-all duration-300 ${whatsappEnabled ? 'bg-green-500' : 'bg-slate-300'}`}
                                        >
                                            <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all duration-300 ${whatsappEnabled ? 'left-5.5' : 'left-0.5'}`} />
                                        </button>
                                    </div>

                                    <button className="w-full py-4 bg-[#f1a134] text-white font-black rounded-lg shadow-lg hover:brightness-105 transition-all uppercase tracking-widest text-sm">
                                        GET STARTED NOW
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroLayout;
