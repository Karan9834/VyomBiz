import React from "react";
import { Search, List, Globe, ShieldCheck } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";
import advantages from "../../../assets/Trademarks India/Trademark Class Finder Tool/advantages.png";
import overview from "../../../assets/Trademarks India/Trademark Class Finder Tool/overview.jpg";
import process from "../../../assets/Trademarks India/Trademark Class Finder Tool/process.jpg";

/**
 * TrademarkClassesFinder Page matching Vyombiz layout styles
 * Sections:
 * 1. Hero Section
 * 2. Stats Strip
 * 3. Overview Section
 * 4. Benefits Section
 * 5. Categories/Lists (Detailed List of Trademark Classes)
 * 6. Documents Required
 * 7. Process to Determine
 * 8. Why Choose Us
 * 9. FAQ
 */


const TrademarkClassesFinderEligibility = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Trademark Class Categories & Considerations
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Detailed lists and factors to consider for classification.
                </p>

                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Goods Classes (1-34)
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Covers physical products such as chemicals (Class 1), paints (Class 2), cosmetics (Class 3), lubricants (Class 4), pharmaceuticals (Class 5), metals (Class 6), and more.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Service Classes (35-45)
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Includes services like advertising (Class 35), finance (Class 36), construction (Class 37), telecommunications (Class 38), logistics (Class 39), and others.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Trademark Distinctiveness
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        The mark must be unique and not purely descriptive of the goods or services.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Trademark Availability Search
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Conduct a thorough database search to avoid conflicts with existing trademarks.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Accurate Product Details
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Provide clear descriptions of goods or services to avoid application delays.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Use Classification Tools
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Online tools such as NICE classification databases can assist in identifying the right class.
                    </p>
                </div>
            </div>
        </section>
    );
};

const TrademarkClassesFinderDocumentsSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Documents Required for Trademark Class Identification
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Documents needed to determine the right class for your trademark.
                </p>
                <div className="space-y-4">

                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Business Registration Proof:</span> Documents such as incorporation certificate or partnership registration.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Product Details:</span> Brochures or descriptions explaining the products offered.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Service Information:</span> Clear explanation of the services provided by the business.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Promotional Materials:</span> Advertisements, brochures, or branding materials related to the trademark.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Identity and Address Proof:</span> ID proof of the business owner or authorized signatory.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Trademark Logo or Wordmark:</span> Digital copy of the proposed trademark.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium"><span className="font-semibold text-[#072b47]">Authorization Document:</span> Power of Attorney if the filing is handled by a legal professional.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrademarkClassesFinderProcessSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Trademark Class Identification Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Steps to identify the correct trademark class.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src={process}
                            alt="Process"
                            className="w-full rounded-lg shadow-sm"
                        />
                    </div>
                    <div className="lg:col-span-2">

                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                1.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Identify Business Offering
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Determine the exact products or services associated with your brand.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Review NICE Classification
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Refer to the official list of 45 trademark classes to find the closest match.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Trademark Search
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Check whether similar trademarks already exist in the selected class.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Consult Trademark Experts
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Seek professional guidance to confirm the correct class and filing strategy.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    File Trademark Application
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Submit the trademark application under the identified class.
                                </p>
                            </div>
                        </div>
                        <div className="border-t border-slate-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrademarkClassesFinderFeaturesSection = () => {
    return (
        <section className="w-full py-6 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz for Trademark Classification
                    </h2>
                    <p className="text-[16px] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Your trusted partner for accurate trademark classification and registration.
                    </p>
                </div>
                <div>

                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            1.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Reliable Brand Protection
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Ensures your trademark receives the right level of legal protection.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            2.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Complete Trademark Support
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                From classification to registration, we assist at every stage.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            3.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Comprehensive Trademark Services
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                All trademark-related services available in one place.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            4.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Professional IP Guidance
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Support from experienced intellectual property professionals.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            5.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Affordable Services
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Transparent pricing without hidden costs.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            6.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Dedicated Customer Support
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Prompt assistance for queries related to trademark classification.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            7.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Easy-to-Use Tools
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Simplified tools to help businesses identify the right trademark class.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                        <div className="text-[15px] font-semibold text-[#072b47]">
                            8.
                        </div>
                        <div>
                            <h3 className="text-[16px] font-semibold text-[#072b47]">
                                Regular Updates
                            </h3>
                            <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                Receive updates and reports to safeguard your intellectual property.
                            </p>
                        </div>
                    </div>
                    <div className="border-t border-slate-300"></div>
                </div>
            </div>
        </section>
    );
};

const TrademarkClassesFinder = () => {

    const faqs = [
        {
            question: "What is a trademark class in trademark registration?",
            answer: "A trademark class is a category used to classify goods and services for trademark registration. Under the NICE Classification system managed by the World Intellectual Property Organization, trademarks are divided into 45 classes — 34 for goods and 11 for services."
        },
        {
            question: "Why is it important to know the Trademark Class?",
            answer: "Knowing the trademark class is crucial when filing a trademark application. It ensures legal protection in the specific category of goods or services and helps avoid conflicts with existing trademarks."
        },
        {
            question: "Can a business fall under multiple Trademark Classes?",
            answer: "Yes, if a business offers goods or services that fall under different categories, it can file for protection across multiple classes."
        },
        {
            question: "What is the importance of trademark classification?",
            answer: "Trademark classification reduces the risk of conflicts, enables brand protection in the appropriate class, facilitates market expansion, and streamlines the registration process."
        },
        {
            question: "How is a trademark search processed?",
            answer: "A trademark search involves examining the database of existing registered trademarks to check if a brand name, logo, or slogan is already in use by another entity in the same class."
        }
    ];

    const classesFinderOverviewContent = (
        <section className="w-full py-6 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Overview of Trademark Class Finder
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A trademark class finder is a helpful tool for identifying the correct category for your goods or services. It matches your business offerings with one of the 45 classes defined under the international NICE Classification system.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Selecting the appropriate trademark class ensures that your brand name clearly represents your products or services while reducing the risk of legal conflicts or infringement.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            Trademark classes help categorize businesses based on the type of goods or services they provide.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={overview}
                            alt="Trademark Classes Finder"
                            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm"
                        />
                    </div>
                </div>
            </div>
        </section>
    );

    const advantagesContent = (
        <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="grid lg:grid-cols-2 gap-16 w-full">
                {/* LEFT SIDE (STICKY) */}
                <div className="lg:sticky lg:top-28 h-fit self-start">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-yellow-400 rounded-full mb-6">
                        Classification Tool
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Trademark Classification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why performing trademark classification is crucial for your brand.
                    </p>
                    <div className="mt-10">
                        <img
                            src={advantages}
                            alt="Trademark Classification Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Reduces Legal Conflicts", desc: "Helps minimize the chances of trademark disputes with similar registered marks." },
                        { title: "Brand Identity Protection", desc: "Ensures your trademark is protected within the relevant goods or services category." },
                        { title: "Supports Business Expansion", desc: "Allows businesses to extend their brand into additional product or service categories." },
                        { title: "Simplified Registration", desc: "Correct classification helps make the trademark application process smoother." },
                        { title: "Stronger Legal Protection", desc: "Ensures your trademark receives proper legal protection within the chosen class." },
                        { title: "International Compatibility", desc: "Aligns your trademark classification with global standards for easier international protection." }
                    ].map((item, index) => (
                        <div key={index} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <h3 className="text-[20px] font-semibold text-[#072b47] mb-3">{item.title}</h3>
                            <p className="text-[17px] text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="w-full bg-white font-sans text-[#1a1a1a]">

            {/* ================= SECTION 1: HERO ================= */}
            <HeroLayout
                heroTitleMain="Trademark Class"
                heroTitleSuffix="Finder Tool"
                heroSubtitle="Identify the Right Class Easily"
                heroDescription="Not sure which trademark class applies to your business? Use our Trademark Class Finder to identify the correct category for your goods or services. We help you classify your brand accurately under the internationally recognized World Intellectual Property Organization NICE classification system."
                whatsIncludedList={[
                    "Accurate Class Identification",
                    "NICE Classification Guidance",
                    "Comprehensive Trademark Search",
                    "Expert Consultation"
                ]}
                stats={[
                    { count: "45", label: "Trademark Classes", icon: <List size={20} /> },
                    { count: "High", label: "Classification Accuracy", icon: <Search size={20} /> },
                    { count: "1 Lakh+", label: "Brands Supported", icon: <Globe size={20} /> }
                ]}
            />



            {/* ================= DETAILS SECTION ================= */}
            <DetailsLayout
                overview={classesFinderOverviewContent}
                advantages={advantagesContent}
                eligibility={<TrademarkClassesFinderEligibility />}
                documents={<TrademarkClassesFinderDocumentsSection />}
                process={<TrademarkClassesFinderProcessSection />}
                features={<TrademarkClassesFinderFeaturesSection />}
            />

            {/* ================= FAQ SECTION ================= */}
            <FAQLayout
                title="Frequently Asked Questions"
                subtitle="Common queries about Trademark Classes"
                faqs={faqs}
            />

        </div>
    );
};

export default TrademarkClassesFinder;

