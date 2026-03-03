import React from "react";
import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

/**
 * Public Interest Litigation Page matching Vyombiz layout styles
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

const PublicInterestLitigation = () => {

    const faqs = [
        {
            question: "What does PIL stand for?",
            answer: "PIL stands for Public Interest Litigation, which implies litigation for the protection of public interests. It is a tool to ensure justice for all and protect the interests of the public at large."
        },
        {
            question: "Who has the right to issue PIL?",
            answer: "The High Courts and Supreme Court of India have the right to issue Public Interest Litigation. It stems from the power of judicial review."
        },
        {
            question: "For what reason is PIL used?",
            answer: "PIL is used to challenge decisions of public authorities, review failure to act by public bodies, or question the lawfulness of a decision or action that affects the public."
        },
        {
            question: "What are the benefits of filing PIL?",
            answer: "It gives a voice to the weak and marginalized, holds public bodies accountable, raises awareness of significant issues, and provides a platform for advocating rights at a nominal cost."
        },
        {
            question: "Do I need a lawyer to file PIL?",
            answer: "While you can argue a PIL on your own, it is advisable to consult a lawyer to understand the legal requirements, potential pitfalls, and to draft the petition correctly."
        },
        {
            question: "Are there any fees for filing a PIL?",
            answer: "Yes, a nominal fee of Rs 50 per defendant is generally required. However, the major cost involved is usually the professional fee of the lawyer engaged."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Public Interest Litigation"
                heroTitleSuffix="(PIL)"
                heroSubtitle="Justice for the Public Good"
                heroDescription="File a PIL to protect public interest, enforce human rights, and hold authorities accountable. Expert legal assistance for filing in High Courts and the Supreme Court."
                bgImage="/lawyer-service-hero-section-img/hero-section-bg-img.png"
                whatsIncludedList={[
                    "Drafting of Writ Petition",
                    "Filing in High Court/Supreme Court",
                    "Legal Representation",
                    "Strategic Advisory"
                ]}
                stats={[
                    { count: "5000+", label: "PILs Filed", icon: <Users size={20} /> },
                    { count: "200+", label: "Social Causes", icon: <Briefcase size={20} /> },
                    { count: "98%", label: "Admission Rate", icon: <Building2 size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={{
                    badge: "Social Justice",
                    title: "Public Interest Litigation –",
                    highlightTitle: "Overview",
                    description: [
                        "Public Interest Litigation (PIL) is a legal mechanism used to protect the public interest. It is not filed for personal gain but to ensure justice for the common people, especially the poor and marginalized.",
                        "Introduced to dilute the principle of 'locus standi', PIL allows any public-spirited citizen or organization to file a petition on behalf of those who cannot approach the court themselves.",
                        "PILs have been instrumental in landmark judgments concerning environmental protection, human rights, women's rights, and government accountability."
                    ],
                    whyIdealTitle: "Objectives of PIL",
                    whyIdealList: [
                        { title: "Justice for All", desc: "Ensuring justice reaches the poor and marginalized sections of society." },
                        { title: "Public Welfare", desc: "Endorsing the welfare of the ordinary people." },
                        { title: "Judicial Review", desc: "Challenging public authorities' decisions and enforcing legal obligations." },
                        { title: "Social Change", desc: "Acting as an instrument of social growth and maintaining the Rule of Law." }
                    ]
                }}
                advantages={{
                    title: "Benefits of PIL",
                    subtitle: "Why PIL is a powerful tool for citizens",
                    list: [
                        { title: "Voice for the Voiceless", desc: "Gives a platform to weak and marginalized people to be heard." },
                        { title: "Accountability", desc: "Holds public bodies and government institutions accountable for their actions." },
                        { title: "Low Cost", desc: "Nominal court fees make it accessible for public causes." },
                        { title: "Broader Impact", desc: "Focuses on broader public issues like environment, consumer welfare, and human rights." },
                        { title: "Immediate Relief", desc: "Courts can grant interim compensation or immediate directions." },
                        { title: "Judicial Monitoring", desc: "Allows courts to monitor state institutions like prisons, asylums, etc." }
                    ]
                }}
                eligibility={{
                    title: "When Can You File a PIL?",
                    subtitle: "Conditions and Agendas for Filing",
                    list: [
                        { title: "Fundamental Rights", desc: "Violation of fundamental or moral rights of citizens." },
                        { title: "Human Rights", desc: "Violation of rights of the poor and marginalized." },
                        { title: "Public Duty", desc: "To force municipal or government authorities to perform a public duty." },
                        { title: "Policy Execution", desc: "For proper execution of Central/State Government policies." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Essential documents for filing a PIL.",
                    list: [
                        "Identity Proof of Petitioner",
                        "List of names/addresses of all petitioners",
                        "List of names/addresses of respondents (Govt officers etc.)",
                        "List of events/violations with dates",
                        "Evidence documents (Notice, Verification of residence, etc.)",
                        "Photographs/Proof of violation (if applicable)",
                        "Resettlement policy (if applicable)",
                        "Draft of the Writ Petition"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Procedure to File PIL",
                    subtitle: "How to file Public Interest Litigation in India",
                    steps: [
                        { step: "01", title: "Research & Consult", desc: "Conduct complete research on the issue and consult a lawyer." },
                        { step: "02", title: "Collect Evidence", desc: "Gather all vital documents and information to support the case." },
                        { step: "03", title: "Draft Petition", desc: "Draft the petition addressing the Chief Justice (Supreme Court or High Court)." },
                        { step: "04", title: "File Petition", desc: "Submit copies (2 for HC, 5 for SC) to the court." },
                        { step: "05", title: "Serve Notice", desc: "Serve an advance copy of the petition to the respondents." },
                        { step: "06", title: "Hearing", desc: "Court accepts the petition and issues notice to respondents for hearing." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose VyomBiz?",
                    subtitle: "Expertise in Public Interest Litigation",
                    list: [
                        { title: "Experienced Lawyers", desc: "Network of lawyers with significant PIL experience." },
                        { title: "Thorough Research", desc: "In-depth legal research to build a strong case." },
                        { title: "Drafting Excellence", desc: "Precise drafting to avoid pitfalls and ensure admission." },
                        { title: "Strategic Approach", desc: "Guidance on the best legal strategy for maximum impact." },
                        { title: "End-to-End Support", desc: "From evidence collection to final arguments." },
                        { title: "Social Commitment", desc: "Dedicated to supporting causes for the public good." },
                        { title: "Transparent Process", desc: "Clear communication about case progress and requirements." },
                        { title: "Consultation", desc: "Initial consultation to assess the viability of the PIL." }
                    ]
                }}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Public Interest Litigation"
                faqs={faqs}
            />

        </div>
    );
};

export default PublicInterestLitigation;
