import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRAuthorizationForBatteryWaste = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EPR Authorization for Battery Waste"
                    heroTitleSuffix="— Apply Now"
                    heroDescription="Obtain your EPR authorization for battery waste quickly with expert help. Complete CPCB/SPCB compliance support for producers, importers, and EV manufacturers across India."
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
                        title: "EPR Authorization for Battery Waste —",
                        highlightTitle: "An Overview",
                        description: [
                            "EPR for battery waste refers to a producer's extended producer responsibility for managing battery waste in a way that safeguards both the environment and human health. The Battery Waste Management Rules were introduced by the Ministry of Environment, Forest and Climate Change (MoEF&CC) in 2022.",
                            "The Battery Waste Management Rules impose duties on producers through EPR, requiring that all used batteries be collected and sent for refurbishment or recycling. These rules apply to all types of batteries including electric vehicle batteries, portable batteries, industrial batteries, and automotive batteries.",
                            "Any producer, importer, or brand owner who puts batteries on the Indian market must register on the CPCB EPR portal and obtain EPR authorization. Producers may hire recyclers or refurbishers to fulfill the EPR obligation.",
                            "The CPCB (Central Pollution Control Board) is the central authority for granting EPR authorizations for battery waste. Producers operating in more than two states must obtain authorization from CPCB, while those limited to 1-2 states may register with the respective SPCB/PCC."
                        ],
                        whyIdealTitle: "Types of Batteries Covered Under EPR",
                        whyIdealList: [
                            { title: "Electric Vehicle (EV) Batteries", desc: "Batteries used in electric vehicles, hybrid vehicles, and similar transport applications." },
                            { title: "Portable Batteries", desc: "Batteries used in portable devices — phones, laptops, consumer electronics." },
                            { title: "Automotive Batteries", desc: "Lead-acid and other batteries used in conventional vehicles." },
                            { title: "Industrial Batteries", desc: "Batteries used in industrial applications, UPS systems, and energy storage." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of EPR Authorization for Battery Waste",
                        subtitle: "Why EPR Authorization for batteries is essential for your business",
                        list: [
                            { title: "Legal Compliance & Security", desc: "EPR authorization for battery waste ensures your business meets mandatory legal requirements under the Battery Waste Management Rules, 2022, safeguarding you from penalties and legal action." },
                            { title: "Environmental Responsibility", desc: "Demonstrates your commitment to responsible battery disposal and recycling, reducing the environmental harm caused by toxic substances like lead, cadmium, and lithium in batteries." },
                            { title: "Market Access", desc: "An EPR certificate for battery waste is required by major B2B customers, government procurement agencies, and e-commerce platforms before they engage with battery suppliers." },
                            { title: "Brand Credibility", desc: "EPR authorization builds trust with environmentally conscious customers and investors, strengthening brand reputation in sustainability." },
                            { title: "Credit Generation Opportunity", desc: "Recyclers with EPR authorization can generate EPR credits and sell them to producers who are unable to meet their own targets." },
                            { title: "Competitive Advantage", desc: "Compliant producers often win more contracts and partnerships, particularly in the growing EV sector where battery compliance is strictly monitored." }
                        ]
                    }}

                    eligibility={{
                        title: "Who Needs EPR Authorization for Battery Waste?",
                        subtitle: "Entities required to obtain EPR authorization under Battery Waste Management Rules, 2022",
                        list: [
                            { title: "Battery Producers", desc: "Any entity manufacturing batteries domestically and placing them in the Indian market." },
                            { title: "Battery Importers", desc: "Businesses importing batteries of any type for commercial sale or distribution in India." },
                            { title: "Brand Owners", desc: "Companies selling batteries under their own registered brand name in India." },
                            { title: "EV Manufacturers", desc: "Electric vehicle manufacturers who use batteries as a core component of their products." },
                            { title: "Battery Refurbishers", desc: "Entities involved in refurbishing used batteries to extend their product life." },
                            { title: "Battery Recyclers", desc: "Businesses recycling battery waste — must register to generate and sell EPR credits." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for EPR Authorization for Battery Waste",
                        description: "Key documents required for the EPR registration application for battery waste:",
                        list: [
                            "Corporate Identification Number (CIN)",
                            "Consent Issued by SPCBs/PCCs (Air/Water/Hazardous Waste)",
                            "Import Export Certificate (for importers)",
                            "District Industries Centre (DIC) Registration",
                            "EPR Action Plan for Battery Waste",
                            "PAN Card of the company",
                            "GST Registration Certificate",
                            "Memorandum of Association (MOA) and Articles of Association (AOA)",
                            "MoU with authorized battery recyclers and refurbishers",
                            "Details of states where batteries are sold or distributed",
                            "Self-Declaration form",
                            "KYC of authorized signatory"
                        ]
                    }}

                    process={{
                        title: "EPR Authorization Registration Process for Battery Waste",
                        subtitle: "Step-by-step process under Battery Waste Management Rules, 2022",
                        steps: [
                            { step: "01", title: "Document Collation", desc: "Gather all necessary company documents, product details, battery sale data, and operational information." },
                            { step: "02", title: "Draft EPR Action Plan", desc: "Prepare a comprehensive EPR plan detailing collection strategies, recycler tie-ups, and battery waste management targets as per CPCB format." },
                            { step: "03", title: "Portal Registration", desc: "Register on the centralized online EPR portal of CPCB at cpcb.nic.in. Create your producer/importer/brand owner profile." },
                            { step: "04", title: "Submit Application", desc: "File the application with the required fee and all supporting documents. Applications are reviewed by CPCB within 30 days." },
                            { step: "05", title: "Query Resolution", desc: "Address any clarifications or additional documents requested by the CPCB officials during the review period." },
                            { step: "06", title: "Approval & EPR Certificate", desc: "CPCB evaluates the application and grants the EPR Authorization Certificate, valid for 5 years from the date of issue." }
                        ]
                    }}

                    postCompliance={{
                        title: "EPR Targets for Battery Waste",
                        subtitle: "Annual collection targets for different battery categories",
                        list: [
                            { title: "Portable Batteries — 2023-24", desc: "70% of units sold in Y-2 year. Rising to 80% in 2024-25 and 90% in 2025-26 and beyond." },
                            { title: "Automotive Batteries — 2023-24", desc: "55% of units sold in Y-2 year. Rising to 60% in 2024-25 and 60% in 2025-26 and beyond." },
                            { title: "Industrial Batteries — 2023-24", desc: "55% of units sold in Y-2 year. Rising to 60% in 2024-25 and 60% in 2025-26 and beyond." },
                            { title: "Electric Vehicle Batteries", desc: "70% in 2023-24, 80% in 2024-25, and 90% in 2025-26 and beyond." },
                            { title: "Annual Returns Filing", desc: "All producers must file annual returns on the CPCB portal about battery quantity sold and the amount of battery waste collected and sent for recycling." },
                            { title: "Validity & Renewal", desc: "EPR Authorization for battery waste is valid for 5 years. Renewal application must be filed 60 days before expiry." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz for EPR Authorization for Battery Waste?",
                        subtitle: "Trusted by leading battery manufacturers and EV companies across India",
                        list: [
                            { title: "100+ Battery EPR Clients", desc: "Successfully guided 100+ battery producers, importers, and EV manufacturers in obtaining EPR Authorization for Battery Waste." },
                            { title: "10+ Years of Environmental Expertise", desc: "Over a decade of hands-on experience in environmental licensing and CPCB/SPCB compliance." },
                            { title: "99% Success Rate", desc: "99% success rate in securing EPR authorization certificates for battery waste management." },
                            { title: "End-to-End Documentation Support", desc: "Complete assistance in preparing the EPR action plan, drafting agreements, and submission of all documents." },
                            { title: "Recycler Network", desc: "Access to a wide network of CPCB-authorized battery recyclers and refurbishers for MoU tie-ups." },
                            { title: "Ongoing Compliance Monitoring", desc: "Post-authorization support including quarterly reporting, annual returns filing, and target monitoring." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What are the Battery Waste Management Rules 2022?",
                    "answer": "The Battery Waste Management Rules 2022 were notified by MoEF&CC to regulate the collection, refurbishment, and recycling of all types of batteries in India. These rules impose EPR obligations on all producers, importers, and brand owners of batteries."
          },
          {
                    "question": "Which types of batteries are covered under EPR?",
                    "answer": "All battery types are covered — portable batteries (phones, laptops), automotive batteries (lead-acid, vehicle batteries), industrial batteries (UPS, storage), and electric vehicle (EV) batteries."
          },
          {
                    "question": "Who must obtain EPR authorization for battery waste?",
                    "answer": "Any entity that manufactures, imports, or sells batteries of any type in India must obtain EPR authorization for battery waste from CPCB or the respective SPCB before placing batteries on the market."
          },
          {
                    "question": "What are the collection targets for EV batteries?",
                    "answer": "For electric vehicle batteries: 70% collection target in 2023–24, rising to 80% in 2024–25, and 90% in 2025–26 and beyond. Targets are based on battery units placed in the market two years prior."
          },
          {
                    "question": "How long does EPR authorization for battery waste take?",
                    "answer": "Battery waste EPR authorization typically takes 30–45 working days from complete application submission. Corpbiz's battery EPR specialists can prepare and submit the application within 5–7 business days."
          },
          {
                    "question": "Can a battery importer purchase EPR credits for battery waste?",
                    "answer": "Yes. Like plastic and e-waste EPR, battery EPR credits are available on the CPCB portal. Importers who cannot meet physical collection targets can purchase credits from authorized battery recyclers to fulfil their obligations."
          },
          {
                    "question": "What happens if battery EPR targets are not fulfilled?",
                    "answer": "Failure to meet battery EPR collection targets results in Environmental Compensation levied by CPCB. Repeated non-compliance can lead to suspension of the EPR authorization, thereby halting the import or sale of batteries in India."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default EPRAuthorizationForBatteryWaste;
