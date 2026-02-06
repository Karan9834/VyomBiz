import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Calendar,
    AlertTriangle
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const FssaiAnnualReturn = () => {
    const faqs = [
        {
            question: "Who is eligible for filing the FSSAI annual return?",
            answer: "FBOs with a turnover exceeding ₹12 Lakhs engaged in manufacturing, importing, sorting, export, or distribution are eligible. This includes all licensed food manufacturers and importers."
        },
        {
            question: "What is the due date for FSSAI Annual Return (Form D-1)?",
            answer: "Every licensed FBO must file their annual return under Form D-1 on or before 31st May of every financial year."
        },
        {
            question: "What is the penalty for late filing of FSSAI returns?",
            answer: "Any delay beyond May 31st attracts a penalty of ₹100 per day. The total penalty cannot exceed five times the annual licensing fee."
        },
        {
            question: "What details are required for the filing?",
            answer: "You need details of food items manufactured/sold, production quantity in Metric Tons, value of products, and details of any exports or imports including countries and ports."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI Annual"
                heroTitleSuffix="Return Filing"
                heroSubtitle="Stay Compliant with Mandatory Yearly Reporting"
                heroDescription="All licensed food manufacturers, importers, and packers in India are required to file FSSAI annual returns. Ensure your business remains in good standing by submitting accurate production and sale data before the May 31st deadline."
                whatsIncludedList={[
                    "Form D-1 & D-2 Preparation",
                    "FoSCoS Portal Submission",
                    "Production & Sale Data Audit",
                    "Half-Yearly Return (Milk Units)",
                    "Penalty Avoidance Verification",
                    "Expert Compliance Consulting"
                ]}
                stats={[
                    { count: "May 31st", label: "Due Date", icon: <Calendar size={20} /> },
                    { count: "₹100/day", label: "Late Penalty", icon: <AlertTriangle size={20} /> },
                    { count: "99%", label: "Success Rate", icon: <ShieldCheck size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={{
                    badge: "Mandatory Filing",
                    title: "FSSAI Yearly Returns –",
                    highlightTitle: "Compliance Management",
                    description: [
                        "FSSAI annual return filing is a mandatory requirement for food business operators including manufacturers, importers, packers, and labellers. It involves submitting essential information regarding production, handling, and storage to the FSSAI authorities.",
                        "The revised guidelines mandate online filing through the FoSCoS portal. This process ensures transparency in the food supply chain and helps the government monitor food safety across the nation.",
                        <strong>Who must file?</strong>,
                        "Every FBO with a business turnover exceeding ₹12 Lakhs and those engaged in manufacturing, repackaging, or importing food products must file their returns annually."
                    ],
                    whyIdealTitle: "Key Benefits",
                    whyIdealList: [
                        { title: "Market Reputation", desc: "Demonstrates commitment to food safety, enhancing your public image." },
                        { title: "Brand Value", desc: "Showcases compliance with regulations, increasing consumer trust." },
                        { title: "Legal Safety", desc: "Avoid daily penalties and hurdles during license renewals." }
                    ]
                }}
                advantages={{
                    title: "Advantages of Filing",
                    subtitle: "Why staying up-to-date with FSSAI returns is crucial.",
                    list: [
                        { title: "Maintain Brand Trust", desc: "Showcase transparency in your food production and sale operations." },
                        { title: "Government Support", desc: "Compliant entities are more likely to receive government subsidies." },
                        { title: "Improved Efficiency", desc: "Regular filing helps in tracking production trends and business growth." },
                        { title: "Consumer Safety", desc: "Ensures adherence to safety standards that protect the end consumer." },
                        { title: "Smooth Licensing", desc: "A clean filing record makes the FSSAI license renewal process much easier." },
                        { title: "Legal Defense", desc: "Acting as proof that your business follows all mandated safety regulations." }
                    ]
                }}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who is required to file FSSAI Annual Returns?",
                    list: [
                        { title: "Licensed Manufacturers", desc: "All food production units holding an FSSAI State or Central license." },
                        { title: "Food Importers", desc: "Organizations bringing food products into the Indian territory." },
                        { title: "Packers & Labellers", desc: "Entities involved in packaging and labelling of food articles." },
                        { title: "Milk Business Units", desc: "Special half-yearly filing requirements for those in the dairy sector." },
                        { title: "Exporter FBOs", desc: "Businesses involved in shipping food products to international markets." }
                    ]
                }}
                documents={{
                    title: "Information Required",
                    description: "Details you need to prepare for the Filing.",
                    list: [
                        "FSSAI License Number and Portal Login Details",
                        "List of Food Items manufactured or handled",
                        "Quantity produced/handled in Metric Tons (MT)",
                        "Detailed value of food products (Unit Price)",
                        "Quantity of raw materials imported or exported",
                        "List of countries to which food is exported",
                        "Details of ports where import/export occurred",
                        "Water analysis reports and safety audit records"
                    ]
                }}
                process={{
                    title: "Filing Procedure",
                    subtitle: "Step-by-step path to complete your annual return.",
                    steps: [
                        { step: "01", title: "Portal Login", desc: "Log in to the official FSSAI portal using your license credentials." },
                        { step: "02", title: "Verification", desc: "Complete the OTP verification to access the annual return sub-menu." },
                        { step: "03", title: "Form Selection", desc: "Choose Form D-1 (Annual) or Form D-2 (Half-Yearly for milk units)." },
                        { step: "04", title: "Data Entry", desc: "Accurately fill in the production, sales, and export/import details." },
                        { step: "05", title: "Electronic Submission", desc: "Revise all entries and submit the electronic form to the Food Safety Authority." }
                    ]
                }}
                features={{
                    title: "Service Features",
                    subtitle: "Why choose us for your return filing?",
                    list: [
                        { title: "Data Accuracy", desc: "We ensure your production and sales figures are accurately formatted for FSSAI." },
                        { title: "Penalty-Free Filing", desc: "Our team tracks deadlines for you to avoid the ₹100/day late penalty." },
                        { title: "Audit Ready", desc: "We organize your files so you are always ready for a sudden FSSAI inspection." },
                        { title: "Multi-Unit Support", desc: "Special specialized support for enterprises with multiple manufacturing plants." }
                    ]
                }}
                postCompliance={{
                    title: "Post Filing Actions",
                    subtitle: "What to do after submitting your returns.",
                    list: [
                        "Download and save the filing acknowledgment for records",
                        "Address any queries raised by the Food Safety Commissioner",
                        "Update your internal records with the submitted data",
                        "Conduct an internal mock audit to ensure data consistency",
                        "Plan for the next half-yearly or annual cycle in advance",
                        "Report any significant change in production capacity immediately"
                    ]
                }}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiAnnualReturn;
