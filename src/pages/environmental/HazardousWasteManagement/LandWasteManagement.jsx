import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const LandWasteManagement = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain={"Land Waste Management"}
                    heroTitleSuffix=""
                    heroDescription={"For compliance assurance of all risks associated with your Land Waste, comply with applicableLand Waste Management laws with the assistance of VyomBiz."}
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
                        title: "Land Waste Management —",
                        highlightTitle: "An Overview",
                        description: [
                            "Approximately 80% of marine pollution comes from land. Our goal for Land Waste Management is to eliminate littering in our public lands and work toward a time when it is unheard of. The environment and the associated ecosystem services have deteriorated throughout time due to increased anthropogenic land-based activities and global pollution brought on by population growth and economic development."
                        ]
                    }}

                    advantages={{
                        title: "Rules, Regulations & Benefits",
                        subtitle: "Understanding the regulatory framework",
                        list: [
                            {
                                "title": "Point 1",
                                "desc": "According to the 2016 Solid Waste Management Rules:\nThat all Urban Local Bodies (ULBs) with a population of 100,000 or more to establish land waste treatment facilities within two years. Within three years, all Urban Local Bodies (ULBs) with a population of at least 0.5 million must begin operating regular or autonomous sanitary landfills."
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
                            "A site plan and map of the area",
                            "Aadhar card",
                            "PAN card",
                            "GST certificate",
                            "Consensus with other interested parties",
                            "A site clearance Document",
                            "Certificate of Consent to Establish",
                            "Certificate of Consent to Operate"
                        ]
                    }}

                    process={{
                        title: "Procedure for Authorization",
                        subtitle: "Stepwise process for obtaining authorization",
                        steps: [
                            {
                                "step": "01",
                                "title": "1. Create a registration ID with MPCB to register in the first stage.\n2. Fill out the information required to register on the portal, then log in.\n3. Following registration, enter the MPCB Portal.\n4. MPCB must communicate any discrepancies through the industry papers section.",
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
                            "question": "What is Land Waste Management?",
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

export default LandWasteManagement;
