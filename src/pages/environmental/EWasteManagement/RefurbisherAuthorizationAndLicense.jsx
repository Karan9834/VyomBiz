import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const RefurbisherAuthorizationAndLicense = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Refurbisher Authorization & License"
                    heroTitleSuffix="— E-Waste Refurbishing"
                    heroDescription="Get your CPCB e-waste refurbisher authorization to legally operate an electronics refurbishing business in India. Expert guidance on documentation, BIS compliance, and CPCB portal registration."
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
                        title: "Refurbisher Authorization —",
                        highlightTitle: "An Overview",
                        description: [
                            "Refurbisher authorization is an official approval that regulates the refurbishing of electrical and electronic equipment (EEE), ensuring adherence to environmental, safety, and quality standards. The certification issued by the Central Pollution Control Board (CPCB) serves as legal authorization for refurbishers to operate and sell refurbished electronic equipment in the market.",
                            "The refurbisher authorization ensures efficient management and organization of e-waste, providing a structured framework for its proper handling and systemization.",
                            "A refurbisher is a person or entity responsible for repairing or assembling used electrical equipment, as listed in Schedule I. The refurbisher ensures completely refurbishing to enhance the quality of used electronic goods, extending the lifespan of the used electrical and electronic equipment while maintaining its authenticity and originality.",
                            "The refurbisher employs an effective technique/strategy to cater to huge amounts of e-wastes for the re-utilization of components in working conditions in new products. Additionally, the refurbisher must obtain a certificate of registration and proof of installed capacity from the District Industries Centre or any other government agency."
                        ],
                        whyIdealTitle: "Responsibilities of Refurbisher",
                        whyIdealList: [
                            { title: "Collect & Channel E-Waste", desc: "Must collect the E-waste generated throughout the process of refurbishment and send it to the authorized dismantler or recycler." },
                            { title: "Ensure BIS Compliance", desc: "Refurbished equipment shall be in accordance with the Compulsory Registration Scheme of the Ministry of Electronics and Information Technology and BIS Standards." },
                            { title: "File Annual & Quarterly Returns", desc: "Must file annual and quarterly returns on the portal on or before the end of the month succeeding the quarter or year." },
                            { title: "Environmental Compliance", desc: "Must ensure compliance with environmental degradation due to the storage and transportation of e-waste." }
                        ]
                    }}

                    advantages={{
                        title: "Advantages of Obtaining E-Waste Refurbisher License",
                        subtitle: "Significant benefits for businesses engaged in e-waste management",
                        list: [
                            { title: "Legitimacy", desc: "The e-waste refurbisher license legally authorizes businesses to refurbish and sell e-waste, providing them with legitimacy and credibility in the market." },
                            { title: "Quality Assurance", desc: "The e-waste refurbisher license ensures refurbishment process adherence to industry standards, guaranteeing quality assurance and environmental safety compliance." },
                            { title: "Cost-Effective", desc: "The grant of refurbisher authorization for e-waste management is cost effective, which helps bridge the digital divide and enables broader access to technology." },
                            { title: "Competitive Advantage", desc: "The refurbisher authorization offers businesses a significant competitive advantage in the market by ensuring compliance and building credibility towards sustainable waste management." },
                            { title: "Environmental Benefit", desc: "The e-waste refurbisher license minimizes the release of hazardous substances into the environment by effectively reducing and recycling electronic waste." },
                            { title: "Resource Conservation", desc: "The e-waste refurbisher license reduces the strain on mining, raw materials, and scarce resources used for the refurbishment and proper management of electronic waste." },
                            { title: "Balance Product's Work-Life", desc: "The e-waste refurbisher authorization is not just limited to reducing the e-waste, but it also improves the work-life of the products." }
                        ]
                    }}

                    eligibility={{
                        title: "Eligibility Criteria for Refurbisher Authorization",
                        subtitle: "Requirements for securing refurbisher authorization in India",
                        list: [
                            { title: "Land Requirement", desc: "The applicants seeking refurbisher license must comprise a land or external space required for the setup of small or large-scale refurbishment business." },
                            { title: "Technicians and Labours", desc: "The businesses seeking refurbisher authorization must appoint technicians and labourers capable of analysing the technology-related advanced machines." },
                            { title: "Factory Setup", desc: "A minimum 150 sq. m. water-proof premises is required for the setup of factory and storage of around 1 ton of e-waste generated through refurbishing of electrical and electronic equipment." },
                            { title: "Network Connection", desc: "The businesses must establish a stable network connection and necessary working equipment, facilitating a decent supply of refurbished electrical and electronic equipment." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for Refurbisher Authorization and License",
                        description: "The list of documents required for obtaining the refurbisher registration:",
                        list: [
                            "Form 1(a)",
                            "Cover Letter",
                            "PAN Card Details",
                            "Address Proof",
                            "Incorporation Certificate",
                            "Details of the recycling facility",
                            "Copy of Incorporation Certificate (CIN - optional)",
                            "Photo ID Proof of Business Owner",
                            "Board Resolution",
                            "Consent to Establish and Operate",
                            "Business Owner Address Proof",
                            "Self-Declaration on Letterhead of the Company",
                            "Affidavit for Correctness of Qualities Mentioned",
                            "List of Producers attached with Refurbishers",
                            "GST Registration Certificate",
                            "Proof of Possession of Premises (sale deed, rent agreement, electricity bill, etc.)",
                            "Company Registration Documents (MoA & AoA) & Partnership Deed",
                            "Layout Map of Business Premises"
                        ]
                    }}

                    process={{
                        title: "How to Apply for Refurbisher Authorization Online",
                        subtitle: "Under the E-Waste (Management) Rules, 2022",
                        steps: [
                            { step: "01", title: "Filing of Application", desc: "The applicant seeking refurbishment of e-waste must file an online application in Form 1 to the Central Pollution Control Board." },
                            { step: "02", title: "Document Submission", desc: "The e-waste refurbishers must further submit the required documents, including details of the electronic waste, along with a self-declaration confirming safety measures at the plant." },
                            { step: "03", title: "Evaluation/Review of Application", desc: "Once the documents are submitted, the authority is authorized for the evaluation and further review of the application for refurbisher authorization in India." },
                            { step: "04", title: "Grant of Refurbisher Authorization", desc: "Following the final evaluation, the concerned authority must grant the refurbisher authorization (in digital format) within 30 working days, provided the application is complete in all respects." },
                            { step: "05", title: "Verification of Refurbishing Facility", desc: "The concerned authority is further authorized to conduct verification of the refurbishing facility within 120 working days from the grant of registration through the EPR portal." }
                        ]
                    }}

                    features={{
                        title: "Why Opt for Corpbiz for E-waste Refurbisher License?",
                        subtitle: "India's leading environmental compliance partner",
                        list: [
                            { title: "99% Success Rate", desc: "99% Success Rate in Securing E-waste Refurbisher License." },
                            { title: "Pan-India Network", desc: "Ensuring Refurbisher Registration across 10,000+ Pin Codes." },
                            { title: "Expert Team", desc: "200+ Environmental Experts to Guide you Through the Journey of Refurbisher Registration." },
                            { title: "Documentation Support", desc: "Complete documentation support for refurbisher authorization." },
                            { title: "Expert Consultation", desc: "Expert Consultation Assistance in Acquiring Refurbisher Authorization." },
                            { title: "End-to-end Guidance", desc: "End-to-end Guidance in Obtaining E-waste Refurbisher License." }
                        ]
                    }}

                    postCompliance={{
                        title: "Validity and Renewal of Refurbisher Authorization",
                        subtitle: "Key timelines and fees for refurbisher registration",
                        list: [
                            { title: "Validity Period", desc: "The validity for refurbisher authorization is five (05) years from the date of the grant of its registration on the EPR portal." },
                            { title: "Renewal Timeline", desc: "The application for the renewal of the refurbisher authorization must be submitted within 60 days from the date of its expiry." },
                            { title: "Renewal Charges", desc: "The registration charges for the renewal of the refurbisher authorization after the period of 5 years costs around Rs. 7500/- excluding 0.625/MT for quantity of refurbishing certificate transaction in the preceding 5 years." },
                            { title: "First-Time Registration Fee", desc: "The first-time registration fee required for obtaining a new refurbisher authorization through EPR portal under the E-Waste (Management) Rules, 2022 costs around Rs. 15,000/-." },
                            { title: "Timeline for Authorization", desc: "It typically takes around 45 to 60 working days for the preparation and issuance of refurbisher authorization." },
                            { title: "Market Opportunity", desc: "The refurbished electronics market is anticipated to grow to $11 billion in gross value by March 2026, making it a highly profitable sector." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What is e-waste refurbisher authorization?",
                    "answer": "E-waste refurbisher authorization is an official certificate issued by CPCB that authorizes a business to repair, test, and refurbish used electrical and electronic equipment to extend its usable life. Refurbishers must comply with BIS standards and CPCB guidelines."
          },
          {
                    "question": "What is the difference between a refurbisher and a recycler?",
                    "answer": "A refurbisher restores used electronic equipment to working condition for resale. A recycler processes end-of-life e-waste to recover raw materials. Refurbishers generate e-waste as a by-product of their operations and must channel it to authorized dismantlers or recyclers."
          },
          {
                    "question": "What BIS standards apply to refurbished electronics?",
                    "answer": "Refurbished equipment must comply with the Compulsory Registration Scheme of the Ministry of Electronics and Information Technology (MeitY) and applicable BIS standards for the product category. Products must pass quality and safety testing before resale."
          },
          {
                    "question": "What is the refurbisher authorization registration fee?",
                    "answer": "The first-time registration fee for refurbisher authorization is ₹15,000. Renewal after 5 years costs ₹7,500 plus ₹0.625 per MT for the quantity of refurbishing certificates transacted in the preceding 5 years."
          },
          {
                    "question": "Do refurbishers need to file annual and quarterly returns?",
                    "answer": "Yes. Refurbishers must file annual and quarterly returns on the CPCB EPR portal on or before the end of the month succeeding the relevant quarter or year. Returns must include details of quantity of EEE refurbished and e-waste channeled to authorized recyclers."
          },
          {
                    "question": "What is the minimum infrastructure required for refurbisher authorization?",
                    "answer": "A minimum water-proof premises of 150 sq.m. is required for facility setup and storage of around 1 tonne of e-waste generated through refurbishing. The premises must also have stable network connectivity and appropriate testing equipment."
          },
          {
                    "question": "How long does it take to get refurbisher authorization from CPCB?",
                    "answer": "After complete application submission, CPCB must grant refurbisher authorization within 30 working days. A physical or video verification of the refurbishing facility is then carried out within 120 working days of authorization."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default RefurbisherAuthorizationAndLicense;
