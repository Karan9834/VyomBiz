import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Consumer Complaint Page matching Vyombiz layout styles
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

const ConsumerComplaint = () => {

    const faqs = [
        {
            question: "Who is a Consumer?",
            answer: "Any individual who purchases services or products for personal use and not for business or resale is known to be a consumer."
        },
        {
            question: "What is the time limit to file a consumer complaint?",
            answer: "A consumer complaint must be filed within two years from the date on which the cause of action arises."
        },
        {
            question: "Do I need a lawyer to file a consumer complaint?",
            answer: "No, a consumer can file a complaint on their own. However, legal assistance is recommended for complex cases or drafting professional legal notices."
        },
        {
            question: "Where can I file a consumer complaint?",
            answer: "Depending on the value of the claim: District Commission (up to ₹1 Cr), State Commission (₹1 Cr to ₹10 Cr), and National Commission (above ₹10 Cr)."
        },
        {
            question: "Is there a court fee for filing a complaint?",
            answer: "Yes, a nominal court fee is required to be paid, which depends on the total value of the consideration paid for the goods or services."
        },
        {
            question: "How long does it take to resolve a case?",
            answer: "It typically takes between 8 to 18 months to resolve a consumer complaint, though it may take longer for contentious matters."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Consumer "
                heroTitleSuffix="Complaint"
                heroSubtitle="Fight for Your Consumer Rights"
                heroDescription="File a formal complaint against defective products, deficiency in service, or unfair trade practices. We assist you in sending legal notices and filing cases in Consumer Court."
                bgImage="/lawyer-service-hero-section-img/hero-section-bg-img.png"
                whatsIncludedList={[
                    "Legal Notice Drafting",
                    "Case Filing Support",
                    "Reply to Notices",
                    "Expert Legal Advice"
                ]}
                stats={[
                    { count: "15000+", label: "Cases Handled", icon: <Users size={20} /> },
                    { count: "95%", label: "Success Rate", icon: <Briefcase size={20} /> },
                    { count: "24hrs", label: "Notice Draft", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Consumer Rights",
                    title: "Consumer Complaint –",
                    highlightTitle: "Overview",
                    description: [
                        "A Consumer Complaint is a formal action taken against a seller, manufacturer, or service provider for selling defective goods or providing deficient services.",
                        "Under the Consumer Protection Act, 2019, consumers have the right to seek redressal against unfair trade practices, restrictive trade practices, and exploitation.",
                        "Before filing a complaint in the Consumer Forum/Court, it is legally advisable to send a Legal Notice to the opposite party demanding resolution or compensation."
                    ],
                    whyIdealTitle: "Consumer Rights",
                    whyIdealList: [
                        { title: "Right to Safety", desc: "Protection against hazardous goods and services." },
                        { title: "Right to Information", desc: "Right to be informed about quality, quantity, potency, purity, standard, and price." },
                        { title: "Right to Choose", desc: "Access to a variety of goods and services at competitive prices." },
                        { title: "Right to Redressal", desc: "Right to seek compensation against unfair trade practices." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Filing a Consumer Complaint",
                    subtitle: "Why you should take legal action",
                    list: [
                        { title: "Full Refund", desc: "Claim a refund of the amount paid along with interest." },
                        { title: "Defect Rectification", desc: "Get the defect in goods repaired or services improved." },
                        { title: "Replacement", desc: "Obtain a replacement for the defective product." },
                        { title: "Compensation", desc: "Claim compensation for any loss, injury, or mental agony suffered." },
                        { title: "Legal Costs", desc: "Reimbursement of litigation costs incurred." },
                        { title: "Corrective Action", desc: "Stops the seller from continuing unfair trade practices." }
                    ]
                }}
                eligibility={{
                    title: "Grounds for Complaint",
                    subtitle: "When can you file a complaint?",
                    list: [
                        { title: "Defective Goods", desc: "Manufacturing defects or poor quality products." },
                        { title: "Deficiency in Service", desc: "Negligence or failure to provide promised service." },
                        { title: "Unfair Trade Practice", desc: "Misleading advertisements, false promises, or hiding information." },
                        { title: "Overcharging", desc: "Charging above MRP or agreed price." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for filing.",
                    list: [
                        "Invoice/Bill/Receipt of purchase",
                        "Warranty/Guarantee Cards",
                        "Proof of Payment",
                        "Copy of Legal Notice sent to the seller",
                        "Correspondence (Emails/Letters) with the seller",
                        "Affidavit in support of the complaint",
                        "Photos/Evidence of defects"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Filing Procedure",
                    subtitle: "Step-by-step process",
                    steps: [
                        { step: "01", title: "Send Notice", desc: "Send a legal notice to the service provider/seller seeking redressal." },
                        { step: "02", title: "Wait for Reply", desc: "Wait for a response (usually 15-30 days) or settlement offer." },
                        { step: "03", title: "File Complaint", desc: "If no solution, file a formal complaint in the appropriate Consumer Forum." },
                        { step: "04", title: "Admission", desc: "The court reviews the complaint and admits it for hearing." },
                        { step: "05", title: "Hearing & Order", desc: "Representation of case and final order by the court." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert Consumer Legal Support",
                    list: [
                        { title: "Strategic Advice", desc: "We evaluate the strength of your case/complaint." },
                        { title: "Professional Drafting", desc: "Strongly drafted legal notices and complaints." },
                        { title: "Negotiation", desc: "We help negotiate settlements out of court." },
                        { title: "Filing Assistance", desc: "Assistance with online and offline filing procedures." },
                        { title: "Track Record", desc: "Proven success in consumer dispute resolutions." },
                        { title: "Affordable", desc: "Cost-effective legal solutions for consumers." },
                        { title: "Dedicated Support", desc: "Guidance throughout the legal process." },
                        { title: "Pan-India", desc: "Support across various state and district forums." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Consumer Complaints"
                faqs={faqs}
            />

        </div>
    );
};

export default ConsumerComplaint;
