import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRFulfillmentInEWasteManagement = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EPR Fulfillment in E-Waste Management"
                    heroTitleSuffix="— Turnkey Solution"
                    heroDescription="Meet your e-waste EPR collection targets without hassle. Turnkey e-waste EPR fulfillment solutions through our network of 15+ PROs and 10,000+ collection points across India."
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
                        title: "EPR Fulfillment in E-Waste Management —",
                        highlightTitle: "An Overview",
                        description: [
                            "EPR fulfillment in e-waste management refers to the complete execution of a producer's Extended Producer Responsibility obligations under the E-Waste (Management) Rules, 2022. This means physically collecting end-of-life electronic equipment from consumers and channeling it to authorized dismantlers and recyclers.",
                            "Under the E-Waste (Management) Rules, 2022, producers are required to set up take-back systems for their products after they reach end-of-life. The collection, transportation, dismantling, and recycling of e-waste must be done exclusively through CPCB/SPCB-authorized channels.",
                            "Producers can fulfill their EPR obligations either through their own collection infrastructure or by partnering with registered Producer Responsibility Organizations (PROs). PROs organize the logistics of e-waste collection on behalf of multiple producers.",
                            "Non-fulfillment of e-waste EPR targets attracts Environmental Compensation (EC) levied by CPCB. The EC rates are significantly higher than the cost of active EPR fulfillment, making timely compliance the economically sound choice."
                        ],
                        whyIdealTitle: "E-Waste EPR Fulfillment Methods",
                        whyIdealList: [
                            { title: "Authorized Collection Centers", desc: "Set up CPCB-registered collection points where consumers can deposit end-of-life electronics." },
                            { title: "PRO Partnership", desc: "Engage a registered PRO to manage all collection logistics across India on your behalf." },
                            { title: "Reverse Pickup Service", desc: "Offer doorstep e-waste pickup to consumers via authorized collection partners." },
                            { title: "EPR Credit Purchase", desc: "Purchase e-waste EPR credits from authorized dismantlers/recyclers to offset target shortfalls." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of EPR Fulfillment in E-Waste Management",
                        subtitle: "Why complete EPR fulfillment is essential for electronics businesses",
                        list: [
                            { title: "Avoid Environmental Compensation", desc: "Timely EPR target fulfillment prevents CPCB from levying Environmental Compensation, which can run into crores of rupees for large producers." },
                            { title: "Prevent Authorization Cancellation", desc: "Chronic non-fulfillment can result in cancellation of EPR authorization, halting your legal right to manufacture or import EEE products in India." },
                            { title: "Hassle-Free Takeback", desc: "Outsourcing collection logistics to verified PROs and recyclers eliminates the operational complexity of managing a national take-back network." },
                            { title: "Consumer Loyalty", desc: "Take-back programs and e-waste awareness campaigns enhance brand goodwill and encourage customer loyalty." },
                            { title: "Real-Time Progress Tracking", desc: "Monitor e-waste collection metrics in real-time through portal dashboards, ensuring you stay on track throughout the year." },
                            { title: "Environmental Protection", desc: "Proper e-waste management ensures hazardous materials like lead, mercury, and cadmium are safely extracted and disposed of, protecting public health." }
                        ]
                    }}

                    eligibility={{
                        title: "Who Needs EPR Fulfillment for E-Waste?",
                        subtitle: "Entities required to fulfill EPR targets under E-Waste (Management) Rules, 2022",
                        list: [
                            { title: "Electronics Manufacturers", desc: "All manufacturers of EEE products listed in Schedule I of the E-Waste (Management) Rules, 2022." },
                            { title: "Importers of EEE", desc: "Companies importing electronic and electrical equipment for sale or distribution in India." },
                            { title: "Brand Owners", desc: "Companies selling electronics under their own registered brand name, including private labels." },
                            { title: "E-Commerce Platforms with Own Brands", desc: "Online marketplaces that sell electronics under their own brand names must also fulfill EPR obligations." },
                            { title: "Government & PSU Purchasers (Bulk Consumers)", desc: "Bulk consumers of EEE with large annual purchases may also need to register and participate in e-waste management." }
                        ]
                    }}

                    documents={{
                        title: "Documents for EPR Fulfillment Setup",
                        description: "Documents required to set up your e-waste EPR fulfillment program:",
                        list: [
                            "Valid EPR Authorization Certificate from CPCB",
                            "MoU with Authorized E-Waste Recycler (Form-specific)",
                            "MoU with authorized PRO (if using PRO route)",
                            "Details of Toll-Free Collection Helpline",
                            "List and addresses of approved collection centers",
                            "E-waste awareness campaign materials and evidences",
                            "RoHS Self-Declaration for all product models",
                            "Quarterly e-waste collection reports (Form 2 format)",
                            "Agreement with authorized transporter for e-waste movement"
                        ]
                    }}

                    process={{
                        title: "E-Waste EPR Fulfillment Process",
                        subtitle: "Comprehensive approach to meeting e-waste EPR targets",
                        steps: [
                            { step: "01", title: "Target Calculation", desc: "Calculate your annual e-waste collection target based on EEE products put in the market in the reference year (Y-X, where X is average product life)." },
                            { step: "02", title: "Strategy Formulation", desc: "Design a viable take-back strategy — either through your own collection centers, PRO partnership, dealer take-back, or a combination of all methods." },
                            { step: "03", title: "Recycler & PRO Tie-Ups", desc: "Sign MoUs with CPCB-authorized e-waste dismantlers, recyclers, and/or PROs. Ensure agreements cover the requisite collection capacity for your target." },
                            { step: "04", title: "Collection Center Setup", desc: "Establish CPCB-compliant collection points at your facilities, dealer networks, and authorized service centers across India." },
                            { step: "05", title: "Consumer Awareness Campaign", desc: "Launch multi-channel awareness campaigns — toll-free helpline, website listings, product labelling, and educational campaigns — to educate consumers about e-waste disposal." },
                            { step: "06", title: "Quarterly Tracking & Annual Return", desc: "Monitor progress quarterly, file quarterly reports, and submit final annual returns showing total e-waste collected and channeled to authorized recyclers." }
                        ]
                    }}

                    postCompliance={{
                        title: "E-Waste EPR Target Schedule (2023-24 onwards)",
                        subtitle: "Annual collection targets for established vs new producers",
                        list: [
                            { title: "Established Producers (2023-24)", desc: "60% of EEE units placed in the market in year Y-X, where X is the average life of the product category." },
                            { title: "Established Producers (2027-28 onwards)", desc: "Target increases to 80% of EEE units placed in market in the reference year." },
                            { title: "New Producers (2023-24)", desc: "15% of sales figure of FY 2021-22 as per CPCB-notified schedule." },
                            { title: "New Producers (2024-25)", desc: "20% of sales figure of FY 2022-23." },
                            { title: "New Producers (2025-26 onwards)", desc: "20% of sales figure of the financial year two years prior." },
                            { title: "Environmental Compensation (Non-Fulfillment)", desc: "If targets are not met, CPCB levies EC at rates prescribed annually. Producers failing to meet targets must deposit EC amounts before the annual return deadline." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz for E-Waste EPR Fulfillment?",
                        subtitle: "India's most trusted e-waste EPR fulfillment partner for electronics brands",
                        list: [
                            { title: "Proven PRO Network", desc: "Partnerships with 15+ CPCB-registered PROs with pan-India collection reach, ensuring target fulfillment across all states." },
                            { title: "10,000+ Collection Points", desc: "Access to an established network of 10,000+ authorized e-waste collection points across India through our PRO partners." },
                            { title: "Real-Time Dashboard", desc: "Client-facing real-time dashboard to track e-waste collection progress, quarterly target achievements, and CPCB portal compliance status." },
                            { title: "Zero Environmental Compensation Record", desc: "None of our 500+ electronics clients have ever paid Environmental Compensation under our management." },
                            { title: "Consumer Awareness Solutions", desc: "Turnkey consumer awareness programs including SMS campaigns, website integrations, product label designs, and dealer training." },
                            { title: "Annual Return Filing Support", desc: "Expert team handles all CPCB portal filing — quarterly reports, Form 2, annual returns — with guaranteed on-time submission." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What is EPR fulfillment in e-waste management?",
                    "answer": "EPR fulfillment in e-waste management refers to the physical collection, transportation, dismantling, and recycling of end-of-life electrical and electronic equipment (EEE) by or on behalf of the producer. It includes all activities needed to meet the annual collection targets mandated by CPCB."
          },
          {
                    "question": "What is the e-waste EPR target for established producers in FY 2023–24?",
                    "answer": "Established producers must collect 60% of EEE units placed in the market in year Y-X (where X is the average product life). From 2027–28 onwards, this target increases to 80%."
          },
          {
                    "question": "What is a Producer Responsibility Organisation (PRO)?",
                    "answer": "A PRO is a registered entity that collects and channels e-waste on behalf of multiple producers. Producers can meet their EPR obligations by partnering with a CPCB-registered PRO instead of setting up their own collection infrastructure."
          },
          {
                    "question": "Can e-waste EPR credits be purchased instead of physical collection?",
                    "answer": "Currently, physical collection is the primary mechanism for e-waste EPR fulfillment. However, CPCB is expanding credit trading to e-waste categories. Producers unable to meet physical targets may be subject to Environmental Compensation."
          },
          {
                    "question": "What is the penalty for missing e-waste EPR targets?",
                    "answer": "Environmental Compensation (EC) is levied for shortfall in e-waste collection targets. EC amounts are notified by CPCB annually and must be deposited before the annual return deadline. Repeated non-compliance can lead to EPR authorization cancellation."
          },
          {
                    "question": "How do consumers return e-waste to producers?",
                    "answer": "Producers must provide multiple consumer touchpoints — toll-free collection helplines, listed collection centers, dealer take-back programs, reverse pickup services, and online drop-off booking. These are all mandated by the E-Waste (Management) Rules, 2022."
          },
          {
                    "question": "What forms must be filed for e-waste EPR compliance?",
                    "answer": "Key forms include Form-2 (records of e-waste handled), Form-3 (annual returns), and Form-6 (e-waste manifest for transport). These are filed on the CPCB e-waste portal. Corpbiz handles all form filings for its clients."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default EPRFulfillmentInEWasteManagement;
