import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const HydrogeologicalSurveyReport = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Hydrogeological"
                    heroTitleSuffix="Survey Report"
                    heroDescription="Need a comprehensive Hydrogeological Survey Report for your project? Get accurate groundwater analysis and Corpbiz expert guidance to ensure compliance."
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
                        title: "Hydrogeological Survey Report —",
                        highlightTitle: "An Overview",
                        description: [
                            "A Hydrogeological survey report ensures the investigation of a specific area's subsurface hydrologic and geologic parameters.",
                            "The report entails a survey of the water-bearing levels as well as the filtration capacity of rocks. It plays a crucial role in determining the standardization concerning groundwater operational management structural patterns.",
                            "The survey gathers data to better understand the local geology, geomorphology, drains network, aquifer qualities, and well yield, helping to create comprehensive hydrogeological maps."
                        ]
                    }}
                    advantages={{
                        title: "Importance of the Survey",
                        subtitle: "Why Hydrogeological Reports matter",
                        list: [
                            { title: "Provides Valuable Information", desc: "Details the geological and hydrogeological conditions, including availability, quality, and movement of groundwater." },
                            { title: "Helps in Decision-Making", desc: "Assists in making informed decisions for identifying well construction locations and developing protection strategies." },
                            { title: "Identifies Potential Risks", desc: "Ensures identifying potential risks or threats to groundwater resources, such as contamination and depletion." },
                            { title: "Facilitates Compliance", desc: "Helps meet the regulatory requirements related to groundwater management outlined by the Central Groundwater Board." },
                            { title: "Increased Chances of Success", desc: "Increases the success of borehole drilling by identifying the best locations and design specifications." }
                        ]
                    }}
                    eligibility={{
                        title: "Projects Requiring the Report",
                        subtitle: "Applicability",
                        list: [
                            { title: "Mining Projects", desc: "Coal, Bauxite, Lignite, Copper, Gold, Lead, Zinc, Limestone, and Diamond mining projects." },
                            { title: "Oil & Gas Exploration", desc: "Natural Gas mining and Petroleum (Crude Oil) mining operations." },
                            { title: "Industrial Developments", desc: "Any medium to large-scale industry where operations have an impact on groundwater reserves." },
                            { title: "Infrastructure Planning", desc: "Engineering and operational planning stages needing assessment of water flow and reserves." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Required Information",
                        subtitle: "Documentation for the Survey",
                        list: [
                            { title: "Project Overview", desc: "Goal, scope of the project, and site overview." },
                            { title: "Geologic Details", desc: "Setting geologic and hydrogeologic properties, surface characteristics, and seismic activity." },
                            { title: "Data Collection", desc: "Documentation of field data collection, sources of information, and the impact on groundwater." },
                            { title: "Analysis & Reports", desc: "Methods and reports for laboratory testing, data interpretation, analysis, and figures." },
                            { title: "Conclusions", desc: "Hypotheses, conclusions, recommendations, and report restrictions." }
                        ]
                    }}
                    process={{
                        title: "Steps for Preparing the Report",
                        subtitle: "Survey & Analysis Workflow",
                        steps: [
                            { step: "1", title: "Preliminary Study", desc: "Collecting existing data related to geological, hydrological, and water usage, and reviewing historical reports." },
                            { step: "2", title: "Field Investigation", desc: "Conducting on-site mapping and geophysical surveys to collect data and assess subsurface water-bearing formations." },
                            { step: "3", title: "Laboratory Analysis", desc: "Sending collected field data to laboratories for analysis of pH, salinity, mineral content, porosity, and permeability." },
                            { step: "4", title: "Data Analysis", desc: "Interpreting field and laboratory data to develop a comprehensive understanding of the area's hydrogeological conditions." },
                            { step: "5", title: "Report Preparation", desc: "Drafting a report in compliance with regulatory rules, summarizing findings, and providing actionable recommendations." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries regarding Hydrogeological Surveys"
                    faqs={[
                        {
                            question: "What is the purpose of making a Hydrogeological Survey Report?",
                            answer: "It summarizes geological and hydrogeological features to regulate development activities sustainably, reducing negative hydrological environmental impacts."
                        },
                        {
                            question: "What are the Types of Hydrogeological Surveys in India?",
                            answer: "They are categorized into Small-Scale, Medium-Scale, and Large-Scale surveys based on the level of detail and mapping requirements."
                        },
                        {
                            question: "What is the role of CGWB?",
                            answer: "The Central Ground Water Board (CGWB) defines the standards, regulations, and guidelines for groundwater abstraction, management, and survey reporting."
                        },
                        {
                            question: "What is the timeline for preparing the report?",
                            answer: "Typically, it takes around 3 to 6 months depending on the complexity, location, and specific requirements of the project."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default HydrogeologicalSurveyReport;

