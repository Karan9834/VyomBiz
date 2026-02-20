import { FileText, CheckCircle, Shield, Lightbulb, Globe, UserCheck, Settings, PenTool, Sprout, ClipboardList } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * PatentRegistration Page
 */

const PatentRegistrationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Intellectual Property
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Patent Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Patent registration in India grants inventors exclusive rights for 20 years.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It ensures inventors can commercially benefit from their work.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Key Criteria
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Must be novel, non-obvious, and industrially applicable.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
                            alt="Patent Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const PatentRegistration = () => {

    const faqs = [
        {
            question: "What is Patent Agent Registration?",
            answer: "A professional registered to practice before the Patent Office."
        },
        {
            question: "What is the procedure?",
            answer: "Search → Drafting → Filing → Publication → Examination → Grant."
        },
        {
            question: "When can one NOT apply?",
            answer: "If invention is already publicly disclosed."
        },
        {
            question: "What are the requirements?",
            answer: "Novelty, utility, non-obviousness, enablement."
        },
        {
            question: "How long is it valid?",
            answer: "20 years from filing date."
        }
    ];

    /* ================= UPDATED STICKY ADVANTAGES SECTION ================= */

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Innovation Protection
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Patent Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Secure exclusive rights, increase business value, and gain a competitive advantage.
                    </p>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                            alt="Patent Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CARDS) */}
                <div className="space-y-6">
                    {[
                        { title: "Exclusive Rights", desc: "Monopoly over the invention preventing unauthorized use." },
                        { title: "Monetization", desc: "License or sell patent for royalties." },
                        { title: "Market Value", desc: "Enhances valuation and attracts investors." },
                        { title: "Competitive Edge", desc: "Prevents competitors from copying innovation." },
                        { title: "Legal Protection", desc: "Right to sue infringers and claim damages." },
                        { title: "Global Expansion", desc: "Foundation for international protection." }
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
                heroTitleSuffix="in India"
                heroSubtitle="Protect Your Innovations"
                heroDescription="Secure exclusive rights to your inventions for 20 years."
                whatsIncludedList={[
                    "Comprehensive Patent Search",
                    "Drafting Provisional/Complete Specification",
                    "Filing Patent Application",
                    "Examination & Objection Handling"
                ]}
                stats={[
                    { count: "20 Years", label: "Protection", icon: <Shield size={20} /> },
                    { count: "98%", label: "Success Rate", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <UserCheck size={20} /> }
                ]}
            />

            <DetailsLayout
                overview={<PatentRegistrationOverview />}
                advantages={advantagesContent}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Who can apply and what is needed?",
                    list: [
                        { title: "Applicant", desc: "True inventor or assignee." },
                        { title: "Novelty", desc: "Must be new." },
                        { title: "Inventive Step", desc: "Must not be obvious." },
                        { title: "Industrial Use", desc: "Must be applicable in industry." },
                        { title: "Patentable Subject", desc: "Must not fall under excluded categories." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential paperwork.",
                    list: [
                        "Form 1",
                        "Form 2",
                        "Form 3",
                        "Form 5",
                        "Power of Attorney",
                        "Priority Documents",
                        "Form 18"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide.",
                    steps: [
                        { step: "01", title: "Patent Search", desc: "Check novelty." },
                        { step: "02", title: "Drafting", desc: "Prepare specification." },
                        { step: "03", title: "Filing", desc: "Submit application." },
                        { step: "04", title: "Publication", desc: "Published in journal." },
                        { step: "05", title: "Examination", desc: "Patent office review." },
                        { step: "06", title: "Grant", desc: "Certificate issued." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert support.",
                    list: [
                        { title: "Technical Expertise", desc: "Engineers + legal team." },
                        { title: "98% Success Rate", desc: "High approval rate." },
                        { title: "End-to-End Service", desc: "Search to renewal." },
                        { title: "Affordable", desc: "Transparent pricing." },
                        { title: "Confidentiality", desc: "NDA protection." },
                        { title: "Global Network", desc: "PCT support." }
                    ]
                }}
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
