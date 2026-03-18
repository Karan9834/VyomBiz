import React from "react";
import { Copyright, FileText, CheckCircle, Shield, Music, PenTool, Video, Code, Globe, UserCheck } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import imp from "../../../assets/IP & Trademark/Copyright/copyright-registration/imp.png";
import overview from "../../../assets/IP & Trademark/Copyright/copyright-registration/overview.jpeg";
import process from "../../../assets/IP & Trademark/Copyright/copyright-registration/process.jpg";

const CopyrightRegistrationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Protection of Intellectual Property
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Overview of <span className="text-[#005a9c]">Copyright Registration in India</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Copyright registration in India applies to various types of creative works, including literary works, artistic works, musical compositions, sound recordings, computer programs, dramatic works, cinematograph films, and software.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Copyright registration is a legal mechanism that protects creative and intellectual works from unauthorized use under the Copyright Act, 1957. It grants creators the authority to safeguard their work against unlawful copying, misuse, or reproduction.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Copyright protection encourages creativity and innovation by giving authors recognition and economic benefits for their original work, which promotes the development of quality content across various industries.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is Copyright Protection?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Copyright is a legal right granted to the creator of an original work under the Copyright Act, 1957. It gives the owner exclusive rights to reproduce, distribute, publish, or adapt the work and prevents others from using it without authorization.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
                    Who Can Apply for Copyright Registration?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To apply for online copyright registration, creators and owners must meet certain conditions and follow the required guidelines. These include the following, as discussed below:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Author or Creator
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        The individual who originally created the work.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Assignees
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Individuals or entities who have been assigned copyright ownership.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Producers or Publishers
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Publishers or producers involved in distributing the work.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Joint Authors
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Multiple creators involved in producing the same work.
                    </p>
                </div>

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mt-16 mb-6">
                    Types of Works Eligible for Copyright
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { title: "Literary Works", desc: "Books, articles, essays, manuals, poems, and novels." },
                        { title: "Artistic Works", desc: "Paintings, drawings, sculptures, and illustrations." },
                        { title: "Musical Works", desc: "Song lyrics, compositions, musical scores, and melodies." },
                        { title: "Software and Applications", desc: "Computer programs, databases, and digital compilations." },
                        { title: "Sound Recordings", desc: "Audio recordings, speeches, music tracks, and audiobooks." },
                        { title: "Cinematograph and Performing Works", desc: "Films, television shows, animations, and video productions." }
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
                    Documents Required for Copyright Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    The applicants must submit the following documents while applying for copyright registration in India:
                </p>
                <div className="space-y-4">
                    {[
                        { title: "Applicant Information", desc: "Details such as name, address, and nationality of the author." },
                        { title: "Identity Proof", desc: "Government ID such as Aadhaar card or PAN card." },
                        { title: "Copy of the Work", desc: "Published or unpublished copy of the creative work." },
                        { title: "Fee Payment Proof", desc: "Receipt confirming payment of the registration fee." },
                        { title: "Language Details", desc: "Information about the language in which the work is published." },
                        { title: "Work Title and Description", desc: "Details describing the nature and category of the work." },
                        { title: "Publication Details", desc: "Date and place of publication, if applicable." },
                        { title: "NOC from Author/Publisher", desc: "Required if someone other than the creator files the application." },
                        { title: "Company Incorporation Certificate", desc: "Applicable if the copyright belongs to a business entity." },
                        { title: "Power of Attorney", desc: "Required when the application is filed through an authorized representative." }
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

const CopyrightRegistrationProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Copyright Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Here’s a step-by-step guide to the copyright registration process in India:
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
                            { title: "Application Submission", desc: "Submit the copyright application in Form IV to the Registrar of Copyrights." },
                            { title: "Payment of Fees", desc: "Applicants must pay the prescribed fee under Schedule II of the Act." },
                            { title: "Applicant Verification", desc: "The application must be signed by the applicant or authorized representative." },
                            { title: "Diary Number Generation", desc: "The Registrar issues a diary number, initiating a mandatory 30-day waiting period." },
                            { title: "Examination and Objection Handling", desc: "If objections arise, they must be addressed before proceeding further." },
                            { title: "Issuance of Registration Certificate", desc: "If no discrepancies are found, the copyright is registered and entered in the official register." }
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
                        Why Choose VyomBiz for Copyright Registration?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Expert support.
                    </p>
                </div>
                <div>
                    {[
                        { title: "High Approval Rate", desc: "Strong track record of successful copyright registrations." },
                        { title: "Extensive Experience", desc: "Over 10,000 works successfully registered." },
                        { title: "PAN-India Services", desc: "Copyright registration assistance available across India." },
                        { title: "Multi-Industry Expertise", desc: "Experience serving clients across various sectors." },
                        { title: "Round-the-Clock Support", desc: "Dedicated professionals available anytime for assistance." },
                        { title: "Documentation Assistance", desc: "Support in preparing and filing all required documents." },
                        { title: "Complete Registration Support", desc: "Guidance throughout the entire copyright registration process." },
                        { title: "Transparent Pricing", desc: "Cost-effective services with clear pricing structure." },
                        { title: "Global Copyright Awareness", desc: "Knowledge of international copyright treaties and protection." },
                        { title: "Legal Issue Handling", desc: "Assistance in addressing legal complications during registration." }
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
            question: "What are the responsibilities of the Registrar of Copyrights?",
            answer: "The Registrar of Copyrights is responsible for registering copyright applications, issuing copyright certificates, maintaining official records of registered works, and providing copyright-related information to the public."
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
                        Benefits of Copyright Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Copyright registration in India is a process to obtain legal rights over original work and, at the same time, safeguard the work from unauthorised use and dissemination.
                    </p>

                    <div className="mt-10">
                        <img
                            src={imp}
                            alt="Copyright Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    {[
                        { title: "Legal Protection", desc: "Copyright registration provides legal recognition of ownership and helps creators take action against infringement." },
                        { title: "Evidence of Ownership", desc: "A registered copyright acts as official proof that the creator owns the original work." },
                        { title: "Exclusive Reproduction Rights", desc: "Only the copyright owner has the authority to reproduce or copy the work." },
                        { title: "Protection of Intellectual Rights", desc: "Copyright safeguards rights such as reproduction, distribution, adaptation, and public communication of the work." },
                        { title: "Increased Creator Visibility", desc: "Registration helps establish public recognition of ownership and prevents unauthorized usage." },
                        { title: "Rights for Translation and Adaptation", desc: "Copyright owners can authorize or restrict translations and derivative works based on their original content." },
                        { title: "Control Over Distribution", desc: "Owners have complete authority to decide how their work is shared, published, or distributed." },
                        { title: "Revenue Opportunities", desc: "Copyright enables creators to monetize their work through licensing, publishing, and distribution." }
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
                heroTitleSuffix="Services in India"
                heroSubtitle="Secure Your Creative Legacy"
                heroDescription="Safeguard your literary, artistic, musical, and software creations with copyright protection."
                whatsIncludedList={[
                    "Filing of Copyright Application",
                    "Reply to Discrepancy Letters",
                    "Objection Handling Support",
                    "Copyright Certificate Issuance"
                ]}
                stats={[
                    { count: "60-Year", label: "Copyright Protection", icon: <Shield size={20} /> },
                    { count: "10,000+", label: "Creative Works Protected", icon: <CheckCircle size={20} /> },
                    { count: "Professional", label: "Copyright Assistance", icon: <UserCheck size={20} /> }
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
