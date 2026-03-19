import React from "react";
import { Users, FileText, CheckCircle, Shield, Building2, Clock } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const ChangeinDirectors = () => {
    const navLabels = {
        overview: "Overview",
        advantages: "Types of Changes",
        eligibility: "When it's Required",
        documents: "Documents Required",
        process: "Process",
        features: "Benefits",
        whyChooseUs: "Why Choose Us",
        faq: "FAQs"
    };

    const faqs = [
        {
            question: "How long does it take to change a director in a company?",
            answer: "The process usually takes 5–10 working days, depending on document availability and MCA processing time."
        },
        {
            question: "Is a DIN mandatory for becoming a director?",
            answer: "Yes. A Director Identification Number (DIN) is mandatory for anyone appointed as a director in an Indian company."
        },
        {
            question: "Can a director resign at any time?",
            answer: "Yes, a director can resign at any time by submitting a resignation letter to the company and filing the necessary forms with the MCA."
        },
        {
            question: "What happens if director changes are not reported?",
            answer: "Failure to report changes to the Registrar of Companies (ROC) may result in penalties and compliance issues for the company."
        }
    ];

    const overviewData = {
        title: "What is",
        highlightTitle: "Change in Directors?",
        description: [
            "A Change in Directors refers to any modification in the board composition of a company. This may include the appointment of a new director, resignation of an existing director, removal of a director, or replacement of a director.",
            "Every company registered under the Companies Act, 2013 must inform the Ministry of Corporate Affairs (MCA) whenever such changes occur. The update must be filed through prescribed forms and supported by necessary documentation.",
            "Handling this process properly is essential to maintain legal compliance and ensure the company’s governance structure remains valid.",
            "Businesses rely on Vyombiz managed by Clink Consultancy Services Private Limited to simplify these compliance procedures and avoid regulatory risks."
        ]
    };

    const advantagesData = {
        title: "Types of Director Changes",
        subtitle: "There are several ways a company's board of directors can be modified. Our team supports all types of director changes.",
        list: [
            { title: "Appointment of a New Director", desc: "A company may appoint a new director to expand its management team, bring in expertise, or meet statutory requirements." },
            { title: "Resignation of a Director", desc: "A director may voluntarily resign from their position. The company must record the resignation and notify the MCA within the required timeline." },
            { title: "Removal of a Director", desc: "Shareholders may remove a director before the completion of their tenure through a formal resolution." },
            { title: "Replacement of a Director", desc: "Companies may replace a director due to resignation, removal, retirement, or strategic restructuring." }
        ]
    };

    const eligibilityData = {
        title: "When is a Change in Directors Required?",
        subtitle: "A company may need to update its board structure in several situations:",
        list: [
            { title: "Business Expansion", desc: "Expansion of business operations requires a larger board." },
            { title: "Expert Onboarding", desc: "Appointment of expert advisors to the board." },
            { title: "Director Exit", desc: "Resignation or retirement of an existing director." },
            { title: "Statutory Requirements", desc: "Compliance with statutory director requirements." },
            { title: "Restructuring", desc: "Restructuring or ownership change." },
            { title: "Funding Checks", desc: "Investor onboarding or funding rounds require a specific board composition." }
        ],
        description: "With the assistance of Vyombiz managed by Clink Consultancy Services Private Limited, companies can handle these updates efficiently without delays or compliance risks."
    };

    const documentsData = {
        title: "Documents Required for Change in Directors",
        description: "To process the change in directors, the following documents are generally required. Submitting accurate documentation ensures smooth approval from the MCA.",
        list: [
            "Director Identification Number (DIN)",
            "PAN Card of the proposed director",
            "Identity proof (Aadhaar / Passport / Voter ID)",
            "Address proof",
            "Digital Signature Certificate (DSC)",
            "Consent to act as director (Form DIR-2)",
            "Board resolution for appointment or removal",
            "Resignation letter (if applicable)"
        ],
        imageUrl: "Documents.jpg"
    };

    const processData = {
        title: "Process for Change in Directors",
        subtitle: "Businesses choose Vyombiz managed by Clink Consultancy Services Private Limited to ensure the process is completed accurately and on time.",
        steps: [
            { step: "01", title: "Board Resolution", desc: "The company passes a board resolution approving the appointment, resignation, or removal of the director." },
            { step: "02", title: "Obtain Consent and Documents", desc: "The proposed director provides consent along with required identification documents." },
            { step: "03", title: "Filing with MCA", desc: "Relevant forms such as DIR-12 are filed with the Ministry of Corporate Affairs." },
            { step: "04", title: "ROC Approval", desc: "The Registrar of Companies reviews the application and updates the company’s official records." }
        ]
    };

    const featuresData = {
        title: "Benefits of Updating Directors Properly",
        list: [
            { title: "Legal Compliance", desc: "Maintaining updated director records ensures compliance with MCA regulations." },
            { title: "Transparent Governance", desc: "A well-structured board improves decision-making and corporate governance." },
            { title: "Investor Confidence", desc: "Investors prefer companies with clear and updated leadership structures." },
            { title: "Avoid Penalties", desc: "Failure to report changes within the required timeframe may lead to penalties." }
        ]
    };

    const whyChooseUsData = {
        title: "Why Choose Vyombiz for Director Changes?",
        subtitle: "Handling secretarial compliance requires precision and legal expertise. With Vyombiz managed by Clink Consultancy Services Private Limited, businesses receive professional assistance at every stage of the process.",
        list: [
            { title: "Expert compliance professionals", desc: "We provide specialized knowledge on MCA filings." },
            { title: "Accurate MCA filing", desc: "Error-free submissions preventing rejections." },
            { title: "End-to-end documentation support", desc: "We manage forms, resolutions, and KYC." },
            { title: "Faster processing timelines", desc: "Immediate responses and quick turnaround." },
            { title: "Transparent service approach", desc: "Total clarity on fees and timelines." }
        ],
        description: "Our goal is to make corporate compliance simple, reliable, and efficient for growing businesses."
    };

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Change in"
                heroTitleSuffix="Directors"
                heroSubtitle="Change in Directors of Your Company – Fast, Compliant & Hassle-Free"
                heroDescription="Update your company’s board structure smoothly with expert assistance. Whether appointing a new director or removing an existing one, ensure complete MCA compliance and legal accuracy. Stay compliant while focusing on growing your business."
                whatsIncludedList={[
                    "Appointing a new director",
                    "Removing an existing director",
                    "Board resolution drafting",
                    "MCA and ROC Filing (DIR-12)"
                ]}
                stats={[
                    { count: "Expert", label: "Professionals", icon: <Users size={20} /> },
                    { count: "Compliant", label: "MCA Standards", icon: <Shield size={20} /> },
                    { count: "Fast", label: "Turnaround", icon: <Clock size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                navLabels={navLabels}
                overview={overviewData}
                advantages={advantagesData}
                eligibility={eligibilityData}
                documents={documentsData}
                process={processData}
                features={featuresData}
                whyChooseUs={whyChooseUsData}
            />

            <div className="bg-[#002147] py-16 mt-8">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Need to Change Directors in Your Company?</h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Ensure accurate filings and seamless compliance with professional support. Get expert guidance from Vyombiz managed by Clink Consultancy Services Private Limited and complete your director change process quickly and smoothly.</p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors">Start your compliance process today</button>
                </div>
            </div>

            <FAQLayout title="Frequently Asked Questions" subtitle="Important queries regarding changes in company directors" faqs={faqs} />
        </div>
    );
};

export default ChangeinDirectors;