import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Recycle,
    Leaf
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FoodRecyclingOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Circular Economy
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Food Waste Recovery – <span className="text-[#005a9c]">Environmental Impact</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Food waste is a significant global problem, and in India, it translates to a loss of approximately ₹92,000 Crores per annum. This waste ends up in landfills, generating methane—a potent greenhouse gas with severe environmental effects.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Food recycling through composting and other treatments offers a sustainable solution. By converting organics into valuable fertilizer, businesses can reduce methane emissions, eliminate the need for chemical fertilizers, and improve soil health.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
                            alt="Food Recycling Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FoodRecyclingAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Food Recycling
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why businesses should invest in recycling infrastructure.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?auto=format&fit=crop&q=80"
                            alt="Food Recycling Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Soil Health", desc: "Compost promotes higher agricultural yields and prevents soil erosion." },
                        { title: "Cost Savings", desc: "Significantly reduces solid waste disposal fees for large food units." },
                        { title: "Greenhouse Gas Reduction", desc: "Minimizes methane emissions that would otherwise occur in landfills." },
                        { title: "Water Conservation", desc: "Compost improves soil quality, leading to better water retention." },
                        { title: "Regulatory Compliance", desc: "Securing PCB NOC protects your business from environmental lawsuits." },
                        { title: "Community Impact", desc: "Directly assists local farmers by providing organic fertilizers." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-[20px] font-semibold text-[#072b47] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const FoodRecyclingLicense = () => {
    const faqs = [
        {
            question: "What is a Food Recycling License?",
            answer: "A Food Recycling License refers to the No Objection Certificate (NOC) granted by the State Pollution Control Board (SPCB). It includes Consent to Establish (CTE) and Consent to Operate (CTO) for businesses engaged in food waste management or composting."
        },
        {
            question: "Why is food recycling important for the food industry?",
            answer: "It reduces solid waste disposal fees, prevents large quantities of recyclable ingredients from being wasted, and contributes to a circular economy by returning nutrients to agriculture through composting."
        },
        {
            question: "Who grants the Food Recycling License in India?",
            answer: "The concerned State Pollution Control Board (SPCB) of each state is the authority responsible for granting this license."
        },
        {
            question: "Which legislation deals with food waste management?",
            answer: "Food waste management in India is primarily dealt with under the Waste Management (Food Waste) Regulations, 2009."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Food Recycling"
                heroTitleSuffix="License"
                heroSubtitle="Drive Sustainability in the Food Supply Chain"
                heroDescription="India faces a massive challenge with food waste, with nearly 40% of production lost annually. A Food Recycling License (Pollution NOC) is mandatory for businesses scaling food recovery and composting operations. We help you secure CTE/CTO clearances from the SPCB."
                whatsIncludedList={[
                    "SPCB Liaisoning & Coordination",
                    "CTE & CTO Application Filing",
                    "Site Location Schematic Mapping",
                    "Process Flowchart Design",
                    "Environmental Impact Audit",
                    "Pollution Control Board Compliance"
                ]}
                stats={[
                    { count: "40%", label: "Food Wasted", icon: <Recycle size={20} /> },
                    { count: "19%", label: "Recycling Rate", icon: <Leaf size={20} /> },
                    { count: "SPCB", label: "Granting Authority", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={<FoodRecyclingOverview />}
                advantages={<FoodRecyclingAdvantages />}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who needs a Food Recycling License?",
                    list: [
                        { title: "Waste Management Firms", desc: "Companies specialized in processing municipal or industrial food waste." },
                        { title: "Composting Units", desc: "Facilities turning organic waste into fertilizers or soil conditioners." },
                        { title: "Bio-Gas Plants", desc: "Units converting food waste into renewable methane or energy." },
                        { title: "Large Food Parks", desc: "Industrial zones requiring an integrated waste management clearance." },
                        { title: "Hotel Chains", desc: "Large hospitality groups managing their own on-site recovery systems." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Mandatory papers for SPCB clearance.",
                    list: [
                        "Proof of Site Possession (Sale Deed/Lease)",
                        "Detailed Site Layout Plan (Equipment/ETP location)",
                        "Environmental Impact Assessment (EIA) Report",
                        "Process Flowchart for waste treatment",
                        "CA Certified Gross Fixed Asset Certificate",
                        "Copy of Factory License/Business Incorporation",
                        "Detailed Project Report (DPR) of the facility",
                        "Water and Electricity availability certificate"
                    ]
                }}
                process={{
                    title: "The Licensing Procedure",
                    subtitle: "Path to obtaining CTE and CTO from the board.",
                    steps: [
                        { step: "01", title: "Site Selection", desc: "Choosing a location compliant with industrial zone norms." },
                        { step: "02", title: "CTE Application", desc: "Submitting 'Consent to Establish' forms before construction starts." },
                        { step: "03", title: "Board Review", desc: "Technical scrutiny of environmental impact and process flow." },
                        { step: "04", title: "CTO Filing", desc: "Applying for 'Consent to Operate' once the unit is ready to run." },
                        { step: "05", title: "Final Inspection", desc: "SPCB officials visit to verify the installation of treatment plants." },
                        { step: "06", title: "NOC Grant", desc: "Issuance of the official pollution clearance certificate." }
                    ]
                }}
                features={{
                    title: "Service Features",
                    subtitle: "Our environmental compliance support.",
                    list: [
                        { title: "PCB Liaisoning", desc: "Direct interaction with Pollution Control Board for faster clearance." },
                        { title: "Design Support", desc: "Assistance in designing efficient waste treatment and ETP layouts." },
                        { title: "Quarterly Audits", desc: "Regular internal audits to ensure the unit stays within emission limits." },
                        { title: "Renewal Reminders", desc: "Alerts for CTO renewals which typically happen every 2-5 years." }
                    ]
                }}
                postCompliance={{
                    title: "Post Compliance",
                    subtitle: "Maintain your green status legally.",
                    list: [
                        "Submission of Annual Environmental Statements",
                        "Regular testing of effluent and flue gas emissions",
                        "Maintaining records of waste received and processed",
                        "Periodic maintenance of treatment machinery",
                        "Display of green metrics at the facility entrance",
                        "Informing the board about any process alterations"
                    ]
                }}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FoodRecyclingLicense;
