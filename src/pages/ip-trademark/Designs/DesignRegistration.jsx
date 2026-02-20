import { PenTool, Layers, CheckCircle, FileText, Globe, Shield, UserCheck, Star } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * DesignRegistration Page
 */

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
                            Design registration is a legal process that provides intellectual property rights protection to the aesthetic aspect of a product’s design.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Governed by the Designs Act, 2000, it protects new and original features such as shape, configuration, surface pattern, ornaments, and composition of lines or colors.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is a Design Mark?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A design mark includes the shape, pattern, configuration, or ornament applied to a 2D or 3D article.
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

const DesignRegistration = () => {

    const faqs = [
        {
            question: "What is a Design Mark?",
            answer: "A design mark protects the aesthetic aspect of a product's design."
        },
        {
            question: "What is the validity of Design Registration?",
            answer: "Valid for 10 years, extendable by 5 years."
        },
        {
            question: "What is excluded from Design Registration?",
            answer: "Functional designs, national emblems, non-original designs, etc."
        },
        {
            question: "When can a design registration be cancelled?",
            answer: "If not new, previously published, or not compliant."
        },
        {
            question: "What are the types of Design Applications?",
            answer: "Ordinary Application and Reciprocity Application."
        }
    ];

    /* ================= UPDATED STICKY ADVANTAGES SECTION ================= */

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Design Protection
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Design Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Secure exclusive rights over your product’s aesthetic features and enhance commercial value.
                    </p>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80"
                            alt="Design Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CARDS) */}
                <div className="space-y-6">
                    {[
                        { title: "Exclusive Rights", desc: "Prevents others from copying or selling similar designs." },
                        { title: "Commercial Value", desc: "Boosts product value and attracts investors." },
                        { title: "Promotes Innovation", desc: "Encourages creation of original designs." },
                        { title: "Enhances Credibility", desc: "Improves brand trust and global protection." },
                        { title: "Legal Protection", desc: "Safeguards against imitation and duplication." },
                        { title: "Extended Protection", desc: "10 years protection extendable by 5 years." }
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
                    { count: "5000+", label: "Designs Registered", icon: <PenTool size={20} /> },
                    { count: "10 Years", label: "Initial Protection", icon: <Shield size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <UserCheck size={20} /> }
                ]}
            />

            <DetailsLayout
                overview={<DesignRegistrationOverview />}
                advantages={advantagesContent}
                eligibility={{
                    title: "Who Can Register?",
                    subtitle: "Eligibility checklist for Design Registration.",
                    list: [
                        { title: "Author of Design", desc: "The creator of the design." },
                        { title: "Proprietor", desc: "Owner of the design rights." },
                        { title: "Assignee", desc: "Exclusive assignee of proprietor." },
                        { title: "Legal Representative", desc: "Agent of NRI proprietor." },
                        { title: "Entities", desc: "Firms or corporates can apply." },
                        { title: "Originality Requirement", desc: "Design must be new and original." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Documents needed to file your Design Registration application.",
                    list: [
                        "Form 1",
                        "Design Representations",
                        "Power of Authority",
                        "Statement of Novelty",
                        "Priority Documents",
                        "MSME Certificate",
                        "Affidavit",
                        "Assignment Deed"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "A systematic approach to protecting your design.",
                    steps: [
                        { step: "01", title: "Design Search", desc: "Ensure novelty." },
                        { step: "02", title: "Filing Application", desc: "Submit required forms." },
                        { step: "03", title: "Examination", desc: "Application review." },
                        { step: "04", title: "Report Consideration", desc: "Respond to objections." },
                        { step: "05", title: "Publication", desc: "Published in Journal." },
                        { step: "06", title: "Certificate Issue", desc: "Certificate granted." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert guidance for securing your design rights.",
                    list: [
                        { title: "5000+ Designs Registered", desc: "Proven track record." },
                        { title: "Expert Consultation", desc: "24/7 guidance." },
                        { title: "Documentation Support", desc: "Accurate filing support." },
                        { title: "Liaison with Authorities", desc: "Smooth submission." },
                        { title: "Customized Solutions", desc: "Tailored process." },
                        { title: "Cost-Effective", desc: "Transparent pricing." },
                        { title: "Legal Support", desc: "Defend against opposition." },
                        { title: "PAN India Service", desc: "100+ cities coverage." }
                    ]
                }}
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
