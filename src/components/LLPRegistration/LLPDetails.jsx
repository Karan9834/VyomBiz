import React from "react";
import { Shield, Briefcase, Scale, Landmark, FileCheck, Info } from "lucide-react";

const LLPDetails = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">

                {/* Benefits Section */}
                <div className="mb-32">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-primary mb-6">Benefits of LLP Registration</h2>
                        <p className="text-slate-500 font-medium text-lg">Limited Liability Partnership is the preferred choice for startups, consultants, and professionals.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "No Minimum Capital", desc: "Start your LLP with any amount of capital. There is no minimum requirement mandated by law.", icon: <Briefcase className="text-blue-600" /> },
                            { title: "Lower Compliance", desc: "LLPs have fewer compliance requirements compared to Private Limited Companies, saving time and money.", icon: <Shield className="text-orange-600" /> },
                            { title: "Limited Liability", desc: "Partners are not personally liable for the debts or liabilities of the LLP.", icon: <Scale className="text-green-600" /> },
                            { title: "Flexible Management", desc: "Design and operate your business structure as per the LLP Agreement without rigid corporate rules.", icon: <FileCheck className="text-purple-600" /> },
                            { title: "Tax Advantages", desc: "Distributed profits are not taxed in the hands of partners (No Dividend Distribution Tax).", icon: <Landmark className="text-red-600" /> },
                            { title: "Easy Transfer", desc: "The ownership of an LLP can be easily transferred to another person by changing partners.", icon: <Info className="text-teal-600" /> },
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all group">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:-translate-y-2 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-black text-primary mb-3">{item.title}</h4>
                                <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Requirements & Documents */}
                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    <div className="bg-[#0b2c4d] rounded-[3rem] p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h3 className="text-3xl font-black mb-8 relative">Requirements for LLP</h3>
                        <ul className="space-y-6 relative">
                            {[
                                "Minimum 2 Partners (No maximum limit)",
                                "At least 2 Designated Partners (at least one Indian resident)",
                                "Unique name for the LLP (ending with LLP)",
                                "Registered Office Address in India",
                                "LLP Agreement defining rights & duties"
                            ].map((item, idx) => (
                                <li key={idx} className="flex gap-4 items-start">
                                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center text-primary mt-1 shrink-0">
                                        <FileCheck size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-200 font-bold text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded-[3rem] p-10 lg:p-14 border-2 border-slate-100 shadow-xl">
                        <h3 className="text-3xl font-black mb-8 text-primary">Documentation Checklist</h3>
                        <div className="space-y-8">
                            <div>
                                <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-4">Partner Documents</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["PAN Card copy", "Aadhar Card copy", "Latest Bank Statement", "Photograph"].map((doc, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <div className="w-2 h-2 bg-primary rounded-full" />
                                            <span className="font-bold text-slate-700">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h4 className="text-sm font-black text-secondary uppercase tracking-[0.2em] mb-4">Office Documents</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {["Electricity/Water Bill", "NOC from Owner", "Rent Agreement", "Proof of Ownership"].map((doc, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 bg-slate-100 rounded-2xl border border-slate-200">
                                            <div className="w-2 h-2 bg-orange-400 rounded-full" />
                                            <span className="font-bold text-slate-700">{doc}</span>
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

export default LLPDetails;
