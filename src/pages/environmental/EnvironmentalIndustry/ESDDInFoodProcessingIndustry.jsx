import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ESDDInFoodProcessingIndustry = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental and Social Due Diligence"
                    heroTitleSuffix="in Food Processing Industry"
                    heroDescription="Allow Corpbiz to conduct Environmental & Social Due Diligence in Food Processing Industry for you, in order to achieve legal compliance as well as to meet investor requirements."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Environmental & Social Due Diligence in Food Processing Industry —",
                        highlightTitle: "Comprehensive Overview",
                        description: [
                            "Corpbiz is an AI-driven technology platform that provides legal and financial services through its team of experts. We seek to create and provide unique and state-of-the-art environmental solutions for projects affecting the environment in various industries. These solutions are offered through impact assessment studies to assist supporters and accomplish environmental protection simultaneously.",
                            "India is the world's second-largest producer of food next to China and has the potential to be the biggest. The Indian food processing industry is split into six main categories: Fisheries, Dairy, fruits & vegetables processing, Grain processing, Meat & poultry processing, and Consumer foods. Recent shifts have moved production and consumption from grains to high-value commodities like processed food products.",
                            "ESDD is crucial for identifying potential environmental and social (E&S) risks and liabilities associated with a specific transaction or investment. It assesses a project's compliance with national legal requirements as well as international good practice standards. For agricultural businesses, ESDD evaluates both social impact (supplier relationships) and environmental impact (sustainable practices) to ensure long-term productivity and supply security.",
                            "The industry also faces various levels of processing: Primary (cleaning, grading), Secondary (basic value addition like purees), and Tertiary (high-value products like jams and bakery goods). Factors such as outdated technology in small-scale units and high-cost finance continue to affect the processing extent in India."
                        ],
                        whyIdealTitle: "Why ESDD Matters",
                        whyIdealList: [
                            { title: "Natural Resource Efficiency", desc: "Ensures water and energy are used efficiently, promoting sustainable practices and minimizing environmental impact." },
                            { title: "Supply Chain Integrity", desc: "Addresses fair labor practices, workers' rights, and community well-being throughout complex supply chains." },
                            { title: "Waste Management", desc: "Focuses on waste reduction, recycling, and proper disposal to minimize the ecological footprint." },
                            { title: "Product Safety", desc: "Assesses commitments to producing safe, nutritious food and transparent labeling practices." }
                        ]
                    }}

                    advantages={{
                        title: "Major Industry Challenges",
                        subtitle: "Hurdles in Food Processing ESDD",
                        list: [
                            { title: "Infrastructure Bottlenecks", desc: "Inadequate storage, post-harvest management, road connectivity, and cold chain systems are major constraints for the Indian industry." },
                            { title: "Access to Credit", desc: "Highly capital-intensive nature requires equity investment in SMEs and interest subsidies for agro-industrial units." },
                            { title: "Lack of R&D", desc: "Small-scale units struggle to invest in R&D, leading to separation of academics from applied research and low commercial orientation." },
                            { title: "Raw Material Constraints", desc: "Seasonal and perishable nature of agricultural produce leads to uncertainty in supply and projection." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Strategic Benefits",
                        subtitle: "Value addition through compliance",
                        list: [
                            { title: "Supply Chain Control", desc: "Manage quality, quantity, and supplier relationships to ensure product integrity matches ingredient quality." },
                            { title: "Centralized Approach", desc: "Gain a unified overview of recipe quality control, sourcing, pricing, labeling, and other management activities." },
                            { title: "R&D Excellence", desc: "Stay competitive by exceeding consumer expectations and meeting regulatory requirements through research component." },
                            { title: "Price Optimization", desc: "Addressed through cost management, rebates, and commissions within food manufacturing and distribution solutions." }
                        ]
                    }}

                    process={{
                        title: "Our Specialized Solutions",
                        subtitle: "Environmental Due Diligence Services",
                        steps: [
                            { step: "01", title: "Transparency & Disclosure", desc: "Ensuring social and environmental assessment documents are accessible and understandable for all stakeholders in project design." },
                            { step: "02", title: "Reporting & Monitoring", desc: "Rigorous due diligence including field visits, progress reports, and post-evaluation to strengthen client systems." },
                            { step: "03", title: "Grievance Mechanisms", desc: "Establishing effective redress systems to receive and resolve concerns about environmental and social performance." },
                            { step: "04", title: "Impact Assessment", desc: "Evaluating environmental effects through EIA and suggesting creative mitigation strategies to obtain necessary permits." }
                        ]
                    }}

                    dueDates={{
                        title: "Industry Segments & Products",
                        subtitle: "Structure of Indian Food Processing",
                        columns: ["Sector", "Products Produced"],
                        rows: [
                            ["Dairy", "Whole milk powder, skimmed milk powder, condensed milk, ice cream, butter and ghee, cheese"],
                            ["Fruits & Vegetables", "Beverages, juices, concentrates, pulps, slices, frozen & dehydrated products, potato wafers/chips, etc."],
                            ["Grains & Cereals", "Flour, bakeries, starch glucose, cornflakes, malted foods, vermicelli, beer and malt extracts"],
                            ["Fisheries", "Frozen, canned products, mainly in fresh form"],
                            ["Meat & Poultry", "Frozen and packed mainly in fresh egg powder"],
                            ["Consumer Foods", "Snack food, nankeens, biscuits, ready-to-eat food, alcoholic and non-alcoholic beverages"]
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz?",
                        subtitle: "The Gold Standard in ESDD Consultancy",
                        list: [
                            { title: "40,000+ Strong Network", desc: "Access to a solid network of lawyers, attorneys, and environmental experts across numerous countries." },
                            { title: "500+ Decades of Expertise", desc: "Our team includes experts with decades of experience in environmental law and financial services." },
                            { title: "AI-Powered Delivery", desc: "Leveraging technology for timely support and seamless service delivery for entrepreneurs globally." },
                            { title: "Foreign Investment Desk", desc: "Dedicated team of 200+ representatives to assist with cross-border investments and certifications." },
                            { title: "Global Recognition", desc: "Consistently ranked among Asia's Top 100 Consulting Firms with a 4.9 customer rating." },
                            { title: "SAP Implementation", desc: "Creating and carrying out Sampling and Analysis Plans (SAP) for confirmation and verified results." }
                        ]
                    }}

                    eligibility={{
                        title: "Opportunities & Significance",
                        subtitle: "Unlocking the potential of Indian Food Processing",
                        list: [
                            { title: "Agro-Ecological Variability", desc: "Large crops and diverse material bases offer vast potential for food-processing activities in India." },
                            { title: "Technological Integration", desc: "Scope for rapid progress through electronics, biotechnology, and contemporary material science." },
                            { title: "Global Market Opening", desc: "Facilitates additional income and employment opportunities through developed technology exports." },
                            { title: "Streamlining Food Laws", desc: "Addressing high entry barriers and improving testing networks to achieve full industry potential." }
                        ]
                    }}

                    postCompliance={{
                        title: "Government Incentives",
                        subtitle: "Financial and regulatory support frameworks",
                        list: [
                            { title: "GST Relief", desc: "60% of food products in 0% & 5% slab; Zero GST on milk, fish, meat, fruits, and vegetables." },
                            { title: "Income Tax Exemptions", desc: "100% tax exemption on profits for first 5 years; 100% deduction for capital costs in cold chain/warehousing." },
                            { title: "Credit Facilities", desc: "USD 263M Food Processing Fund via NABARD; PSL categorization for cold chain and agro-processing loans." },
                            { title: "Plastic Under EPR", desc: "Compliance with plastic waste management categories including PET, HDPE, PVC, LDPE, PP, and PS resins." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "What is environmental due diligence in the context of the food processing industry?",
                            answer: "It involves assessing and mitigating environmental risks associated with the industry's operations, such as waste disposal, pollution, and resource consumption."
                        },
                        {
                            question: "Why is social due diligence important for the food processing industry?",
                            answer: "It helps address issues like fair labor practices, workers' rights, and community well-being throughout the complex supply chain from sourcing to distribution."
                        },
                        {
                            question: "What regulations govern environmental and social due diligence in India?",
                            answer: "It is governed by national legal requirements and international good practice standards to identify E&S risks and liabilities in transactions."
                        },
                        {
                            question: "How can the food processing industry contribute to environmental conservation?",
                            answer: "By focusing on waste reduction, recycling, and proper disposal methods to minimize the ecological footprint and ensuring resource efficiency."
                        },
                        {
                            question: "What role do certifications like ISO 14001 and SA 8000 play?",
                            answer: "These certifications play a crucial role in validating environmental management and social accountability to meet investor requirements."
                        },
                        {
                            question: "What are the common environmental challenges faced by the industry in India?",
                            answer: "Key challenges include poor infrastructure for storage, power outages affecting cold storage, and a lack of quality standards implementation."
                        }
                    ]}
                />

                <ReviewsSection
                    title="What Our Clients Say"
                    subtitle="Trusted by over 100,000 clients worldwide."
                    reviews={[
                        {
                            name: "Ananya Sharma",
                            role: "Quality Assurance Head",
                            company: "NutriFood India",
                            rating: 5,
                            initials: "AS",
                            text: "Corpbiz helped us navigate the complex GST and environmental compliance requirements for our new processing unit. Their expertise in ESDD is truly impressive."
                        },
                        {
                            name: "Rajesh Mehra",
                            role: "Director",
                            company: "Mehra Agro Exports",
                            rating: 5,
                            initials: "RM",
                            text: "The social impact assessment provided by Corpbiz was crucial for our recent funding round. They identified key risks in our supply chain that we hadn't considered."
                        },
                        {
                            name: "Vikram Malhotra",
                            role: "Founder",
                            company: "Malhotra Beverages",
                            rating: 4.9,
                            initials: "VM",
                            text: "Setting up a cold chain facility was daunting until we partnered with Corpbiz. Their knowledge of government incentives and credit facilities saved us significant costs."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default ESDDInFoodProcessingIndustry;

