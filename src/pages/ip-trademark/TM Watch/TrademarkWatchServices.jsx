import { ShieldCheck, Award, Globe, Search, FileText, CheckCircle, Clock, Users } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

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
                        Benefits of Monitoring
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Stay one step ahead of potential infringers.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                            alt="Trademark Watch Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Early Detection", desc: "Identify conflicting marks before they are registered and fully enforced." },
                        { title: "Cost Savings", desc: "Avoid expensive legal battles and litigation by stopping infringement at the application stage." },
                        { title: "Brand Integrity", desc: "Maintain the exclusivity and strength of your brand name in the market." },
                        { title: "Market Insight", desc: "Gain awareness of competitors' naming trends and business directions." },
                        { title: "Asset Protection", desc: "Safeguard your most valuable intangible business assets continuously." },
                        { title: "Timely Action", desc: "Ensures you never miss the deadline to file a formal opposition." }
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
                            Continuous Surveillance
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Trademark Watch Services – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Trademark watch is a monitoring service that helps businesses identify potential trademark infringements by third parties. It involves tracking new trademark applications that may conflict with your existing registered marks.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Identifying these conflicts early is crucial because it allows you to file an opposition within the statutory period, which is typically much easier and cheaper than attempting to cancel a mark after it has already been registered.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
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
                    Who Needs This Service?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Essential for businesses with established brand value.
                </p>
                
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Registered Owners
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Anyone with a registered trademark needs to actively protect it.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Growing Startups
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        To ensure no competitors mimic their rising brand identity.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Global Corporations
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Monitoring across multiple jurisdictions for cross-border protection.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Luxury Brands
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        High-value brands that are frequently targets for imitation.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        E-commerce Sellers
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Protecting digital storefront identities from competitors.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Manufacturers
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Securing industrial marks across global distribution chains.
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
                    Getting Started
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    What we need to set up your trademark watch.
                </p>
                <div className="space-y-4">
                    
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Trademark Registration Certificate / Application Copy</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">List of Marks to be Monitored (Word/Logo)</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Designated Jurisdictions (India/Global)</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Relevant Trademark Classes (Nice Classification)</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Authorized Contact Person for Alerts</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Power of Attorney (for filing oppositions if needed)</p>
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
                        Our Watch Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        A systematic approach to brand surveillance.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
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
                                    Setup Profile
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Defining the marks, classes, and jurisdictions to be watched.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Continuous Scan
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Scanning daily/weekly official trademark journals and databases.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Conflict Analysis
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Our experts filter results to find truly conflicting marks.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Detailed Reporting
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Providing regular reports on all detected threats.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Legal Consultation
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Evaluating the risk and deciding whether to pursue legal action.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                6.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Opposition Filing
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Drafting and filing formal oppositions against infringing marks.
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
                        Why Choose VyomBiz?
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
                                    Expert Attorneys
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Manual review by IP lawyers to ensure zero false positives.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Global Reach
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Monitoring capabilities in over 180 countries and WIPO journals.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Real-Time Alerts
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Immediate notification as soon as a conflict is detected.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Strategic Advice
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Actionable legal strategy for every conflicting mark identified.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    High-Tech Tools
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Using advanced algorithms for better detection of similar marks.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                6.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    End-to-End Support
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    From detection to filing oppositions and legal representation.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                7.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Transparent Pricing
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Simple fixed-fee packages for continuous protection.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                8.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Proven Track Record
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Protecting thousands of brands from infringement globally.
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
            question: "What is a Trademark Watch service?",
            answer: "A Trademark Watch service is a proactive monitoring system that scans trademark applications to identify any new marks that might conflict with or infringe upon your existing trademarks."
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
                heroTitleSuffix="& Monitoring"
                heroSubtitle="Protect Your Brand Identity"
                heroDescription="Trademark registration is just the first step. To truly protect your brand, you need continuous monitoring. Our Trademark Watch services identify potential infringements early, giving you the power to block conflicting marks before they are registered."
                whatsIncludedList={[
                    "Daily/Weekly Journal Monitoring",
                    "Global & Regional Watch Reports",
                    "Conflict Analysis & Legal Opinion",
                    "Timely Opposition Alerts"
                ]}
                stats={[
                    { count: "Daily", label: "Monitoring", icon: <Clock size={20} /> },
                    { count: "Real-time", label: "Alerts", icon: <ShieldCheck size={20} /> },
                    { count: "100%", label: "Brand Security", icon: <Award size={20} /> }
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
