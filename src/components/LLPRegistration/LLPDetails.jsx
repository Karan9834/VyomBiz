import React from "react";
import DetailsLayout from "../common/DetailsLayout";

const LLPRegistrationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Corporate Structure
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            LLP Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Limited Liability Partnership Registration, commonly known as LLP Registration, is a business structure that combines the elements of partnerships and corporations. The basic principle of LLP is that partners have limited liability. The liability of business partners in LLP is not absolute. Partners are not personally liable for the losses or indebtedness beyond their investments in the partnership business.                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            While LLP registration provides a partnership's flexibility and tax benefits, it also offers protection from liabilities like those of a corporation. LLP registration services are popular with professional service providers such as lawyers, consultants, and accountants. However, they are also used by businesses across different industry domains. LLPs are governed by the laws and regulations of specific jurisdictions for incorporation and operations.                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Book an appointment with our LLP registration consultants for simplified LLP registration in India and become a part of India's revolutionary startup ecosystem.                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="/Llp registration/overview..png"
                            alt="LLP Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const LLPRegistrationAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        LLP Registration Benefits in India
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        LLP registration benefits in India include limited liability, management flexibility, and less compliance needs. These benefits make LLPs attractive for small and medium-sized businesses, professionals, and startups. The benefits include
                    </p>
                    <div className="mt-10">
                        <img
                            src="/Llp registration/advantages..png"
                            alt="LLP Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Limited Liability", desc: "One prominent LLP registration benefit is that LLPs offer limited liabilities to partners, which means their assets are protected against the LLP's debts and liabilities. Such partnerships safeguard the partners from personally being held liable for dealing with other partners." },
                        { title: "Separate Entity", desc: "Another benefit is that an LLP is not the same as its partners. It is a separate legal entity with its own identity. It can independently enter into contracts, own property, and sue others. It can also be sued in its name." },
                        { title: "Flexibility", desc: "LLPs offer greater flexibility in terms of management and operations. Partners can outline their internal organizational structure depending on their requirements. Since the LLP Agreement governs the rights and duties of the partners, these can be personalized to suit the business needs." },
                        { title: "Marginal Compliance", desc: "Unlike other business structures like companies, LLPs must meet fewer compliances. Annual filings and other regulatory requirements are simple, and their maintenance is also easy." },
                        { title: "Tax Benefits", desc: "Another significant LLP registration benefit is that LLPs are taxed as partnerships and, hence, do not have to pay corporate tax. The profits are passed on to the partners who pay taxes at individual levels, which ultimately helps in tax savings." },
                        { title: "Permanent Succession", desc: "LLPs continue forever. This means that the retirement, death, or bankruptcy of one of the partners does not impact their existence. LLPs continue to exist until the business is wrapped up or dissolved by the provisions of the Limited Liability Partnership Registration Act." },
                        { title: "No Min Capital", desc: "Unlike companies, LLPs are not forced to maintain any capital at the time of incorporation. Partners can willingly contribute any amount of capital to start the business as agreed in the LLP agreement." },
                        { title: "Ease of Transferability", desc: "As per the LLP agreement, LLPs offer the ease of transferring interests. They enable the business to include new partners or transfer ownership interests." },
                        { title: "Pro Preferred", desc: "LLPs are a preferred business structure by professionals like lawyers, consultants, architects, and accountants. They offer a professional work environment while limiting the personal liability of individual partners." },
                        { title: "Globally Recognized", desc: "LLP is a globally recognized business structure, and it allows domestic partners to expand their operations internationally." }
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

const LLPEligibility = () => {
    const list = [
        { title: "Minimum Number of Partners", desc: "A minimum of two partners are required to register an LLP." },
        { title: "Designated Partners", desc: "At least two designated partners must be present, one of whom must be a resident of India." },
        { title: "Digital Signature Certificate (DSC)", desc: "All designated partners must obtain a DSC for filing online forms when registering." },
        { title: "Registered Office", desc: "LLP must have a registered office in India (commercial, residential, or industrial) with proof produced at the time of registration." },
        { title: "Name", desc: "Choosing an ideal name under the Name Guidelines recommended by the Ministry of Corporate Affairs is mandatory." },
        { title: "LLP Agreement", desc: "Outlining partners' duties, rights, responsibilities, management structure, and profit-sharing ratio – stamped and notarized." },
        { title: "Registration Application", desc: "Form 1 (Name Reservation) and Form 2 (Incorporation Document) must be filed with the ROC through the MCA portal." },
        { title: "Payment of Fees", desc: "Online LLP registration incurs a registration fee based on its contribution amount." },
        { title: "Verification and Approval", desc: "After validating the application, the Registrar issues a Certificate of Incorporation." },
        { title: "Post-Incorporation Formalities", desc: "Acquiring PAN, TAN, opening a bank account, and GST registration if applicable." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for LLP Incorporation in India?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Before starting your LLP business in India, it's essential to understand the requirements for incorporation. Key requirements for LLP Incorporation in India are mentioned below-
                </p>
                <div className="space-y-5 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <p key={i}>
                            <span className="font-semibold text-[#072b47]">{item.title} – </span>
                            {item.desc}
                        </p>
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

const LLPDocumentsSection = () => {
    const list = [
        "Identity Proof for Indian Partners – PAN Card, Voter ID, Passport, Driving License",
        "Identity Proof for foreign nationals or NRIs – Passport",
        "Address Proof – Bank Statement, Utility Bill, Aadhar Card for each partner",
        "Sample Signature of each partner",
        "Digital Signature Certificate (DSC) – One designated partner",
        "Proof of Registered Office Address – Utility Bill, Rent Agreement, NoC, Sale Deed/Property Deed",
        "LLP Agreement",
        "Passport Size Photographs"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for LLP Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Ensure you have the following for partners and registered office premises.
                </p>
                <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                    {list.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

const LLPProcessSection = () => {
    const steps = [
        { title: "DSC & DPIN", desc: "Obtain Digital Signatures and Designated Partner Identification Numbers." },
        { title: "Name Approval", desc: "Apply for name reservation (RUN-LLP) through the MCA portal." },
        { title: "FiLLiP Filing", desc: "Submit the incorporation form (FiLLiP) for certificate and PAN/TAN." },
        { title: "LLP Agreement", desc: "Draft and file the LLP Agreement within 30 days of incorporation." },
        { title: "Compliance Setup", desc: "Setup statutory records and open the business current account." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for LLP Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Getting your partnership registered in 5 simplified steps.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="/Llp registration/process..png" alt="LLP Registration Process" className="w-full rounded-lg shadow-sm" />
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
                                Start LLP Registration Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const LLPFeaturesSection = () => {
    const features = [
        { title: "Two Partners Commitment", desc: "Requires only two partners to start an LLP, making it accessible for small teams looking to benefit from the advantages of a corporate structure." },
        { title: "Separate Legal Entity", desc: "As a separate entity, it maintains a distinct legal and corporate identity. This distinction protects the personal assets of the partners from business liabilities." },
        { title: "Limited Liability Shield", desc: "All LLP members have limited liability that does not extend to personal assets. Liability is confined to their contribution." },
        { title: "Organizational Flexibility", desc: "It offers more organizational flexibility, akin to a partnership, allowing partners to define their roles and responsibilities according to their needs." },
        { title: "Perpetual Entity", desc: "It is a perpetual entity and does not shut down due to the death or exit of any members unless done so legally." },
        { title: "Simplified Accounting", desc: "Its accounting and filing systems are similar to a company but easier, remaining less burdensome for partners." },
        { title: "Low Compliance Burden", desc: "LLP compliance and regulations are not rigorous. The reduced regulatory framework makes running an LLP less cumbersome." },
        { title: "Zero Minimum Capital", desc: "It does not need any minimum capital for incorporation, lowering barriers to entry for startups." },
        { title: "Indian Citizen Requirement", desc: "At least one partner must be an Indian citizen. This legal requirement ensures a connection to India's business environment." },
        { title: "Unlimited Scalability", desc: "There is no cap on the maximum number of partners, allowing for scalability and growth as the business evolves." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Features of LLP Registration in India
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        LLP registration provides a flexible business structure with limited liability protection, fewer compliance needs, and an easy incorporation process.
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
                    <div className="border-t border-slate-300" />
                </div>
            </div>
        </section>
    );
};

const LLPDetails = () => {
    return (
        <DetailsLayout
            overview={<LLPRegistrationOverview />}
            whyRequired={{
                title: "LLP Company Registration in India – Brief History",
                imageUrl: "/company-registration-why.webp",
                content: [
                    "Limited Liability Partnerships (LLPs) were introduced to India in 2008 through an act of Parliament. The Limited Liability Partnership (LLP) Act, 2008 finally came into effect on April 1, 2009. This concept modernized the business landscape by offering an alternative business structure to traditional models such as partnerships and companies. The LLP company registration in India has gained importance among the masses.",
                    "LLPs aim to address the fault lines of conventional partnerships, such as partners' unlimited liability. The Limited Liability Partnership Registration Act pushed for greater business flexibility in India. The process also streamlined business operations and simplified management, making LLPs a successful business model.",
                    "LLP is a commonly used business structure by professionals, small and medium-sized (SME) organizations, and startups. Besides offering limited liability, LLPs provide various tax benefits and less compliance adherence.",
                    "The Government of India has made many modifications to the LLP Act over time to streamline the existing processes, boost transparency, and enhance the ease of doing business. Today, Limited Liability Partnership Registrations play a substantial role in India's entrepreneurial ecosystem, contributing to innovation and economic growth."
                ]
            }}
            advantages={<LLPRegistrationAdvantages />}
            eligibility={<LLPEligibility />}
            features={<LLPFeaturesSection />}
            documents={<LLPDocumentsSection />}
            process={<LLPProcessSection />}

            postCompliance={{
                navLabel: "LLP Forms",
                title: "Types of Forms for LLP Registration in India",
                subtitle: "LLP registration in India includes different types of forms, each serving a specific purpose for incorporation and compliance. Some essential forms required for LLP registration include:",
                list: [
                    { title: "FiLLiP Form", desc: "This form is used to incorporate an LLP in India. It includes information on the first LLP agreement, partners, and their contribution in addition to the existing LLP agreement." },
                    { title: "Run LLP", desc: "Run LLP is an LLP Registration form allowing the partners to reserve a name for their LLP before its incorporation. They can do so by filling out this form." },
                    { title: "Form 3", desc: "This form includes all the details of the LLP Agreement, such as its proposed name, registered office address, and partner details. This needs to be filed with the Registrar of Companies (ROC)." },
                    { title: "Form 8", desc: "Statement of Account and solvency. Used to file the LLP's annual returns documenting financial position, solvency status, and compliance standing." },
                    { title: "Form 11", desc: "A mandatory requirement disclosing critical information about partners, registration numbers, contribution amounts, and changes during the year." },
                    { title: "Form 24", desc: "Used to apply to the Registrar of Companies (ROC) related to matters exclusive to insolvency and financial distress." }
                ],
                imageUrl: "/requirement.png",
                badgeText: "Form Checklist",
                button: {
                    text: "Get started with vyombiz"
                }
            }}
        />
    );
};

export default LLPDetails;
