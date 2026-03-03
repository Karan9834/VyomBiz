import React from "react";
import DetailsLayout from "../../common/DetailsLayout";
import { CheckCircle2, ShieldAlert, Droplets, Map, CheckSquare, Microscope, Drill } from "lucide-react";

// 1. Overview Component
const PhaseIIOverview = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-3/5">
                <span className="inline-block px-4 py-1.5 text-xs lg:text-sm font-bold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6 uppercase tracking-wider">
                    Environmental Site Assessments
                </span>
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] leading-[1.1] tracking-tight mb-8">
                    An Overview of Phase II <span className="text-[#005a9c]">Investigations</span>
                </h2>
                <div className="space-y-6 text-base lg:text-lg text-slate-600 leading-relaxed font-medium text-justify lg:text-left">
                    <p>
                        Phase II Soil and Groundwater Investigations (Phase II ESAs) are essential for evaluating environmental risks associated with a property. They are usually initiated when a Phase I ESA identifies Recognized Environmental Conditions (RECs).
                    </p>
                    <p>
                        The process involves geophysical surveys, drilling, utility clearance, and laboratory analysis, conducted under stringent standards such as ASTM guidelines. Its primary goal is to quantify contamination and assess risks to human health or the property development.
                    </p>
                    <p className="bg-slate-50 border-l-4 border-[#005a9c] p-6 rounded-r-2xl italic shadow-sm">
                        Worried about the hurdles in Phase II Soil and Groundwater Investigations? Let <strong>VyomBiz</strong> experts eliminate them swiftly and optimize your property compliance strategy.
                    </p>
                </div>
            </div>
            <div className="lg:w-2/5 w-full">
                <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] border border-slate-100 shadow-2xl">
                    <h3 className="text-xl lg:text-2xl font-black text-[#072b47] mb-8 flex items-center gap-3">
                        <Map className="text-[#005a9c] shrink-0" size={24} />
                        When do I need it?
                    </h3>
                    <div className="space-y-5">
                        {[
                            "Property Acquisition (Due Diligence)",
                            "Property Sale Risk Evaluation",
                            "Property Refinancing or Lenders' Request",
                            "Re-insurance Verifications",
                            "Minor / Localized RECs via Limited Scope"
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
const PhaseIIBenefits = () => {
    return (
        <div className="space-y-12 lg:space-y-16">
            <div className="text-center max-w-4xl mx-auto px-4">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Benefits of Phase II Investigations</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic tracking-[0.2em] uppercase">"Cost Savings and Community Health"</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "Avoid Treatment Costs", desc: "Clearer picture of contamination saves clean-up efforts." },
                    { title: "Risk Mitigation", desc: "Prevents negative consequences and ensures regulatory compliance." },
                    { title: "Better Human Health", desc: "Reduces hazards from toxic environmental contamination." },
                    { title: "Clean Local Environment", desc: "Improves water sources, agriculture, and urban living." }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl hover:-translate-y-2 transition-transform">
                        <h4 className="text-lg lg:text-xl font-black text-[#072b47] mb-4">{item.title}</h4>
                        <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 3. Documents & Procedure Component
const PhaseIIProcess = () => {
    return (
        <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto px-4 mb-16">
                <h2 className="text-3xl lg:text-5xl font-black text-[#072b47] mb-6 leading-tight">Investigation Procedure & Documents</h2>
                <p className="text-[#005a9c] font-black text-sm lg:text-base italic tracking-[0.2em] uppercase">"Step-by-step rigorous analysis"</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl">
                    <h3 className="text-2xl font-black text-[#072b47] mb-6 flex items-center gap-3">
                        <CheckSquare className="text-[#005a9c]" /> Documentation Required
                    </h3>
                    <ul className="text-slate-600 font-bold space-y-4 text-sm lg:text-base">
                        <li className="flex gap-3"><Droplets className="text-blue-400 shrink-0" size={20} /> Phase I ESA Report</li>
                        <li className="flex gap-3"><Droplets className="text-blue-400 shrink-0" size={20} /> Strategy for Sampling & Analysis (SAP)</li>
                        <li className="flex gap-3"><Droplets className="text-blue-400 shrink-0" size={20} /> Health & Safety Plan (HASP)</li>
                        <li className="flex gap-3"><Droplets className="text-blue-400 shrink-0" size={20} /> Forms for Maintaining Sample Custody</li>
                        <li className="flex gap-3"><Droplets className="text-blue-400 shrink-0" size={20} /> Risk Assessment & Remediation Strategy</li>
                    </ul>
                </div>

                <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-200">
                    <h3 className="text-2xl font-black text-[#072b47] mb-6 flex items-center gap-3">
                        <Drill className="text-[#f1a134]" /> Practical Procedure
                    </h3>
                    <ol className="text-slate-600 font-medium space-y-6 text-sm lg:text-base leading-relaxed">
                        <li><strong>1. Scope Design:</strong> Geologists develop a site-specific scope detailing the drilling and lab sampling required.</li>
                        <li><strong>2. Drilling Permits:</strong> Applying for necessary well/drilling permits to avoid contamination.</li>
                        <li><strong>3. Fieldwork & Geophysical Survey:</strong> Involves utility clearance, core drilling, ground-penetrating radar, and water sampling.</li>
                        <li><strong>4. Lab Results:</strong> Evaluating vapours/chemicals against screening thresholds.</li>
                        <li><strong>5. Final Report:</strong> Certified geologist documents methodologies, data, and recommendations complying with ASTM.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

const PhaseIISoilDetails = () => {
    return (
        <DetailsLayout
            showSectionImages={true}
            overview={<PhaseIIOverview />}
            benefits={<PhaseIIBenefits />}
            process={<PhaseIIProcess />}
            navLabels={{
                benefits: "Benefits",
                process: "Process & Docs"
            }}
        />
    );
};

export default PhaseIISoilDetails;
