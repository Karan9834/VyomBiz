import React from "react";
import { MapPin, CheckCircle, Shield, UserCheck } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const GIRegistrationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Geographical Indication
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Registration of Geographical Indication – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Have You Heard About the Registration of Geographical Indication? The Registration of Geographical Indication is a legal process that protects products originating from a specific geographical region and possessing unique qualities, reputation, or characteristics linked to that origin.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Governed by the Geographical Indications of Goods (Registration and Protection) Act 1999, this registration ensures exclusive rights for authorized users and prevents unauthorized use of the registered product name. It also supports the local economy by promoting goods specific to the region and preserving traditional knowledge.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A registered GI shall be valid for 10 years. At VyomBiz, we assist in obtaining GI registration, helping producers safeguard their rights and enhance the market value of their region-specific products.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is Geographical Indication?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A Geographical Indication (GI) is a name or sign used on products that originate from a specific geographical location and have qualities, characteristics, or a reputation that are directly linked to that place of origin. The Government of India Registry for GI registration serves two main purposes: it protects against counterfeiting and misleading trade practices, and it strikes a balance between trademark protection and GI protection.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1596422846543-74c6fb713a07?auto=format&fit=crop&q=80"
                            alt="Geographical Indication Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const GIRegistrationEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who can Apply for Registration of Geographical Indication?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Any association of persons, producers, organizations, or authority established by or under the law can apply for the registration of geographical indication:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Representing Interest
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        The applicant must represent the interests of the producers.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Written Format
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        The application should be in writing in the prescribed form.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Addressed to Registrar
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        The application should be addressed to the Registrar of the Geographical Indications along with the prescribed fee.
                    </p>
                </div>

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mt-16 mb-6">
                    List of Non-Registrable Registration of GI
                </h2>
                <div className="space-y-4">
                    {[
                        "Geographical indications that are likely to deceive or confuse consumers in the market.",
                        "Those geographical indications that are contrary to law and violate the existing relevant law.",
                        "In case the geographical indications contain offensive or scandalous content.",
                        "Geographical indications that could offend religious or cultural sentiments.",
                        "Those indications that have become a generic term or no longer represent their actual geographical origin.",
                        "A false representation of the geographical indication, claiming that goods are from a different place, mislead the consumers even if such goods are made there."
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#e11d48] mt-2 shrink-0"></div>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const GIRegistrationDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Registration of GI
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The list of documents required for registration of GI are as follows:
                </p>
                <div className="space-y-4">
                    {[
                        "Application for registration in the prescribed form.",
                        "Statement of case.",
                        "Details of the product, including its unique features, method of production, and the link between the product and its geographical origin.",
                        "Evidence to establish the link between the product and its geographical origin, such as maps, photographs, and historical records.",
                        "Authorization letter if the application is filed by an agent.",
                        "Power of attorney if the application is filed by a legal representative.",
                        "Certified copy of the priority document, if applicable."
                    ].map((doc, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">{doc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const GIRegistrationProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Registration of Geographical Indication Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The step-by-step registration of geographical indication process is as follows:
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                            alt="Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {[
                            { title: "Check the Eligibility Criteria", desc: "First and foremost, the applicant must check and determine if the geographical indication fulfils the criteria as per Section 2(1)(e) of the Act." },
                            { title: "Filing of an Application", desc: "Followed by filing an appropriate application with the concerned authority by the association representing the interest of the producers." },
                            { title: "Submission of Documents", desc: "Along with the application, you must annexe all necessary documents like copies of applications, statement of case, and product special features." },
                            { title: "Preliminary Scrutiny and Examination", desc: "The Geographical Indications Registry evaluates and scrutinizes the application to determine any deficiencies or errors." },
                            { title: "Show Cause Notice", desc: "If the Registrar has an objection, a show cause notice is served, which has to be responded to by the applicant within two months." },
                            { title: "Publication in the Journals", desc: "Once accepted, the application is published in the official Geographical Indications Journal within three months." },
                            { title: "Opposition to Registration", desc: "Any person can file an opposition within three months of the journal publication. The applicant must submit a counterstatement." },
                            { title: "Issuance of GI Registration Certificate", desc: "If no opposition is raised or is dismissed, the Registrar issues and grants the GI registration certificate." }
                        ].map((step, idx) => (
                            <div key={idx} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    Step {idx + 1}.
                                </div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                        {step.desc}
                                    </p>
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

const GIRegistrationFeaturesSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Opt for VyomBiz for Registration of Geographical Indication?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert support.
                    </p>
                </div>
                <div>
                    {[
                        { title: "12+ Years of Proven Success Record", desc: "We have 12+ years of strong track record of successful GI registrations, reflecting our reliability and commitment to quality outcomes." },
                        { title: "Comprehensive GI Registration & Protection Services", desc: "We offer an all-in-one solution for the Registration of Geographical Indication and related IP protection." },
                        { title: "Expert Legal & IP Team", desc: "Our team of seasoned legal experts and IP professionals ensures complete compliance with Indian GI regulations and procedures." },
                        { title: "Transparent & Affordable Pricing", desc: "VyomBiz offers clear, budget-friendly pricing with no hidden charges, ensuring complete transparency at every step." },
                        { title: "Client-Centric Approach", desc: "We understand the unique value of your product and provide tailored assistance throughout the GI registration process." },
                        { title: "24/7 Expert Assistance", desc: "Connect with us anytime via phone, email, or WhatsApp — our team is available round-the-clock." },
                        { title: "Error-Free Documentation", desc: "Our professionals meticulously prepare all documents to minimize the chances of objections or delays." },
                        { title: "In-Depth Legal Knowledge", desc: "We possess strong domain expertise in the Geographical Indications law and related legal frameworks." },
                        { title: "Coordination with GI Registry", desc: "We manage end-to-end liaison with the GI Registry and other relevant authorities for a smooth journey." }
                    ].map((feature, idx) => (
                        <div key={idx} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                {idx + 1}.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    {feature.title}
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const RegistrationOFGeographicalIndication = () => {

    const faqs = [
        {
            question: "Who is a producer in relation to a geographical indication?",
            answer: "A person dealing with agricultural goods, including production, processing, trading, or dealing. A person dealing with natural goods, such as exploiting, trading, or dealing. A person dealing with handicrafts or industrial goods, such as making, manufacturing, trading, or dealing."
        },
        {
            question: "Who can initiate an infringement action?",
            answer: "The authorized users and the registered proprietors or associations can initiate an infringement action."
        },
        {
            question: "What is the validity of a Geographic Indication registration?",
            answer: "A registered GI shall be valid for 10 years, and can be renewed thereafter."
        },
        {
            question: "Can a registered Geographical Indication be assigned or transmitted?",
            answer: "No, a geographical indication is a public property belonging to the producers of the concerned goods, and it cannot be licensed, assigned, or transmitted."
        }
    ];

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Product Origin
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Registration of GI
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Online registration of geographical indication comprises legal protection against unauthorized use, boosting exports, and encouraging economic prosperity for producers.
                    </p>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
                            alt="GI Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        { title: "Branding", desc: "A unique geographical location product origin becomes a brand in itself, acting as a marketing tactic. It also helps in eliminating intermediaries, leading to higher profits for producers." },
                        { title: "Proof of Product Quality", desc: "A product with a GI tag facilitates a guarantee of premium quality backed by the history of origin location and recognized by the national government, leading to increased possible income." },
                        { title: "Authenticity", desc: "The product with a GI tag safeguards the genuine products from potential copycats in the market, protecting the essence of centuries of practice." },
                        { title: "Cultural Protection", desc: "The GI tag products are rooted in the heritage and craft of the place of their origin. It helps preserve and protect the traditional method of production and local culture." },
                        { title: "Increase in tourism", desc: "The GI tag also increases tourism across the globe since there is a connection between the global reputation gained based on the increasing global demand for such products." },
                        { title: "Economic Boost", desc: "The product with the GI tag has a higher economic value than any other regular product in the market due to its guarantee and quality from the geographical origin." }
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

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            <HeroLayout
                heroTitleMain="Geographical Indication"
                heroTitleSuffix="Registration"
                heroSubtitle="Protect Your Rural Traditions & Origin"
                heroDescription="Ensure exclusivity and protect the identity of region-specific products for 10 years."
                whatsIncludedList={[
                    "Preliminary Scrutiny & Expert Consultation",
                    "Application Drafting & Filing",
                    "Show Cause Notice Handling",
                    "Registration Certificate Issuance"
                ]}
                stats={[
                    { count: "10 Years", label: "Validity Period", icon: <Shield size={20} /> },
                    { count: "600+", label: "GIs Registered in India", icon: <MapPin size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <UserCheck size={20} /> }
                ]}
            />

            <DetailsLayout
                overview={<GIRegistrationOverview />}
                advantages={advantagesContent}
                eligibility={<GIRegistrationEligibility />}
                documents={<GIRegistrationDocumentsSection />}
                process={<GIRegistrationProcessSection />}
                features={<GIRegistrationFeaturesSection />}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about GI Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default RegistrationOFGeographicalIndication;
