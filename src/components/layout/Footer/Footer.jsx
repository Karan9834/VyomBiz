import React from "react";
import { Link } from "react-router-dom";
import {
    Facebook, Twitter, Instagram, Linkedin, Youtube,
    Phone, Mail, MapPin, ChevronRight
} from "lucide-react";
import { FOOTER_LINKS, SECONDARY_FOOTER_LINKS, LEGAL_LINKS } from "../../../constants/footer";
import Logo from "../../common/Logo";

/**
 * Premium Footer consistent with the VyomBiz Design System
 * Focuses on professional navy/blue aesthetic with high-quality typography.
 */
const Footer = () => {
    return (
        <footer className="w-full bg-[#072b47] text-white font-sans overflow-hidden">

            {/* 1. NEWSLETTER & CTA SECTION */}
            <div className="relative py-10 lg:py-12 border-b border-white/5">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-2xl lg:text-3xl font-semibold mb-3 leading-tight">
                                Transform your business <br />
                                with <span className="text-[#005a9c]">expert legal</span> intelligence.
                            </h2>
                            <p className="text-slate-400 text-base font-medium leading-relaxed max-w-xl">
                                Join 5,00,000+ businesses receiving our weekly compliance updates and strategic growth insights.
                            </p>
                        </div>
                        <div className="w-full lg:w-[40%]">
                            <form className="relative" onSubmit={(e) => e.preventDefault()}>
                                <div className="flex flex-col sm:flex-row gap-3 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                                    <input
                                        type="email"
                                        placeholder="yourname@work.com"
                                        className="flex-1 bg-transparent py-4 px-6 rounded-xl text-white focus:outline-none text-base placeholder:text-slate-500 font-medium"
                                    />
                                    <button className="bg-[#005a9c] hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-blue-900/20">
                                        Subscribe
                                    </button>
                                </div>
                                <p className="text-[12px] text-slate-500 mt-4 text-center sm:text-left font-medium">
                                    By subscribing, you agree to our <Link to="/privacy-policy" className="text-white hover:underline">Privacy Policy</Link>.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. MAIN NAVIGATION GRID */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-5">
                        <Logo />
                        <p className="text-slate-400 text-[15px] leading-relaxed font-medium pr-10">
                            The intelligent compliance platform for modern enterprises. We simplify complex legal frameworks through AI-driven solutions and expert human intelligence.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors cursor-default group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#005a9c] transition-all">
                                    <Phone size={18} />
                                </div>
                                <span className="font-bold">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors cursor-default group">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#005a9c] transition-all">
                                    <Mail size={18} />
                                </div>
                                <span className="font-bold">support@vyombiz.com</span>
                            </div>
                        </div>

                        <div className="flex gap-3 pt-6">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-[#005a9c] hover:border-blue-500/50 transition-all text-slate-300 hover:text-white group">
                                    <Icon size={20} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Categorized Links */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                        {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                            <div key={title} className="space-y-4">
                                <h4 className="text-[13px] font-black uppercase tracking-[0.1em] text-slate-500">
                                    {title}
                                </h4>
                                <ul className="space-y-2.5">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.path}
                                                className="text-[14px] font-medium text-slate-400 hover:text-[#005a9c] transition-colors flex items-center group"
                                            >
                                                <ChevronRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all mr-1.5" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. LEGAL & TRUST SECTION */}
            <div className="bg-black/20 border-t border-white/5 py-8">
                <div className="max-w-[1440px] mx-auto px-4 md:px-6">
                    <div className="text-center max-w-4xl mx-auto space-y-6">

                        <p className="text-slate-500 text-[13px] leading-relaxed font-medium">
                            <span className="text-slate-300 font-bold">Legal Disclaimer:</span> VyomBiz is a legal technology platform and is <span className="italic">not a law firm</span> nor an agent of any government authority. Our services are powered by both in-house experts and a network of independent certified professionals. In the USA, we operate as <span className="text-slate-300 font-bold">VyomBiz Inc.</span>, and in India through <span className="text-slate-300 font-bold">Enterfirst Private Limited</span>.
                        </p>

                        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-30 invert grayscale group hover:opacity-100 transition-opacity duration-500">
                            {['visa', 'mastercard', 'amex', 'paytm', 'razorpay'].map(p => (
                                <img key={p} src={`https://cdn-icons-png.flaticon.com/128/349/${p === 'visa' ? '349221' : p === 'mastercard' ? '349228' : '349230'}.png`} alt={p} className="h-5 w-auto" />
                            ))}
                        </div>

                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2">
                            {LEGAL_LINKS.map(item => (
                                <Link key={item.name} to={item.path} className="text-[12px] font-bold text-slate-400 hover:text-white transition-colors">
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 mt-6">
                            <p className="text-[13px] font-medium text-slate-500 uppercase tracking-widest">
                                © 2026 VyomBiz. All Rights Reserved.
                            </p>
                            <div className="flex items-center gap-8">
                                <p className="text-[12px] font-black text-slate-500 uppercase tracking-tighter">Powered by <span className="text-slate-300 tracking-normal">Enterfirst AI</span></p>
                                <div className="h-4 w-[1px] bg-white/10" />
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                                    <span className="text-[12px] font-bold text-slate-400 uppercase">System Status: Optimal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button - Modern Variant */}
            <a
                href="https://wa.me/yournumber"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-2xl shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_40px_-5px_rgba(37,211,102,0.5)] hover:-translate-y-1 active:scale-95 transition-all z-[9999] flex items-center justify-center group"
            >
                <div className="absolute inset-0 rounded-2xl bg-white animate-ping opacity-0 group-hover:opacity-10" />
                <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.02L0 24l6.136-1.61c1.769.965 3.758 1.474 5.79 1.475h.005c6.637 0 12.05-5.414 12.05-12.051 0-3.219-1.253-6.244-3.528-8.517z" />
                </svg>
            </a>
        </footer>
    );
};

export default Footer;