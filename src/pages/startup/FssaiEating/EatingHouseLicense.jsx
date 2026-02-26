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
                            Eating House License – <span className="text-[#005a9c]">Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            An Eating House License refers to legal consent for undertaking business where any kind of food or beverages is supplied for consumption legally. The Eating house license serves as a mandatory prerequisite for conducting food business along with other fundamental licenses.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The Eating House refers to a place where various food-related items along with beverages are being served to the masses for consumption. This encompasses all retail outlets, dhabas, restaurants, cafes, food trucks, & any other establishments to facilitate food & drink.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            <strong className="text-[#072b47]">Authority Issuing the License</strong><br />
                            The license is a legal compulsion as per the Delhi Police Act and should be applied under State/city police headquarters & the Police commissioner. The authority will grant the license after inspecting all the submitted documents.
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
                        The Eating House License is a mandatory prerequisite for operating a food business. Here are the reasons why it's crucial:
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

const EatingHouseEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility & Other Licenses
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Who can apply for an Eating House License, and what other licenses are required?
                </p>
                <div className="mb-10">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed list-disc pl-6">
                        <li><span className="font-semibold text-[#072b47]">Establishment Scope – </span>Encompasses all retail outlets, dhabas, restaurants, cafes, food trucks, & any other establishments that facilitate food & drink.</li>
                        <li><span className="font-semibold text-[#072b47]">Business Registration – </span>A valid business entity registration is required.</li>
                        <li><span className="font-semibold text-[#072b47]">Food/FSSAI License – </span>A mandatory prerequisite to applying for this license.</li>
                        <li><span className="font-semibold text-[#072b47]">Health Trade License – </span>Necessary clearance from the local civic body.</li>
                        <li><span className="font-semibold text-[#072b47]">Fire NOC & Lift Clearance – </span>Required for premises safety.</li>
                        <li><span className="font-semibold text-[#072b47]">Other Clearances – </span>Environmental Clearance, Registration under Shops & Establishment Act, Insurance, and Weights & Measures Approval.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const EatingHouseDocuments = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Mandatory Documents
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Following is the list of Documents that need to be uploaded along with the Application:
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed grid sm:grid-cols-2 gap-x-6">
                        <li>Identity proof (Aadhar/Passport/Voter ID/Driving License/PAN)</li>
                        <li>Address proof (Electricity/Landline Bill, Rent/lease deed)</li>
                        <li>Certificate of incorporation & Name of directors/Board Resolution</li>
                        <li>Proof of ownership or Tenancy agreement of the premises</li>
                        <li>Copy of paid water & Electricity Bill</li>
                        <li>Safety certificate of building (by architect/structural engineer)</li>
                        <li>Electrical safety certificate & Lift fitness certificate</li>
                        <li>Details of property tax, regularization, or conversion charges paid</li>
                        <li>FSSAI certificate & GST Certificate</li>
                        <li>Medical certificate of employees with photographs</li>
                        <li>Details of all employees with police verification certificate</li>
                        <li>Environment clearance certificate & Pollution NOC</li>
                        <li>PAN of the proprietor or company</li>
                        <li>Details of layout plan, pest control, and rainwater harvesting</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const EatingHouseProcess = () => {
    const steps = [
        { step: "01", title: "Fill out Application", desc: "The applicant is required to apply for online Eating House Registration in the prescribed Application Form." },
        { step: "02", title: "Submission of Documents", desc: "Upload all the required Documents along with the necessary declaration and certification." },
        { step: "03", title: "Document Verification", desc: "Go to Addl. Commissioner of Police Licensing of the concerned state for an Application and Documents verification." },
        { step: "04", title: "Follow-up", desc: "The applicant is required to keep a regular follow-up with the concerned department for updates regarding the Application." },
        { step: "05", title: "Issuance of License", desc: "Issuance of license takes 30-60 days. If the licensing authority is satisfied, it will issue a license within this period." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-step Procedure
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Procedure for obtaining an Eating House license in India.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
                            alt="The Licensing Flow"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">{index + 1}.</div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">{step.title}</h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const EatingHouseFeatures = () => {
    const features = [
        { title: "Vast Experience", desc: "Vast experience in dealing with Government licenses and Registration." },
        { title: "Prompt Delivery", desc: "Ensure prompt delivery of license in the agreed time span." },
        { title: "Reduce Intricacies", desc: "Reduce intricacies in the registration process through efficient handling of paperwork." },
        { title: "In-depth Knowledge", desc: "In-depth knowledge of applicable legalities and underlying compliances for registering an entity." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Trusted Eating House License Support
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Here's Why You Might Want To Consider Our Expertise.
                    </p>
                </div>
                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{feature.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const EatingHouseCompliance = () => {
    const compliance = [
        { title: "Renewal of the License", desc: "When the validity expires, it must be renewed. The validity varies state-wise, typically 3 years. The renewal process is identical to a new license." },
        { title: "Duplicate License", desc: "If the license gets damaged or lost, the applicant can opt for a duplicate license against standard fees via the portal." },
        { title: "Health Trade Validity", desc: "The license validity often depends on the validity of the health trade license issued by the local civic body." }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Renewal & Duplicates
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Post Compliance procedures for your Eating House License.
                    </p>
                </div>
                <div>
                    {compliance.map((item, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{item.title}</h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
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
                eligibility={<EatingHouseEligibility />}
                documents={<EatingHouseDocuments />}
                process={<EatingHouseProcess />}
                features={<EatingHouseFeatures />}
                postCompliance={<EatingHouseCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default EatingHouseLicense;
