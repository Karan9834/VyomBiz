import React from "react";
import { Check, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

/**
 * Reusable Pricing Layout Component for all Startup/Registration pages.
 * @param {string} title - The main heading for the section.
 * @param {string} subtitle - The sub-heading or description.
 * @param {Array} packages - Array of package objects: { name, price, originalPrice, tagline, popular, features, buttonText }
 */
const PricingLayout = ({
    title = "Choose the Best Package",
    subtitle = "*Government Fee and GST will be extra as applicable. 100% Money-Back Guarantee.",
    packages = []
}) => {
    const navigate = useNavigate();
    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-[#072b47] mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-slate-500 font-medium text-lg italic">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-4 md:px-0">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-xl border-2 transition-all duration-300 md:hover:-translate-y-2 flex flex-col ${pkg.popular ? "border-[#f1a134] md:scale-105 z-10 my-4 md:my-0" : "border-slate-100"
                                }`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f1a134] text-white font-black px-6 py-2 rounded-full text-sm uppercase tracking-widest shadow-lg">
                                    {pkg.badgeText || "Most Popular"}
                                </div>
                            )}

                            <div className="mb-8">
                                <h4 className="text-2xl font-black text-slate-800 mb-1">{pkg.name}</h4>
                                <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">{pkg.tagline || "Standard setup"}</p>
                            </div>

                            <div className="flex flex-col mb-8">
                                {pkg.originalPrice && (
                                    <span className="text-sm font-bold text-slate-400 line-through mb-1">₹{pkg.originalPrice}</span>
                                )}
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-bold text-slate-400">₹</span>
                                    <span className="text-5xl font-black text-[#1e40af]">{pkg.price}</span>
                                    <span className="text-slate-400 font-bold ml-2 text-sm">{pkg.priceSuffix || "+ Govt Fees"}</span>
                                </div>
                                <div className="mt-3 flex items-center gap-1.5 text-green-600">
                                    <ShieldCheck size={16} />
                                    <span className="text-[11px] font-bold uppercase tracking-tight">100% Money-Back Guarantee</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10 flex-1">
                                {pkg.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex gap-3 items-start">
                                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${pkg.popular ? "bg-orange-100 text-[#f1a134]" : "bg-blue-100 text-blue-600"
                                            }`}>
                                            <Check size={12} strokeWidth={4} />
                                        </div>
                                        <span className="text-slate-600 text-[15px] font-medium leading-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => navigate('/#free-consultation')}
                                className={`w-full py-5 rounded-2xl font-black transition-all shadow-lg flex items-center justify-center gap-2 group uppercase tracking-widest text-sm ${pkg.popular
                                    ? "bg-[#f1a134] text-white hover:brightness-105 shadow-orange-100"
                                    : "bg-[#072b47] text-white hover:bg-[#072b47]/90 shadow-blue-100"
                                    }`}>
                                {pkg.buttonText || "Get Started Now"}
                                <ShieldCheck size={18} className="group-hover:rotate-12 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingLayout;
