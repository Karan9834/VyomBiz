import React from "react";
import { Briefcase, Building2, TrendingUp, ShieldCheck, CheckCircle2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

const MSMEOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Business Foundation
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            MSME Registration – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            MSME stands for Micro, Small, and Medium Enterprises, which are considered one of the backbones of the Indian economy. These industries are often referred to as Small Scale Industries (SSIs). It is highly recommended that every MSME-based business obtain MSME registration from the Government of India and enjoy subsidies, rebates, and other financial benefits to empower their business venture.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Recently, the MSME Udyam registration process replaced the old micro, small, and medium enterprise registration process, making it easier and faster to register MSME online. Businesses that meet the MSME criteria can apply for registration on the official Udyam portal, where they will receive a permanent registration number online.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is MSME Udyam Registration?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            MSME Udyam registration is essentially an MSME registration that every Micro, Small, and Medium Enterprise in India should obtain from the Government of India. While it is not mandatory, having it provides access to various government benefits, including tax incentives, establishment support, credit facilities, and loans. The Ministry of MSME launched the Udyam portal to digitize and streamline the registration process.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                            alt="MSME Registration Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const MSMEAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Growth & Incentives
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of MSME Online Registration
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        MSME registration allows businesses to access various benefits and support schemes from the Government of India, helping them grow effectively.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80"
                            alt="MSME Registration Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Access to Cheaper Loans", desc: "MSME registration holders can access loans with interest rates as low as 1 to 1.5% comparatively much lower than the regular loan." },
                        { title: "Exemption on Direct Taxes", desc: "Registered MSMEs can benefit from exemptions on direct taxes through various tax-saving schemes, allowing them to carry forward MAT credits for up to 15 years." },
                        { title: "Priority Sector Lending", desc: "Entities with MSME company registration are eligible for priority sector lending from banks, facilitating easier access to capital funds." },
                        { title: "Concessions on Various Registrations", desc: "MSME Udyam holders are eligible for concessions on patent registration costs, barcode registration subsidies, and ISO certification fees." },
                        { title: "Access to Government e-Marketplace", desc: "Registered MSMEs can utilize the Udyam Registration Portal to access the Government e-marketplace and participate in e-tenders with security deposit waivers." },
                        { title: "Electricity Bills & Trade Fairs", desc: "Enjoy concessions on electricity bills reducing operational costs, along with exposure to domestic and global trade fairs for networking." }
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

const MSMEEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility and Classification for MSME Registration
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Various business entities are eligible to register as an MSME online. The classification of MSMEs is based on investment in plant/machinery and annual turnover.
                </p>

                {/* MSME Classification */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        MSME Classification Criteria
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Micro Enterprise:
                            </span>{" "}
                            Defined as having an investment of up to ₹1 crore in plant and equipment or machinery and an annual turnover of up to ₹5 crore.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Small Enterprise:
                            </span>{" "}
                            Defined as having an investment of up to ₹10 crore in plant and equipment or machinery and an annual turnover of up to ₹50 crore.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">
                                Medium Enterprise:
                            </span>{" "}
                            Defined as having an investment of up to ₹50 crore in plant and equipment or machinery and an annual turnover of up to ₹200 crore.
                        </li>
                    </ul>
                </div>

                {/* Eligible Entities */}
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Entities Eligible to Register
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[17px] text-slate-600 leading-relaxed list-disc list-inside">
                        <li>Sole Proprietorship</li>
                        <li>Partnership Firm</li>
                        <li>Limited Liability Partnership (LLP)</li>
                        <li>One-person Companies (OPC)</li>
                        <li>Private and Public Limited Companies</li>
                        <li>Hindu Undivided Family (HUF)</li>
                        <li>Cooperative Societies</li>
                        <li>Association of Persons</li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Verify Your Eligibility Status
                    </button>
                </div>
            </div>
        </section>
    );
};

const MSMEDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required to Register MSME in India
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To successfully file the Udyam registration application, ensure you have the following essential business details and documents compiled:
                </p>

                <div className="space-y-4 mb-8">
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed bg-[#f8fafc] p-6 rounded-xl border border-slate-100">
                        <li><span className="font-semibold text-[#072b47]">Identity Details: </span>Aadhar Number of the applicant and PAN Card details matching government databases.</li>
                        <li><span className="font-semibold text-[#072b47]">Business Entity Proof: </span>GSTIN (In case of Company or LLP, Cooperative Society or Society or Trust).</li>
                        <li><span className="font-semibold text-[#072b47]">Contact Information: </span>Registered office address and exact Address of the Business location.</li>
                        <li><span className="font-semibold text-[#072b47]">Financial Data: </span>Bank Account Number along with Details of Investment and Turnover to determine MSME classification.</li>
                        <li><span className="font-semibold text-[#072b47]">Operational Specifics: </span>Description of Business Activity along with the relevant NIC 2-Digit Code mapping your trade.</li>
                        <li><span className="font-semibold text-[#072b47]">Supporting Files: </span>Partnership Deed (if applicable), Sales and Purchase Bill Copies, and Copies of Licenses and Bills of Purchased Machinery.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const MSMEProcessSection = () => {
    const steps = [
        {
            title: "Access to the Udyam Registration Portal",
            desc: "Visit the official website of MSME Udyam registration to start with the application for MSME registration."
        },
        {
            title: "Aadhar Card Details",
            desc: "Enter the Aadhar Card details and the name of the applicant entrepreneur on the portal interface."
        },
        {
            title: "Details of PAN Card & Type of Organisation",
            desc: "Enter the type of organisation and details of the PAN card. The portal automatically validates the PAN card details from government databases."
        },
        {
            title: "Filling of Personal Details",
            desc: "Once the PAN card is validated, the Udyam registration form will pop up, and the applicant must fill in all necessary contact and background information."
        },
        {
            title: "Investment & Turnover Details",
            desc: "In the later stage, manually furnish the numerical details regarding the investment and annual turnover of the enterprise seeking MSME online registration."
        },
        {
            title: "Issuing of MSME Registration Certificate",
            desc: "After careful completion of the registration formalities and evaluation by the concerned authority, the Udyam registration certificate will be sent directly to the applicant's email."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step MSME Online Registration Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The Government of India has completely digitized the registration via the Udyam portal making it paperless. Here is the step-by-step workflow:
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
                            alt="MSME Registration Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>

                    <div className="lg:col-span-2">
                        {steps.map((step, index) => (
                            <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {index + 1}.
                                </div>
                                <div>
                                    <h3 className="text-[18px] font-semibold text-[#072b47]">
                                        {step.title}
                                    </h3>
                                    <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-slate-200"></div>

                        <div className="mt-12 text-center">
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Start Free Udyam Registration
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MSMEFeaturesSection = () => {
    const features = [
        {
            title: "10,000+ Successful Registrations",
            desc: "We have assisted in the successful completion of over 10,000 MSME online registrations across India rapidly."
        },
        {
            title: "85% Faster Process",
            desc: "Through streamlined legal workflows we ensure micro, small, and medium enterprises registration 85% faster than industry averages."
        },
        {
            title: "Up to 25% in Tax Savings",
            desc: "Discover new tax benefits; businesses registered with us efficiently utilize exemptions enjoying major capital savings against income taxes."
        },
        {
            title: "Hassle-Free Process",
            desc: "Expertly simplifying the Udyam documentation—mitigating heavy applicant burden while effectively managing all validation formalities instantly."
        },
        {
            title: "Compliance Experts",
            desc: "Consultants well-versed with deep state and national compliance updates securing rapid approvals without rejections."
        },
        {
            title: "End-to-End Assistance",
            desc: "Robust 360-degree support from compiling raw NIC codes mapping to handing over the fully stamped digital certificates."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Us For MSME Udyam Registration
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Register your business faster flawlessly leveraging expert enterprise compliance mechanics.
                    </p>
                </div>

                <div>
                    {features.map((feature, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                {index + 1}.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    {feature.title}
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const MSMERegistration = () => {
    const faqs = [
        {
            question: "Is an MSME Udyam Certificate mandatory?",
            answer: "While it is not strictly mandatory under civil laws for businesses to hold it, possessing an MSME Udyam Registration securely provides immediate access to overwhelming government subsidies, easy tax incentives, credit facilities and collateral-free bank loans."
        },
        {
            question: "What is the primary difference between Udyog Aadhaar and Udyam Registration?",
            answer: "Udyog Aadhaar was the previous legacy framework. Post-2020, the government replaced it completely with the 'Udyam Registration' portal which is comprehensively unified directly tying PAN and GST databases making enterprise verification instantly automatic."
        },
        {
            question: "Do I need separate registrations if I manufacture goods and offer services?",
            answer: "No, a single Udyam Registration number strictly encapsulates both manufacturing and service-oriented streams for a singular business unit simultaneously via accurate NIC codes mapped during application."
        },
        {
            question: "Does MSME registration expire?",
            answer: "A valid Udyam Registration Certificate stands perpetual. It physically comes embedded with a QR code dynamically projecting ongoing operational legitimacy and never practically expires unless manually cancelled by the proprietor."
        },
        {
            question: "What happens if my business crosses the defined MSME financial investment threshold?",
            answer: "If the enterprise organically scales crossing the upper limits of the 'Medium' division threshold consistently across investment evaluations—it seamlessly gradients upwards losing specific MSME privileges but automatically shifting to regular corporate monitoring."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="MSME Udyam Registration"
                heroTitleSuffix="Online"
                heroSubtitle="Get Your Udyam Certificate Easily"
                heroDescription="Get MSME Registration and Udyam Registration online with expert support. Enjoy fast filing, accurate documentation, and smooth processing for your business while unlocking government subsidies and low-interest loans."
                whatsIncludedList={[
                    "Hassle-Free End-to-End Application",
                    "Assistance in NIC Code Selection",
                    "Government Scheme Guidance",
                    "Zero Contact Digital Submission"
                ]}
                stats={[
                    { count: "10,000+", label: "Registrations", icon: <ShieldCheck size={20} /> },
                    { count: "98%", label: "Satisfaction", icon: <CheckCircle2 size={20} /> },
                    { count: "10+", label: "Years Exp", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<MSMEOverview />}
                advantages={<MSMEAdvantages />}
                eligibility={<MSMEEligibility />}
                documents={<MSMEDocumentsSection />}
                process={<MSMEProcessSection />}
                features={<MSMEFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Everything you need to know about MSME Registration"
                faqs={faqs}
            />
        </div>
    );
};

export default MSMERegistration;
