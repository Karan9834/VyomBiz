import React from 'react';
import docImage from '../../../assets/environmental-doc.png';
import HeroLayout from '../../../components/common/HeroLayout';
import DetailsLayout from '../../../components/common/DetailsLayout';
import FAQLayout from '../../../components/common/FAQLayout';
import ReviewsSection from '../../../components/common/ReviewsSection';

const WildlifeConservationPlan = () => {
    return (
        <div className="bg-[#f8f9fa] min-h-screen relative font-sans">
            <div className="relative z-10 space-y-2 lg:space-y-4">
                <HeroLayout
                    heroTitleMain="Wildlife Conservation"
                    heroTitleSuffix="Plan"
                    heroDescription="Choose Corpbiz for transparent Wildlife Conservation Planning and streamline your Environment Clearance and other approval processes for your project."
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
                        title: "Overview of",
                        highlightTitle: "Wildlife Conservation Plan",
                        description: [
                            "Wildlife Conservation Plan (WCP) or Wildlife Management Plan is required for Biodiversity Management and wildlife protection in and near a project area.",
                            "The plan's main objective is to provide a relatively stress-free habitat for wildlife in the impact area and meet the basic needs of resident wildlife.",
                            "The WCP uses sustainable and scientific management of the area's natural wealth to provide safeguarding measures, reducing resource dependency on forests and eliciting support towards conservation."
                        ]
                    }}
                    advantages={{
                        title: "Need of Wildlife Conservation Planning",
                        subtitle: "Why is it important?",
                        list: [
                            { title: "Habitat Presentation", desc: "Increasing man-animal conflict today is an outcome of fragmentation and deterioration of wildlife habitats. Conservation is necessary to prevent unchecked development." },
                            { title: "Ecosystem Balance", desc: "Disturbances from development activities affect flora and fauna. WCP helps maintain the balance of the natural ecosystem during construction." },
                            { title: "EC Compliance", desc: "Conservation of flora and fauna around the project site (buffer zone) is essential as partial compliance of Environmental Clearance from the MoEF&CC." },
                            { title: "Protected Area Management", desc: "Needed in case the project area falls near Sanctuaries, National Parks, Biosphere Reserves, Wildlife Corridors, or Tiger/Elephant Reserves." }
                        ]
                    }}
                    eligibility={{
                        title: "Impact & Mitigation Strategies",
                        subtitle: "Crucial considerations inside WCP",
                        list: [
                            { title: "Study Area Assessment", desc: "Assessment of the present status of flora and fauna and the habitat in the project area as well as a 10km buffer area." },
                            { title: "Muck-Dump Management", desc: "Technical and managerial interventions for muck-dump restoration, noise, and vibration adjustments." },
                            { title: "Compensatory Afforestation", desc: "Mitigation measures like compensatory afforestation, green shelterbelts, and mitigation for faunal mortality." },
                            { title: "Local Economy Upliftment", desc: "Evaluation of biodiversity values in the study area and generating ways to uplift the local economy sustainably." }
                        ]
                    }}
                    documents={{
                        imageUrl: docImage,
                        title: "Documents & Details Needed",
                        subtitle: "For Application Approval",
                        list: [
                            { title: "Project Highlights", desc: "Name of Project Proponent, Location, Cost, and details of activities to be undertaken." },
                            { title: "Area & Buffer Details", desc: "Specific measurements of the Area of the Project and the 10 km buffer area." },
                            { title: "Sensitive Ecological Zones", desc: "Names of Ecologically sensitive areas and Schedule 1 species for which the WCP is being made." },
                            { title: "Flora and Fauna Lists", desc: "List of Flora and Fauna properly authenticated by the Deputy Conservator of Forest (DCF)." }
                        ]
                    }}
                    process={{
                        title: "Application Approval Process",
                        subtitle: "How to get a WCP approved",
                        steps: [
                            { step: "1", title: "Drafting the Plan", desc: "Draft a comprehensive Wildlife Conservation Plan as per the format detailing project introduction, impact, mitigation strategies, and an executive summary with maps." },
                            { step: "2", title: "Primary Field Survey", desc: "Conduct a primary field survey to include details of flora and fauna for the core and buffer zone indicating Schedule 1 species preservation plans." },
                            { step: "3", title: "Submission to DCF", desc: "The project proponent must submit all the relevant documents to the Deputy Conservator of Forest (DCF) under whom the project area lies." },
                            { step: "4", title: "Authentication & Recommendation", desc: "The documents are authenticated by the concerned DCF and recommended by the concerned CCF (Chief Conservator of Forest)." },
                            { step: "5", title: "Final Approval from CWLW", desc: "Finally, the authenticated comprehensive Wildlife Management Plan is sent to the Chief Wildlife Warden (India) office for the final approval." }
                        ]
                    }}
                />

                <FAQLayout
                    title="Frequently Asked Questions"
                    subtitle="Common queries about Wildlife Conservation Plan"
                    faqs={[
                        {
                            question: "What factors are studied under the Impact Area?",
                            answer: "Factors include the total population of the villages, number of households, sex ratio, literacy rate, marginal workers, and the percentage of scheduled tribe and scheduled caste in the study area."
                        },
                        {
                            question: "What is the importance of WCP for Environmental Clearance?",
                            answer: "The MoEF notification ensures that at the time of environmental clearance, the approval for forest diversion for projects situated beyond 10 km distance from Protected Areas will also be needed. This requires preparation and implementation of a Site-Specific Wildlife Conservation Plan."
                        },
                        {
                            question: "What are some of the main conservation projects initiated by the Indian Government?",
                            answer: "Important projects include Project Tiger, Project Elephant, Sea Turtle Project, Project Vulture, Crocodile Conservation Project, and Project Dolphin."
                        }
                    ]}
                />

                <ReviewsSection />
            </div>
        </div>
    );
};

export default WildlifeConservationPlan;

