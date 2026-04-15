import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const EnvironmentalDueDiligenceServices = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environmental Due"
                    heroTitleSuffix="Diligence Services"
                    heroDescription="The environmental due diligence (EDD) services in India ensure maintaining business compliance related to environmental regulations and sustainable practices."
                    stats={[
                        { count: "43K+", label: "Happy Customers" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Environmental Due Diligence —",
                        highlightTitle: "An Overview",
                        description: [
                            "Environmental Due Diligence (EDD), also termed as corporate sustainability due diligence, is a comprehensive process that encompasses the assessment of a business to evaluate the risks and liabilities it poses to the environment.",
                            "The environmental protection agencies (EPAs) set standards for corporate sustainability due diligence to ensure businesses comply with environmental laws and regulations.",
                            "It further assists in identifying contaminated sites and hazards, calculating the potential impact of these risks on human health and the environment."
                        ]
                    }}

                    advantages={{
                        title: "Benefits of EDD Services",
                        subtitle: "Legal and Compliance Advantages",
                        list: [
                            {
                                title: "Regulatory Compliance",
                                desc: "Assist businesses to comply with all the mandatory environmental regulations and avoid further legal actions."
                            },
                            {
                                title: "Risk Management",
                                desc: "Assist businesses in identifying and addressing potential environmental risks or contaminated liabilities."
                            },
                            {
                                title: "Legal Protection",
                                desc: "Safeguard businesses against liabilities, penalties, and legal actions resulting from non-compliance."
                            },
                            {
                                title: "Boosts Goodwill",
                                desc: "Establishes a company's commitment to fulfilling environmental obligations and promotes health and safety."
                            }
                        ]
                    }}

                    process={{
                        title: "Three Phases of EDD",
                        subtitle: "How It Works",
                        steps: [
                            {
                                step: "Phase 1",
                                title: "Initial Assessment",
                                desc: "Data inspection and site assessment to validate regulatory compliance and identify hazards."
                            },
                            {
                                step: "Phase 2",
                                title: "Investigation",
                                desc: "Examining issues highlighted in Phase 1 and creating an all-inclusive budget report."
                            },
                            {
                                step: "Phase 3",
                                title: "Risk Mitigation",
                                desc: "Strategies created to address risks, rectify soil contamination, and manage water resources safely."
                            }
                        ]
                    }}

                    features={{
                        title: "Key Components",
                        subtitle: "Corporate Sustainability Required",
                        list: [
                            { title: "Environmental Site Assessment", desc: "Evaluating contamination, hazardous waste, and improper management in real estate." },
                            { title: "Environmental Impact", desc: "EIA evaluating effects on air, water, and soil quality over future operations." },
                            { title: "Liability Assessment", desc: "Identifying financial penalties and liabilities arising from non-compliance." },
                            { title: "Regulatory Compliance Review", desc: "Examination of permits and licenses granted under the Water Act, Air Act, etc." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries regarding EDD"
                    faqs={[
                        {
                            question: "What is Environmental due diligence?",
                            answer: "It is a process mandated for businesses involved with maintaining compliance evaluating their impact on the environment, potential risks, and liabilities."
                        },
                        {
                            question: "How long does the EDD process take?",
                            answer: "The process is completed over a series of three phases including data collection and site visits, taking around 30 days to 6 months depending on the project."
                        },
                        {
                            question: "What are the common recognized conditions evaluated?",
                            answer: "Historical gas stations, underground storage tanks, dry-cleaning firms, or industrial plants where chemicals like PCE, PFAs, or PCBs are stored."
                        },
                        {
                            question: "Which laws govern the EDD procedure?",
                            answer: "Key laws include the Environment (Protection) Act 1986, Air and Water Pollution Control Acts, National Green Tribunal Act, and Hazardous Wastes Rules."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default EnvironmentalDueDiligenceServices;

