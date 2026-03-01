import React from "react";
import DetailsLayout from "../../common/DetailsLayout";
import { Recycle, ShieldCheck, Factory, FileText, CheckCircle2, MonitorSmartphone, Settings } from "lucide-react";

// 1. Overview Component
const EWasteOverview = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
                <span className="inline-block px-4 py-1.5 text-xs lg:text-sm font-bold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6 uppercase tracking-wider">
                    Dismantler Compliance
                </span>
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] leading-[1.1] tracking-tight mb-8">
                    An Overview of <span className="text-[#005a9c]">E-waste License</span> for Dismantling
                </h2>
                <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed font-medium text-justify lg:text-left">
                    <p>
                        If you are a dismantler with a desire to protect human health and the environment from the adverse effects of hazardous wastes, securing an e-waste license for dismantling will help you out.
                    </p>
                    <p>
                        Electronic waste products such as mobile phones and computers release harmful chemicals such as lead, nitrogen, chromium, PVC, etc. The improper disposal of such products can be dangerous. Thus, collecting, dismantling, and recycling such waste is the need of the hour.
                    </p>
                    <p className="bg-slate-50 border-l-4 border-[#005a9c] p-6 rounded-r-2xl italic shadow-sm">
                        Encountering challenges in obtaining an e-waste license for dismantling? Let <strong>VyomBiz</strong> experts help you overcome challenges in one go.
                    </p>
                </div>
            </div>
            <div className="lg:w-2/5 w-full">
                <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-2xl">
                    <h3 className="text-xl lg:text-2xl font-black text-[#072b47] mb-8 flex items-center gap-3">
                        <Recycle className="text-[#005a9c] shrink-0" size={24} />
                        Who is Eligible?
                    </h3>
                    <div className="space-y-5">
                        {[
                            "Any Individual",
                            "Registered society",
                            "Organisation",
                            "A designated agency",
                            "A company",
                            "An association"
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
const EWasteBenefits = () => {
    return (
        <div className="space-y-12 lg:space-y-16">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Benefits of Dismantling License</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic tracking-[0.2em] uppercase">"Promoting Sustainable Waste Management"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Preserves Resources", desc: "It helps to preserve natural resources by recovering valuable metals.", icon: <Recycle /> },
                    { title: "Prevents Pollution", desc: "It prevents the pollution caused by the release of toxic and hazardous substances.", icon: <ShieldCheck /> },
                    { title: "Generates Business", desc: "It generates new business growth, compliance networks, and employment opportunities.", icon: <Factory /> }
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

// 3. Documents Component
const EWasteDocuments = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] text-center mb-16">Documents Required</h2>
            <div className="bg-white p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-xl">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Aadhar card of the authorized person",
                        "PAN copy of the authorized person",
                        "Factory license / trade license",
                        "Electricity bill of the Unit Location",
                        "Layout / Site plan",
                        "MOA / AOA (if Company)",
                        "Board resolution for authorized person"
                    ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                            <FileText size={20} className="text-[#005a9c] shrink-0 mt-0.5" />
                            <span className="font-bold text-slate-700 text-sm">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// 4. Role Process Component
const EWasteRoles = () => {
    return (
        <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto mb-16 px-4">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Operational Roles & Space</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic tracking-[0.2em] uppercase">"Requirements for Safe E-Waste Dismantling"</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl">
                    <h3 className="text-2xl font-black text-[#072b47] mb-6 flex items-center gap-3">
                        <Settings className="text-[#005a9c]" /> Manual Dismantling
                    </h3>
                    <p className="text-slate-600 font-medium mb-6 leading-relaxed">
                        Physical segregation should be done with screwdrivers, wrenches, wire cutters. Done on a dismantling table with a space de-dusting system. De-dusters need a suction hood connected to a bag filter and venting.
                    </p>
                    <div className="bg-blue-50/50 p-6 rounded-2xl">
                        <h4 className="font-black text-sm text-[#005a9c] uppercase tracking-wider mb-4 border-b border-blue-100 pb-2">Segregated Items:</h4>
                        <ul className="text-slate-700 font-bold space-y-2 text-sm column-2">
                            <li>• Batteries</li>
                            <li>• Plastic</li>
                            <li>• Electrical Cables</li>
                            <li>• Circuit Boards</li>
                            <li>• Toner cartridges</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200">
                    <h3 className="text-2xl font-black text-[#072b47] mb-6 flex items-center gap-3">
                        <MonitorSmartphone className="text-slate-600" /> Space Requirements
                    </h3>
                    <p className="text-slate-600 font-medium leading-relaxed mb-6">
                        For a capacity of 1T/day, a minimum of <strong>300 square meters</strong> is required.
                        Space needed for 180-day storage, volume reduction processes, segregated materials, and administration office.
                    </p>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h4 className="font-black text-sm text-[#072b47] mb-3">Premise Conditions:</h4>
                        <ul className="space-y-2 text-sm text-slate-500 font-bold">
                            <li>✓ Water-resistant roofing & impervious surfaces</li>
                            <li>✓ Secure storage for disassembled parts</li>
                            <li>✓ Separate containers for batteries and capacitors</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EWasteDismantlingDetails = () => {
    return (
        <DetailsLayout
            showSectionImages={true}
            overview={<EWasteOverview />}
            benefits={<EWasteBenefits />}
            documents={<EWasteDocuments />}
            process={<EWasteRoles />}
            navLabels={{
                benefits: "Benefits",
                process: "Roles & Space"
            }}
        />
    );
};

export default EWasteDismantlingDetails;
