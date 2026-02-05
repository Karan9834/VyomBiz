import React from "react";
import { Check, ShieldCheck, Zap } from "lucide-react";

const packages = [
    {
        name: "Enterprise Starter",
        price: "14,999",
        tagline: "For standard public setup",
        color: "blue",
        features: [
            "7 Digital Signatures (DSC)",
            "3 DIN for Directors",
            "Public Name Approval",
            "Drafting of Charter Documents",
            "Certificate of Incorporation",
            "PF/ESI Initial Registration",
            "Zero Fee Bank A/C Assistance"
        ]
    },
    {
        name: "Public Growth",
        price: "33,999",
        tagline: "Total corporate compliance",
        popular: true,
        color: "orange",
        features: [
            "Everything in Starter",
            "Company PAN & TAN",
            "GST Registration",
            "Commencement of Business (INC-20A)",
            "Share Certificate Allotment",
            "1st Board Meeting Documentation",
            "Director's Disclosure Services"
        ]
    },
    {
        name: "Corporate Elite",
        price: "49,999",
        tagline: "Full-scale managed setup",
        color: "slate",
        features: [
            "Everything in Growth",
            "Trademark Filing (Startup)",
            "Startup India Recognition",
            "FEMA/RBI Basic Compliance",
            "Legal Opinion on Structure",
            "Dedicated Key Account Manager",
            "Annual Filing Pack Discount"
        ]
    }
];

const PublicPricing = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tight">Public Company Packages</h2>
                    <p className="text-slate-500 font-bold text-xl italic bg-white inline-block px-8 py-3 rounded-full shadow-sm border border-slate-100">
                        *Excluding Govt. Fees & GST. <span className="text-green-600">100% Satisfaction Guarantee.</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white rounded-[3rem] p-12 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border-2 ${pkg.popular ? "border-secondary scale-105 z-10 shadow-xl" : "border-slate-100"
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary font-black px-8 py-2.5 rounded-full text-sm uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
                                    <Zap size={14} fill="currentColor" />
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-10 text-center">
                                <h4 className="text-2xl font-black text-slate-800 mb-2">{pkg.name}</h4>
                                <p className="text-slate-400 text-sm font-black uppercase tracking-widest">{pkg.tagline}</p>
                            </div>

                            <div className="flex items-baseline justify-center gap-1 mb-10">
                                <span className="text-3xl font-bold text-slate-400">₹</span>
                                <span className="text-6xl font-black text-primary">{pkg.price}</span>
                                <span className="text-slate-400 font-bold ml-2">/one-time</span>
                            </div>

                            <div className="space-y-5 mb-12">
                                {pkg.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex gap-4 items-start group">
                                        <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${pkg.popular ? "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white" : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                                            }`}>
                                            <Check size={14} strokeWidth={4} />
                                        </div>
                                        <span className="text-slate-600 text-[16px] font-bold leading-snug">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-5 rounded-2xl font-black transition-all shadow-xl flex items-center justify-center gap-3 group text-lg ${pkg.popular
                                    ? "bg-secondary text-primary hover:bg-secondary/90 shadow-secondary/25"
                                    : "bg-primary text-white hover:bg-primary/95 shadow-primary/25"
                                }`}>
                                Get Professional Help
                                <ShieldCheck size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PublicPricing;
