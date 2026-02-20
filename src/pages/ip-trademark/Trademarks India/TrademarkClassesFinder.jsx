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
                eligibility={{
                    title: "Class Lists & Considerations",
                    subtitle: "Detailed lists and factors to consider for classification.",
                    list: [
                        { title: "Goods (Classes 1-34)", desc: "Includes chemicals (Cl 1), paints (Cl 2), cosmetics (Cl 3), industrial oils (Cl 4), pharmaceuticals (Cl 5), metals (Cl 6), etc." },
                        { title: "Services (Classes 35-45)", desc: "Includes advertising (Cl 35), insurance (Cl 36), construction (Cl 37), telecom (Cl 38), transport (Cl 39), etc." },
                        { title: "Distinctiveness", desc: "The trademark must be original and distinctive, not just descriptive." },
                        { title: "Comprehensive Search", desc: "Conduct a thorough search across databases to avoid conflicts." },
                        { title: "Complete Info", desc: "Provide accurate details of goods/services to avoid delays." },
                        { title: "Use Tools", desc: "Utilize online tools like NICE Classification Tool and TMclass Tool." }
                    ]
                }}
                documents={{
                    title: "Required Documents",
                    description: "Documents needed to determine the right class for your trademark.",
                    list: [
                        "Business Registration Documents",
                        "Product Description/Brochure",
                        "Service Description Details",
                        "Marketing Materials",
                        "Director's ID & Address Proof",
                        "Trademark Soft Copy",
                        "Power of Attorney (if required)"
                    ],
                    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }}
                process={{
                    title: "Determination Process",
                    subtitle: "Steps to identify the correct trademark class.",
                    steps: [
                        { step: "01", title: "Identify Offering", desc: "Determine the exact type of products or services your brand offers." },
                        { step: "02", title: "Consult NICE List", desc: "Refer to the NICE classification list (45 classes) to find the match." },
                        { step: "03", title: "Conduct Search", desc: "Perform a trademark class search to ensure the mark isn't already taken in that class." },
                        { step: "04", title: "Expert Advice", desc: "Consult with IPR experts to confirm the classification and strategy." },
                        { step: "05", title: "File Application", desc: "Proceed with filing the trademark application under the identified class." }
                    ]
                }}
                whyChooseUs={{
                    title: "Why Choose Vyombiz?",
                    subtitle: "Your trusted partner for accurate trademark classification and registration.",
                    list: [
                        { title: "Efficient Protection", desc: "Ensuring protection of your brand identity, logo, and slogans." },
                        { title: "End-to-End Service", desc: "Smooth and hassle-free trademark services from search to registration." },
                        { title: "One-Stop Solution", desc: "All trademark-related needs covered under one roof." },
                        { title: "Expert Guidance", desc: "Comprehensive support from experienced IP professionals." },
                        { title: "Cost-Effective", desc: "Affordable solutions with no hidden charges." },
                        { title: "24/7 Support", desc: "Dedicated customer support to address all your queries." },
                        { title: "User-Friendly Tools", desc: "Making the classification process simple and streamlined." },
                        { title: "Timely Alerts", desc: "Get updates and reports to protect your intellectual property." }
                    ]
                }}
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
