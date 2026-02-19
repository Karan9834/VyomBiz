import React from "react";
import { Shield, FileCheck, Award, Lock, Palette, FileText, Scale } from "lucide-react";

const IPLegalServices = () => {
    const services = [
        { icon: Shield, title: "Trademark Registration", desc: "Secure your brand identity and prevent misuse with smooth trademark registration." },
        { icon: Lock, title: "Copyright Registration", desc: "Protect your creative work and ensure your ownership is legally recognized." },
        { icon: Award, title: "Patent Registration", desc: "Safeguard your innovations with expert guidance through the patent process." },
        { icon: Scale, title: "IP Infringement Support", desc: "Defend your rights against unauthorized use with strong legal assistance." },
        { icon: Palette, title: "Design Registration", desc: "Protect the unique design and appearance of your products." },
        { icon: FileText, title: "Free Legal Documents", desc: "Access ready-to-use legal documents to save time and reduce complexity." },
        { icon: FileCheck, title: "Business Contracts", desc: "Create clear, legally sound contracts that protect your business interests." },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-24">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#072b47] mb-6 tracking-tight leading-tight">
                        Protect Your IP & Legal Rights
                    </h2>
                    <p className="text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
                        Your ideas are valuable—protect them with confidence. From trademarks and contracts to complete legal support, VyomBiz helps safeguard your brand and intellectual property.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#f1a134] mb-6 shadow-sm group-hover:bg-[#f1a134] group-hover:text-white transition-colors duration-300 border border-slate-100">
                                <service.icon size={22} />
                            </div>
                            <h3 className="text-base font-bold text-[#072b47] mb-3 tracking-tight">{service.title}</h3>
                            <p className="text-slate-500 font-normal text-xs md:text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IPLegalServices;
