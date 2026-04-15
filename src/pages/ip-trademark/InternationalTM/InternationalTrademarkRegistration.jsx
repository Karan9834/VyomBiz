import { Globe, ShieldCheck, Flag, FileText, CheckCircle, Scale, Users, Clock } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import advantages from "../../../assets/IP & Trademark/International TM/Trademark Watch & Monitoring/advantages.jpg";
import overview from "../../../assets/IP & Trademark/International TM/Trademark Watch & Monitoring/overview.jpg";
import req from "../../../assets/IP & Trademark/International TM/Trademark Watch & Monitoring/req.png";

/**
 * InternationalTrademarkRegistration Page
 */

const InternationalTrademarkRegistrationOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Global Brand Protection
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Overview of <span className="text-yellow-400">International Trademark Registration</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            International trademark registration through the Madrid Protocol allows businesses to seek trademark protection across multiple countries using a single application.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            It provides trademark owners with exclusive rights in designated member countries and helps build a strong global brand presence.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            Madrid Protocol System
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Administered by the World Intellectual Property Organization, this system enables trademark protection in more than 120 countries through a centralized filing process.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
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
            question: "How can trademarks be registered internationally?",
            answer: "The process generally includes conducting a trademark search, filing an international application under the Madrid Protocol, examination by the World Intellectual Property Organization, review by designated countries, opposition period, and final registration approval."
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Global Expansion
                    </span>

                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Advantages of International Trademark Registration
                    </h2>

                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Expand your brand internationally with centralized protection and legal security.
                    </p>

                    <div className="mt-10">
                        <img
                            src={advantages}
                            alt="International Trademark Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CARDS) */}
                <div className="space-y-6">
                    {[
                        { title: "Global Legal Protection", desc: "Protects your brand against infringement across multiple international markets." },
                        { title: "Global Business Opportunities", desc: "Supports expansion into new markets, partnerships, and licensing opportunities." },
                        { title: "Exclusive Brand Identity", desc: "Ensures exclusive ownership and recognition of your brand internationally." },
                        { title: "Cross-Border E-commerce Protection", desc: "Helps safeguard brands operating in international online marketplaces." },
                        { title: "International Trade Protection", desc: "Protects trademarks used in export and import activities." },
                        { title: "Enhanced Brand Value", desc: "Increases brand credibility, investor confidence, and overall business value." }
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
                heroTitleSuffix="Registration Services"
                heroSubtitle="Secure Your Brand Globally"
                heroDescription="Expand your business globally and protect your brand identity across more than 120 countries with international trademark protection."
                whatsIncludedList={[
                    "Madrid Protocol Application Filing",
                    "Global Trademark Search",
                    "WIPO Liaison & Support",
                    "Response to International Objections"
                ]}
                stats={[
                    { count: "120+", label: "Countries Supported", icon: <Globe size={20} /> },
                    { count: "10-Year", label: "Registration Validity", icon: <Clock size={20} /> },
                    { count: "500+", label: "Trademark Professionals", icon: <Users size={20} /> }
                ]}
            />

            <DetailsLayout
                overview={<InternationalTrademarkRegistrationOverview />}
                advantages={advantagesContent}
                eligibility={{
                    title: "Eligibility for International Trademark Registration",
                    subtitle: "Who can apply for International Trademark Registration?",
                    list: [
                        { title: "Indian Applicants", desc: "Individuals or businesses that are citizens, residents, or have establishments in India." },
                        { title: "Base Trademark Requirement", desc: "Applicants must have an existing national trademark application or registration in their home country." },
                        { title: "Madrid Protocol Members", desc: "Applicants must belong to a country that is a member of the Madrid Protocol system." },
                        { title: "Businesses Expanding Internationally", desc: "Ideal for exporters, multinational companies, and brands targeting global markets." }
                    ]
                }}
                documents={{
                    title: "Documents Required for International Trademark Filing",
                    description: "Essential documents for filing your application.",
                    list: [
                        "Identity and Address Proof",
                        "Business Registration Certificate",
                        "Base Trademark Application or Registration",
                        "Goods and Services Description",
                        "Selected Countries for Protection",
                        "Madrid Application Form (MM2)",
                        "Authorization Document",
                        "Priority Claim Documents"
                    ],
                    imageUrl: req
                }}
                process={{
                    title: "International Trademark Registration Process",
                    subtitle: "Step-by-step guide.",
                    steps: [
                        { step: "01", title: "Trademark Availability Search", desc: "Conduct a search to ensure the trademark is unique." },
                        { step: "02", title: "File International Application", desc: "Submit the application through the office of origin." },
                        { step: "03", title: "Examination by WIPO", desc: "The World Intellectual Property Organization reviews the application for formal requirements." },
                        { step: "04", title: "Examination by Designated Countries", desc: "Each selected country reviews the trademark under its national laws." },
                        { step: "05", title: "Opposition Period", desc: "Third parties may oppose the trademark within the specified timeframe." },
                        { step: "06", title: "Trademark Registration", desc: "Trademark protection is granted in approved countries." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz for International Trademark Registration",
                    subtitle: "Trusted partner for global IP management.",
                    list: [
                        { title: "Experienced Trademark Experts", desc: "Dedicated professionals specializing in international trademark law." },
                        { title: "Efficient Processing", desc: "Applications handled efficiently to minimize delays." },
                        { title: "Multilingual Assistance", desc: "Support available in multiple languages for global clients." },
                        { title: "Dedicated Customer Support", desc: "Round-the-clock assistance for queries and application tracking." },
                        { title: "Tailored Trademark Strategies", desc: "Solutions customized based on your business expansion plans." },
                        { title: "Transparent Pricing", desc: "Affordable services with clear and transparent pricing." },
                        { title: "Legal Support for Objections", desc: "Assistance in handling objections or refusals by national offices." },
                        { title: "Post-Registration Assistance", desc: "Support for trademark renewals, monitoring, and enforcement." }
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

