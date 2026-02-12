import React from "react";
import {
    Award,
    CheckCircle,
    Globe,
    Shield,
    FileText,
    TrendingUp,
    CheckSquare
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import ISODetailsLayout from "../../startup/ISO/ISODetailsLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ClosingLLP = () => {
    const faqs = [
        {
            question: "What is Limited Liability Partnership?",
            answer: "A 'Limited Liability Partnership', i.e. LLP, is a partnership under which some or all the associates have limited liability. It provides the benefits of limited liability of a company along with the flexibility of a partnership."
        },
        {
            question: "What are the cases in which closing a limited liability partnership is required?",
            answer: "Two main cases: When the LLP is inoperative from the date of incorporation or inactive for at least one year; or When LLP does not have any assets/liabilities as on the date of application."
        },
        {
            question: "What is the strike-off method for Closing a Limited Liability Partnership?",
            answer: "In matters where the LLP wants to close down its business or where it is not carrying on any business operations for one year or more, the title of LLP can be struck off by the register or by the LLP in 'e-Form 24' with the consent of all partners."
        },
        {
            question: "What is the effectiveness of E-Form 24 in Closing a Limited Liability Partnership?",
            answer: "E-Form 24 is used for producing an application to the Registrar of Companies for striking off the name of the LLP or closing a limited liability partnership."
        },
        {
            question: "What are the conditions for striking off a defunct Limited Liability Partnership?",
            answer: "Key conditions include: The LLP has been inactive and has not conducted any business activities since incorporation; No bank account; No creditors, assets or liabilities; and has not performed any business operations for at least one year."
        },
        {
            question: "In a matter of the closing a Limited Liability Partnership, who has to sign the form?",
            answer: "The designated partners have to sign the application along with the consent of all partners for closing a limited liability partnership."
        },
        {
            question: "What is the Qualification for Closing an LLP?",
            answer: "Minimum one year has crossed after incorporation of the LLP for making an application for striking off the name of the LLP or closing an LLP."
        },
        {
            question: "Is LLP needed to File all returns before applying for closing a Limited Liability Partnership?",
            answer: "If LLP started operation and closed in between, all returns shall be filed until the date of service of the LLP."
        },
        {
            question: "Whether LLP needs to file Income tax returns before filing application for closure of LLP?",
            answer: "In case business is originated and stopped in between, LLP shall file all Income tax returns till the date of administration. LLPs that did not begin service can file application for closure of LLP without filing returns."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Closing a"
                heroTitleSuffix="Limited Liability Partnership"
                heroSubtitle="LLP Form 24 Filing Services"
                heroDescription="Have Your LLP closure with our online LLP Form 24 filing services. Effortlessly navigate dissolution procedures to your Limited Liability Partnership."
                whatsIncludedList={[
                    "Preparation of Statement of Accounts",
                    "Filing of Form 24",
                    "NOC from Creditors",
                    "Indemnity Bond Drafting",
                    "Affidavit Preparation",
                    "Liaison with ROC"
                ]}
                stats={[
                    { count: "99%", label: "Success Rate", icon: <CheckCircle size={20} /> },
                    { count: "Expert", label: "Consultation", icon: <Globe size={20} /> },
                    { count: "Fast", label: "Processing", icon: <Award size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <ISODetailsLayout
                overview={{
                    title: "An Overview of Closing a Limited Liability Partnership",
                    imageUrl: "/ISO-overview.jpg", // Using placeholder or existing image for now
                    description: [
                        "Is your LLP away from performing business operations for the last 1 year? Does your LLP have not commenced its operations after registration? If yes, you must reconsider your decision to run an LLP business and proceed with closing a limited liability partnership.",
                        "The Limited Liability Partnership (LLP), which is not carrying on its business since its incorporation or which has terminated/stopped carrying on its business for a period of one year or more, can apply to the Registrar for its closure and also for removal of its name from the Register of the LLPs.",
                        "If the LLP has turned dormant, then it is better to close it than fulfilling all the compliances, and it is also better to close than pay a fine or penalty in case the LLP is inactive.",
                        "Our consultants at Corpbiz assist in closing a limited liability partnership efficiently and legally."
                    ]
                }}
                conditions={{
                    title: "Conditions for Closing an LLP",
                    list: [
                        { title: "Inactivity", desc: "It is not active since the date of its incorporation or for at least one year." },
                        { title: "No Assets/Liabilities", desc: "It does not have any asset/liability on the date of application." },
                        { title: "Closed Accounts", desc: "The current account of LLP has been closed." },
                        { title: "Mutual Consent", desc: "Consent of all the parties, such as a creditor, authority or partner, has been obtained." }
                    ]
                }}
                advantages={{
                    title: "Benefits of Closing an LLP",
                    subtitle: "Why should you close a dormant LLP?",
                    list: [
                        { title: "Compliance Free", desc: "There is no need of sticking on the track to stay compliant as the company would be dissolved anyway." },
                        { title: "No Penalty", desc: "Once the closure is initiated there is no need of the company to be worried about being in a state to pay the unaddressed causes." },
                        { title: "Appropriate Business", desc: "If the business which you have chosen is not running and generating profits, then resources can be utilized into a better one." }
                    ]
                }}
                eligibility={{
                    title: "Reasons for Closing",
                    subtitle: "Key reasons for closing a Limited Liability Partnership in India",
                    list: [
                        { title: "Purpose Completed", desc: "When the LLP is registered for a specific purpose, and the purpose is complete." },
                        { title: "Insolvency", desc: "The LLP has become insolvent." },
                        { title: "Inactivity", desc: "When the LLP is not active for at least one year." },
                        { title: "Court Order", desc: "The court has ordered the closing of LLP." },
                        { title: "Partner Disinterest", desc: "The partners of the LLP are not interested in continuing the partnership." },
                        { title: "Death of Partner", desc: "If, after the death of another partner/partners, the one who is alive wants to close the LLP." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "An application is required to be made in e-Form 24 to remove the name of the LLP.",
                    imageUrl: "/ISO-document-required.jpg",
                    list: [
                        "Address Proof of LLP",
                        "NOC from the landlord (Rent agreement + Utility bill)",
                        "Statement of Accounts (NIL assets/liabilities, certified by CA)",
                        "Copy of acknowledgement of latest ITR",
                        "Copy of the initial LLP agreement & changes",
                        "Affidavit signed by designated partners",
                        "NOC from Creditors",
                        "Copy of Detailed Application & Authority",
                        "Indemnity Bond"
                    ]
                }}
                process={{
                    title: "Process of Closing",
                    subtitle: "Step-by-step process for closing a Limited Liability Partnership",
                    steps: [
                        { step: "01", title: "Declaring LLP as Defunct", desc: "Make an application to the Registrar for declaring the entity as defunct. Registrar sends a notice and publishes it for one month." },
                        { step: "02", title: "Calling A Board Meeting", desc: "Call a Meeting of Partners to pass a resolution to close the LLP and authorize a Designated Partner to apply with the Registrar." },
                        { step: "03", title: "Setting Off Liabilities", desc: "Pay off all liabilities before proceeding with the winding up application." },
                        { step: "04", title: "File e-Form 24", desc: "File Form 24 with the Registrar for striking off the name of the LLP, along with required affidavits and indemnity bonds." },
                        { step: "05", title: "Registrar Approval", desc: "The Registrar reviews the application and, if satisfied, strikes off the name and dissolves the LLP." }
                    ]
                }}
                whyUs={{
                    title: "Why Choose Corpbiz",
                    subtitle: "Documentation for closing a limited liability partnership can be blissful and simple with experts at Corpbiz.",
                    list: [
                        { title: "Expert Assistance", desc: "Our experts guide you through the entire process, ensuring compliance with all legal requirements." },
                        { title: "Hassle-Free Process", desc: "We handle the documentation and filing, making the process smooth for you." },
                        { title: "Timely Completion", desc: "We ensure that the closure process is completed within the stipulated time." },
                        { title: "Comprehensive Support", desc: "From board meetings to filing forms, we support you at every step." }
                    ]
                }}
                faqs={faqs}
            />
        </div>
    );
};

export default ClosingLLP;
