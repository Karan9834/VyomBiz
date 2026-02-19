import React from "react";
import { Mail, Phone, Globe, MessageSquare, ClipboardCheck, Headphones } from "lucide-react";

const ContactBannerAbout = () => {
    return (
        <section className="py-12 bg-[#072b47] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-6 lg:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-[900] text-white mb-2 tracking-tight">How To Reach Us?</h2>
                        <p className="text-lg text-white/50 font-bold italic">Expert help is just a message away :-</p>
                    </div>
                    <button className="px-8 py-4 bg-[#f1a134] text-white font-black rounded-xl shadow-2xl shadow-orange-900/40 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-sm">
                        Get Started
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform shrink-0">
                            <Mail size={20} />
                        </div>
                        <span className="text-white font-black text-base truncate">info@vyombiz.io</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform shrink-0">
                            <Phone size={20} />
                        </div>
                        <span className="text-white font-black text-base">+91-9121230280</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform shrink-0">
                            <MessageSquare size={20} />
                        </div>
                        <span className="text-white font-black text-base">+91-9289379709</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform shrink-0">
                            <Globe size={20} />
                        </div>
                        <span className="text-white font-black text-base">www.vyombiz.io</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBannerAbout;
