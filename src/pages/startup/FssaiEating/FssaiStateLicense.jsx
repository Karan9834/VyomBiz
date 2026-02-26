import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    MapPin,
    IndianRupee
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FssaiStateOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            State Level
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            FSSAI State License – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            FSSAI (Food Safety and Standards Authority of India) is a prominent government-backed entity regulating India's food sector. It has outlined countless guidelines and provisions to foster food safety across the nation. Presently, every food business in India is mandated to secure an applicable FSSAI state license to conduct its business operation.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Functioning without a valid state food license registration is a punishable offence for FBOs as per the FSS Act, 2006. FSSAI conducts all its operations given the said Act and also follows the direction of the Ministry of Health & Family Welfare.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            <strong className="text-[#072b47]">Role of the Food Safety and Standards Authority of India</strong><br />
                            FSSAI oversees and monitors food safety to safeguard public health. The key roles include: formulating guidelines, introducing food safety awareness, releasing directions for FBOs, setting out norms for food testing labs, and utilizing a rapid alert system for prompt identification of issues in food articles.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
                            alt="FSSAI State License Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiStateLicenseAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of FSSAI State License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The FSSAI State License is essential for food businesses operating within a specific state in India. Here are some key benefits:
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
                            alt="FSSAI State License Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Brand Recognition", desc: "Creates strong brand recognition among the target end-users and the public at large." },
                        { title: "Improved Credibility", desc: "Improves the creditability of the business amongst suppliers and partners." },
                        { title: "Consumer Attraction", desc: "Enables businesses to attract more customers and build trust." },
                        { title: "Legal Stability", desc: "Offers legal stability that otherwise is lacking in unregistered counterparts." },
                        { title: "Best Practices", desc: "Facilitates best practices for the business owner to ensure food safety." },
                        { title: "Penalty Avoidance", desc: "Helps you avoid severe penalties imposed by the FSS Act of 2006 for non-compliance." }
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

const FssaiStateEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Needs an FSSAI State License?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Businesses with a medium-sized operation in food manufacturing, processing, packaging, storage, distribution, or sales need to obtain an FSSAI State License. In particular, this license is required for businesses that belong to the following categories:
                </p>
                <div className="mb-10">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-6">
                        <li>
                            <span className="font-semibold text-[#072b47]">Turnover Range – </span>
                            Businesses operating in a single state and generating an annual turnover of more than Rs 12 lacs and less than Rs 20 Crores.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Proprietary Foods – </span>
                            Facilities dealing with Proprietary foods.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Vegetable Oil Production – </span>
                            Vegetable oil production & processing facility using the process of solvent extraction meeting the above turnover criteria.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Hotels & Restaurants – </span>
                            Hotels having a 4-star rating or less.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Dairy & Meat Processing – </span>
                            Facilities dealing with dairy products (500 to 50000 lit) and slaughterhouses with specific daily output limits.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Storage Facilities – </span>
                            Storages possess an overall capacity of less than 50,000 metric tons yearly.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">All Food Processing – </span>
                            All food processing facilities, including re-packing units, with a per-day capacity of not less than 100kg/l to up to 2 metric tons.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FssaiStateDocuments = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required to Obtain FSSAI State License
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Following are the Documents that one has to arrange to apply for a state FSSAI license:
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed">
                        <li>Details of key management personnel such as Directors, Partners, proprietors, & Executive Members of the Society with real address & contact particulars.</li>
                        <li>Passport-sized photos of the individual seeking the license</li>
                        <li>Identification as well as address proof of the individual seeking the license</li>
                        <li>Applicant's PAN card</li>
                        <li>A copy of property Documents (if the business place is owned by the applicant)</li>
                        <li>A copy of the rent agreement & NOC granted by the landlord (in case of rented property)</li>
                        <li>Particulars on Raw material suppliers</li>
                        <li>Form B is Duly completed and authenticated by the applicant.</li>
                        <li>List of machinery installed at the facility</li>
                        <li>NOC accorded by the local Municipality</li>
                        <li>Particulars of food categories and proposed food articles to be produced at the plant</li>
                        <li>Import Export Code rendered by the Directorate General of Foreign Trade.</li>
                        <li>Form-IX</li>
                        <li>Authorization letter enclosing the name as well as the address of the liable individual</li>
                        <li>Food Safety Management System (FSMS)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FssaiStateProcess = () => {
    const steps = [
        { step: "01", title: "Filing of Application", desc: "Arranging the aforesaid Documents and Filing of application via Form B on the FOSCOS portal." },
        { step: "02", title: "Submission & Fee Payment", desc: "Submission of the form to the licensing authority via the online portal FOSCOS. The filing process ends with the submission of standard fees." },
        { step: "03", title: "In-depth Scrutiny", desc: "In-depth scrutiny of applications and Documents by FSSAI's officials." },
        { step: "04", title: "On-site Inspection", desc: "If needed, an on-site inspection will be conducted by FSSAI's officials to determine the level of compliance at business premises." },
        { step: "05", title: "Grant of License", desc: "Grant of State FSSAI License by the licensing authority. After securing the license, the business owner can commence their business operation." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Process for Obtaining FSSAI State License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        To obtain an FSSAI State License from the licensing authority, follow these steps:
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="The Approval Journey"
                            className="w-full rounded-lg shadow-sm"
                        />
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-[#072b47] mb-2">Timeline Summary (Approx 6-12 Weeks):</h3>
                            <ul className="text-[15px] text-slate-600 space-y-2">
                                <li><strong>Preperation:</strong> 1-2 Weeks</li>
                                <li><strong>Submission:</strong> 1 Week</li>
                                <li><strong>Review:</strong> 2-3 Weeks</li>
                                <li><strong>Inspection:</strong> 2-4 Weeks</li>
                                <li><strong>Issuance:</strong> 1-2 Weeks</li>
                            </ul>
                        </div>
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

const FssaiStateFeatures = () => {
    const features = [
        { title: "Thorough Assessments", desc: "Conduct Thorough Assessments to Ensure Compliance with State-specific Regulations." },
        { title: "Business Expansion", desc: "Expand your Business Potential with our 10+ Years of Expertise in FSSAI Services." },
        { title: "High Success Rate", desc: "99% Success Rate in Approval of FSSAI Applications in One Go." },
        { title: "Brand Credibility", desc: "Enhance your Brand’s Credibility and Market Presence with a Valid FSSAI State License." },
        { title: "Seamless Application", desc: "Benefit from Seamless Application Processing and a Hassle-free Licensing Experience." },
        { title: "Pan-India Presence", desc: "Delivering State Food License Registration Services in 25+ States." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose VyomBiz for FSSAI State License?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Illuminate your FSSAI state food license registration journey with us.
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

const FssaiStateCompliance = () => {
    const compliance = [
        { title: "Food quality breaches", desc: "Fine of ₹2 Lakh (Petty manufacturer ₹25,000/-)" },
        { title: "Sub-standard food", desc: "Fine of ₹5 Lakh" },
        { title: "Misbranded Food", desc: "Fine of ₹3 Lakh" },
        { title: "Falsified advertisement or description", desc: "Fine of ₹10 Lakh" },
        { title: "Extraneous matter in food", desc: "Fine of ₹1 Lakh" },
        { title: "Non-corporation with Food Safety Officer", desc: "Fine of ₹2 Lakh" },
        { title: "Unhygienic processing or manufacture", desc: "Fine of ₹1 Lakh" }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Penalty for Not Complying with FSSAI's Norms
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        In general, the penalties for FBOs in India are pretty stringent. They are bound to face severe consequences in case of non-compliance.
                    </p>
                </div>
                <div>
                    {compliance.map((item, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{item.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const FssaiStateLicense = () => {
    const faqs = [
        {
            question: "Who is required to obtain an FSSAI State License?",
            answer: "Any Food Business Operator (FBO) with an annual turnover between ₹12 Lakhs and ₹20 Crores is mandatorily required to obtain an FSSAI State License. This also includes mid-sized manufacturers, storage units, and retailers operating within a single state."
        },
        {
            question: "How does a State License differ from a Central License?",
            answer: "FSSAI State Licenses are for businesses operating in only one state with turnover up to ₹20 Crores. Central Licenses are for those operating in multiple states, involved in import/export, or having an annual turnover exceeding ₹20 Crores."
        },
        {
            question: "How long does it take to obtain an FSSAI State License?",
            answer: "The general timeframe for obtaining an FSSAI State License is approximately 30 to 60 days, depending on the completeness of documents and the inspection process."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI State"
                heroTitleSuffix="License"
                heroSubtitle="Regulatory Compliance for Mid-Sized Food Businesses"
                heroDescription="Mid-sized food businesses operating within a single state must secure an FSSAI State License to comply with the FSS Act, 2006. We provide specialized support for documentation and on-site inspection readiness."
                whatsIncludedList={[
                    "State-Wise Eligibility Assessment",
                    "FoSCoS Online Portal Filing",
                    "FSMS Documentation Support",
                    "Machinery & Premises Layout Guidance",
                    "Inspection Readiness & Coordination",
                    "Annual Compliance Maintenance"
                ]}
                stats={[
                    { count: "15K+", label: "State Licenses", icon: <MapPin size={20} /> },
                    { count: "₹2000+", label: "Annual Fee", icon: <IndianRupee size={20} /> },
                    { count: "60 Days", label: "Avg. Timeline", icon: <ShieldCheck size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={<FssaiStateOverview />}
                advantages={<FssaiStateLicenseAdvantages />}
                eligibility={<FssaiStateEligibility />}
                documents={<FssaiStateDocuments />}
                process={<FssaiStateProcess />}
                features={<FssaiStateFeatures />}
                postCompliance={<FssaiStateCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiStateLicense;
