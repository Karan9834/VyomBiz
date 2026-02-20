import { Globe, ShieldCheck, Flag, FileText, CheckCircle, Scale, Users, Clock } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * InternationalTrademarkRegistration Page
 */

const InternationalTrademarkRegistrationOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Global Protection
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            International Trademark Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            International trademark registration under the Madrid Protocol simplifies protection across multiple jurisdictions.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It grants exclusive rights within member countries and strengthens global brand identity.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            The Madrid Protocol
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Administered by WIPO, it enables protection in 120+ countries through a single application.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&q=80"
                            alt="International Trademark Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const InternationalTrademarkRegistration = () => {

    const faqs = [
        {
            question: "How do you register trademarks internationally?",
            answer: "Search → File Madrid Application → WIPO Examination → National Examination → Opposition → Grant."
        },
        {
            question: "What are the benefits?",
            answer: "Global legal protection, market expansion, brand value increase."
        },
        {
            question: "What is the Madrid Protocol?",
            answer: "International treaty administered by WIPO for global trademark filing."
        },
        {
            question: "How long is it valid?",
            answer: "10 years, renewable indefinitely."
        },
        {
            question: "Who can file from India?",
            answer: "Indian nationals or businesses with a national trademark application/registration."
        }
    ];

    /* ================= UPDATED STICKY ADVANTAGES SECTION ================= */

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Global Expansion
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Advantages of Global Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Expand your brand internationally with centralized protection and legal security.
                    </p>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
                            alt="International Trademark Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CARDS) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Protection", desc: "Protection against infringement across multiple countries." },
                        { title: "Business Opportunity", desc: "Expand into global markets and licensing agreements." },
                        { title: "Unique Identity", desc: "Secure exclusive global brand rights." },
                        { title: "E-commerce Growth", desc: "Cross-border online brand protection." },
                        { title: "Export/Import Protection", desc: "Safeguards goods in international trade." },
                        { title: "Increased Brand Value", desc: "Enhances investor appeal and revenue potential." }
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
                heroTitleMain="International Trademark"
                heroTitleSuffix="Registration"
                heroSubtitle="Secure Your Brand Globally"
                heroDescription="Expand your business horizons and protect your brand identity across 120+ countries."
                whatsIncludedList={[
                    "Madrid Protocol Application Filing",
                    "Global Trademark Search",
                    "WIPO Liaison & Support",
                    "Response to International Objections"
                ]}
                stats={[
                    { count: "120+", label: "Countries Covered", icon: <Globe size={20} /> },
                    { count: "10 Years", label: "Validity", icon: <Clock size={20} /> },
                    { count: "500+", label: "IP Experts", icon: <Users size={20} /> }
                ]}
            />

            <DetailsLayout
                overview={<InternationalTrademarkRegistrationOverview />}
                advantages={advantagesContent}
                eligibility={{
                    title: "Eligibility & Requirements",
                    subtitle: "Who can apply for International Trademark Registration?",
                    list: [
                        { title: "Indian Applicants", desc: "Indian nationals or businesses domiciled in India." },
                        { title: "Basic Mark Requirement", desc: "Must hold a national trademark application or registration." },
                        { title: "Madrid Members", desc: "Trademark owners in Madrid Protocol countries." },
                        { title: "Global Businesses", desc: "Ideal for exporters and global brands." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Essential documents for filing your application.",
                    list: [
                        "Identity & Address Proof",
                        "Certificate of Incorporation",
                        "National Trademark Registration Copy",
                        "Goods & Services List",
                        "Designated Countries List",
                        "MM2 Form",
                        "Power of Attorney",
                        "Priority Documents"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1526304640152-d4619684e484?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process",
                    subtitle: "Step-by-step guide.",
                    steps: [
                        { step: "01", title: "Trademark Search", desc: "Ensure uniqueness." },
                        { step: "02", title: "File Application", desc: "Submit via office of origin." },
                        { step: "03", title: "WIPO Examination", desc: "Formal review & publication." },
                        { step: "04", title: "National Exam", desc: "Local country review." },
                        { step: "05", title: "Opposition", desc: "Opposition period." },
                        { step: "06", title: "Grant", desc: "Registration in designated countries." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Trusted partner for global IP management.",
                    list: [
                        { title: "500+ IP Experts", desc: "Dedicated trademark attorneys." },
                        { title: "Timely Completion", desc: "Efficient processing." },
                        { title: "Multilingual Support", desc: "10+ languages support." },
                        { title: "24/7 Support", desc: "Round-the-clock assistance." },
                        { title: "Customized Solutions", desc: "Tailored processes." },
                        { title: "Cost-Effective", desc: "Transparent pricing." },
                        { title: "Legal Representation", desc: "Defense against objections." },
                        { title: "Post-Registration", desc: "Renewals & enforcement support." }
                    ]
                }}
            />

            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about International Trademark Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default InternationalTrademarkRegistration;
