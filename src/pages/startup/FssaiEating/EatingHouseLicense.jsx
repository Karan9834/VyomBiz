import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    Coffee,
    Users
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TrustedBrands from "../../../components/myHome/TrustedBrands.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";

const EatingHouseOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Police Department
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Eating House Permit – <span className="text-[#005a9c]">Legal Consent</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            An Eating House License is legal consent required for undertaking any business where food or beverages are supplied for public consumption. This is a mandatory prerequisite along with FSSAI and Health Trade licenses.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The license is governed by the City Police Act (e.g., Delhi Police Act) and must be applied for under the City Police Headquarters or Police Commissioner. Authorities grant the license after a rigorous inspection of the premises and documentation.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
                            alt="Eating House License Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const EatingHouseAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Eating House License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Benefits and legal importance of the Eating House License.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80"
                            alt="Eating House License Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Full Legal Compliance", desc: "Operating without this license is a punishable offense under police regulations." },
                        { title: "Operational Security", desc: "Ensures your business can run without fear of sudden police shutdowns." },
                        { title: "Public Safety Assurance", desc: "Validates that your premises meet building and electrical safety standards." },
                        { title: "Staff Credibility", desc: "Includes police verification of employees for enhanced security." },
                        { title: "Hygienic Environment", desc: "Requirement for medical certificates ensures high staff hygiene." },
                        { title: "Brand Reputation", desc: "Proper licensing reflects a professional and trustworthy establishment." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-[20px] font-semibold text-[#072b47] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const EatingHouseLicense = () => {
    const faqs = [
        {
            question: "What is an Eating House License?",
            answer: "An Eating House License is a legal permit required to operate any business where food or beverages are supplied for consumption, such as restaurants, cafes, and food trucks. In cities like Delhi, it is issued by the Police Licensing department."
        },
        {
            question: "Is it mandatory to have an FSSAI license for an Eating House?",
            answer: "Yes, an FSSAI food license is a fundamental prerequisite. You must have a valid FSSAI certificate before applying for the Eating House License."
        },
        {
            question: "How long does it take to get the license?",
            answer: "Usually, it takes about 30 to 60 days to obtain an Eating House License. The timeline depends on the verification of documents and physical inspection by the police authorities."
        },
        {
            question: "What is the validity of an Eating House License?",
            answer: "The validity period is specified by the Registering Authority at the time of issuance. It is often linked to the validity of other documents like the Fire NOC or Trade License."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Eating House"
                heroTitleSuffix="License"
                heroSubtitle="Legal Authorization for Food Service Outlets"
                heroDescription="Setting up a restaurant or cafe? An Eating House License is a mandatory legal permit from the Police Department. We handle the entire documentation and verification process to ensure a smooth setup for your outlet."
                whatsIncludedList={[
                    "Police Department Liaisoning",
                    "Mandatory Licensing Audit",
                    "Online Application Processing",
                    "Safety Certificate Validation",
                    "Document Verification Support",
                    "Inspection Coordination Services"
                ]}
                stats={[
                    { count: "10K+", label: "Outlets Licensed", icon: <Coffee size={20} /> },
                    { count: "30-60 Days", label: "Grant Period", icon: <ShieldCheck size={20} /> },
                    { count: "50+", label: "Required Docs", icon: <Users size={20} /> }
                ]}
            />

            <TrustedBrands />
            <TalkExpert />

            <DetailsLayout
                overview={<EatingHouseOverview />}
                advantages={<EatingHouseAdvantages />}
                eligibility={{
                    title: "Eligibility Criteria",
                    subtitle: "Who can apply for an Eating House License?",
                    list: [
                        { title: "Owner Integrity", desc: "The applicant must have no criminal record related to food safety or public order." },
                        { title: "Premises Suitability", desc: "The location must be in a commercial zone with approved building plans." },
                        { title: "Safety Compliant", desc: "Must have valid Fire Safety and Health Trade certificates." },
                        { title: "Mandatory FSSAI", desc: "A valid FSSAI license is a non-negotiable prerequisite." },
                        { title: "Citizen Identity", desc: "Open to Indian citizens and companies registered in India." }
                    ]
                }}
                documents={{
                    title: "Documents Required",
                    description: "Key papers required for police verification.",
                    list: [
                        "Identity and Address Proof of the Applicant",
                        "Proof of Possession (Ownership/Lease/Rent Agreement)",
                        "FSSAI License Certificate",
                        "Fire Department No Objection Certificate (NOC)",
                        "Health Trade License from Municipality",
                        "Site Plan/Blueprint of the eating house",
                        "Logo and Passport size photographs of the applicant",
                        "Pollution NOC from State Board"
                    ]
                }}
                process={{
                    title: "The Licensing Flow",
                    subtitle: "Step-by-step procedure to secure the Eating House License.",
                    steps: [
                        { step: "01", title: "Registration", desc: "Register on the Police Licensing portal and obtain unique login IDs." },
                        { step: "02", title: "Online Application", desc: "Fill out the comprehensive application form with all business details." },
                        { step: "03", title: "Document Upload", desc: "Upload clear, scanned copies of all safety and legal documents." },
                        { step: "04", title: "Physical Verification", desc: "Visit the licensing unit for original document verification if summoned." },
                        { step: "05", title: "Inspector Visit", desc: "Premises inspection by a police officer to check safety and layout." },
                        { step: "06", title: "Grant", desc: "The license is issued via the online portal after final approval." }
                    ]
                }}
                features={{
                    title: "Service Features",
                    subtitle: "How we assist with Eating House Permits.",
                    list: [
                        { title: "End-to-End Assistance", desc: "From police portal registration to the final license grant." },
                        { title: "NOC Coordination", desc: "We help you obtain Fire and Health NOCs required for this permit." },
                        { title: "Staff Verification", desc: "Assistance in employee police verification forms and filings." },
                        { title: "Compliance Reminders", desc: "Timely alerts for license renewals to avoid illegal operations." }
                    ]
                }}
                postCompliance={{
                    title: "Post Compliance",
                    subtitle: "Operate your eating house legally and safely.",
                    list: [
                        "Display of license at a prominent place in the outlet",
                        "Ensuring CCTV cameras are operational as per police norms",
                        "Renewal of the license before its expiration date",
                        "Updating the authority about changes in management/ownership",
                        "Maintaining medical fitness records for all food handlers",
                        "Adhering to closing time regulations set by city police"
                    ]
                }}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default EatingHouseLicense;
