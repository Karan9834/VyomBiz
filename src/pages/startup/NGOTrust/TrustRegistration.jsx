import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * TrustRegistration Page matching CorpBiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits Section
 * 5. Eligibility/Checklist
 * 6. Documents Required
 * 7. Registration Process
 * 8. Why Choose Us
 * 9. FAQ
 */

const TrustRegistration = () => {

    const faqs = [
        {
            question: "What is the time frame for Trust Registration?",
            answer: "The entire process typically takes about 6 to 8 weeks, depending on document verification and processing by the local registrar office."
        },
        {
            question: "Is it mandatory to register a Trust Deed?",
            answer: "Yes, for a trust to be legally valid and eligible for tax exemptions under sections 12A and 80G, the trust deed must be registered with the appropriate authority."
        },
        {
            question: "Can a Trust operate in multiple states?",
            answer: "Yes, a registered trust can operate across India. However, the trust deed should clearly mention the scope of its activities."
        },
        {
            question: "What is the difference between a Trustee and a Beneficiary?",
            answer: "A Trustee manages the trust and its assets, while a Beneficiary is the person or group for whose benefit the trust is created."
        },
        {
            question: "Can an NRI be a trustee in an Indian Trust?",
            answer: "Yes, an NRI can be a trustee, but certain conditions and RBI guidelines regarding foreign contributions (FCRA) may apply."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Trust Registration"
                heroTitleSuffix="in India"
                heroSubtitle="Hassle-free Trust Registration Services"
                heroDescription="Is your mind full of noble thoughts to support literature, science, and other causes of public interest? Talk to our experts for hassle-free trust registration in India."
                whatsIncludedList={[
                    "Successfully Assisted in 1000+ Trust Registration in India",
                    "Assets Worth Rs 2500 Crore are Managed by Trusts Registered with Us",
                    "Expert Legal Consultation",
                    "Dedicated Relationship Manager"
                ]}
                stats={[
                    { count: "42810+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />



            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Legally Compliant",
                    title: "Trust Registration in India –",
                    highlightTitle: "An Overview",
                    description: [
                        "The Indian Trusts Act of 1882 governs trust registration in India. A trust is a legal entity founded to oversee assets for charitable, religious, or private purposes. It mandates a Trust Deed to outline the trust's purpose, trustees, beneficiaries and the authority given to each trustee.",
                        "Trust Registration grants legal status to the trust and makes it eligible to seek tax exemptions under section 12A and 80G.",
                        <strong>What is a Trust?</strong>,
                        "A trust is a legal agreement between two parties, wherein one party, known as the trustee, manages and oversees assets or property for the benefit of another party, called the beneficiary.",
                        "Trusts offer an organized form to manage and distribute assets within the legal framework, ensuring protection and operational accountability."
                    ],
                    whyIdealTitle: "Types of Trusts",
                    whyIdealList: [
                        { title: "Public Charitable Trust", desc: "For general public benefit. Eligible for tax exemptions." },
                        { title: "Private Trust", desc: "For specific individuals or families. Regulated by Indian Trusts Act, 1882." },
                        { title: "Religious Trust", desc: "For promotion of specific religion. Governed by personal laws." },
                        { title: "Public-Cum-Private", desc: "Hybrid usage for both public welfare and specific beneficiaries." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Trust Registration",
                    subtitle: "Registering a trust provides legal structure, financial benefits, and long-term credibility.",
                    list: [
                        { title: "Tax Exemptions", desc: "Eligible for 12A & 80G registration, providing tax relief on income and donations." },
                        { title: "Legal Recognition", desc: "A registered trust is a legal entity that can sue, be sued, and hold property in its name." },
                        { title: "Social Welfare", desc: "Provides a structured platform to carry out charitable activities like education and medical relief." },
                        { title: "Assets Protection", desc: "Helps in safeguarding assets and wealth for future generations through specific clauses." },
                        { title: "Avoid Probate", desc: "Trust assets can be transferred to beneficiaries without the complex probate process." },
                        { title: "Credibility", desc: "Enhances credibility among donors, government bodies, and the public for fundraising." }
                    ]
                }}
                eligibility={{
                    title: "Trust Requirements",
                    subtitle: "Essential criteria and inclusions for a valid Trust Deed.",
                    list: [
                        { title: "Minimum 2 Trustees", desc: "At least two trustees are required to register a trust." },
                        { title: "Settlor present", desc: "The author/founder of the trust must be defined." },
                        { title: "Unique Name", desc: "The trust must have a unique name not infringing on others." },
                        { title: "Trust Objectives", desc: "Clear charitable, religious, or private objectives defined." },
                        { title: "Registered Office", desc: "A physical address in India for official communication." },
                        { title: "Trust Deed", desc: "Drafted on stamp paper mentioning all terms, parties, and assets." }
                    ]
                }}
                documents={{
                    title: "Documentation Checklist",
                    description: "Complete list of documents required for Trustees, Settlors, and the Registered Office.",
                    list: [
                        "Passport Size Photographs (Trustees & Settlor)",
                        "PAN Card Copy (Trustees & Settlor)",
                        "Aadhaar / Voter ID (Trustees & Settlor)",
                        "Latest Bank Statement (Trustees & Settlor)",
                        "Electricity / Water Bill (Office)",
                        "Rent Agreement (if rented)",
                        "NOC from Property Owner",
                        "Ownership Proof (if owned)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-1696413575b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Registration Process in 7 Days",
                    subtitle: "Simplified 5-step journey to your Trust Registration.",
                    steps: [
                        { step: "01", title: "Trust Name Selection", desc: "Choose a unique and compliant trust name." },
                        { step: "02", title: "Draft Trust Deed", desc: "Prepare legally structured trust deed with all clauses." },
                        { step: "03", title: "Documentation", desc: "Collect KYC and address proofs of all parties." },
                        { step: "04", title: "Registrar Filing", desc: "Submit deed to Sub-Registrar office with fees." },
                        { step: "05", title: "Certificate Issue", desc: "Receive registered Trust Deed (Certificate)." }
                    ]
                }}
                whyChooseUs={{
                    title: "Reasons to Trust VyomBiz",
                    subtitle: "End-to-end support for your Trust formation and compliance.",
                    list: [
                        { title: "Expert Consultation", desc: "Legal guidance on trust structure and objectives." },
                        { title: "Deed Drafting", desc: "Professional drafting of Trust Deed to avoid legal loopholes." },
                        { title: "Name Check", desc: "Ensuring the selected name is available and compliant." },
                        { title: "Fast Filing", desc: "Expedited filing process with the Registrar." },
                        { title: "Online Docs", desc: "Hassle-free online documentation support." },
                        { title: "12A & 80G Support", desc: "Assistance in obtaining tax exemption registrations." },
                        { title: "Dedicated RM", desc: "One point of contact for all your queries." },
                        { title: "Post-Reg Support", desc: "Guidance on annual compliances and amendments." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about Trust Registration"
                faqs={faqs}
            />

        </div>
    );
};

export default TrustRegistration;
