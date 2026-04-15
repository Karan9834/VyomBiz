import React from "react";
import { FileText, CheckCircle, Shield, UserCheck, CheckCircle2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/IP & Trademark/Patent/patent-registration/benefits.png";
import overview from "../../../assets/IP & Trademark/Patent/patent-registration/overview.jpg";
import process from "../../../assets/IP & Trademark/Patent/patent-registration/process.jpg";

const PatentRegistrationOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Protection of Intellectual Property
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Overview of <span className="text-yellow-400">Patent Registration in India</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Patent registration in India grants inventors' exclusive rights, preventing others from making, using, or selling their inventions without authorization or permission. The procedure for registration of a patent begins with a patent search to determine whether the invention is new and innovative. After this, an application containing detailed technical specifications is filed with the Indian Patent Office.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            After examination and publication, and if no objections or oppositions arise, the patent is granted by the authority. In India, a patent remains valid for 20 years from the date of filing. Patent registration protects innovative ideas and allows inventors to benefit commercially from their inventions.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            With years of experience in intellectual property services, VyomBiz assists innovators in securing patent registration smoothly and efficiently.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Patent Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const PatentRegistrationEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Can Apply for Patent Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To meet the eligibility criteria for patent registration in India, you must fulfil the below-mentioned conditions:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Innovative Products
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Unique and innovative products such as machines, gadgets, or chemical inventions may qualify for patent protection.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Innovative Processes
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        New manufacturing or technical processes can also be patented.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Mechanical Inventions
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Machines with unique mechanisms or technological improvements can be protected under patent law.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Chemical Innovations
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        New chemical compounds, pharmaceutical products, and formulations can qualify for patent protection.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Biotech and Software Innovations
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Certain biotechnology inventions and software-based technologies may also qualify for patents.
                    </p>
                </div>
            </div>
        </section>
    );
};

const PatentRegistrationDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Patent Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Here is a list of documents required for patent registration process, which an applicant must submit at the time of applying. These documents include:
                </p>
                <div className="space-y-4">
                    {[
                        { title: "Identity and Address Proof", desc: "Documents verifying the identity and address of the inventor and applicant." },
                        { title: "Applicant Details and Declaration", desc: "Information about the applicant and declaration regarding prior patent filings." },
                        { title: "Patent Specification", desc: "Detailed description of the invention in provisional or complete specification format." },
                        { title: "Section 8 Statement and Undertaking", desc: "Details of foreign patent applications and related filings." },
                        { title: "Inventor Declaration", desc: "Official declaration confirming the inventors involved in the invention." },
                        { title: "Technical Details of the Invention", desc: "Includes background, invention summary, and working description." },
                        { title: "Examination Request", desc: "Formal request for examination and publication of the patent application." },
                        { title: "Power of Attorney", desc: "Required when the application is filed through a patent agent." },
                        { title: "Priority Documents", desc: "Required for convention applications or PCT national phase filings." }
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

const PatentRegistrationProcessSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Patent Registration Process in India
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The step-by-step procedure for registration of patent online involves different steps.
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
                            { title: "Patent Search", desc: "A detailed search is conducted to ensure that the invention is new and not already patented." },
                            { title: "Draft the Patent Application", desc: "A detailed patent application is prepared including claims, descriptions, and drawings." },
                            { title: "File the Patent Application", desc: "The application is submitted to the patent office along with the prescribed fees." },
                            { title: "Request Examination", desc: "A request is submitted to initiate the formal examination of the patent application." },
                            { title: "Respond to Examination Report", desc: "Applicants must respond to any objections or queries raised by the patent examiner." },
                            { title: "Patent Grant", desc: "If the application meets all requirements, the patent is granted and published in the official journal." }
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

const PatentRegistrationFeaturesSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        How VyomBiz Assists with Patent Registration
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert support.
                    </p>
                </div>
                <div>

                    {[
                        { title: "Expert Patent Consultation", desc: "Professional guidance from experienced intellectual property experts." },
                        { title: "Network of Legal Experts", desc: "Access to skilled patent lawyers for legal support and advice." },
                        { title: "Efficient Processing", desc: "Regular follow-ups with the patent office to ensure timely processing." },
                        { title: "High Success Rate", desc: "Strong success rate in securing patent approvals." },
                        { title: "Cost-Effective Packages", desc: "Budget-friendly services with transparent pricing." },
                        { title: "Documentation Support", desc: "Assistance in preparing accurate patent documentation." },
                        { title: "Fast Application Filing", desc: "Quick submission of patent applications after receiving required details." },
                        { title: "Objection Handling", desc: "Expert assistance in responding to patent office objections." },
                        { title: "Post-Grant Support", desc: "Continued support to maintain and enforce patent rights." }
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

const PatentRegistration = () => {

    const faqs = [
        {
            question: "Who can become a registered patent agent in India?",
            answer: "To become a registered patent agent in India, an individual must be an Indian citizen, be at least 21 years old, hold a degree in science, engineering, or technology from a recognized university, and pay the prescribed registration fee."
        },
        {
            question: "What is the procedure for registration of patent?",
            answer: "1. Pre-filing Search - Search for existing patents to ensure originality. 2. Prepare Application - Draft patent application, including claims and specifications. 3. File Application - Apply to the relevant patent office. 4. Publication - The application is published 18 months after the application is filed. 5. Examination Request - Request review of the patent application within the specified time. 6. Respond to Objections - Address any objections or questions the patent examiner raises. 7. Grant of Patent - If approved, the patent is granted and published in the patent journal. 8. Renewal - Pay renewal fees to keep the patent valid."
        },
        {
            question: "When one cannot apply for patent registration?",
            answer: "1. If the patent is on sale. 2. If it is in public use. 3. If it has been published one year before the application date."
        },
        {
            question: "What are the requirements to file a patent?",
            answer: "1. Patentable subject matter 2. Utility 3. Novelty 4. Non-obviousness 5. Enablement"
        }
    ];

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Innovation Protection
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Patent Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Patent registration online offers legal protection to inventors and grants exclusive rights to their inventions. It offers various benefits, including commercial advantages such as long-term security and profitability.
                    </p>

                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Patent Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        { title: "Exclusive Ownership Rights", desc: "Patent registration grants inventors exclusive rights to manufacture, use, or sell their invention while preventing unauthorized usage." },
                        { title: "Monetization Opportunities", desc: "Inventors can license or sell their patents, generating additional revenue while retaining ownership of their innovation." },
                        { title: "Higher Market Value", desc: "A patented invention enhances the credibility and business value of the product, making it more attractive to investors and partners." },
                        { title: "Competitive Advantage", desc: "Patents protect innovative technology and prevent competitors from copying the invention." },
                        { title: "Legal Protection", desc: "Patent holders can take legal action against individuals or organizations that infringe upon their patented invention." },
                        { title: "International Protection Opportunities", desc: "Patent protection in India can be extended internationally through global treaties, enabling inventors to secure rights in other countries." }
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
                heroTitleMain="Patent Registration"
                heroTitleSuffix="Services in India"
                heroSubtitle="Protect Your Innovations"
                heroDescription="Protect your innovative inventions with exclusive patent rights for 20 years."
                whatsIncludedList={[
                    "Comprehensive Patent Search",
                    "Drafting Provisional/Complete Specification",
                    "Filing Patent Application",
                    "Examination & Objection Handling"
                ]}
                stats={[
                    { count: "20-Year", label: "Patent Protection", icon: <Shield size={20} /> },
                    { count: "98%", label: "Approval Success Rate", icon: <CheckCircle size={20} /> },
                    { count: "Professional", label: "Patent Consultation", icon: <UserCheck size={20} /> }
                ]}
            />

            <DetailsLayout
                overview={<PatentRegistrationOverview />}
                advantages={advantagesContent}
                eligibility={<PatentRegistrationEligibility />}
                documents={<PatentRegistrationDocumentsSection />}
                process={<PatentRegistrationProcessSection />}
                features={<PatentRegistrationFeaturesSection />}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Patent Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default PatentRegistration;

