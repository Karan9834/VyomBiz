import React, { useState } from "react";
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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        state: ""
    });
    const [errors, setErrors] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
            newErrors.name = "Only letters allowed";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name too short";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email";
        } else {
            const domain = formData.email.split('@')[1].toLowerCase();
            const blockedDomains = ['yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'ymail.com', 'rediffmail.com', 'live.com'];
            if (blockedDomains.includes(domain)) {
                newErrors.email = "Use Work Mail or Gmail only";
            }
        }

        if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Exactly 10 digits required";
        }

        if (!/^[a-zA-Z\s]+$/.test(formData.city)) {
            newErrors.city = "Only letters allowed";
        }

        if (!formData.state) {
            newErrors.state = "State is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const numericValue = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({ ...prev, [name]: numericValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const pageName = `${heroTitlePrefix} ${heroTitleMain} ${heroTitleSuffix}`.trim();
        const text = `Hello, I'm interested in ${pageName}.

My Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- City: ${formData.city}
- State: ${formData.state}`;
        const whatsappLink = `https://wa.me/918448909389?text=${encodeURIComponent(text)}`;
        window.open(whatsappLink, "_blank");

        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", city: "", state: "" });
    };

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

                            {isSuccess ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                                        <CheckCircle2 size={32} className="text-green-500" />
                                    </div>
                                    <h4 className="text-xl font-black text-[#072b47] mb-2">Thank you for choosing VyomBiz!</h4>
                                    <p className="text-slate-500 font-bold text-sm mb-7">Our experts will connect with you shortly.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-[#005a9c] font-black text-[11px] uppercase tracking-widest hover:underline"
                                    >
                                        New Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form className="space-y-5" onSubmit={handleSubmit}>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-slate-50'} focus:border-[#005a9c] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium`}
                                        />
                                        {errors.name && <p className="text-red-500 text-[11px] font-bold mt-1 ml-1">{errors.name}</p>}
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-slate-50'} focus:border-[#005a9c] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium`}
                                        />
                                        {errors.email && <p className="text-red-500 text-[11px] font-bold mt-1 ml-1">{errors.email}</p>}
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Mobile Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            maxLength="10"
                                            className={`w-full px-5 py-4 rounded-xl border ${errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-slate-50'} focus:border-[#005a9c] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium`}
                                        />
                                        {errors.phone && <p className="text-red-500 text-[11px] font-bold mt-1 ml-1">{errors.phone}</p>}
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="relative w-1/2">
                                            <input
                                                type="text"
                                                name="city"
                                                placeholder="City"
                                                value={formData.city}
                                                onChange={handleChange}
                                                required
                                                className={`w-full px-5 py-4 rounded-xl border ${errors.city ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-slate-50'} focus:border-[#005a9c] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium`}
                                            />
                                            {errors.city && <p className="text-red-500 text-[11px] font-bold mt-1 ml-1">{errors.city}</p>}
                                        </div>
                                        <div className="relative w-1/2">
                                            <select
                                                name="state"
                                                className={`w-full px-5 py-4 rounded-xl border ${errors.state ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-slate-50'} focus:border-[#005a9c] focus:bg-white outline-none transition-all text-slate-700 font-medium appearance-none`}
                                                value={formData.state}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="" disabled hidden>Select State</option>
                                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                                <option value="Assam">Assam</option>
                                                <option value="Bihar">Bihar</option>
                                                <option value="Chhattisgarh">Chhattisgarh</option>
                                                <option value="Goa">Goa</option>
                                                <option value="Gujarat">Gujarat</option>
                                                <option value="Haryana">Haryana</option>
                                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                                <option value="Jharkhand">Jharkhand</option>
                                                <option value="Karnataka">Karnataka</option>
                                                <option value="Kerala">Kerala</option>
                                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                <option value="Maharashtra">Maharashtra</option>
                                                <option value="Manipur">Manipur</option>
                                                <option value="Meghalaya">Meghalaya</option>
                                                <option value="Mizoram">Mizoram</option>
                                                <option value="Nagaland">Nagaland</option>
                                                <option value="Odisha">Odisha</option>
                                                <option value="Punjab">Punjab</option>
                                                <option value="Rajasthan">Rajasthan</option>
                                                <option value="Sikkim">Sikkim</option>
                                                <option value="Tamil Nadu">Tamil Nadu</option>
                                                <option value="Telangana">Telangana</option>
                                                <option value="Tripura">Tripura</option>
                                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                                <option value="Uttarakhand">Uttarakhand</option>
                                                <option value="West Bengal">West Bengal</option>
                                            </select>
                                            {errors.state && <p className="text-red-500 text-[11px] font-bold mt-1 ml-1">{errors.state}</p>}
                                        </div>
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
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroLayout;
