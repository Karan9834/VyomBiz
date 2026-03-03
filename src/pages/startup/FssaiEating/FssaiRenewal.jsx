import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Clock,
    AlertCircle
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FssaiRenewalOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Time-Sensitive
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            FSSAI Renewal- <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Running a food business in India? Have you renewed your FSSAI license yet? If not, you risk non-compliance, penalties, and even business suspension. FSSAI renewal is not just a formality, it’s a legal requirement that ensures your operations meet the standards set by the Food Safety and Standards Authority of India (FSSAI). Every Food Business Operator (FBO) must obtain and renew their FSSAI license within its validity period, which ranges from 1 to 5 years.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Many entrepreneurs focus on getting the initial license but forget the importance of timely FSSAI Renewal. Whether you’re in food manufacturing, processing, distribution, or packaging, operating with an expired license can damage your business reputation and lead to legal action. Timely FSSAI License Renewal not only keeps your business compliant but also assures your customers of your commitment to food safety and quality.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            <strong className="text-[#072b47]">What is FSSAI License?</strong><br />
                            The Food Safety and Standards Authority of India (FSSAI), established under the Food Safety and Standards Act, 2006, issues mandatory licenses to Food Business Operators (FBOs) to ensure food products meet safety and quality standards. This license is essential for legally operating a food business in India and building consumer trust.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80"
                            alt="FSSAI Renewal Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiRenewalAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of FSSAI Registration Renewal
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The list of benefits of FSSAI registration renewal is as follows:
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?auto=format&fit=crop&q=80"
                            alt="FSSAI Renewal Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Compliance of FBOs", desc: "Renewing your FSSAI certificate ensures that your food business remains legally compliant. It allows you to continue operations without interruptions and helps you avoid penalties or legal actions for non-compliance." },
                        { title: "Builds Consumer Trust", desc: "An up-to-date FSSAI license signals your commitment to food safety and quality. Customers are more likely to trust and choose businesses that maintain valid certifications and follow safety standards." },
                        { title: "Access to Latest Safety Standards", desc: "FSSAI Renewal keeps you informed about the latest food safety guidelines and regulatory changes. This helps you stay aligned with current standards and improve your operational practices." },
                        { title: "Reduces Safety Hazards and Risks", desc: "Timely FSSAI renewal minimizes the risk of food safety issues, such as contamination or foodborne illnesses. This ensures a safer environment for consumers and enhances your reputation in the market." },
                        { title: "Aligns with International Standards", desc: "FSSAI license renewal also helps in upgrading the hygiene and quality of food products, making it easier to meet international benchmarks and expand into global markets. It is one of the significant benefits of FSSAI registration renewal." }
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

const FssaiRenewalEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Types of FSSAI License Renewal
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Food Business Operators (FBOs) in India must ensure timely FSSAI License Renewal to continue operating legally. Depending on the scale and turnover, there are three main categories of FSSAI registration renewal:
                </p>
                <div className="mb-10">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-6">
                        <li>
                            <span className="font-semibold text-[#072b47]">Basic FSSAI License Renewal - </span>
                            This is required for small food businesses with an annual turnover of less than ₹12 lakhs. Petty retailers, small-scale manufacturers, and vendors fall under this category. You can easily renew FSSAI license online by submitting the necessary documents before the expiry date.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">State FSSAI License Renewal - </span>
                            Businesses with a turnover ranging between ₹12 lakhs and ₹20 crores must apply for State License Renewal. The cost and requirements vary depending on the business type and license validity. Opting for FSSAI renewal online simplifies the process and helps avoid late fees or penalties.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Central FSSAI License Renewal - </span>
                            Large-scale food businesses with a turnover of over ₹20 crores need to obtain a Central FSSAI License Renewal. This is also applicable to importers, food chains, and businesses operating across multiple states.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FssaiRenewalDocuments = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    What Documents are Required for FSSAI License Renewal?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Every food business operator is required to submit the requisite Documents to apply for the FSSAI License Renewal, as mentioned below:
                </p>

                <h3 className="text-2xl font-semibold text-[#072b47] mb-4 mt-8">For Basic Registration</h3>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed">
                        <li>Form A is expected to be submitted and signed by FBOs along with supporting documents.</li>
                        <li>Identity proof such as a PAN Card, Driving License, Voter ID Card, Passport, Aadhaar Card, or Senior Citizen Card.</li>
                        <li>Two passport-size photos of the applicant.</li>
                        <li>NOCs by Municipality or Panchayat, Health Department, etc., if any.</li>
                        <li>Rent Agreement, if any.</li>
                    </ul>
                </div>

                <h3 className="text-2xl font-semibold text-[#072b47] mb-4 mt-8">For State or Central FSSAI License</h3>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed">
                        <li>Duly completed and signed Form B.</li>
                        <li>Photo proof and address proof of Proprietor/ Partner/ Director(s)/ Authorized Signatory.</li>
                        <li>Layout plan of the food processing plant.</li>
                        <li>List of Directors with their full address and contact details.</li>
                        <li>ID and address proof of the above persons.</li>
                        <li>List of food categories (for manufacturers).</li>
                        <li>An authority letter nominated by the manufacturer to act on his behalf.</li>
                        <li>NOC from the municipality or any other local body.</li>
                        <li>Name and number of equipment as per installed capacity and horsepower for the manufacturing and processing unit.</li>
                        <li>Partnership deed or affidavit of proprietorship, and in case of a company, a copy of MOA and AOA.</li>
                        <li>Specify the source of the raw material of meat and the meat processing unit, and the source of milk and milk-related products, and the milk collection centre where applicable.</li>
                        <li>For the hotel industry, certificate provided by the Ministry of Tourism.</li>
                        <li>Pesticide residue report of water for the packaging of products like minerals, carbonated beverages, etc.</li>
                        <li>Certificate from the Ministry of Commerce for 100% EOU (in the case of a Central License).</li>
                        <li>Supporting documents as proof of turnover (in the case of a Central License).</li>
                        <li>The analysis report of water to be used in the food (in the case of a Central License).</li>
                        <li>Possession proof (Electricity bill, sale deed, etc.) (in the case of a Central License).</li>
                        <li>A cancelled cheque.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const FssaiRenewalProcess = () => {
    const steps = [
        { step: "01", title: "Login", desc: "Login to the official FSSAI website and select the appropriate option for license renewal." },
        { step: "02", title: "Application Form", desc: "Fill out the renewal application form by providing all the required details for the FSSAI renewal." },
        { step: "03", title: "Document Upload & Payment", desc: "Upload the necessary documents along with the application form and pay the applicable fees." },
        { step: "04", title: "Review & Inspection", desc: "Once submitted, the concerned FSSAI authority will review your application, conduct an inspection if required, and, upon satisfaction, approve the renewal of your FSSAI certificate." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        FSSAI Renewal Online Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The step-by-step FSSAI renewal online process is as mentioned below:
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="The Online Renewal Path"
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

const FssaiRenewalFeatures = () => {
    const features = [
        { title: "All-in-One Legal and Compliance Partner", desc: "VyomBiz offers a complete range of legal services, dealing in all types of licenses and taxation compliances. We work on behalf of our clients so they can focus on running their business." },
        { title: "Specialized Expertise in FSSAI Renewal", desc: "Our team of experts specializes in FSSAI License Renewal and related services, ensuring every step complies with the Food Safety and Standards Act, 2006." },
        { title: "Personalized Assistance Based on Your Business", desc: "We assist in the renewal process based on the nature and size of your business, ensuring you meet the exact requirements for your category." },
        { title: "Document Verification and Preparation", desc: "Our experts verify all requisite documents, including the category list, Form A, Form B, and NOC, before filing the renewal application." },
        { title: "End-to-End Online Process", desc: "From FSSAI renewal online application filing to submission, follow-up, and approval, we manage everything on your behalf without requiring you to visit government offices." },
        { title: "Regular Follow-Ups and Timely Updates", desc: "We coordinate with the concerned authorities and keep you updated at every stage so you know exactly where your application stands." },
        { title: "Avoid Penalties and Delays", desc: "We ensure your license is renewed before expiry to avoid the ₹100 per day penalty and any operational disruptions." },
        { title: "Proven Track Record of Success", desc: "With thousands of successful FSSAI registration renewals, our client satisfaction rate speaks for itself." },
        { title: "Dedicated Client Support", desc: "For any queries regarding FSSAI Renewal or related services, our experienced and trained professionals are just a call away." },
        { title: "Maximizing Benefits for Clients", desc: "We not only help you procure your renewed license but also ensure you can avail of all the benefits that come with it." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Reason to Trust VyomBiz for FSSAI Renewal Online
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Features of our services:
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

const FssaiRenewalCompliance = () => {
    const compliance = [
        "If the FSSAI renewal application is not filed within the stipulated period, the Food Business Operator (FBO) is charged a penalty of ₹100 per day.",
        "An FSSAI license is considered expired if it is not renewed on time.",
        "Timely renewal helps avoid penalties and unnecessary hassles.",
        "FBOs must apply for license renewal at least 30 days before the expiry date of the registration or license."
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Consequences of Non-Renewal of FSSAI Registration
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        The list of consequences of non-renewal of FSSAI registration is as follows:
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

const FssaiRenewal = () => {
    const faqs = [
        {
            question: "When should I apply for FSSAI license renewal?",
            answer: "FBOs must apply for FSSAI license renewal at least 30 days before the expiry date of the current registration or license to avoid late fees."
        },
        {
            question: "What is the penalty for late FSSAI renewal?",
            answer: "If the renewal application is not filed on time, a penalty of ₹100 per day is charged. If it's not renewed even after expiry, the license is considered void, and the business must apply for a fresh license."
        },
        {
            question: "Can I renew my FSSAI license online?",
            answer: "Yes, the entire renewal process is now online through the FoSCoS portal. You can log in, upload documents, and pay the fees electronically."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI License"
                heroTitleSuffix="Renewal"
                heroSubtitle="Ensure Uninterrupted Food Business Operations"
                heroDescription="Don't let an expired license halt your business. Timely FSSAI renewal is a legal requirement that keeps your operations compliant and builds customer trust in your commitment to quality."
                whatsIncludedList={[
                    "Renewal Eligibility Check",
                    "Document Verification & Preparation",
                    "FoSCoS Portal Online Filing",
                    "Penalty & Hassle-Free Process",
                    "Timely Renewal Reminders",
                    "Expert Legal Consultation"
                ]}
                stats={[
                    { count: "25K+", label: "Renewals Done", icon: <Clock size={20} /> },
                    { count: "₹100/day", label: "Late Fine", icon: <AlertCircle size={20} /> },
                    { count: "100%", label: "Compliance", icon: <ShieldCheck size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={<FssaiRenewalOverview />}
                advantages={<FssaiRenewalAdvantages />}
                eligibility={<FssaiRenewalEligibility />}
                documents={<FssaiRenewalDocuments />}
                process={<FssaiRenewalProcess />}
                features={<FssaiRenewalFeatures />}
                postCompliance={<FssaiRenewalCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiRenewal;
