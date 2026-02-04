import React from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactPopup = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className="hidden xl:block absolute right-10 top-24 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-slate-100 rounded-2xl w-[400px] p-8 z-[110] animate-in zoom-in-95 duration-150">
            <h4 className="font-black text-xl mb-6 text-slate-800">Contact Support</h4>
            <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                        <Phone size={20} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Call Support</p>
                        <p className="font-bold text-slate-700">+91-9121230280</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <Mail size={20} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">Email Us</p>
                        <p className="font-bold text-slate-700">info@vyombiz.com</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                        <MessageCircle size={20} />
                    </div>
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase">WhatsApp</p>
                        <p className="font-bold text-slate-700">Chat with Expert</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPopup;
