import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRPostComplianceWaste = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EPR Post-Compliance for E-Waste"
                    heroTitleSuffix="— Annual Filing Support"
                    heroDescription="Don't let post-authorization compliance slip. Expert support for e-waste EPR annual returns, quarterly reports, RoHS declarations, and consumer awareness programs to stay 100% compliant."
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
                        title: "EPR Post Compliance for E-waste —",
                        highlightTitle: "An Overview",
                        description: [
                            "E-waste management is necessary to protect and improve our surroundings and environment. Preservation of the natural environment can only be achieved by executing proper waste management strategies. An EPR e-waste authorization is necessary for proper disposal of the e-waste. It should be obtained by the producer, importer, and brand owner of electronic products.",
                            "There are certain EPR post compliance (e-waste) requirements that should be met in a timely manner. Not fulfilling the compliances in a timely manner can invite penalties or even cancellation of EPR authorization by the CPCB.",
                            "The 2022 draft notification has brought into light some responsibilities that are a part of EPR Post Compliance for E-waste. PIBOs should register themselves on a portal developed by the Central Pollution Control Board.",
                            "PIBOs are bound to implement EPR targets as per Schedule III via this portal only. PIBOs can also file quarterly as well as annual returns on the portal."
                        ],
                        whyIdealTitle: "Challenges in E-waste EPR Post Compliance",
                        whyIdealList: [
                            { title: "Lack of Awareness", desc: "Most of the consumers and businesses are not aware of the worth of EPR post compliance for e-waste and why timely disposal is required." },
                            { title: "Informal Recycling", desc: "The informal sector is known for recycling mainly e-waste. However, their practices can damage the environment as they are not safe and reliable." },
                            { title: "Data Security", desc: "It's essential to sanitize data before disposing of electronic devices that are likely to encompass sensitive data." },
                            { title: "Complex Reverse Supply Chain", desc: "Managing the reverse supply chain entails coordination with retailers, consumers, recyclers, and various other stakeholders." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of EPR Post Compliance for E-waste",
                        subtitle: "Substantial benefits of maintaining EPR Post Compliance",
                        list: [
                            { title: "Environmental Protection", desc: "EPR post compliance for E-waste helps prevent pollution by making sure that e-waste is handled in an eco-sustainable manner." },
                            { title: "Brand Reputation", desc: "EPR Post Compliance for E-waste can uplift the brand reputation and solidify the position of a brand in the industry." },
                            { title: "Industry Responsibility", desc: "EPR Post Compliance for E-waste promotes a sense of responsibility within the electronic industry." },
                            { title: "Resource Recovery", desc: "EPR Post Compliance for E-waste assist in recovering valuable materials such as silver, gold, copper, as well as rare earth metals from e-waste." },
                            { title: "Legal Compliance", desc: "It helps importers of e-waste comply with environmental laws and regulations of India, thereby minimizing the risk of legal penalties." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for EPR Post Compliance for E-waste",
                        description: "Significant documents required for e-waste EPR post compliance:",
                        list: [
                            "Information about the collectors, recyclers, dismantlers, and PROs",
                            "Quantity of products floating in the market",
                            "List of collection centres",
                            "Sale and purchase records",
                            "RoHS Self-declaration",
                            "Website details and toll-free number",
                            "EEE Code and the quantity imported",
                            "Documents for CPCB certification",
                            "Common reporting standard certificate",
                            "Copy of agreement with recyclers, dealers, treatment storage, etc."
                        ]
                    }}

                    process={{
                        title: "List of EPR Post Compliance for E-waste",
                        subtitle: "Compliances that need to be fulfilled by all producers, importers and brand owners",
                        steps: [
                            { step: "01", title: "Set Up Collection Centres", desc: "Setting up of collection centres and implementing the mode of channelization according to the EPR plan." },
                            { step: "02", title: "Collection & Channelization", desc: "Collection and channelization of the e-waste generated through the end-of-life products with the same electrical, electronic code and historical waste." },
                            { step: "03", title: "Maintain Form 2 Records", desc: "Maintaining Form 2 records of e-waste handled and ensuring their availability at the time of inspection by the Central Pollution Control Board or the concerned State Pollution Control Board." },
                            { step: "04", title: "File Annual Returns Timely", desc: "Annual returns should be filed in a timely manner with the Central Pollution Control Board. A producer with multiple offices needs to file a single annual return for all locations in a state." },
                            { step: "05", title: "Report Changes to EPR Plan", desc: "In case of any change to the authorized Extended Producer Responsibility plan, the same should be reported to the Central Pollution Control Board within 15 days." },
                            { step: "06", title: "Prior Permission for Closure", desc: "If the authorised person decides to close any of the collection centres/points or other EPR plan facilities, prior permission from the Central Pollution Control Board is required." }
                        ]
                    }}

                    postCompliance={{
                        title: "Additional Requirements for EPR Post Compliance",
                        subtitle: "Ongoing obligations beyond basic EPR compliance",
                        list: [
                            { title: "Sales Data with Annual Returns", desc: "The applicant needs to provide sales data with annual returns as required by CPCB." },
                            { title: "Revised EPR Plan", desc: "A revised EPR plan has to be submitted in case there are changes in the EPR plan." },
                            { title: "New Product Model Self-Declaration", desc: "In case of introduction of a new model of product, enclosure A of the self-declaration should be submitted." },
                            { title: "Awareness Programme", desc: "As provided in the EPR plan, the applicant needs to run an awareness programme and organise a seminar about e-waste management." },
                            { title: "RoHS Technical Papers", desc: "When requested, the applicant should keep ready technical papers on the Restriction of Hazardous Substances (RoHS) for inspection by the Central or State Pollution Control Board." },
                            { title: "Quarterly Reporting", desc: "In every quarter, the applicant needs to report to the Central Pollution Control Board about the amount of e-waste of EEE code collected and recycled in the previous quarter." }
                        ]
                    }}

                    features={{
                        title: "Why Trust Corpbiz for EPR Post Compliance for E-waste?",
                        subtitle: "India's most reliable environmental business consulting firm for EPR Post Compliance",
                        list: [
                            { title: "99% Success Rate", desc: "99% Success Rate in Consulting Solutions for EPR Post Compliance for E-waste." },
                            { title: "500+ Greenpreneurs Trusted", desc: "Trusted by 500+ Greenpreneurs for E-waste EPR Post Compliance Requirements." },
                            { title: "End-to-end Assistance", desc: "End-to-end Assistance in EPR Post Compliance for E-waste." },
                            { title: "24/7 Dedicated Support", desc: "24/7 Dedicated Support for E-waste EPR Post Compliance." },
                            { title: "75% Market Share", desc: "Leading the Industry with a 75% Market Share." },
                            { title: "45% Reduction in Compliance Burden", desc: "Ensure Reduction in Environmental Compliance Burden up to 45%." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What is EPR post compliance for e-waste?",
                    "answer": "EPR post compliance refers to all obligations that must be fulfilled by PIBOs after obtaining EPR authorization. This includes setting up collection centers, meeting collection targets, filing quarterly and annual returns, conducting awareness programs, and reporting changes to the EPR plan to CPCB."
          },
          {
                    "question": "What must be included in EPR quarterly reports?",
                    "answer": "Quarterly reports must include the quantity of e-waste collected during the quarter (EEE code-wise), details of collection centers and take-back mechanisms used, names of authorized recyclers/dismantlers to whom e-waste was channeled, and any deviations from the EPR action plan."
          },
          {
                    "question": "Can a producer close collection centers without permission?",
                    "answer": "No. Closing any collection center or facility mentioned in the authorized EPR plan requires prior permission from CPCB. Unauthorized closure is a material violation of EPR authorization terms and can lead to its suspension."
          },
          {
                    "question": "What is the RoHS self-declaration requirement?",
                    "answer": "All producers of EEE must submit a self-declaration of compliance with RoHS (Restriction of Hazardous Substances) standards along with their EPR registration and annual returns. Technical documentation supporting RoHS compliance must be kept ready for CPCB inspection."
          },
          {
                    "question": "What happens if a new product model is launched after EPR registration?",
                    "answer": "When a new EEE product model is introduced, the producer must submit an enclosure to the self-declaration (Enclosure-A) with details of the new model to CPCB. This notification must be made before the product is placed on the market."
          },
          {
                    "question": "Is there a specific awareness program format mandated by CPCB?",
                    "answer": "CPCB mandates that producers organize awareness programs for consumers about e-waste disposal through media, advertisements, publications, seminars, or other communication channels. A report of these activities must be submitted with annual returns."
          },
          {
                    "question": "How does Corpbiz manage EPR post compliance for clients?",
                    "answer": "Corpbiz provides a year-round EPR post compliance management service including: target tracking dashboards, quarterly report preparation and filing, awareness program design and execution, collection center monitoring, and annual return preparation and submission."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default EPRPostComplianceWaste;
