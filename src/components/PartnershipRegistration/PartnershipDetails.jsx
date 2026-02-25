import React from "react";
import DetailsLayout from "../common/DetailsLayout";
import { CheckCircle2 } from "lucide-react";

const PartnershipRegistrationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Company Registration
                        </span>

                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Partnership Firm Registration Online -
                            <span className="text-[#005a9c]"> An Overview</span>
                        </h2>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The Indian Partnership Act of 1932 governs the principles of partnership firm registration online in India. It provides rules and regulations concerning partners’ responsibilities, profit sharing, liabilities, and dissolution of the firm. If you are looking for partnership firm registration online, you are at the right place.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Our legal consultants at VyomBiz will draft a partnership deed, apply for registration with notarized documents, reserve your desired firm name, enroll for PAN/GST, file your taxes, and complete post-enrolment compliance mandates.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            Take VyomBiz’s assistance for partnership company registration in top cities, namely, Mumbai, Delhi, Hyderabad, Pune, Bengaluru, Chennai, and Nagpur.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/Partnership Firm Registration/overview.....jpg"
                            alt="Partnership Firm Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const PartnershipRegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Key Benefits
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Partnership Firm Registration Online
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Explore the benefits of partnership firm registration online in India as described below:
                    </p>

                    <div className="mt-10">
                        <img
src="/Partnership Firm Registration/benefits.....jpg"
                            alt="Partnership Firm Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            title: "Ease of Registration",
                            desc: "The process of registration in India is easy and simple as compared to a private company (Pvt Ltd), which requires the drafting of documents, such as the MOA and AOA. You just need to draft and notarize a partnership deed with the respective state’s registrar of partnership firms."
                        },
                        {
                            title: "Flexible Compliance",
                            desc: "As opposed to a legal entity, a partnership firm registration has less compliance. Members don’t need to obtain a digital signature certificate (DSC) or Designated partner identification number (DPIN) like an LLC or LLP. The partners can easily form and dissolve the firm whenever they want to."
                        },
                        {
                            title: "100% Control in Decision Making",
                            desc: "Unlike a limited liability partnership (LLP) or private company, there’s no restriction or division of power between the partners. All partners have equal rights to make decisions."
                        },
                        {
                            title: "Equal Share in Profits",
                            desc: "All partners share equal profits, unlike a limited partnership, where the general partner takes more profits on the basis of the liability burden."
                        },
                        {
                            title: "Not Liable for Corporate Tax",
                            desc: "The firm is not liable to pay corporate tax. Instead, the partners pay taxes on their income after the partnership firm registration online in India."
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

const PartnershipEligibility = () => {
    const list = [
        { title: "Min 2 Partners", desc: "At least two legal persons required to form a partnership." },
        { title: "Firm Name", desc: "Select a unique name that doesn't conflict with existing trademarks." },
        { title: "Partnership Deed", desc: "Legal document containing all operational terms and conditions." },
        { title: "Business Place", desc: "A dedicated physical address for business registration." },
        { title: "Capital Contribution", desc: "Initial investment details from each partner in the deed." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Partnership Firm Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Basic legal requirements to start your partnership firm.
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

const PartnershipDocumentsSection = () => {
    const list = [
        "PAN Card of Partners",
        "Aadhar Card of Partners",
        "Voter ID / Passport",
        "Passport Size Photos",
        "Electricity Bill (Office)",
        "Rent Agreement",
        "NOC from Owner",
        "Registry Copy (Property)"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Partnership Firm Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Digital copies of personal proofs and office documentation.
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

const PartnershipProcessSection = () => {
    const steps = [
        { title: "Partner Agreement", desc: "Align on business goals, capital, and profit-sharing ratios." },
        { title: "Deed Drafting", desc: "Professional drafting of the Partnership Deed with all essential clauses." },
        { title: "Execution", desc: "Signing the deed on non-judicial stamp paper of appropriate value." },
        { title: "Registration", desc: "Applying for registration with the Registrar of Firms (optional but recommended)." },
        { title: "Tax IDs", desc: "Obtaining PAN and TAN for the firm and opening a bank account." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for Partnership Firm Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Simple steps to formalize your partnership.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="/Partnership Firm Registration/process.....jpg" alt="Partnership Registration Process" className="w-full rounded-lg shadow-sm" />
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
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Partnership Registration Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PartnershipFeaturesSection = () => {
    const features = [
        { title: "Perfect Deed Drafting", desc: "Customized deeds that cover every possible business scenario." },
        { title: "Tax Optimization", desc: "Guidance on profit withdrawal and partner remuneration for tax efficiency." },
        { title: "Fast Processing", desc: "Getting your firm registered and bank accounts ready in record time." },
        { title: "Regulatory Knowledge", desc: "Expertise in the Indian Partnership Act and state-specific rules." },
        { title: "Zero Paperwork Stress", desc: "We handle the entire notarization and stamp duty process for you." },
        { title: "Post-Registration", desc: "Continuous support for GST, Trademark and specialized licenses." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Reasons to Consider VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your partner in building a strong legal foundation.
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

const PartnershipDetails = () => {
    return (
        <DetailsLayout
            overview={<PartnershipRegistrationOverview />}
            advantages={<PartnershipRegistrationAdvantages />}
            eligibility={<PartnershipEligibility />}
            documents={<PartnershipDocumentsSection />}
            process={<PartnershipProcessSection />}
            features={<PartnershipFeaturesSection />}
        />
    );
};

export default PartnershipDetails;
