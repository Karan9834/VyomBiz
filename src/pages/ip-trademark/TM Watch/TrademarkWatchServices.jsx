import { Eye, Shield, Globe, Bell, FileSearch, Scale, TrendingUp, Search } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * TrademarkWatchServices Page matching TrustRegistration layout styles
 * Content Sourced from: https://VyomBiz.io/trademark-watch
 */

const TrademarkWatchServices = () => {

    const faqs = [
        {
            question: "Why should I use Trademark Watch Services?",
            answer: "Registering a trademark is just the first step. Without continuous monitoring, there’s always a risk of others filing a similar or identical mark, which can lead to brand dilution and customer confusion. Watch services provide early warnings to protect your brand's value."
        },
        {
            question: "What is the difference between Identical and Similar Trademark Watch?",
            answer: "Identical Watch scans for marks that are precisely the same as yours. Similar Watch goes further to identify marks that are confusingly similar in appearance, sound, or meaning, providing broader protection."
        },
        {
            question: "What industries benefit most from Trademark Watch?",
            answer: "Industries where brand identity is critical, such as Fashion, Pharmaceuticals, Technology, Food & Beverage, Media, Cosmetics, and E-commerce, highly benefit from proactive trademark monitoring."
        },
        {
            question: "Does the service cover international trademarks?",
            answer: "Yes, our service can monitor worldwide trademarks, helping you expand across borders and safeguard your brand in international markets."
        },
        {
            question: "What happens if a conflicting trademark is found?",
            answer: "If a conflict is detected, you will receive a timely alert. Our legal experts can then provide an opinion on the likelihood of confusion and assist you in initiating opposition proceedings or other enforcement actions."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Trademark Watch Services"
                heroTitleSuffix="for Brand Protection"
                heroSubtitle="Monitor & Protect Your Brand Identity"
                heroDescription="Trademark watch services are a crucial tool for tracking existing and potential trademarks. Get real-time alerts whenever a similar or identical mark is filed, allowing you to identify infringement promptly and protect your brand’s value."
                whatsIncludedList={[
                    "24/7 Global Trademark Monitoring",
                    "Early Identification of Infringement Risks",
                    "AI-Backed Detection Technology",
                    "Actionable Legal Insights"
                ]}
                stats={[
                    { count: "10k+", label: "Brands Protected", icon: <Shield size={20} /> },
                    { count: "99.9%", label: "Success Rate", icon: <TrendingUp size={20} /> },
                    { count: "24/7", label: "Monitoring", icon: <Eye size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Proactive Protection",
                    title: "Trademark Watch Services –",
                    highlightTitle: "An Overview",
                    description: [
                        "Trademark watch services help companies and individuals identify trademark infringement promptly by tracking existing and potential trademarks.",
                        "With a trademark watch in place, you get real-time alerts whenever a similar or identical mark is filed, allowing you to protect your brand’s value and exclusivity.",
                        <strong>How It Works</strong>,
                        "Trademark watching relies on automated monitoring of trademark registers combined with expert legal review. This makes it easier to detect and respond to risks before they escalate, giving brand owners early warnings and the right strategy to safeguard their intellectual property."
                    ],
                    whyIdealTitle: "Types of Watch Services",
                    whyIdealList: [
                        { title: "Identical Trademark Watch", desc: "Scans marks that are precisely the same in appearance or sound as your registered trademark." },
                        { title: "Similar Trademark Watch", desc: "Identifies marks that are not identical but are confusingly similar in appearance or sound." },
                        { title: "Watch with Opinion", desc: "Includes detailed attorney review and legal opinion on the likelihood of confusion and strategy." }
                    ]
                }}
                advantages={{
                    title: "Top Reasons to Choose Our Services",
                    subtitle: "Essential protection to maintain market dominance and brand value.",
                    list: [
                        { title: "Preserve Brand Identity", desc: "Ensures no other business registers a mark similar to yours, preventing customer confusion." },
                        { title: "Maintain Market Dominance", desc: "Addressing infringements helps secure your competitive dominance and market position." },
                        { title: "Early Risk Identification", desc: "Detect risks early to take timely legal action before your rights are compromised." },
                        { title: "Competitive Awareness", desc: "Keeps you informed about new filings, giving insights into competitor strategies." },
                        { title: "Long-term Business Value", desc: "A well-protected trademark increases overall brand value for investors and partners." },
                        { title: "Sustained Legal Exclusivity", desc: "Ensures your rights remain exclusive, reducing the risk of costly future disputes." }
                    ]
                }}
                eligibility={{
                    title: "Industries We Protect",
                    subtitle: "Key sectors where brand identity is critical and monitoring is essential.",
                    list: [
                        { title: "Fashion & Apparel", desc: "Protecting unique designs and brand names from copycats." },
                        { title: "Pharma & Healthcare", desc: "Ensuring distinctiveness in a highly regulated market." },
                        { title: "Technology & Software", desc: "Safeguarding innovation and software branding." },
                        { title: "Food & Beverage", desc: "Preventing look-alike products from misleading consumers." },
                        { title: "Media & Streaming", desc: "Protecting titles, logos, and creative assets." },
                        { title: "E-commerce & Retail", desc: "Monitoring online marketplaces for unauthorized brand use." }
                    ]
                }}
                documents={{
                    title: "What We Deliver",
                    description: "Comprehensive reporting and monitoring features for your peace of mind.",
                    list: [
                        "Timely & Professional Weekly Reports",
                        "Real-time Infringement Alerts",
                        "Detailed Analyst Reviews",
                        "AI-Backed Similarity Detection",
                        "Visual, Phonetic & Conceptual Analysis",
                        "Global / Regional Coverage Options",
                        "One-Click Legal Action Support",
                        "Customized Monitoring Packages"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "How It Works",
                    subtitle: "Seamless monitoring process to keep your brand safe.",
                    steps: [
                        { step: "01", title: "Profile Setup", desc: "We configure your watch profile based on your brand and industry." },
                        { step: "02", title: "AI Scanning", desc: "Our AI systems scan global trademark registers 24/7." },
                        { step: "03", title: "Analyst Review", desc: "Legal experts review potential matches to filter irrelevant data." },
                        { step: "04", title: "Alert Report", desc: "You receive detailed reports on conflicting marks found." },
                        { step: "05", title: "Legal Action", desc: "Our team assists with opposition filing if an infringement is detected." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Partner with VyomBiz?",
                    subtitle: "Advanced technology meets expert legal support.",
                    list: [
                        { title: "Proven Track Record", desc: "Successfully assisted thousands in protecting IP and preventing misuse." },
                        { title: "Exceptional Success Rate", desc: "99.9% success rate in accurate monitoring and timely action." },
                        { title: "24/7 Customer Support", desc: "Round-the-clock support for queries and risk reporting." },
                        { title: "AI-Backed Monitoring", desc: "Leveraging AI to detect visual and phonetic similarities with high accuracy." },
                        { title: "Copycat Watch", desc: "Detecting unauthorized use online and offline to protect reputation." },
                        { title: "Cost-Effective", desc: "Flexible packages for startups, SMEs, and large enterprises." },
                        { title: "One-Click Action", desc: "Easily connect with experts to initiate enforcement actions." },
                        { title: "Client-Centric", desc: "Personalized monitoring strategies tailored to your business needs." }
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
