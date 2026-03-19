import React from "react";
import { CheckCircle, Shield, FileText, Building2, Star, Zap } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const SPICEForm = () => {
    const navLabels = {
        overview: "Overview",
        advantages: "Key Features",
        eligibility: "Structure",
        documents: "Documents Required",
        process: "Process",
        postCompliance: "Benefits",
        whyChooseUs: "Why Choose Us",
        faq: "FAQs"
    };

    const faqs = [
        {
            question: "What is the SPICe+ Form used for?",
            answer: "SPICe+ is used for online company incorporation and integrated statutory registrations through the MCA portal."
        },
        {
            question: "Is SPICe+ mandatory for company registration?",
            answer: "Yes. SPICe+ is the primary form used for company incorporation in India under MCA regulations."
        },
        {
            question: "Can GST registration be obtained through SPICe+?",
            answer: "Yes. Businesses can apply for GST registration during the SPICe+ filing process."
        },
        {
            question: "How long does SPICe+ incorporation take?",
            answer: "Typically, the company incorporation process through SPICe+ takes 7–10 working days, depending on document accuracy and MCA approval timelines."
        },
        {
            question: "Can foreign nationals become directors using SPICe+?",
            answer: "Yes. Foreign nationals can be directors, provided they submit valid identity and address proof."
        }
    ];

    const overviewData = {
        title: "What is",
        highlightTitle: "SPICe+ Form?",
        description: [
            "The SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) form is an integrated web-based application introduced by the Ministry of Corporate Affairs (MCA) for company incorporation in India.",
            "It simplifies the company registration process by combining multiple registrations and statutory services into a single digital form, making it easier for entrepreneurs to establish their business legally.",
            "Instead of submitting different applications for various registrations, SPICe+ allows promoters to complete the entire process through one consolidated workflow.",
            "Through SPICe+, businesses can obtain: Company incorporation certificate, Director Identification Number (DIN), PAN and TAN, GST registration, EPFO registration, ESIC registration, Professional Tax registration (for applicable states), and Bank account integration.",
            "Vyombiz managed by Clink Consultancy Services Private Limited helps entrepreneurs navigate the SPICe+ filing process smoothly, ensuring every document and compliance requirement is completed correctly."
        ]
    };

    const advantagesData = {
        title: "Key Features of SPICe+ Form",
        list: [
            { title: "Single Integrated Application", desc: "SPICe+ combines multiple registrations required for starting a business into one centralized form, reducing paperwork and saving time." },
            { title: "Faster Company Registration", desc: "Digital processing and MCA integration allow companies to be registered significantly faster compared to traditional incorporation procedures." },
            { title: "Automatic PAN & TAN Generation", desc: "Once the company is incorporated, PAN and TAN are automatically generated, eliminating the need for separate applications." },
            { title: "Integrated Compliance Registrations", desc: "The form includes optional registrations like GST, EPFO, and ESIC, enabling companies to become operational immediately after incorporation." },
            { title: "Digital and Paperless Process", desc: "All documents are uploaded digitally through the MCA portal, creating a completely paperless company formation process." }
        ]
    };

    const eligibilityData = {
        title: "Structure of SPICe+ Form",
        subtitle: "The SPICe+ form is divided into two major parts, each handling different stages of company incorporation.",
        list: [
            { title: "Part A – Name Reservation", desc: "Part A allows applicants to apply for and reserve a company name through the MCA portal. The proposed name must comply with MCA naming guidelines and should be unique and distinguishable from existing companies." },
            { title: "Part B – Company Incorporation", desc: "Once the name is approved, Part B is used to submit all details required for company incorporation, including: Company structure, Director details, Registered office address, Capital structure, Subscriber information, Statutory registrations." }
        ],
        description: "Vyombiz managed by Clink Consultancy Services Private Limited assists businesses in preparing accurate filings to avoid name rejection or application delays."
    };

    const documentsData = {
        title: "Documents Required for SPICe+ Filing",
        description: "To complete SPICe+ registration successfully, the following documents are typically required. Submitting clear and valid documentation ensures faster approval from MCA authorities.",
        list: [
            "PAN Card (Directors and Shareholders)",
            "Aadhaar Card / Passport",
            "Address proof (bank statement, utility bill)",
            "Passport size photograph",
            "Rental agreement or ownership proof for Registered Office",
            "Utility bill (electricity, gas, or water bill)",
            "NOC from property owner",
            "Memorandum of Association (MOA)",
            "Articles of Association (AOA)",
            "Digital Signature Certificates (DSC)"
        ],
        imageUrl: "Documents.jpg"
    };

    const processData = {
        title: "Step-by-Step SPICe+ Registration Process",
        subtitle: "Vyombiz managed by Clink Consultancy Services Private Limited ensures each step is handled professionally to minimize rejection risks and processing delays.",
        steps: [
            { step: "01", title: "Obtain Digital Signature Certificate (DSC)", desc: "Directors and subscribers must obtain a DSC to sign documents electronically." },
            { step: "02", title: "Reserve Company Name", desc: "Submit the proposed company name through SPICe+ Part A for MCA approval." },
            { step: "03", title: "Prepare Incorporation Documents", desc: "Draft MOA, AOA, and other supporting documents required for incorporation." },
            { step: "04", title: "Complete SPICe+ Part B", desc: "Submit company details, director information, registered office details, and capital structure." },
            { step: "05", title: "Apply for Statutory Registrations", desc: "Select optional registrations like GST, EPFO, ESIC, and Professional Tax if applicable." },
            { step: "06", title: "Certificate of Incorporation", desc: "Once approved by MCA, the company receives its Certificate of Incorporation along with PAN and TAN." }
        ]
    };

    const postComplianceData = {
        title: "Benefits of SPICe+ Company Registration",
        list: [
            { title: "Simplified Compliance", desc: "SPICe+ removes the complexity of applying for different registrations separately by integrating them into a single application." },
            { title: "Faster Business Launch", desc: "Entrepreneurs can start business operations quickly as most statutory registrations are completed during incorporation." },
            { title: "Cost Efficient", desc: "Combining multiple registrations into one process reduces administrative and compliance costs." },
            { title: "Government-Approved System", desc: "The process operates directly through the MCA platform, ensuring transparency and legal compliance." },
            { title: "Better Startup Readiness", desc: "With GST, EPFO, ESIC, and bank account integration available during incorporation, businesses are operational from day one." }
        ],
        description: "Vyombiz managed by Clink Consultancy Services Private Limited ensures that businesses benefit from the most efficient company registration approach available under MCA regulations."
    };

    const whyChooseUsData = {
        title: "Why Choose Vyombiz for SPICe+ Filing?",
        subtitle: "Starting a company involves multiple legal and compliance requirements. Working with experienced professionals ensures your application is accurate, compliant, and approved quickly. Vyombiz managed by Clink Consultancy Services Private Limited provides structured support throughout the incorporation process, including:",
        list: [
            { title: "Professional guidance", desc: "Complete professional guidance for SPICe+ filing." },
            { title: "Name approval assistance", desc: "Quick and compliant name approval assistance." },
            { title: "Documentation preparation", desc: "Accurate and seamless documentation preparation." },
            { title: "MCA compliance support", desc: "Total lifecycle MCA compliance support." },
            { title: "End-to-end management", desc: "End-to-end company registration management." }
        ],
        description: "With expert handling, entrepreneurs can focus on building their business while the compliance process is managed efficiently."
    };

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            <HeroLayout
                heroTitleMain="SPICe+"
                heroTitleSuffix="Form"
                heroSubtitle="Register Your Company Faster with SPICe+ Form"
                heroDescription="Start your business journey with a single integrated company registration form approved by the Ministry of Corporate Affairs. Get company incorporation, PAN, TAN, GST, EPFO, ESIC, and bank account integration — all through one streamlined application. Launch your company the smart way."
                whatsIncludedList={[
                    "Faster approvals",
                    "Paperless process",
                    "Government integrated registration",
                    "PAN, TAN & GST generation"
                ]}
                stats={[
                    { count: "MCA", label: "Approved Form", icon: <Building2 size={20} /> },
                    { count: "Integrated", label: "Registrations", icon: <CheckCircle size={20} /> },
                    { count: "Faster", label: "Incorporation", icon: <Zap size={20} /> }
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
                postCompliance={postComplianceData}
                whyChooseUs={whyChooseUsData}
            />

            <FAQLayout title="Frequently Asked Questions (FAQs)" subtitle="Common queries on SPICe+ company registration" faqs={faqs} />
        </div>
    );
};

export default SPICEForm;