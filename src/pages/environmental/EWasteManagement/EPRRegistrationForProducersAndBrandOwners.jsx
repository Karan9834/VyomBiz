import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRRegistrationForProducersAndBrandOwners = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EPR Registration for Producers & Brand Owners"
                    heroTitleSuffix="— PIBOs"
                    heroDescription="Complete EPR registration for PIBOs under Plastic Waste Management and E-Waste Rules. Covers producers, manufacturers, importers, and brand owners. National CPCB registration in 15 days."
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
                        title: "EPR Registration for Producers & Brand Owners —",
                        highlightTitle: "An Overview",
                        description: [
                            "PIBOs — Producers, Importers, and Brand Owners — form the primary group of entities obligated to obtain EPR registration under the Plastic Waste Management Rules, 2016 and the E-Waste (Management) Rules, 2022. Any business that manufactures or sells products using plastic packaging or electronic equipment must register.",
                            "Under the Plastic Waste Management (Amendment) Rules, 2022, CPCB has established a centralized online EPR portal where all PIBOs must mandatorily register and obtain their EPR certificate. Without this, sale of plastic-packaged products or electronic equipment in India is non-compliant.",
                            "For plastic packaging, PIBOs must register if they use primary, secondary, or tertiary plastic packaging in their products' distribution chain. This includes rigid packaging, flexible pouches, laminates, multi-layer packaging, carry bags, and all other plastic forms used in the value chain.",
                            "For electronic products, producers and brand owners must register on the e-waste EPR portal and declare all EEE models they manufacture or sell under their brand name in India, along with the quantity placed in the market."
                        ],
                        whyIdealTitle: "Types of PIBOs Covered",
                        whyIdealList: [
                            { title: "Brand Owners", desc: "Companies selling products under their own registered brand name using plastic packaging or electronics." },
                            { title: "Producers of Plastic Packaging", desc: "Manufacturers of plastic packaging materials including bags, films, containers, and laminates." },
                            { title: "Manufacturers of EEE", desc: "Producers of electronic and electrical equipment including consumer electronics, IT products, and appliances." },
                            { title: "Plastic Packaging Users", desc: "Any business using plastic packaging in their supply chain — FMCG, pharma, food & beverage, e-commerce." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of EPR Registration for Producers & Brand Owners",
                        subtitle: "Why EPR registration is a business necessity for PIBOs",
                        list: [
                            { title: "National Compliance Coverage", desc: "A single CPCB EPR registration certificate covers your operations across all states and UTs of India — eliminating the need for individual state-level registrations." },
                            { title: "Corporate Sustainability", desc: "Align your brand with global sustainable packaging practices and corporate environmental responsibility frameworks like GRI, CDP, and ESG reporting." },
                            { title: "Legal Risk Mitigation", desc: "Avoid factory closures, product recall orders, or sales bans issued by SPCBs for non-compliance with EPR registration requirements." },
                            { title: "Retail & E-commerce Access", desc: "Major retailers and e-commerce platforms including Amazon, Flipkart, and organized retail chains are increasingly requiring proof of EPR registration from their suppliers." },
                            { title: "Investor & Banking Favorability", desc: "ESG-conscious investors and banks look at environmental compliance as a key assessment criterion for lending and investment decisions." },
                            { title: "CSR Reporting", desc: "EPR compliance activities can be reported under CSR initiatives, contributing to your company's social and environmental impact reporting." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility for EPR Registration as Producers & Brand Owners",
                        subtitle: "Criteria for mandatory EPR registration under Indian EPR regulations",
                        list: [
                            { title: "Use of Primary Plastic Packaging", desc: "Entities using plastic packaging that directly contacts the product — bottles, pouches, wrappers, blister packs." },
                            { title: "Use of Secondary Plastic Packaging", desc: "Business that uses plastic for grouping products — plastic trays, shrink wraps, secondary poly bags." },
                            { title: "Use of Tertiary Plastic Packaging", desc: "Industrial plastic packaging used for bulk handling — stretch film, pallet wrap, transit packaging." },
                            { title: "Electronics Manufacturers by Brand", desc: "Electronics companies manufacturing or assembling EEE products sold under their brand name in India." },
                            { title: "Licensed Brand Holders", desc: "Companies that hold brand licenses or franchises for products using regulated packaging or electronics." },
                            { title: "Own-Brand E-Commerce Sellers", desc: "E-commerce platforms selling products under their own brand names with plastic packaging." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for PIBO EPR Registration",
                        description: "Documents needed for EPR registration as a plastic packaging producer or brand owner:",
                        list: [
                            "Certificate of Incorporation",
                            "PAN Card of the company",
                            "GST Registration Certificate",
                            "Memorandum of Association (MOA)/Articles of Association (AOA)",
                            "Authorized Signatory KYC",
                            "Valid Consent to Operate (CTO) from SPCB (if a manufacturing unit)",
                            "Details of states/UTs where products are distributed",
                            "Category-wise volume of plastic packaging used per annum",
                            "MoU with authorized recyclers or registered PROs",
                            "EPR Action Plan in CPCB format",
                            "RoHS declaration (for electronics manufacturers)"
                        ]
                    }}

                    process={{
                        title: "EPR Registration Process for PIBOs",
                        subtitle: "Step-by-step registration guide for Producers and Brand Owners",
                        steps: [
                            { step: "01", title: "Plastic Footprint Assessment", desc: "Calculate your previous year's category-wise plastic packaging consumption (Rigid, Flexible, MLP, Carry Bags) to determine your EPR registration category and targets." },
                            { step: "02", title: "Portal Account Creation", desc: "Register your organization on the CPCB EPR portal (eprnational.cpcb.gov.in for plastic or the respective portal for e-waste). Create a PIBO profile with all organizational details." },
                            { step: "03", title: "EPR Action Plan Submission", desc: "Prepare and submit a state-wise EPR action plan detailing collection strategy, recycler tie-ups, and how you intend to meet your annual EPR targets." },
                            { step: "04", title: "Recycler Agreement Upload", desc: "Upload MoUs or agreements with CPCB-registered recyclers or PROs. These agreements demonstrate your capacity to fulfill EPR obligations." },
                            { step: "05", title: "Government Fee Payment", desc: "Pay the proportionate EPR registration fee on the CPCB portal based on your annual plastic usage volume or EEE quantity, as prescribed." },
                            { step: "06", title: "Certificate Issuance", desc: "Receive the PIBO EPR Registration Certificate from CPCB upon successful verification. Certificate is issued digitally on the portal within 15-30 working days." }
                        ]
                    }}

                    postCompliance={{
                        title: "EPR Targets for Plastic Packaging PIBOs",
                        subtitle: "Annual recycling targets under PWM Rules for brand owners and producers",
                        list: [
                            { title: "Recycling Target — 2023-24", desc: "100% of all four categories of plastic packaging placed on the market must be recycled. The eligible quantity (Q) formula varies for producers vs brand owners." },
                            { title: "Use of Recycled Content (URV)", desc: "30% recycled content must be used in rigid and flexible plastic by 2025-26, increasing to 60% by 2028-29 for some categories." },
                            { title: "End-of-Life Disposal Target", desc: "A percentage of non-recyclable MLP must be co-processed. CPCB mandates minimum co-processing targets annually." },
                            { title: "Quarterly Report Filing", desc: "PIBOs must file quarterly compliance reports on the portal disclosing waste generated, collected, and recycled during the quarter." },
                            { title: "Annual Return Deadline", desc: "Annual returns must be filed by June 30th for the preceding financial year. Defaults lead to Environmental Compensation notices." },
                            { title: "EPR Action Plan Renewal", desc: "The EPR action plan must be updated and re-submitted annually with revised targets, state-wise data, and recycler partnerships." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz for PIBO EPR Registration?",
                        subtitle: "India's most trusted EPR compliance partner for producers and brand owners",
                        list: [
                            { title: "3000+ PIBO Registrations", desc: "Successfully completed EPR registration for 3000+ PIBOs across FMCG, pharma, food & beverage, electronics, and industrial sectors." },
                            { title: "Industry-Specific Expertise", desc: "Dedicated EPR specialists for different industries — FMCG, pharma, electronics, MSME manufacturers — ensuring industry-relevant compliance strategies." },
                            { title: "Pan-India Coverage", desc: "Comprehensive coverage for producers and brand owners operating across all 28 states and 8 Union Territories of India." },
                            { title: "End-to-End Service Package", desc: "From plastic footprint assessment, EPR action plan drafting, recycler tie-ups, portal registration, to annual return filing — all under one roof." },
                            { title: "Technology-Driven Compliance Tracking", desc: "Digital compliance management platform with real-time alerts, target tracking dashboards, and automated deadline reminders." },
                            { title: "Dedicated PIBO Compliance Manager", desc: "Every client gets a dedicated account manager specializing in PIBO compliance to ensure zero penalty and zero compliance gap throughout the year." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What is the difference between a Producer and a Brand Owner under EPR?",
                    "answer": "A Producer manufactures the product or packaging material. A Brand Owner is a company that sells products under its own registered brand name, even if it does not manufacture the product itself. Both are considered PIBOs and must obtain EPR registration."
          },
          {
                    "question": "Do FMCG companies need EPR registration for plastic packaging?",
                    "answer": "Yes. FMCG companies are primary targets of plastic EPR rules since they use plastic packaging extensively. Any company using plastic packaging for its products — for primary, secondary, or tertiary packaging — must register as a PIBO."
          },
          {
                    "question": "Is EPR registration different for plastic and e-waste?",
                    "answer": "Yes. Plastic EPR registration is done on the CPCB PWM portal (eprnational.cpcb.gov.in), while e-waste EPR registration is on a separate CPCB e-waste portal. The documentation and process differ between categories."
          },
          {
                    "question": "What are the EPR registration fees for PIBOs?",
                    "answer": "The CPCB PWM portal charges registration fees based on the quantity of plastic packaging. Fees range from ₹2,000 to ₹25,000 depending on annual plastic usage volume. Corpbiz includes government fees in its transparent pricing."
          },
          {
                    "question": "Can a PIBO change its EPR action plan after registration?",
                    "answer": "Yes, but CPCB must be intimated of any significant changes within 30 days of the change. Major changes to the EPR action plan require resubmission and approval. Minor changes can be noted in the next annual return."
          },
          {
                    "question": "What is the Use of Recycled Content (URV) target for producers?",
                    "answer": "Producers and brand owners must progressively use recycled plastic content in their packaging. The target is 30% by 2025–26, with higher targets for specific categories by 2028–29. URV credits can be purchased from CPCB-verified recyclers."
          },
          {
                    "question": "Do e-commerce platforms need EPR registration?",
                    "answer": "Yes. E-commerce platforms that sell products under their own brand name (private labels) are considered brand owners and must obtain EPR registration. Marketplaces selling third-party brands generally need to ensure their sellers are registered."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default EPRRegistrationForProducersAndBrandOwners;
