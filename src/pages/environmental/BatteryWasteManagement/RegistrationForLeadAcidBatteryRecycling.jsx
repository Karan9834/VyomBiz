import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const RegistrationForLeadAcidBatteryRecycling = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Registration for Lead Acid"
                    heroTitleSuffix="Battery Recycling"
                    heroDescription="Lead Acid Battery Recycling is necessary to avoid major environmental hazard. Contact us for complete support for setting up a Lead Acid Battery Recycling Plant."
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
                        title: "Lead Acid Battery Recycling —",
                        highlightTitle: "Brief Overview",
                        description: [
                            "One of the cheapest ways of storing energy is through Lead Acid Batteries. The construction of this battery includes two electrode namely- lead and other is lead oxide. These electrodes are immersed in the water solution and sulfuric acid. When the battery generates energy, the lead combines with the sulphuric acid and creates lead sulphate.",
                            "The lead acid battery, if not handled or disposed of properly, can contaminate soil and ground water. It can also become a cause for environmental pollution. Hence, proper Lead Acid Battery Recycling is necessary to avoid major environmental hazard."
                        ]
                    }}

                    advantages={{
                        title: "Rules and Regulations",
                        subtitle: "Governing Lead Acid Battery Recycling",
                        list: [
                            {
                                title: "Batteries (Management and Handling) Rules, 2001",
                                desc: "These rules shall be applicable to every manufacturer, importer, re-conditioner, assembler, dealer, recycler, auctioneer, consumer and bulk consumer."
                            },
                            {
                                title: "Effective Control Measures",
                                desc: "There is a need to implement effective control measures in the battery recycling plant to protect the workers health and to prevent pollution."
                            }
                        ]
                    }}

                    process={{
                        title: "Lead Acid Batteries Recycling",
                        subtitle: "Understanding the Registration procedure and Recycling process",
                        steps: [
                            {
                                step: "01",
                                title: "Submitting an Application",
                                desc: "Make an application for registration to the Ministry of Environment and Forests (MoEF) or an agency designated by it by submitting the information in Form VI along with copies of valid consents, authorizations, and proof of installed capacity."
                            },
                            {
                                step: "02",
                                title: "Inspection & Certification",
                                desc: "The designated officer shall ensure that the recyclers have the appropriate facilities, technical capabilities, and equipment to recycle used batteries. MoEF will then take the decision on the application for registration."
                            },
                            {
                                step: "03",
                                title: "The Battery Recycling Process",
                                desc: "98% of a lead acid battery can be reclaimed. Batteries are broken apart, sulphuric acid is neutralized to sodium sulphate. The lead and polypropylene parts are separated, refined, and recycled into new batteries."
                            }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Responsibilities & Documents Required",
                        description: "Every recycler shall ensure compliance and make available all records pertaining to receipt of used batteries to the SPCB:",
                        list: [
                            "Form VI for Application",
                            "Annual return according to Form VII to the state board",
                            "Valid consents under Water and Air Act",
                            "Valid authorization under Hazardous Wastes Rules",
                            "Valid registration certificate with District Industries Centre",
                            "Proof of installed capacity"
                        ]
                    }}

                    features={{
                        title: "Validity & Cancellation",
                        subtitle: "Terms and conditions of registration",
                        list: [
                            {
                                title: "Validity and Renewal",
                                desc: "The registration shall be valid for a period of two years. For renewal, an application can be made in Form VI before the expiry."
                            },
                            {
                                title: "Cancellation",
                                desc: "The MoEF can cancel or suspend the registration if the registered recycler fails to comply with the registration conditions or provisions of the Act."
                            },
                            {
                                title: "Plant Owner Tips",
                                desc: "Focus on good plant design, install pollution abatement technologies, and implement control measures like minimum air quality standards and medical surveillance of employees."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "We make technical compliance certifications effortless and convenient.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Expertise in Lead Acid Recycling Plant Setup." },
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
                            question: "Why is Lead Acid Battery Recycling necessary?",
                            answer: "Without proper recycling, the batteries can contaminate soil and ground water, becoming a major cause of environmental pollution."
                        },
                        {
                            question: "What is the validity period of the registration?",
                            answer: "The registration shall be valid for a period of two years from the date of issue. The validity can be extended by applying for renewal before the expiry."
                        },
                        {
                            question: "Are there specific forms needed for the application?",
                            answer: "Yes, every recycler needs to make an application in Form VI to the Joint Secretary, MOEF."
                        },
                        {
                            question: "What happens during the recycling process?",
                            answer: "Batteries are collected, broken apart, and sulphuric acid is neutralized. Lead and plastic components are separated, refined, and re-processed into new batteries or other products."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default RegistrationForLeadAcidBatteryRecycling;

