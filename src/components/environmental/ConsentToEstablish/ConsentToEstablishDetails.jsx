import React from "react";
import DetailsLayout from "../../common/DetailsLayout";
import { Factory, ShieldAlert, CheckCircle2, Clock, Leaf, Shield, FileText, ClipboardList } from "lucide-react";

// 1. Overview Component
const CTEOverview = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
                <span className="inline-block px-4 py-1.5 text-xs lg:text-sm font-bold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6 uppercase tracking-wider">
                    SPCB Certifications
                </span>
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] leading-[1.1] tracking-tight mb-8">
                    Consent to Establish <span className="text-[#005a9c]">from SPCB</span>
                </h2>
                <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed font-medium text-justify lg:text-left">
                    <p>
                        Consent to Establish from Pollution Control Board (CTE), also known as Consent for Establishment from SPCB, is a mandatory pollution NOC required for regulating industrial discharges, including air emissions, wastewater, and noise.
                    </p>
                    <p>
                        Industries are categorized into Red (high), Orange (moderate), and Green (low) based on their pollution levels. Some states also recognize a White Category, exempting certain industries from a formal NOC but requiring them to submit an application. Under the Water Act and the Air Act, entrepreneurs must apply for CTE before setting up their unit.
                    </p>
                    <p className="bg-slate-50 border-l-4 border-[#005a9c] p-6 rounded-r-2xl italic shadow-sm">
                        Secure your Consent to Establish Certificate smoothly with VyomBiz consultants and avoid shutdowns or fines ranging from <strong className="text-red-500">Rs 1 Lakh to Rs 50 Lakh</strong>.
                    </p>
                </div>
            </div>
            <div className="lg:w-2/5 w-full">
                <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-2xl">
                    <h3 className="text-xl lg:text-2xl font-black text-[#072b47] mb-8 flex items-center gap-3">
                        <Leaf className="text-[#005a9c] shrink-0" size={24} />
                        Pollution Categories
                    </h3>
                    <div className="space-y-5">
                        {[
                            { name: "Red Category (High Pollution)", color: "text-red-500", bg: "bg-red-50" },
                            { name: "Orange Category (Moderate Pollution)", color: "text-orange-500", bg: "bg-orange-50" },
                            { name: "Green Category (Low Pollution)", color: "text-green-500", bg: "bg-green-50" },
                            { name: "White Category (Exempt/Intimation)", color: "text-slate-500", bg: "bg-slate-50" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-center p-3 rounded-xl border border-slate-100 bg-white">
                                <div className={`w-10 h-10 ${item.bg} ${item.color} rounded-full flex items-center justify-center shrink-0 font-black`}>
                                    <Factory size={18} />
                                </div>
                                <span className="font-bold text-slate-700 leading-snug">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// 2. Advantages Component
const CTEBenefits = () => {
    return (
        <div className="space-y-12 lg:space-y-16">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Advantages of Getting CTE</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic tracking-[0.2em] uppercase">"Why Consent is Essential"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Regulatory Compliance", desc: "Adheres to environmental laws, helping avoid penalties and closures.", icon: <ShieldAlert /> },
                    { title: "Sustainable Development", desc: "Promotes sustainability by ensuring industry operates responsibly.", icon: <Leaf /> },
                    { title: "Health and Safety", desc: "Ensures the facility doesn't pose health hazards to the community.", icon: <Shield /> },
                    { title: "Positive Reputation", desc: "Demonstrates environmental consciousness, boosting brand value.", icon: <CheckCircle2 /> },
                    { title: "Access to Financing", desc: "A prerequisite for securing loans and financial assistance.", icon: <Factory /> }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform">
                        <div className="w-14 h-14 bg-blue-50 text-[#005a9c] rounded-2xl flex items-center justify-center mb-6">
                            {item.icon}
                        </div>
                        <h4 className="text-xl font-black text-[#072b47] mb-4">{item.title}</h4>
                        <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 3. Process Component
const CTEProcess = () => {
    const steps = [
        {
            title: "Online Application Submission",
            desc: "Submit CFE application online via the respective State Pollution Control Board's OCMMS portal with required documents and fee."
        },
        {
            title: "Document Scrutiny",
            desc: "The Regional Office (R.O.) scrutinizes documents. They may perform a site visit depending on the category of your industry."
        },
        {
            title: "Provisional Issuance",
            desc: "An initial inspection report is forwarded to the approving authority. A Provisional CTE is typically issued taking up to 120 days."
        },
        {
            title: "Validity & Renewal",
            desc: "CTE is generally valid for 3 to 5 years (up to 15 years for Micro Green projects). Extensions require re-application via OCMMS based on self-certification."
        }
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
                        <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-xl w-full">
                            <h4 className="text-xl lg:text-3xl font-black text-[#072b47] mb-4 group-hover:text-[#005a9c] transition-colors">{step.title}</h4>
                            <p className="text-base lg:text-lg font-medium text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-16 bg-red-50 border-l-4 border-red-500 p-8 rounded-r-3xl">
                <h4 className="text-lg font-black text-red-600 mb-2 flex items-center gap-2"><ShieldAlert /> Revocation Notice</h4>
                <p className="text-slate-700 font-medium text-sm">
                    The successful issuance or renewal of the CFE does not prevent the board from taking action against defaulting units. The certificate can be revoked if units fail to comply with the Air Act (1981) or Water Act (1974).
                </p>
            </div>
        </div>
    );
};

// 4. Documents Required
const CTEDocuments = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center max-w-4xl mx-auto px-4 mb-16">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Documents Checklist</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic tracking-[0.2em] uppercase">"What do you need for CTE?"</p>
            </div>
            <div className="bg-white p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-xl">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Site Plan or Location Plan of the Industry.",
                        "Detailed Project Report (Raw materials, products, capital cost of land/machinery).",
                        "Water Balance, source of water, & quantity.",
                        "Land documents (Registration, Rent, or Lease deed).",
                        "Details of Water or Air Pollution Control Instruments.",
                        "MOA / AOA or Partnership Deed."
                    ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-start bg-slate-50 p-5 rounded-2xl border border-slate-100 shadow-sm">
                            <ClipboardList size={22} className="text-[#005a9c] shrink-0" />
                            <span className="font-bold text-slate-700 text-sm leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ConsentToEstablishDetails = () => {
    return (
        <DetailsLayout
            showSectionImages={true}
            overview={<CTEOverview />}
            advantages={<CTEBenefits />}
            documents={<CTEDocuments />}
            process={<CTEProcess />}
        />
    );
};

export default ConsentToEstablishDetails;
