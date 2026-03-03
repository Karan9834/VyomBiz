import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const HazardousWasteManagementAuthorization = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain={"Hazardous Waste Management Authorization"}
                    heroTitleSuffix=""
                    heroDescription={"Hazardous Waste Management Authorization is necessary for those involved in handling, generating, collection, storing, packaging, transportation, treatment, processing etc."}
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
                        title: "Hazardous Waste Management Authorization —",
                        highlightTitle: "An Overview",
                        description: [
                            "As the lifestyle of people undergoes significant change, different chemicals and products are used at home today and often, we are unaware that it is corrosive, explosive, flammable or toxic. These fall under dangerous wastes that should be kept out of wet and dry waste streams as they can be harmful to our health and for the environment also if not correctly disposed of. Proper hazardous waste management is required and to ensure that the state pollution control board provides hazardous waste management authorization."
                        ]
                    }}

                    advantages={{
                        title: "Rules, Regulations & Benefits",
                        subtitle: "Understanding the regulatory framework",
                        list: [
                            {
                                "title": "Point 1",
                                "desc": "These rules have been notified to ensure safe handling, generation, processing, storage, treatment, transportation, reprocessing, collection and proper disposal of hazardous waste. The Hazardous Waste Management Rules came into picture in 1989 and was amended later in 2000, 2003. Hazardous Waste (Management, Handling and Transboundary Movement) Rules were notified in 2016."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "What's Included in our Service?",
                        subtitle: "Comprehensive compliance assistance",
                        list: [
                            {
                                "title": "10+ Years of Experience",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "400 + In-House CAs, CS & Lawyers",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "99% SLA Delivery",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "10,000+ Pin codes Network in India",
                                "desc": "Included as a standard feature of our compliance service."
                            }
                        ]
                    }}

                    documents={{
                        title: "Documents Required",
                        description: "Complete document list required for the application:",
                        list: [
                            "Aadhaar Card copy and PAN card copy of the applicant",
                            "GST certificate",
                            "Rent/lease or proof of ownership",
                            "Factory license or trade license",
                            "Electricity bill",
                            "Layout plan",
                            "Certificate of incorporation if it's a company/LLP",
                            "MOA and AOA",
                            "Board resolution to appoint an authorized person"
                        ]
                    }}

                    process={{
                        title: "Procedure for Authorization",
                        subtitle: "Stepwise process for obtaining authorization",
                        steps: [
                            {
                                "step": "01",
                                "title": "1. Apply to the state pollution control board file an application in Form I within 60 days period from the date of publication of these rules\n2. The applicant must also accompany such application with consent to establish and consent to operate while applying\n3. Attach all Documents, and the Documents should be signed from the authorized person\n4. Submit the form to the concerned state pollution board\n5. If the board finds the form to be fit enough, then it shall grant the authorization",
                                "desc": "Critical step towards full regulatory compliance."
                            }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
                        {
                            "question": "What is Hazardous Waste Management Authorization?",
                            "answer": "It is a mandatory compliance requirement for businesses operating in this sector to ensure environmental safety and regulatory adherence."
                        },
                        {
                            "question": "How long does it take to get the authorization?",
                            "answer": "The timeline varies depending on the completeness of documents and the specific state pollution control board, but we strive to achieve the fastest possible turnaround times."
                        },
                        {
                            "question": "Are there any specific documents required?",
                            "answer": "Yes, you generally need KYC documents, ownership proof, layout plans, and specific project details. Refer to our documents section for a complete checklist."
                        }
                    ]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default HazardousWasteManagementAuthorization;
