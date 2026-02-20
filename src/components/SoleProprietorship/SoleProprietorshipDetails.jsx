import React from "react";
import DetailsLayout from "../common/DetailsLayout";

const SoleProprietorshipOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Solo Business
                        </span>

                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Sole Proprietorship Registration –
                            <span className="text-[#005a9c]"> An Overview</span>
                        </h2>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The simplest and most common form of business structure in India, owned, managed and operated by one person, is called Sole Proprietorship. Also known as solo entrepreneurship, proprietorship, or lone tradership, it is an ideal choice for small businesses and solo entrepreneurs. A sole proprietorship registration is a recommended type by entrepreneurs who want complete control over their business. While such businesses can employ others to work for them, a sole proprietorship is not recognized as a separate legal entity.
                        </p>

                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            There is no legal difference between the business and its owner, making the owner wholly responsible for the profits, debts and business liabilities. Unlike other business forms, sole proprietorship does not mandate formal business registration with the Ministry of Corporate Affairs (MCA). However, obtaining a Shop and Establishment Act License, GST registration and other permits essential to the business for legal operations is critical.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                            alt="Sole Proprietorship Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const SoleProprietorshipAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Key Advantages
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Advantages
                    </h2>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                            alt="Sole Proprietorship Advantages"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        {
                            title: "Simple Registration",
                            desc: "The proprietorship company registration process is simple and does not involve heavy paperwork. There is no need to register the company formally with the Ministry of Corporate Affairs (MCA), so entrepreneurs can start their businesses without the hassle of legal complexities."
                        },
                        {
                            title: "Business Control",
                            desc: "A sole proprietorship registration offers the owner complete control of the business. It facilitates decision-making, strategic planning, and taking profits home. This self-sufficiency allows the owner to act flexibly as the company needs to meet the challenges."
                        },
                        {
                            title: "Cost Effective",
                            desc: "A sole proprietorship is a simple business structure that does not include heavy legal expenses or registration costs. Since the overall sole proprietorship registration charges are pocket-friendly, it is a preferred business type for individuals venturing into business."
                        },
                        {
                            title: "Tax Benefits",
                            desc: "A sole proprietorship has a simple taxation process. The business income is considered the owner’s personal income. The business does not incur any separate corporate tax, which allows the owner to leverage the benefits and deductions on individual tax."
                        },
                        {
                            title: "Low Compliance Needs",
                            desc: "Unlike other business structures, sole proprietorship does not require complex regulatory and legal compliance. Reduced regulatory costs make the sole proprietorship registration process simple and hassle-free, allowing the owner to focus on business operations."
                        },
                        {
                            title: "Access to Profits",
                            desc: "A sole proprietorship is not a separate legal entity. It does not distinguish between the owner and the business entity, so the owner has direct access to the profits the business earns. The single owner does not have to share the profits with anyone."
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

const SoleProprietorshipEligibility = () => {
    const list = [
        { title: "Natural Person", desc: "Must be a living person (not a company or firm)." },
        { title: "Indian Resident", desc: "Must be a resident citizen of India." },
        { title: "Valid PAN", desc: "Business is linked directly to the owner's personal PAN." },
        { title: "Registered Office", desc: "Must have a physical place of business (Residential is OK)." },
        { title: "Trade License", desc: "Required based on the specific nature of business and location." }
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What are the Eligibility Criteria for Sole Proprietorship Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Simple eligibility criteria for single-owner businesses in India.
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

const SoleProprietorshipDocumentsSection = () => {
    const list = [
        "PAN Card of Owner",
        "Aadhar Card of Owner",
        "Office Address Proof",
        "Rental Agreement (if any)",
        "Latest Utility Bill",
        "NOC from Owner",
        "Passport Size Photos",
        "MSME/Udyam Certificate"
    ];
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Sole Proprietorship Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Digital copies required for a lightning-fast registration cycle.
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

const SoleProprietorshipProcessSection = () => {
    const steps = [
        { title: "Name Selection", desc: "Select a unique business name that reflects your brand philosophy." },
        { title: "Document Check", desc: "Verify Aadhar and PAN details to ensure consistency for licenses." },
        { title: "GST/Udyam Filing", desc: "Applying for the essential government certificates for your trade." },
        { title: "Bank Verification", desc: "Opening a current account with your new registration certificates." },
        { title: "Live Operations", desc: "Starting your business with legal compliance and expert backing." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        How to Apply for Sole Proprietorship Registration?
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Smooth 5-Step Journey to launch your vision.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" alt="Sole Proprietorship Registration Process" className="w-full rounded-lg shadow-sm" />
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
                                Start Sole Proprietorship Registration Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SoleProprietorshipFeaturesSection = () => {
    const features = [
        { title: "Expert Consultation", desc: "Advice on essential licenses mandatory for your specific trade." },
        { title: "Time Efficiency", desc: "We handle end-to-end registration, saving you weeks of work." },
        { title: "Paperwork Excellence", desc: "Perfect documentation to ensure zero rejection from authorities." },
        { title: "Compliance Management", desc: " facilitation of seamless filing to reduce tax submission lead times." },
        { title: "Customized Solutions", desc: "Solutions tailored to your scale, from micro-shops to large stores." },
        { title: "Market Leadership", desc: "Decade of expertise with the highest success rate in India." }
    ];
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Reasons to Consider VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Join the market leaders who trust us with their setup.
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

const SoleProprietorshipDetails = () => {
    return (
        <DetailsLayout
            overview={<SoleProprietorshipOverview />}
            advantages={<SoleProprietorshipAdvantages />}
            eligibility={<SoleProprietorshipEligibility />}
            documents={<SoleProprietorshipDocumentsSection />}
            process={<SoleProprietorshipProcessSection />}
            features={<SoleProprietorshipFeaturesSection />}
        />
    );
};

export default SoleProprietorshipDetails;
