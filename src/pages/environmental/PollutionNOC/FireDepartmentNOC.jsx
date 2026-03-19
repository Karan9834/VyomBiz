import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const FireDepartmentNOC = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Fire Department"
                    heroTitleSuffix="NOC"
                    heroDescription="Get Your Fire Department NOC Without the Hassle. Ensure your business premises meet fire safety regulations and operate legally with a Fire Department NOC. From documentation to approval, our experts simplify the entire process so you can focus on running your business."
                    stats={[
                        { count: "100K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "500+", label: "Compliance Experts" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "What is a",
                        highlightTitle: "Fire Department NOC?",
                        description: [
                            "A Fire Department No Objection Certificate (NOC) is an official authorization issued by the local fire authority confirming that a building or business premises complies with prescribed fire safety norms.",
                            "This certificate is mandatory for many commercial, industrial, and institutional establishments before starting operations. It verifies that the property has adequate fire prevention and protection systems such as fire extinguishers, alarms, emergency exits, and evacuation measures.",
                            "Obtaining this approval ensures both legal compliance and workplace safety, protecting employees, customers, and assets from potential fire hazards.",
                            "Businesses across sectors rely on professional assistance for this process. Vyombiz managed by Clink Consultancy Services Private Limited assists companies in preparing the required documentation, coordinating with fire authorities, and securing approvals efficiently."
                        ],
                        whyIdealTitle: "Why Mandatory?",
                        whyIdealList: [
                            { title: "Legal Compliance", desc: "Mandatory for high-rise buildings and specified commercial premises." },
                            { title: "Safety Assurance", desc: "Verified fire safety systems protect lives and infrastructure." },
                            { title: "Business Licensing", desc: "Often a prerequisite for other business licenses and permits." },
                            { title: "Operational Credibility", desc: "Builds trust with stakeholders and ensures legal safety standards." }
                        ]
                    }}

                    advantages={{
                        title: "Why Fire Department NOC is Important",
                        subtitle: "More than just a regulatory requirement-it plays a vital role in safeguarding people and infrastructure.",
                        list: [
                            { title: "Legal Compliance", desc: "Many state laws mandate a Fire NOC before starting operations in commercial or industrial spaces." },
                            { title: "Safety Assurance", desc: "It ensures your premises follow proper fire safety standards and emergency preparedness." },
                            { title: "Business Licensing", desc: "Many other licenses and registrations require a Fire NOC as a prerequisite." },
                            { title: "Insurance Approvals", desc: "Insurance companies often require proof of fire safety compliance for claims and coverage." },
                            { title: "Operational Credibility", desc: "Demonstrates responsibility and builds trust among employees, customers, and stakeholders." }
                        ]
                    }}

                    eligibility={{
                        title: "Who Needs a Fire Department NOC?",
                        subtitle: "Generally required for buildings where large numbers of people work or gather.",
                        list: [
                            { title: "Commercial & Office", desc: "Commercial buildings and large office complexes." },
                            { title: "Hospitality Units", desc: "Hotels, restaurants, and other hospitality establishments." },
                            { title: "Healthcare Facilities", desc: "Hospitals and healthcare centers requiring strict safety norms." },
                            { title: "Educational Institutions", desc: "Schools, colleges, and other academic facilities." },
                            { title: "Industrial & Warehouses", desc: "Warehouses, factories, and industrial manufacturing units." },
                            { title: "Shopping & Multiplex", desc: "Shopping malls and cinema multiplexes with high footfall." },
                            { title: "Residential Towers", desc: "High-rise residential buildings as per local fire department guidelines." }
                        ]
                    }}

                    documents={{
                        imageUrl: docImage,
                        title: "Documents Required",
                        subtitle: "The documentation process ensures the building meets the necessary safety standards.",
                        list: [
                            { title: "Building layout plan", desc: "Detailed layout and fire safety plan of the premises." },
                            { title: "Site plan", desc: "Plan showing the site location and building elevation drawings." },
                            { title: "Safety Equipment", desc: "Details of installed fire safety equipment like extinguishers and alarms." },
                            { title: "Stability Certificate", desc: "Structural stability certificate from a certified engineer." },
                            { title: "Occupancy Certificate", desc: "Building completion or occupancy certificate." },
                            { title: "Electrical Safety", desc: "Electrical safety certificate from a licensed contractor." },
                            { title: "ID & Address Proof", desc: "Identity and address proof of the applicant/authorized person." },
                            { title: "Ownership Proof", desc: "Property ownership or valid lease/rental documents." }
                        ]
                    }}

                    process={{
                        title: "Step-by-Step Selection Process",
                        subtitle: "The process typically involves inspection and verification by the fire authority.",
                        steps: [
                            { step: "01", title: "Application Submission", desc: "Submit the application along with the required documents and fire safety plans." },
                            { step: "02", title: "Technical Review", desc: "Fire officials review building design and safety infrastructure against norms." },
                            { step: "03", title: "On-Site Inspection", desc: "Authorities inspect the premises to verify fire protection systems and measures." },
                            { step: "04", title: "Compliance Correction", desc: "Any deficiencies identified during inspection must be rectified by the applicant." },
                            { step: "05", title: "Issuance of Fire NOC", desc: "Once all requirements are met, the Fire Department issues the official NOC." }
                        ]
                    }}

                    postCompliance={{
                        title: "Validity and Renewal",
                        subtitle: "Timely renewal helps businesses avoid penalties and operational disruptions.",
                        list: [
                            { title: "Validity Period", desc: "NOC is valid for a specific period, after which renewal is required for continued compliance." },
                            { title: "Safety Records", desc: "Renewal process involves updating safety equipment records and maintenance logs." },
                            { title: "Re-inspection", desc: "Authorities conduct a re-inspection of the premises to verify safety maintenance." },
                            { title: "Renewal Application", desc: "Submission of renewal application with up-to-date documentation and safety proofs." }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Common Reasons for Rejection",
                        subtitle: "Applications may be delayed or rejected due to compliance gaps such as:",
                        list: [
                            { title: "Inadequate Systems", desc: "Lack of proper fire extinguishing systems as per building standards." },
                            { title: "Exit Strategy Gaps", desc: "Lack of emergency exits or clearly defined evacuation routes." },
                            { title: "Alarm Failures", desc: "Improper or non-functional fire alarm systems." },
                            { title: "Incomplete Paperwork", desc: "Incorrect or incomplete documentation and building plans." },
                            { title: "Safety Non-compliance", desc: "General non-compliance with building safety regulations." }
                        ]
                    }}

                    features={{
                        title: "How Vyombiz Helps You",
                        subtitle: "Navigating fire safety regulations can be complex; we simplify it for you.",
                        list: [
                            { title: "Compliance Assessment", desc: "Evaluation of your premises to ensure readiness for official inspection." },
                            { title: "Documentation Support", desc: "Preparation and verification of all required forms and safety plans." },
                            { title: "Application Filing", desc: "Accurate submission of the application to the relevant fire authorities." },
                            { title: "Authority Liaison", desc: "Handling communication and inspection scheduling with fire officials." },
                            { title: "Post-Approval Support", desc: "Expert guidance for renewals and maintaining long-term safety compliance." }
                        ]
                    }}
                    navLabels={{
                        typesOfCompliance: "Rejection Gaps"
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    faqs={[
                        {
                            question: "Is Fire Department NOC mandatory?",
                            answer: "Yes, for high-rise buildings, commercial units, industrial factories, and educational institutions, it is mandatory under most state laws."
                        },
                        {
                            question: "What is the validity of a Fire NOC?",
                            answer: "Generally, it is valid for a specific period (usually 3 to 5 years depending on building type and state), after which it must be renewed."
                        },
                        {
                            question: "How does Vyombiz help in getting the NOC?",
                            answer: "Vyombiz provides end-to-end support, from assessing your premises and preparing documents to coordinating with authorities and securing approval."
                        },
                        {
                            question: "What happens if my application is rejected?",
                            answer: "Rejection usually happens due to compliance gaps. You must rectify the deficiencies identified by the fire department and re-apply."
                        },
                        {
                            question: "Is an inspection mandatory for renewal?",
                            answer: "Yes, authorities typically conduct a re-inspection to verify that fire protection systems are still functional and meet current safety standards."
                        }
                    ]}
                />

                <ReviewsSection
                    title="Start Your Process Today"
                    subtitle="Fire safety compliance is essential for every responsible business. Connect with Vyombiz to secure your NOC quickly."
                    reviews={[
                        {
                            name: "Clink Consultancy",
                            role: "Managed Service",
                            company: "VyomBiz",
                            rating: 5,
                            initials: "CC",
                            text: "Securing your Fire Department NOC is made simple with our expert guidance and end-to-end support services."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default FireDepartmentNOC;
