import React, { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

const HeroCTA = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        service: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add logic for lead capture here
    };

    return (
        <section className="relative w-full overflow-hidden bg-white py-8 md:py-12 lg:py-16">
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
                <div className="relative flex flex-col lg:flex-row overflow-hidden rounded-[2.5rem] bg-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border border-slate-50">

                    {/* LEFT SIDE: Emotional + Trust Content */}
                    <div className="relative w-full lg:w-[55%] lg:min-h-[600px] px-8 md:px-12 lg:px-16 py-10 lg:py-12 flex flex-col justify-between overflow-hidden">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#072b47] via-[#0a3d64] to-[#005a9c]" />

                        {/* Subtle Decorative Elements */}
                        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none opacity-10">
                            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-white rounded-full blur-[120px]" />
                            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-400 rounded-full blur-[120px]" />
                        </div>

                        <div className="relative z-10">
                            {/* Trust Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                                <ShieldCheck size={14} className="text-blue-300" />
                                <span className="text-white/90 text-[11px] font-bold uppercase tracking-widest">
                                    Secure & Confidential
                                </span>
                            </div>

                            {/* Main Headline */}
                            <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-[1.2] tracking-tight mb-6 mt-2">
                                Your success is our priority. <span className="text-blue-300">We handle the rest.</span>
                            </h2>

                            {/* Emotional Paragraph */}
                            <div className="max-w-md space-y-4">
                                <p className="text-[15px] md:text-[16px] text-blue-50/80 leading-relaxed font-medium">
                                    Navigating legal and business compliance shouldn't be your burden. We understand the sleepless nights and the complex paperwork.
                                </p>
                                <p className="text-[15px] md:text-[16px] text-blue-50/80 leading-relaxed font-medium">
                                    Join 25,000+ businesses who trust VyomBiz to guide them through every growth milestone.
                                </p>
                            </div>

                            {/* Quality Checklist */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    "Expert Legal Guidance",
                                    "24/7 Priority Support",
                                    "Fastest Turnaround",
                                    "Transparent Pricing"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2.5 group cursor-default">
                                        <div className="w-5 h-5 rounded-full bg-blue-400/20 border border-blue-400/30 flex items-center justify-center transition-all group-hover:bg-blue-400/40">
                                            <CheckCircle2 size={12} className="text-blue-300" />
                                        </div>
                                        <span className="text-blue-50 font-semibold text-[14px]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Contact Block */}
                        <div className="relative z-10 mt-10 lg:mt-12 pt-8 border-t border-white/10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="group cursor-pointer">
                                    <div className="flex items-center gap-2.5 text-blue-200/50 group-hover:text-blue-200 transition-colors mb-2">
                                        <MapPin size={16} />
                                        <span className="text-[11px] font-bold uppercase tracking-wider">Office</span>
                                    </div>
                                    <p className="text-[13px] font-medium text-white/70 leading-relaxed">
                                        A-12, Sector 4, <br />Noida, UP 201301
                                    </p>
                                </div>

                                <div className="group cursor-pointer">
                                    <div className="flex items-center gap-2.5 text-blue-200/50 group-hover:text-blue-200 transition-colors mb-2">
                                        <Phone size={16} />
                                        <span className="text-[11px] font-bold uppercase tracking-wider">Call Us</span>
                                    </div>
                                    <p className="text-[13px] font-medium text-white/70">
                                        +91 9121230280
                                    </p>
                                </div>

                                <div className="group cursor-pointer">
                                    <div className="flex items-center gap-2.5 text-blue-200/50 group-hover:text-blue-200 transition-colors mb-2">
                                        <Mail size={16} />
                                        <span className="text-[11px] font-bold uppercase tracking-wider">Email</span>
                                    </div>
                                    <p className="text-[13px] font-medium text-white/70">
                                        hello@vyombiz.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Form Section */}
                    <div className="relative w-full lg:w-[45%] bg-[#f8fbff] flex items-center justify-center px-6 md:px-12 py-10 lg:py-16">
                        {/* Subtle light background patterns */}
                        <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#005a9c" strokeWidth="1" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                        </div>

                        {/* Form Card */}
                        <div className="relative z-10 w-full max-w-lg">
                            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,90,156,0.06)] border border-blue-50 transition-all hover:shadow-[0_25px_60px_rgba(0,90,156,0.1)]">
                                <div className="mb-6 ">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#072b47] mb-1.5 tracking-tight">
                                        Start Your Journey
                                    </h3>
                                    <p className="text-slate-500 font-semibold text-[14px]">
                                        Fill the form for an expert callback.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="fullName" className="text-[11px] font-bold text-[#072b47]/80 uppercase tracking-widest ml-1">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            placeholder="e.g. Rahul Sharma"
                                            required
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-[14px] text-slate-700 outline-none transition-all focus:border-[#005a9c] focus:bg-white focus:ring-4 focus:ring-blue-100 placeholder:text-slate-300 font-bold"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-[11px] font-bold text-[#072b47]/80 uppercase tracking-widest ml-1">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="rahul@company.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-[14px] text-slate-700 outline-none transition-all focus:border-[#005a9c] focus:bg-white focus:ring-4 focus:ring-blue-100 placeholder:text-slate-300 font-bold"
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex-1 space-y-1.5">
                                            <label htmlFor="phone" className="text-[11px] font-bold text-[#072b47]/80 uppercase tracking-widest ml-1">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="+91 999 999 9999"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-[14px] text-slate-700 outline-none transition-all focus:border-[#005a9c] focus:bg-white focus:ring-4 focus:ring-blue-100 placeholder:text-slate-300 font-bold"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="service" className="text-[11px] font-bold text-[#072b47]/80 uppercase tracking-widest ml-1">
                                            Service
                                        </label>
                                        <div className="relative group">
                                            <select
                                                id="service"
                                                name="service"
                                                required
                                                value={formData.service}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-[14px] text-slate-700 outline-none transition-all appearance-none cursor-pointer focus:border-[#005a9c] focus:bg-white focus:ring-4 focus:ring-blue-100 font-bold"
                                            >
                                                <option value="" disabled>Select a service</option>
                                                <option value="incorporation">Incorporation</option>
                                                <option value="trademark">Trademark</option>
                                                <option value="gst">Compliance</option>
                                                <option value="lawyer">Lawyer</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#005a9c]/50">
                                                <ArrowRight size={16} className="rotate-90" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3">
                                        <button
                                            type="submit"
                                            className="group relative w-full bg-[#005a9c] text-white font-bold py-4 rounded-xl overflow-hidden transition-all active:scale-[0.98] shadow-lg shadow-blue-100 hover:shadow-xl hover:shadow-blue-200/40"
                                        >
                                            <div className="relative z-10 flex items-center justify-center gap-2.5">
                                                <span className="text-[16px]">Get Consultation</span>
                                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </button>
                                        <p className="text-center text-[10px] text-slate-400 mt-3 font-semibold">
                                            We value your privacy. Your data is secure.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroCTA;
