import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Calendar,
    AlertTriangle
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FssaiAnnualReturnOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Mandatory Filing
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            FSSAI Yearly Returns – <span className="text-[#005a9c]">Compliance Management</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            FSSAI annual return filing is a mandatory requirement for food business operators including manufacturers, importers, packers, and labellers. It involves submitting essential information regarding production, handling, and storage to the FSSAI authorities.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The revised guidelines mandate online filing through the FoSCoS portal. This process ensures transparency in the food supply chain and helps the government monitor food safety across the nation.
                        </p>

                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
                            alt="FSSAI Annual Return Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiAnnualReturnAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Advantages of Filing
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why staying up-to-date with FSSAI returns is crucial.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
                            alt="FSSAI Annual Return Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Maintain Brand Trust", desc: "Showcase transparency in your food production and sale operations." },
                        { title: "Government Support", desc: "Compliant entities are more likely to receive government subsidies." },
                        { title: "Improved Efficiency", desc: "Regular filing helps in tracking production trends and business growth." },
                        { title: "Consumer Safety", desc: "Ensures adherence to safety standards that protect the end consumer." },
                        { title: "Smooth Licensing", desc: "A clean filing record makes the FSSAI license renewal process much easier." },
                        { title: "Legal Defense", desc: "Acting as proof that your business follows all mandated safety regulations." }
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

const FssaiAnnualReturnEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility Criteria
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Who is required to file FSSAI Annual Returns?
                </p>
                <div className="mb-10">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Licensed Manufacturers – </span>
                            All food production units holding an FSSAI State or Central license.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Food Importers – </span>
                            Organizations bringing food products into the Indian territory.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Packers & Labellers – </span>
                            Entities involved in packaging and labelling of food articles.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Milk Business Units – </span>
                            Special half-yearly filing requirements for those in the dairy sector.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Exporter FBOs – </span>
                            Businesses involved in shipping food products to international markets.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FssaiAnnualReturnDocuments = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Information Required
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Details you need to prepare for the Filing.
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed">
                        <li>FSSAI License Number and Portal Login Details</li>
                        <li>List of Food Items manufactured or handled</li>
                        <li>Quantity produced/handled in Metric Tons (MT)</li>
                        <li>Detailed value of food products (Unit Price)</li>
                        <li>Quantity of raw materials imported or exported</li>
                        <li>List of countries to which food is exported</li>
                        <li>Details of ports where import/export occurred</li>
                        <li>Water analysis reports and safety audit records</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FssaiAnnualReturnProcess = () => {
    const steps = [
        { step: "01", title: "Portal Login", desc: "Log in to the official FSSAI portal using your license credentials." },
        { step: "02", title: "Verification", desc: "Complete the OTP verification to access the annual return sub-menu." },
        { step: "03", title: "Form Selection", desc: "Choose Form D-1 (Annual) or Form D-2 (Half-Yearly for milk units)." },
        { step: "04", title: "Data Entry", desc: "Accurately fill in the production, sales, and export/import details." },
        { step: "05", title: "Electronic Submission", desc: "Revise all entries and submit the electronic form to the Food Safety Authority." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Filing Procedure
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-step path to complete your annual return.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="Filing Procedure"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">{index + 1}.</div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">{step.title}</h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiAnnualReturnFeatures = () => {
    const features = [
        { title: "Data Accuracy", desc: "We ensure your production and sales figures are accurately formatted for FSSAI." },
        { title: "Penalty-Free Filing", desc: "Our team tracks deadlines for you to avoid the ₹100/day late penalty." },
        { title: "Audit Ready", desc: "We organize your files so you are always ready for a sudden FSSAI inspection." },
        { title: "Multi-Unit Support", desc: "Special specialized support for enterprises with multiple manufacturing plants." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Service Features
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Why choose us for your return filing?
                    </p>
                </div>
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{feature.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const FssaiAnnualReturnCompliance = () => {
    const compliance = [
        "Download and save the filing acknowledgment for records",
        "Address any queries raised by the Food Safety Commissioner",
        "Update your internal records with the submitted data",
        "Conduct an internal mock audit to ensure data consistency",
        "Plan for the next half-yearly or annual cycle in advance",
        "Report any significant change in production capacity immediately"
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Post Filing Actions
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        What to do after submitting your returns.
                    </p>
                </div>
                <div>
                    {compliance.map((item, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{item}</h3>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const FssaiAnnualReturn = () => {
    const faqs = [
        {
            question: "Who is eligible for filing the FSSAI annual return?",
            answer: "FBOs with a turnover exceeding ₹12 Lakhs engaged in manufacturing, importing, sorting, export, or distribution are eligible. This includes all licensed food manufacturers and importers."
        },
        {
            question: "What is the due date for FSSAI Annual Return (Form D-1)?",
            answer: "Every licensed FBO must file their annual return under Form D-1 on or before 31st May of every financial year."
        },
        {
            question: "What is the penalty for late filing of FSSAI returns?",
            answer: "Any delay beyond May 31st attracts a penalty of ₹100 per day. The total penalty cannot exceed five times the annual licensing fee."
        },
        {
            question: "What details are required for the filing?",
            answer: "You need details of food items manufactured/sold, production quantity in Metric Tons, value of products, and details of any exports or imports including countries and ports."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI Annual"
                heroTitleSuffix="Return Filing"
                heroSubtitle="Stay Compliant with Mandatory Yearly Reporting"
                heroDescription="All licensed food manufacturers, importers, and packers in India are required to file FSSAI annual returns. Ensure your business remains in good standing by submitting accurate production and sale data before the May 31st deadline."
                whatsIncludedList={[
                    "Form D-1 & D-2 Preparation",
                    "FoSCoS Portal Submission",
                    "Production & Sale Data Audit",
                    "Half-Yearly Return (Milk Units)",
                    "Penalty Avoidance Verification",
                    "Expert Compliance Consulting"
                ]}
                stats={[
                    { count: "May 31st", label: "Due Date", icon: <Calendar size={20} /> },
                    { count: "₹100/day", label: "Late Penalty", icon: <AlertTriangle size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <ShieldCheck size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={<FssaiAnnualReturnOverview />}
                advantages={<FssaiAnnualReturnAdvantages />}
                eligibility={<FssaiAnnualReturnEligibility />}
                documents={<FssaiAnnualReturnDocuments />}
                process={<FssaiAnnualReturnProcess />}
                features={<FssaiAnnualReturnFeatures />}
                postCompliance={<FssaiAnnualReturnCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiAnnualReturn;
