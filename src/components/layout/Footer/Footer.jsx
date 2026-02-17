import React from "react";
import { Link } from "react-router-dom";
import {
    Facebook, Twitter, Instagram, Linkedin, Youtube,
    MessageCircle
} from "lucide-react";
import { FOOTER_LINKS, SECONDARY_FOOTER_LINKS, LEGAL_LINKS } from "../../../constants/footer";

const Footer = () => {
    return (
        <footer className="w-full bg-linear-to-b from-[#051f33] to-[#072b47] text-white font-sans">
            {/* 1. NEWSLETTER SECTION */}
            <div className="max-w-[1400px] mx-auto px-6 pt-12 mb-12">
                <div className="bg-[#f1a134] rounded-3xl py-8 px-10 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-black mb-1 text-white tracking-tight">Newsletter</h2>
                        <p className="text-base font-semibold text-white/90 tracking-tight">
                            Transform your Business. Subscribe our Newsletter.
                        </p>
                    </div>
                    <div className="relative w-full max-w-lg">
                        <div className="flex items-center bg-white rounded-full p-1 shadow-md">
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full py-2.5 px-6 rounded-full text-gray-800 focus:outline-none text-sm font-medium"
                            />
                            <button className="bg-[#072b47] hover:bg-[#0a3a5e] text-white px-8 py-2.5 rounded-full font-bold uppercase tracking-wider transition-all text-sm shrink-0">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. MAIN CATEGORIES GRID */}
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 pb-16">
                {/* Logo & Info Column */}
                <div className="lg:col-span-2">
                    <img
                        src="/logo/vyombiz-logo-png.png"
                        alt="VyomBiz Logo"
                        className="h-12 w-auto object-contain mb-6"
                    />
                    <p className="text-white/70 text-base font-medium leading-relaxed max-w-sm mb-6">
                        Empowering startups and established businesses with AI-driven compliance, legal, and growth solutions. Your partner in building a smarter business.
                    </p>
                    <div className="flex gap-4">
                        <div className="bg-white/10 p-2.5 rounded-full hover:bg-[#f1a134] cursor-pointer transition-all group">
                            <Facebook size={18} fill="currentColor" strokeWidth={0} />
                        </div>
                        <div className="bg-white/10 p-2.5 rounded-full hover:bg-[#f1a134] cursor-pointer transition-all group">
                            <Twitter size={18} fill="currentColor" strokeWidth={0} />
                        </div>
                        <div className="bg-white/10 p-2.5 rounded-full hover:bg-[#f1a134] cursor-pointer transition-all group">
                            <Linkedin size={18} fill="currentColor" strokeWidth={0} />
                        </div>
                    </div>
                </div>

                {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                    <div key={title}>
                        <h3 className="text-[#f1a134] font-black text-lg mb-8 tracking-widest">{title}</h3>
                        <ul className="space-y-4">
                            {links.map((link) => (
                                <li key={link.name} className="text-[15px] font-semibold opacity-85 hover:opacity-100 hover:text-[#f1a134] cursor-pointer transition-all">
                                    <Link to={link.path}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* 3. SECONDARY LINKS BAR */}
            <div className="bg-[#f1a134] py-5 px-6">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
                    {/* Menu Links */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[15px] font-semibold text-white uppercase tracking-wider">
                        {SECONDARY_FOOTER_LINKS.map(item => (
                            <Link key={item.name} to={item.path} className="hover:text-[#072b47] cursor-pointer transition-all hover:underline">
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* 4. LEGAL DISCLAIMER & PAYMENT */}
            <div className="max-w-[1300px] mx-auto px-6 py-16 text-center">
                <div className="mb-12">
                    <p className="text-[17px] leading-relaxed font-medium text-white">
                        <span className="text-[#f1a134] font-black">Disclaimer:</span> VyomBiz.com is a legaltech platform operated by <span className="text-[#f1a134] font-black">VyomBiz Inc., USA</span> and is not affiliated with any government authority. Services are provided <span className="text-[#f1a134] font-black">either by in-house professionals or independent accounting and law firms.</span> In India, it operates through <span className="text-[#f1a134] font-black">Enterfirst Private Limited.</span>
                    </p>
                </div>

                {/* Payment Partner Logos Placeholder */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-40 grayscale mb-16">
                    <img src="/visa.svg" alt="Visa" className="h-6" />
                    <img src="/mastercard.svg" alt="MasterCard" className="h-10" />
                    <img src="/maestro.svg" alt="Maestro" className="h-10" />
                    <img src="/amex.svg" alt="American Express" className="h-8" />
                    <img src="/paytm.svg" alt="Paytm" className="h-6" />
                    <img src="/mobikwik.svg" alt="MobiKwik" className="h-6" />
                    <img src="/payu.svg" alt="PayU" className="h-6" />
                </div>

                {/* Final Legal Links */}
                <div className="text-[15px] font-medium mb-4 space-x-1">
                    <span>By continuing past this page, you agree to our </span>
                    {LEGAL_LINKS.map((item, i, arr) => (
                        <React.Fragment key={item.name}>
                            <Link to={item.path} className="text-[#f1a134] hover:underline cursor-pointer">{item.name}</Link>
                            {i < arr.length - 1 && <span>, </span>}
                        </React.Fragment>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-sm font-bold tracking-wide">© 2026 - VyomBiz. All rights reserved.</p>
            </div>

            {/* 5. FLOATING WHATSAPP BUTTON */}
            <a
                href="https://wa.me/yournumber"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-[#25D366] p-3 rounded-full shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.4)] active:scale-90 transition-all z-[9999] group flex items-center justify-center"
            >
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden"></span>
                <svg
                    viewBox="0 0 24 24"
                    width="26"
                    height="26"
                    fill="white"
                    className="relative z-10"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.02L0 24l6.136-1.61c1.769.965 3.758 1.474 5.79 1.475h.005c6.637 0 12.05-5.414 12.05-12.051 0-3.219-1.253-6.244-3.528-8.517z" />
                </svg>
            </a>
        </footer>
    );
};

export default Footer;