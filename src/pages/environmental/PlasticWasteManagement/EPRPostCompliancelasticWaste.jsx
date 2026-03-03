import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRPostCompliancePlasticWaste = () => {
    const faqs = [
        { question: "What is EPR post compliance for plastic waste?", answer: "EPR post compliance refers to all obligations that must be fulfilled by PIBOs after obtaining EPR authorization for plastic waste. This includes meeting annual collection/recycling targets, submitting half-yearly and annual returns, maintaining records, engaging authorized recyclers, and ensuring proper disposal of plastic packaging waste." },
        { question: "What is the deadline for filing annual EPR returns for plastic waste?", answer: "Annual returns for plastic waste EPR must be filed on the CPCB centralized portal by June 30 of the next financial year (i.e., June 30, 2025 for FY 2024-25). The returns must include category-wise plastic packaging data and recycling/processing proof." },
        { question: "What must be included in the half-yearly EPR progress report?", answer: "The half-yearly report must include category-wise progress on plastic waste collection and recycling targets for each state/UT in the EPR Action Plan, documentary proof from processing facilities, state-by-state waste collection evidence, and sales data for that period." },
        { question: "What is the Environmental Compensation (EC) for plastic waste non-compliance?", answer: "For FY 2023-24, the EC rate for recycling shortfall is ₹32.13 per kg. This is the penalty for PIBOs who fail to meet their annual EPR recycling targets. EC must be deposited before the annual return filing deadline. Corpbiz can help you avoid EC through timely target fulfilment." },
        { question: "Can EPR post compliance be outsourced to a consultant?", answer: "Yes. PIBOs can engage environmental compliance consultants like Corpbiz to manage all post-registration EPR activities — target tracking, half-yearly reports, annual return filing, recycler transactions, and CPCB portal management. However, the legal compliance responsibility remains with the PIBO." },
        { question: "What records must be maintained for plastic waste EPR compliance?", answer: "PIBOs must maintain invoices and certificates from registered plastic waste processors (PWPs), sales/import data of plastic packaging, category-wise recycling data, evidence of awareness programs, all CPCB portal transactions, and EPR credit purchase certificates for a minimum of 5 years." },
        { question: "What is the Use of Recycled Content (URV) obligation?", answer: "Separate from recycling targets, PIBOs must progressively use recycled plastic content in their packaging: 30% recycled content by 2025-26, with higher targets by 2028-29. URV credits can be purchased from CPCB-registered recyclers to demonstrate compliance with this obligation." }
    ];

    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EPR Post Compliance — Plastic Waste"
                    heroTitleSuffix="— Annual Filing Support"
                    heroDescription="After receiving EPR authorization for plastic waste management, every producer, brand owner, importer, recycler, and plastic manufacturer must meet ongoing EPR post compliance obligations. Corpbiz manages it all for you."
                    stats={[
                        { count: "43301 +", label: "Happy Clients" },
                        { count: "3500 +", label: "Expert Advisors" },
                        { count: "50 +", label: "Branch Offices" },
                        { count: "10k+", label: "Pin codes" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "EPR Post Compliance – Plastic Waste —",
                        highlightTitle: "An Overview",
                        description: [
                            "After receiving the EPR Authorization for plastic waste management, every producer, brand owner, importer, recycler, plastic trader, and plastic manufacturer must meet certain EPR post compliance obligations under the Plastic Waste Management Rules, 2016.",
                            "EPR post compliance for plastic waste management is divided into two categories: Half-Yearly Report Submission and Sales Details Submission. Producers, importers, and brand owners must submit half-yearly progress reports to the concerned SPCB/PCC within 15 days after the end of each half-year period.",
                            "Corpbiz provides a comprehensive EPR post compliance retainer service — from tracking targets and engaging authorized recyclers, to preparing and filing all reports and returns — ensuring you remain 100% compliant throughout the year.",
                        ],
                        whyIdealTitle: "Key Post-Compliance Obligations",
                        whyIdealList: [
                            { title: "Half-Yearly Progress Reports", desc: "Submit reports to SPCB/PCC within 15 days after each half-year with documentary proof of recycling." },
                            { title: "Annual Returns by June 30", desc: "File category-wise annual returns on the CPCB portal by June 30 of the next financial year." },
                            { title: "Sales Details Submission", desc: "Submit plastic packaging sales data to the State Pollution Control Board or Pollution Control Committee." },
                            { title: "EPR Certificate Transactions", desc: "Transact EPR processing certificates from registered PWPs through the CPCB centralized portal." },
                        ]
                    }}

                    advantages={{
                        title: "Why EPR Post Compliance Matters for Your Business",
                        subtitle: "Staying compliant post-registration protects your business from penalties and supply chain disruptions",
                        list: [
                            { title: "Avoid Environmental Compensation (EC)", desc: "EC is levied at ₹32.13 per kg for recycling shortfall in FY 2023-24. Timely post compliance through EPR credits or physical collection avoids this penalty entirely." },
                            { title: "Prevent Product Bans & Action", desc: "CPCB can issue product recall orders and operations suspension for repeated non-compliance. Post compliance filings keep your authorization active and valid." },
                            { title: "Maintain Trusted Supplier Status", desc: "Large retailers, e-commerce platforms, and B2B buyers increasingly require suppliers to demonstrate active EPR compliance. Annual returns serve as proof." },
                            { title: "Support for Use of Recycled Content (URV)", desc: "Post-registration compliance includes meeting progressive URV targets (30% by 2025-26). Corpbiz helps track and fulfil URV obligations through credit procurement." },
                            { title: "Transparent CPCB Portal Reporting", desc: "All PIBOs' compliance is publicly tracked on the CPCB portal. Active compliance builds credibility; non-compliance is published by CPCB annually." },
                            { title: "Brand Reputation & ESG Reporting", desc: "Plastic waste EPR compliance data is reported in ESG disclosures, BRSR filings, and to institutional investors — making post compliance a strategic ESG asset." }
                        ]
                    }}

                    eligibility={{
                        title: "Who Must Submit EPR Post Compliance for Plastic Waste?",
                        subtitle: "Obligated entities under the Plastic Waste Management Rules, 2016",
                        list: [
                            { title: "Producers (P)", desc: "Manufacturers of plastic packaging or products sold under their own brand must file half-yearly and annual returns post-authorization." },
                            { title: "Importers (I)", desc: "Importers of plastic packaging or imported products containing plastic packaging must fulfil EPR targets and file returns annually." },
                            { title: "Brand Owners (BO)", desc: "Brand owners including marketplaces and supermarkets (non-MSME) must file compliance returns and demonstrate EPR target fulfilment each year." },
                            { title: "Plastic Waste Processors (PWPs)", desc: "Registered PWPs must file annual returns by April 30 disclosing category-wise quantity of plastic waste processed and attributed to PIBOs." },
                            { title: "Sellers of Raw Materials", desc: "Producers and importers of raw plastic materials must maintain records and submit information returns as part of the EPR framework." },
                            { title: "Online Platforms & Retail Chains", desc: "Non-MSME online platforms and supermarket chains operating in more than two states must comply with post-registration EPR obligations." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for EPR Post Compliance Filings",
                        description: "Key records and documents needed for half-yearly and annual EPR compliance filings:",
                        list: [
                            "EPR Registration Certificate (CPCB) and valid authorization number",
                            "Category-wise sales/import data for plastic packaging during the reporting period",
                            "Documentary proof from plastic waste processors (recycling certificates, quantity data)",
                            "EPR credit purchase certificates from CPCB portal transactions",
                            "State-by-state waste collection evidence, proportionate to EPR targets",
                            "Invoices and agreements with authorized plastic waste processors (PWPs)",
                            "Records of awareness programs conducted for consumers regarding plastic waste",
                            "Use of Recycled Content (URV) evidence or URV credit purchase certificates",
                            "GST data of processed or recycled materials (sold by PWPs)",
                            "Compliance manager/consultant authorization letter"
                        ]
                    }}

                    process={{
                        title: "EPR Post Compliance Filing Process",
                        subtitle: "How Corpbiz manages your ongoing plastic waste EPR compliance",
                        steps: [
                            { step: "01", title: "EPR Target Calculation", desc: "Calculate your annual plastic packaging EPR targets (category I-IV) based on sales/import data and CPCB formulas for the current financial year." },
                            { step: "02", title: "Recycler / PWP Tie-Up", desc: "Identify and engage CPCB-registered plastic waste processors (PWPs) or purchase EPR credits from the centralized portal to meet targets." },
                            { step: "03", title: "Half-Yearly Progress Report", desc: "Prepare and submit the half-yearly progress report to SPCB/PCC within 15 days after the end of each half-year (September 30 and March 31)." },
                            { step: "04", title: "Annual Return Preparation", desc: "Compile all category-wise plastic packaging data, recycling certificates, and sales details for the full financial year ending March 31." },
                            { step: "05", title: "Annual Return Filing on CPCB Portal", desc: "File the annual return on the CPCB EPR portal by June 30, providing recycling certificate details and EPR credit transactions." },
                            { step: "06", title: "Environmental Compensation (if any)", desc: "If targets are not fully met, calculate and deposit the applicable Environmental Compensation amount before the annual return deadline." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz for EPR Post Compliance – Plastic Waste?",
                        subtitle: "Expert-led, worry-free annual EPR compliance management for PIBOs and PWPs",
                        list: [
                            { title: "1000+ PIBOs Managed Annually", desc: "We manage ongoing EPR post compliance for 1000+ producers, importers, and brand owners — from target tracking to annual return filing." },
                            { title: "Dedicated Compliance Manager", desc: "A single point of contact monitors your EPR portal, tracks targets, reminds you of deadlines, and files all reports on your behalf." },
                            { title: "Monthly Target Tracking Dashboard", desc: "Clients receive monthly EPR target vs. achievement dashboards, so you always know where you stand well before the annual return deadline." },
                            { title: "Best-Rate EPR Credit Procurement", desc: "Our 300+ CPCB-registered recycler network ensures the most competitive EPR credit prices for PIBOs needing credit purchases before year-end." },
                            { title: "Zero-Penalty Track Record", desc: "99%+ of Corpbiz-managed PIBOs have filed their annual returns on time with zero Environmental Compensation penalties over the past 5 years." },
                            { title: "End-to-End Retainer Service", desc: "Annual retainer plan covers the full compliance cycle — target calculation, PWP tie-ups, reports, filings, audits, and CPCB query responses." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Everything you need to know about EPR Post Compliance for Plastic Waste"
                    faqs={faqs}
                />
                <ReviewsSection
                    title="What Our Clients Say"
                    subtitle="Trusted by 1000+ PIBOs and PWPs for timely, accurate plastic waste EPR post compliance."
                />
            </div>
        </div>
    );
};

export default EPRPostCompliancePlasticWaste;
