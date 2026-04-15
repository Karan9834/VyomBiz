import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const LithiumIonBatteryImportLicense = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Lithium-Ion Battery"
                    heroTitleSuffix="Import License"
                    heroDescription="Lithium-ion battery import license is necessary to deal in import of Lithium-ion batteries. Importers need to apply to the CPCB with the required documents."
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
                        title: "Lithium-Ion Battery Import —",
                        highlightTitle: "Brief Overview",
                        description: [
                            "India imports Lithium-ion Batteries from various countries as these have some great qualities such as quick charging etc. In order to import Lithium-ion Batteries, importers need to apply to the CPCB by following the due process along with supporting Documents. One can also renew this registration.",
                            "Batteries are a part of everyone's daily life. It is device containing electrochemical cells with external connections that provide power to electrical appliances.",
                            "When a battery is connected to external electric load, a redox reaction takes place which converts high-energy reactants to lower energy products. Secondary batteries can be used multiple times by recharging them."
                        ]
                    }}

                    advantages={{
                        title: "Qualities",
                        subtitle: "Lithium-ion Battery Import",
                        list: [
                            {
                                title: "Lithium-ion battery- Meaning",
                                desc: "A Lithium-ion battery is a type of rechargeable battery. These use intercalated lithium compound as one electrode material. These types are commonly seen in military, battery electric vehicles and aerospace applications."
                            },
                            {
                                title: "Qualities of Lithium-ion Battery",
                                desc: "They offer good life span, easy and fast charging, are safer than other types of batteries, and can provide environmental benefits also."
                            }
                        ]
                    }}

                    process={{
                        title: "Registration Procedure",
                        subtitle: "How to obtain Lithium-ion Battery Import License?",
                        steps: [
                            {
                                step: "01",
                                title: "Online Registration at BRMS portal",
                                desc: "The applicant needs to visit the BRMS portal and click on the new importer registration option. The system will then generate a User ID and password for logging in to the portal."
                            },
                            {
                                step: "02",
                                title: "Document Submission",
                                desc: "After the application is submitted, the applicant must submit a hard copy of the application on their letterhead along with the printout of Form II, III and self-attested copy of IEC certificate to the CPCB."
                            },
                            {
                                step: "03",
                                title: "Dispatch of Certificate",
                                desc: "Once the approval is gained from the authority in charge and sign from the nodal officer, the certificate of registration will be dispatched via post to the address mentioned on the IEC certificate."
                            }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Required Documents",
                        description: "Documents for obtaining Lithium-ion Battery Import License",
                        list: [
                            "PAN card",
                            "IEC certificate",
                            "Half yearly return",
                            "BIS certificate",
                            "Industrial license, if any"
                        ]
                    }}

                    features={{
                        title: "Renewal Guidelines",
                        subtitle: "Renewal of Lithium-ion Battery Import License",
                        list: [
                            {
                                title: "Timely Submission",
                                desc: "Applicant shall submit an application for renewal at the BRMS portal 45 days before the validity period."
                            },
                            {
                                title: "Compliance Verification",
                                desc: "The renewal will be based on verification of importers' half yearly returns submission on the BRMS portal or to the CPCB."
                            },
                            {
                                title: "Authority Approval",
                                desc: "The in-charge of the Hazardous Waste Management Division shall grant the registration renewal to the importers."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "We make technical compliance certifications effortless and convenient.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Expertise in Lithium-Ion Battery Import." },
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
                            question: "Why should an importer apply to the CPCB?",
                            answer: "In order to import Lithium-ion Batteries, importers need to apply to the Central Pollution Control Board (CPCB) following the due process along with supporting documents."
                        },
                        {
                            question: "What are the common uses of Lithium-ion batteries?",
                            answer: "They are commonly seen in military equipment, battery electric vehicles, cellphones, and aerospace applications due to quick charging and good lifespan."
                        },
                        {
                            question: "How is the certificate dispatched?",
                            answer: "Once the approval is gained from the designated authority, the certificate of registration will be dispatched via post to the branch address mentioned on the IEC certificate."
                        },
                        {
                            question: "When should the application for renewal be submitted?",
                            answer: "The applicant shall submit an application for renewal at the BRMS portal 45 days before the validity period."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default LithiumIonBatteryImportLicense;

