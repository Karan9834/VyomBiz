import React from "react";
import { Check, ShieldCheck } from "lucide-react";

const packages = [
    {
        name: "Basic",
        price: "2,499",
        tagline: "Standard setup for partners",
        color: "blue",
        features: [
            "2 Digital Signatures (DSC)",
            "2 Designated Partner ID (DPIN)",
            "LLP Name Reservation",
            "Verification of Documents",
            "Filing of Incorporation Forms",
            "Certificate of Incorporation",
            "Zero Balance Current Account"
        ]
    },
    {
        name: "Standard",
        price: "5,999",
        tagline: "Most chosen by professionals",
        popular: true,
        color: "orange",
        features: [
            "Everything in Basic",
            "Drafting of LLP Agreement",
            "Filing of LLP Form 3",
            "LLP PAN & TAN Card",
            "GST Registration",
            "MSME/Udyam Registration",
            "Professional Tax Reg (Selected States)"
        ]
    },
    {
        name: "Premium",
        price: "15,999",
        tagline: "Total protection for your LLP",
        color: "slate",
        features: [
            "Everything in Standard",
            "Trademark Registration (1 Class)",
            "1 Year LLP Annual Filing",
            "Income Tax Return Filing (1 Year)",
            "Legal Consultation (3 Sessions)",
            "Dedicated Relationship Manager",
            "Startup India Recognition"
        ]
    }
];

const LLPPricing = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">Unbeatable LLP Packages</h2>
                    <p className="text-slate-500 font-medium text-lg italic">
                        *Government Fee and GST will be extra as applicable. 100% Money-Back Guarantee.
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
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary font-black px-6 py-2 rounded-full text-sm uppercase tracking-widest shadow-lg">
                                    Recommended
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
                                    <div key={fIdx} className="flex gap-3 items-start">
                                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${pkg.popular ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"
                                            }`}>
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                        <span className="text-slate-600 text-[15px] font-medium leading-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-2xl font-black transition-all shadow-lg flex items-center justify-center gap-2 group ${pkg.popular
                                    ? "bg-secondary text-primary hover:bg-secondary/90 shadow-secondary/20"
                                    : "bg-primary text-white hover:bg-primary/90 shadow-primary/20"
                                }`}>
                                Select Package
                                <ShieldCheck size={18} className="group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LLPPricing;
