import React from "react";
import DetailsLayout from "../../common/DetailsLayout";
import { CheckCircle2, ShieldCheck, Leaf, Factory, Users, ClipboardCheck, FileText, Settings, AlertTriangle, Activity } from "lucide-react";

// 1. Overview Component
const NOCPCBOverview = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
                <span className="inline-block px-4 py-1.5 text-xs lg:text-sm font-bold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6 uppercase tracking-wider">
                    Industry Consent
                </span>
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] leading-[1.1] tracking-tight mb-8">
                    An Overview on <br className="hidden lg:block" />
                    <span className="text-[#005a9c]">NOC Pollution Control Board</span>
                </h2>
                <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed font-medium text-justify lg:text-left">
                    <p>
                        Getting an <strong>NOC (No Objection Certificate)</strong> from the Pollution Control Board is a mandatory step before starting any industry. The Pollution Control Board was established to oversee and maintain standards for air and water pollution, acting as the primary authority for environmental balance.
                    </p>
                    <p>
                        The Board provides recommendations for any matter concerning the prevention and control of water and air pollution. It is essential to obtain this NOC under the provisions of the <strong>Water Pollution Act, 1974</strong> and <strong>Air Pollution Act, 1981</strong> to modernize industrial plants or increase production capacity.
                    </p>
                    <p className="bg-slate-50 border-l-4 border-[#005a9c] p-6 rounded-r-2xl italic shadow-sm">
                        Are you facing roadblocks in securing NOC pollution control board? Speak to <strong>VyomBiz</strong> consultants today and get your certificate with zero stress.
                    </p>
                </div>
            </div>
            <div className="lg:w-2/5 w-full">
                <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-2xl">
                    <h3 className="text-xl lg:text-2xl font-black text-[#072b47] mb-8 flex items-center gap-3">
                        <Factory className="text-[#005a9c] shrink-0" size={24} />
                        Who Needs It?
                    </h3>
                    <div className="space-y-5">
                        {[
                            "Manufacturing Entities & Traders",
                            "Health Care Establishments",
                            "Battery & Plastic Waste Entities",
                            "E-Waste & Solid Waste Management",
                            "Bio-Medical & Hazardous Waste",
                            "Mining & Industrial Operations"
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="mt-1 bg-green-50 p-1 rounded-full text-green-600 shrink-0">
                                    <CheckCircle2 size={16} />
                                </div>
                                <span className="text-sm lg:text-base font-bold text-slate-700 leading-snug">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// 2. Advantages Component
const NOCPCBAdvantages = () => {
    return (
        <div className="space-y-12 lg:space-y-16">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Advantages of NOC</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic tracking-[0.2em] uppercase">"Compliance Fuels Responsible Growth"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {[
                    {
                        title: "Sustainable Development",
                        desc: "Ensures industrial progress happens without disturbing the ecological balance.",
                        icon: <Leaf className="text-[#005a9c]" />
                    },
                    {
                        title: "Resource Protection",
                        desc: "Helps in the conservation of natural resources and prevents water/air degradation.",
                        icon: <ShieldCheck className="text-[#005a9c]" />
                    },
                    {
                        title: "Legal Eligibility",
                        desc: "Obtaining SPCB NOC is mandatory to apply for other state licenses and statutory permits.",
                        icon: <FileText className="text-[#005a9c]" />
                    }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 hover:border-[#005a9c]/20 hover:shadow-2xl transition-all duration-300 group">
                        <div className="mb-6 w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm group-hover:rotate-6 group-hover:bg-[#005a9c]/5 transition-all">
                            {React.cloneElement(item.icon, { size: 28 })}
                        </div>
                        <h4 className="font-black text-[#072b47] text-xl lg:text-2xl mb-4 group-hover:text-[#005a9c] transition-colors">{item.title}</h4>
                        <p className="text-sm lg:text-base text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 3. Documents Component
const NOCPCBDocuments = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="bg-white p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-xl">
                <h3 className="text-2xl lg:text-4xl font-black text-[#072b47] mb-10 flex items-center gap-4">
                    <FileText className="text-[#005a9c]" size={32} /> Required Checklist
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                        "Identity & Address Proof",
                        "PAN Card (for Unit)",
                        "Factory & Trade License",
                        "Site Plan Layout",
                        "CA Letter (Project Cost)",
                        "FSSAI (for Food Business)",
                        "Electricity & Utility Bill",
                        "ETP/STP Design Layout"
                    ].map((doc, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-white hover:border-[#005a9c]/20 transition-all">
                            <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[10px] font-black text-[#005a9c] shadow-sm">{i + 1}</span>
                            <span className="text-sm lg:text-base font-bold text-slate-600 group-hover:text-[#072b47]">{doc}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#072b47] p-10 lg:p-14 rounded-[3rem] text-white flex flex-col justify-center">
                <h3 className="text-2xl lg:text-4xl font-black mb-10 flex items-center gap-4 text-[#FFE90A]">
                    <Settings className="shrink-0" size={32} /> Special Requirements
                </h3>
                <div className="space-y-8">
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h4 className="text-[#FFE90A] font-black mb-4 uppercase tracking-widest text-xs">Water Consent</h4>
                        <p className="text-sm text-slate-300 font-medium">Technical reports of ETP/STP, analysis of treated wastewater, and water cess returns.</p>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                        <h4 className="text-[#FFE90A] font-black mb-4 uppercase tracking-widest text-xs">Air Consent</h4>
                        <p className="text-sm text-slate-300 font-medium">Specifications for pollution control arrangements, emission analysis reports, and monitoring diagrams.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 4. Process Component
const NOCPCBProcess = () => {
    const steps = [
        { title: "Application Filing", desc: "Submit the application on the respective State Pollution Control Board portal with required site details." },
        { title: "Documentation Submission", desc: "Attach proposed pollution control plans and industrial segment registrations." },
        { title: "Due Diligence", desc: "Regional officers carry out site inspection of the business premises." },
        { title: "Review & Approval", desc: "Based on the inspection report, the NOC application is processed within 90-120 days." },
        { title: "Issuance of NOC", desc: "Certificate issued upon successful verification of environmental compliance." }
    ];
    return (
        <div className="max-w-5xl mx-auto py-10 lg:py-16">
            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] text-center mb-20 leading-tight">Step-by-Step Procedure</h2>
            <div className="space-y-12 lg:space-y-16 relative">
                <div className="absolute top-0 bottom-0 left-[2.5rem] lg:left-[3.5rem] w-0.5 border-l-2 border-dashed border-slate-200 hidden md:block" />
                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10 group">
                        <div className="w-20 lg:w-28 h-20 lg:h-28 bg-[#005a9c] text-white rounded-[2rem] lg:rounded-[2.5rem] flex items-center justify-center font-black text-3xl lg:text-4xl shadow-xl shrink-0 group-hover:rotate-3 transition-transform">
                            {i + 1}
                        </div>
                        <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-xl hover:translate-x-3 transition-all duration-300 w-full hover:border-[#005a9c]/20">
                            <h4 className="text-xl lg:text-3xl font-black text-[#072b47] mb-4 group-hover:text-[#005a9c] transition-colors">{step.title}</h4>
                            <p className="text-base lg:text-lg font-bold text-slate-500 leading-relaxed text-justify lg:text-left">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 5. Penalties Component
const NOCPCBPenalties = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="bg-slate-50 p-10 lg:p-14 rounded-[3rem] border border-slate-200 shadow-inner flex flex-col justify-center">
                <h3 className="text-2xl lg:text-4xl font-black text-[#072b47] mb-8 flex items-center gap-4">
                    <AlertTriangle className="text-red-500 shrink-0" size={32} /> Non-Compliance Penalties
                </h3>
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h4 className="text-sm font-black text-[#005a9c] mb-2 uppercase tracking-tight">Environmental Protection Act</h4>
                        <p className="text-base font-bold text-slate-600">Imprisonment up to 5 years and/or fine up to ₹1 Lakh. Continual default can lead to ₹5,000 extra daily fine.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h4 className="text-sm font-black text-[#005a9c] mb-2 uppercase tracking-tight">Hazardous Waste violation</h4>
                        <p className="text-base font-bold text-slate-600">Occupiers and operators are liable to pay heavy financial penalties as levied by the State PCB.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#072b47] p-10 lg:p-14 rounded-[3rem] text-white flex flex-col justify-center">
                <h3 className="text-2xl lg:text-4xl font-black mb-10 flex items-center gap-4 text-[#FFE90A]">
                    <Activity className="shrink-0" size={32} /> Operational Timeline
                </h3>
                <div className="space-y-6">
                    {[
                        "Standard processing time: 90 - 120 days.",
                        "Initial board response target: Within 120 days of filing.",
                        "Renewal and extension available upon compliance report submission."
                    ].map((item, i) => (
                        <div key={i} className="flex gap-5 items-center bg-white/5 p-6 rounded-2xl border border-white/10">
                            <CheckCircle2 className="text-[#FFE90A] shrink-0" />
                            <p className="text-base font-bold text-slate-200">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 6. Why Trust VyomBiz
const NOCPCBWhyTrust = () => {
    return (
        <div className="bg-[#f8fafc] rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-20 border border-slate-100 shadow-sm">
            <div className="text-center max-w-4xl mx-auto mb-20 text-[#072b47]">
                <h2 className="text-3xl lg:text-6xl font-black mb-8 leading-tight">Why Choose VyomBiz?</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic leading-relaxed uppercase tracking-[0.3em]">"Dominating Environmental Consulting with 75% Market Hold"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "10+ Years", desc: "A decade of deep expertise in acquiring Pollution Control Board NOCs." },
                    { title: "500+ Projects", desc: "Successfully assisted hundreds of entrepreneurs in environmental compliance." },
                    { title: "End-to-End", desc: "Complete documentation and liaison support until final certification." },
                    { title: "24/7 Support", desc: "Dedicated team available round the clock to resolve all SPCB queries." }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#005a9c] mb-8 font-black group-hover:bg-[#005a9c] group-hover:text-white transition-all shadow-sm">
                            <Activity size={20} />
                        </div>
                        <h4 className="text-xl font-black text-[#072b47] mb-4 leading-tight group-hover:text-[#005a9c] transition-colors">{item.title}</h4>
                        <p className="text-sm text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const NOCPCBDetails = () => {
    return (
        <DetailsLayout
            showSectionImages={true}
            overview={<NOCPCBOverview />}
            advantages={<NOCPCBAdvantages />}
            documents={<NOCPCBDocuments />}
            process={<NOCPCBProcess />}
            postCompliance={<NOCPCBPenalties />}
            features={<NOCPCBWhyTrust />}
            navLabels={{
                postCompliance: "Penalties",
                features: "Why VyomBiz"
            }}
        />
    );
};

export default NOCPCBDetails;
