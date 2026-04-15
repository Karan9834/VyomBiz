import React from "react";
import { Clock, FileText, Users, Building2, Shield, AlertTriangle } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const AppointmentandResignationofDirectors = () => {
    const navLabels = {
        overview: "Overview",
        advantages: "ROC Filing",
        eligibility: "Appointment",
        postCompliance: "Resignation",
        documents: "Documents Required",
        process: "Process",
        features: "Benefits",
        whyChooseUs: "Why Choose Us",
        faq: "FAQs"
    };

    const faqs = [
        {
            question: "How long does the appointment of a director take?",
            answer: "The process usually takes a few working days once all documents are available and forms are filed with the ROC."
        },
        {
            question: "Is Director Identification Number (DIN) mandatory?",
            answer: "Yes. A DIN is mandatory for anyone who wishes to become a director in an Indian company."
        },
        {
            question: "Can a director resign without board approval?",
            answer: "A director can submit a resignation letter, but the company must formally record and file the resignation with the ROC."
        },
        {
            question: "What happens if director changes are not reported to MCA?",
            answer: "Failure to report director changes may lead to penalties and compliance issues under the Companies Act."
        },
        {
            question: "Can a company appoint multiple directors?",
            answer: "Yes. A company can appoint multiple directors depending on its structure and board requirements, provided it complies with the statutory limits."
        }
    ];

    const overviewData = {
        title: "Appointment and Resignation of Directors –",
        highlightTitle: "Overview",
        description: [
            "In every company, directors play a crucial role in governance, strategic decision-making, and regulatory compliance. Whether a business is appointing a new director or accepting the resignation of an existing one, the process must follow the provisions laid down under the Companies Act, 2013 and the rules of the Ministry of Corporate Affairs (MCA).",
            "Any change in the board of directors must be formally documented and filed with the Registrar of Companies (ROC) within the specified timelines. Failure to comply may lead to penalties and compliance issues for the company.",
            "Vyombiz managed by Clink Consultancy Services Private Limited helps businesses handle director appointments and resignations smoothly by managing documentation, board resolutions, and MCA filings, ensuring that every legal requirement is met efficiently."
        ]
    };

    const advantagesData = {
        title: "Why Director Changes Must Be Filed with ROC",
        subtitle: "Director appointments and resignations cannot simply be decided internally. These changes must be reported to regulatory authorities to maintain transparency and legal compliance.",
        list: [
            { title: "Maintaining updated company records with MCA", desc: "Corporate changes must be reflected in government records." },
            { title: "Ensuring transparency in company leadership", desc: "Provides clarity on who is managing the company." },
            { title: "Avoiding penalties for non-compliance", desc: "Prevents fines imposed for delayed filings." },
            { title: "Ensuring legal validity of board decisions", desc: "Legitimitizes board meetings and decisions made by directors." },
            { title: "Maintaining proper corporate governance", desc: "Safeguards against mismanagement." }
        ],
        description: "When companies fail to notify the ROC about director changes, it may lead to regulatory scrutiny and operational complications."
    };

    const eligibilityData = {
        title: "Appointment of a Director in a Company",
        subtitle: "The appointment of a director occurs when a company adds a new individual to its board of directors. This may happen due to company expansion, replacement of an existing director, or strengthening leadership expertise. Common situations where director appointment is required:",
        list: [
            { title: "First Directors", desc: "Appointment of the first directors during company incorporation." },
            { title: "Additional Director", desc: "Appointment of an additional director by the board." },
            { title: "Managing / Whole-time Director", desc: "Appointment of a managing director or whole-time director." },
            { title: "Independent Director", desc: "Appointment of an independent director." },
            { title: "Replacement", desc: "Replacement of a resigning director." }
        ],
        description: "Each of these appointments requires proper documentation, board resolutions, and filing of forms with the Ministry of Corporate Affairs. Vyombiz managed by Clink Consultancy Services Private Limited ensures that the appointment process is completed accurately while complying with statutory regulations."
    };

    const postComplianceData = {
        title: "Resignation of a Director",
        subtitle: "A director may resign from their position due to personal reasons, professional commitments, or changes in company management. When a director resigns, the company must formally record the resignation and notify the Registrar of Companies. The resignation becomes legally effective only when the proper documentation and filings are completed. Typical steps include:",
        list: [
            { title: "Submission of Resignation", desc: "Submission of resignation letter by the director." },
            { title: "Board Meeting", desc: "Board meeting to acknowledge the resignation." },
            { title: "Updating Registers", desc: "Updating statutory registers." },
            { title: "MCA Filings", desc: "Filing required forms with MCA." },
            { title: "Updating Records", desc: "Updating company records." }
        ],
        description: "Proper handling of director resignations protects both the company and the director from legal complications."
    };

    const processData = {
        title: "Step-by-Step Process",
        subtitle: "With expert guidance from Vyombiz managed by Clink Consultancy Services Private Limited, companies can complete this process quickly and without compliance errors.",
        steps: [
            { step: "01", title: "Document Collection", desc: "All necessary documents and details of the director are collected and verified." },
            { step: "02", title: "Board Resolution", desc: "The company passes a board resolution approving the appointment or acknowledging the resignation." },
            { step: "03", title: "Preparation of Compliance Documents", desc: "Statutory forms and legal documentation are prepared according to MCA guidelines." },
            { step: "04", title: "Filing with ROC", desc: "Relevant forms are submitted electronically with the Registrar of Companies." },
            { step: "05", title: "Compliance Confirmation", desc: "Once approved, the company records are updated with the new director details." }
        ]
    };

    const documentsData = {
        title: "Documents Required",
        description: "To complete the appointment or resignation of directors, certain documents must be submitted for compliance and regulatory filing. Accurate documentation is essential for successful filing with the ROC. Common documents include:",
        list: [
            "PAN card of the director",
            "Identity proof (Aadhar / Passport / Voter ID)",
            "Address proof",
            "Director Identification Number (DIN)",
            "Consent to act as director",
            "Board resolution for appointment/resignation",
            "Resignation letter (in case of resignation)"
        ],
        imageUrl: "Documents.jpg"
    };

    const featuresData = {
        title: "Benefits of Professional Assistance",
        subtitle: "Handling director changes through professional compliance experts offers several advantages.",
        list: [
            { title: "Error-free legal documentation", desc: "Avoids costly mistakes in filings." },
            { title: "Faster filing with MCA", desc: "Timely submission preventing delays." },
            { title: "Reduced risk of penalties", desc: "Compliance within the required timeframe." },
            { title: "Expert compliance guidance", desc: "Clear directions on legal procedures." },
            { title: "Smooth corporate governance transition", desc: "Keeps your board functioning properly." }
        ],
        description: "Professional support ensures that businesses stay compliant while focusing on their core operations."
    };

    const whyChooseUsData = {
        title: "Why Choose Vyombiz for Director Appointment & Resignation Services",
        subtitle: "Businesses require accuracy, compliance expertise, and timely filings when managing board changes. Vyombiz managed by Clink Consultancy Services Private Limited provides comprehensive secretarial compliance services designed to simplify complex regulatory procedures. Our advantages include:",
        list: [
            { title: "Experienced compliance professionals", desc: "Expert guidance on corporate governance." },
            { title: "End-to-end documentation support", desc: "Complete handling of forms and resolutions." },
            { title: "Quick MCA filing process", desc: "Ensures no deadlines are missed." },
            { title: "Transparent service process", desc: "You are informed at every step." },
            { title: "Reliable advisory support for businesses", desc: "Continuous support for compliance." }
        ],
        description: "We help companies maintain regulatory compliance while ensuring smooth corporate governance operations."
    };

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="Appointment and"
                heroTitleSuffix="Resignation of Directors"
                heroSubtitle="Manage Director Changes with Complete Legal Compliance"
                heroDescription="Appointing or resigning a director in a company involves strict regulatory procedures under the Companies Act. Ensure your company updates are filed correctly and on time with expert compliance support. ✔ Appointment of new directors ✔ Director resignation filings ✔ MCA documentation & compliance ✔ End-to-end professional assistance. Stay compliant. Keep your company governance strong."
                whatsIncludedList={[
                    "Appointment of new directors",
                    "Director resignation filings",
                    "MCA documentation & compliance",
                    "End-to-end professional assistance"
                ]}
                stats={[
                    { count: "Expert", label: "Compliance Support", icon: <Users size={20} /> },
                    { count: "MCA", label: "Fast ROC Filings", icon: <Building2 size={20} /> },
                    { count: "Secure", label: "Documentation", icon: <Shield size={20} /> }
                ]}
            />
            <TalkExpert />

            <DetailsLayout
                navLabels={navLabels}
                overview={overviewData}
                advantages={advantagesData}
                eligibility={eligibilityData}
                postCompliance={postComplianceData}
                process={processData}
                documents={documentsData}
                features={featuresData}
                whyChooseUs={whyChooseUsData}
            />

            <div className="bg-[#002147] py-16 mt-8">
                <div className="max-w-4xl mx-auto px-5 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Need Help with Director Appointment or Resignation?</h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Ensure every director change is filed correctly and on time with expert compliance support. Get professional assistance from Vyombiz managed by Clink Consultancy Services Private Limited and keep your business legally compliant without complications.</p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors">Start Your Compliance Process Today</button>
                </div>
            </div>

            <FAQLayout title="Frequently Asked Questions" subtitle="Important queries regarding director appointment and resignation" faqs={faqs} />
        </div>
    );
};

export default AppointmentandResignationofDirectors;
