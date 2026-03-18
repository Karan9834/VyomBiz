import { ShieldCheck, Award, Globe, Search, FileText, CheckCircle, Clock, Users } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import benefits from "../../../assets/IP & Trademark/TM Watch/trademark-watch-services/benefits.jpg";
import process from "../../../assets/IP & Trademark/TM Watch/trademark-watch-services/process.jpg";
import trademark from "../../../assets/IP & Trademark/TM Watch/trademark-watch-services/trademark.jpg";

/**
 * TrademarkWatchServices Page matching TrustRegistration layout styles
 * Content Sourced from: https://VyomBiz.io/trademark-watch-services
 */

const TrademarkWatchServicesAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Brand Protection
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Trademark Monitoring
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Stay one step ahead of potential infringers.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="Trademark Watch Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Early Conflict Detection", desc: "Identify similar or conflicting trademarks before they are officially registered." },
                        { title: "Reduced Legal Costs", desc: "Prevent expensive litigation by addressing infringement during the application stage." },
                        { title: "Protect Brand Reputation", desc: "Maintain the exclusivity and credibility of your brand identity in the market." },
                        { title: "Competitor Awareness", desc: "Understand competitor branding strategies and emerging market trends." },
                        { title: "Protection of Brand Assets", desc: "Safeguard valuable intellectual property assets from misuse." },
                        { title: "Timely Legal Action", desc: "Ensure that opposition deadlines are not missed for conflicting trademarks." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
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
};

const TrademarkWatchServicesOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Continuous Trademark Surveillance
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Overview of <span className="text-[#005a9c]">Trademark Watch Services</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Trademark watch is a monitoring service that helps businesses detect possible trademark conflicts by tracking newly filed trademark applications that may resemble or infringe existing marks.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Detecting potential conflicts early enables brand owners to file a trademark opposition within the permitted time period, which is generally faster and more cost-effective than cancelling a trademark after registration.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={trademark}
                            alt="Trademark Watch Services Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


const TrademarkWatchServicesEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Should Use Trademark Watch Services?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Essential for businesses with established brand value.
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Registered Trademark Owners
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Businesses that already hold registered trademarks and want to maintain their exclusivity.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Expanding Startups
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Startups building strong brand identities that need protection from imitation.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        International Businesses
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Companies operating across multiple jurisdictions requiring global brand monitoring.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Premium Brands
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        High-value brands that are often targeted by counterfeiters or imitators.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Online Sellers
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Businesses operating on digital platforms that need to protect their online brand identity.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Product Manufacturers
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Companies that distribute products widely and require trademark protection across markets.
                    </p>
                </div>
            </div>
        </section>
    );
};

const TrademarkWatchServicesDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required to Start Monitoring
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    What we need to set up your trademark watch.
                </p>
                <div className="space-y-4">

                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Trademark Registration Details (Copy of the trademark registration certificate or application)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Marks to be Tracked (Word marks or logos that need monitoring)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Monitoring Jurisdictions (Countries or regions where trademark monitoring is required)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Applicable Trademark Classes (Relevant classes under the NICE classification system)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Contact Person for Alerts (Designated representative to receive monitoring notifications)</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Authorization Document (Power of attorney if legal action or opposition filing is required)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrademarkWatchServicesProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Trademark Monitoring Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        A systematic approach to brand surveillance.
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

                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                1.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Monitoring Setup
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Define trademarks, classes, and jurisdictions for monitoring.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Database Monitoring
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Regular scanning of trademark journals and official databases.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Conflict Evaluation
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Experts analyze potential matches to identify genuine threats.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Monitoring Reports
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Regular reports highlighting detected conflicting trademarks.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Legal Review
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Assess the risk and determine whether legal action is necessary.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                6.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Filing Trademark Opposition
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Initiate opposition proceedings against conflicting marks if required.
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrademarkWatchServicesFeaturesSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for Trademark Monitoring
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Advanced technology combined with legal expertise.
                    </p>
                </div>
                <div>

                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            1.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Experienced IP Lawyers
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Manual verification of detected conflicts by intellectual property experts.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            2.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Global Monitoring
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Tracking trademarks across multiple countries and international databases including World Intellectual Property Organization records.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            3.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Instant Notifications
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Immediate alerts whenever a potentially conflicting trademark appears.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            4.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Legal Strategy Guidance
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Practical recommendations for addressing each identified risk.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            5.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Advanced Monitoring Technology
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Technology-driven tools to detect similar or identical trademarks efficiently.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            6.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Complete Legal Support
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                From conflict detection to opposition filing and legal representation.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            7.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Transparent Pricing Plans
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Simple and affordable monitoring packages without hidden charges.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            8.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Trusted Protection
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Extensive experience protecting brands from infringement worldwide.
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const TrademarkWatchServices = () => {

    const faqs = [
        {
            question: "What does a Trademark Watch service do?",
            answer: "A Trademark Watch service continuously monitors new trademark applications to identify marks that may be identical or similar to your registered trademarks, allowing you to take timely legal action if necessary."
        },
        {
            question: "Why is it important to watch my trademark?",
            answer: "Monitoring ensures you are notified of potential infringements early, allowing you to file oppositions before the conflicting mark gets registered, thereby protecting your brand's exclusivity."
        },
        {
            question: "How often are trademarks monitored?",
            answer: "Our team monitors official trademark journals and databases on a daily or weekly basis, depending on the service tier, to provide real-time alerts."
        },
        {
            question: "What happens if a conflict is found?",
            answer: "If a conflicting mark is detected, we provide a detailed report and professional legal advice on whether to file an opposition to block the registration."
        },
        {
            question: "Can I monitor my trademark globally?",
            answer: "Yes, we offer international trademark watch services that cover all major global jurisdictions and WIPO's international registers."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Trademark Watch"
                heroTitleSuffix="& Monitoring Services"
                heroSubtitle="Protect Your Brand Identity"
                heroDescription="Trademark registration alone is not enough to protect your brand. Continuous monitoring is essential to detect potential infringements. Our Trademark Watch services track new trademark filings and help you identify conflicting marks early so you can take timely action."
                whatsIncludedList={[
                    "Daily/Weekly Journal Monitoring",
                    "Global & Regional Watch Reports",
                    "Conflict Analysis & Legal Opinion",
                    "Timely Opposition Alerts"
                ]}
                stats={[
                    { count: "Daily", label: "Trademark Monitoring", icon: <Clock size={20} /> },
                    { count: "Instant", label: "Conflict Alerts", icon: <ShieldCheck size={20} /> },
                    { count: "Enhanced", label: "Brand Protection", icon: <Award size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<TrademarkWatchServicesOverview />}
                advantages={<TrademarkWatchServicesAdvantages />}
                eligibility={<TrademarkWatchServicesEligibility />}
                documents={<TrademarkWatchServicesDocumentsSection />}
                process={<TrademarkWatchServicesProcessSection />}
                features={<TrademarkWatchServicesFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Trademark Watch Services"
                faqs={faqs}
            />

        </div>
    );
};

export default TrademarkWatchServices;
