import React from "react";
import { Shield, TrendingUp, Users, Building2, FileText, CheckCircle2 } from "lucide-react";

const RegistrationDetails = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                {/* Advantages Section */}
                <div className="mb-32">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">Advantages of Registering a Company</h2>
                        <p className="text-slate-500 font-medium">Setting up a Private Limited Company offers numerous benefits that help your business grow and stay secure.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Limited Liability", desc: "Your personal assets are safe. Liability is limited only to your share capital in the company.", icon: <Shield className="text-blue-600" /> },
                            { title: "Greater Credibility", desc: "Pvt Ltd companies are perceived more trustworthy by customers, vendors, and employees.", icon: <Building2 className="text-orange-600" /> },
                            { title: "Easy Funding", desc: "Venture Capitalists and Angel Investors prefer investing in Private Limited entities.", icon: <TrendingUp className="text-green-600" /> },
                            { title: "Separate Legal Identity", desc: "The company is a separate person in the eyes of law, holding its own assets and debts.", icon: <FileText className="text-purple-600" /> },
                            { title: "Perpetual Succession", desc: "Business continues to exist even if shareholders or directors change or pass away.", icon: <Users className="text-red-600" /> },
                            { title: "Tax Efficiency", desc: "Benefit from various tax deductions and a flat corporate tax rate vs individual slabs.", icon: <CheckCircle2 className="text-teal-600" /> },
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-secondary/30 hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-black text-primary mb-3">{item.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Eligibility & Documents */}
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-[#072b47] rounded-[3rem] p-10 lg:p-14 text-white">
                        <h3 className="text-3xl font-black mb-8">Eligibility Criteria</h3>
                        <ul className="space-y-6">
                            {[
                                "Minimum 2 Directors (at least one Indian resident)",
                                "Minimum 2 Shareholders (can be same as directors)",
                                "Registered Office Address in India",
                                "DSC & DIN for all directors",
                                "No minimum capital requirement (₹1 Lakh recommended)"
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4">
                                    <CheckCircle2 className="text-secondary flex-shrink-0" size={24} />
                                    <span className="text-slate-300 font-medium text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-orange-50 rounded-[3rem] p-10 lg:p-14 border-2 border-orange-100">
                        <h3 className="text-3xl font-black mb-8 text-primary">Required Documents</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-black text-orange-600 uppercase tracking-wider mb-4">Identity & Address Proof</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {["PAN Card copy", "Aadhar Card copy", "Passport Size Photo", "Voter ID / Passport"].map((doc, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-slate-700 font-bold">
                                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" /> {doc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-orange-600 uppercase tracking-wider mb-4">Office Proof</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {["Latest Utility Bill", "No Objection (NOC)", "Rental Agreement", "Ownership Proof"].map((doc, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-slate-700 font-bold">
                                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" /> {doc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Process Steps */}
                <div className="mt-32">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-primary">Registration Process in 7 Days</h2>
                    </div>
                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 -z-10" />
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { step: "01", title: "DSC & DIN", desc: "Obtaining digital signature and director id." },
                                { step: "02", title: "Name Approval", desc: "Reserving your unique company name with ROC." },
                                { step: "03", title: "Documentation", desc: "Preparation of MoA, AoA and other legal forms." },
                                { step: "04", title: "Incorporation", desc: "Final filing with MCA and receiving COI." },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative text-center">
                                    <div className="w-12 h-12 bg-secondary text-primary font-black rounded-full flex items-center justify-center mx-auto mb-6 absolute -top-6 left-1/2 -translate-x-1/2 border-4 border-white">
                                        {item.step}
                                    </div>
                                    <h4 className="text-xl font-black text-primary mb-2 mt-4">{item.title}</h4>
                                    <p className="text-slate-500 font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Why Trust VyomBiz Section */}
                <div className="mt-32">
                    <div className="bg-slate-50 rounded-[3rem] p-10 lg:p-20 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black text-primary mb-8">Reasons to Trust VyomBiz for Company Formation</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                                    {[
                                        "Expert Business Consultation",
                                        "Check Name Availability",
                                        "DSC & DIN Processing",
                                        "Time Savior Service",
                                        "Online Documentation",
                                        "Startup Registration",
                                        "PAN, TAN & GST Support",
                                        "Post-Incorporation Compliance"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-secondary rounded-full" />
                                            <span className="font-bold text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <div className="aspect-video bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
                                        alt="Consultation"
                                        className="w-full h-full object-cover rounded-xl"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-xl cursor-pointer hover:scale-110 transition-transform">
                                            <CheckCircle2 size={32} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RegistrationDetails;
