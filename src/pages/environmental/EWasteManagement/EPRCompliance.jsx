import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRCompliance = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EPR Compliance Services"
                    heroTitleSuffix="— Stay Compliant"
                    heroDescription="End-to-end EPR compliance management for plastic, e-waste, battery, and tyre waste. Expert-led filing, target tracking, and credit procurement. Zero penalties guaranteed."
                    stats={[
                        { count: "43298 +", label: "Happy Clients" },
                        { count: "3500 +", label: "Expert Advisors" },
                        { count: "50 +", label: "Branch Offices" },
                        { count: "10k+", label: "Pin codes" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "EPR Compliance —",
                        highlightTitle: "An Overview",
                        description: [
                            "Extended Producer Responsibility (EPR) is an environmental policy approach in which a producer's responsibility for a product is extended to the post-consumer stage of a product's life cycle. EPR compliance mandates that producers, manufacturers, and importers hold responsibility for the end-of-life management of their products.",
                            "EPR compliance in India covers multiple waste streams — plastic packaging waste under the Plastic Waste Management (PWM) Rules 2016, electronic waste under E-Waste (Management) Rules 2022, battery waste under Battery Waste Management Rules 2022, and tyre waste under the Tyre Waste Management Rules 2022.",
                            "EPR compliance involves registering on the CPCB portal, setting up collection centers, ensuring proper recycling, purchasing EPR credits to offset target shortfalls, and filing quarterly and annual returns accurately to the CPCB or SPCB.",
                            "Non-compliance with EPR obligations can result in heavy penalties, suspension of operations, and forced recall of products from the market. Our experts help you maintain an impeccable compliance record through regular audits, action plan management, and timely return filings."
                        ],
                        whyIdealTitle: "EPR Compliance Coverage Areas",
                        whyIdealList: [
                            { title: "Plastic Packaging Waste", desc: "Covered under Plastic Waste Management Rules, 2016 — for all PIBOs." },
                            { title: "E-Waste Management", desc: "Covered under E-Waste (Management) Rules, 2022 — for electronics manufacturers & importers." },
                            { title: "Battery Waste Management", desc: "Covered under Battery Waste Management Rules, 2022 — for battery producers and EV companies." },
                            { title: "Tyre Waste Management", desc: "Covered under Tyre Waste Management Rules, 2022 — for tyre manufacturers and importers." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of EPR Compliance Services",
                        subtitle: "Why maintaining EPR compliance is essential for your business",
                        list: [
                            { title: "Zero Penalties & Legal Safety", desc: "Maintaining EPR compliance shields your business from enforcement action by CPCB/SPCB, including penalties up to ₹1 Crore and business closure orders." },
                            { title: "Operational Continuity", desc: "Prevent supply chain disruptions and business interruptions caused by regulatory action. Stay operational and uninterrupted year-round." },
                            { title: "Brand Premium & Consumer Trust", desc: "Consumers and B2B customers today prefer brands that adhere to environmental norms. EPR compliance enhances brand equity and loyalty." },
                            { title: "Access to EPR Credits", desc: "Compliant producers can purchase EPR credits from registered recyclers to offset any shortfall in their physical collection targets." },
                            { title: "Investor Confidence", desc: "EPR compliance is increasingly scrutinized by ESG investors and institutional funds as a key sustainability metric." },
                            { title: "Export Market Access", desc: "International buyers and distribution partners often require proof of domestic environmental compliance before engaging in trade." }
                        ]
                    }}

                    eligibility={{
                        title: "Who Requires EPR Compliance?",
                        subtitle: "Entities mandated to maintain EPR compliance in India",
                        list: [
                            { title: "Electronics Manufacturers", desc: "Producing EEE products listed in Schedule I of the E-Waste (Management) Rules, 2022." },
                            { title: "Plastic Packaging Users", desc: "Producers and brand owners using plastic packaging in any form for their products." },
                            { title: "Battery Producers & Importers", desc: "Entities placing batteries of any type on the Indian market, including EV batteries." },
                            { title: "Tyre Manufacturers", desc: "Companies manufacturing or importing tyres for sale in India." },
                            { title: "E-Commerce Platforms", desc: "Online marketplaces selling regulated products under their own brand or as the responsible party." },
                            { title: "Importers across Categories", desc: "Importers of electronics, batteries, plastic-packaged products, and tyres in commercial quantities." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for EPR Compliance",
                        description: "Core documentation required for maintaining EPR compliance across all waste categories:",
                        list: [
                            "Valid EPR Registration/Authorization Certificate",
                            "Detailed records of sales and imports (quantity and category-wise)",
                            "Recycling/collection certificates from authorized recyclers or PROs",
                            "Quarterly EPR compliance reports",
                            "Annual returns in prescribed format",
                            "EPR Credit purchase invoices (if applicable)",
                            "MoU agreements with authorized PROs, recyclers, or collection centers",
                            "RoHS Self-declaration (for electronics)",
                            "EPR Action Plan (updated annually)",
                            "Awareness Programme records"
                        ]
                    }}

                    process={{
                        title: "EPR Compliance Process",
                        subtitle: "How to manage your EPR compliance lifecycle effectively",
                        steps: [
                            { step: "01", title: "EPR Registration", desc: "Register on the appropriate CPCB EPR portal for your waste category (E-waste, PWM, Battery, Tyre) and obtain your EPR authorization certificate." },
                            { step: "02", title: "Target Assessment", desc: "Calculate your annual EPR targets based on the quantity of products placed in the Indian market in the reference year as prescribed by CPCB." },
                            { step: "03", title: "Collection Partner Integration", desc: "Tie-up with authorized PROs, recyclers, dismantlers, or collection centers to physically collect and channel your target quantity of waste." },
                            { step: "04", title: "Data Management & Tracking", desc: "Maintain accurate records of all sales, import, collection, and recycling data. Update your EPR ledger on the portal on a quarterly basis." },
                            { step: "05", title: "EPR Credit Procurement", desc: "If physical collection falls short of targets, procure EPR credits from verified recyclers through the centralized portal to offset the shortfall." },
                            { step: "06", title: "Annual Return Filing", desc: "File prescribed annual returns on the CPCB portal, including all compliance data. Submit by the deadline to avoid penalties and certificate suspension." }
                        ]
                    }}

                    postCompliance={{
                        title: "Key EPR Compliance Obligations",
                        subtitle: "Mandatory ongoing obligations for all EPR-registered entities",
                        list: [
                            { title: "Quarterly Reporting", desc: "File quarterly reports on the CPCB portal showing collection achievements against the quarterly targets for the respective waste category." },
                            { title: "Annual Returns Submission", desc: "Submit annual returns by April 30th of the following financial year. Delayed submission attracts penalties as per gazette notification." },
                            { title: "EPR Action Plan Update", desc: "Update and re-submit the EPR action plan each year reflecting revised targets, recycler partnerships, and collection strategies." },
                            { title: "Awareness Programmes", desc: "Conduct consumer awareness programmes about extended producer responsibility and proper e-waste or plastic waste disposal." },
                            { title: "Record Maintenance", desc: "Maintain all EPR-related records for a minimum of 5 years and make them available for inspection by CPCB or SPCB at any time." },
                            { title: "Change Intimation", desc: "Intimate CPCB within 30 days of any change in product lines, company details, recycler partnerships, or significant deviations from the EPR action plan." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz for EPR Compliance Services?",
                        subtitle: "India's most trusted EPR compliance management partner",
                        list: [
                            { title: "5000+ Compliance Projects", desc: "Successfully managed EPR compliance for 5000+ clients across India since 2018." },
                            { title: "All 4 Waste Categories", desc: "Single-window compliance management for plastic, e-waste, battery, and tyre waste EPR." },
                            { title: "Automated Reminders", desc: "Technology-driven compliance calendar with automated alerts for deadlines, filings, and target milestones." },
                            { title: "Dedicated Account Manager", desc: "A dedicated compliance manager assigned to your account for year-round support and guidance." },
                            { title: "National Recycler Network", desc: "Access to 300+ authorized recyclers and PROs across India for physical collection and EPR credit procurement." },
                            { title: "99% On-time Filing Record", desc: "99% on-time annual return and quarterly report filing track record with zero penalty incidence." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What does EPR compliance involve?",
                    "answer": "EPR compliance involves registering on the CPCB portal, meeting annual collection/recycling targets, maintaining records of all EPR activities, filing quarterly and annual returns, conducting consumer awareness programs, and either physically collecting waste or purchasing EPR credits to offset shortfalls."
          },
          {
                    "question": "When is the deadline for filing EPR annual returns?",
                    "answer": "For plastic waste (PWM), annual returns must be filed by June 30th of the following financial year. For e-waste, the deadline is April 30th. For battery and tyre waste, specific deadlines are notified by CPCB annually."
          },
          {
                    "question": "What is Environmental Compensation (EC) for EPR?",
                    "answer": "EC is a penalty levied by CPCB on PIBOs who fail to meet their annual EPR targets. For plastic waste, EC is set at ₹32.13 per kg for recycling shortfall in 2023–24. EC amounts must be deposited before the annual return deadline."
          },
          {
                    "question": "Can EPR compliance be outsourced?",
                    "answer": "Yes. PIBOs can outsource their EPR compliance activities to registered PROs (Producer Responsibility Organisations) and compliance consultants like Corpbiz. However, the ultimate legal responsibility remains with the PIBO."
          },
          {
                    "question": "How often must quarterly EPR reports be filed?",
                    "answer": "Quarterly EPR reports must be filed within 30 days of the end of each quarter — by July 31, October 31, January 31, and April 30 for each financial year."
          },
          {
                    "question": "What records must be maintained for EPR compliance?",
                    "answer": "PIBOs must maintain records of sales/import data, collection achievement data, recycling/processing certificates, EPR credit purchase invoices, awareness program evidences, and all recycler agreements for a minimum of 5 years."
          },
          {
                    "question": "Is EPR compliance different for small vs large businesses?",
                    "answer": "The compliance framework is the same for all PIBOs, but targets are proportional to the quantity of products placed in the market. Smaller businesses with lower sales volumes have lower absolute EPR targets to fulfil."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default EPRCompliance;
