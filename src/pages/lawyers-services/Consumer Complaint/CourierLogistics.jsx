import React from "react";
import { Truck, Package, Clock, ShieldAlert, FileText } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Courier Logistics Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Objectives Section
 * 5. Advantages Section
 * 6. Documents Required
 * 7. Reasons to File
 * 8. Process (Why Vakilsearch/Vyombiz)
 * 9. FAQ
 */

const CourierLogistics = () => {

    const faqs = [
        {
            question: "How will I know if my complaint has been resolved?",
            answer: "You will receive official communication from the consumer forum or the courier company regarding the status of your complaint. Additionally, if you use our service, we will keep you updated on every development."
        },
        {
            question: "Can I claim compensation for a lost package?",
            answer: "Yes, you can claim compensation for the value of the lost item as well as for any mental harassment or financial loss caused by the negligence of the courier service."
        },
        {
            question: "What proofs are needed to file a complaint?",
            answer: "You need proof of booking, tracking details, photographs of damaged goods (if applicable), and correspondence with the courier company."
        },
        {
            question: "Is it necessary to send a legal notice first?",
            answer: "While not mandatorily required by law, sending a legal notice is highly recommended as it often resolves the issue without needing to go to court."
        },
        {
            question: "How long does the consumer court take to decide?",
            answer: "Consumer courts aim to resolve cases within 3 to 5 months, but it can take longer depending on the specifics of the case and the court's workload."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Courier And Logistics"
                heroTitleSuffix="Consumer Complaint"
                heroSubtitle="Facing Issues with Delayed Deliveries or Lost Packages?"
                heroDescription="Get expert help to resolve your complaints smoothly and efficiently. We assist you in holding courier companies accountable for service failures."
                whatsIncludedList={[
                    "Lost Package Recovery",
                    "Delayed Delivery Compensation",
                    "Damaged Goods Claims",
                    "Legal Notice Drafting"
                ]}
                stats={[
                    { count: "95%", label: "Success Rate", icon: <ShieldAlert size={20} /> },
                    { count: "1K+", label: "Complaints Filed", icon: <Package size={20} /> },
                    { count: "Fast", label: "Resolution", icon: <Clock size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Logistics Issues",
                    title: "Courier Complaints –",
                    highlightTitle: "An Overview",
                    description: [
                        "Courier and Logistics services are essential for timely delivery, but issues like delays, lost items, and damages are common.",
                        "Filing a formal consumer complaint allows you to officially report service failures and seek redressal.",
                        "Documentation such as tracking numbers, receipts, and communication records is crucial for a strong case."
                    ],
                    whyIdealTitle: "Objectives of Filing a Complaint",
                    whyIdealList: [
                        { title: "Seeking Solutions", desc: "Find effective resolutions for delays, damages, or poor support." },
                        { title: "Protecting Rights", desc: "Hold companies accountable and protect your consumer rights." },
                        { title: "Enhancing Quality", desc: "Push for improvements in service reliability and performance." },
                        { title: "Ensuring Accountability", desc: "Make companies take responsibility for their negligence." }
                    ]
                }}
                advantages={{
                    title: "Advantages of Filing",
                    subtitle: "Why you should not stay silent on service failures.",
                    list: [
                        { title: "Seek Justice", desc: "Pursue justice for unfair treatment or significant service issues." },
                        { title: "Promote Positive Change", desc: "Encourage companies to improve their practices and resolve issues." },
                        { title: "Protect Your Rights", desc: "Safeguard your rights ensuring fair treatment and reliable service." },
                        { title: "Hold Accountable", desc: "Ensure companies acknowledge and correct their errors." },
                        { title: "Compensation", desc: "Claim damages for financial loss and mental agony." },
                        { title: "Raise Awareness", desc: "Highlight common issues to help other consumers." }
                    ]
                }}
                eligibility={{
                    title: "Common Reasons to File",
                    subtitle: "Situations where a consumer complaint is valid.",
                    list: [
                        { title: "Delivery Delays", desc: "Failure to deliver the package within the promised timeframe." },
                        { title: "Wrong Delivery", desc: "delivering an incorrect item, quantity, or to a wrong address." },
                        { title: "Service Quality", desc: "Service did not meet reasonable standards (e.g., rude behavior)." },
                        { title: "Payment Problems", desc: "Incorrect charges, hidden fees, or payment disputes." },
                        { title: "Confidentiality Breach", desc: "Mishandling of personal information or private goods." },
                        { title: "Missing Notification", desc: "Failure to inform the client about delivery status or delays." },
                        { title: "Instruction Failure", desc: "Ignoring special delivery instructions provided by the sender." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Essential documents to support your courier complaint.",
                    list: [
                        "Agreements or Contracts",
                        "Proof of Payment (Receipts/Invoices)",
                        "Correspondence (Emails/Letters)",
                        "Supporting Documentation (Photos/Tracking Info)",
                        "Identification Documents",
                        "Completed Complaint Form"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1566576912906-2531d013e9ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Our Resolution Process",
                    subtitle: "How Vyombiz helps resolve your logistics grievances.",
                    steps: [
                        { step: "01", title: "Document Collection", desc: "We gather all proofs like tracking info and receipts." },
                        { step: "02", title: "Notify Brand", desc: "We formally notify the courier company of the grievance." },
                        { step: "03", title: "Legal Notice", desc: "A legal notice is sent demanding resolution or compensation." },
                        { step: "04", title: "Prepare Case", desc: "If unresolved, we prepare the necessary legal documents for court." },
                        { step: "05", title: "File Case", desc: "Our lawyers file the consumer complaint in the appropriate forum." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Dependable legal support for logistics complaints.",
                    list: [
                        { title: "Industry Knowledge", desc: "We understand the specific challenges in the courier sector." },
                        { title: "Dedicated Support", desc: "Lawyers focused on strengthening your complaint." },
                        { title: "Clear Communication", desc: "We keep you informed at every step of the process." },
                        { title: "Proven Success", desc: "History of effectively resolving courier and logistics complaints." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Courier Complaints"
                faqs={faqs}
            />

        </div>
    );
};

export default CourierLogistics;
