import { ShieldCheck, Award, Globe, Search, FileText, CheckCircle, Clock, Users } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * TrademarkWatchServices Page matching TrustRegistration layout styles
 * Content Sourced from: https://VyomBiz.io/trademark-watch-services
 */

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
                overview={{
                    badge: "Continuous Surveillance",
                    title: "Trademark Watch Services –",
                    highlightTitle: "An Overview",
                    description: [
                        "Trademark watch is a monitoring service that helps businesses identify potential trademark infringements by third parties. It involves tracking new trademark applications that may conflict with your existing registered marks.",
                        "Identifying these conflicts early is crucial because it allows you to file an opposition within the statutory period, which is typically much easier and cheaper than attempting to cancel a mark after it has already been registered.",
                        "Enforce your rights: Registration gives you the right to the mark, but the responsibility to enforce that right lies with the owner. Trademark watch acts as a security system for your brand assets, ensuring that no one else can ride on your brand's reputation."
                    ],
                    whyIdealTitle: "Scope of Monitoring",
                    whyIdealList: [
                        { title: "Word Marks", desc: "Covers identical or confusingly similar brand names and slogans." },
                        { title: "Phonetic Similarity", desc: "Identifies marks that sound the same as yours even if spelled differently." },
                        { title: "Logo & Graphics", desc: "Monitoring for similar visual designs and patterns." },
                        { title: "International Registers", desc: "Watching applications filed through WIPO and other global offices." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Monitoring",
                    subtitle: "Stay one step ahead of potential infringers.",
                    list: [
                        { title: "Early Detection", desc: "Identify conflicting marks before they are registered and fully enforced." },
                        { title: "Cost Savings", desc: "Avoid expensive legal battles and litigation by stopping infringement at the application stage." },
                        { title: "Brand Integrity", desc: "Maintain the exclusivity and strength of your brand name in the market." },
                        { title: "Market Insight", desc: "Gain awareness of competitors' naming trends and business directions." },
                        { title: "Asset Protection", desc: "Safeguard your most valuable intangible business assets continuously." },
                        { title: "Timely Action", desc: "Ensures you never miss the deadline to file a formal opposition." }
                    ]
                }}
                eligibility={{
                    title: "Who Needs This Service?",
                    subtitle: "Essential for businesses with established brand value.",
                    list: [
                        { title: "Registered Owners", desc: "Anyone with a registered trademark needs to actively protect it." },
                        { title: "Growing Startups", desc: "To ensure no competitors mimic their rising brand identity." },
                        { title: "Global Corporations", desc: "Monitoring across multiple jurisdictions for cross-border protection." },
                        { title: "Luxury Brands", desc: "High-value brands that are frequently targets for imitation." },
                        { title: "E-commerce Sellers", desc: "Protecting digital storefront identities from competitors." },
                        { title: "Manufacturers", desc: "Securing industrial marks across global distribution chains." }
                    ]
                }}
                documents={{
                    title: "Getting Started",
                    description: "What we need to set up your trademark watch.",
                    list: [
                        "Trademark Registration Certificate / Application Copy",
                        "List of Marks to be Monitored (Word/Logo)",
                        "Designated Jurisdictions (India/Global)",
                        "Relevant Trademark Classes (Nice Classification)",
                        "Authorized Contact Person for Alerts",
                        "Power of Attorney (for filing oppositions if needed)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Our Watch Process",
                    subtitle: "A systematic approach to brand surveillance.",
                    steps: [
                        { step: "01", title: "Setup Profile", desc: "Defining the marks, classes, and jurisdictions to be watched." },
                        { step: "02", title: "Continuous Scan", desc: "Scanning daily/weekly official trademark journals and databases." },
                        { step: "03", title: "Conflict Analysis", desc: "Our experts filter results to find truly conflicting marks." },
                        { step: "04", title: "Detailed Reporting", desc: "Providing regular reports on all detected threats." },
                        { step: "05", title: "Legal Consultation", desc: "Evaluating the risk and deciding whether to pursue legal action." },
                        { step: "06", title: "Opposition Filing", desc: "Drafting and filing formal oppositions against infringing marks." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Advanced technology combined with legal expertise.",
                    list: [
                        { title: "Expert Attorneys", desc: "Manual review by IP lawyers to ensure zero false positives." },
                        { title: "Global Reach", desc: "Monitoring capabilities in over 180 countries and WIPO journals." },
                        { title: "Real-Time Alerts", desc: "Immediate notification as soon as a conflict is detected." },
                        { title: "Strategic Advice", desc: "Actionable legal strategy for every conflicting mark identified." },
                        { title: "High-Tech Tools", desc: "Using advanced algorithms for better detection of similar marks." },
                        { title: "End-to-End Support", desc: "From detection to filing oppositions and legal representation." },
                        { title: "Transparent Pricing", desc: "Simple fixed-fee packages for continuous protection." },
                        { title: "Proven Track Record", desc: "Protecting thousands of brands from infringement globally." }
                    ]
                }}
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
