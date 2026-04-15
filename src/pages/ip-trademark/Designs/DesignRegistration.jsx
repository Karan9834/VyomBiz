import React from "react";
import { FileText, CheckCircle, Shield, UserCheck, CheckCircle2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/IP & Trademark/Designs/Design Registration/benefits.png";
import overview from "../../../assets/IP & Trademark/Designs/Design Registration/overview.jpeg";
import process from "../../../assets/IP & Trademark/Designs/Design Registration/process.png";

const DesignRegistrationOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Protection of Product Aesthetics
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Overview of <span className="text-yellow-400">Design Registration in India</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Design registration is a legal process that grants intellectual property protection to the visual or aesthetic features of a product. Once registered, the design is protected for an initial period of 10 years and can be extended for an additional 5 years through renewal.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            In India, industrial designs are protected under the Designs Act, 2000 and the Designs Rules, 2001. These laws safeguard new and original design features such as shape, configuration, pattern, ornamentation, or composition of lines and colours applied to finished articles.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            If you are unsure about the design registration process, consult Vyombiz intellectual property experts who assist businesses in securing design protection efficiently.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is an Industrial Design?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            An industrial design refers to the visual features of shape, configuration, pattern, ornament, or composition of lines or colours applied to a two-dimensional or three-dimensional article as defined under Section 2(d) of the Designs Act, 2000.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Can Apply for Design Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    The Design Act, 2000, outlines the following essential persons who must meet the criteria to register:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Design Author
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        The individual who originally created the design.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Original Owner
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        The person or entity that owns the rights to the design.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Assignee of the Design
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        A person or entity who has obtained design rights through assignment.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Legal Representative
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        An agent or legal representative acting on behalf of the design owner.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Businesses or Organizations
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Companies, firms, partnerships, or corporate bodies can also apply for design registration.
                    </p>
                </div>
            </div>
        </section>
    );
};

const DesignRegistrationDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Design Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The list of documents needed for obtaining a design registration in India is as discussed below:
                </p>
                <div className="space-y-4">
                    {[
                        { title: "Design Application Form", desc: "Form 1 as prescribed under the Design Rules." },
                        { title: "Design Representations", desc: "Clear drawings or photographs of the design as required under the Design Rules." },
                        { title: "Power of Attorney", desc: "Authorization document if the application is filed through an agent." },
                        { title: "Small Entity Declaration", desc: "Applicable if the applicant claims small entity status." },
                        { title: "MSME Certificate", desc: "Required if the applicant is registered as a micro or small enterprise." },
                        { title: "Applicant Affidavit", desc: "Declaration submitted by the applicant or authorized signatory." },
                        { title: "Priority Claim Documents", desc: "Documents required when claiming priority from an earlier foreign application." }
                    ].map((doc, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                <span className="font-bold text-[#072b47]">{doc.title}:</span> {doc.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const DesignRegistrationProcessSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Design Registration Process in India
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        A systematic approach to protecting your design in India, as discussed below:
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {[
                            { title: "Design Availability Search", desc: "Search existing registered designs to avoid conflicts." },
                            { title: "Filing the Design Application", desc: "Submit the design application along with required documents and design representations." },
                            { title: "Examination by Design Office", desc: "The application is examined by the Controller of Designs at the Patent Office." },
                            { title: "Examination Report Review", desc: "The authority reviews the examination report to determine eligibility for registration." },
                            { title: "Registration and Publication", desc: "If approved, the design is registered and published in the official journal." },
                            { title: "Design Registration Certificate", desc: "The registration certificate is issued to the design owner." }
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
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        How Vyombiz Assists in Design Registration
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert support.
                    </p>
                </div>
                <div>
                    {[
                        { title: "Proven Experience", desc: "Vyombiz has assisted businesses and creators in registering thousands of designs across industries." },
                        { title: "Expert Consultation", desc: "Professional guidance from intellectual property experts." },
                        { title: "Document Preparation", desc: "Assistance in preparing and submitting all required documents accurately." },
                        { title: "Government Liaison", desc: "Handling communication with the relevant authorities during the application process." },
                        { title: "Tailored Registration Services", desc: "Customized solutions designed to simplify the design registration process." },
                        { title: "Affordable Service Packages", desc: "Transparent and cost-effective packages for design registration." },
                        { title: "Legal Assistance", desc: "Support in handling objections or legal issues related to design protection." },
                        { title: "Post-Registration Support", desc: "Assistance with renewals, enforcement, and maintaining design rights." },
                        { title: "PAN-India Support", desc: "Design registration services available across India." }
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
            question: "What are examples of registered designs?",
            answer: "Examples of registered designs include the distinctive bottle shape of CocaCola, the ergonomic design of the Starbucks coffee cup, the sleek design of iPhone devices by Apple, and the exterior design of vehicles such as the Tesla Model S and Tata Nano. Registered designs prevent competitors from copying the visual appearance of these products."
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Design Protection
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Design Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The design mark registration offers strategic advantages to both businesses and individual creators intending to reinforce their legal rights in the competitive market.
                    </p>

                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Design Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        { title: "Exclusive Design Rights", desc: "Registration grants the owner exclusive rights to use the design and prevent others from manufacturing, selling, or importing products with a similar appearance." },
                        { title: "Higher Commercial Value", desc: "Registered designs increase product value, attract investors, and create a competitive advantage in the market." },
                        { title: "Encourages Innovation", desc: "Design protection motivates creators and businesses to develop unique and attractive product designs." },
                        { title: "Improves Brand Credibility", desc: "Registered designs enhance brand reputation and increase confidence among customers and investors." },
                        { title: "Legal Protection Against Copying", desc: "Provides legal remedies against unauthorized copying, imitation, or sale of similar designs." },
                        { title: "Extended Protection Period", desc: "Design protection initially lasts for 10 years and can be extended for an additional 5 years." }
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
                heroTitleSuffix="Services in India"
                heroSubtitle="Protect Your Unique Aesthetic Creations"
                heroDescription="Protect the unique visual appearance of your product with exclusive design rights."
                whatsIncludedList={[
                    "Design Search & Verification",
                    "Application Filing Support",
                    "Response to Objections",
                    "Certificate Issuance"
                ]}
                stats={[
                    { count: "5000+", label: "Designs Successfully Registered", icon: <Shield size={20} /> },
                    { count: "10-Year", label: "Initial Design Protection", icon: <CheckCircle size={20} /> },
                    { count: "Professional", label: "Design Consultation", icon: <UserCheck size={20} /> }
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

