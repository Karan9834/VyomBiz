import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const LEEDZeroWaterCertification = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="LEED Zero Water"
                    heroTitleSuffix="Certification"
                    heroDescription="Obtain LEED Zero Water Certification for your projects around the world with the help of our expert LEED Consultants."
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
                        title: "LEED Zero Water Certification —",
                        highlightTitle: "An Overview",
                        description: [
                            "LEED Zero Water Certification is provided for buildings involved in the construction sector to evaluate and minimize the use of water, an increasingly scarce resource.",
                            "LEED Zero Water certificate highlights balance between total potable water used, totally recycled water consumed, and the water returned to its original source. This encourages projects to maximize operational efficiency.",
                            "Obtaining a LEED Zero Water Certification helps companies discharge ESG obligations, enjoy augmented resale value, and avail tax benefits."
                        ]
                    }}

                    advantages={{
                        title: "Goals of LEED Zero Water",
                        subtitle: "What it aims to achieve",
                        list: [
                            {
                                title: "Minimize Potable Water",
                                desc: "Reduce or eliminate the use of potable water while conserving water quality and availability."
                            },
                            {
                                title: "Wastewater Management",
                                desc: "Minimize offsite treatment of wastewater and stormwater releasing from the site."
                            },
                            {
                                title: "Onsite Resource Utilization",
                                desc: "Maximize the use of onsite water resources such as rainwater harvesting and match water quality with end-use requirements."
                            }
                        ]
                    }}

                    process={{
                        title: "Step-by-Step Process",
                        subtitle: "To Obtain LEED Zero Water Certificate",
                        steps: [
                            {
                                step: "01",
                                title: "Meet Criteria & Details Check",
                                desc: "Determine eligibility and gather data on potable water consumption over the past 12 months."
                            },
                            {
                                step: "02",
                                title: "Offsite & Onsite Source Details",
                                desc: "Determine total offsite water sources and details of any captured rainwater, runoff, or treated wastewater reused."
                            },
                            {
                                step: "03",
                                title: "Submit Documentation",
                                desc: "Submit all gathered and compiled documents, the application form, and pay the requisite fees to the US Green Building Council."
                            }
                        ]
                    }}

                    features={{
                        title: "Benefits of Certification",
                        subtitle: "Why should businesses secure this certificate",
                        list: [
                            { title: "Environmental Benefits", desc: "Helps enhance environmental sustainability by taking measures to conserve water." },
                            { title: "Tax Benefits", desc: "Avail tax benefits in certain jurisdictions by government incentives." },
                            { title: "ESG Obligations", desc: "Discharge obligations and manage project performance to attract investors." }
                        ]
                    }}

                    eligibility={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "We make technical compliance certifications effortless and convenient.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Expertise in LEED Zero Water Certification processes." },
                            { title: "400+ In-House Professionals", desc: "CAs, CS & LEED Consultants ready to assist." },
                            { title: "Support for Documentation", desc: "We ensure precise documentation and error-free application submittal." },
                            { title: "Data Compilation", desc: "Expert analysis to confirm the volume of water collected and reused meets the net-zero goal." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Clear your doubts about LEED certification"
                    faqs={[
                        {
                            question: "What is LEED Zero Water?",
                            answer: "It recognizes buildings that have achieved a potable water use balance of zero for the last 12 months."
                        },
                        {
                            question: "What is included in the prerequisites of LEED Credits?",
                            answer: "Building projects must meet criteria like reducing potable water use, utilizing alternative water resources, and evaluating wastewater management."
                        },
                        {
                            question: "Who grants the LEED zero water certification?",
                            answer: "This certification is granted by the US Green Building Council (USGBC) via GBCI's review."
                        },
                        {
                            question: "What are the 4 levels of LEED zero certification?",
                            answer: "The 4 levels are LEED Zero Carbon, LEED Zero Energy, LEED Zero Water, and LEED Zero Waste."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default LEEDZeroWaterCertification;

