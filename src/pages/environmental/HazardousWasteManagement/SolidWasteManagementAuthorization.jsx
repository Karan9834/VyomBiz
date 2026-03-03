import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const SolidWasteManagementAuthorization = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain={"Solid Waste Management Authorization"}
                    heroTitleSuffix=""
                    heroDescription={"Start Process in 2 Minutes. Worried about rejection of the solid waste management authorization? VyomBiz delivers 99% first-time approvals through structured documentation, technical reporting, authority coordination, and complete compliance management."}
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
                        title: "Solid Waste Management Authorization —",
                        highlightTitle: "An Overview",
                        description: [
                            "Solid waste refers to solid or semi-solid domestic waste, sanitary waste, institutional waste, commercial waste, horticultural waste, agricultural waste, bio-media waste and such other waste generated in the area under the local authorities and other entities mentioned under Rule 2. Solid Waste Management refers to the discipline connected to the control of generation, collection, storage, transportation, processing and disposal of the solid waste in a way that it is in the best interest of public health, engineering, economics, conservation and other environmental considerations. A person who engages in processing, treatment, recycling and disposal facility of waste must take Solid Waste Management Authorization under the Solid Waste Management Rules from the concerned department."
                        ]
                    }}

                    advantages={{
                        title: "Rules, Regulations & Benefits",
                        subtitle: "Understanding the regulatory framework",
                        list: [
                            {
                                "title": "Point 1",
                                "desc": "Municipal Solid Waste (Management and Handling) Rules 2000\nThis pertains to management and handling of municipal solid waste.\nBiomedical Waste (Management and Handling) Regulations 1998\nThis regulation governs the management and handling of the bio-medical waste.\nE-waste (Management and Handling) Regulations 2010\nThis regulation governs the management and handling of electrical and electronic waste."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "What's Included in our Service?",
                        subtitle: "Comprehensive compliance assistance",
                        list: [
                            {
                                "title": "Eligibility Assessment",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Application Drafting Support",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Disposal Management Plan",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "Site Layout Documentation",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "SPCB Filing Assistance",
                                "desc": "Included as a standard feature of our compliance service."
                            },
                            {
                                "title": "3-Step Compliance Check",
                                "desc": "Included as a standard feature of our compliance service."
                            }
                        ]
                    }}

                    documents={{
                        title: "Documents Required",
                        description: "Complete document list required for the application:",
                        list: [
                            "Authorized Signatory Aadhar Card",
                            "PAN Card of the Authorized Signatory",
                            "GST Certificate",
                            "Proof of ownership of site or rent/lease agreement",
                            "Factory license/trade license",
                            "Electricity bill",
                            "Layout plan",
                            "Process flow chart",
                            "Details of the machinery installed"
                        ]
                    }}

                    process={{
                        title: "Procedure for Authorization",
                        subtitle: "Stepwise process for obtaining authorization",
                        steps: [
                            {
                                "step": "01",
                                "title": "The procedure is as follows: \n1. Apply to the state pollution control board file an application in Form I within 60 days period.\n2. The applicant must also accompany such application with consent to establish and consent to operate.\n3. Attach all Documents, and the Documents should be signed from the authorized person.\n4. Submit the form to the concerned state pollution board.\n5. If the board finds the form to be fit enough, then it shall grant the authorization.",
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
                            "question": "What is Solid Waste Management Authorization?",
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

export default SolidWasteManagementAuthorization;
