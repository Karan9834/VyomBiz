import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const LEEDZeroCarbonCertification = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="LEED Zero Carbon"
                    heroTitleSuffix="Certification"
                    heroDescription="Secure LEED Zero Carbon Certification and Achieve Net Zero Carbon Emissions with the help of our 400+ LEED Consultants."
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
                        title: "Why Secure LEED Zero Certification? —",
                        highlightTitle: "An Overview",
                        description: [
                            "The building sector is experiencing a momentous shift towards greening and sustainability. Obtaining a LEED Zero Carbon Certification will help you in maximizing operational efficiency while minimizing environmental impacts.",
                            "It provides a roadmap for the property managers, service providers and portfolio owners who wish to reduce their operating costs while increasing the occupant's productivity. LEED provides guidelines for sustainable business operations, periodic upgrades of building systems and processes."
                        ]
                    }}

                    advantages={{
                        title: "Who Needs It & Types",
                        subtitle: "LEED Zero Carbon Certification Categories",
                        list: [
                            {
                                title: "LEED Zero Carbon",
                                desc: "Recognizes buildings operating with net zero carbon emissions over the last 12 months, balancing carbon emitted with carbon avoided."
                            },
                            {
                                title: "LEED Zero Energy & Water",
                                desc: "Recognizes buildings achieving a source energy use balance or potable water consumption balance of zero for the past year."
                            },
                            {
                                title: "LEED Zero Waste",
                                desc: "Achieves TRUE Zero Waste certification at Platinum level, generating zero waste through reduction and reusing methods."
                            }
                        ]
                    }}

                    typesOfCompliance={{
                        title: "Why Procure LEED Zero Carbon?",
                        subtitle: "Benefits of procuring this certification",
                        list: [
                            { title: "Tax Incentives", desc: "Allows for tax incentives in some jurisdictions for businesses choosing to build a green building." },
                            { title: "Increased Resale Value", desc: "Green buildings with sustainability concerns demand higher resale value in the market." },
                            { title: "Reduced Energy Use", desc: "Around 25% less energy consumption along with 34% lesser CO2 emissions." },
                            { title: "Achieve ESG Objectives", desc: "Helps companies attract investors who value environmental, social, and governance metrics." }
                        ]
                    }}

                    process={{
                        title: "Procedure to Get Certification",
                        subtitle: "How to obtain LEED Zero Carbon Certificate",
                        steps: [
                            {
                                step: "01",
                                title: "Meet Relevant Criteria & Gather Data",
                                desc: "Determine eligibility and compile utility bills and verifiable data to prove usage over 12 months."
                            },
                            {
                                step: "02",
                                title: "Application & Document Submission",
                                desc: "Submit application outlining compliance with the requirements, along with necessary certification fees."
                            },
                            {
                                step: "03",
                                title: "Review Assessment",
                                desc: "The Green Building Council reviews through an administrative and technical review before granting the award."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "We make technical compliance certifications effortless and convenient.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Expertise in LEED Zero Carbon Certification." },
                            { title: "400+ In-House Professionals", desc: "CAs, CS & LEED Consultants ready to assist." },
                            { title: "Assistance with Documentation", desc: "Compiling reports for net-zero carbon criteria." },
                            { title: "Data Analysis", desc: "Evaluating 12 months data to determine if the criteria is satisfied." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Learn more about LEED Certification"
                    faqs={[
                        {
                            question: "What does LEED stand for?",
                            answer: "LEED stands for Leadership in Energy and Environmental Design."
                        },
                        {
                            question: "What do you mean by net zero?",
                            answer: "Net-zero refers to a condition in which there is the elimination of greenhouse gases released into the atmosphere, completely offset by removed or avoided carbon."
                        },
                        {
                            question: "What is LEED Zero Carbon?",
                            answer: "It verifies the achievement of net zero goals for carbon emissions by tracking energy consumption and occupant transportation over 12 months."
                        },
                        {
                            question: "What are the four levels of LEED certification?",
                            answer: "Certified (26-32 points), Silver (33-38 points), Gold (39-51 points), and Platinum (52-69 points)."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default LEEDZeroCarbonCertification;

