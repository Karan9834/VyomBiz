import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EPRAuthorizationForEWaste = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="EPR Authorization for E-Waste"
                    heroTitleSuffix="— CPCB Registration"
                    heroDescription="Get your CPCB EPR authorization for e-waste before placing electronics on the Indian market. Expert assistance across all EEE product categories under the E-Waste (Management) Rules, 2022."
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
                        title: "EPR Authorization for E-waste —",
                        highlightTitle: "An Overview",
                        description: [
                            "EPR stands for Extended Producers Responsibility — a policy of the government under which producers are given the vital responsibility for the treatment and disposal of the consumer goods. The EPR authorization is mandated for the producers, importers, manufacturers, and brand owners.",
                            "EPR is a practice that encompasses a combination of environmental, economic, and social factors. EPR is a policy strategy in which producers are held financially and physically responsible for the handling and disposal of post-consumer items.",
                            "Assigning such responsibility might, in theory, create incentives to reduce waste at the source, promote environmentally friendly product design, and support public recycling and waste management aims.",
                            "In India, EPR came into existence to deal with E-waste under the E-waste management rules 2016. The Central Pollution Control Board (CPCB) is mandated to grant, renew or refuse Extended Producers Responsibility (EPR) authorization as per Rule 13(1) of E-Waste Rules 2016.",
                            "The OECD is moving toward expanding EPR to include additional products, product groups, and waste streams such as electrical appliances and electronics products."
                        ],
                        whyIdealTitle: "Who Can Apply for the EPR License?",
                        whyIdealList: [
                            { title: "Producers", desc: "Manufacturers of electrical and electronic equipment (EEE) covered under Schedule I of E-Waste Rules." },
                            { title: "Importers", desc: "Entities importing EEE products for sale or distribution in the Indian market." },
                            { title: "Brand Owners", desc: "Companies selling products under their own registered brand name in India." },
                            { title: "Manufacturers", desc: "Industrial manufacturers of EEE products including components, consumables, parts and spares." }
                        ]
                    }}

                    advantages={{
                        title: "Benefits of EPR Authorization in E-waste Licensing",
                        subtitle: "Why EPR is a game-changer for waste management",
                        list: [
                            { title: "Combats Planned Obsolescence", desc: "Extended producer responsibility financially encourages manufacturers to design for recycling and make items last longer, countering the trend of planned obsolescence." },
                            { title: "Reduces Government Burden", desc: "Governments may be relieved of the financial strain of paying for and handling trash by moving some of the cost burdens to the manufacturer." },
                            { title: "Global Compliance", desc: "EPR grows more effective since compulsion is applied to countries that export E-waste, forcing infrastructure to deal with the garbage or adapt new ways for manufacturers to make goods." },
                            { title: "Legal Safety", desc: "EPR certification is mandatory for all manufacturers and importers of E-waste in India, ensuring full legal compliance." },
                            { title: "Market Access", desc: "The E-waste certification is required for both Indian and foreign manufacturers or importers of electrical and electronic equipment." },
                            { title: "Environmental Impact", desc: "Forces countries to create infrastructure and compelling local and federal governments to impose more controls on businesses, reducing environmental burden." }
                        ]
                    }}

                    eligibility={{
                        title: "EPR Authorization — Eligibility",
                        subtitle: "Entities required to obtain EPR authorization for E-waste",
                        list: [
                            { title: "Electronics Manufacturers", desc: "Producing items listed in Schedule I of E-Waste Rules — computers, televisions, medical equipment, etc." },
                            { title: "Importers of EEE", desc: "Importing electrical and electronic equipment for sale in the Indian market." },
                            { title: "Brand Owners", desc: "Selling electronic products under their own brand name, including e-commerce platforms." },
                            { title: "Manufacturers of Components", desc: "Entities manufacturing components, consumables, parts, and spares of EEE products." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required for EPR Authorization for E-waste",
                        description: "Key documents needed for submission with your EPR authorization application:",
                        list: [
                            "KYC of company signatory",
                            "KYC of Authorized signatory",
                            "IEC Code (Import Export Code)",
                            "Website domain details",
                            "Toll-free contact number details",
                            "Certificate of Incorporation",
                            "PAN Card of the company",
                            "GST Registration Certificate",
                            "Legal documents authorizing manufacture/import/sale of EEE",
                            "Agreement/MoU with authorized e-waste collection center/recycler",
                            "EPR Action Plan as per CPCB format",
                            "RoHS Self-Declaration"
                        ]
                    }}

                    process={{
                        title: "Procedure of Grant/Renewal and Refusal of EPR Authorization",
                        subtitle: "Step-by-step EPR Authorization process for E-waste",
                        steps: [
                            { step: "01", title: "Application Submission", desc: "The producers, importers, manufacturers, and brand owners should file the application before the CPCB with all required documents." },
                            { step: "02", title: "Application Verification", desc: "Within 25 days after receiving an application, the Central Pollution Control Board may verify and investigate the provided information." },
                            { step: "03", title: "EPR Plan Review", desc: "After checking the submitted documents and being satisfied with the extended producers' responsibility plan, CPCB or SPCB proceeds for EPR authorization for E-waste." },
                            { step: "04", title: "Grant of Authorization", desc: "EPR Authorization is granted, valid for 5 years from the date of issue." },
                            { step: "05", title: "Renewal Process", desc: "Producers/Manufacturers shall submit the renewal application 60 days before expiry with all required documents and filed Annual Returns." }
                        ]
                    }}

                    postCompliance={{
                        title: "Roles and Responsibilities of EPR in relation to E-waste",
                        subtitle: "Key compliance obligations for EPR authorization holders",
                        list: [
                            { title: "Collection & Channeling", desc: "Producers shall be responsible for collecting and channeling the waste from items with the same electrical and electronic equipment code." },
                            { title: "Framework for E-waste Channeling", desc: "Producers create a framework for channelizing e-waste gathered from distributors and authorized service centers and waste collected from end of life items." },
                            { title: "Pre-Treatment of Hazardous Compounds", desc: "A pre-treatment is required for hazardous compounds such as mercury and lead, and the producer is liable for disposal in treatment, storage, and disposal facility." },
                            { title: "Collection Systems", desc: "Producers must collect E-waste through dealers, collection centers, PROs, buy-back arrangements, exchange schemes, or deposit-refund systems." },
                            { title: "Awareness Programs", desc: "Producers must organize an awareness program and create awareness through media, advertisement, publication, poster, or other means of communication." },
                            { title: "Consumer Helpline", desc: "Producers must provide contact details such as address, email id, toll-free telephone number, or helpline number to consumers through their website." }
                        ]
                    }}

                    features={{
                        title: "Why Choose Corpbiz for EPR Authorization for E-waste?",
                        subtitle: "Trusted by 500+ Greenpreneurs for EPR Authorization in E-Waste Management",
                        list: [
                            { title: "10+ Years of Experience", desc: "More than a decade of expertise in environmental licensing and EPR compliance." },
                            { title: "400+ In-House Experts", desc: "In-House CAs, CS & Lawyers dedicated to EPR compliance." },
                            { title: "99% SLA Delivery", desc: "We guarantee the highest standard of service delivery within committed timelines." },
                            { title: "10,000+ Pin codes Network", desc: "Pan-India coverage across 10,000+ pin codes for environmental services." },
                            { title: "Documentation Support", desc: "Comprehensive assistance with documentation for EPR authorization." },
                            { title: "End-to-End Assistance", desc: "Full support from application to approval and ongoing compliance." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
          {
                    "question": "What is EPR authorization for e-waste?",
                    "answer": "EPR authorization for e-waste is the official CPCB certificate that authorizes producers, importers, and brand owners of EEE (Electrical and Electronic Equipment) to legally sell their products in India. It mandates them to take responsibility for the end-of-life management of their products."
          },
          {
                    "question": "What EEE products are covered under e-waste EPR?",
                    "answer": "All EEE products listed in Schedule I of the E-Waste (Management) Rules, 2022 are covered — including computers, laptops, mobile phones, televisions, refrigerators, washing machines, printers, medical equipment, and many more categories."
          },
          {
                    "question": "Is EPR authorization required for e-commerce sellers?",
                    "answer": "Yes. E-commerce sellers who sell electronics under their own brand name are treated as producers/brand owners and must obtain EPR authorization. E-commerce platforms selling third-party products need to ensure their sellers are EPR-registered."
          },
          {
                    "question": "What is the RoHS compliance requirement under e-waste EPR?",
                    "answer": "Producers must ensure their EEE products comply with RoHS (Restriction of Hazardous Substances) standards — limiting hazardous substances like lead, mercury, cadmium, and chromium. A self-declaration of RoHS compliance must be submitted with the EPR application."
          },
          {
                    "question": "How is the e-waste collection target calculated?",
                    "answer": "The target is 60% of the quantity of EEE products placed in the market in year Y-X (where X is the average life of the product). For example, if a TV has a 5-year life and you sold 10,000 units in 2018–19, your 2023–24 target is 60% of 10,000 = 6,000 units to collect."
          },
          {
                    "question": "Can a producer outsource EPR target fulfilment to a PRO?",
                    "answer": "Yes. Producers can engage a CPCB-registered PRO to manage all e-waste collection activities on their behalf. The PRO organizes collection logistics, take-back programs, and reporting. However, the producer remains legally responsible for compliance on the CPCB portal."
          },
          {
                    "question": "What is the penalty for selling EEE without EPR authorization?",
                    "answer": "Selling EEE products in India without valid EPR authorization is a violation of the E-Waste (Management) Rules, 2022. This can result in Environmental Compensation, court orders, product recall by regulatory authorities, and reputational damage."
          }
]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default EPRAuthorizationForEWaste;
