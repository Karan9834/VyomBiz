import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Globe,
    Zap
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const CentralFssaiOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            National Level
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            FSSAI Central License – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            FSSAI is a leading government agency that works for the well-being of the masses by implementing relevant food safety norms. Its ultimate objective is to formulate various guidelines and norms to incentivise food safety awareness in India. FSSAI formulates food safety norms and guidelines in view of the Food Safety and Standard Act, 2006.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            FSSAI Central License is obtained by an FBO (Food Business Operator) with a turnover of more than Rs. 20 Crores or those involved in exporting and importing food products in India.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            <strong className="text-[#072b47]">Fundamental Duties of FSSAI</strong><br />
                            Formulating Guidelines for food safety, launching nationwide initiatives to create awareness, granting mandatory food licenses, facilitating recommendations to GOI in outlining new policies, and taking legal actions against food businesses involved in illicit practices like food adulteration.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?auto=format&fit=crop&q=80"
                            alt="Central FSSAI License Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CentralFssaiAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Key Benefits
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of getting an FSSAI Central License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Following are the advantages of obtaining an FSSAI Central License:
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                            alt="Central FSSAI Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Worldwide Identity", desc: "The FSSAI License helps to establish a reputation all over the world. It creates the brand name of the business at a global level." },
                        { title: "Business Expansion", desc: "With an FSSAI Central License, extending the food business to any new location and opening new outlets is easy. It even makes it easier to get a loan or other funding." },
                        { title: "Legal Advantage", desc: "FSSAI License gives a sense of security and legal right to all those who are involved in the food business. It acts as evidence that the food quality has not been compromised." },
                        { title: "Consumer Awareness", desc: "Consumers are more alert about the quality of their food nowadays. The food with FSSAI License gives the businesses an advantage in a rapidly increasing consumer base." }
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

const CentralFssaiEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Essential Criteria & Businesses that Require it
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    FSSAI Central License is legal consent granted to the food businesses which have:
                </p>
                <div className="mb-10">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-6">
                        <li>Annual turnover of more than <span className="font-semibold text-[#072b47]">Rs 20 crores</span>.</li>
                        <li>Various units running in <span className="font-semibold text-[#072b47]">multiple states</span>.</li>
                        <li>Business of <span className="font-semibold text-[#072b47]">import/export</span> of food items.</li>
                        <li>Selling food items on their own <span className="font-semibold text-[#072b47]">E-Commerce</span> website (like Amazon, Flipkart, Zomato, Swiggy).</li>
                        <li>Establishing Business of <span className="font-semibold text-[#072b47]">Nutraceutical and Health Supplement</span>.</li>
                        <li>Running hotels with <span className="font-semibold text-[#072b47]">5-star or 7-stars</span>.</li>
                        <li>Transporting Business with <span className="font-semibold text-[#072b47]">more than 100 vehicles</span>.</li>
                        <li>Other specific high-capacity productions like <span className="font-semibold text-[#072b47]">dairy (&gt;50k litres/day)</span> or <span className="font-semibold text-[#072b47]">meat processing</span>.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const CentralFssaiDocuments = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required to Secure License
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Following is the listicle of fundamental Documents required to be submitted at the time of application:
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed grid sm:grid-cols-2 gap-x-6">
                        <li>Form B (duly filled and signed by the applicant)</li>
                        <li>Floor plan of the production or processing facility</li>
                        <li>Complete list of key management personnel (for companies)</li>
                        <li>Copy of MOA, AOA & COI (if applicable)</li>
                        <li>List of partners & partnership deed (if partnership)</li>
                        <li>Utility bills of the business place for address proof</li>
                        <li>Food Safety Management Plan (FSMS) or identical protocol</li>
                        <li>Name & the list of machines present at the plant</li>
                        <li>List of active raw material suppliers</li>
                        <li>Concerned local authorities no objection certificate</li>
                        <li>Tourism certificate (if the license seeker is a hotel owner)</li>
                        <li>IEC certificate accorded by DGFT (for exports)</li>
                        <li>Import Export Code &amp; Declaration (turnover &gt; Rs. 20 crores)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const CentralFssaiProcess = () => {
    const steps = [
        { step: "01", title: "Application Filing Via Form B", desc: "First, the license seeker is required to file Form B with the licensing Authority. The applicant must keep basic turnover criteria in mind." },
        { step: "02", title: "Applicant Scrutiny by FSSAI Officials", desc: "Once submitted, the Application accompanied by requested Documents will be sent to the concerned officials for in-depth scrutiny." },
        { step: "03", title: "On-Site Inspection", desc: "The FSSAI will send designated officials to the business place to determine the level of compliance. Non-conformity could increase cancellation chances." },
        { step: "04", title: "Approval & Grant", desc: "Once the licensing Authority approves the Application, the certificate will be issued. Displaying the Certificate at The Business Place Is a Legal Mandate." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure to Obtain FSSAI Central License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Step-by-Step processes for Securing Central FSSAI License:
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="The Central Process"
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

const CentralFssaiFeatures = () => {
    const features = [
        { title: "Class-Leading Licensing Platform", desc: "VyomBiz offers a comprehensive portfolio of services, including all types of food licenses." },
        { title: "Simplified Process", desc: "Professionals at this platform simplify the licensing process via seamless paper handling." },
        { title: "Unprecedented Professionalism", desc: "Rely on expert guidance to smoothly navigate complex regulatory compliances." },
        { title: "Complete Transparency", desc: "VyomBiz allows its esteemed clients to keep a constant tab on the Application's progress." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Secure FSSAI Central License with VyomBiz
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Secure your license in a Hassle-free way.
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

const CentralFssaiCompliance = () => {
    const compliance = [
        { title: "Validity Period", desc: "The Central FSSAI license comes with a flexible validity duration ranging from 1-5 years. The cost increases in accordance with the validity period." },
        { title: "Renewal Timeline", desc: "The FSSAI Central License should be renewed before the 30 days of the expiration date, or else penalties would be levied." },
        { title: "Renewal Process", desc: "The renewal process is as simple as applying for a new one. Provide Passport Photo, ID Proof, PAN, Address proof, and proof of ownership/rental agreement." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Validity and Renewal
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Crucial information to maintain your Central FSSAI License.
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

const CentralFssaiLicense = () => {
    const faqs = [
        {
            question: "Who needs a Central FSSAI License?",
            answer: "A Central FSSAI License is mandatory for Food Business Operators (FBOs) with an annual turnover exceeding ₹20 Crores. It is also required for importers, exporters, e-commerce food platforms, and businesses operating in central government agencies like airports or railways."
        },
        {
            question: "What is the validity of a Central FSSAI License?",
            answer: "The license comes with a flexible validity duration ranging from 1 to 5 years. The cost varies depending on the number of years selected."
        },
        {
            question: "When should I renew my Central FSSAI License?",
            answer: "The Central FSSAI License must be renewed at least 30 days before the expiration date to avoid late fees and ensure continuous legal operation."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Central FSSAI"
                heroTitleSuffix="License"
                heroSubtitle="Regulatory Excellence for Large-Scale Food Enterprises"
                heroDescription="Drive your global food business with a Central FSSAI License. Mandatory for large-scale manufacturers, importers, and e-commerce giants, this license is your gateway to nationwide operations and international trade."
                whatsIncludedList={[
                    "Central Authority Liaisoning",
                    "Import/Export Compliance (IEC)",
                    "FoSCoS Central Application Filing",
                    "Audited FSMS Plan Support",
                    "Multi-State Operation Guidance",
                    "Global Safety Standard Assessment"
                ]}
                stats={[
                    { count: "5000+", label: "Central Licenses", icon: <Globe size={20} /> },
                    { count: "₹20Cr+", label: "Turnover Entry", icon: <Zap size={20} /> },
                    { count: "3 Days", label: "Docs Ready", icon: <FileText size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={<CentralFssaiOverview />}
                advantages={<CentralFssaiAdvantages />}
                eligibility={<CentralFssaiEligibility />}
                documents={<CentralFssaiDocuments />}
                process={<CentralFssaiProcess />}
                features={<CentralFssaiFeatures />}
                postCompliance={<CentralFssaiCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default CentralFssaiLicense;
