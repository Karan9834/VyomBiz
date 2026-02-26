import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * RERA Complaint Page matching Vyombiz layout styles
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

const RERAComplaint = () => {

    const faqs = [
        {
            question: "Who can complain to RERA?",
            answer: "A complaint can be filed under Section 31 of RERA either with the Real Estate Regulatory Authority or the adjudicating officer. This complaint can be filed against promoters, allottees and/or real estate agents."
        },
        {
            question: "Is RERA approval mandatory?",
            answer: "The Real Estate Act makes it mandatory for all commercial and residential real estate projects where the land is over 500 square metres, or eight apartments, to register with RERA."
        },
        {
            question: "What happens if builder does not follow RERA order?",
            answer: "Failing to comply with the order of the RERA Appellate Tribunal is a punishable offence which can lead to imprisonment up to three years or fine which may extend up to ten per cent of the cost of the real estate project."
        },
        {
            question: "How has RERA affected property?",
            answer: "RERA aims to boost investments in the real estate sector and create a more transparent environment for property buyers by increasing the accountability of builders."
        },
        {
            question: "What is grace period in RERA?",
            answer: "Ideally, six months should be the maximum grace period from the date of possession specified in the agreement, subject to verification by an advocate."
        },
        {
            question: "Will RERA restore the trust of homebuyers?",
            answer: "Yes, RERA boosts the morale and confidence of homebuyers, enhances the credibility of builders, protects interests of home buyers, and brings liquidity to the real estate sector."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="RERA Complaint"
                heroTitleSuffix="Filing"
                heroSubtitle="Legal Action Against Unfair Practices"
                heroDescription="File a complaint against builders for delay in possession, structural defects, or violation of RERA Act. We help you get justice."
                whatsIncludedList={[
                    "Case Analysis & Drafting",
                    "Filing Complaint with Authority",
                    "Representation in Hearings",
                    "Execution of Orders"
                ]}
                stats={[
                    { count: "12500+", label: "Complaints Filed", icon: <Users size={20} /> },
                    { count: "850+", label: "RERA Experts", icon: <Briefcase size={20} /> },
                    { count: "95%", label: "Success Rate", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Real Estate Regulatory Authority",
                    title: "RERA Complaint –",
                    highlightTitle: "Overview",
                    description: [
                        "RERA (Real Estate Regulatory Authority) was introduced in 2016 to safeguard the interests of consumers in the Real Estate Sector. It promotes transparency and standardization in business practices.",
                        "RERA works as a shield to protect consumers from unscrupulous builders. Under Section 31 of the Act, homebuyers can file a complaint against a builder, developer, or agent if they feel any provision of the Act has been violated.",
                        "It provides a platform for speedy dispute resolution. Even if a project is not registered, remedies are available, though buyers are encouraged to check RERA registration before booking."
                    ],
                    whyIdealTitle: "Why File a Complaint?",
                    whyIdealList: [
                        { title: "Empowerment", desc: "Buyers have the right to file complaints against fraud and unhealthy practices." },
                        { title: "Transparency", desc: "Ensures clarity in project details, measurements, and timelines." },
                        { title: "Accountability", desc: "Builders are accountable for their promises regarding possession and quality." },
                        { title: "Redressal", desc: "A structured mechanism to resolve grievances effectively." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Filing RERA Complaint",
                    subtitle: "Why you should take legal action under RERA",
                    list: [
                        { title: "Saves Time", desc: "Eliminates the need to go through lengthy and time-consuming civil court proceedings." },
                        { title: "Transparency", desc: "Online status tracking and transparent dealing with complaints." },
                        { title: "Compensation", desc: "Buyers may receive compensation for delays or lack of commitment from builders." },
                        { title: "Full Refund", desc: "Authority to claim a full refund with interest in certain cases." },
                        { title: "Speedy Trial", desc: "Dedicated adjudicating mechanism for faster hearings and disposal." },
                        { title: "Financial Discipline", desc: "Ensures builders use funds for the specific project and not divert them." }
                    ]
                }}
                eligibility={{
                    title: "When to File a Complaint?",
                    subtitle: "Grounds for filing a complaint under RERA",
                    list: [
                        { title: "Delay in Possession", desc: "If the builder fails to hand over the property by the agreed date." },
                        { title: "False Advertisement", desc: "Misleading claims about the project facilities or specifications." },
                        { title: "Advance Payment", desc: "Demanding more than 10% advance without agreement." },
                        { title: "Improper Registration", desc: "If the project is not registered with RERA." },
                        { title: "Structural Defects", desc: "Defects in quality or structure within 5 years of possession." },
                        { title: "Ownership Transfer", desc: "Issues related to transferring title or formation of society." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents to support your RERA complaint.",
                    list: [
                        "Application for booking/Allotment Letter",
                        "Agreement for Sale",
                        "Payment Receipts/Proof of Payment",
                        "Copies of correspondence with the builder",
                        "Brochure/Advertisement copy",
                        "Cheque bounce details (if any)",
                        "Personal Details (ID Proof, Address Proof)",
                        "Copy of Legal Notice sent (if any)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Procedure to File Complaint",
                    subtitle: "Steps to seek redressal under RERA 2016",
                    steps: [
                        { step: "01", title: "Visit Portal", desc: "Go to the state's official RERA portal." },
                        { step: "02", title: "Find Complaint Link", desc: "Locate the complaint registration section." },
                        { step: "03", title: "Fill Details", desc: "Complete the form with personal and complaint details." },
                        { step: "04", title: "Attach Documents", desc: "Upload necessary supporting documents." },
                        { step: "05", title: "Pay Fee", desc: "Pay the prescribed complaint filing fee online." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert Legal Support for Real Estate Disputes",
                    list: [
                        { title: "RERA Specialists", desc: "Lawyers with specific expertise in Real Estate Regulation Act." },
                        { title: "Case Assessment", desc: "Thorough analysis of your agreement and grounds for complaint." },
                        { title: "Drafting", desc: "Professional drafting of the complaint to ensure all legal points are covered." },
                        { title: "Representation", desc: "Strong representation before the RERA Authority and Tribunal." },
                        { title: "Track Record", desc: "Proven success in getting refunds, compensation, and possession." },
                        { title: "Pan-India", desc: "Support for RERA filings across all major states in India." },
                        { title: "Transparent Fees", desc: "Clear fee structure with no hidden costs." },
                        { title: "Consultation", desc: "Initial advice to guide you on the best course of action." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about RERA Complaints"
                faqs={faqs}
            />

        </div>
    );
};

export default RERAComplaint;
