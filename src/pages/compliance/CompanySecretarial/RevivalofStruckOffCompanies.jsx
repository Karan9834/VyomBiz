import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Revival of Struck Off Companies Page matching Vyombiz layout styles
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

const RevivalofStruckOffCompanies = () => {

    const faqs = [
        {
            question: "What is the time limit for revival of a struck off company?",
            answer: "A company, member, creditor, or workman can appeal for revival within 20 years from the date of publication of the strike-off notice in the Official Gazette."
        },
        {
            question: "Who can file an appeal for revival?",
            answer: "An appeal can be filed by the Company itself, any of its members/shareholders, creditors, or workmen who are aggrieved by the order of strike off."
        },
        {
            question: "What is the difference between Strike Off and Winding Up?",
            answer: "Strike Off is a temporary removal of the name by ROC due to non-compliance, often reversible (revival). Winding Up is a permanent closure of the company involving liquidation of assets."
        },
        {
            question: "Is NCLT order necessary for revival?",
            answer: "Yes, an order from the National Company Law Tribunal (NCLT) is mandatory. The ROC will restore the name only after receiving a certified copy of the NCLT order."
        },
        {
            question: "What are the grounds for revival?",
            answer: "Common grounds include: the company having immovable property, ongoing business transactions, active bank accounts, or if it is in public interest to revive the company."
        },
        {
            question: "Can ROC strike off a company for not filing returns?",
            answer: "Yes, the ROC has the power to strike off a company if it has not filed financial statements and annual returns for a continuous period of two financial years."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Revival of Struck Off "
                heroTitleSuffix="Companies"
                heroSubtitle="Restore Your Company's Legal Status"
                heroDescription="Expert legal assistance to revive your company struck off by the ROC under Section 248. We handle the NCLT petition, representation, and restoration process efficiently."
                whatsIncludedList={[
                    "NCLT Petition Drafting",
                    "Representation at Hearings",
                    "ROC Filing (INC-28)",
                    "Annual Filing Support"
                ]}
                stats={[
                    { count: "20 Years", label: "Limitation Period", icon: <Users size={20} /> },
                    { count: "100%", label: "Legal Support", icon: <Briefcase size={20} /> },
                    { count: "Fast", label: "Restoration", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Section 252",
                    title: "Company Revival –",
                    highlightTitle: "Overview",
                    description: [
                        "When the Registrar of Companies (ROC) strikes off a company's name from the register due to non-compliance (like non-filing of returns for 2 years) or inactivity, the company is dissolved.",
                        "However, Section 252 of the Companies Act, 2013 provides a remedy. Aggrieved parties (Company, Members, Creditors) can appeal to the National Company Law Tribunal (NCLT) for restoration of the name.",
                        "Revival allows the company to become active again, recover its assets, and discharge its liabilities."
                    ],
                    whyIdealTitle: "Why Revive?",
                    whyIdealList: [
                        { title: "Recover Assets", desc: "Revival is necessary to deal with immovable property or bank balances owned by the company." },
                        { title: "Discharge Liabilities", desc: "Allows payment of pending dues to creditors and workmen." },
                        { title: "Director Disqualification", desc: "Helps in removing the disqualification of directors associated with the struck-off company." },
                        { title: "Ongoing Business", desc: "If the company was actually carrying on business, revival legitimizes its operations." },
                        { title: "Brand Value", desc: "Retain the brand name and goodwill built over earlier years." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Revival",
                    subtitle: "Why restore your company?",
                    list: [
                        { title: "Legal Status", desc: "Restores the legal existence of the entity 'as if it had not been struck off'." },
                        { title: "Asset Protection", desc: "Protects company assets from vesting in the government (Bona Vacantia)." },
                        { title: "Creditor Claims", desc: "Enables creditors to initiate legal action to recover their dues." },
                        { title: "Compliance Clean-up", desc: "Opportunity to file all pending returns and regularize status." },
                        { title: "Business Continuity", desc: "Seamless continuation of contracts, licenses, and agreements." },
                        { title: "Director Relief", desc: "Mitigates liability and potential prosecution of directors." }
                    ]
                }}
                eligibility={{
                    title: "Who Can Apply?",
                    subtitle: "Eligible Applicants",
                    list: [
                        { title: "The Company", desc: "The struck-off company itself can appeal." },
                        { title: "Members/Shareholders", desc: "Any member seeking to restore their rights." },
                        { title: "Creditors", desc: "Creditors wishing to recover debts." },
                        { title: "Workmen", desc: "Employees seeking unpaid dues." },
                        { title: "ROC", desc: "The Registrar can also apply if strike off was inadvertent." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for NCLT Petition.",
                    list: [
                        "Certificate of Incorporation & MOA/AOA",
                        "Audited Financial Statements (since strike off)",
                        "Bank Statements (showing activity)",
                        "Copy of ROC Strike-off Notice/Order",
                        "Affidavit verifying the Petition",
                        "Board Resolution authorizing filing",
                        "Proof of Registered Office",
                        "Income Tax Returns & PAN",
                        "Vakalatnama (if appointing a professional)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Revival Process",
                    subtitle: "Step-by-step Restoration",
                    steps: [
                        { step: "01", title: "Petition Drafting", desc: "Prepare appeal petition (Form NCLT-9) with facts and grounds." },
                        { step: "02", title: "Filing", desc: "File petition with NCLT Bench having jurisdiction alongside fees." },
                        { step: "03", title: "Serve Notice", desc: "Serve copy of petition to ROC and other respondents." },
                        { step: "04", title: "Hearing", desc: "NCLT hears both parties (Petitioner & ROC)." },
                        { step: "05", title: "NCLT Order", desc: "If satisfied, NCLT passes an order for restoration." },
                        { step: "06", title: "File with ROC", desc: "File certified copy of order in Form INC-28 within 30 days." },
                        { step: "07", title: "Publication", desc: "ROC publishes the order in the Official Gazette." },
                        { step: "08", title: "Pending Filings", desc: "File all overdue Annual Returns & Financial Statements." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert Corporate Legal Services",
                    list: [
                        { title: "NCLT Expertise", desc: "Experienced professionals handling NCLT matters." },
                        { title: "End-to-End Handling", desc: "From drafting petition to final ROC filing." },
                        { title: "Drafting Precision", desc: "Meticulous drafting to ensure strong grounds for revival." },
                        { title: "Representation", desc: "Professional representation during tribunal hearings." },
                        { title: "Compliance Roadmap", desc: "Guidance on regularization after revival." },
                        { title: "Cost Effective", desc: "Transparent pricing for legal and professional fees." },
                        { title: "Timely Action", desc: "Swift processing to restore status at the earliest." },
                        { title: "Legal Advisory", desc: "Strategic advice on protecting company assets." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Company Revival"
                faqs={faqs}
            />

        </div>
    );
};

export default RevivalofStruckOffCompanies;
