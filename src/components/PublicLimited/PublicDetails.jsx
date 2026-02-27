import React from "react";
import DetailsLayout from "../common/DetailsLayout";
import { CheckCircle2 } from "lucide-react";

const PublicLimitedOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Company Registration
                        </span>

                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Public Limited Company Registration –
                            <span className="text-[#005a9c]"> An Overview</span>
                        </h2>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Public Limited Company registration online is a process that helps entrepreneurs establish a business presence by acquiring funds through the stock exchange. Businesses can offer stocks privately through an Initial Public Offering (IPO) or publicly via the National Stock Exchange (NSE).
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With SPICe+ filing, you can obtain PAN, TAN, DIN, EPFO, ESIC registration, name reservation, GST registration, and even open a bank account in a single integrated process.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            Our seasoned consultants assist in reserving your company name, obtaining trade licenses, filing incorporation documents, opening a bank account, acquiring DSC & DIN, and ensuring complete compliance. Consult our experts for smooth and hassle-free Public Limited Company Registration in India.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/Public Limited Registration/overview...png"
                            alt="Public Limited Company Registration"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const PublicLimitedAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Key Benefits
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Public Limited Company Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Significant advantages of registering a Public Limited Company in India.
                    </p>

                    <div className="mt-10">
                        <img
                            src="/Public Limited Registration/benefits...png"
                            alt="Public Limited Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        {
                            title: "Abundance of Funding",
                            desc: "Raise capital by selling shares to the public. You can also obtain funds by issuing bonds and securing loans from financial institutions to strengthen your capital structure."
                        },
                        {
                            title: "Limited Liability",
                            desc: "Protects personal assets against business liabilities. Members are liable only to the extent of the capital invested by them."
                        },
                        {
                            title: "Business Expansion",
                            desc: "Leverage a larger capital pool with reduced market risks to expand operations and scale your business efficiently."
                        },
                        {
                            title: "No Minimum Capital Requirement",
                            desc: "As per the Companies Act amendment, there is no mandatory minimum capital requirement. However, starting with at least INR 1 lakh is advisable."
                        },
                        {
                            title: "No Upper Limit on Members",
                            desc: "A minimum of 7 members is required for formation, but there is no restriction on the maximum number of shareholders."
                        },
                        {
                            title: "Perpetual Existence",
                            desc: "The company continues to exist even if members retire or change, ensuring long-term business continuity."
                        },
                        {
                            title: "Enhanced Credibility",
                            desc: "Public companies are perceived as more reliable and trustworthy due to stock exchange regulation, making it easier to attract investors and raise funds."
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
                        >
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

const PublicEligibility = () => {
    const list = [
        { title: "7 Members", desc: "You need at least seven shareholders to form a public company." },
        { title: "3 Directors", desc: "Requirement of at least three directors on the board." },
        { title: "Digital Signature", desc: "DSC for all directors and subscribers is mandatory." },
        { title: "Registered Office", desc: "A physical address in India for official correspondence." },
        { title: "Corporate Shield", desc: "The company name must end with the word 'Limited'." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Public Limited Company Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Requirements to qualify for a Public Limited registration under MCA guidelines.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {list.map((item, i) => (
                        <div key={i} className="flex gap-3 p-4 bg-[#e6f0fa] rounded-xl">
                            <CheckCircle2 className="text-[#005a9c] shrink-0 mt-0.5" size={20} />
                            <div>
                                <span className="font-semibold text-[#072b47]">{item.title}</span>
                                <span className="text-slate-600"> – {item.desc}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Check Your Eligibility Now
                    </button>
                </div>
            </div>
        </section>
    );
};

const PublicDocumentsSection = () => {
    const list = [
        "PAN Card of all Directors",
        "Aadhar Card of all Directors",
        "Latest Bank Statement",
        "Passport Size Photos",
        "Electricity/Water Bill (Office)",
        "NOC from Owner",
        "Rent Agreement",
        "Proof of Ownership (Registry)"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Public Limited Company Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Digital copies of director IDs, address proofs, and office premises documents.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {list.map((item, i) => (
                        <div key={i} className="flex gap-3 p-4 bg-[#e6f0fa] rounded-xl">
                            <CheckCircle2 className="text-[#005a9c] shrink-0 mt-0.5" size={20} />
                            <span className="text-slate-700">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PublicProcessSection = () => {
    const steps = [
        { title: "DSC & DIN Allotment", desc: "Obtain Digital Signatures and Director Identification Numbers for all 3 directors." },
        { title: "RUN Name Approval", desc: "Reserve your enterprise name via the MCA's RUN (Reserve Unique Name) service." },
        { title: "SPICe+ Documentation", desc: "Drafting of MoA, AoA and filing the integrated SPICe+ form for incorporation." },
        { title: "ROC Scrutiny", desc: "Verification of documents by the Registrar of Companies to ensure compliance." },
        { title: "COI & PAN/TAN", desc: "Issuance of Certificate of Incorporation along with tax IDs and Commencement of Business." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for Public Limited Company Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Comprehensive 5-step journey to your enterprise launch.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="/Public Limited Registration/process...png" alt="Public Limited Registration Process" className="w-full rounded-lg shadow-sm" />
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
                        <div className="border-t border-slate-200" />
                        <div className="mt-12 text-center">
                            <button onClick={() => document.getElementById("registration-hero")?.scrollIntoView({ behavior: "smooth" })} className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Public Limited Registration Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PublicFeaturesSection = () => {
    const features = [
        { title: "IPO Readiness", desc: "Our experts set up your company with a listing-ready capital structure." },
        { title: "Complex Structuring", desc: "Specialists in shareholder agreements and complex MoA/AoA drafting." },
        { title: "Strategic Consultation", desc: "Guidance on board composition and corporate governance standards." },
        { title: "Fast-Track Approval", desc: "Prioritised 99% SLA delivery for large scale corporate setups." },
        { title: "Global Compliance", desc: "Ensuring your public limited company meets international standards." },
        { title: "Dedicated Relationship Manager", desc: "A senior expert assigned to handle every aspect of your public incorporation." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Reasons to Consider VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Enterprise-grade legal and financial support.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex gap-3 p-5 bg-[#e6f0fa] rounded-xl">
                            <CheckCircle2 className="text-[#005a9c] shrink-0 mt-0.5" size={20} />
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{feature.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PublicDetails = () => {
    return (
        <DetailsLayout
            overview={<PublicLimitedOverview />}
            advantages={<PublicLimitedAdvantages />}
            eligibility={<PublicEligibility />}
            documents={<PublicDocumentsSection />}
            process={<PublicProcessSection />}
            features={<PublicFeaturesSection />}
        />
    );
};

export default PublicDetails;
