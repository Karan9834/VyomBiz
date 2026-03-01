import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRCreditsFromPlasticWasteRecyclers = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EPR Credits from Plastic Waste Recyclers"
                    heroTitleSuffix="— All 4 Categories"
                    heroDescription="Meet your plastic EPR targets with certified credits from CPCB-registered PWPs. Covering Category I, II, III & IV plastic packaging. Best market rates, fastest transactions."
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
                        title: "EPR Credits from Plastic Waste Recyclers —",
                        highlightTitle: "An Overview",
                        description: [
                            "Under the Plastic Waste Management (PWM) Rules 2016 (amended 2022), registered Plastic Waste Processors (PWPs) generate EPR credits upon successfully collecting and recycling plastic packaging waste. These credits are officially listed on the centralized CPCB PWM portal.",
                            "Producers, Importers, and Brand Owners (PIBOs) registered under the PWM EPR framework must recycle a mandated percentage of their plastic packaging waste. PIBOs unable to meet their targets through physical collection can purchase these credits from PWPs to fulfill their recycling, use of recycled plastic content, and end-of-life disposal targets.",
                            "The credit market covers four main categories of plastic packaging: Rigid Plastic Packaging (Category I), Flexible Plastic Packaging (Category II), Multi-Layered Plastic Packaging (Category III), and Plastic used for carrying and wrapping (Category IV).",
                            "Each credit represents 1 metric tonne of plastic that has been collected, processed, and recycled by a CPCB-verified recycler. The credit generation process requires documentary proof of waste processed and is subject to third-party audit verification."
                        ],
                        whyIdealTitle: "Plastic Packaging Category Classification",
                        whyIdealList: [
                            { title: "Category I — Rigid Plastic", desc: "Includes PET bottles, HDPE containers, polypropylene containers, and other rigid plastic packaging." },
                            { title: "Category II — Flexible Plastic", desc: "Includes multilayer films, pouches, laminates, and other flexible plastic packaging materials." },
                            { title: "Category III — Multi-Layered Plastic", desc: "Includes multi-layered, multi-material plastic packaging that is not mono-sorted." },
                            { title: "Category IV — Plastic Carry Bags & Sheets", desc: "Includes plastic bags, sheets, and wrapping material used for carrying or enclosing products." }
                        ]
                    }}

                    advantages={{
                        title: "Advantages of EPR Credits from Plastic Waste Recyclers",
                        subtitle: "Why smart PIBOs choose credits for their PWM EPR compliance",
                        list: [
                            { title: "Guaranteed Target Fulfilment", desc: "Credits provide a guaranteed mechanism for meeting the rigid PWM targets regardless of your physical collection infrastructure or capacity." },
                            { title: "Only CPCB-Verified Recyclers", desc: "All credits are generated exclusively by CPCB-registered Plastic Waste Processors, ensuring authenticity and regulatory acceptance." },
                            { title: "Fully Audit-Proof", desc: "All credit transfers are electronically traceable on the government portal. Digital certificates provide complete documentation for CPCB audits." },
                            { title: "Flexible Procurement", desc: "Credits can be purchased in any quantity to cover partial or full target shortfalls. No minimum order requirements." },
                            { title: "Supports Circular Economy", desc: "By purchasing credits, PIBOs financially support the plastic recycling ecosystem and contribute to India's circular economy goals." },
                            { title: "Competitive Pricing", desc: "Our bulk procurement relationships with PWPs ensure you get credit prices significantly below the CPCB-defined Environmental Compensation (EC) rates, making compliance affordable." }
                        ]
                    }}

                    eligibility={{
                        title: "Who Should Purchase Plastic EPR Credits?",
                        subtitle: "PIBOs eligible to purchase EPR credits from plastic waste recyclers",
                        list: [
                            { title: "Registered PIBOs with Target Shortfall", desc: "Must be registered on the PWM CPCB portal with an active EPR registration certificate." },
                            { title: "Category I Plastic Producers", desc: "Brands and manufacturers of rigid plastic packaging failing to meet their Category I recycling target." },
                            { title: "Category II Flexible Packaging Users", desc: "FMCG companies and food brands using flexible plastic pouches and laminates who need to cover recycling targets." },
                            { title: "Category III MLP Manufacturers", desc: "Entities using multi-layer plastic packaging, typically for food, pharmaceuticals, and consumer products." },
                            { title: "Category IV Carry Bag Producers", desc: "Manufacturers of plastic carry bags, wrapping film, and packaging sheets requiring end-of-life disposal credits." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for Credit Procurement",
                        description: "Documents needed to initiate the plastic EPR credit procurement process:",
                        list: [
                            "PIBO EPR Registration Certificate (from CPCB PWM portal)",
                            "Category-wise plastic packaging sales or import data for the reference year",
                            "EPR Action Plan showing category-wise target and collection shortfall",
                            "State-wise distribution of plastic packaging sold or imported",
                            "Purchase Order for EPR Credits on CPCB portal",
                            "Bank account details of PIBO entity for transaction",
                            "Previous year annual return filing acknowledgment"
                        ]
                    }}

                    process={{
                        title: "Process for Purchasing EPR Credits from Plastic Recyclers",
                        subtitle: "Step-by-step process on the CPCB PWM portal",
                        steps: [
                            { step: "01", title: "Category-wise Gap Assessment", desc: "Calculate the exact shortfall in each plastic category (I, II, III, IV) by comparing your annual target with actual physical collection achieved during the year." },
                            { step: "02", title: "PWP Identification & Verification", desc: "Shortlist verified Plastic Waste Processors with available credits in your required categories. We provide a live database of verified PWPs with credit availability." },
                            { step: "03", title: "Price Negotiation & Agreement", desc: "Negotiate credit pricing with selected PWPs. Typical credit prices range from ₹8,000 to ₹30,000 per tonne depending on category and market conditions." },
                            { step: "04", title: "Portal Transaction", desc: "Execute the credit transfer on the CPCB PWM online marketplace. The PIBO initiates a purchase request on the portal, which the PWP accepts and confirms." },
                            { step: "05", title: "Digital Credit Certificate Generation", desc: "Upon successful transaction, the portal automatically generates a digital EPR credit certificate reflecting the quantity and category of credits transferred." },
                            { step: "06", title: "Annual Return Filing with Credits", desc: "Attach EPR credit certificates to your annual return filing on the CPCB portal. Credits are automatically reflected in your compliance ledger." }
                        ]
                    }}

                    postCompliance={{
                        title: "Mandatory PWM Compliance Beyond Credit Purchase",
                        subtitle: "Complete compliance obligations for PIBOs under PWM Rules",
                        list: [
                            { title: "Annual Return Filing", desc: "All PIBOs must file annual returns by June 30th (FY 2023-24 onwards) disclosing total plastic used, collection achieved, and credits purchased." },
                            { title: "Quarterly Data Reporting", desc: "PIBOs must update quarterly collection and recycling data on the CPCB portal, even if credits are being used for compliance." },
                            { title: "Use of Recycled Content (URV Targets)", desc: "Separate from recycling targets, PIBOs must progressively increase the use of recycled plastic content in their packaging — 30% by 2025-26." },
                            { title: "End-of-Life Disposal Target", desc: "A portion of MLP and non-recyclable plastics must be co-processed. Credits for co-processing can also be purchased from authorized co-processors." },
                            { title: "EPR Action Plan Update", desc: "Annual update and resubmission of the EPR action plan reflecting revised targets, state-wise collection strategies, and recycler partnerships." },
                            { title: "Environmental Compensation (EC)", desc: "If EPR targets are not met even after credit purchase, CPCB levies Environmental Compensation. In 2023-24, EC is set at ₹32.13/kg for recycling shortfall." }
                        ]
                    }}

                    features={{
                        title: "Why Source Plastic EPR Credits through Corpbiz?",
                        subtitle: "India's largest intermediary for plastic EPR credit transactions",
                        list: [
                            { title: "Largest PWP Network", desc: "Access to 200+ CPCB-registered Plastic Waste Processors with live credit inventory across all 4 plastic categories." },
                            { title: "Best Market Rates", desc: "Our volume relationships guarantee credit prices 15-25% below spot market rates, maximizing cost savings for clients." },
                            { title: "Category-specific Sourcing", desc: "Expert sourcing for all four plastic categories, including the harder-to-find MLP (Category III) credits for multi-layer packaging users." },
                            { title: "Rapid Transaction Closure", desc: "Most credit purchases are completed within 2-3 business days, with emergency same-day service available for year-end compliance deadlines." },
                            { title: "Full Portal Support", desc: "Technical support for completing transactions on the CPCB portal, including login assistance, purchase order initiation, and credit certificate download." },
                            { title: "Compliance Documentation Package", desc: "Complete compliance document package for audit readiness — credit certificates, recycler authorization copies, and annual return templates." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What are the plastic packaging categories for EPR credits?",
                    "answer": "There are four categories: Category I (Rigid plastic packaging — PET bottles, HDPE containers), Category II (Flexible plastic — films, pouches, laminates), Category III (Multi-layer plastic packaging — MLP), and Category IV (Plastic carry bags and wraps)."
          },
          {
                    "question": "Can PIBOs buy credits from recyclers in any state?",
                    "answer": "Yes. The CPCB portal allows nationwide credit transactions. A PIBO in Maharashtra can purchase credits from a recycler in Gujarat or Tamil Nadu. There are no geographic restrictions on credit trading on the centralized portal."
          },
          {
                    "question": "What is the Use of Recycled Content (URV) obligation?",
                    "answer": "Separate from recycling targets, PIBOs must progressively increase the use of recycled plastic content in their packaging: 30% by 2025–26, increasing further by 2028–29. URV credits can also be purchased from certified recyclers for this obligation."
          },
          {
                    "question": "How long does it take to purchase plastic EPR credits?",
                    "answer": "Most plastic EPR credit transactions on the CPCB portal are completed within 2–5 business days. With Corpbiz's pre-verified recycler relationships, urgent purchases can be completed within 24–48 hours for year-end compliance emergencies."
          },
          {
                    "question": "What documents are needed to buy plastic EPR credits?",
                    "answer": "You need your PIBO EPR registration certificate, category-wise plastic sales/import data, shortfall calculation report, and a purchase order initiated on the CPCB portal. Corpbiz handles all the documentation and portal transaction support."
          },
          {
                    "question": "What is the Environmental Compensation (EC) rate for plastic waste?",
                    "answer": "For FY 2023–24, the EC rate for recycling shortfall is ₹32.13 per kg. This is the penalty levied if EPR targets are not met. Purchasing EPR credits at market rates (₹8–30k/MT) is significantly cheaper than paying EC."
          },
          {
                    "question": "Do EPR credits satisfy all three types of plastic obligations (recycling + URV + EOL)?",
                    "answer": "No. The three obligations — recycling target, use of recycled content (URV), and end-of-life disposal — are separate. Separate credits must be procured for each obligation. Corpbiz helps map your specific credit requirements accurately."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default EPRCreditsFromPlasticWasteRecyclers;
