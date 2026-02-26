import React from "react";
import { Search, List, Globe, ShieldCheck } from "lucide-react";
import HeroLayout from "../../../components/common/HeroLayout.jsx";
import DetailsLayout from "../../../components/common/DetailsLayout.jsx";
import FAQLayout from "../../../components/common/FAQLayout.jsx";

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
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Class Lists & Considerations
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-10">
                    Detailed lists and factors to consider for classification.
                </p>
                
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Goods (Classes 1-34)
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Includes chemicals (Cl 1), paints (Cl 2), cosmetics (Cl 3), industrial oils (Cl 4), pharmaceuticals (Cl 5), metals (Cl 6), etc.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Services (Classes 35-45)
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Includes advertising (Cl 35), insurance (Cl 36), construction (Cl 37), telecom (Cl 38), transport (Cl 39), etc.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Distinctiveness
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        The trademark must be original and distinctive, not just descriptive.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Comprehensive Search
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Conduct a thorough search across databases to avoid conflicts.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Complete Info
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Provide accurate details of goods/services to avoid delays.
                    </p>
                </div>
                <div className="mb-10">
                    <h3 className="text-xl font-semibold text-[#072b47] mb-4">
                        Use Tools
                    </h3>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                        Utilize online tools like NICE Classification Tool and TMclass Tool.
                    </p>
                </div>
            </div>
        </section>
    );
};

const TrademarkClassesFinderDocumentsSection = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-6">
                    Required Documents
                </h2>
                <p className="text-[17px] text-slate-600 leading-relaxed mb-8">
                    Documents needed to determine the right class for your trademark.
                </p>
                <div className="space-y-4">
                    
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Business Registration Documents</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Product Description/Brochure</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Service Description Details</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Marketing Materials</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Director's ID & Address Proof</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Trademark Soft Copy</p>
                    </div>
                    <div className="flex items-start gap-3">
                         <div className="w-2 h-2 rounded-full bg-[#f1a134] mt-2 shrink-0"></div>
                         <p className="text-[17px] text-slate-600 leading-relaxed font-medium">Power of Attorney (if required)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TrademarkClassesFinderProcessSection = () => {
    return (
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-4">
                        Determination Process
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-3xl mx-auto">
                        Steps to identify the correct trademark class.
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-1">
                        <img
                            src="https://images.unsplash.com/photo-1588776814546-ec7e8a75a3a6?auto=format&fit=crop&q=80"
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
                                    Identify Offering
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Determine the exact type of products or services your brand offers.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Consult NICE List
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Refer to the NICE classification list (45 classes) to find the match.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Conduct Search
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Perform a trademark class search to ensure the mark isn't already taken in that class.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    Expert Advice
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Consult with IPR experts to confirm the classification and strategy.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-200">
                            <div className="text-[16px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[18px] font-semibold text-[#072b47]">
                                    File Application
                                </h3>
                                <p className="text-[16px] text-slate-600 mt-1 leading-relaxed">
                                    Proceed with filing the trademark application under the identified class.
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
        <section className="w-full py-14 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] mb-3">
                        Why Choose Vyombiz?
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
                                    Efficient Protection
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Ensuring protection of your brand identity, logo, and slogans.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                2.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    End-to-End Service
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Smooth and hassle-free trademark services from search to registration.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                3.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    One-Stop Solution
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    All trademark-related needs covered under one roof.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                4.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Expert Guidance
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Comprehensive support from experienced IP professionals.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                5.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Cost-Effective
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Affordable solutions with no hidden charges.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                6.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    24/7 Support
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Dedicated customer support to address all your queries.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                7.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    User-Friendly Tools
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Making the classification process simple and streamlined.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-[40px_1fr] gap-4 py-5 border-t border-slate-300">
                            <div className="text-[15px] font-semibold text-[#072b47]">
                                8.
                            </div>
                            <div>
                                <h3 className="text-[16px] font-semibold text-[#072b47]">
                                    Timely Alerts
                                </h3>
                                <p className="text-[15px] text-slate-600 mt-1 leading-relaxed">
                                    Get updates and reports to protect your intellectual property.
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
            question: "What is a trademark class?",
            answer: "A Trademark Class is an International Standard to classify goods and services under the World Intellectual Property Organization (WIPO) Nice Classification. It organizes trademarks into 45 distinct classes (34 for goods, 11 for services)."
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
        <section className="w-full py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 lg:gap-24">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                            Trademark Class Finder – An Overview
                        </h2>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            A trademark class finder is an essential tool for protecting business identification. It helps matches your goods or services with the correct classification category under the 45 distinct classes of the International NICE Classification system.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-6">
                            Choosing the right category and classification for your trade name accurately reflects the goods or services it represents, ensuring proper legal protection and avoiding infringement issues.
                        </p>
                        <p className="text-[17px] text-slate-600 leading-relaxed font-medium">
                            Trademark classes act as an identifier for the sector to which your product or service belongs.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
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
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold bg-[#e6f0fa] text-[#005a9c] rounded-full mb-6">
                        Classification Tool
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-[#072b47] leading-[1.15] tracking-tight mb-6">
                        Benefits of Classification
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-8">
                        Why performing trademark classification is crucial for your brand.
                    </p>
                    <div className="mt-10">
                        <img
                            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
                            alt="Trademark Classification Benefits"
                            className="w-full rounded-2xl shadow-xl"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (SCROLLABLE CONTENT) */}
                <div className="space-y-6">
                    {[
                        { title: "Reduces Conflicts", desc: "Minimizes the risk of trademark infringement issues with existing registrations." },
                        { title: "Brand Protection", desc: "Protects brand identity or mark in the specific appropriate class." },
                        { title: "Market Expansion", desc: "Allows expansion into new product or service categories under the same mark." },
                        { title: "Smoother Registration", desc: "Categorizing correctly facilitates a seamless trademark registration process." },
                        { title: "Legal Security", desc: "Ensures proper legal protection within the relevant goods or services sector." },
                        { title: "Global Compatibility", desc: "Aligns with international standards for easier global registration." }
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
                heroTitleMain="Trademark Class Finder"
                heroTitleSuffix="Tool"
                heroSubtitle="Identify the Right Class Easily"
                heroDescription="Struggling to find the right trademark class for your business? Secure your brand effortlessly by opting for the right class with our Trademark Class Finder. We help you categorize your goods and services accurately under the NICE classification."
                whatsIncludedList={[
                    "Accurate Class Identification",
                    "NICE Classification Guidance",
                    "Comprehensive Trademark Search",
                    "Expert Consultation"
                ]}
                stats={[
                    { count: "45", label: "Trademark Classes", icon: <List size={20} /> },
                    { count: "100%", label: "Classification Accuracy", icon: <Search size={20} /> },
                    { count: "1 Lakh+", label: "Global Brands Truced", icon: <Globe size={20} /> }
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
