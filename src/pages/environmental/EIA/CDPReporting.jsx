import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const CDPReporting = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="CDP"
                    heroTitleSuffix="Reporting"
                    heroDescription="Looking to enhance your sustainability credentials? Connect with Corpbiz to simplify your CDP reporting, which helps align with global sustainability standards, manage carbon footprints, and build trust with investors."
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
                        title: "CDP Reporting —",
                        highlightTitle: "An Overview",
                        description: [
                            "CDP reporting, which stands for Carbon Disclosure Project Reporting, is a globally recognized process that enables organizations to disclose their environmental data on climate change, water security, and deforestation through the CDP platform.",
                            "In today’s world, the Carbon Disclosure Project reporting plays a critical role in helping organizations to fulfil expectations. It helps companies stay compliant with sustainability regulations and attracts investors who are increasingly focused on climate risks and net-zero commitments.",
                            "Our experts help you gather and validate environmental data, prepare and submit CDP questionnaires, and ensure accuracy for tracking carbon emissions, water usage, and other environmental metrics."
                        ]
                    }}
                    advantages={{
                        title: "Importance of CDP Reporting",
                        subtitle: "Why should companies disclose?",
                        list: [
                            { title: "Investor Engagement", desc: "CDP reporting enables the building of trust and investor engagement by prioritizing sustainable business practices." },
                            { title: "Regulatory Compliance", desc: "Helps companies meet evolving environmental and sustainability disclosure requirements successfully." },
                            { title: "Risk Management", desc: "The annual reporting of the CDP score helps businesses and investors understand and manage environmental risks and opportunities." },
                            { title: "Market Influence", desc: "Businesses that engage in carbon reporting are positioned as leaders in driving positive environmental change." },
                            { title: "Competitive Advantage", desc: "Enhances reputation and strengthens the market position compared to less transparent industry peers." }
                        ]
                    }}
                    eligibility={{
                        title: "Key Focus Areas",
                        subtitle: "CDP's evaluation categories",
                        list: [
                            { title: "Climate Change", desc: "Focuses on greenhouse gas emissions, energy use, climate risks, and opportunities to align with global targets." },
                            { title: "Water Security", desc: "Covers water usage, waste management, risks of scarcity, and business impacts on local water resources." },
                            { title: "Forests & Deforestation", desc: "Assesses the impact of supply chains on deforestation, particularly linked to commodities like timber, palm oil, and soy." },
                            { title: "Plastics", desc: "Focuses on examining environmental challenges posed by plastic use, encouraging circular economy models." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Scope of Emissions",
                        subtitle: "Tracking Greenhouse Gases (GHG)",
                        list: [
                            { title: "Scope 1 Emissions", desc: "Direct emissions from sources that are owned or controlled by the company." },
                            { title: "Scope 2 Emissions", desc: "Indirect emissions covering GHG emissions from the production of purchased electricity, steam, heating, or cooling." },
                            { title: "Scope 3 Emissions", desc: "Other indirect emissions that occur up and down within the company’s extensive value chain." },
                            { title: "Methodologies used", desc: "Documentation of the verification standards utilized to calculate and review greenhouse gas footprint." }
                        ]
                    }}
                    process={{
                        title: "Step-by-Step Reporting",
                        subtitle: "How to complete a CDP Disclosure",
                        steps: [
                            { step: "1", title: "Registration", desc: "Companies must begin by registering on the CDP platform and selecting relevant questionnaires, such as climate change, water security, or forests." },
                            { step: "2", title: "Data Collection", desc: "Identify environmental data scope, involve internal teams, and gather accurate emissions, energy, water, and supply chain data." },
                            { step: "3", title: "Questionnaire Completion", desc: "Complete sector-relevant CDP disclosure forms annually, match disclosures with global standards, and finalize the narrative." },
                            { step: "4", title: "Submission & Scoring", desc: "File through CDP's global platform. Wait to receive your CDP scores (from A to F) based on completeness and transparency." },
                            { step: "5", title: "Use CDP Insights", desc: "Analyze results to identify risks, inform stakeholders, and integrate findings into broader sustainability reports to consistently improve." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries about the Carbon Disclosure Project"
                    faqs={[
                        {
                            question: "What is the difference between CDP Reporting and ESG Reporting?",
                            answer: "CDP focuses primarily on critical environmental issues using standardized, data-driven questionnaires. ESG reporting covers a broader sustainability picture incorporating Social and Governance aspects, often using multiple, less-standardized, and voluntary frameworks."
                        },
                        {
                            question: "What is considered a good CDP Score?",
                            answer: "CDP scores range from A to F. An 'A' indicates environmental leadership, reflecting high transparency, thorough risk management, and concerted action towards climate change. F indicates failure to provide sufficient information."
                        },
                        {
                            question: "How can a business improve its CDP Score?",
                            answer: "By completing all relevant sections thoroughly, setting ambitious net-zero targets, using verified data to establish credibility, integrating climate strategy with corporate governance, and engaging supply chains deeply."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default CDPReporting;

