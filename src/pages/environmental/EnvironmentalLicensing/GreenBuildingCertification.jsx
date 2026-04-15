import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const GreenBuildingCertification = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Green Building"
                    heroTitleSuffix="Certification"
                    heroDescription="Ready to make your building more sustainable and meet environmental standards? Get your Green Building Certification securely with us."
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
                        title: "Green Building Certification —",
                        highlightTitle: "An Overview",
                        description: [
                            "Green building certification recognizes buildings that adopt sustainable construction practices and implement solutions to minimize environmental impact.",
                            "Awarded by relevant authorities, the certification is based on criteria from rating systems like IGBC, which assess water conservation, waste management, energy efficiency, and reduced use of fossil fuels.",
                            "Green buildings use environmentally responsible and resource-efficient practices throughout their lifecycle, from planning and design to operation and demolition."
                        ]
                    }}

                    advantages={{
                        title: "Criteria For Certification",
                        subtitle: "Five key requirements must be met",
                        list: [
                            {
                                title: "Sustainable Design & Water Usage",
                                desc: "Maintains ecological balance and uses water efficiently with strategies like stormwater tanks and on-site filtration."
                            },
                            {
                                title: "Energy Efficiency",
                                desc: "Efforts to minimize carbon footprint using renewable sources like solar panels and smart technologies."
                            },
                            {
                                title: "Indoor Comfort & Materials",
                                desc: "Optimal indoor air quality and temperature limit. Using eco-friendly, recyclable building materials."
                            }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Green Building Standards",
                        subtitle: "Certifications in India",
                        list: [
                            { title: "LEED India", desc: "A third-party verification program focusing on reducing waste and energy conservation." },
                            { title: "GRIHA", desc: "Green Rating for Integrated Habitat Assessment evaluating on local climate and building codes." },
                            { title: "IGBC Rating System", desc: "First India rating module categorized into Best practices, Silver, Gold, and Platinum." },
                            { title: "ECBC", desc: "Energy Conservation Building Code designed to rate energy-based standard based on climatic zone." }
                        ]
                    }}

                    process={{
                        title: "Certification Procedure",
                        subtitle: "Step-by-step to obtain certification",
                        steps: [
                            {
                                step: "01",
                                title: "Registration",
                                desc: "Visit the official website and register to access files, templates, and required information."
                            },
                            {
                                step: "02",
                                title: "Document Submission & Preliminary Phase",
                                desc: "Submit project descriptions along with testing reports, material computations, purchase invoices, and manufacturer sheets. Reviewed within 30 days."
                            },
                            {
                                step: "03",
                                title: "Final Phase & Certification",
                                desc: "A third-party assessor findings run for a final review in another 30 days. Post verification, the certification gets granted."
                            }
                        ]
                    }}

                    features={{
                        title: "Benefits of Green Building",
                        subtitle: "Tangible and Intangible Advantages",
                        list: [
                            { title: "Cost Savings", desc: "Significant water and energy usage reduction leading to 20-50% savings." },
                            { title: "Tax & Loan Benefits", desc: "100% depreciation claims on green construction assets. Eligible for low-interest loans via IREDA." },
                            { title: "Health & Wellbeing", desc: "Improved air quality, enhanced daylight, and increased tenant productivity." }
                        ]
                    }}

                    eligibility={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "We make technical compliance certifications effortless and convenient.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Secured 2000+ Green Building Certificates." },
                            { title: "400+ In-House Professionals", desc: "CAs, CS & Lawyers ready to assist." },
                            { title: "Fast-track Approvals", desc: "Simplifies the certification journey smoothly." },
                            { title: "Adherence to Standards", desc: "Ensures compliance across LEED, IGBC, GRIHA, and ECBC." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Understand the basic nuances"
                    faqs={[
                        {
                            question: "What is green building certification?",
                            answer: "It verifies that a building adheres to sustainable, energy-efficient, and environment-friendly methodologies."
                        },
                        {
                            question: "What is LEED certification?",
                            answer: "Leadership in Energy and Environmental Design is an independent market-driven program proving a building's sustainability."
                        },
                        {
                            question: "Who gives green building certification in India?",
                            answer: "Organizations like IGBC (Indian Green Building Council) and GBCI (for LEED certifications) issue them."
                        },
                        {
                            question: "What is the full form of IGBC?",
                            answer: "IGBC stands for Indian Green Building Council."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default GreenBuildingCertification;

