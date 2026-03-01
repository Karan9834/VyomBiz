import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRForImporters = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EPR Registration for Importers"
                    heroTitleSuffix="— Port Clearance Fast"
                    heroDescription="Containers detained at Indian port? Get your EPR certificate for importers fast. Expert guidance to prevent demurrage charges and supply chain delays across all regulated product categories."
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
                        title: "EPR For Importers —",
                        highlightTitle: "An Overview",
                        description: [
                            "Importers of electronic items, plastic packaging products, batteries, and tyres are strictly governed by Extended Producer Responsibility (EPR) regulations in India. Customs authorities at Indian ports require a valid EPR Certificate before clearing imported consignments.",
                            "Under the E-Waste (Management) Rules, 2022, Plastic Waste Management Rules, 2016, Battery Waste Management Rules, 2022, and Tyre Waste Management Rules, 2022 — all importers are considered 'Producers' and must obtain EPR authorization before placing regulated products on the Indian market.",
                            "The Import Export Code (IEC) alone is insufficient to clear regulated products at Indian ports. Without an EPR registration certificate, shipments are detained by customs, leading to costly demurrage charges, supply chain disruptions, and potential forced re-export of goods.",
                            "We offer specialized EPR registration services for importers with expedited processing to prevent port detention and supply chain delays. Our services cover all four regulatory frameworks — E-waste, Plastic, Battery, and Tyre EPR."
                        ],
                        whyIdealTitle: "Products Requiring EPR Registration for Import",
                        whyIdealList: [
                            { title: "Electronic & Electrical Equipment (EEE)", desc: "Computers, mobile phones, televisions, white goods, and all EEE in Schedule I of E-Waste Rules." },
                            { title: "Plastic-Packaged Products", desc: "Any products imported in plastic packaging, including FMCG, food, pharmaceutical, and industrial goods." },
                            { title: "Batteries", desc: "All battery types — EV, portable, automotive, and industrial batteries and battery packs." },
                            { title: "Tyres", desc: "New, retreaded, and used pneumatic rubber tyres of all categories." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of EPR Registration for Importers",
                        subtitle: "Why EPR registration is critical for smooth import operations",
                        list: [
                            { title: "Smooth Customs Clearance", desc: "EPR registration ensures your shipments clear customs without detention, preventing costly port delays and demurrage charges." },
                            { title: "Avoid Demurrage & Storage Charges", desc: "Containers detained at Indian ports accumulate demurrage of ₹5,000 to ₹30,000 per day. Fast-tracked EPR registration saves these costs." },
                            { title: "Legal Compliance", desc: "Importers without valid EPR certificates are liable for penalties under the Environment Protection Act, 1986, which may also result in import bans." },
                            { title: "Market Access for Regulated Products", desc: "EPR registration unlocks access to the Indian market for regulated product categories, enabling e-commerce listings, B2B contracts, and retail distribution." },
                            { title: "End-to-End Regulatory Handling", desc: "Our experts manage everything from DIC registration, recycler agreements, and CPCB portal coordination to final certificate issuance." },
                            { title: "Pre-Shipment EPR Certificate", desc: "For regular importers, we obtain EPR certificates in advance before shipment dispatch, ensuring zero port detention on arrival." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility for EPR Registration as an Importer",
                        subtitle: "Types of importers required to obtain EPR registration in India",
                        list: [
                            { title: "Commercial Importers of EEE", desc: "Importing electronic and electrical equipment for sale to Indian distributors, retailers, or end users." },
                            { title: "Importers of Plastic-Packaged Goods", desc: "Importing products packaged in any form of plastic, including flexible, rigid, or multi-layer plastic packaging." },
                            { title: "Battery Importers", desc: "Importing batteries including EV batteries, portable batteries, automotive batteries, and battery assemblies." },
                            { title: "Tyre Importers", desc: "Importing new, retreaded, or second-hand tyres for sale or distribution in India." },
                            { title: "Captive Consumption Importers", desc: "Entities importing regulated products for their own organizational or manufacturing use must also comply." },
                            { title: "E-Commerce Sellers (Cross-Border)", desc: "Foreign brands selling directly to Indian consumers through e-commerce platforms must obtain EPR registration." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for EPR Registration for Importers",
                        description: "Key documents required for EPR registration as an importer in India:",
                        list: [
                            "Import Export Code (IEC) Certificate",
                            "Customs House Agent (CHA) registration details",
                            "Bill of Entry / Invoice copies of recent imports",
                            "Product details & technical specifications",
                            "GST Registration Certificate",
                            "PAN Card of the company",
                            "Certificate of Incorporation",
                            "MoA / AoA of the company",
                            "Authorized Signatory KYC",
                            "Letter of Authorization from Foreign Manufacturer (for brand representatives)",
                            "EPR Action Plan in CPCB format",
                            "MoU with authorized recyclers or PRO",
                            "Awareness Plan / Website content proofs"
                        ]
                    }}

                    process={{
                        title: "EPR Registration Process for Importers",
                        subtitle: "Stepwise EPR registration for importers — from application to certificate",
                        steps: [
                            { step: "01", title: "Identify Waste Category", desc: "Determine which EPR category applies to your imports — E-waste (EEE), Plastic Waste, Battery Waste, or Tyre Waste — as each has a separate portal and process." },
                            { step: "02", title: "Document Preparation", desc: "Gather all required documents and prepare the EPR Action Plan based on your import history and projected annual import volumes." },
                            { step: "03", title: "EPR Portal Registration", desc: "Create an account on the relevant CPCB EPR portal. For E-waste: cpcb.nic.in/Ewaste. For Plastic: eprnational.cpcb.gov.in. For Battery: batteryepr.cpcb.gov.in." },
                            { step: "04", title: "Application Filing", desc: "Fill in the application form with all importer details, product categories, import quantities, and recycler partnerships. Upload all supporting documents." },
                            { step: "05", title: "CPCB Query Resolution", desc: "Address any clarifications or additional information sought by CPCB officials during the 15–30 day review period." },
                            { step: "06", title: "Certificate Issuance", desc: "Receive the EPR Authorization Certificate required by Customs for port clearance. Certificate is issued digitally on the CPCB portal." }
                        ]
                    }}

                    postCompliance={{
                        title: "Post-Registration Compliance for Importers",
                        subtitle: "Ongoing EPR obligations after obtaining your importer EPR certificate",
                        list: [
                            { title: "Annual EPR Target Fulfilment", desc: "Meet your annual EPR target for the product category imported. Targets are based on import volume in the reference year." },
                            { title: "Physical Collection or Credit Purchase", desc: "Either physically collect and recycle the target quantity through authorized recyclers, or purchase EPR credits from the CPCB portal to offset shortfalls." },
                            { title: "Quarterly Progress Reporting", desc: "File quarterly reports on the CPCB portal showing collection and recycling progress against quarterly milestones." },
                            { title: "Annual Return Filing", desc: "File annual returns by the deadline with full details of products imported, EPR actions taken, and credits purchased if applicable." },
                            { title: "Awareness Programme", desc: "Conduct and document consumer awareness programs about responsible product disposal as mandated by the relevant EPR rules." },
                            { title: "Certificate Renewal", desc: "EPR certificates are typically valid for 5 years. Submit renewal application 60 days before expiry to avoid lapse of compliance status." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz for EPR Registration for Importers?",
                        subtitle: "Trusted by 1000+ importers across India for EPR compliance",
                        list: [
                            { title: "Emergency Port-Clearance Service", desc: "Fastest EPR certificate issuance for importers with urgent port detention situations. We have resolved 200+ emergency port clearance cases." },
                            { title: "All Category Expertise", desc: "Single-window EPR registration for all import categories — E-waste, Plastic, Battery, and Tyre EPR." },
                            { title: "Pre-Shipment Certificate Planning", desc: "For regular importers, we plan EPR certificates proactively before your shipments arrive, ensuring zero port detention." },
                            { title: "Multi-State IEC Coverage", desc: "If importing into multiple states, we ensure your EPR registration covers all states of operation under a single CPCB certificate." },
                            { title: "1000+ Importer Clients", desc: "Successfully registered 1000+ importers across electronics, FMCG, pharmaceuticals, and industrial goods for EPR compliance." },
                            { title: "Ongoing Compliance Management", desc: "Year-round compliance management including target tracking, credit procurement, and annual return filing for importer clients." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "Do importers need EPR registration before shipping products to India?",
                    "answer": "Yes. Customs authorities require a valid EPR certificate before clearing regulated products at Indian ports. Without EPR registration, your consignment will be detained, leading to demurrage charges and potential forced re-export."
          },
          {
                    "question": "Can an importer use the same EPR certificate for multiple product categories?",
                    "answer": "No. Each waste category (e-waste, plastic, battery, tyre) has a separate EPR portal and registration. An importer dealing in multiple regulated product types must obtain separate registrations for each category."
          },
          {
                    "question": "How quickly can an importer get an EPR certificate for port clearance?",
                    "answer": "In standard processing, EPR certificates take 15–30 working days. Corpbiz offers an emergency fast-track service that can resolve critical port detention situations within 5–10 working days in many cases."
          },
          {
                    "question": "What if imported products are both electronic AND have plastic packaging?",
                    "answer": "The EPR obligation follows the primary regulated product category. Electronics are governed by e-waste EPR rules. If plastic packaging is significant and sold as standalone, separate plastic EPR registration may also be required."
          },
          {
                    "question": "Does an importer need separate EPR registration for each state?",
                    "answer": "No. A single CPCB EPR registration covers operations across all states and UTs of India. This is one of the key advantages of the centralized CPCB portal — national coverage with a single certificate."
          },
          {
                    "question": "What are the EPR targets for importers?",
                    "answer": "EPR targets for importers are calculated based on import volumes in the previous financial year. For plastic, targets are 100% of the eligible quantity. For e-waste, targets are 60–80% of EEE placed in market (Y-X years prior)."
          },
          {
                    "question": "Can a foreign company importing directly to Indian customers get EPR registration?",
                    "answer": "Yes. Foreign companies selling directly to Indian consumers (e.g., through cross-border e-commerce) must appoint a local India-registered authorized representative to obtain an EPR certificate on their behalf."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default EPRForImporters;
