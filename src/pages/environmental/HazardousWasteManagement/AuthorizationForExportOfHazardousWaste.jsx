import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const AuthorizationForExportOfHazardousWaste = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Authorization for Export of"
                    heroTitleSuffix="Hazardous Waste"
                    heroDescription="All those who want to deal in the process of export of Hazardous Waste must know that it is mandatory to get Authorization."
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
                        title: "Authorization for Export of Hazardous Waste —",
                        highlightTitle: "An Overview",
                        description: [
                            "Hazardous waste can be harmful for both humans and environment if it is not handled or disposed of properly. Therefore there is a need for well-organized hazardous waste management. Hazardous waste are non-biodegradable, persistent in the environment and can be dangerous. A proper hazardous waste management includes collection, recycling, treatment, disposal and transportation of wastes."
                        ]
                    }}

                    advantages={{
                        title: "Rules, Regulations & Benefits",
                        subtitle: "Understanding the regulatory framework",
                        list: [
                            {
                                title: "Export of Hazardous Waste",
                                desc: "The export of hazardous wastes from India listed in Part A and Part B of Schedule III and Schedule VI shall be with the permission of Ministry of Environment and Forest. In case of applications for export of hazardous wastes listed in Part A of Schedule III and Schedule VI, they will be considered based on prior informed consent of the importing country."
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
                            "Aadhaar Card",
                            "PAN card",
                            "GST certificate",
                            "Valid informed consent letter with authenticated copy from the importing country",
                            "Movement document in Form 6"
                        ]
                    }}

                    process={{
                        title: "Procedure for Authorization",
                        subtitle: "Stepwise process for obtaining authorization",
                        steps: [
                            {
                                step: "01",
                                title: "The Procedure:",
                                desc: "1. Anyone who intends to export hazardous waste shall make an application to the MoEF/SPCB.\n2. The MoEF/SPCB can give the permission for the proposed export.\n3. The state government will grant the NOC for export provided that the exporter submits a valid informed consent letter with authenticated copy from the concerned authority."
                            }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
                        {
                            "question": "What is Authorization for Export of Hazardous Waste?",
                            "answer": "It is a mandatory compliance requirement for businesses wishing to export hazardous waste to ensure environmental safety and cross-border regulatory adherence."
                        },
                        {
                            "question": "Who can grant permission for export?",
                            "answer": "The permission is primarily given by the Ministry of Environment and Forest (MoEF) along with the respective State Pollution Control Board (SPCB)."
                        },
                        {
                            "question": "What is the key document required from the importing country?",
                            "answer": "A valid informed consent letter with an authenticated copy from the importing country's concerned authority is strictly required."
                        }
                    ]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default AuthorizationForExportOfHazardousWaste;
