import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Legal Notice Page matching Vyombiz layout styles
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

const LegalNotice = () => {

    const faqs = [
        {
            question: "Is issuance of a legal notice mandatory?",
            answer: "Under Section 80 of the Code of Civil Procedure, 1908, it is mandatory to serve a legal notice before filing a suit against the Government or Public Officer. In other civil cases, it is not strictly mandatory but highly recommended to establish a cause of action."
        },
        {
            question: "What is the time period to reply to a legal notice?",
            answer: "The time period varies from case to case. It can range from 15 days in some cases to 30 days (e.g., in cheque bounce cases). In consumer complaints, it can be up to 45 days."
        },
        {
            question: "What happens if there is no reply to a legal notice?",
            answer: "If the opposite party fails to reply within the stipulated time, it can be used against them in court. It shows they have casually taken the notice, and you can proceed with filing a legal suit."
        },
        {
            question: "Can I draft a legal notice myself?",
            answer: "Yes, you can. However, since the wording is crucial and becomes part of the court record, it is highly advisable to get it drafted by an experienced lawyer to ensure all legal ingredients are present."
        },
        {
            question: "What is a Show Cause Notice?",
            answer: "A show-cause notice is issued by an authority (like an employer or govt body) asking a person to explain ('show cause') why a particular disciplinary action should not be taken against them."
        },
        {
            question: "Can a landlord send a legal notice for eviction?",
            answer: "Yes, if a tenant refuses to vacate the premises or breaches the rental agreement, the landlord can send a legal notice demanding eviction and payment of dues."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Legal Notice"
                heroTitleSuffix="Drafting"
                heroSubtitle="Formal Intimation Before Legal Action"
                heroDescription="Send a professionally drafted Legal Notice to resolve disputes, recover dues, or initiate civil proceedings. We ensure precise legal wording and timely service."
                whatsIncludedList={[
                    "Case Fact Analysis",
                    "Professional Legal Drafting",
                    "Dispatch via Registered AD",
                    "Reply Management"
                ]}
                stats={[
                    { count: "15000+", label: "Notices Sent", icon: <Users size={20} /> },
                    { count: "1000+", label: "Legal Experts", icon: <Briefcase size={20} /> },
                    { count: "99%", label: "Delivery Rate", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Legal Communication",
                    title: "Legal Notice –",
                    highlightTitle: "Overview",
                    description: [
                        "A Legal Notice is a formal written communication sent by a person or entity to another, notifying them of the intention to undertake legal proceedings against them. It serves as a final warning to the receiver to fulfill a certain condition if they wish to avoid a court case.",
                        "It acts as a tool for negotiation, often leading to an out-of-court settlement. It makes the other party aware of your grievance and your clear intention to seek legal remedy.",
                        "A legal notice must contain all material facts, the relief sought, and the legal basis for the claim."
                    ],
                    whyIdealTitle: "Key Objectives",
                    whyIdealList: [
                        { title: "Formal Intimation", desc: "Officially informs the opponent about the grievance." },
                        { title: "Opportunity to Settle", desc: "Gives the opponent a chance to resolve the issue amicably without litigation." },
                        { title: "Evidence", desc: "Acts as written proof that you attempted to resolve the matter before going to court." },
                        { title: "Legal Requirement", desc: "Mandatory in certain cases like Section 138 (Cheque Bounce) and suits against Govt." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Sending a Legal Notice",
                    subtitle: "Why you should opt for a legal notice first",
                    list: [
                        { title: "Cost Effective", desc: "Much cheaper than a full-fledged court trial and often resolves the issue." },
                        { title: "Saves Time", desc: "Quick resolution if the party agrees to settle upon receiving the notice." },
                        { title: "Clear Record", desc: "Creates a formal record of your claim and the opponent's denial/acceptance." },
                        { title: "Psychological Impact", desc: "Creates necessary pressure on the wrongdoer to comply." },
                        { title: "Clarity", desc: "Removes uncertainty regarding your intentions." },
                        { title: "Out of Court Settlement", desc: "Encourages mutual compromise and settlement." }
                    ]
                }}
                eligibility={{
                    title: "When to Send a Legal Notice?",
                    subtitle: "Common situations requiring a Legal Notice",
                    list: [
                        { title: "Cheque Bounce", desc: "Under Section 138 of NI Act, sending a notice within 30 days is mandatory." },
                        { title: "Property Disputes", desc: "For eviction, possession, or title disputes." },
                        { title: "Consumer Complaints", desc: "For defective goods or deficiency in services." },
                        { title: "Recovery of Money", desc: "For unpaid invoices, loans, or salaries." },
                        { title: "Breach of Contract", desc: "When a party fails to perform their contractual obligations." },
                        { title: "Matrimonial Issues", desc: "For divorce, restitution of conjugal rights, or custody." },
                        { title: "Employment Issues", desc: "Wrongful termination, unpaid dues, or harassment." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Information needed to draft a strong Legal Notice.",
                    list: [
                        "Copy of the Agreement/Contract (if any)",
                        "Proof of Default (Unpaid Invoice, Bounced Cheque memo)",
                        "Correspondence history (Emails, Letters, Chats)",
                        "Name and Address of the Sender",
                        "Name and Address of the Person/Entity to be sent to",
                        "Specific details of the grievance",
                        "Computation of the amount claimable (if monetary)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Procedure to Send Notice",
                    subtitle: "Step-by-step guide to sending a Legal Notice",
                    steps: [
                        { step: "01", title: "Consult Lawyer", desc: "Discuss the facts and strategy with an expert lawyer." },
                        { step: "02", title: "Drafting", desc: "Lawyer drafts the notice stating facts, grievance, and relief sought." },
                        { step: "03", title: "Review", desc: "Review the draft to ensure all details are accurate." },
                        { step: "04", title: "Dispatch", desc: "Send the notice via Registered Post with Acknowledgement Due (AD)." },
                        { step: "05", title: "Wait for Reply", desc: "Wait for the stipulated time (usually 15-30 days) for a response." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Professional Legal Drafting Services",
                    list: [
                        { title: "Expert Drafters", desc: "Experienced lawyers who know the nuances of legal language." },
                        { title: "Customized Drafting", desc: "Notices tailored to the specific facts of your case." },
                        { title: "Timely Service", desc: "Quick turnaround time to ensure no delay in your legal remedy." },
                        { title: "Strategic Advice", desc: "We advise on whether a notice is the best route or not." },
                        { title: "Affordable", desc: "Transparent pricing with no hidden charges." },
                        { title: "Post-Notice Support", desc: "Guidance on next steps if the notice is ignored." },
                        { title: "Confidentiality", desc: "Your data and case details are kept strictly confidential." },
                        { title: "Online Convenience", desc: "Entire process from drafting to dispatch handled online." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Legal Notices"
                faqs={faqs}
            />

        </div>
    );
};

export default LegalNotice;
