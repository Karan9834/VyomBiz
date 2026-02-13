import React from "react";
import { Car, AlertTriangle, ShieldCheck, FileText, Settings } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Automobile Page matching Vyombiz layout styles
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

const Automobile = () => {

    const faqs = [
        {
            question: "What if the warranty on my Vehicle has expired?",
            answer: "Even if your warranty has expired, you can still file a consumer complaint if you can prove that the defect was a manufacturing fault or existed during the warranty period but wasn't resolved."
        },
        {
            question: "What documents are needed to file an automobile complaint?",
            answer: "Key documents include purchase receipts, warranty papers, repair invoices from authorized service centers, photographs of defects, and records of communication with the dealer or manufacturer."
        },
        {
            question: "Can I file a complaint against a second-hand car dealer?",
            answer: "Yes, you can file a complaint against a used car dealer if they sold you a defective vehicle, reduced the odometer reading, or made false claims about the vehicle's condition."
        },
        {
            question: "How long does it take to resolve an automobile consumer case?",
            answer: "The time varies depending on the complexity of the case and the court's schedule. However, consumer courts aim to resolve disputes within 90-150 days."
        },
        {
            question: "Can I claim compensation for mental harassment?",
            answer: "Yes, consumer courts often award compensation for mental agony, harassment, and financial loss caused by the defective vehicle or poor service."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Automobile Consumer"
                heroTitleSuffix="Complaint"
                heroSubtitle="Feeling Cheated with Your Car Purchase?"
                heroDescription="Get expert support to avail the compensation you deserve. From manufacturing defects to poor service, we tackle all automobile-related grievances to protect your consumer rights."
                whatsIncludedList={[
                    "Defective Vehicle Resolution",
                    "Service Center Disputes",
                    "Warranty Claim Rejections",
                    "Legal Notice Drafting"
                ]}
                stats={[
                    { count: "90%", label: "Resolution Rate", icon: <ShieldCheck size={20} /> },
                    { count: "500+", label: "Cases Handled", icon: <Car size={20} /> },
                    { count: "Expert", label: "Legal Support", icon: <FileText size={20} /> }
                ]}
            />



            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Consumer Rights",
                    title: "Automobile Complaints –",
                    highlightTitle: "An Overview",
                    description: [
                        "Automobile consumer complaints address issues faced by car buyers, such as manufacturing defects, poor workmanship, faulty components, or misleading advertising.",
                        "A formal complaint can be filed against manufacturers, dealerships, or service providers for unfair trade practices or inadequate service.",
                        "This legal recourse empowers consumers to seek redressal for issues related to purchase, leasing, or maintenance of their vehicles."
                    ],
                    whyIdealTitle: "Objectives of Filing a Complaint",
                    whyIdealList: [
                        { title: "Empower Consumers", desc: "Levels the playing field between individual buyers and powerful automotive companies." },
                        { title: "Influence Policy", desc: "Highlights systemic issues, prompting regulatory bodies to improve standards." },
                        { title: "Quality Assurance", desc: "Feedback helps manufacturers identify flaws and improve future models." },
                        { title: "Strengthen Confidence", desc: "Builds trust in the market by assuring buyers that grievances will be addressed." }
                    ]
                }}
                advantages={{
                    title: "Advantages of Filing",
                    subtitle: "Why you should exercise your rights as an automobile consumer.",
                    list: [
                        { title: "Better Vehicle Quality", desc: "Forces companies to fix faulty parts and improve overall vehicle reliability." },
                        { title: "Safer Automobiles", desc: "Reports of safety issues lead to investigations and recalls, preventing accidents." },
                        { title: "Legal Protection", desc: "Provides a mechanism to defend rights and seek compensation for damages." },
                        { title: "Compensation", desc: "Get recompense for financial loss, injury, or mental harassment suffered." },
                        { title: "Accountability", desc: "Holds manufacturers and dealers accountable for their products and promises." },
                        { title: "Informed Market", desc: "Public complaints help other consumers make better purchasing decisions." }
                    ]
                }}
                eligibility={{
                    title: "Common Reasons to File",
                    subtitle: "Situations where you should consider filing a consumer complaint.",
                    list: [
                        { title: "Defective Parts", desc: "When essential components fail or don't work as advertised." },
                        { title: "Safety Concerns", desc: "Issues like brake failure, steering problems, or airbag malfunctions." },
                        { title: "Poor Service", desc: "Inadequate repairs, delays, or rude behavior by dealership/service center staff." },
                        { title: "Warranty Issues", desc: "Unjustified rejection of valid warranty claims or refusal to cover repairs." },
                        { title: "False Advertising", desc: "When the vehicle's performance or features don't match the promotional claims." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Essential documents needed to substantiate your automobile complaint.",
                    list: [
                        "Vehicle Purchase Receipts/Invoice",
                        "Warranty Cards/Papers",
                        "Service & Repair Invoices",
                        "Job Cards from Service Centers",
                        "Photographs/Videos of Defects",
                        "Email/Letter Correspondence with Dealer/Company",
                        "Insurance Policy Documents"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Our Resolution Process",
                    subtitle: "How Vyombiz helps resolve your automobile grievances.",
                    steps: [
                        { step: "01", title: "Document Collection", desc: "We gather all necessary proofs like invoices and service records." },
                        { step: "02", title: "Legal Notice", desc: "Our lawyers draft and send a strict legal notice to the dealer/manufacturer." },
                        { step: "03", title: "Negotiation", desc: "We attempt to resolve the matter amicably through mediation if possible." },
                        { step: "04", title: "File Complaint", desc: "If unresolved, we file a formal complaint in the appropriate Consumer Forum." },
                        { step: "05", title: "Representation", desc: "Our experts represent your case during court hearings." },
                        { step: "06", title: "Resolution", desc: "We strive to get you the repair, replacement, or refund you deserve." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Your trusted legal partner for consumer protection.",
                    list: [
                        { title: "Auto Industry Expertise", desc: "Deep understanding of automobile laws and common dealership tactics." },
                        { title: "Proven Track Record", desc: "Successfully resolved numerous cases against major car manufacturers." },
                        { title: "Hassle-Free Process", desc: "We handle all the legal paperwork and court appearances for you." },
                        { title: "Transparent Pricing", desc: "Clear fee structure with no hidden charges." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Automobile Complaints"
                faqs={faqs}
            />

        </div>
    );
};

export default Automobile;
