import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRTargetFulfilment = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EPR Target Fulfilment"
                    heroTitleSuffix="— hit 100% Compliance"
                    heroDescription="Struggling to meet your EPR collection and recycling targets? Our turnkey EPR target fulfilment service covers physical collection logistics and credit procurement across all waste categories."
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
                        title: "EPR Target Fulfilment —",
                        highlightTitle: "An Overview",
                        description: [
                            "Extended Producer Responsibility, or EPR, was first introduced in 1988 in Sweden. Since then, the concept of EPR has evolved in a multidimensional manner, encompassing the unique waste management requirements of different countries.",
                            "In India, the EPR regime has significantly transformed the waste management framework in the field of plastic packaging waste, e-waste, tyre waste and hazardous waste such as battery waste. India's EPR framework focuses on end-of-life waste management, EPR Target Fulfilment and compliance requirements.",
                            "EPR Targets are recycling targets that are assigned to identified producers (manufacturers, importers, brand owners). These targets are usually defined as a percentage of the Eligible Quantity that the entity has to recycle, and the targets are increased gradually.",
                            "EPR targets are assigned after the successful registration for EPR and subsequently after the successful annual return submission on the EPR portal.",
                            "The Polluter's Pays principle on which the EPR Policy emerged shifted the burden of waste management from municipalities to the producers (manufacturers) and importers of the product."
                        ],
                        whyIdealTitle: "Need for EPR Policy in India",
                        whyIdealList: [
                            { title: "Basel Convention Compliance", desc: "India is a party to the Basel Convention and a signatory to international conventions like the Stockholm Convention (2006) and the Rotterdam Convention." },
                            { title: "Defined Reusability Process", desc: "A need to develop a defined process for reusability and recyclability in the waste management sector led to the evolution of EPR." },
                            { title: "Polluter Pays Principle", desc: "Shifted the burden of waste management from municipalities to the producers (manufacturers) and importers of the product." },
                            { title: "EPR Certificate Trading", desc: "Provisions regarding EPR Target Fulfilment were notified under waste management rules, along with the provision of EPR certificate trading among registered entities." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for EPR Registration",
                        description: "Common documents required across all EPR categories:",
                        list: [
                            "A covering requisition letter",
                            "Copy of attested Lease Deed/Sale deed as proof of possession",
                            "Copy of attested MOA in case of Public/Private sectors or registered partnership deed",
                            "Layout plan",
                            "Detailed manufacturing process for each product along with detailed process flow chart",
                            "Details of Water Balance",
                            "Details of Material balance for each product and process",
                            "Land use classification certificate",
                            "Consent NOC under Water and Air Acts",
                            "Any other Document required by the Board"
                        ]
                    }}

                    process={{
                        title: "EPR Target Fulfilment for Different Waste Categories",
                        subtitle: "Key targets and timelines for plastic, e-waste, tyre, and battery waste",
                        steps: [
                            { step: "01", title: "Plastic Packaging EPR Targets (FY 2023-24)", desc: "EPR Target is set to 100% of the eligible quantity. For Producers: Q = (A+B) - C. For Importers: Q = (A+B) - C. For Brand Owners: Q = (D+B). PIBOs can purchase EPR certificates from registered recyclers if they cannot fulfil their targets directly." },
                            { step: "02", title: "E-Waste EPR Targets (2023-24)", desc: "60% of the EEE quantity placed in the market in year Y-X ('X' denotes the average life of the product). Rising to 80% from 2027-28 onwards. Producers must submit an annual report on the portal concerning their target fulfilment." },
                            { step: "03", title: "E-Waste Targets for New Producers", desc: "2023-24: 15% of sales figure of FY 2021-22. 2024-25: 20% of sales figure of FY 2022-23. 2025-26 onwards: 20% of sales figure of the financial year two years back." },
                            { step: "04", title: "Tyre Waste EPR Targets", desc: "FY 2022-23: 35% of tyres manufactured/imported in 2020-21. FY 2023-24: 70%. FY 2024-25 onwards: 100%. For waste tyre importers: current year obligation is 100% of weight of tyres imported in the previous year." },
                            { step: "05", title: "Battery Waste EPR Targets", desc: "Portable batteries: 70% → 80% → 90%. Automotive batteries: 55% → 60% → 60%. Industrial batteries: 55% → 60% → 60%. Electric Vehicle batteries: 70% → 80% → 90%." }
                        ]
                    }}

                    features={{
                        title: "Why Partner with Corpbiz for EPR Target Fulfilment?",
                        subtitle: "Corpbiz is the first choice of thousands of entrepreneurs in the environmental industry",
                        list: [
                            { title: "300+ Authorized Recycler Partners", desc: "A wide network of authorized recyclers across all waste categories." },
                            { title: "Monthly Reconciliation Reporting", desc: "Real-time monthly reporting and reconciliation of EPR targets." },
                            { title: "10+ Years of Market Leadership", desc: "10+ Years of Market Leadership in EPR Target Fulfilment." },
                            { title: "2547+ MT Targets Accomplished", desc: "Helping clients achieve over 2547+ Metric Tons of EPR targets successfully." },
                            { title: "99% Client Retention Rate", desc: "Exceptional client satisfaction and longest-serving client relationships." },
                            { title: "Audit-ready Documentation", desc: "Complete audit-ready documentation support for all CPCB verification processes." }
                        ]
                    }}

                    postCompliance={{
                        title: "PIBOs' Obligations Under EPR for Plastic Packaging",
                        subtitle: "Responsibilities beyond target fulfilment",
                        list: [
                            { title: "Centralized EPR Portal Registration", desc: "Registering on the centralised EPR portal developed by CPCB." },
                            { title: "Action Plan Submission", desc: "Submitting their Action Plan for waste management on the CPCB portal." },
                            { title: "Recycling of Plastic Packaging Waste", desc: "Ensuring plastic packaging waste is collected and sent for recycling." },
                            { title: "Use of Recycled Content", desc: "Use of Recycled content in production as mandated under the rules." },
                            { title: "End-of-Life Disposal", desc: "Ensuring proper end-of-life disposal of plastic waste." },
                            { title: "Submitting Annual Returns", desc: "Provide auditable proof for purchased EPR certificates and file annual returns." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What is EPR target fulfilment?",
                    "answer": "EPR target fulfilment refers to meeting the mandatory waste collection, recycling, and disposal targets assigned to PIBOs under the plastic waste, e-waste, battery waste, and tyre waste management rules. Targets are expressed as a percentage of products placed in the market in a reference year."
          },
          {
                    "question": "What are the plastic EPR targets for FY 2023–24?",
                    "answer": "For FY 2023–24, the plastic EPR recycling target is 100% of the eligible quantity. The eligible quantity (Q) is calculated using official CPCB formulas that account for products placed on the market (A), non-plastic alternatives (B), and plastic packaging recovered (C)."
          },
          {
                    "question": "How are EPR targets set for new producers?",
                    "answer": "New producers (those who obtained EPR registration recently) have a different target schedule: 15% of their FY 2021–22 sales in 2023–24, rising to 20% of prior-year sales from 2024–25 onwards."
          },
          {
                    "question": "What are the tyre EPR targets for 2024–25?",
                    "answer": "For FY 2024–25, tyre manufacturers must collect 70% of tyres manufactured/imported in FY 2022–23. From FY 2025–26 onwards, the target is 100% of tyres manufactured/imported 2 years prior."
          },
          {
                    "question": "Can a PIBO carry forward excess collection to next year's targets?",
                    "answer": "Yes. Surplus physical collection beyond the current year's target can be converted into EPR credits and carried forward to offset future year targets. This can help producers who exceed targets in good years to offset potential shortfalls in lean years."
          },
          {
                    "question": "What happens if EPR targets are missed?",
                    "answer": "CPCB levies Environmental Compensation (EC) for shortfall in EPR targets. EC rates are notified annually and are significantly higher than the cost of meeting targets through credits or physical collection. Repeated shortfall can lead to authorization suspension."
          },
          {
                    "question": "How does Corpbiz help with EPR target fulfilment?",
                    "answer": "Corpbiz provides a complete EPR target fulfilment service: calculation of annual targets, sourcing physical collection partners or EPR credits, monthly reconciliation of collection against targets, and end-of-year annual return filing. Our 300+ recycler network ensures target fulfilment across all categories."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default EPRTargetFulfilment;
