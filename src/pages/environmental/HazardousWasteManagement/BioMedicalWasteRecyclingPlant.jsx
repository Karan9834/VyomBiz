import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const BioMedicalWasteRecyclingPlant = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Bio Medical Waste Management"
                    heroTitleSuffix="Recycling Plant Setup"
                    heroDescription="Struggling to set up your bio medical waste Management recycling plant? Get VyomBiz expert assistance for affordable, reliable, and timely bio medical plant setup solutions. 99 out of 100 successful bio medical waste management recycling plant setups."
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
                        title: "Bio Medical Waste Recycling Plant —",
                        highlightTitle: "An Overview",
                        description: [
                            "India's population is estimated to be 1.4 billion. As the population grows alarmingly, the number of visitors to hospitals and healthcare facilities is also rising. Biomedical waste in the country is giving the government and the general public a head-explosion experience. Biomedical waste refers to a special category of waste generated during the diagnosis and treatment of human beings or animals."
                        ]
                    }}

                    advantages={{
                        title: "Rules, Regulations & Benefits",
                        subtitle: "Understanding the regulatory framework",
                        list: [
                            {
                                title: "Legal Compliance & Safety",
                                desc: "Bio medical waste management authorization enables legal compliance, facilitating improved safety and better environmental protection for healthcare establishments. Setting up a bio medical waste recycling plant ensures healthcare facilities fulfil all the mandatory regulatory criteria for handling bio-medical waste to avoid legal penalties."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "What's Included in our Service?",
                        subtitle: "Comprehensive compliance assistance",
                        list: [
                            { title: "Feasibility Site Assessment", desc: "Included as a standard feature of our compliance service." },
                            { title: "CPCB & SPCB Authorization", desc: "Included as a standard feature of our compliance service." },
                            { title: "Environmental Clearance", desc: "Included as a standard feature of our compliance service." },
                            { title: "Plant Layout Design", desc: "Included as a standard feature of our compliance service." },
                            { title: "Machinery Procurement", desc: "Included as a standard feature of our compliance service." },
                            { title: "Free 30-Min Expert Advisory", desc: "Included as a standard feature of our compliance service." },
                            { title: "Company Registration", desc: "Included as a standard feature of our compliance service." }
                        ]
                    }}

                    documents={{
                        title: "Documents Required",
                        description: "Complete document list required for the plant setup:",
                        list: [
                            "Project Report Details",
                            "Proof of Ownership",
                            "Consent to Establish (CTE)",
                            "Consent to Operate (CTO)",
                            "Environmental Clearance (EC)",
                            "Pollution Control & Safety Compliance",
                            "Bio Medical Waste Handling Certification",
                            "Company Registration Document",
                            "PAN and GST Registration",
                            "Fire Safety Clearance",
                            "Local Municipal Approval"
                        ]
                    }}

                    process={{
                        title: "Procedure for Plant Setup",
                        subtitle: "Stepwise process for setting up a Bio Medical Waste Recycling Plant",
                        steps: [
                            {
                                step: "01",
                                title: "Conduct Market Research",
                                desc: "Understand the demand, competition, and feasibility of a bio medical waste recycling plant in your target region."
                            },
                            {
                                step: "02",
                                title: "Create a Business Plan",
                                desc: "Draft a detailed business plan including financials, operations model, and waste processing capacity."
                            },
                            {
                                step: "03",
                                title: "Obtain Necessary Licenses and Permits",
                                desc: "Secure SPCB/CPCB authorization, environmental clearance, and all other mandatory approvals."
                            },
                            {
                                step: "04",
                                title: "Set Up Facility and Equipment",
                                desc: "Establish the plant infrastructure with required machinery and compliance-ready layout as per regulatory standards."
                            },
                            {
                                step: "05",
                                title: "Develop Partnerships and Marketing",
                                desc: "Partner with hospitals, clinics, and healthcare facilities to ensure a consistent supply of bio medical waste for processing."
                            }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Get answers to the most common questions about this service."
                    faqs={[
                        {
                            "question": "What is a Bio Medical Waste Recycling Plant?",
                            "answer": "A bio medical waste recycling plant is a facility that processes waste generated during the diagnosis and treatment of humans or animals. It must comply with the Bio-Medical Waste Management Rules, 2016 and requires authorization from CPCB/SPCB."
                        },
                        {
                            "question": "What licenses are needed to set up a bio medical waste recycling plant?",
                            "answer": "You need Consent to Establish (CTE), Consent to Operate (CTO), Environmental Clearance, CPCB/SPCB authorization, fire safety clearance, and local municipal approval, among others."
                        },
                        {
                            "question": "How long does it take to set up the plant?",
                            "answer": "The timeline depends on land availability, regulatory approvals, and infrastructure setup. Typically, it can take 6–18 months from initial planning to operational status. VyomBiz helps expedite the approval process."
                        }
                    ]}
                />
                <ReviewsSection />
            </div>
        </div>
    );
};

export default BioMedicalWasteRecyclingPlant;
