import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const CompanyRegistrationMauritius = () => {

    const faqs = [
        {
            question: "Why is Mauritius considered a good place for business registration?",
            answer: "Mauritius offers a favorable tax regime, political and economic stability, access to international markets, and a strong legal framework, making it an ideal destination for global business setup."
        },
        {
            question: "What is the difference between a GBC and an Authorized Company?",
            answer: "A Global Business Company (GBC) is resident in Mauritius for tax purposes and can access tax treaties, while an Authorized Company is treated as non-resident for tax purposes and is suitable for business conducted entirely outside Mauritius."
        },
        {
            question: "What is the minimum requirement for directors and shareholders?",
            answer: "Generally, a minimum of one director and one shareholder is required. For a GBC, at least two directors resident in Mauritius are required."
        },
        {
            question: "Can a foreigner own 100% of a company in Mauritius?",
            answer: "Yes, Mauritius allows 100% foreign ownership in most business sectors."
        },
        {
            question: "How long does it take to register a company in Mauritius?",
            answer: "The registration process is efficient and can typically be completed within 1 week, subject to document submission and approval."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Company Registration in"
                heroTitleSuffix="Mauritius"
                heroSubtitle="Start Your Global Business Today"
                heroDescription="Are you an entrepreneur looking to register your business in Mauritius? Get Vyombiz™ expert assistance for company registration in Mauritius and benefit from 100% foreign ownership."
                whatsIncludedList={[
                    "All-in-one Registration Package",
                    "Document Verification in 1 Day",
                    "Corporate Bank Account Opening",
                    "Unlimited Name Availability Check",
                    "1 Yr Company Secretarial Service"
                ]}
                stats={[
                    { count: "43729+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Global Hub",
                    title: "Company Registration in Mauritius –",
                    highlightTitle: "An Overview",
                    description: [
                        "Mauritius is strategically located in the Indian Ocean, connecting businesses with African, Asian, and European markets. It is known not only for its scenic locales but also for its stable political environment and robust economic policies.",
                        "One of the most significant benefits of company registration in Mauritius is that it offers low corporate tax rates, zero capital gains tax, and double taxation avoidance agreements with different countries.",
                        <strong>Why Register in Mauritius?</strong>,
                        "Mauritius operates a well-regulated and structured financial services industry, supporting businesses operating within the banking, investment, and professional advisory services industry.",
                        "Business setup in Mauritius is a prompt, transparent, and simple process, facilitating entrepreneurs to start their ventures without unnecessary delays."
                    ],
                    whyIdealTitle: "Types of Business Structures",
                    whyIdealList: [
                        { title: "Global Business Company (GBC)", desc: "Ideal for conducting international business activities leveraging tax treaties." },
                        { title: "Authorized Company", desc: "For businesses primarily managed and controlled outside Mauritius with non-resident tax status." },
                        { title: "Domestic Company", desc: "Suitable for businesses operating within the territories of Mauritius." },
                        { title: "Branch of a Foreign Company", desc: "Allows an overseas company to operate in Mauritius without a separate legal entity." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Business Setup",
                    subtitle: "Mauritius offers a business-friendly environment with numerous advantages for global investors.",
                    list: [
                        { title: "Favourable Tax Regime", desc: "Low corporate tax rates, zero capital gains tax, and extensive DTAA network." },
                        { title: "Political Stability", desc: "Stable political environment and robust economic policies ensuring business security." },
                        { title: "Ease of Incorporation", desc: "Transparent and simple process facilitating quick launch of business operations." },
                        { title: "International Access", desc: "Strategic location connecting African, Asian, and European markets." },
                        { title: "Robust Financial Sector", desc: "Well-regulated financial services industry supporting banking and investment." },
                        { title: "100% Foreign Ownership", desc: "Allows full foreign ownership in most business sectors." }
                    ]
                }}
                eligibility={{
                    title: "Requirements for Incorporation",
                    subtitle: "Key checklist for setting up your company in Mauritius.",
                    list: [
                        { title: "Shareholders", desc: "Minimum one shareholder required (individual or corporate)." },
                        { title: "Directors", desc: "Minimum one director required. GBCs require two local directors." },
                        { title: "Registered Office", desc: "Must have a physical registered office address in Mauritius." },
                        { title: "Business Plan", desc: "A detailed business plan describing activities and operations." },
                        { title: "Due Diligence", desc: "KYC documents for all directors and shareholders." },
                        { title: "Company Name", desc: "Unique name reservation approval from the Registrar." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Essential documents required for company formation in Mauritius.",
                    list: [
                        "Certified Passport Copies (All directors & shareholders)",
                        "Proof of Residential Address (Utility bills/bank statements)",
                        "Consent Forms (Signed by directors shareholders)",
                        "Detailed Business Plan",
                        "Bank Reference Letter",
                        "Proof of Registered Office Address",
                        "Constitution (Memorandum & Articles of Association)",
                        "Due Diligence Documents for corporate shareholders"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process in 5 Steps",
                    subtitle: "Streamlined journey to your Mauritius Company Incorporation.",
                    steps: [
                        { step: "01", title: "Structure & Name", desc: "Choose suitable structure and reserve unique company name." },
                        { step: "02", title: "Document Prep", desc: "Collect KYC, proofs, and draft Memorandum & Articles of Association." },
                        { step: "03", title: "Submit Application", desc: "File incorporation forms and documents with Registrar of Companies." },
                        { step: "04", title: "Incorporation", desc: "Receive Certificate of Incorporation and open corporate bank account." },
                        { step: "05", title: "Compliance", desc: "Register for Tax (TAN), VAT if applicable, and ensure ongoing compliance." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Your trusted partner for seamless global business expansion.",
                    list: [
                        { title: "Expert Guidance", desc: "Comprehensive advice on the best business structure for your needs." },
                        { title: "Quick Turnaround", desc: "Efficient processing to get your business running in ~1 week." },
                        { title: "End-to-End Support", desc: "From name reservation to bank account opening and tax registration." },
                        { title: "Compliance Assurance", desc: "Ensuring all legal and regulatory requirements are met." },
                        { title: "Global Expertise", desc: "Deep understanding of international business laws and treaties." },
                        { title: "Dedicated Manager", desc: "One point of contact for personalized service." },
                        { title: "Document Handling", desc: "Complete assistance with documentation and verification." },
                        { title: "Post-Setup Services", desc: "Ongoing support for annual filings and secretarial services." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Mauritius Company Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default CompanyRegistrationMauritius;
