import React from 'react';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const ESGStrategies = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Environment, Social and Governance"
                    heroTitleSuffix="(ESG) Strategies"
                    heroDescription="A company that performs on the Environment, Social and Governance (ESG) issues is becoming an increasingly critical performance metric for investors, consumers, and management."
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
                        title: "Environment, Social and Governance (ESG) —",
                        highlightTitle: "An Overview",
                        description: [
                            "The ESG has three broad categories or areas, i.e., Environment, Social, and (Corporate) Governance, of interest for what is termed as Socially Responsible Investors.",
                            "The investors consider the importance of incorporating their values and concerns (mainly the environmental concern) into their investments instead of simply considering the profitability and the risk presented by the investment opportunity.",
                            "The companies should focus on the three Ps to be sustainable and profitable. They are Profit, People and Planet as evolved into the ESG."
                        ]
                    }}

                    advantages={{
                        title: "Steps for creating an ESG strategy",
                        subtitle: "For the business of a company",
                        list: [
                            {
                                title: "Focus on the best strategy",
                                desc: "Initially, the company has to recognise that every business is different to pinpoint the best focus areas."
                            },
                            {
                                title: "Establish the goal",
                                desc: "The establishment of an overall goal from the outset assists in defining the company's strategy and streamlining."
                            },
                            {
                                title: "Conduct a materiality analysis",
                                desc: "It focuses on the issues which the businesses need to prioritise to invest time and resources effectively."
                            },
                            {
                                title: "Use an objective third party",
                                desc: "It is always best to use a professional third party to audit the company's ESG credentials for an unbiased perspective."
                            }
                        ]
                    }}

                    process={{
                        title: "Key ESG Elements",
                        subtitle: "Brief description",
                        steps: [
                            {
                                step: "E",
                                title: "Environment",
                                desc: "Includes the energy a company takes in, waste it discharges, carbon emission, and climate change."
                            },
                            {
                                step: "S",
                                title: "Social",
                                desc: "Addresses the relationship of the company with people, labour relations, diversity, health, and safety."
                            },
                            {
                                step: "G",
                                title: "Governance",
                                desc: "Internal system of practices, controls, tax practices, and procedures the company adopts to govern itself."
                            }
                        ]
                    }}

                    features={{
                        title: "Role of Internal Audit in ESG",
                        subtitle: "Adding value and assurance",
                        list: [
                            { title: "Internal Audit", desc: "Plays a significant role in identifying and establishing a functional ESG control environment." },
                            { title: "Internal Control", desc: "Reassures the achievement of the objectives related to operations, reporting and compliance." },
                            { title: "Governance Oversight", desc: "A good governance structure sees the accuracy of ESG data and the overall implementation." },
                            { title: "Advise & Assurance", desc: "Recommends frameworks to manage risk and reviews reporting metrics for relevancy and accuracy." }
                        ]
                    }}

                    eligibility={{
                        title: "Reporting Frameworks",
                        subtitle: "Frameworks to leverage",
                        list: [
                            { title: "Global Reporting Initiative (GRI)", desc: "Designed for the disclosure of a wide range of the ESG issues." },
                            { title: "SASB Framework", desc: "Narrowly focused on the selected few disclosures relevant to a company's overall sector." },
                            { title: "TCFD", desc: "Task Force on Climate-related Financial Disclosures fixed on climate-related financial risk." },
                            { title: "IIRC Guidelines", desc: "Supports the development of integrated reports on strategy, governance, and performance." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries regarding ESG"
                    faqs={[
                        {
                            question: "What are ESG criteria?",
                            answer: "ESG criteria is a set standard for the behaviour of a company used by socially conscious investors to screen potential investments."
                        },
                        {
                            question: "What does MSCI ESG Rating mean?",
                            answer: "An MSCI ESG Rating is created or designed to measure the resilience of a company to long-term industry material ESG risks."
                        },
                        {
                            question: "Why is ESG important?",
                            answer: "It showcases a company's commitment to sustainability, ethical practices, and responsible governance, which are highly valued by stakeholders."
                        },
                        {
                            question: "What is an ESG Strategy?",
                            answer: "A comprehensive plan that dictates how a business manages its environmental, social, and governance risks and opportunities."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default ESGStrategies;

