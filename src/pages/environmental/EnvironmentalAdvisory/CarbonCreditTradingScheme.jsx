import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const CarbonCreditTradingScheme = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Carbon Credit"
                    heroTitleSuffix="Trading Scheme"
                    heroDescription="Maximize profits by turning emissions into financial gains. Optimize Carbon Credit Trading strategies to reduce operational cost."
                    stats={[
                        { count: "43K+", label: "Happy Clients" },
                        { count: "3500+", label: "Expert Advisors" },
                        { count: "50+", label: "Branch Offices" },
                        { count: "4.9", label: "Global Rating" }
                    ]}
                    formTitle="Get Free Expert Consultation"
                />

                <DetailsLayout
                    overview={{
                        title: "Carbon Credit Trading Scheme —",
                        highlightTitle: "An Overview",
                        description: [
                            "On June 26, 2023, the Ministry of Environment, Forests, and Climate Change introduced the draft Green Credit Programme Implementation Rules, and the Ministry of Power unveiled the Carbon Credit Trading Scheme 2023.",
                            "The Bureau of Energy Efficiency (BEE), under the Ministry of Power, is spearheading efforts to reduce greenhouse gas (GHG) emissions.",
                            "Each ton of carbon dioxide (CO2) reduced or avoided is assigned a value, known as a carbon credit. This creates a platform for buying, selling, and trading these credits, supporting the country's climate goals."
                        ]
                    }}

                    advantages={{
                        title: "Carbon Credit Market",
                        subtitle: "Business Opportunities",
                        list: [
                            {
                                title: "Emission Pooling",
                                desc: "It allows businesses to pool their emission reduction efforts for scaling benefits."
                            },
                            {
                                title: "Cost Effectiveness",
                                desc: "Sets clear pricing for Greenhouse Gas Emissions, rewarding sustainable projects."
                            },
                            {
                                title: "Promotes Renewables",
                                desc: "Promotes the usage of renewable energy sources and enhances energy transition efforts."
                            },
                            {
                                title: "Tax Benefit Exporting",
                                desc: "GST on Export of Carbon Credits is exempt, driving further financial incentive."
                            }
                        ]
                    }}

                    process={{
                        title: "Ways to Generate Carbon Credits",
                        subtitle: "Methods for Businesses",
                        steps: [
                            {
                                step: "01",
                                title: "Renewable Energy Projects",
                                desc: "Investing in or developing solar, wind, and hydro projects that replace fossil fuels."
                            },
                            {
                                step: "02",
                                title: "Energy Efficiency Measures",
                                desc: "Updating industrial processes to use less energy and subsequently lower emissions."
                            },
                            {
                                step: "03",
                                title: "Waste-to-energy Projects",
                                desc: "Converting waste materials into usable heat, electricity, or fuel."
                            },
                            {
                                step: "04",
                                title: "Conservation Practices",
                                desc: "Conservation tillage, mulching, crop rotation, and plan vivo standards in agriculture."
                            }
                        ]
                    }}

                    features={{
                        title: "Governing Bodies",
                        subtitle: "For Carbon Credit Schemes",
                        list: [
                            { title: "National Steering Committee", desc: "Oversees the functioning of the Indian Carbon Market (ICM)." },
                            { title: "Bureau of Energy Efficiency", desc: "Plays the role of an administrator granting Carbon Credit Certificates." },
                            { title: "Grid Controller of India", desc: "A registry operator that manages registration and operates the ICM." },
                            { title: "Central Electricity Reg. Commission", desc: "Regulates trading activities on the ICM and prevents fraud." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries regarding Carbon Credits"
                    faqs={[
                        {
                            question: "What is a carbon trading scheme?",
                            answer: "A regulated marketplace to buy and sell credits that allow companies to emit one ton of carbon dioxide."
                        },
                        {
                            question: "Is carbon trading legal in India?",
                            answer: "Yes, it is governed by bodies like the Ministry of Power, BEE, and CERC under the Carbon Credit Trading Scheme 2023."
                        },
                        {
                            question: "Are non-obligated entities permitted to participate?",
                            answer: "Yes, individuals and companies can voluntarily participate to track and certify greenhouse gas emission reductions."
                        },
                        {
                            question: "What happens if obligated businesses fail to meet targets?",
                            answer: "They must compensate by purchasing carbon credit certificates, or face regulatory penalties."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default CarbonCreditTradingScheme;

