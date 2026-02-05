import React from "react";
import { Check, ShieldCheck, User } from "lucide-react";

const packages = [
    {
        name: "Solo Starter",
        price: "1,499",
        tagline: "Minimum setup for founders",
        color: "blue",
        features: [
            "1 Digital Signature (DSC)",
            "1 Director Identification (DIN)",
            "OPC Name Approval (RUN)",
            "Drafting of MoA & AoA",
            "Nominee Director Consent",
            "Incorporation Certificate",
            "PF/ESI Registration Assistance"
        ]
    },
    {
        name: "Standard Solo",
        price: "14,999",
        tagline: "Complete legal bundle",
        popular: true,
        color: "orange",
        features: [
            "Everything in Solo Starter",
            "Company PAN & TAN",
            "GST Registration",
            "MSME / Udyam Certificate",
            "Share Certificate (1st Allotment)",
            "Commencement of Business (COB)",
            "GST Accounting (3 Months Free)"
        ]
    },
    {
        name: "Premium Solo",
        price: "29,999",
        tagline: "End-to-end solo management",
        color: "slate",
        features: [
            "Everything in Standard Solo",
            "Trademark Filing (Class 1)",
            "1st Financial Year Audit",
            "Director's KYC Filing",
            "Annual ROC Returns (1st Year)",
            "Appointment of Auditor",
            "Dedicated Support Manager"
        ]
    }
];

const OPCPricing = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">OPC Registration Packages</h2>
                    <p className="text-slate-500 font-bold text-lg italic">
                        *Government Fee and GST will be extra based on state capital. 100% Transparency.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white rounded-[2.5rem] p-10 shadow-xl border-2 transition-all duration-300 hover:-translate-y-2 ${pkg.popular ? "border-secondary scale-105 z-10" : "border-slate-100"
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary font-black px-6 py-2 rounded-full text-sm uppercase tracking-widest shadow-lg flex items-center gap-2">
                                    <User size={14} fill="currentColor" />
                                    Founder's Choice
                                </div>
                            )}

                            <div className="mb-8">
                                <h4 className="text-xl font-black text-slate-800 mb-1">{pkg.name}</h4>
                                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">{pkg.tagline}</p>
                            </div>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-2xl font-bold text-slate-400">₹</span>
                                <span className="text-5xl font-black text-primary">{pkg.price}</span>
                                <span className="text-slate-400 font-bold ml-2">+ Govt Fees</span>
                            </div>

                            <div className="space-y-4 mb-10">
                                {pkg.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex gap-3 items-start group">
                                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors ${pkg.popular ? "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white" : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                                            }`}>
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                        <span className="text-slate-600 text-[15px] font-bold leading-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-2xl font-black transition-all shadow-lg flex items-center justify-center gap-2 group ${pkg.popular
                                    ? "bg-secondary text-primary hover:bg-secondary/90 shadow-secondary/20"
                                    : "bg-primary text-white hover:bg-primary/95 shadow-primary/20"
                                }`}>
                                Book Package
                                <ShieldCheck size={18} className="group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OPCPricing;
