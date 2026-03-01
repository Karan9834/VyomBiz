import React from "react";
import DetailsLayout from "../../common/DetailsLayout";
import { Droplet, ShieldCheck, Scale, HardHat, FileText, CheckCircle2, Activity, RefreshCw, Factory } from "lucide-react";

// 1. Overview Component
const CGWAOverview = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
                <span className="inline-block px-4 py-1.5 text-xs lg:text-sm font-bold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6 uppercase tracking-wider">
                    Water Compliance
                </span>
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] leading-[1.1] tracking-tight mb-8">
                    Central Ground Water Authority <br className="hidden lg:block" />
                    <span className="text-[#005a9c]">NOC</span>
                </h2>
                <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed font-medium text-justify lg:text-left">
                    <p>
                        The Central Ground Water Authority (CGWA) was established by the Government of India under the <strong>Environment (Protection) Act, 1986</strong>. It plays a key role in regulating and managing the country’s groundwater resources.
                    </p>
                    <p>
                        A CGWA NOC is a certificate ensuring that any proposed project or activity involving groundwater extraction—whether for commercial, industrial, or domestic purposes—complies with all regulations. It promotes responsible practices like demand-side management and artificial groundwater recharge.
                    </p>
                    <p className="bg-slate-50 border-l-4 border-[#005a9c] p-6 rounded-r-2xl italic shadow-sm">
                        Say goodbye to complications! Let <strong>VyomBiz</strong> experts handle your CGWA NOC, leaving no room for worry and stress regarding your water extraction clearance.
                    </p>
                </div>
            </div>
            <div className="lg:w-2/5 w-full">
                <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-2xl">
                    <h3 className="text-xl lg:text-2xl font-black text-[#072b47] mb-8 flex items-center gap-3">
                        <Droplet className="text-[#005a9c] shrink-0" size={24} />
                        Who Needs It?
                    </h3>
                    <div className="space-y-5">
                        {[
                            "Commercial Establishments extracting water",
                            "Industrial Plants needing boring",
                            "Large Infrastructure Projects",
                            "Mining Operations with dewatering",
                            "Water Supply Agencies"
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

// 2. Regulation Component
const CGWARegulation = () => {
    return (
        <div className="space-y-12 lg:space-y-16">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Regulatory Framework</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic tracking-[0.2em] uppercase">"Under Environment Protection Act, 1986"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="bg-white p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all">
                    <h3 className="text-2xl font-black text-[#072b47] mb-6 flex items-center gap-3">
                        <Scale className="text-[#005a9c]" /> States Regulated by CGWA
                    </h3>
                    <p className="text-slate-500 font-bold leading-relaxed mb-6">
                        Assam, Arunachal Pradesh, Bihar, Chhattisgarh, Gujarat, Jharkhand, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Rajasthan, Sikkim, Tripura, Uttarakhand, and UTs like Andaman & Nicobar, Daman & Diu, Dadra & Nagar Haveli.
                    </p>
                </div>
                <div className="bg-slate-50 p-10 lg:p-14 rounded-[3rem] border border-slate-200">
                    <h3 className="text-2xl font-black text-[#072b47] mb-6 flex items-center gap-3">
                        <ShieldCheck className="text-red-500" /> States Managed by SGWAs
                    </h3>
                    <p className="text-slate-500 font-bold leading-relaxed mb-6">
                        Andhra Pradesh, NCT Delhi, Uttar Pradesh, Punjab, Haryana, Goa, Himachal Pradesh, J&K, Karnataka, Kerala, Tamil Nadu, Telangana, West Bengal, and UTs like Chandigarh, Puducherry, Lakshadweep, Ladakh.
                    </p>
                </div>
            </div>
        </div>
    );
};

// 3. Documents Component
const CGWADocuments = () => {
    return (
        <div className="space-y-12">
            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] text-center mb-16">Documentation Required</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Infrastructure Projects",
                        icon: <Droplet size={32} />,
                        color: "text-blue-500",
                        items: ["State Agency Approval", "MoEF&CC/SPCB Referral", "Completion Certificate", "Water Supply Plan", "CPHEEO Norms Computation"]
                    },
                    {
                        title: "Industries",
                        icon: <Factory size={32} />,
                        color: "text-yellow-500",
                        items: ["Consent to Operate (CTO)", "Schematic Diagram (Recycling)", "Non-availability Certificate", "Local Authority Consent", "Hydrogeological Report"]
                    },
                    {
                        title: "Mining Projects",
                        icon: <HardHat size={32} />,
                        color: "text-red-500",
                        items: ["SPCB Referral Letter", "Geo-tagged Lease Map", "Land Lease/Ownership", "Govt. Approved Mining Plan", "Core/Buffer Zone Report"]
                    }
                ].map((sec, i) => (
                    <div key={i} className="bg-white p-8 lg:p-10 rounded-[3rem] border border-slate-100 shadow-lg hover:-translate-y-2 transition-transform">
                        <div className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 ${sec.color}`}>
                            {sec.icon}
                        </div>
                        <h4 className="text-2xl font-black text-[#072b47] mb-6">{sec.title}</h4>
                        <ul className="space-y-4">
                            {sec.items.map((item, j) => (
                                <li key={j} className="flex gap-3 text-sm lg:text-base font-bold text-slate-600">
                                    <FileText size={18} className="shrink-0 text-slate-300" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 4. Process Component
const CGWAProcess = () => {
    const steps = [
        { title: "Eligibility Check", desc: "Fill out the online eligibility form on the CGWA portal with industrial segment and water quality details." },
        { title: "User Registration", desc: "Register as a new user with ID & address proofs to generate login credentials." },
        { title: "Document Submission", desc: "Upload detailed hydrogeological reports, layout plans, and flow diagrams." },
        { title: "Evaluation & Field Visit", desc: "Authorities review the application; digital meters are mandated post-completion." },
        { title: "NOC Issuance", desc: "Approval granted with a validity of 2-5 years; track status online and download the NOC." }
    ];
    return (
        <div className="max-w-5xl mx-auto py-10 lg:py-16">
            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] text-center mb-20 leading-tight">Registration Procedure</h2>
            <div className="space-y-12 lg:space-y-16 relative">
                <div className="absolute top-0 bottom-0 left-[2.5rem] lg:left-[3.5rem] w-0.5 border-l-2 border-dashed border-slate-200 hidden md:block" />
                {steps.map((step, i) => (
                    <div key={i} className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10 group">
                        <div className="w-20 lg:w-28 h-20 lg:h-28 bg-[#005a9c] text-white rounded-[2rem] lg:rounded-[2.5rem] flex items-center justify-center font-black text-3xl lg:text-4xl shadow-xl shrink-0 transition-transform group-hover:scale-110">
                            {i + 1}
                        </div>
                        <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-xl hover:translate-x-3 transition-all duration-300 w-full hover:border-[#005a9c]/20">
                            <h4 className="text-xl lg:text-3xl font-black text-[#072b47] mb-4 group-hover:text-[#005a9c] transition-colors">{step.title}</h4>
                            <p className="text-base lg:text-lg font-bold text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-16 bg-[#072b47] text-white p-10 rounded-[3rem] flex flex-col items-center text-center">
                <RefreshCw size={40} className="text-[#FFE90A] mb-6" />
                <h3 className="text-2xl font-black mb-4">Post-NOC Compliances</h3>
                <p className="text-slate-300 font-medium max-w-2xl">
                    Install a digital water meter immediately. Implement artificial recharge if abstracting &gt;200-500 m³/day. Conduct bi-annual groundwater quality monitoring from NABL-accredited labs.
                </p>
            </div>
        </div>
    );
};

// 5. Why Trust Section
const CGWAWhyTrust = () => {
    return (
        <div className="bg-[#f8fafc] rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-20 border border-slate-100 shadow-sm">
            <div className="text-center max-w-4xl mx-auto mb-20 text-[#072b47]">
                <h2 className="text-3xl lg:text-6xl font-black mb-8 leading-tight">Why Choose VyomBiz?</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic leading-relaxed uppercase tracking-[0.3em]">"Guiding Groundwater extraction reliably since 2018"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "Saved ₹50L+", desc: "Helped entrepreneurs save massive costs in groundwater projecting." },
                    { title: "99.2% Success", desc: "Industry-leading success rate in CGWA Borewell NOC Approvals." },
                    { title: "500+ Projects", desc: "Successfully managed and acquired Central Ground Water Authority NOCs." },
                    { title: "Water Experts", desc: "Network of 100+ specialists with 50+ regulatory authorities experience." }
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

const CGWADetails = () => {
    return (
        <DetailsLayout
            showSectionImages={true}
            overview={<CGWAOverview />}
            advantages={<CGWARegulation />}
            documents={<CGWADocuments />}
            process={<CGWAProcess />}
            features={<CGWAWhyTrust />}
            navLabels={{
                advantages: "Regulation",
                features: "Why VyomBiz"
            }}
        />
    );
};

export default CGWADetails;
