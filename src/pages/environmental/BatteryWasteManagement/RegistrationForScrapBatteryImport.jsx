import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const RegistrationForScrapBatteryImport = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Registration for"
                    heroTitleSuffix="Scrap Battery Import"
                    heroDescription="Anyone who wants to deal in scrap battery import must secure registration for such import. Contact us to know the registration process."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Scrap Battery Import —",
                        highlightTitle: "An Overview",
                        description: [
                            "Batteries are a part of our daily life. With the increase in the use of portable power consuming products, there has been a huge demand of it. These batteries contain toxic metals and even corrosive materials that can be harmful for the environment and pose a threat to humans also.",
                            "Therefore for its proper handling, rules and regulations have been framed to deal in batteries. The Batteries (Management and Handling) Rules 2001, deal with the management of batteries and also import. Specific registration must be obtained to deal in Scrap Battery Import."
                        ]
                    }}

                    advantages={{
                        title: "Legal Framework",
                        subtitle: "Governing Scrap Battery Import",
                        list: [
                            {
                                title: "Batteries (Management and Handling) Rules 2001",
                                desc: "The importers need to adhere to the guidelines. The responsibility of providing registration to the importers has been delegated from the MoEF to the Central Pollution Control Board (CPCB)."
                            },
                            {
                                title: "Hazardous Waste Management Rules",
                                desc: "Notified to ensure secure handling, generation, treatment, import, package, processing, storage, transportation, re-processing, collection, conversion, offering for sale, destruction and disposal of Hazardous Waste."
                            }
                        ]
                    }}

                    process={{
                        title: "Registration Procedure",
                        subtitle: "Obtaining registration for scrap battery import",
                        steps: [
                            {
                                step: "01",
                                title: "Advance Application",
                                desc: "A recycler having a license from the SPCB to recycle such material and who is looking to import such material should apply to the respective State Pollution Control Board in advance."
                            },
                            {
                                step: "02",
                                title: "SPCB Forwarding",
                                desc: "The SPCB will then forward such application with recommendations and requisite stipulations for the safe transport, and processing in 30 days of receipt of the application."
                            },
                            {
                                step: "03",
                                title: "Issuance of NOC",
                                desc: "The state government shall provide the NOC for import if the importer submits a valid informed consent letter with an authenticated copy from the concerned authority of the exporting country. An actual user like a recycler or trader will be eligible."
                            }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Compliances Required",
                        description: "Scrap Battery Import Compliances",
                        list: [
                            "Maintenance of records of wastes imported in Form-3",
                            "Filing of annual return in Form 4 to the SPCB",
                            "Adherence to Hazardous Waste Management Rules",
                            "Valid informed consent letter from exporting country"
                        ]
                    }}

                    features={{
                        title: "Scrap Battery Import (India)",
                        subtitle: "Import Statistics and Market Share",
                        list: [
                            {
                                title: "Growth & Demand",
                                desc: "India imports scrap batteries from many countries. The dollar value of import of scrap batteries in 2020-21 stood at 893 Million USD."
                            },
                            {
                                title: "Top Partners",
                                desc: "Among the top importing countries are USA, Malaysia, UAE, Netherlands, Singapore, Germany, Thailand, Republic of Korea, Turkey, and Canada."
                            },
                            {
                                title: "Market Scenario",
                                desc: "The top 10 countries shared 62.14% of the Scrap Batteries import to India, with USA at the top sharing 11.91%."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "We make technical compliance certifications effortless and convenient.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Expertise in Scrap Battery Import." },
                            { title: "400+ In-House Professionals", desc: "CAs, CS & Lawyers ready to assist." },
                            { title: "99% SLA Delivery", desc: "100% Satisfaction Guaranteed." },
                            { title: "10,000+ Pin Codes", desc: "Network in India with fast processing." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear your doubts about the registration"
                    faqs={[
                        {
                            question: "Why do you need Scrap Battery Import Registration?",
                            answer: "Scrap batteries contain toxic materials that pose threats to the environment. Registration ensures proper authorization and infrastructure for hazard-free processing."
                        },
                        {
                            question: "To whom does the importer need to apply?",
                            answer: "The importer should apply to the State Pollution Control Board (SPCB) in advance, who forwards it with recommendations."
                        },
                        {
                            question: "Who can be an importer for scrap battery?",
                            answer: "An actual user like a recycler or a trader can both be eligible for this certification, provided they have the necessary setup and license from the SPCB."
                        },
                        {
                            question: "What are the common compliance tasks?",
                            answer: "Importers must maintain records in Form-3 and submit an annual return in Form-4 to the SPCB."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default RegistrationForScrapBatteryImport;

