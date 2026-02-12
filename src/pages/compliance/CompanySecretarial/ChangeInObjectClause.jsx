import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield,
    BookOpen,
    Users,
    Landmark
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ChangeInObjectClause = () => {
    const faqs = [
        {
            question: "What are the key points for a better understanding of MOA?",
            answer: "A company is permitted to subscribe through an agent. Minors cannot sign the subscription sheet; it must be signed by a guardian. The company can add additional points at its discretion."
        },
        {
            question: "What are the additional points for Public Company to alter its object clause?",
            answer: "Special Resolution must be published in an English and Vernacular newspaper in the state of the registered office. Information must be on the website. Dissenting shareholders must be given an exit option."
        },
        {
            question: "What are the restrictions for the alteration of Object Clause as per Section 13(2)?",
            answer: "Companies with unutilized money raised through a prospectus must pass a special resolution and publish it in newspapers before altering the object clause."
        },
        {
            question: "What are the different provisions for Object Clause as per old and new act?",
            answer: "The old act had 5 clauses. The Companies Act 2013 and new SPICe form 33 have only two object clauses: Main Objects and Ancillary Objects."
        },
        {
            question: "Is the physical copy of MOA required with form MGT-14?",
            answer: "Yes, attaching a physical copy of the amended MOA with MGT-14 is sufficient if the company was incorporated using SPICe forms."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Change in"
                heroTitleSuffix="Object Clause"
                heroSubtitle="MOA Amendment Services"
                heroDescription="Expert guidance for altering the Object Clause in your Memorandum of Association. Ensure seamless legal compliance and smooth corporate transitions with Corpbiz."
                whatsIncludedList={[
                    "Drafting Board Resolutions",
                    "EGM Notice Preparation",
                    "Special Resolution Drafting",
                    "Filing Form MGT-14",
                    "Liaison with ROC",
                    "Amended MOA Drafting"
                ]}
                stats={[
                    { count: "100%", label: "Success Rate", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <Globe size={20} /> },
                    { count: "Fast", label: "Processing", icon: <Award size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "Change in Object Clause - Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "The Memorandum of Association (MOA) is the constitution of a Company, defining the scope of its powers. The Object Clause within the MOA outlines the main activities the company will undertake.",
                        "A company cannot operate beyond its object clause. Any act outside this scope is considered ultra vires and void. Therefore, if a company wishes to expand its business activities, it must amend its Object Clause.",
                        "The object clause consists of the main activity of the business and activities ancillary to the main activity. Corpbiz assists in the legal process of amending this clause to reflect your evolving business goals."
                    ]
                }}
                conditions={{
                    title: "Reasons to Amend",
                    subtitle: "Why do companies change their Object Clause?",
                    list: [
                        { title: "Expansion", desc: "To carry on business on a larger scale by enhancing the scope of activities." },
                        { title: "New Methods", desc: "To attain goals through new or improved methods." },
                        { title: "Diversification", desc: "To carry on additional business that can be combined with existing operations." },
                        { title: "Restructuring", desc: "To sell or dispose of part of the business or due to amalgamation/mergers." }
                    ]
                }}
                advantages={{
                    title: "Contents of MOA",
                    subtitle: "Key clauses in the Memorandum of Association",
                    list: [
                        { title: "Name Clause", desc: "Mentions the name of the Company (e.g., Private Limited)." },
                        { title: "Registered Address", desc: "Mentions the state where the registered office is situated." },
                        { title: "Object Clause", desc: "Specifies the objects/activities for which the Company is incorporated." },
                        { title: "Liability Clause", desc: "Specifies the limited or unlimited liability of the members." },
                        { title: "Capital Clause", desc: "Mentions the Authorized Capital of the Company." }
                    ]
                }}
                process={{
                    title: "Amendment Process",
                    subtitle: "Step-by-step process to amend the Object Clause",
                    steps: [
                        { step: "01", title: "Board Meeting", desc: "Call a Board Meeting with 7 days' notice to propose new objects and pass a Board Resolution." },
                        { step: "02", title: "Extraordinary General Meeting", desc: "Hold an EGM with 21 days' notice to pass a Special Resolution by shareholders (3/4th majority)." },
                        { step: "03", title: "Filing MGT-14", desc: "File Form MGT-14 with the Registrar within 30 days of the Special Resolution, along with the resolution, explanatory statement, and amended MOA." },
                        { step: "04", title: "ROC Approval", desc: "The Registrar scrutinizes the forms and issues a certificate approving the alteration." }
                    ]
                }}
                whyUs={{
                    title: "Why Choose Corpbiz",
                    subtitle: "Simplify your MOA amendment process",
                    list: [
                        { title: "Expert Assistance", desc: "Guided by professionals with deep knowledge of Companies Act 2013." },
                        { title: "Document Drafting", desc: "Precise drafting of resolutions and the amended Memorandum." },
                        { title: "Hassle-Free Filing", desc: "We handle the MGT-14 filing and coordination with the ROC." },
                        { title: "Compliance Assurance", desc: "Risk-free compliance ensuring all legal provisions are met." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default ChangeInObjectClause;
