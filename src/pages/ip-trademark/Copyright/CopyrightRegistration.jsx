import { Copyright, FileText, CheckCircle, Shield, Music, PenTool, Video, Code, Globe, UserCheck } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * CopyrightRegistration Page
 */

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
                            Copyright Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Copyright registration is a legal mechanism under the Copyright Act, 1957.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It grants exclusive rights to the creator and provides prima facie evidence of ownership in court.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Scope of Protection
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Protects expression of ideas including software, films, music, content, and artistic works.
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

const CopyrightRegistration = () => {

    const faqs = [
        {
            question: "What is the validity of Copyright Registration in India?",
            answer: "Generally valid for 60 years depending on the type of work."
        },
        {
            question: "What is the role of the Registrar of Copyrights?",
            answer: "Registers works, issues certificates, and maintains records."
        },
        {
            question: "Who can apply for Copyright Registration?",
            answer: "Author, assignee, publisher, producer, or co-authors."
        },
        {
            question: "What are the benefits of Copyright Registration?",
            answer: "Proof of ownership, exclusive rights, infringement protection, licensing ability."
        },
        {
            question: "How long does the registration process take?",
            answer: "Typically 2 to 9 months including 30-day waiting period."
        }
    ];

    /* ================= UPDATED STICKY ADVANTAGES SECTION ================= */

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">

                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Creative Protection
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Importance of Copyright Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Strengthen ownership rights and unlock commercial opportunities for your creative works.
                    </p>

                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80"
                            alt="Copyright Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CARDS) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Protection", desc: "Establishes ownership and allows legal action against infringement." },
                        { title: "Proof of Ownership", desc: "Prima facie evidence in court for disputes." },
                        { title: "Licensing Opportunity", desc: "Monetize through licensing or assignment." },
                        { title: "Global Protection", desc: "Protected across Berne Convention countries." },
                        { title: "Deterrence", desc: "Public record discourages infringement." },
                        { title: "Brand Value", desc: "Enhances commercial value and credibility." }
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
                eligibility={{
                    title: "Who Can Apply?",
                    subtitle: "Eligibility criteria & Documents Required.",
                    list: [
                        { title: "Applicant", desc: "Author, Creator, Publisher, or Assignee." },
                        { title: "Identity Proof", desc: "PAN & Aadhaar." },
                        { title: "Work Details", desc: "Title and Description." },
                        { title: "Copies of Work", desc: "Published or manuscript copies." },
                        { title: "NOC", desc: "If applicable." },
                        { title: "Business Proof", desc: "If applicant is company." }
                    ]
                }}
                documents={{
                    title: "Registration Process",
                    description: "Step-by-step guide.",
                    list: [
                        "Filing Application",
                        "Payment of Fees",
                        "Diary Number Issuance",
                        "30-Day Waiting",
                        "Scrutiny",
                        "Objection Handling",
                        "Certificate Grant"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1450609283084-3c67d643d931?auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted IP partner.",
                    steps: [
                        { step: "01", title: "99% Success Rate", desc: "Strong approval record." },
                        { step: "02", title: "Expert Assistance", desc: "Dedicated IP attorneys." },
                        { step: "03", title: "End-to-End Support", desc: "Complete lifecycle support." },
                        { step: "04", title: "Affordable", desc: "Transparent pricing." },
                        { step: "05", title: "Digital Process", desc: "Online filing support." },
                        { step: "06", title: "Post-Reg Support", desc: "Licensing & enforcement help." }
                    ]
                }}
                whyChooseUs={{
                    title: "Our Expertise",
                    subtitle: "Industry coverage.",
                    list: [
                        { title: "Entertainment", desc: "Films, Music." },
                        { title: "Publishing", desc: "Books, Journals." },
                        { title: "Software/IT", desc: "Code, SaaS." },
                        { title: "Education", desc: "Study materials." },
                        { title: "Marketing", desc: "Brochures, Ads." },
                        { title: "Art & Design", desc: "Paintings, Architecture." }
                    ]
                }}
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
