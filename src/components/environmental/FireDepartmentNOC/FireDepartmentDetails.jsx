import React from "react";
import DetailsLayout from "../../common/DetailsLayout";
import { CheckCircle2, Building2, Clock, ClipboardCheck, FileText, AlertTriangle, RefreshCw, ShieldCheck, Heart } from "lucide-react";

// 1. Overview Component
const FireDepartmentOverview = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
                <span className="inline-block px-4 py-1.5 text-xs lg:text-sm font-bold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6 uppercase tracking-wider">
                    Safety Certification
                </span>
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] leading-[1.1] tracking-tight mb-8">
                    Fire Department NOC – <br className="hidden lg:block" />
                    <span className="text-[#005a9c]">An Overview</span>
                </h2>
                <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed font-medium text-justify lg:text-left">
                    <p>
                        For protection against damages caused by fire, the Indian fire department issues a <strong>Fire Department NOC (No Objection Certificate)</strong>. After evaluating the affected premises and the mechanism used for fire safety, the NOC is given. The evaluation results shall meet all the fire safety standards and guidelines issued by the Bureau of Indian Standards.
                    </p>
                    <p>
                        Once the inspection is done and the authority finds that the standards used are as expected, it issues an NOC for the Applicant's building (Commercial or Residential). The NOC is issued by the respective state Fire Service Department, which acts accordingly.
                    </p>
                    <p>
                        However, the guidelines and procedures for issuing NOC differ from state to state. Multi-plex buildings of more than <strong>15 meters in height</strong> shall get Fire NOC compulsory from respective state fire services.
                    </p>
                    <p className="bg-slate-50 border-l-4 border-[#005a9c] p-6 rounded-r-2xl italic shadow-sm">
                        Worried about the challenges in the path of getting fire department NOC? Talk to <strong>VyomBiz</strong> experts today for a seamless certification experience.
                    </p>
                </div>
            </div>
            <div className="lg:w-2/5 w-full">
                <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-2xl">
                    <h3 className="text-xl lg:text-2xl font-black text-[#072b47] mb-8 flex items-center gap-3">
                        <Building2 className="text-[#005a9c] shrink-0" size={24} />
                        Who Needs It?
                    </h3>
                    <div className="space-y-5">
                        {[
                            "Educational Buildings (Universities, Colleges, Schools)",
                            "Business Buildings with Offices",
                            "Residential Occupancy (Commercial Usage)",
                            "Assembly Buildings (Cinema Halls, etc)",
                            "Mercantile Buildings (Warehouses, Shops, etc)",
                            "Hazardous & Industrial Buildings",
                            "Institutional (Nursing Home, Hospital, etc)"
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
const FireDepartmentAdvantages = () => {
    return (
        <div className="space-y-12 lg:space-y-16">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Benefits of Getting Fire NOC</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic tracking-[0.2em] uppercase">"Secure Your Business & Life Safety"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {[
                    {
                        title: "Trade License Filing",
                        desc: "A Fire Department NOC is compulsory as an attachment for applying for a trade license to the civil body in a particular state.",
                        icon: <FileText className="text-[#005a9c]" />
                    },
                    {
                        title: "Business Orchestration",
                        desc: "Fire Department NOC is one of the compulsory requirements prescribed by the fire department for carrying on any trade or business activities in India.",
                        icon: <ShieldCheck className="text-[#005a9c]" />
                    },
                    {
                        title: "Premise Safety",
                        desc: "Fire Department NOC ensures that safety precautions are in place to protect the people in the building against any risk.",
                        icon: <Heart className="text-[#005a9c]" />
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

// 3. Eligibility/Checklist Component
const FireDepartmentEligibility = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            <div className="bg-[#072b47] rounded-[2.5rem] lg:rounded-[3rem] p-10 lg:p-14 text-white flex flex-col justify-center">
                <h3 className="text-2xl lg:text-4xl font-black mb-10 flex items-center gap-4">
                    <Clock className="text-[#FFE90A] shrink-0" size={32} /> Pre-Application Checklist
                </h3>
                <div className="space-y-6">
                    {[
                        "Recommendations and suggestions issued by the fire department shall be adhered to.",
                        "Site inspection by the local fire authority.",
                        "Building plan depicting the firefighting system must be attached.",
                        "Particulars regarding business premise, nature of business, and height."
                    ].map((item, i) => (
                        <div key={i} className="flex gap-5 items-start bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <span className="text-[#FFE90A] font-black text-xl leading-none">{i + 1}.</span>
                            <p className="text-sm lg:text-base font-bold text-slate-200 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-slate-50 rounded-[2.5rem] lg:rounded-[3rem] p-10 lg:p-14 border border-slate-200 flex flex-col justify-center">
                <h3 className="text-2xl lg:text-4xl font-black text-[#072b47] mb-10 flex items-center gap-4">
                    <ClipboardCheck className="text-[#005a9c] shrink-0" size={32} /> Post-Application Steps
                </h3>
                <div className="space-y-6">
                    {[
                        "Re-inspection of the site once the applicant has made the compliances.",
                        "Final Approval and Verification by the multi-level fire department.",
                        "Issuance of the official No Objection Certificate."
                    ].map((item, i) => (
                        <div key={i} className="flex gap-5 items-start bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                            <CheckCircle2 className="text-[#005a9c] shrink-0 mt-1" size={24} />
                            <p className="text-sm lg:text-base font-bold text-slate-700 leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// 4. Documents Component
const FireDepartmentDocuments = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-8 leading-tight tracking-tight">Documents Required</h2>
                <p className="text-slate-500 font-bold text-lg mb-10 leading-relaxed italic border-l-4 border-[#005a9c] pl-6 max-w-lg">
                    "Ensure all digital copies are clear, certified, and under the prescribed file size limit."
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        "ID and address proof of applicant",
                        "Photograph of the premises",
                        "Electrical wiring certificate",
                        "Sets of building plans (layout/site)",
                        "Stability certificate",
                        "Architect's certification",
                        "Proprietor Details"
                    ].map((doc, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-[#005a9c]/20 hover:shadow-xl transition-all duration-300 group">
                            <FileText className="text-slate-400 group-hover:text-[#005a9c]" size={20} />
                            <span className="text-sm lg:text-base font-black text-slate-700 leading-snug">{doc}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-[#005a9c]/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                        src="/Environmental/FireDepartmentNOC/documents.png"
                        alt="Documents For Fire NOC"
                        className="w-full rounded-[3rem] shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-[1.02]"
                        onError={(e) => { e.target.src = "https://illustrations.popsy.co/amber/working-at-home.svg" }}
                    />
                </div>
            </div>
        </div>
    );
};

// 5. Process Component
const FireDepartmentProcess = () => {
    const steps = [
        { title: "Application Filing", desc: "Apply online via the official portal or offline to the State Fire Service Department." },
        { title: "Submission of Docs", desc: "Attach requisite documents ensuring technical specs meet the National Building Code." },
        { title: "Inspector Assignment", desc: "The Chief Fire Officer (CFO) forwards the application to the regional inspector." },
        { title: "On-Site Inspection", desc: "Physical verification of equipment installation and functional safety mechanisms." },
        { title: "Issuance of NOC", desc: "Official Fire Clearance Certificate issued after successful final verification." }
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

// 6. Validity & Penalties
const FireDepartmentPenalties = () => {
    return (
        <div className="space-y-12 lg:space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="p-10 lg:p-14 rounded-[3rem] bg-slate-50 border border-slate-200 shadow-inner flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-4xl font-black text-[#072b47] mb-8 flex items-center gap-4">
                        <AlertTriangle className="text-red-500 shrink-0" size={32} /> Validity Period
                    </h3>
                    <div className="space-y-5">
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 flex justify-between items-center shadow-sm hover:shadow-md transition-all">
                            <span className="font-black text-slate-400 uppercase tracking-[0.2em] text-[10px] lg:text-xs">Commercial Buildings</span>
                            <span className="text-[#005a9c] font-black text-xl lg:text-3xl italic">3 Years</span>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 flex justify-between items-center shadow-sm hover:shadow-md transition-all">
                            <span className="font-black text-slate-400 uppercase tracking-[0.2em] text-[10px] lg:text-xs">Residential Buildings</span>
                            <span className="text-[#005a9c] font-black text-xl lg:text-3xl italic">5 Years</span>
                        </div>
                    </div>
                </div>
                <div className="p-10 lg:p-14 rounded-[3rem] bg-[#072b47] text-white overflow-hidden relative flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                    <h3 className="text-2xl lg:text-4xl font-black mb-6 flex items-center gap-4 relative z-10 text-[#FFE90A]">
                        <RefreshCw className="shrink-0" size={32} /> Renewal Process
                    </h3>
                    <p className="text-slate-300 font-bold text-base lg:text-lg leading-relaxed mb-10 relative z-10 max-w-sm">
                        Renewal application should include a certified declaration regarding maintained and functional electrical installations.
                    </p>
                    <div className="bg-white/10 p-8 rounded-[2rem] border border-white/10 relative z-10">
                        <h4 className="text-xs font-black uppercase tracking-widest text-[#FFE90A] mb-6 inline-block border-b border-[#FFE90A]/30 pb-1">Renewal Delay Penalties</h4>
                        <div className="space-y-4 text-sm lg:text-base font-black text-slate-100">
                            <div className="flex justify-between items-center"><span>Up to 7 Days Delay</span><span className="text-green-400 font-black">No Charges</span></div>
                            <div className="flex justify-between items-center"><span>7 to 15 Days Delay</span><span className="text-[#FFE90A]">₹5 / Day</span></div>
                            <div className="flex justify-between items-center"><span>Beyond 15 Days</span><span className="text-red-400">₹15 / Day</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 7. Why Trust Section (Features)
const FireDepartmentWhyTrust = () => {
    return (
        <div className="bg-[#f8fafc] rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-20 border border-slate-100 shadow-sm">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-3xl lg:text-6xl font-black text-[#072b47] mb-8 leading-tight">Why Trust VyomBiz?</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic leading-relaxed uppercase tracking-[0.3em]">"10+ Years of Excellence in Fire Safety Licensing"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "10+ Years Exp", desc: "Decade of deep expertise in complex fire safety licensing and liaison." },
                    { title: "300+ Projects", desc: "Successfully secured and renewed Fire NOCs for diverse buildings and industries." },
                    { title: "99% Success", desc: "Near-perfect record of successful applications and site inspection handling." },
                    { title: "25% Ease", desc: "Significant reduction in client burden through end-to-end documentation management." }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#005a9c] mb-8 font-black group-hover:bg-[#005a9c] group-hover:text-white transition-all shadow-sm">
                            <Heart size={20} />
                        </div>
                        <h4 className="text-xl font-black text-[#072b47] mb-4 leading-tight group-hover:text-[#005a9c] transition-colors">{item.title}</h4>
                        <p className="text-sm text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const FireDepartmentDetails = () => {
    return (
        <DetailsLayout
            showSectionImages={true}
            overview={<FireDepartmentOverview />}
            advantages={<FireDepartmentAdvantages />}
            eligibility={<FireDepartmentEligibility />}
            documents={<FireDepartmentDocuments />}
            process={<FireDepartmentProcess />}
            postCompliance={<FireDepartmentPenalties />}
            features={<FireDepartmentWhyTrust />}
            navLabels={{
                postCompliance: "Penalties",
                features: "Why VyomBiz"
            }}
        />
    );
};

export default FireDepartmentDetails;
