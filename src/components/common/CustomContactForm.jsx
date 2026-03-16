import React, { useState } from "react";
import { CheckCircle2 } from 'lucide-react';
import emailjs from "@emailjs/browser";
import { stateCityData } from "../../data/stateCityData";

/* 
 * CustomContactForm - A reusable contact form component with validation and EmailJS integration.
 */
const CustomContactForm = ({
    formTitle = "Facing a Legal Issue? Connect with an Expert Lawyer Now!",
    serviceName = "Legal Service"
}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        cityOther: ""
    });
    const [errors, setErrors] = useState({});
    const [isSuccess, setIsSuccess] = useState(false);

    const SERVICE_ID = "service_bauy1ar";
    const TEMPLATE_ID = "template_gkeoypr";
    const PUBLIC_KEY = "ehQ4RR7pRX1PA074B";

    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
            newErrors.name = "Only letters allowed";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name too short";
        }

        // Email validation (blocking common public domains as per VyomBiz policy)
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email";
        } else {
            const domain = formData.email.split('@')[1].toLowerCase();
            const blockedDomains = ['yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'ymail.com', 'rediffmail.com', 'live.com'];
            if (blockedDomains.includes(domain)) {
                newErrors.email = "Use Work Mail or Gmail only";
            }
        }

        // Phone validation
        if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Exactly 10 digits required";
        }

        // State validation
        if (!formData.state) {
            newErrors.state = "State is required";
        }

        // City validation
        if (formData.city === "") {
            newErrors.city = "City is required";
        } else if (formData.city === "Other" && (!/^[a-zA-Z\s]+$/.test(formData.cityOther) || formData.cityOther.trim() === '')) {
            newErrors.cityOther = "Valid city name is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const numericValue = value.replace(/\D/g, '').slice(0, 10);
            setFormData(prev => ({ ...prev, [name]: numericValue }));
        } else if (name === 'state') {
            setFormData(prev => ({ ...prev, state: value, city: "", cityOther: "" }));
        } else if (name === 'city') {
            setFormData(prev => ({ ...prev, city: value, cityOther: "" }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const templateParams = {
            full_name: formData.name,
            email: formData.email,
            phone: formData.phone,
            state: formData.state,
            city: formData.city === "Other" ? formData.cityOther : formData.city,
            service: serviceName
        };

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                templateParams,
                PUBLIC_KEY
            );

            setIsSuccess(true);
            setFormData({
                name: "",
                email: "",
                phone: "",
                state: "",
                city: "",
                cityOther: ""
            });

        } catch (error) {
            console.error("EmailJS Error:", error);
            // In a real app, we'd show an error alert here
        }
    };

    return (
        <div className="bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-100 p-8">
            <h3 className="text-[22px] font-semibold text-[#072b47] mb-8 leading-tight text-center">
                {formTitle}
            </h3>

            {isSuccess ? (
                <div className="text-center py-10 animate-in fade-in duration-500">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
                        <CheckCircle2 size={32} className="text-green-500 animate-bounce" />
                    </div>
                    <h4 className="text-xl font-black text-[#072b47] mb-2 tracking-tight">Thank you for choosing VyomBiz!</h4>
                    <p className="text-slate-500 font-bold text-sm mb-7">Our experts will connect with you shortly.</p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="text-[#005a9c] font-black text-[11px] uppercase tracking-widest hover:underline transition-all"
                    >
                        New Inquiry
                    </button>
                </div>
            ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="relative group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className={`w-full px-5 py-4 rounded-xl border ${errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-slate-50'} focus:border-[#005a9c] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium shadow-sm group-hover:border-slate-400`}
                        />
                        {errors.name && <p className="text-red-500 text-[11px] font-bold mt-1 ml-1 animate-pulse">{errors.name}</p>}
                    </div>
                    <div className="relative group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Work Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full px-5 py-4 rounded-xl border ${errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-slate-50'} focus:border-[#005a9c] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium shadow-sm group-hover:border-slate-400`}
                        />
                        {errors.email && <p className="text-red-500 text-[11px] font-bold mt-1 ml-1 animate-pulse">{errors.email}</p>}
                    </div>
                    <div className="relative group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Mobile Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            maxLength="10"
                            className={`w-full px-5 py-4 rounded-xl border ${errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-slate-50'} focus:border-[#005a9c] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium shadow-sm group-hover:border-slate-400`}
                        />
                        {errors.phone && <p className="text-red-500 text-[11px] font-bold mt-1 ml-1 animate-pulse">{errors.phone}</p>}
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="relative w-1/2 group">
                                <select
                                    name="state"
                                    className={`w-full px-5 py-4 rounded-xl border ${errors.state ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-slate-50'} focus:border-[#005a9c] focus:bg-white outline-none transition-all text-slate-700 font-medium appearance-none shadow-sm group-hover:border-slate-400`}
                                    value={formData.state}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled hidden>Select State</option>
                                    {Object.keys(stateCityData).sort().map(state => (
                                        <option key={state} value={state}>{state}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                                {errors.state && <p className="text-red-500 text-[11px] font-bold mt-1 ml-1 animate-pulse">{errors.state}</p>}
                            </div>

                            <div className="relative w-1/2 group">
                                <select
                                    name="city"
                                    className={`w-full px-5 py-4 rounded-xl border ${errors.city ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-slate-50'} focus:border-[#005a9c] focus:bg-white outline-none transition-all text-slate-700 font-medium appearance-none shadow-sm ${!formData.state ? 'opacity-50 cursor-not-allowed' : 'group-hover:border-slate-400'}`}
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    disabled={!formData.state}
                                >
                                    <option value="" disabled hidden>Select City</option>
                                    {formData.state && stateCityData[formData.state]?.sort().map(city => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                    {formData.state && <option value="Other">Other (Please Specify)</option>}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                                {errors.city && <p className="text-red-500 text-[11px] font-bold mt-1 ml-1 animate-pulse">{errors.city}</p>}
                            </div>
                        </div>

                        {formData.city === "Other" && (
                            <div className="relative w-full animate-in zoom-in-95 duration-200">
                                <input
                                    type="text"
                                    name="cityOther"
                                    placeholder="Enter your city name"
                                    value={formData.cityOther}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-5 py-4 rounded-xl border ${errors.cityOther ? 'border-red-400 bg-red-50/20' : 'border-slate-300 bg-slate-50'} focus:border-[#005a9c] focus:bg-white outline-none transition-all placeholder:text-slate-400 text-slate-700 font-medium shadow-sm`}
                                />
                                {errors.cityOther && <p className="text-red-500 text-[11px] font-bold mt-1 ml-1 animate-pulse">{errors.cityOther}</p>}
                            </div>
                        )}
                    </div>

                    <div className="text-[11px] text-center text-slate-400 font-bold uppercase tracking-wider py-1">
                        By proceeding, you agree to our <a href="#" className="text-[#005a9c] hover:underline decoration-skip-ink-none">T&C*</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#072b47] text-white font-bold text-[17px] py-4 rounded-xl hover:bg-[#005a9c] transition-all shadow-xl shadow-blue-900/10 active:scale-[0.98] outline-none focus:ring-2 focus:ring-[#005a9c] focus:ring-offset-2"
                    >
                        Connect with Expert
                    </button>
                </form>
            )}
        </div>
    );
};

export default CustomContactForm;
