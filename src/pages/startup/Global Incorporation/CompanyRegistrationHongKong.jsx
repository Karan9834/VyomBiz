import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const CompanyRegistrationHongKong = () => {

    const faqs = [
        {
            question: "What is the corporate tax rate in Hong Kong?",
            answer: "Hong Kong follows a two-tiered profits tax regime: 8.25% on the first HK$2 million of profits, and 16.5% on the remainder. There is no tax on capital gains, VAT, or dividends."
        },
        {
            question: "Can a foreigner own 100% of a Hong Kong company?",
            answer: "Yes, 100% foreign ownership is allowed. Directors and shareholders can be of any nationality and do not need to reside in Hong Kong."
        },
        {
            question: "Do I need a local company secretary?",
            answer: "Yes, every Hong Kong company must appoint a Company Secretary who is either a local individual or a body corporate with a registered office in Hong Kong."
        },
        {
            question: "How long does it take to register a company?",
            answer: "For online applications, the process is very fast and can be completed in as little as 1 day, provided all documents are in order."
        },
        {
            question: "Is it mandatory to visit Hong Kong for incorporation?",
            answer: "No, you do not need to be physically present in Hong Kong. The entire incorporation process can be handled remotely."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration in"
                heroTitleSuffix="Hong Kong"
                heroSubtitle="Premier Global Business Hub"
                heroDescription="Are you seeking company registration in Hong Kong? Business setup in Hong Kong offers a strategic gateway to Mainland China and Asian markets with a low-tax regime."
                whatsIncludedList={[
                    "Registered Address for 1 Year",
                    "Business Registration Certificate",
                    "Company Secretarial Services",
                    "Certificate of Incorporation",
                    "Neobank Account Opening Support"
                ]}
                stats={[
                    { count: "42865+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Financial Hub",
                    title: "Company Registration in Hong Kong –",
                    highlightTitle: "An Overview",
                    description: [
                        "Hong Kong is one of the world's leading financial centers and a major commercial hub. Its strategic location, low taxation, and free-market economy make it an ideal choice for international businesses.",
                        "The city serves as a perfect gateway to Mainland China, boosted by the Closer Economic Partnership Agreement (CEPA), which provides easy access to China’s vast market.",
                        <strong>Why Hong Kong?</strong>,
                        "Hong Kong offers a simple and transparent tax system with no Value Added Tax (VAT), no Goods and Services Tax (GST), and no tax on dividends or capital gains.",
                        "A Private Limited Company is the most popular business structure for foreign investors due to its separate legal entity status and limited liability protection."
                    ],
                    whyIdealTitle: "Types of Business Formalities",
                    whyIdealList: [
                        { title: "Private Limited Company", desc: "Most common structure. Separate legal entity with limited liability for shareholders." },
                        { title: "Branch Office", desc: "Extension of a foreign parent company. Not a separate legal entity." },
                        { title: "Sole Proprietorship", desc: "Simplest form, but the owner has unlimited liability for business debts." },
                        { title: "Representative Office", desc: "For market research and liaison activities only; cannot engage in profit-making business." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Incorporation",
                    subtitle: "Hong Kong offers a competitive edge with its pro-business environment.",
                    list: [
                        { title: "Low Tax Regime", desc: "8.25% tax on first HK$2M profits, 16.5% on remainder. No VAT or capital gains tax." },
                        { title: "Gateway to China", desc: "CEPA agreement offers preferential access to the Mainland Chinese market." },
                        { title: "100% Foreign Ownership", desc: "Full ownership allowed for foreigners without the need for a local partner." },
                        { title: "Ease of Doing Business", desc: "Consistently ranked among the top places globally for ease of business setup." },
                        { title: "Global Financial Hub", desc: "Access to world-class banking, financial services, and investment capital." },
                        { title: "Strong Legal System", desc: "Based on English Common Law, providing strong protection for intellectual property." }
                    ]
                }}
                eligibility={{
                    title: "Requirements for Setup",
                    subtitle: "Essential criteria to register a company in Hong Kong.",
                    list: [
                        { title: "Company Name", desc: "Must be unique and not infringe on existing trademarks." },
                        { title: "Directors", desc: "Minimum one director (individual) of any nationality, resident or non-resident." },
                        { title: "Shareholders", desc: "Minimum one shareholder (person or corporate) of any nationality." },
                        { title: "Company Secretary", desc: "Must be a local individual or a body corporate with a registered office in HK." },
                        { title: "Registered Office", desc: "Must handle a physical address in Hong Kong (PO Box not allowed)." },
                        { title: "Share Capital", desc: "Minimum issued share capital is usually HK$1." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Documents required for a smooth registration process.",
                    list: [
                        "Incorporation Form (NNC1)",
                        "Copy of Articles of Association (AOA)",
                        "Notice to Business Registration Office (IRBR1)",
                        "Passport Copies of Directors & Shareholders",
                        "Address Proof of Directors & Shareholders",
                        "Company Secretary Details",
                        "Registered Office Address Proof"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1506318164473-2dfd3ede3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process in 5 Steps",
                    subtitle: "Fast and efficient path to owning a Hong Kong company.",
                    steps: [
                        { step: "01", title: "Name Search", desc: "Check availability of proposed company name in Companies Registry." },
                        { step: "02", title: "Prepare Documents", desc: "Draft AOA and gather KYC documents for directors/shareholders." },
                        { step: "03", title: "Submit Application", desc: "File NNC1 and other forms with the Companies Registry." },
                        { step: "04", title: "Certificate Issuance", desc: "Receive Certificate of Incorporation and Business Registration Certificate." },
                        { step: "05", title: "Post-Incorp Setup", desc: "Open corporate bank account and apply for any specific business licenses." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert support for your Hong Kong business expansion.",
                    list: [
                        { title: "One-Stop Solution", desc: "We handle everything from incorporation to company secretarial duties." },
                        { title: "Fast Incorporation", desc: "Leverage our digital capabilities for rapid 1-day registration." },
                        { title: "Bank Account Support", desc: "Assistance with opening neobank or traditional bank accounts." },
                        { title: "Tax Compliance", desc: "Guidance on profit tax returns and annual audits." },
                        { title: "Registered Address", desc: "We can provide a prestigious registered office address." },
                        { title: "Company Secretary", desc: "Professional corporate secretarial services included." },
                        { title: "Global Reach", desc: "Part of a network enabling cross-border business growth." },
                        { title: "Transparent Pricing", desc: "Clear fee structure with no hidden charges." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Hong Kong Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationHongKong;