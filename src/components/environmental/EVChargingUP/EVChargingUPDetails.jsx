import React from "react";
import DetailsLayout from "../../common/DetailsLayout";
import { Zap, Cable, BatteryCharging, CheckCircle2, Factory, FileText, BatteryMedium, Cpu } from "lucide-react";

// 1. Overview Component
const EVChargingOverview = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
                <span className="inline-block px-4 py-1.5 text-xs lg:text-sm font-bold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6 uppercase tracking-wider">
                    UP Government Framework
                </span>
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] leading-[1.1] tracking-tight mb-8">
                    An Overview of Charging Station <span className="text-[#005a9c]">License in UP</span>
                </h2>
                <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed font-medium text-justify lg:text-left">
                    <p>
                        Are you planning to install an electric vehicle (EV) charging station in Uttar Pradesh (UP)? The charging station license in UP is a requirement governing the setup of EV charging stations in the state. Setting up an electric power station is advantageous because UP is the country's largest consumer base.
                    </p>
                    <p>
                        The establishment of public and private charging stations is permitted through the guidelines issued by the Ministry of Power in 2018. These regulations further enable faster adoption of electric vehicles in India.
                    </p>
                    <p className="bg-slate-50 border-l-4 border-[#005a9c] p-6 rounded-r-2xl italic shadow-sm">
                        EV Charging Stations enable the Uttar Pradesh government to cater to a wide range of electric vehicle owners. Moreover, it offers lucrative business opportunities and promotes the faster adoption of charging infrastructure.
                    </p>
                </div>
            </div>
            <div className="lg:w-2/5 w-full">
                <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-2xl">
                    <h3 className="text-xl lg:text-2xl font-black text-[#072b47] mb-8 flex items-center gap-3">
                        <BatteryCharging className="text-[#005a9c] shrink-0" size={24} />
                        Types of EV Stations
                    </h3>
                    <div className="space-y-5">
                        {[
                            "Public Charging Stations",
                            "Semi-Public Charging Stations",
                            "Private Charging Stations",
                            "Level 1 (Slow AC 120V)",
                            "Level 2 (Standard AC 240V)",
                            "Level 3 (Rapid DC 480V)"
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

// 2. Benefits Component
const EVChargingBenefits = () => {
    return (
        <div className="space-y-12 lg:space-y-16">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Advantages of EV License</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic tracking-[0.2em] uppercase">"Why Open an EV Station in UP?"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Profitable Business", desc: "Highly profitable opportunity supported by rising EV demand.", icon: <Zap /> },
                    { title: "Government Support", desc: "Benefit from support, incentives, and government rebates.", icon: <CheckCircle2 /> },
                    { title: "Low Competition", desc: "Early movers have a valuable opportunity to establish market presence.", icon: <Factory /> },
                    { title: "Environmental Impact", desc: "Demonstrate commitment towards Environmental Sustainability (CSR).", icon: <BatteryMedium /> },
                    { title: "Cost Saving", desc: "A cost-effective option that leads to increased footfall.", icon: <Cpu /> }
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

// 3. Eligibility Component
const EVChargingEligible = () => {
    return (
        <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">License Eligibility</h2>
                <p className="text-slate-500 font-bold mb-6 leading-relaxed">As per the guidelines by the Ministry of Power, BEE, and CEA:</p>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Install charging hubs with one or more kiosks/boards approved by local standards.",
                        "Set up a partnership with an online Network Service Provider (NSP).",
                        "Build in the option for stand-alone battery switching.",
                        "Captive structure: must have specific chargers for company fleet.",
                        "Must install 33/11 KV cables, transformers and energy meters.",
                        "At least 1 charging station in a 3km x 3km grid.",
                        "At least 1 charging station every 25 km on highways.",
                        "At least 1 fast-charging station every 100 km for long-range EVs."
                    ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <Cable size={20} className="text-[#005a9c] shrink-0 mt-0.5" />
                            <span className="font-bold text-slate-700 text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// 4. Documents Component
const EVChargingDocuments = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] text-center mb-16">Documents Required</h2>
            <div className="bg-slate-50 p-10 lg:p-14 rounded-[3rem] border border-slate-200">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "KYC of the authorized person",
                        "KYC of company signatory",
                        "Sale deed/lease deed/rent agreement",
                        "Aadhar card of the signatory",
                        "GST registration certificate",
                        "PAN card of the signatory",
                        "Topographic map",
                        "Map of the Land"
                    ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                            <FileText size={20} className="text-[#005a9c] shrink-0" />
                            <span className="font-bold text-slate-700 text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const EVChargingUPDetails = () => {
    return (
        <DetailsLayout
            showSectionImages={true}
            overview={<EVChargingOverview />}
            benefits={<EVChargingBenefits />}
            eligibility={<EVChargingEligible />}
            documents={<EVChargingDocuments />}
        />
    );
};

export default EVChargingUPDetails;
