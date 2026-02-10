import React from "react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "./ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ISO2768Registration = () => {
    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="ISO 2768-1"
                heroTitleSuffix="Certification"
                heroSubtitle="General Tolerances"
                heroDescription="General tolerances for linear and angular dimensions."
                formTitle="Get Certified Now"
                whatsIncludedList={[
                    "Gap Analysis",
                    "Documentation Support",
                    "Internal Audit Training",
                    "Certification Audit Support",
                    "Implementation Guidance",
                    "Post-Certification Maintenance"
                ]}
            />
            <TrustedBrands />
            <TalkExpert />
            <ISODetailsLayout
                overview={{
                    title: "Overview of ISO 2768-1",
                    description: [
                        "General tolerances for linear and angular dimensions.",
                        "Achieving this certification demonstrates your commitment to quality, safety, and efficiency in your operations."
                    ],
                    imageUrl: "/ISO-overview.jpg"
                }}
                advantages={{
                    title: "Benefits of ISO 2768-1 Certification",
                    subtitle: "Key Advantages",
                    description: "Why you should get certified:",
                    list: [
                        "Enhanced credibility and brand reputation",
                        "Compliance with legal and regulatory requirements",
                        "Improved operational efficiency",
                        "Increased customer satisfaction",
                        "Competitive advantage in the market",
                        "Better risk management"
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who Can Apply?",
                    list: [
                        "Any organization looking to improve its management systems",
                        "Companies seeking international recognition",
                        "Organizations aiming for operational excellence",
                        "Businesses wanting to demonstrate compliance"
                    ],
                    ctaText: "Check Eligibility"
                }}
                documents={{
                    title: "Required Documents",
                    description: "Standard documents needed include:",
                    imageUrl: "/ISO-document-required.jpg",
                    list: [
                        "Company Registration Certificate",
                        "PAN Card",
                        "MOA / AOA",
                        "Scope of Management System",
                        "Policy Documents",
                        "Process Documentation",
                        "Organizational Chart"
                    ]
                }}
                process={{
                    title: "Certification Process",
                    subtitle: "Simple Steps to Get Certified",
                    steps: [
                        { step: "Step 1", title: "Application", desc: "Submit your application with required details and documents." },
                        { step: "Step 2", title: "Documentation", desc: "Prepare and review all necessary documentation with our experts." },
                        { step: "Step 3", title: "Audit", desc: "Stage 1 and Stage 2 audits conducted by certification body." },
                        { step: "Step 4", title: "Certification", desc: "Receive your ISO certificate upon successful audit completion." }
                    ]
                }}
                whyUs={{
                    title: "Why Choose Corpbiz?",
                    subtitle: "Our Advantage",
                    list: [
                        { title: "Expert Team", desc: "Experienced professionals to guide you through the entire process." },
                        { title: "Seamless Process", desc: "Hassle-free certification with end-to-end support." },
                        { title: "Cost Effective", desc: "Competitive pricing with no hidden costs." },
                        { title: "Quick Turnaround", desc: "Fast and efficient certification process." }
                    ]
                }}
            />
        </div>
    );
};

export default ISO2768Registration;
