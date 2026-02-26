import React from "react";
import { Copyright, FileText, CheckCircle, Shield, Music, PenTool, Video, Code, Globe, UserCheck } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const CopyrightRegistrationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Intellectual Property
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Copyright Registration: <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Copyright registration in India is required for artistic works, literary works, sound recordings, musical works, computer programs, dramatic works, cinematograph films, and computer softwares.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Copyright registration is a legal mechanism that protects intellectual and artistic creations from unauthorized use under the Copyright Act, 1957. The Act empowers individuals to uphold their intellectual rights against fraudulent, deceitful, and unlawful usage of their original works and creations.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Copyright registration aims to foster innovation and creativity by encouraging monetary benefits and recognition for original creators. It, in turn, promotes the production of high-quality content across different fields.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is Copyright?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            According to the Copyright Act, 1957, copyright is a legal right granted to the original owner of the intellectual property rights. It offers exclusive rights to work, including how it can be used, and forbids others from copying without permission.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80"
                            alt="Copyright Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const CopyrightRegistrationEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility Criteria for Online Copyright Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To apply for online copyright registration, creators and owners must meet certain conditions and follow the required guidelines. These include the following, as discussed below:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Original Creators
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Author or creator of the work.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Assignees
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Assignee or transferee (if exists).
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Producers
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Publisher or producer of the work.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Co-authors
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Co-authors in case of joint authorship.
                    </p>
                </div>

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mt-16 mb-6">
                    Types of Creative Works Eligible
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Literary Work", desc: "Books, essays, poems, manuals, articles, novels." },
                        { title: "Artistic Work", desc: "Sculptures, drawings, paintings, performances." },
                        { title: "Musical Work", desc: "Song lyrics, scores, compositions, melodies, tunes." },
                        { title: "Software/ Application", desc: "Software, data tables, and compilations." },
                        { title: "Sound Recording", desc: "Audio recordings, music, speeches, audiobooks." },
                        { title: "Visual & Performing Arts", desc: "Movies, television shows, animations, video productions." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                            <h3 className="text-[18px] font-semibold text-[#072b47] mb-2">{item.title}</h3>
                            <p className="text-[16px] text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CopyrightRegistrationDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Needed to Register Copyright Online
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The applicants must submit the following documents while applying for copyright registration in India:
                </p>
                <div className="space-y-4">
                    {[
                        "Applicant details, including name, address, and nationality (in the case of an author)",
                        "Identity proof of the applicant, such as an Aadhar card, PAN card, etc.",
                        "Copies/ information of published work/ publication details",
                        "Proof of payment for copyright registration",
                        "The language in which the work is published",
                        "Class, title, & work description, referring to the guidelines for more clarity",
                        "Date of publication, referring to the guidelines that describe published work",
                        "No objection certificate from the author, copyright holders, and publisher",
                        "Incorporation certificate, if the copyright concerns any business",
                        "Demand draft, if the application is being submitted offline",
                        "Power of Attorney or Vakalatnama (if any)"
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

const CopyrightRegistrationProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Process to Register Copyright in India
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Here’s a step-by-step guide to the copyright registration process in India:
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80"
                            alt="Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {[
                            { title: "File the Application", desc: "The first step requires the applicant to file the copyright registration application in Form IV, including all required details, with the Registrar of Copyrights." },
                            { title: "Pay the Application Fees", desc: "The applicants must further pay the requisite fees along with their application as mentioned in Schedule 2 of the Copyright Act, 1957." },
                            { title: "Signature of the Applicant", desc: "The application must be signed by the applicant, and also bear the signatures of an advocate in whose favour a POA or Vakalatnama has been executed." },
                            { title: "Issuance of Diary Number", desc: "The registrar issues a Diary No. The applicants must wait for 30 days, which allows people to raise objections to copyright claims." },
                            { title: "Resolution of Objections Raised", desc: "If no objections are received, the application proceeds for further scrutiny by a scrutineer for any discrepancies." },
                            { title: "Grant of Copyright Registration", desc: "In case no discrepancies are found, the application is accepted for registration. An extract is sent to the registrar to mark the entry in the Register of Copyright." }
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

const CopyrightRegistrationFeaturesSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Trust VyomBiz for Copyright Registration in India?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert support.
                    </p>
                </div>
                <div>
                    {[
                        { title: "High Success Rate", desc: "99% success rate in securing approval for copyright registration." },
                        { title: "Proven Track Record", desc: "Successfully registered over 10,000+ copyrighted works." },
                        { title: "Extensive Reach", desc: "Provides copyright registration services across 100+ cities." },
                        { title: "Industry Experience", desc: "Extensive experience across 20+ leading industries." },
                        { title: "24/7 Expert Support", desc: "24/7 availability of dedicated IPR experts to handle your project." },
                        { title: "Documentation Support", desc: "Complete documentation support for online copyright registration." },
                        { title: "End-to-End Assistance", desc: "End-to-end expert assistance for online copyright registration in India." },
                        { title: "Affordable Pricing", desc: "Offers services at very affordable prices, with no hidden charges." },
                        { title: "International Expertise", desc: "Holds expertise with international treaties, protecting multiple countries." },
                        { title: "Legal Complication Handling", desc: "Efficiently handles legal complications for the registration of copyright in India." }
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

const CopyrightRegistration = () => {

    const faqs = [
        {
            question: "What is the role of the Registrar of Copyrights?",
            answer: "1. Registration of copyrighted works such as literary, musical, and artistic works. 2. Issuance of copyright certificates. 3. Provide copyright information services to the public. 4. Maintenance of copyright records."
        },
        {
            question: "How do I register a copyright in India?",
            answer: "Follow these steps: Step 1: File the Application, Step 2: Pay the Application Fees, Step 3: Signature of the Applicant, Step 4: Issuance of Diary Number, Step 5: Resolution of Objections Raised, Step 6: Grant of Copyright Registration."
        },
        {
            question: "What are the Online Copyright Registration Fees in India?",
            answer: "The fee for literary, dramatic, musical, or artistic works starts from INR 500 per work. For a cinematographic film starts from INR 5,000 per work, for sound recordings starts from INR 2,000 per work, and for computer-related work and software starts from INR 4,000 per work."
        },
        {
            question: "What is the Timeline for Copyright Registration in India?",
            answer: "The timeline for copyright registration in India generally takes around 2 to 9 months, varying depending on various factors like the date of application to receipt of the copyright registration certificate. It includes a mandatory 30-day waiting period."
        }
    ];

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Creative Protection
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Importance of Copyright Registration in India
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Copyright registration in India is a process to obtain legal rights over original work and, at the same time, safeguard the work from unauthorised use and dissemination.
                    </p>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
                            alt="Copyright Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        { title: "Legal Protection", desc: "Copyright registration helps creators establish legal ownership of their work by crediting their name to their work in official records. This authenticates legal recognition and proof of ownership." },
                        { title: "Proof of Ownership", desc: "Copyright registration serves as proof of ownership, allowing creators to use it for marketing purposes and contribute to enhancing brand value." },
                        { title: "Exclusive Reproduction Rights", desc: "The original creators have the right to decide about the reproduction of their work. It is illegal for anyone other than the original owner to copy or reproduce the work without seeking permission." },
                        { title: "Security of Rights", desc: "Copyright registration provides security to the owner's work, encompassing reproduction, distribution, adaptation, dissemination, and translation." },
                        { title: "Owner Visibility", desc: "Copyright registration raises the work's profile, making it worldwide accessible and searchable, which prevents any unauthorized usage of the work once it is registered." },
                        { title: "Translation and Adaptations", desc: "Original owners are protected by copyright laws to authorize or prohibit others from translating their work into other languages or making adaptations based on the original content without permission." },
                        { title: "Distribution and Dissemination", desc: "Once the original owners have copyrighted their work, they become the decision-making authority over its distribution and dissemination in the public domain." },
                        { title: "Economic Stability", desc: "Copyright registration offers economic stability, enabling creators to reproduce and monetize their art in various forms." }
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
                heroTitleMain="Copyright Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Secure Your Creative Legacy"
                heroDescription="Protect your artistic, literary, musical, and software creations."
                whatsIncludedList={[
                    "Filing of Copyright Application",
                    "Reply to Discrepancy Letters",
                    "Objection Handling Support",
                    "Copyright Certificate Issuance"
                ]}
                stats={[
                    { count: "60 Years", label: "Validity", icon: <Shield size={20} /> },
                    { count: "10k+", label: "Works Protected", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Assistance", icon: <UserCheck size={20} /> }
                ]}
            />

            <DetailsLayout
                overview={<CopyrightRegistrationOverview />}
                advantages={advantagesContent}
                eligibility={<CopyrightRegistrationEligibility />}
                documents={<CopyrightRegistrationDocumentsSection />}
                process={<CopyrightRegistrationProcessSection />}
                features={<CopyrightRegistrationFeaturesSection />}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Copyright Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CopyrightRegistration;
