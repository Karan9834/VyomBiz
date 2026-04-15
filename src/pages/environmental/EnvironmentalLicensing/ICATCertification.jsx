import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ICATCertification = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="iCAT"
                    heroTitleSuffix="Certification"
                    heroDescription="iCAT is facilitating quality services to the industry in sectors of automotive development like Noise Vibration, Powertrain, Component, Tyre and Wheel, EMC, and Passive Safety."
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
                        title: "iCAT Certification —",
                        highlightTitle: "An Overview",
                        description: [
                            "iCAT is India's premier Homologation & Testing Centre developed under NATRiP by the Government of India. It's one of the agencies notified under CMV Rule No. 126 for the issuance of Conformity of Production or COP Certificate and Type Approval Certificate or TAC.",
                            "The headquarter of iCAT or International Centre for Automotive Technology, is located at Manesar in Gurgaon, Haryana. iCAT is considered a world-class automotive Certification provider.",
                            "By obtaining iCAT Certification, you assure the Government and buyers that your vehicle is safe and built with the best materials. It offers validation, testing, and design services to various segments."
                        ]
                    }}

                    advantages={{
                        title: "Supported Industries",
                        subtitle: "Segments evaluated by iCAT",
                        list: [
                            { title: "Automotive", desc: "Includes EVs, 2 Wheelers, 3 Wheelers, 4 Wheelers, trucks, trailers, tractors, etc." },
                            { title: "Railways & Defence", desc: "Testing and validation for specialized applications." },
                            { title: "Consumer Electronics & Aviation", desc: "Quality assurance for lighting, IT products, and aerospace parts." }
                        ]
                    }}

                    process={{
                        title: "iCAT Certifications",
                        subtitle: "Different Appovals available",
                        steps: [
                            {
                                step: "01",
                                title: "iCAT Approval for E-Cycle",
                                desc: "E-Cycle or Electric Cycles are becoming high-selling electric vehicles because of their low price and no need for a driving license."
                            },
                            {
                                step: "02",
                                title: "iCAT for E-Scooty and E-Bike",
                                desc: "Two-wheeler electric scooters and bikes demand the highest level of component validation to ensure safety."
                            },
                            {
                                step: "03",
                                title: "Approval for E-Trucks",
                                desc: "Testing motor vehicles with at least 4 wheels used for carrying goods including LCV, MCV, and HCVs."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "We make technical compliance certifications effortless and convenient.",
                        list: [
                            { title: "10+ Years of Experience", desc: "Expertise in iCAT Certification processes." },
                            { title: "400+ In-House Professionals", desc: "CAs, CS & Lawyers ready to assist." },
                            { title: "99% SLA Delivery", desc: "100% Satisfaction Guaranteed." },
                            { title: "10,000+ Pin Codes", desc: "Network in India with fast processing." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Understanding iCAT Homologation"
                    faqs={[
                        {
                            question: "What is an iCAT Certificate?",
                            answer: "iCAT is India's premier Homologation & Testing centre developed under NATRiP by the Government of India for validating automotive and non-automotive parts."
                        },
                        {
                            question: "What does iCAT stand for?",
                            answer: "iCAT stands for International Centre for Automation Technology."
                        },
                        {
                            question: "Who issues the COP and Type Approval Certificates?",
                            answer: "Agencies like iCAT are notified under CMV Rule No. 126 for the issuance of Conformity of Production (COP) and Type Approval Certificates (TAC)."
                        },
                        {
                            question: "Does iCAT only cover automotive sectors?",
                            answer: "No, iCAT offers services to Railways, Defence, Consumer Electronics, Aviation, and General Lighting as well."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default ICATCertification;

