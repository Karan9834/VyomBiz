import React from "react";
import { FileText, CheckCircle, Shield, UserCheck, CheckCircle2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const DesignRegistrationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Aesthetic Protection
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Design Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Design registration is a legal process that provides intellectual property rights protection to the aesthetic aspect of a product’s design. It provides exclusive rights for 10 years, further extended for a limited period of 5 years through renewal.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The registration and protection of industrial designs in India are governed by the Designs Act, 2000, and the Designs Rules, 2001. These laws help protect the new and original features of a design, such as shape, configuration, surface, pattern, ornaments, and composition of lines or colours that apply to articles in a finished state.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Are you confused about the design registration process? Consult VyomBiz IP professionals and save your time and efforts like thousands of business owners did with us.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is a Design Mark?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A design mark is a type of intellectual property right defined under section 2 (d) of the Designs Act, 2000. It includes a shape, pattern, configuration, composition, or ornament of line, or colours that are applied either to a two-dimensional or three-dimensional article.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
                            alt="Design Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const DesignRegistrationEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Checklist: Who Needs to Register a Design?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    The Design Act, 2000, outlines the following essential persons who must meet the criteria to register:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        An Author
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        An author of the design.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Original Proprietor
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        The original proprietor of the design.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Exclusive Assignee
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        An exclusive assignee of the proprietor.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Agent or Legal Representative
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        An agent or legal representative of the NRI proprietor.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Other Persons
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Any other person, including a firm, partnership, or body corporate.
                    </p>
                </div>
            </div>
        </section>
    );
};

const DesignRegistrationDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Needed for Design Registration in India
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The list of documents needed for obtaining a design registration in India is as discussed below:
                </p>
                <div className="space-y-4">
                    {[
                        "Form 1 under Schedule II of the Design Rules",
                        "Representations prepared as prescribed under Rules 12, 13, and 14 of the Design Rules, 2001",
                        "Form-21, i.e., Power of authority/ general power of authority (under Schedule II)",
                        "Form-24 in the prescribed format (if small entity status is claimed)",
                        "MSME Registration certificate (in the case of Indian entities)",
                        "Affidavit deposed by the applicant or authorized signatory under Rule 42 of the Design Rules",
                        "Original priority document under Rule 15 of the Design Rules, 2001",
                        "Authenticated English translated copy of priority documents",
                        "Assignment in the original (if the applicant of the priority application in the convention country is different from the Indian applicant)",
                        "Any other priority documents"
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

const DesignRegistrationProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Procedure to Register Design Rights
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        A systematic approach to protecting your design in India, as discussed below:
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1350&q=80"
                            alt="Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {[
                            { title: "Conduct a Design Search", desc: "The first step requires the applicant to conduct a design mark search, which helps avoid potential conflicts and reduces the risk of rejection." },
                            { title: "Filing of Design Application", desc: "The next step requires the applicant to prepare and file a design application, providing necessary documentation, such as drawings or photographs of the design and other required information." },
                            { title: "Conduct Substantive Examination", desc: "Once the application is duly submitted, the Controller of Designs, the Patent Office, must refer the application for a substantive examination under the Examiner of Designs." },
                            { title: "Consideration of Report", desc: "After the examination, the Controller of Designs considers the Examiner's report to determine if the design qualifies for registration. If found eligible, the design is registered immediately, and the registration certificate is issued and sent to the applicant without delay." },
                            { title: "Registration and Publication of Design", desc: "Within 1 month of the registration of the application, it must be published in the Patent Office Journal, allowing the public to view and raise potential opposition (if any)." },
                            { title: "Issuance of Design Registration Certificate", desc: "In case no objections are raised, the Controller of Design is authorized to issue the design registration certificate to the proprietor of the design. However, it remains valid for a period of 10 years." }
                        ].map((step, idx) => (
                            <div key={idx} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {idx + 1}.
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

const DesignRegistrationFeaturesSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        How VyomBiz Helps in Online Design Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert support.
                    </p>
                </div>
                <div>
                    {[
                        { title: "5000+ Designs Registered", desc: "VyomBiz has helped creators and businesses secure exclusive rights by successfully registering 5000+ innovative designs in India." },
                        { title: "Expert Consultation", desc: "Our team at VyomBiz offers 24/7 expert advice and consultation throughout the design registration process." },
                        { title: "Documentation Support", desc: "VyomBiz is a leading platform that assists in the preparation and submission of all necessary documents, ensuring accuracy and completeness." },
                        { title: "Expert Liaison with Authorities", desc: "VyomBiz serves as a trusted link between businesses and relevant government authorities, ensuring smooth communication and hassle-free submission of your application." },
                        { title: "Customized Solutions", desc: "At VyomBiz, we offer customized solutions that help streamline the registration process, making it smoother and more efficient in less time." },
                        { title: "Cost-Effective Package", desc: "We offer a cost-effective package including a 30-minute expert consultation, government fee estimation, and guidance on maintaining rights after design registration." },
                        { title: "Legal Support", desc: "We at VyomBiz ensure to provide legal support and representation to defend in case the applicants face any opposition." },
                        { title: "Post-Registration Support", desc: "Our representatives at VyomBiz offer post-registration support, which helps protect and enforce your design rights in the long term." },
                        { title: "PAN India Services", desc: "Our team at VyomBiz provides PAN India support for design registration, assisting clients across 100+ cities with design searches and application filing." }
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

const DesignRegistration = () => {

    const faqs = [
        {
            question: "What is an example of a registered design?",
            answer: "1. The unique ergonomic shape and overall visual design of the Starbucks cup. 2. The aerodynamic exterior, smooth lines, and minimalist futuristic cabin interior of Tesla Model S electric cars. 3. The iconic shape of Coca-Cola bottles. 4. The sleek and distinctive appearance and design of iPhone, iPad, and MacBook. 5. The registered designs of vehicles like the Tata Nano and the Tata Ace prevent competitors from copying their appearance."
        },
        {
            question: "When can a design registration be cancelled?",
            answer: "1. If the design is unoriginal or a replica of already existing designs. 2. If the design has already been registered in India. 3. If the design has already been published in another country before the date of registration. 4. If it does not comply with the characteristics of a design, as mentioned under the Designs Act, 2000."
        }
    ];

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Design Protection
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Design Mark Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The design mark registration offers strategic advantages to both businesses and individual creators intending to reinforce their legal rights in the competitive market.
                    </p>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80"
                            alt="Design Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        { title: "Exclusive Rights", desc: "Design mark registration provides exclusive rights to use the design, maintain a competitive advantage, and prevent others from manufacturing, selling, or importing products with a similar design." },
                        { title: "Increases Commercial Value", desc: "Design mark registration increases the commercial value of your products or articles, making them exclusive to the owner. However, this exclusivity boosts sales, attracts investors, and creates a strong competitive edge in the market." },
                        { title: "Promotes Innovation", desc: "Since uniqueness is the key creation for design registration, it encourages creators to develop original, eye-catching products, which ultimately boosts healthy competition within the industry." },
                        { title: "Enhances Credibility", desc: "Design mark registration enhances the credibility of your products, making them more appealing to investors in the international market. It also offers broader protection and access to new growth opportunities in any of the WTO member countries." },
                        { title: "Legal Protection", desc: "Design mark registration provides exclusive rights over your designs, offering legal protection against copying, reproducing, selling, or distributing products similar to the original one." },
                        { title: "Extended Protection Period", desc: "Design mark registration, offering initial protection of 10 years, which can be renewed for another 5 years, provides an extended protection period, allowing businesses to plan for their long-term use and profitability." }
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
                heroTitleMain="Design Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Protect Your Unique Aesthetic Creations"
                heroDescription="Secure exclusive rights to your product's visual design."
                whatsIncludedList={[
                    "Design Search & Verification",
                    "Application Filing Support",
                    "Response to Objections",
                    "Certificate Issuance"
                ]}
                stats={[
                    { count: "5000+", label: "Designs Registered", icon: <Shield size={20} /> },
                    { count: "10 Years", label: "Initial Protection", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <UserCheck size={20} /> }
                ]}
            />

            <DetailsLayout
                overview={<DesignRegistrationOverview />}
                advantages={advantagesContent}
                eligibility={<DesignRegistrationEligibility />}
                documents={<DesignRegistrationDocumentsSection />}
                process={<DesignRegistrationProcessSection />}
                features={<DesignRegistrationFeaturesSection />}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Design Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default DesignRegistration;
