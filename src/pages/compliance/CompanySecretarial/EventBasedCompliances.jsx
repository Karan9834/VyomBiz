import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    FileText,
    TrendingUp,
    Shield,
    Calendar,
    Briefcase,
    FileCheck
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const EventBasedCompliances = () => {
    const faqs = [
        {
            question: "What are event-based compliances?",
            answer: "Event-based compliances are mandatory filings that become necessary only when a specific event or change occurs within the company, such as a change in directors, address, or capital."
        },
        {
            question: "What is the time limit for filing event-based forms?",
            answer: "Most event-based forms must be filed with the ROC within 30 days of the event (e.g., passing of a resolution or change in status). Delay attracts additional fees."
        },
        {
            question: "Is professional assistance required for these filings?",
            answer: "Yes, most forms require certification by a professional (CA/CS/CMA) and must be filed with strict adherence to the Companies Act to avoid rejection or penalties."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Event Based"
                heroTitleSuffix="Compliances"
                heroSubtitle="Corporate Event Filing Services"
                heroDescription="Manage your company's regulatory obligations during key business changes. From director appointments to capital increases, Corpbiz ensures timely and accurate event-based filings."
                whatsIncludedList={[
                    "Director Appointment/Resignation (DIR-12)",
                    "Increase in Authorized Capital (SH-7)",
                    "Change of Registered Office (INC-22)",
                    "Change of Name (INC-24)",
                    "Allotment of Shares (PAS-3)",
                    "Alteration of MOA/AOA (MGT-14)"
                ]}
                stats={[
                    { count: "100%", label: "Compliance", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <Globe size={20} /> },
                    { count: "Fast", label: "Filing", icon: <Award size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "Event Based Compliances - Overview",
                    imageUrl: "/ISO-overview.jpg",
                    description: [
                        "Unlike annual compliances which occur periodically, Event Based Compliances are triggered by specific events or structural changes within a company. These are non-negotiable legal requirements under the Companies Act, 2013.",
                        "Events such as changing the company name, appointing or removing directors, shifting the registered office, or increasing authorized capital require immediate reporting to the Registrar of Companies (ROC).",
                        "Failure to file the necessary forms within the stipulated timeline (usually 30 days) can result in heavy penalties and non-compliance status."
                    ]
                }}
                advantages={{
                    title: "Why Compliance Matters",
                    subtitle: "Impact of Event-Based Filings",
                    list: [
                        { title: "Legal Validity", desc: "Ensures changes are legally recognized and updated in government records." },
                        { title: "Transparency", desc: "Maintains transparency with stakeholders regarding company changes." },
                        { title: "Avoid Penalties", desc: "Timely filing prevents additional fees and legal action." },
                        { title: "Operational Continuity", desc: "Ensures smooth business operations without regulatory hurdles." },
                        { title: "Governance", desc: "Reflects good corporate governance practices." }
                    ]
                }}
                eligibility={{
                    title: "Common Events",
                    subtitle: "Triggers for Compliance",
                    list: [
                        { title: "Director Changes", desc: "Appointment, resignation, or removal of Directors (Form DIR-12)." },
                        { title: "Office Shift", desc: "Change of Registered Office address within or outside the city/state (Form INC-22)." },
                        { title: "Capital Change", desc: "Increase in Authorized Share Capital (Form SH-7) or Allotment of Shares (Form PAS-3)." },
                        { title: "Name Change", desc: "Changing the name of the Company (Form INC-24)." },
                        { title: "Resolutions", desc: "Filing of Special Resolutions with ROC (Form MGT-14)." }
                    ]
                }}
                process={{
                    title: "Filing Process",
                    subtitle: "General workflow for event-based filings",
                    steps: [
                        { step: "01", title: "Event Occurrence", desc: "The specific event (e.g., Board Meeting decision) takes place." },
                        { step: "02", title: "Documentation", desc: "Prepare necessary documents like Board Resolutions, notices, and consent letters." },
                        { step: "03", title: "Form Preparation", desc: "Fill the relevant e-form on the MCA portal with correct details." },
                        { step: "04", title: "Certification", desc: "Get the form certified by a practicing professional (CA/CS/CMA) if required." },
                        { step: "05", title: "Submission", desc: "File the form with the ROC and pay the requisite government fee." },
                        { step: "06", title: "Approval", desc: "ROC processes the form and approves the change." }
                    ]
                }}
                whyUs={{
                    title: "Why Corpbiz?",
                    subtitle: "Expert handling of corporate events",
                    list: [
                        { title: "Timely Filing", desc: "We ensure all forms are filed within the due date to avoid penalties." },
                        { title: "Expert Guidance", desc: "Our professionals guide you through the legal requirements of each event." },
                        { title: "Accuracy", desc: "We ensure all documents and forms are error-free." },
                        { title: "End-to-End Support", desc: "From drafting resolutions to obtaining ROC approval, we handle it all." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default EventBasedCompliances;
