import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * Caveat Petition Page matching Vyombiz layout styles
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

const CaveatPetition = () => {

    const faqs = [
        {
            question: "What is a Caveat Petition?",
            answer: "A Caveat Petition is a precautionary legal measure filed in court under Section 148A of the CPC, requesting the court not to pass any order without giving the caveator a chance to be heard."
        },
        {
            question: "What is the validity period of a Caveat Petition?",
            answer: "A Caveat Petition remains valid for 90 days from the date of filing. If the anticipated suit is not filed within this period, a fresh caveat needs to be filed."
        },
        {
            question: "Can a Caveat be filed against criminal cases?",
            answer: "No, a Caveat Petition is generally filed only in civil matters. It is not applicable to criminal proceedings."
        },
        {
            question: "Who is a Caveator and Caveatee?",
            answer: "The person filing the caveat is called the 'Caveator', and the person against whom the caveat is filed (who is expected to file the suit) is called the 'Caveatee'."
        },
        {
            question: "Is it mandatory to serve a notice to the opponent?",
            answer: "Yes, the Caveator must serve a notice of the caveat to the person(s) against whom the caveat is filed by registered post."
        },
        {
            question: "What is the benefit of filing a Caveat?",
            answer: "It prevents the court from passing ex-parte orders (orders without hearing the other side) and ensures that you are notified when a case is filed against you."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Caveat "
                heroTitleSuffix="Petition"
                heroSubtitle="Prevent Ex-Parte Orders Against You"
                heroDescription="File a Caveat Petition to safeguard your interests. Ensure you are heard by the court before any order is passed in an anticipated legal suit against you."
                whatsIncludedList={[
                    "Petition Drafting",
                    "Filing in Appropriate Court",
                    "Notice Service to Opponent",
                    "Legal Representation"
                ]}
                stats={[
                    { count: "5000+", label: "Caveats Filed", icon: <Users size={20} /> },
                    { count: "99%", label: "Protection Rate", icon: <Briefcase size={20} /> },
                    { count: "24hrs", label: "Filing Support", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Legal Precaution",
                    title: "Caveat Petition –",
                    highlightTitle: "Overview",
                    description: [
                        "A Caveat Petition is a formal notice filed by an individual (Caveator) in court, requesting that no order or judgment be passed in a specific matter without hearing them first.",
                        "Governed by Section 148A of the Code of Civil Procedure (CPC), 1908, it acts as a preventive measure against ex-parte orders, especially in cases where the Caveator anticipates a lawsuit.",
                        "It effectively says 'Let a person beware' to the court, ensuring natural justice by mandating that the Caveator be notified of any proceedings."
                    ],
                    whyIdealTitle: "Why File a Caveat?",
                    whyIdealList: [
                        { title: "Right to be Heard", desc: "Ensures the court hears your side before passing orders." },
                        { title: "Avoid Surprise Orders", desc: "Prevents immediate stay orders or injunctions against you." },
                        { title: "Notification", desc: "You get officially notified if a case is filed." },
                        { title: "Legal Safety", desc: "Protects your rights and interests in property or business disputes." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Filing a Caveat",
                    subtitle: "Safeguard your legal position",
                    list: [
                        { title: "Prevents Ex-Parte Orders", desc: "Stops the court from giving orders without your presence." },
                        { title: "Buy Time", desc: "Gives you time to prepare your defense and appoint a lawyer." },
                        { title: "Mandatory Notice", desc: "The opponent is legally bound to serve you a copy of their petition." },
                        { title: "Cost Saving", desc: "Setting aside an ex-parte order later is more expensive and time-consuming." },
                        { title: "Mental Peace", desc: "Removes the fear of sudden adverse legal actions." },
                        { title: "Fair Trial", desc: "Upholds the principle of natural justice." }
                    ]
                }}
                eligibility={{
                    title: "Who Can File?",
                    subtitle: "Eligibility Criteria",
                    list: [
                        { title: "Anticipating Suit", desc: "Any person expecting a legal suit or application against them." },
                        { title: "Party to Suit", desc: "A person who is already a party to an existing suit or proceeding." },
                        { title: "Interim Orders", desc: "Anyone fearing an interim order (like stay or injunction) against them." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for filing.",
                    list: [
                        "Vakalatnama (Authority letter to lawyer)",
                        "Drafted Caveat Petition",
                        "Affidavit in support of the Caveat",
                        "Proof of Service of Notice to the anticipated opponent (Postal Receipt)",
                        "Details of the expected suit/order",
                        "Identity Proof of the Caveator"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Filing Procedure",
                    subtitle: "How to file a Caveat Petition",
                    steps: [
                        { step: "01", title: "Drafting", desc: "Draft the petition with details of the court and anticipated suit." },
                        { step: "02", title: "Affidavit", desc: "Sign the supporting affidavit before a notary/oath commissioner." },
                        { step: "03", title: "Serve Notice", desc: "Send a copy of the caveat to the expected opponent via Registered Post." },
                        { step: "04", title: "Filing", desc: "File the petition in the appropriate court along with proof of service." },
                        { step: "05", title: "Acknowledgment", desc: "Court registers the caveat and gives a diary/lodging number." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expert Caveat Filing",
                    list: [
                        { title: "Expert Drafting", desc: "Precision drafting to cover all legal grounds." },
                        { title: "Appropriate Forum", desc: "Identification of the correct court/jurisdiction." },
                        { title: "Speedy Process", desc: "Same-day filing support in urgent matters." },
                        { title: "Pan-India", desc: "Support for filing in Supreme Court, High Courts, and District Courts." },
                        { title: "Tracking", desc: "We track the caveat status and validity." },
                        { title: "Renewal Alerts", desc: "Timely reminders before the 90-day expiry." },
                        { title: "Professional Support", desc: "Experienced advocates to represent you." },
                        { title: "Hassle-Free", desc: "Complete handling of procedural formalities." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Caveat Petitions"
                faqs={faqs}
            />

        </div>
    );
};

export default CaveatPetition;
