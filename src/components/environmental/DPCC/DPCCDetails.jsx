import React from "react";
import DetailsLayout from "../../common/DetailsLayout";
import { CheckCircle2, ShieldCheck, Leaf, Factory, Users, ClipboardCheck, FileText, Settings, HelpCircle, HardHat } from "lucide-react";

// 1. Overview Component
const DPCCOverview = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
                <span className="inline-block px-4 py-1.5 text-xs lg:text-sm font-bold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6 uppercase tracking-wider">
                    Environmental Compliance
                </span>
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] leading-[1.1] tracking-tight mb-8">
                    Delhi Pollution Control Committee <br className="hidden lg:block" />
                    <span className="text-[#005a9c]">Authorization</span>
                </h2>
                <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed font-medium text-justify lg:text-left">
                    <p>
                        Delhi Pollution Control Committee (DPCC) is an autonomous regulatory body responsible for issuing the <strong>DPCC License</strong>. This authorization is governed and regulated by the Ministry of Environment, Forest & Climate Change.
                    </p>
                    <p>
                        It is a kind of no-objection certificate issued by the government to ensure that existing or proposed business models do not cause harm to the environment. Whether it's a new setup, capacity expansion, or production process change, entrepreneurs in Delhi must acquire this NOC as prescribed by law.
                    </p>
                    <p className="bg-slate-50 border-l-4 border-[#005a9c] p-6 rounded-r-2xl italic shadow-sm">
                        Not sure how to secure Delhi Pollution Control Committee Authorization? Talk to <strong>VyomBiz</strong> expert consultants today and get your DPCC authorization without any stress.
                    </p>
                </div>
            </div>
            <div className="lg:w-2/5 w-full">
                <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-2xl">
                    <h3 className="text-xl lg:text-2xl font-black text-[#072b47] mb-8 flex items-center gap-3">
                        <Users className="text-[#005a9c] shrink-0" size={24} />
                        Who Needs It?
                    </h3>
                    <div className="space-y-5">
                        {[
                            "Traders & Manufacturing Entities",
                            "Solid Waste Management Entities",
                            "Health Care Establishments",
                            "E-Waste & Battery Waste Entities",
                            "Bio-Medical & Plastic Waste Entities",
                            "Hazardous Waste Handlers"
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
const DPCCAdvantages = () => {
    return (
        <div className="space-y-12 lg:space-y-16">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Benefits of DPCC Authorization</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic tracking-[0.2em] uppercase">"Sustainable Growth & Legal Security"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {[
                    {
                        title: "Sustainable Development",
                        desc: "Ensures financial growth happens alongside ecological protection and social equity.",
                        icon: <Leaf className="text-[#005a9c]" />
                    },
                    {
                        title: "Waste Management",
                        desc: "Ensures proficient waste management measures & practices so that waste is reused & reduced.",
                        icon: <Settings className="text-[#005a9c]" />
                    },
                    {
                        title: "Resource Protection",
                        desc: "Helps in preventing depletion of natural resources and maintaining water & air quality.",
                        icon: <ShieldCheck className="text-[#005a9c]" />
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

// 3. Categories Component (Custom section for DPCC)
const DPCCCategories = () => {
    const categories = [
        { name: "White Category", range: "0-20", desc: "Least polluting industries. No consent certificate required, only an undertaking.", color: "bg-slate-100 text-slate-600" },
        { name: "Green Category", range: "21-40", desc: "Moderately polluting. Requires Consent to Establish (CTE) and Consent to Operate (CTO).", color: "bg-green-100 text-green-700" },
        { name: "Orange Category", range: "41-59", desc: "Polluting industries. Mandatory CTE and CTO before commencement.", color: "bg-orange-100 text-orange-700" },
        { name: "Red Category", range: "Above 60", desc: "Excessively polluting. Not permitted to function in Delhi jurisdiction.", color: "bg-red-100 text-red-700" }
    ];

    return (
        <div className="space-y-12">
            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] text-center mb-16">Industry Classification</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                {categories.map((cat, i) => (
                    <div key={i} className="p-8 lg:p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-[12px] border-l-[#005a9c]">
                        <div className={`inline-block px-4 py-1 rounded-full text-xs font-black uppercase mb-6 ${cat.color}`}>
                            Index: {cat.range}
                        </div>
                        <h4 className="text-2xl lg:text-3xl font-black text-[#072b47] mb-4">{cat.name}</h4>
                        <p className="text-base lg:text-lg text-slate-500 font-bold leading-relaxed">{cat.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 4. Documents Component
const DPCCDocuments = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-8 leading-tight tracking-tight">Documents Required</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                        "PAN & Aadhaar of Applicant",
                        "Latest Electricity Bill",
                        "Location / Site Plan",
                        "Land Ownership/Rent Deed",
                        "Partnership/MOA/AOA",
                        "Water Connection Certificate",
                        "MCD License (for Restaurants)",
                        "CA Certificate (Capital Inv.)"
                    ].map((doc, i) => (
                        <div key={i} className="flex items-center gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-white hover:border-[#005a9c]/20 hover:shadow-xl transition-all duration-300 group">
                            <FileText className="text-slate-400 group-hover:text-[#005a9c]" size={20} />
                            <span className="text-sm lg:text-base font-black text-slate-700 leading-snug">{doc}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:w-1/2 w-full">
                <div className="bg-[#072b47] p-10 lg:p-14 rounded-[3rem] text-white">
                    <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                        <HardHat className="text-[#FFE90A]" /> Red Category Specifics
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Manufacturing procedure with flow chart",
                            "List of raw materials & by-products",
                            "Noise Monitoring Report (DG Set)",
                            "ETP/STP effluent analysis report",
                            "Stack monitoring report",
                            "CETP Membership Proof"
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 text-sm font-bold text-slate-300 italic">
                                <span className="text-[#FFE90A] tracking-widest">STEP {i + 1}</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// 5. Process Component
const DPCCProcess = () => {
    const steps = [
        { title: "Activity Verification", desc: "Verify business activity and classify it under White, Green, Orange, or Red categories." },
        { title: "Online Submission", desc: "Submit essential documents and project reports on the DPCC official portal." },
        { title: "CTE Generation", desc: "Obtain Consent to Establish (CTE) before beginning construction or setup." },
        { title: "Device Installation", desc: "Install required pollution control devices (ETP/STP) as directed by DPCC." },
        { title: "CTO Issuance", desc: "Final verification and issuance of Consent to Operate (CTO) certificate." }
    ];
    return (
        <div className="max-w-5xl mx-auto py-10 lg:py-16">
            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] text-center mb-20 leading-tight">Registration Process</h2>
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
        </div>
    );
};

// 6. Why Trust Section (Features)
const DPCCWhyTrust = () => {
    return (
        <div className="bg-[#f8fafc] rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-20 border border-slate-100 shadow-sm">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-3xl lg:text-6xl font-black text-[#072b47] mb-8 leading-tight">Why Choose VyomBiz?</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic leading-relaxed uppercase tracking-[0.3em]">"10+ Years of Success in DPCC Liaison"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "400+ Experts", desc: "In-house CAs, CS, and environmental lawyers for seamless process." },
                    { title: "10k+ Pincodes", desc: "Wide network across India for local liaison and support." },
                    { title: "99% Success", desc: "Industry-leading success rate in acquiring DPCC authorizations." },
                    { title: "24/7 Support", desc: "Round-the-clock assistance to resolve any compliance queries." }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-200 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#005a9c] mb-8 font-black group-hover:bg-[#005a9c] group-hover:text-white transition-all shadow-sm">
                            <Leaf size={20} />
                        </div>
                        <h4 className="text-xl font-black text-[#072b47] mb-4 leading-tight group-hover:text-[#005a9c] transition-colors">{item.title}</h4>
                        <p className="text-sm text-slate-500 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const DPCCDetails = () => {
    return (
        <DetailsLayout
            showSectionImages={true}
            overview={<DPCCOverview />}
            advantages={<DPCCAdvantages />}
            eligibility={<DPCCCategories />}
            documents={<DPCCDocuments />}
            process={<DPCCProcess />}
            features={<DPCCWhyTrust />}
            navLabels={{
                eligibility: "Categories",
                features: "Why VyomBiz"
            }}
        />
    );
};

export default DPCCDetails;
