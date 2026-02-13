import React from "react";
import { ShieldAlert, Gavel, Scale, FileText } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * TrademarkOpposition Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Reasons for Opposition (Advantages)
 * 5. Eligibility Section
 * 6. Documents/Form TM-5 Details
 * 7. Procedure Steps
 * 8. Why Choose Us
 * 9. FAQ
 */

const TrademarkOpposition = () => {

    const faqs = [
        {
            question: "What exactly is Trademark Opposition?",
            answer: "A trademark opposition is a legal proceeding where a third party objects to the registration of a trademark that has been accepted and published in the Trademark Journal, usually to protect their own brand reputation."
        },
        {
            question: "What is the time limit to file a trademark opposition?",
            answer: "The notice of opposition must be filed within four months (3 months + 1 month extension) from the date the trademark was advertised in the Trademark Journal."
        },
        {
            question: "Who can file a trademark opposition?",
            answer: "Section 21 of the Trademark Act allows any person to file an opposition, regardless of personal or business interest. This includes customers, competitors, or members of the public."
        },
        {
            question: "What is the cost of filing a trademark opposition?",
            answer: "The government fee for filing a Notice of Opposition (Form TM-O) typically ranges between ₹2,700 to ₹3,000 depending on the mode of filing, excluding professional fees."
        },
        {
            question: "What happens if the applicant does not file a counter-statement?",
            answer: "If the trademark applicant fails to file a counter-statement within two months of receiving the opposition notice, the trademark application is deemed abandoned."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Trademark Opposition"
                heroTitleSuffix="Services"
                heroSubtitle="Protect Your Brand from Infringement"
                heroDescription="Trademark opposition is a vital tool to stop conflicting marks from being registered. If you believe a published trademark infringes on your rights, Vyombiz helps you file a strong opposition to safeguard your brand's integrity."
                whatsIncludedList={[
                    "Drafting Notice of Opposition",
                    "Filing Counter-Statements",
                    "representation at Hearings",
                    "Expert Legal Strategy"
                ]}
                stats={[
                    { count: "4 Months", label: "Filing Window", icon: <Scale size={20} /> },
                    { count: "1000+", label: "Oppositions Filed", icon: <Gavel size={20} /> },
                    { count: "Expert", label: "Legal Team", icon: <ShieldAlert size={20} /> }
                ]}
            />



            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Brand Defense",
                    title: "Trademark Opposition –",
                    highlightTitle: "An Overview",
                    description: [
                        "A trademark opposition is a formal objection filed by a third party against the registration of a trademark that has been accepted by the Registrar and published in the Trademark Journal.",
                        "It allows brand owners and the public to prevent the registration of marks that are identical, similar, or likely to cause confusion with existing marks.",
                        "The opposition must be filed within a strict timeline of 4 months from the date of advertisement in the journal."
                    ],
                    whyIdealTitle: "Why File an Opposition?",
                    whyIdealList: [
                        { title: "Prevent Conclusion", desc: "Stop similar marks from entering the market and causing consumer confusion." },
                        { title: "Protect Reputation", desc: "Safeguard your brand's goodwill from being diluted or misused." },
                        { title: "Legal Right", desc: "Exercise your statutory right to oppose under Section 21 of the Trademarks Act." },
                        { title: "Maintain Exclusivity", desc: "Ensure your trademark remains unique and distinctive in your industry." }
                    ]
                }}
                advantages={{
                    title: "Grounds for Opposition",
                    subtitle: "Valid reasons to oppose a trademark application in India.",
                    list: [
                        { title: "Similarity", desc: "The mark is identical or deceptively similar to an existing registered trademark." },
                        { title: "Descriptiveness", desc: "The mark lacks distinctiveness or is purely descriptive of the goods/services." },
                        { title: "Bad Faith", desc: "The application was made in bad faith or with dishonest intentions." },
                        { title: "Public Confusion", desc: "The mark is likely to deceive the public or cause confusion." },
                        { title: "Prohibited Marks", desc: "The mark contains matter that is illegal, offensive, or prohibited under the Emblems and Names Act." },
                        { title: "Customary Language", desc: "The mark consists of terms common in current language or established trade practices." }
                    ]
                }}
                eligibility={{
                    title: "Who Can Oppose?",
                    subtitle: "Eligibility criteria for filing a trademark opposition.",
                    list: [
                        { title: "Any Person", desc: "The law allows 'any person' to tile an opposition, not just registered owners." },
                        { title: "Prior Users", desc: "Owners of unregistered marks who have been using the mark prior to the applicant." },
                        { title: "Registered Owners", desc: "Proprietors of existing registered trademarks." },
                        { title: "Customers/Public", desc: "Members of the public who believe the mark is deceptive." },
                        { title: "Competitors", desc: "Business rivals wishing to prevent unfair monopoly over common terms." }
                    ]
                }}
                documents={{
                    title: "Form TM-5 & Requirements",
                    description: "Details required to file a Notice of Opposition (Form TM-O/TM-5).",
                    list: [
                        "Details of the Opponent (Name, Address)",
                        "Details of the Applicant & Application Number",
                        "Grounds of Opposition (Detailed Statement)",
                        "Verification by the Opponent",
                        "Power of Attorney (if filed by agent)",
                        "Evidence of Prior Use (if applicable)",
                        "Details of Conflicting Mark",
                        "Fees Receipt"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Opposition Procedure",
                    subtitle: "Step-by-step legal process for trademark opposition.",
                    steps: [
                        { step: "01", title: "Notice of Opposition", desc: "File Form TM-O within 4 months of journal advertisement." },
                        { step: "02", title: "Counter-Statement", desc: "Applicant must file a counter-statement (Form TM-O) within 2 months of receiving the notice." },
                        { step: "03", title: "Evidence by Opponent", desc: "Opponent files evidence in support of opposition (Rule 45) within 2 months." },
                        { step: "04", title: "Evidence by Applicant", desc: "Applicant files evidence in support of application (Rule 46) within 2 months." },
                        { step: "05", title: "Hearing", desc: "Registrar conducts a hearing where both parties present their arguments." },
                        { step: "06", title: "Final Decision", desc: "Registrar passes an order either allowing the opposition or registering the trademark." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Expert legal representation for your trademark disputes.",
                    list: [
                        { title: "Strategic Defense", desc: "Customized legal strategies to strengthen your opposition case." },
                        { title: "Experienced Attorneys", desc: "Team of specialized IP lawyers with years of litigation experience." },
                        { title: "Document Drafting", desc: "Precise drafting of notices, counter-statements, and evidence affidavits." },
                        { title: "Timely Filing", desc: "Ensuring all documents are filed within statutory deadlines to avoid abandonment." },
                        { title: "Hearing Representation", desc: "Strong representation before the Trademark Registrar and IPAB." },
                        { title: "Cost-Effective", desc: "Transparent pricing models tailored to your business needs." },
                        { title: "Regular Updates", desc: "Keep you informed at every stage of the legal proceedings." },
                        { title: "Comprehensive Support", desc: "Assistance from filing the notice to the final order." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries regarding Trademark Opposition"
                faqs={faqs}
            />

        </div>
    );
};

export default TrademarkOpposition;
