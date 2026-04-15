import React from "react";
import {
    FileText,
    Briefcase,
    Building2,
    ShieldCheck,
    FlaskConical,
    Search
} from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import TalkExpert from "../../../components/common/TalkExpert.jsx";
import benefits from "../../../assets/FSSAI & Eating License/fssai-product-approval/benefits.jpg";
import overview from "../../../assets/FSSAI & Eating License/fssai-product-approval/overview.jpeg";
import process from "../../../assets/FSSAI & Eating License/fssai-product-approval/process.jpeg";

const FssaiProductApprovalOverview = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    <div>
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-4">
                            Innovation Guide
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            What is <span className="text-yellow-400">FSSAI Product Approval?</span>
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            FSSAI Product Approval is the regulatory process required when a food product does not fall under existing food standards specified by the Food Safety and Standards Authority of India (FSSAI).
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            If a product contains novel ingredients, unique formulations, or imported food categories, businesses must obtain approval before manufacturing, importing, or selling the product in India. The approval ensures that the product is safe for human consumption and compliant with Indian food safety laws.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Businesses commonly requiring product approval include:
                        </p>
                        <ul className="space-y-2 text-[17px] text-slate-600 leading-relaxed list-disc pl-6 mb-6">
                            <li>Food manufacturers launching new formulations</li>
                            <li>Importers bringing international food products to India</li>
                            <li>Companies introducing functional or nutraceutical foods</li>
                            <li>Businesses using new additives or ingredients not listed in FSSAI standards</li>
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Obtaining approval helps companies avoid legal complications, product recalls, and regulatory penalties.
                        </p>
                        
                        <h3 className="text-2xl font-semibold text-[#072b47] mb-4 mt-8">When is FSSAI Product Approval Required?</h3>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Product approval becomes mandatory in specific scenarios where the food product does not align with predefined standards. You typically require FSSAI Product Approval if:
                        </p>
                        <ul className="space-y-2 text-[17px] text-slate-600 leading-relaxed list-disc pl-6 mb-6">
                            <li>The product contains ingredients not listed in FSSAI regulations</li>
                            <li>The food category is new or innovative</li>
                            <li>Imported food products do not match existing Indian standards</li>
                            <li>Nutraceutical, functional, or health supplements require validation</li>
                            <li>Novel processing techniques are used</li>
                        </ul>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            In such cases, the FSSAI evaluates the safety, composition, and intended use of the product before granting approval.
                        </p>

                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="FSSAI Product Approval Overview"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiProductApprovalAdvantages = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Why It Is Vital
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of FSSAI Product Approval
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Obtaining proper approval offers multiple advantages for food businesses.
                    </p>
                    <div className="mt-10">
                        <img
                            src={benefits}
                            alt="FSSAI Product Approval Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Regulatory Compliance", desc: "Ensures that your product meets all FSSAI regulations and avoids legal issues." },
                        { title: "Faster Market Entry", desc: "Approved products can be launched confidently without delays or regulatory risks." },
                        { title: "Consumer Trust", desc: "Customers prefer food products that comply with safety standards and regulatory approvals." },
                        { title: "Brand Credibility", desc: "Regulatory approval enhances the credibility and reliability of your food brand." },
                        { title: "Smooth Import Process", desc: "For imported foods, approval simplifies customs clearance and regulatory checks." }
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
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mt-6">
                        With expert assistance from Vyombiz managed by Clink Consultancy Services Private Limited, businesses can navigate the regulatory framework more effectively.
                    </p>
                </div>
            </div>
        </div>
    );
};

const FssaiProductApprovalEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Who Should Apply for FSSAI Product Approval?
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-6">
                    Several types of food businesses may require product approval before entering the market. This includes:
                </p>
                <div className="mb-10">
                    <ul className="list-disc pl-6 space-y-3 text-[17px] text-slate-600 leading-relaxed">
                        <li>Food manufacturing companies</li>
                        <li>Nutraceutical brands</li>
                        <li>Health supplement companies</li>
                        <li>Food importers and distributors</li>
                        <li>Beverage manufacturers</li>
                        <li>Functional food producers</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Proper approval ensures businesses operate legally while maintaining food safety standards.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FssaiProductApprovalDocuments = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for FSSAI Product Approval
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    To apply for product approval, businesses must submit specific documents and technical details to FSSAI. Typical documentation includes:
                </p>
                <div className="mb-8">
                    <ul className="list-disc pl-6 space-y-2 text-[17px] text-slate-600 leading-relaxed grid sm:grid-cols-2 gap-x-6">
                        <li>FSSAI License of the manufacturer or importer</li>
                        <li>Detailed product formulation and ingredient list</li>
                        <li>Manufacturing process description</li>
                        <li>Product label and packaging artwork</li>
                        <li>Certificate of Analysis from a recognized laboratory</li>
                        <li>Nutritional information of the product</li>
                        <li>Safety data and scientific justification for ingredients</li>
                        <li>Import documents (for imported food products)</li>
                    </ul>
                    <p className="text-[17px] text-slate-600 leading-relaxed mt-6 font-medium">
                        Submitting accurate documentation helps prevent delays in the approval process.
                    </p>
                </div>
            </div>
        </section>
    );
};

const FssaiProductApprovalProcess = () => {
    const steps = [
        { step: "01", title: "Product Assessment", desc: "The product formulation is evaluated to determine whether it falls outside existing FSSAI standards." },
        { step: "02", title: "Document Preparation", desc: "Technical documentation, safety reports, and ingredient details are prepared for submission." },
        { step: "03", title: "Application Submission", desc: "The approval request is submitted to FSSAI with all required documents and supporting evidence." },
        { step: "04", title: "Technical Evaluation", desc: "FSSAI experts assess the safety, composition, and compliance of the product." },
        { step: "05", title: "Clarification or Additional Information", desc: "Authorities may request additional details or scientific data if required." },
        { step: "06", title: "Approval or Recommendation", desc: "Once the evaluation is completed, FSSAI grants product approval or recommends regulatory adjustments." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Step-by-Step Process for FSSAI Product Approval
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        The product approval process involves multiple regulatory stages.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="The Approval Process"
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

const FssaiProductApprovalFeatures = () => {
    const features = [
        { title: "Standard Confusion", desc: "Lack of clarity about applicable food standards." },
        { title: "Paperwork Errors", desc: "Incomplete documentation or incorrect data." },
        { title: "Scientific Validation", desc: "Scientific validation requirements for complex new ingredients." },
        { title: "Evaluation Delays", desc: "Long evaluation timelines can push back market launch." },
        { title: "FSSAI Communication", desc: "Regulatory communication with FSSAI authorities can be complex." }
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Common Challenges in the Product Approval Process
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Many businesses face difficulties when applying for product approval due to technical and regulatory complexities. 
                        Professional guidance helps businesses handle these challenges effectively.
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

const FssaiProductApprovalCompliance = () => {
    const compliance = [
        "End-to-end FSSAI product approval support",
        "Expert regulatory consultation",
        "Accurate documentation and application filing",
        "Communication with FSSAI authorities",
        "Faster and compliant approval process"
    ];

    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for FSSAI Product Approval?
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Navigating the regulatory framework of food approvals requires expertise and precision. Vyombiz managed by Clink Consultancy Services Private Limited assists businesses in managing the entire approval process efficiently. 
                    </p>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed mt-4 font-semibold">
                        Our services include:
                    </p>
                </div>
                <div>
                    {compliance.map((item, index) => (
                        <div key={index} className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">{index + 1}.</div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">{item}</h3>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-slate-300"></div>
                    <div className="mt-8 text-center">
                        <h3 className="text-2xl font-semibold text-[#072b47] mb-3">
                            Start Your FSSAI Product Approval Today
                        </h3>
                        <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            If your food product requires regulatory approval before launch, securing FSSAI clearance is essential. Vyombiz managed by Clink Consultancy Services Private Limited provides professional assistance to help food businesses complete the approval process smoothly and bring their products to market with confidence. Get started today and ensure your food products meet India’s highest safety standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FssaiProductApproval = () => {
    const faqs = [
        {
            question: "What are the food products that require product approval from FSSAI?",
            answer: "Product approval is required for non-standardized food items such as health supplements, functional foods, novel foods, food for special medical purposes, and products made with new technologies or ingredients not yet covered by FSSAI regulations."
        },
        {
            question: "Who can apply for FSSAI product approval?",
            answer: "Manufacturers or importers of non-specified food products, Food Business Operators (FBOs), distributors of non-specified ingredients, and even research institutions can apply for FSSAI product approval."
        },
        {
            question: "What is the penalty for selling non-standardized products without approval?",
            answer: "Selling non-standardized food products without FSSAI approval is a serious violation and can lead to heavy penalties and fines, sometimes up to ₹5 Lakhs."
        }
    ];

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">
            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="FSSAI Product"
                heroTitleSuffix="Approval"
                heroSubtitle="Ensure Your Food Products Meet FSSAI Standards Before Entering the Market"
                heroDescription="Launching a new food product in India requires more than just a great recipe—it needs regulatory approval. FSSAI Product Approval ensures that new ingredients, formulations, or imported food items comply with the safety standards set by the Food Safety and Standards Authority of India. With expert guidance, the approval process becomes smoother, faster, and fully compliant."
                whatsIncludedList={[
                    "Novel Ingredient Safety Assessment",
                    "FPAS Online System Filing",
                    "Technical Dossier Preparation",
                    "NABL Lab Report Verification",
                    "Label Compliance Review",
                    "FOSCOS License Integration"
                ]}
                stats={[
                    { count: "Novel Foods", label: "Specialized", icon: <FlaskConical size={20} /> },
                    { count: "₹5L Fine", label: "Non-Compliance", icon: <ShieldCheck size={20} /> },
                    { count: "NABL", label: "Lab Tested", icon: <Search size={20} /> }
                ]}
            />
            <TalkExpert />

            <DetailsLayout
                overview={<FssaiProductApprovalOverview />}
                advantages={<FssaiProductApprovalAdvantages />}
                eligibility={<FssaiProductApprovalEligibility />}
                documents={<FssaiProductApprovalDocuments />}
                process={<FssaiProductApprovalProcess />}
                features={<FssaiProductApprovalFeatures />}
                postCompliance={<FssaiProductApprovalCompliance />}
            />

            <FAQLayout faqs={faqs} />
        </div>
    );
};

export default FssaiProductApproval;

