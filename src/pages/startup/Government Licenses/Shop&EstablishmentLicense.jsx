import { Users, Briefcase, Building2 } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

/**
 * ShopAndEstablishmentLicense Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section (Left Content, Right Form)
 * 2. Overview Section
 * 3. Benefits Section
 * 4. Eligibility/Checklist
 * 5. Documents Required
 * 6. Registration Process
 * 7. Key Aspects Regulated
 * 8. FAQ
 */

const ShopActOverview = () => {
    return (
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-4">
                            Legally Compliant
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Shop and Establishment License – <span className="text-[#005a9c]">An Overview</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Most of the businesses in India, including shops, restaurants, cafes, etc., are regulated under the provisions of the Shop and Establishment Act. To regulate the work environment and to ensure the rights of the workers are being protected, it is mandatory to get your business registered under the Shop and Establishments Act.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            The Act aims at providing proper working conditions to the labourers and taking care of their holidays, wages, and rights. However, the rules and regulations may vary from state to state.
                        </p>
                        <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                            What is a Shop or Establishment?
                        </h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A shop means any place or premises where goods are sold and services rendered to customers. It includes store-rooms, go-downs, warehouses or workplaces other than a factory, commercial establishment, residential hotels, restaurants, eating houses, theatres, or other places of public entertainment as notified by the State government.
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80"
                            alt="Shop and Establishment Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ShopActAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Business Growth
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Obtaining Shop and Establishment License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        The Shops and Establishment act makes sure that both organized and unorganized sectors are providing appropriate working conditions, while unlocking numerous business advantages.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1664575602276-acd073f1301c?auto=format&fit=crop&q=80"
                            alt="Shop Act Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Legal Recognition", desc: "The Shops and Establishment license provides formal legal recognition to the respective establishment/shop in its jurisdiction." },
                        { title: "Acts As a Business Proof", desc: "For further business registrations in India, the Shops and Establishment license acts as a valid business proof and address proof." },
                        { title: "Helpful In Opening Bank Accounts", desc: "The registration of Shops and Establishments becomes necessary for reasons like opening a current bank account in the name of the establishment." },
                        { title: "Raising New Investment", desc: "It helps the proposed entrepreneur in raising investments through loans or venture capital for the proposed business establishment activities." },
                        { title: "Avails Government Benefits", desc: "By getting the shop and establishment license, the entrepreneur can avail various state department and government benefits at different stages." },
                        { title: "Saves Time in Future Formalities", desc: "As the process of shop act registration has turned online, it saves massive time in registration procedures as well as creating less friction while in operation." }
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

const ShopActEligibility = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Eligibility to Obtain a Shop and Establishment License in India
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    To apply for a Shop and Establishment License, the entity must fall under the definition of a commercial establishment or a shop. Following is the list of establishments required to obtain this registration:
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Commercial Establishments
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Retail & Wholesale –</span> Wholesaler or retailer shops and establishments
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Services –</span> Service Centres and Repair Shops
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Storage –</span> Warehouses, Storerooms, and go-downs
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Public Workplaces –</span> Any other public commercial working places
                        </li>
                    </ul>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Hospitality & Entertainment
                    </h3>
                    <ul className="space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>
                            <span className="font-semibold text-[#072b47]">Accommodation –</span> Residential Hotels
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Food & Beverage –</span> Eateries, Cafes, and Restaurants
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Entertainment –</span> Entertainment houses, Amusement parks, Theatres, etc.
                        </li>
                        <li>
                            <span className="font-semibold text-[#072b47]">Non-Profits –</span> Societies and charitable trusts conducting business
                        </li>
                    </ul>
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                        Start Your Registration Now
                    </button>
                </div>

            </div>
        </section>
    );
};

const ShopActDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">

                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents required for obtaining the Shop and Establishment License
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Below-mentioned Documents are required for standard Shop and Establishment License applications:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">
                        Id proof & Photograph
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Aadhar card, PAN card, voter identification card, or driving license of the employer along with a passport size photograph of the employer.
                    </p>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">
                        Bank Details & Premises Photo
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        Affidavit, Cancelled cheque, and Bank statement. A photo of the establishment/ shop front along with the employer name board is also required.
                    </p>
                </div>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-3">
                        Address Proof (Rented) & Utility Bill
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed">
                        In the case of rented property, a copy of the rent agreement with NOC. Any utility bill (Electricity/Water) of the working premises is required.
                    </p>
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold text-[#072b47] mb-6">
                    Other Documents Required as Per the Entity Type
                </h2>

                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Depending on your registration identity, you may be required to furnish additional forms of entity proofs:
                </p>

                <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#072b47] mb-4">
                        1- Company / LLP & Partnership Firm
                    </h3>
                    <ul className="space-y-2 text-[17px] text-slate-600">
                        <li>Certificate of incorporation, MOA, and AOA as per the Companies Act, or LLP Agreement.</li>
                        <li>Partnership deed with all the important information such as the name of the partners along with their signature and share percentage.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-[#072b47] mb-4">
                        2- Trust & Co-operative Societies
                    </h3>
                    <ul className="space-y-2 text-[17px] text-slate-600">
                        <li>In the case of a trust, a list of the number of trustees along with the Trust Deed.</li>
                        <li>In the case of co-operative societies, a list of the number of members and chairman.</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

const ShopActProcessSection = () => {
    const steps = [
        {
            title: "Visit The Labour Department Website",
            desc: "An applicant needs to visit the Labour Department website of the respective state and create user credentials."
        },
        {
            title: "Fill In the Requisite Details",
            desc: "Create the profile providing name of proposed establishment, employer details, employees count, and registered address."
        },
        {
            title: "Form-A Application",
            desc: "Select the state and district of your shop or establishment and fill in the requisite statutory details asked in Form A."
        },
        {
            title: "Upload Documents",
            desc: "Once the form is filled, upload all necessary identity and address proofs, and premises photos."
        },
        {
            title: "Fee Payment",
            desc: "After uploading all the Documents, calculate the mandatory fee as per employee strength and make the payment online."
        },
        {
            title: "Issuance Of the License",
            desc: "If all documents meet requirements, physical or online verification is done. After approval, the certificate shall be issued."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Registration Procedure of Shop and Establishment License
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Any commercial establishment/shop has to apply for the License within 30 days of commencement of business activities. The general online procedure is outlined below:
                    </p>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                    {/* Left Image */}
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
                            alt="Shop Act Process"
                            className="w-full rounded-lg shadow-sm sticky top-32"
                        />
                    </div>

                    {/* Steps */}
                    <div className="lg:col-span-2">

                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200"
                            >
                                {/* Step Number */}
                                <div className="text-[16px] font-semibold text-[#072b47]">
                                    {index + 1}.
                                </div>

                                {/* Content */}
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

                        {/* Bottom border */}
                        <div className="border-t border-slate-200"></div>

                        {/* CTA */}
                        <div className="mt-12 text-center">
                            <button className="bg-[#f59e0b] hover:bg-[#d97706] text-white font-semibold px-8 py-3 rounded-lg shadow-md transition">
                                Apply for Shop Act License
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const ShopActFeaturesSection = () => {
    const features = [
        {
            title: "Working Hours Regulation",
            desc: "Maximum working hours of the employees and time duration allotted for meals and rest."
        },
        {
            title: "Leave Policy & Holidays",
            desc: "Number of compulsory weekly holidays provided, wages to employees for the holidays, and general leave policy."
        },
        {
            title: "Child & Women Labour",
            desc: "Regulating laws to prohibit child labour in establishments and guidelines for women employment."
        },
        {
            title: "Premises Standards",
            desc: "Conditions regarding proper ventilation, lighting, and clean & hygienic premises for the workers."
        },
        {
            title: "Safety Measures",
            desc: "Mandatory preventative measures against fire hazards and accident coverage policies."
        },
        {
            title: "Wage & Deductions",
            desc: "Conditions and timing for the payment of salaries, and regulation of deductions on the payments."
        }
    ];

    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Aspects Regulated as per the Provisions of the Act
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        The Shop and Establishment Act has made various provisions to regulate the aspects relating to the working of shops and establishments in India, which include:
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
                <div className="mt-8 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md">
                    <h4 className="text-[#072b47] font-semibold text-lg mb-1">Penalties for Non-Compliance</h4>
                    <p className="text-sm text-slate-700">It is compulsory for the entire establishment under the Act to obtain Shop and Establishment registration and comply with all the rules. In case of any failure in getting registration or following the rules, the establishment would be liable to pay a penalty varying from state to state.</p>
                </div>
            </div>
        </section>
    );
};

const ShopAndEstablishmentLicense = () => {
    const faqs = [
        {
            question: "Is it necessary to take approval from the labor department?",
            answer: "Yes, the Shop and Establishment License is issued directly by the Labour Department of the respective state government, and gaining their approval within 30 days of standard operations is mandatory."
        },
        {
            question: "When is a Shop and Establishment Act Registration required?",
            answer: "Any commercial establishment (shops, restaurants, theaters, retail stores, service centers, etc.) must apply for this license within 30 days of commencing business activities."
        },
        {
            question: "What are the List of Records to be maintained under Shop and Establishment Act?",
            answer: "Records typically include a register containing all details of employment, salary details, any deductions or advances issued, details of fines, and holidays awarded to staff."
        },
        {
            question: "Does a 'Work From Home' setup require this license?",
            answer: "Yes, it is often mandatory to obtain the Shop and Establishment License for business entities even if they are functioning from a residential premise or home, though local state rules might have specific exemptions."
        },
        {
            question: "What are the Objectives behind the Shop and Establishment License in India?",
            answer: "The primary objective is to protect the rights and satisfaction of the laborers working in the organized sectors (such as hotels and restaurants) as well as unorganized sectors, ensuring safe working conditions, fair pay, and leaves."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Shop and Establishment License"
                heroTitleSuffix="in India"
                heroSubtitle="Fast, Cost-Effective & Fully Compliant"
                heroDescription="Is your business compliant with local labour laws? Talk to our experts for a hassle-free online Shop and Establishment Act Registration."
                whatsIncludedList={[
                    "Application Preparation & Filing",
                    "Full Documentation Support",
                    "Complete Compliance Support",
                    "Dedicated Relationship Manager"
                ]}
                stats={[
                    { count: "42825+", label: "Happy Clients", icon: <Users size={20} /> },
                    { count: "3500+", label: "Expert Advisors", icon: <Briefcase size={20} /> },
                    { count: "50+", label: "Branch Offices", icon: <Building2 size={20} /> }
                ]}
            />

            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={<ShopActOverview />}
                advantages={<ShopActAdvantages />}
                eligibility={<ShopActEligibility />}
                documents={<ShopActDocumentsSection />}
                process={<ShopActProcessSection />}
                features={<ShopActFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Top Questions Regarding Shop and Establishment License"
                subtitle="Everything you need to know to stay compliant"
                faqs={faqs}
            />

        </div>
    );
};

export default ShopAndEstablishmentLicense;
