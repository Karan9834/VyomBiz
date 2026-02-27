import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2, ShieldCheck, Loader2 } from "lucide-react";

/**
 * HeroCTA Component
 * Redesigned for modern SaaS layout balance and premium conversion density.
 * Strictly adheres to VyomBiz brand guidelines.
 */
const HeroCTA = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        service: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isValid, setIsValid] = useState(false);

    // Scroll into view if URL contains #free-consultation
    useEffect(() => {
        if (location.hash === '#free-consultation') {
            const element = document.getElementById('free-consultation');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location.hash]);

    // Real-time validation
    useEffect(() => {
        const validateForm = () => {
            const newErrors = {};

            if (formData.fullName && formData.fullName.trim().length < 2) {
                newErrors.fullName = "Name too short";
            }

            if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                newErrors.email = "Invalid email";
            }

            if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
                newErrors.phone = "Invalid phone";
            }

            setErrors(newErrors);

            const allFilled = formData.fullName && formData.email && formData.phone && formData.service;
            setIsValid(allFilled && Object.keys(newErrors).length === 0);
        };

        validateForm();
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (isSuccess) setIsSuccess(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) return;

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ fullName: "", email: "", phone: "", service: "" });
        }, 1200);
    };

    return (
        <section id="free-consultation" className="relative w-full overflow-hidden bg-white py-4 md:py-6">
            <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-12 animate-fade-in">
                <div className="relative flex flex-col lg:flex-row items-stretch overflow-hidden rounded-[2rem] bg-white shadow-[0_40px_80px_-20px_rgba(7,43,71,0.08)] border border-slate-50 min-h-[450px]">

                    {/* LEFT SIDE: Content Panel - Rebalanced (50%) */}
                    <div className="relative w-full lg:w-1/2 px-6 md:px-10 py-6 md:py-8 flex flex-col justify-between overflow-hidden">
                        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#072b47] via-[#0a3d64] to-[#005a9c]" />

                        <div className="relative z-10 space-y-4">
                            {/* Trust Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <ShieldCheck size={14} className="text-[#FFE90A]" />
                                <span className="text-white/90 text-[10px] font-black uppercase tracking-widest pl-1">
                                    Expert Verified
                                </span>
                            </div>

                            {/* Headline (Scaled up to fill space) */}
                            <div className="space-y-3">
                                <h2 className="text-3xl md:text-[2.75rem] lg:text-[3.25rem] font-black text-white leading-[1.1] tracking-tight">
                                    Your success is our <br />priority. <span className="text-[#FFE90A] block mt-1">We handle the rest.</span>
                                </h2>
                                <div className="w-20 h-1.5 bg-[#FFE90A] rounded-full" />
                            </div>

                            {/* Description (Concise & Scannable) */}
                            <div className="max-w-lg space-y-3 pt-2">
                                <p className="text-[16px] md:text-[1.125rem] text-blue-50/90 leading-relaxed font-semibold">
                                    Navigating legal compliance shouldn't be your burden. We simplify the complexity for you.
                                </p>
                                <p className="text-[14px] md:text-[1rem] text-blue-50/60 leading-relaxed font-medium">
                                    Join <span className="text-white font-black">25,000+ businesses</span> who trust VyomBiz for their growth journey.
                                </p>
                            </div>

                            {/* Feature List (Tighter Rhythm) */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 pt-1">
                                {[
                                    "Expert Guidance",
                                    "24/7 Priority Support",
                                    "Fast Turnaround",
                                    "Flat Pricing"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2.5 group translate-x-0 hover:translate-x-1 transition-transform">
                                        <div className="w-4 h-4 rounded-sm bg-[#FFE90A]/10 border border-[#FFE90A]/20 flex items-center justify-center">
                                            <CheckCircle2 size={10} className="text-[#FFE90A]" />
                                        </div>
                                        <span className="text-blue-50 font-bold text-[13px]">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom Contact (Unified Visual Base) */}
                        <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="space-y-0.5">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-[#FFE90A]/70 block">Global HQ</span>
                                    <p className="text-[12px] font-bold text-white/80">Noida, India</p>
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-[#FFE90A]/70 block">Connect</span>
                                    <p className="text-[12px] font-bold text-white/80">+91 91212 30280</p>
                                </div>
                                <div className="space-y-0.5 md:text-right">
                                    <span className="text-[9px] font-black uppercase tracking-widest text-[#FFE90A]/70 block">Email Support</span>
                                    <p className="text-[12px] font-bold text-white/80">hello@vyombiz.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Consultation Form - Strengthened (50%) */}
                    <div className="relative w-full lg:w-1/2 bg-gradient-to-br from-[#fff7b8] via-[#FFE90A] to-[#e6d209] flex items-center justify-center p-4 md:p-6 lg:p-8">
                        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                            <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#072b47 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                        </div>

                        <div className="relative z-10 w-full">
                            <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(7,43,71,0.06)] border border-slate-100 w-full max-w-[480px] mx-auto">
                                <div className="mb-6 text-center">
                                    <h3 className="text-[1.35rem] font-black text-[#072b47] mb-1 tracking-tight">
                                        Free Consultation
                                    </h3>
                                    <p className="text-slate-400 font-bold text-sm">
                                        Expert callback in <span className="text-[#005a9c]">2 hours</span>.
                                    </p>
                                </div>

                                {isSuccess ? (
                                    <div className="text-center py-10 animate-fade-in">
                                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                                            <CheckCircle2 size={32} className="text-green-500" />
                                        </div>
                                        <h4 className="text-xl font-black text-[#072b47] mb-2">Success!</h4>
                                        <p className="text-slate-500 font-bold text-sm mb-7">Our experts will call you back shortly.</p>
                                        <button onClick={() => setIsSuccess(false)} className="text-[#005a9c] font-black text-[11px] uppercase tracking-widest hover:underline">New Inquiry</button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-3.5">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                                            <input type="text" name="fullName" placeholder="John Doe" value={formData.fullName} onChange={handleChange}
                                                className={`w-full px-5 py-3 rounded-xl border ${errors.fullName ? 'border-red-200 bg-red-50/20' : 'border-slate-100 bg-slate-50/30'} text-[13px] text-slate-700 outline-none focus:border-[#FFE90A] focus:bg-white font-bold transition-all shadow-sm focus:ring-4 focus:ring-[#FFE90A]/30`} />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Work Email</label>
                                            <input type="email" name="email" placeholder="john@work.com" value={formData.email} onChange={handleChange}
                                                className={`w-full px-5 py-3 rounded-xl border ${errors.email ? 'border-red-200 bg-red-50/20' : 'border-slate-100 bg-slate-50/30'} text-[13px] text-slate-700 outline-none focus:border-[#FFE90A] focus:bg-white font-bold transition-all shadow-sm focus:ring-4 focus:ring-[#FFE90A]/30`} />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                                            <input type="tel" name="phone" placeholder="+91 0000 0000" value={formData.phone} onChange={handleChange}
                                                className={`w-full px-5 py-3 rounded-xl border ${errors.phone ? 'border-red-200 bg-red-50/20' : 'border-slate-100 bg-slate-50/30'} text-[13px] text-slate-700 outline-none focus:border-[#FFE90A] focus:bg-white font-bold transition-all shadow-sm focus:ring-4 focus:ring-[#FFE90A]/30`} />
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Service Type</label>
                                            <div className="relative">
                                                <select name="service" value={formData.service} onChange={handleChange}
                                                    className="w-full px-5 py-3 rounded-xl border border-slate-100 bg-slate-50/30 text-[13px] text-slate-700 outline-none appearance-none cursor-pointer focus:border-[#FFE90A] focus:bg-white font-bold transition-all shadow-sm focus:ring-4 focus:ring-[#FFE90A]/30">
                                                    <option value="" disabled>Choose service</option>
                                                    <option value="incorporation">Incorporation</option>
                                                    <option value="trademark">Trademark Filing</option>
                                                    <option value="compliance">Annual Compliance</option>
                                                    <option value="lawyer">Legal Consultation</option>
                                                </select>
                                                <ArrowRight size={14} className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 text-[#072b47]" />
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <button type="submit" disabled={!isValid || isSubmitting}
                                                className={`group relative w-full py-3.5 rounded-xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 ${!isValid || isSubmitting ? 'bg-slate-100 text-slate-300' : 'bg-[#FFE90A] text-[#072b47] shadow-xl shadow-[#FFE90A]/20 hover:shadow-[#FFE90A]/40 hover:-translate-y-1'}`}>
                                                {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <>Get Callback <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>}
                                            </button>
                                            <p className="text-center text-[9px] text-slate-400 mt-3 font-bold uppercase tracking-widest">
                                                🔒 Trusted by 25k+ Founders
                                            </p>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.3s ease-out forwards;
                }
            ` }} />
        </section>
    );
};

export default HeroCTA;
