import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const HazardousWasteManagementAndComplianceAssurance = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Hazardous Waste Management and"
                    heroTitleSuffix="Compliance Assurance"
                    heroDescription="For compliance assurance of all risks associated with your Hazardous waste, get your Hazardous Waste Management with the assistance of VyomBiz!"
                    stats={[
                        { count: "1L+", label: "Happy Clients" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Google Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Hazardous Waste Management and Compliance Assurance —",
                        highlightTitle: "An Overview",
                        description: [
                            "The term Hazardous Waste Management refers to all methods and regulations for handling Hazardous waste without endangering people or the environment. The primary goal of a Hazardous Waste Management and Compliance Assurance is to alter how hazardous waste is handled so that it may be transported, stored, and disposed of in a way that is safe for the environment."
                        ]
                    }}

                    advantages={{
                        title: "Rules, Regulations & Benefits",
                        subtitle: "Understanding the regulatory framework",
                        list: [
                            {
                                title: "Key Advantages of Compliance",
                                desc: "According to the Organization for Economic Cooperation and Development (OECD), 4.4 million tonnes of Hazardous waste are produced annually. Hazardous Waste Management and Compliance Assurance has four main advantages: Equity, Effectiveness, Efficiency, and Sustainability."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "What's Included in our Service?",
                        subtitle: "Comprehensive compliance assistance",
                        list: [
                            { title: "10+ Years of Experience", desc: "Included as a standard feature of our compliance service." },
                            { title: "400+ In-House CAs, CS & Lawyers", desc: "Included as a standard feature of our compliance service." },
                            { title: "99% SLA Delivery", desc: "Included as a standard feature of our compliance service." },
                            { title: "10,000+ Pin codes Network in India", desc: "Included as a standard feature of our compliance service." }
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
                            "Details of treatment storage and disposal facility (TSDFs)"
                        ]
                    }}

                    process={{
                        title: "Procedure for Compliance",
                        subtitle: "Stepwise process for Hazardous Waste Management Compliance",
                        steps: [
                            {
                                step: "01",
                                title: "Handling of Hazardous Wastes",
                                desc: "Take necessary precautions to safeguard health during the collection, packaging, and storage of hazardous waste."
                            },
                            {
                                step: "02",
                                title: "Transport of Hazardous Waste",
                                desc: "Transport waste safely to an authorised treatment, storage, or disposal facility (TSDF) using approved carriers."
                            },
                            {
                                step: "03",
                                title: "Disposal",
                                desc: "Secure landfill, deep wells, and bedrock disposal are a few options for eliminating waste in an environmentally safe manner."
                            }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
                        {
                            "question": "What is Hazardous Waste Management and Compliance Assurance?",
                            "answer": "It refers to all methods and regulations for handling hazardous waste without endangering people or the environment, ensuring safe transportation, storage, treatment, and disposal."
                        },
                        {
                            "question": "Who is required to comply with hazardous waste management regulations?",
                            "answer": "Any entity that generates, handles, stores, transports, treats, or disposes of hazardous waste as defined under the Hazardous Waste (Management, Handling and Transboundary Movement) Rules, 2016 must comply."
                        },
                        {
                            "question": "What are the consequences of non-compliance?",
                            "answer": "Non-compliance can result in heavy fines, cancellation of operating licenses, and legal proceedings under the Environment Protection Act, 1986."
                        }
                    ]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default HazardousWasteManagementAndComplianceAssurance;
