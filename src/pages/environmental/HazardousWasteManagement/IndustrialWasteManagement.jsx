import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const IndustrialWasteManagement = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain={"Industrial Waste Management"}
                    heroTitleSuffix=""
                    heroDescription={"Facing hurdles in complying with industrial waste management regulations? Let our experts help you mitigate business risks and ensure sustainable growth. Follow Waste Disposal Regulations and avoid Penalties up to Rs 50 Lakh."}
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
                        title: "Industrial Waste Management —",
                        highlightTitle: "An Overview",
                        description: [
                            "Industrial waste management is the process which ensures the safe removal, recycling and disposal of unwanted wastes produced from by-products of industrial processes. Almost all forms of industrial waste generating air emissions, wastewater discharge, and by-products must be handled and carefully disposed of since they frequently harm the environment or people's health."
                        ]
                    }}

                    advantages={{
                        title: "Rules, Regulations & Benefits",
                        subtitle: "Understanding the regulatory framework",
                        list: [
                            {
                                "title": "Point 1",
                                "desc": "Industrial waste management process ensures compliance with local and state regulations, minimizing the risk of fines or operational impact."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "What's Included in our Service?",
                        subtitle: "Comprehensive compliance assistance",
                        list: [
                            {
                                "title": "Waste Stream Identification",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Regulatory Compliance Support",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Waste Management Planning",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Sustainability & ESG Reporting",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Wastewater Treatment",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Free 15-Min Consulting",
                                "desc": "Included as a standard feature of our compliance service."
                            }
                        ]
                    }}

                    documents={{
                        title: "Documents Required",
                        description: "Complete document list required for the application:",
                        list: [
                            "GST Certificate",
                            "Proof of Ownership",
                            "Factory License",
                            "Layout Plan of facility",
                            "Process Flow chart"
                        ]
                    }}

                    process={{
                        title: "Procedure for Authorization",
                        subtitle: "Stepwise process for obtaining authorization",
                        steps: [
                            {
                                "step": "01",
                                "title": "1. Assessment of Waste generation\n2. Handling hazardous and non-hazardous waste\n3. Ensuring regulatory compliance\n4. Application for CTE and CTO from CPCB",
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
                            "question": "What is Industrial Waste Management?",
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

export default IndustrialWasteManagement;
