import React from 'react';
import { Rocket, Smile, MapPin, PieChart, Shield, CheckCircle2, Leaf, Factory, Users, ClipboardCheck, FileText, Settings, HelpCircle, HardHat } from 'lucide-react';
import DetailsLayout from '../../common/DetailsLayout';

// 1. Overview
const UPPCBOverview = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
                <span className="inline-block px-4 py-1.5 text-xs lg:text-sm font-bold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6 uppercase tracking-wider">
                    UPPCB Compliance
                </span>
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] leading-[1.1] tracking-tight mb-8">
                    Overview of <br className="hidden lg:block" />
                    <span className="text-[#005a9c]">UP Pollution Control Board</span>
                </h2>
                <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed font-medium text-justify lg:text-left">
                    <p>
                        <strong>Uttar Pradesh Pollution Control Board (UPPCB)</strong> is a legal organization established under the Water Act that ensures the implementation of environmental laws within Uttar Pradesh. The 25 regional offices ensure the managing and controlling of these acts.
                    </p>
                    <p>
                        <strong>Consent to Establish (CTE)</strong> is a No Objection Certificate (NOC) required to be obtained from the UPPCB before constructing a facility. It affirms that environmental norms have been followed. The <strong>Pollution Control Board</strong> also acts as an enlightening tool for factories to reduce air and water toxicity in regions like the Ganga.
                    </p>
                    <p className="bg-slate-50 border-l-4 border-[#005a9c] p-6 rounded-r-2xl italic shadow-sm">
                        Fear of delays in securing approval from the UP Pollution Control Board? Talk to <strong>VyomBiz</strong> expert consultants today for a seamless compliance journey.
                    </p>
                </div>
            </div>
            <div className="lg:w-2/5 w-full">
                <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-2xl">
                    <h3 className="text-xl lg:text-2xl font-black text-[#072b47] mb-8 flex items-center gap-3">
                        <Users className="text-[#005a9c] shrink-0" size={24} />
                        Who Needs UPPCB Consent?
                    </h3>
                    <div className="space-y-5">
                        {[
                            "Manufacturing Entities",
                            "Health Care Establishments",
                            "Import & Export Businesses",
                            "E-Waste & Solid Waste Entities",
                            "Hazardous & Battery Waste Entities",
                            "Bio-Medical & Plastic Waste Entities",
                            "Dairy, Slaughterhouses & Stone Crushers"
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

// 2. Advantages
const UPPCBAdvantages = {
    title: "Benefits of UPPCB NOC",
    subtitle: "The profound value of environmental compliance",
    list: [
        { title: "Sustainable Development", desc: "Ensures promoting financial growth along with ecological protection and social equity." },
        { title: "Conservation", desc: "Prevents the depletion of environmental and natural resources while maintaining water & air quality." },
        { title: "Waste Management", desc: "Permits the implementation of efficient waste management practices to reduce & reuse waste." },
        { title: "Consumer Awareness", desc: "Raises consumer awareness by promoting the use of paper bags, public transport, and eco-friendliness." },
        { title: "Compliance", desc: "Ensures compliance with Health Care Establishment guidelines to reduce pollutants." },
        { title: "Eco-Friendly Environment", desc: "Establishes a work environment encouraging solar-powered lights, CNG, and energy efficiency." }
    ]
};

// 3. Categories (Custom Section)
const UPPCBCategories = () => {
    const categories = [
        { name: "White Category", range: "0-20", desc: "Least polluting industries. Do not require consent certificates, only operate under guidelines.", color: "bg-slate-100 text-slate-600" },
        { name: "Green Category", range: "21-40", desc: "Moderate polluting units that must obtain Consent to Establish (CTE) & Operate (CTO).", color: "bg-green-100 text-green-700" },
        { name: "Orange Category", range: "41-59", desc: "High polluting industries prohibited to commence without submitting consent certificates.", color: "bg-orange-100 text-orange-700" },
        { name: "Red Category", range: "Above 60", desc: "Excessively polluting industries emitting hazardous & toxic wastes. Heavily restricted.", color: "bg-red-100 text-red-700" }
    ];

    return (
        <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto px-4 mb-16">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Industry Categories</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic tracking-[0.2em] uppercase">"Under UP State Pollution Control Board"</p>
            </div>
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

// 4. Documents
const UPPCBDocuments = {
    title: "Documents Required",
    description: "Submit these mandatory documents to the UPPCB to obtain Consent to Establish (CTE) and Operate (CTO):",
    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413575b8?auto=format&fit=crop&w=800",
    list: [
        "Cover Requisition Letter", "PAN Card & Aadhar Card", "Copy of sale deed / rent deed", "MOA & AOA / Partnership deed",
        "Site layout plan & business design plan", "Schematic chart of significant zones", "Manufacturing procedure details",
        "Land use certificate", "CA Verified Auditor's Certificate", "Wastewater & underground water balance",
        "Groundwater Clearance Report", "Municipality connection certificate", "STP / ETP Proposals",
        "Air Pollution Control (APC) Measures", "Environmental Clearance from MOEF"
    ]
};

// 5. Registration Process
const UPPCBProcess = {
    title: "Registration Process",
    subtitle: "Path to UPPCB NOC",
    steps: [
        { step: "1", title: "Common Application", desc: "Fill out a common application form along with the applicable documents for the manufacturing unit." },
        { step: "2", title: "Submit Documents", desc: "Submit requisite documents including the cover letter and layout plan at the UPPCB office or portal." },
        { step: "3", title: "Consolidated Fee", desc: "Make the payment of consolidated application fees as prescribed by the UPPCB authorities." },
        { step: "4", title: "Inspection", desc: "The authorized team reviews, inspects, and verifies the site for field inspection and reporting." },
        { step: "5", title: "Grant of NOC", desc: "Obtain the NOC or CTE certificate from the UPPCB within 90 days of inspection scrutiny." }
    ]
};

// 6. Functions & Validity (Post Compliance style)
const UPPCBFunctions = {
    title: "UPPCB Functions & Regulations",
    subtitle: "Rules governed under the Water & Air Acts",
    list: [
        { title: "Issuance of Consent", desc: "Grants Consent under Section 25/26 of Water Act and Section 21 of Air Act, including adequacy of site." },
        { title: "Pollutant Assessment", desc: "Assess ambient air quality, identify industrial sources, and collect Water Cess." },
        { title: "Technology Development", desc: "Develop pollution control technologies and conduct mass consumer awareness programs." },
        { title: "Hazardous Rules Application", desc: "Identify isolated storages under Hazardous Chemicals Rules and implement Biomedical Waste Rules." },
        { title: "Legal & Expiry Procedures", desc: "The authorization is typically valid for 5 to 10 years, after which a renewal application is mandatory." }
    ]
};

// 7. Why Trust Us
const UPPCBWhyTrust = () => {
    return (
        <div className="bg-[#f8fafc] rounded-[3rem] lg:rounded-[4rem] p-10 lg:p-20 border border-slate-100 shadow-sm">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-3xl lg:text-6xl font-black text-[#072b47] mb-8 leading-tight">Why Choose VyomBiz?</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic leading-relaxed uppercase tracking-[0.3em]">"Your Environmental Consulting Partner"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "10+ Years Exp", desc: "Over a decade of healthy experience in environmental consulting." },
                    { title: "300+ Businesses", desc: "Assisted over 300 scale businesses in obtaining their NOC." },
                    { title: "70% Market Share", desc: "Leading the environmental consulting industry successfully." },
                    { title: "Pre-Screening", desc: "Ensure compliance with all admissibility criteria for pre-screening." }
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

const UPPCBDetails = () => {
    return (
        <DetailsLayout
            showSectionImages={true}
            overview={<UPPCBOverview />}
            advantages={UPPCBAdvantages}
            typesOfCompliance={<UPPCBCategories />}
            documents={UPPCBDocuments}
            process={UPPCBProcess}
            postCompliance={UPPCBFunctions}
            features={<UPPCBWhyTrust />}
            navLabels={{
                typesOfCompliance: "Categories",
                postCompliance: "Functions",
                features: "Why VyomBiz"
            }}
        />
    );
};

export default UPPCBDetails;
