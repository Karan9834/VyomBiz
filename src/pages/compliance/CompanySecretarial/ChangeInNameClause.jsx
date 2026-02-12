import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield,
    FilePen,
    Building2,
    Users
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ChangeInNameClause = () => {
    const faqs = [
        {
            question: "Can a company change its name at any time?",
            answer: "Yes, a company can change its name at any time by passing a Special Resolution in an EGM and obtaining approval from the Central Government (ROC)."
        },
        {
            question: "Does a name change affect the company's legal identity?",
            answer: "No, a change in name does not affect the legal identity, rights, or obligations of the company. It remains the same legal entity."
        },
        {
            question: "Is MGT-14 mandatory for a name change?",
            answer: "Yes, filing Form MGT-14 is mandatory to register the Special Resolution passed by the shareholders for the name change."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Change in"
                heroTitleSuffix="Name Clause"
                heroSubtitle="Company Name Change Service"
                heroDescription="Rebrand or restructure your business identity with ease. Corpbiz assists in the legal process of changing your company name, ensuring full compliance with MCA regulations."
                whatsIncludedList={[
                    "Name Availability Search",
                    "Drafting Board Resolutions",
                    "EGM Notice & Special Resolution",
                    "Filing Form MGT-14",
                    "Filing Form INC-24",
                    "Issuance of New COI"
                ]}
                stats={[
                    { count: "100%", label: "Success Rate", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Legal Team", icon: <Users size={20} /> },
                    { count: "Fast", label: "Approval", icon: <Award size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "Change in Name Clause - Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "The Name Clause is the first and most critical clause in the Memorandum of Association (MOA). It states the name of the company. Changing this name requires following a strict legal procedure laid out in the Companies Act, 2013.",
                        "A company may choose to change its name due to rebranding, change in business activity, or conversion from public to private (or vice versa). This process involves obtaining approval from the Registrar of Companies (ROC).",
                        "The process includes verifying the availability of the new name (RUN service), passing a Special Resolution, and filing forms MGT-14 and INC-24. Once approved, the ROC issues a new Certificate of Incorporation."
                    ]
                }}
                advantages={{
                    title: "Reasons for Change",
                    subtitle: "Why companies change their name",
                    list: [
                        { title: "Rebranding", desc: "To better reflect a new brand identity or market positioning." },
                        { title: "Change in Business", desc: "To align the name with a new line of business activities." },
                        { title: "Mergers/Amalgamations", desc: "Resulting from a merger with another entity." },
                        { title: "Legal Requirement", desc: "Ordered by the Government or Court to rectify a name resemblance." },
                        { title: "Conversion", desc: "Adding or removing 'Private' upon conversion of company status." }
                    ]
                }}
                eligibility={{
                    title: "Pre-requisites",
                    subtitle: "Conditions to be met",
                    list: [
                        { title: "Name Availability", desc: "The proposed name must be unique and available." },
                        { title: "Special Resolution", desc: "Approval from at least 75% of shareholders (Special Resolution)." },
                        { title: "No Defaults", desc: "Company should not have defaulted in filing annual returns or financial statements." },
                        { title: "ROC Approval", desc: "Final approval from the Central Government (ROC) is mandatory." }
                    ]
                }}
                process={{
                    title: "Change Process",
                    subtitle: "Step-by-step procedure",
                    steps: [
                        { step: "01", title: "Board Meeting", desc: "Pass resolution to propose name change and call EGM." },
                        { step: "02", title: "Name Application", desc: "File 'RUN' (Reserve Unique Name) form to check availability." },
                        { step: "03", title: "EGM", desc: "Hold Extraordinary General Meeting to pass Special Resolution." },
                        { step: "04", title: "File MGT-14", desc: "File Special Resolution with ROC within 30 days." },
                        { step: "05", title: "File INC-24", desc: "File application for approval of name change with Central Government." },
                        { step: "06", title: "New Certificate", desc: "Receive fresh Certificate of Incorporation from ROC." }
                    ]
                }}
                whyUs={{
                    title: "Why Corpbiz?",
                    subtitle: "Expertise in Corporate Law",
                    list: [
                        { title: "Name Search", desc: "We help you choose a valid and available name." },
                        { title: "Documentation", desc: "Complete drafting of resolutions and Minutes." },
                        { title: "Filing Support", desc: "Error-free filing of MGT-14 and INC-24." },
                        { title: "Post-Compliance", desc: "Guidance on updating the new name on pan, gst, and bank accounts." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default ChangeInNameClause;
