import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const CarbonCreditAccounting = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Carbon Credit"
                    heroTitleSuffix="Accounting"
                    heroDescription="Align your carbon credit accounting with global sustainability goals. Let our experts simplify the process for carbon credit accounting."
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
                        title: "Carbon Credit Accounting —",
                        highlightTitle: "An Overview",
                        description: [
                            "The concept of carbon credit accounting was introduced to control the pollution emission of greenhouse gases (GHG) in the atmosphere. It refers to the systematic process of measuring, recording, and reporting the amount of greenhouse gases and carbon dioxide (CO2) emissions.",
                            "Carbon credits are certificates awarded for active participation in reducing emissions. The credits, often referred to as carbon allowances, are regarded as permits that allow industries to emit a certain amount of carbon dioxide or other greenhouse gases.",
                            "The number of carbon credits issued to a particular company or organization represents the cap and frame on their emission limit."
                        ]
                    }}

                    advantages={{
                        title: "Methods & Techniques",
                        subtitle: "Under Carbon Credit Accounting",
                        list: [
                            {
                                title: "Emission Inventories & Activity Data",
                                desc: "Compiling detailed data on emissions from various sources and integrating activity data with emission factors to document the amount of carbon released."
                            },
                            {
                                title: "Bottom-Up & Top-Down Approaches",
                                desc: "Assessing emissions at the individual source level versus estimating emissions based on national energy consumption."
                            },
                            {
                                title: "Life Cycle Assessment (LCA) & Remote Sensing",
                                desc: "Evaluating environmental impact throughout a product's life cycle and using satellite data for land-use change monitoring."
                            }
                        ]
                    }}

                    features={{
                        title: "Benefits",
                        subtitle: "Accounting for Carbon Credits",
                        list: [
                            { title: "Mitigating Climate Change", desc: "Incentivizes organizations to invest in emission reduction projects." },
                            { title: "Economic Opportunities", desc: "Enables participation in global carbon markets, attracting investments." },
                            { title: "Target Compliance", desc: "Assists nations tracking progress towards international agreements like the Paris Agreement." },
                            { title: "Transparency & Identification", desc: "Allows organizations to identify emission hotspots and boosts accountability." }
                        ]
                    }}

                    process={{
                        title: "Accounting Frameworks",
                        subtitle: "Standards used in India",
                        steps: [
                            {
                                step: "01",
                                title: "National Action Plan on Climate Change (NAPCC)",
                                desc: "A framework recognizing vulnerability to climate impacts and guiding major carbon-emitting industries."
                            },
                            {
                                step: "02",
                                title: "Greenhouse Gas Protocol (GHG) & ISO 14064",
                                desc: "Measuring and disclosing GHG emissions internationally, combined with the ISO 14064 standard for quantification and reporting removals."
                            },
                            {
                                step: "03",
                                title: "Science-Based Target Initiative (SBTI)",
                                desc: "A clearly defined path for reducing GHG emissions, preventing worst effects of climate change, and ensuring future-proof business growth."
                            }
                        ]
                    }}

                    eligibility={{
                        title: "Why Choose VyomBiz?",
                        subtitle: "We offer effective Carbon Accounting and Reporting Solutions",
                        list: [
                            { title: "10+ Years of Experience", desc: "Expertise in Carbon Credit Accounting." },
                            { title: "Risk Management", desc: "Strategies to mitigate uncertainties in projects like afforestation." },
                            { title: "Carbon Footprint", desc: "Calculation of Carbon Footprint and action plan." },
                            { title: "500+ Legal Experts", desc: "Expert guidance on ESG metrics and CSR policies." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Learn more about Carbon Credits"
                    faqs={[
                        {
                            question: "What is Carbon Credit Accounting?",
                            answer: "It refers to the process of measuring, recording, and reporting the amount of carbon dioxide (CO2) emissions reduced, avoided, or removed from the atmosphere."
                        },
                        {
                            question: "What is the timeline for the Carbon Credit Accounting process?",
                            answer: "Generally, it takes around 6 months to 1 year depending upon factors like type of project, verification standards, and regulatory requirements."
                        },
                        {
                            question: "What's the difference between carbon credits and offsets?",
                            answer: "Carbon credit relates to tradeable units reducing GHG emissions inside markets, whereas an offset refers to compensating for emissions made elsewhere, usually in voluntary markets."
                        },
                        {
                            question: "What standards govern this process?",
                            answer: "Common ones include ISO 14064, Greenhouse Gas Protocol (GHG), and SBTI."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default CarbonCreditAccounting;

