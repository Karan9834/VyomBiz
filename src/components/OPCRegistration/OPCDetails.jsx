import React from "react";
import { UserCheck, Shield, FileText, BarChart, Settings, Award, CheckCircle2 } from "lucide-react";

const OPCDetails = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                {/* Benefits Section */}
                <div className="mb-32">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">Why Start an OPC?</h2>
                        <p className="text-slate-500 font-bold text-lg">One Person Company is the modern alternative to Sole Proprietorship, offering corporate status to individual entrepreneurs.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Limited Liability", desc: "The owner's liability is limited to the extent of their share capital investment in the company.", icon: <Shield className="text-orange-600" /> },
                            { title: "Solo Control", desc: "Retain 100% control over all business decisions without the need for multiple partners.", icon: <UserCheck className="text-blue-600" /> },
                            { title: "Fewer Compliances", desc: "Enjoy exemptions from several rigid compliance requirements mandatory for Private Limited companies.", icon: <Settings className="text-purple-600" /> },
                            { title: "Separate Identity", desc: "OPC is a separate legal entity, meaning it can own property and incur debts in its own name.", icon: <FileText className="text-green-600" /> },
                            { title: "Easy Funding", desc: "Banks and financial institutions prefer lending to corporate entities like OPC over individuals.", icon: <BarChart className="text-red-600" /> },
                            { title: "Tax Efficiency", desc: "Potential tax benefits and deduction of business expenses not available to individual taxpayers.", icon: <Award className="text-teal-600" /> },
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:border-secondary transition-all group shadow-sm">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:-translate-y-1 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-black text-primary mb-3">{item.title}</h4>
                                <p className="text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Requirements Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="bg-primary rounded-[3rem] p-10 lg:p-14 text-white shadow-2xl">
                        <h3 className="text-3xl font-black mb-8 text-secondary">OPC Eligibility</h3>
                        <ul className="space-y-6">
                            {[
                                "Only a natural person who is an Indian citizen and resident.",
                                "A person can form only one OPC in India.",
                                "A nominee must be appointed during incorporation.",
                                "Minor cannot become a member or nominee.",
                                "Cannot carry out Non-Banking Financial Investment activities."
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start">
                                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-primary mt-1 shrink-0">
                                        <CheckCircle2 size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-300 font-bold text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-orange-50 rounded-[3rem] p-10 lg:p-14 border-2 border-orange-100 shadow-xl">
                        <h3 className="text-3xl font-black mb-8 text-primary">Required Documents</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-lg font-black text-secondary uppercase tracking-widest mb-4">Founder & Nominee</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {["PAN Card copy", "Aadhar Card copy", "Latest Bank Statement", "Passport Size Photo"].map((doc, idx) => (
                                        <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 bg-secondary rounded-full" />
                                            <span className="font-bold text-slate-700 text-sm whitespace-nowrap">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-lg font-black text-secondary uppercase tracking-widest mb-4">Registered Office</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {["Electricity Bill", "NOC from Owner", "Rent Agreement", "Proof of Ownership"].map((doc, idx) => (
                                        <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                                            <div className="w-2 h-2 bg-secondary rounded-full" />
                                            <span className="font-bold text-slate-700 text-sm whitespace-nowrap">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OPCDetails;
