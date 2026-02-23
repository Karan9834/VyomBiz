import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Cheque Bounce Notice Page matching Vyombiz layout styles
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

const ChequeBounceNotice = () => {

    const faqs = [
        {
            question: "What is a Cheque Bounce Notice?",
            answer: "A legal notice sent by the payee to the drawer demanding payment of the dishonored cheque amount within 15 days, under Section 138 of the Negotiable Instruments Act, 1881."
        },
        {
            question: "What is the time limit to send the notice?",
            answer: "The notice must be sent within 30 days from the date of receiving the 'Cheque Return Memo' from the bank."
        },
        {
            question: "What happens if the drawer does not pay after notice?",
            answer: "If the drawer fails to pay within 15 days of receiving the notice, the payee can file a criminal complaint in court within the next 30 days."
        },
        {
            question: "What is the punishment for cheque bounce?",
            answer: "Punishment can include imprisonment for up to 2 years, or a monetary penalty of up to twice the cheque amount, or both."
        },
        {
            question: "Can I file a case for a lost cheque?",
            answer: "No, a physical original cheque is mandatory to file a case. However, other legal remedies might be available for debt recovery."
        },
        {
            question: "Is jurisdiction important for filing the case?",
            answer: "Yes, the case is generally filed in the court having jurisdiction over the branch where the payee maintains the account where the cheque was presented."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Cheque Bounce "
                heroTitleSuffix="Notice"
                heroSubtitle="Legal Steps to Recover Your Money"
                heroDescription="Professional drafting and sending of Cheque Bounce Notices under Section 138 of the NI Act. We help you recover your dues legally and efficiently with expert legal support."
                whatsIncludedList={[
                    "Notice Drafting",
                    "Legal Consultation",
                    "Postal Dispatch Guidance",
                    "Case Filing Support"
                ]}
                stats={[
                    { count: "12000+", label: "Notices Sent", icon: <Users size={20} /> },
                    { count: "98%", label: "Success Rate", icon: <Briefcase size={20} /> },
                    { count: "24hrs", label: "Draft Ready", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Section 138 NI Act",
                    title: "Cheque Bounce Notice –",
                    highlightTitle: "Overview",
                    description: [
                        "Cheque Bounce (Dishonour of Cheque) is a criminal offence in India under Section 138 of the Negotiable Instruments Act, 1881. It occurs when a cheque is returned unpaid by the bank due to reasons like insufficient funds or signature mismatch.",
                        "Sending a formal Legal Notice to the drawer is the first and mandatory step to initiate legal proceedings. The notice must demand the payment of the cheque amount within 15 days.",
                        "Failure to pay after receiving the notice gives the payee the right to file a criminal complaint against the defaulter in the appropriate court."
                    ],
                    whyIdealTitle: "Legal Implications",
                    whyIdealList: [
                        { title: "Criminal Offence", desc: "Cheque bounce is a criminal act punishable by law." },
                        { title: "Imprisonment", desc: "Can lead to jail time of up to 2 years." },
                        { title: "Heavy Penalty", desc: "Fine can be up to twice the cheque amount." },
                        { title: "Credit Impact", desc: "Negatively affects the CIBIL score and credibility." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Sending a Legal Notice",
                    subtitle: "Why it is crucial",
                    list: [
                        { title: "Statutory Requirement", desc: "Mandatory step before filing a court case." },
                        { title: "Payment Opportunity", desc: "Gives the defaulter a final chance to settle dues." },
                        { title: "Legal Evidence", desc: "The notice serves as crucial evidence in court." },
                        { title: "Faster Recovery", desc: "Often leads to out-of-court settlement due to fear of legal action." },
                        { title: "Clear Demand", desc: "Formally states the debt and consequences of non-payment." },
                        { title: "Professional Approach", desc: "Shows seriousness in recovering the pending amount." }
                    ]
                }}
                eligibility={{
                    title: "Grounds for Dishonour",
                    subtitle: "Common reasons for cheque bounce",
                    list: [
                        { title: "Insufficient Funds", desc: "Balance in the account is less than the cheque amount." },
                        { title: "Signature Mismatch", desc: "Drawer's signature differs from bank records." },
                        { title: "Account Closed", desc: "Drawer has closed the account before cheque presentation." },
                        { title: "Stop Payment", desc: "Drawer has instructed the bank to stop payment." },
                        { title: "Stale Cheque", desc: "Cheque presented after validity period (3 months)." },
                        { title: "Discrepancy", desc: "Difference in amount in words and figures." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for legal action.",
                    list: [
                        "Original Dishonoured Cheque",
                        "Cheque Return Memo (Original) from Bank",
                        "Copy of Legal Notice sent",
                        "Postal Receipt of Notice sending",
                        "Tracking Report/Delivery Proof",
                        "Invoice/Bill against which cheque was issued",
                        "Correspondence with the defaulter"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Recovery Process",
                    subtitle: "Step-by-step legal procedure",
                    steps: [
                        { step: "01", title: "Cheque Return", desc: "Bank returns the cheque with a memo stating the reason." },
                        { step: "02", title: "Send Notice", desc: "Send legal notice within 30 days of return memo." },
                        { step: "03", title: "Wait Period", desc: "Give 15 days time to the drawer to make payment." },
                        { step: "04", title: "File Complaint", desc: "If unpaid, file a complaint in court within 30 days." },
                        { step: "05", title: "Court Proceedings", desc: "Summons, trial, and judgment by the magistrate." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert Legal Recovery Services",
                    list: [
                        { title: "Experienced Lawyers", desc: "Network of lawyers specializing in NI Act cases." },
                        { title: "Precise Drafting", desc: "Notices drafted to meet all legal requirements." },
                        { title: "End-to-End Support", desc: "From notice drafting to court representation." },
                        { title: "Quick Action", desc: "Immediate drafting to ensure limitation period isn't missed." },
                        { title: "Cost Effective", desc: "Transparent pricing for notices and litigation." },
                        { title: "Track Record", desc: "High success rate in debt recovery cases." },
                        { title: "Consultation", desc: "Expert advice on the best course of action." },
                        { title: "Peace of Mind", desc: "We handle the legal complexities for you." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Cheque Bounce"
                faqs={faqs}
            />

        </div>
    );
};

export default ChequeBounceNotice;
